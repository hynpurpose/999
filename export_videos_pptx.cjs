const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const slideOrder = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/slideOrder.json'), 'utf-8')
);

// 7 个包含视频的页面 ID
const VIDEO_SLIDE_IDS = [
  'chapter-company-核心能力-1-2', // Geo One数据系统演示
  'chapter-company-核心能力-1-4', // GEO ONE数据系统后台运行录屏演示
  'chapter-company-核心能力-2-5', // 内容撰写Agent演示
  'chapter-company-核心能力-3-4', // 用户真评系统演示
  'chapter-medical-投放资源-0-6', // 投放资源完整列表
  'chapter-insight-各AI平台现状和发展方向-1-7', // 案例视频展示
  'chapter-qa-标书和验收-1-2', // 造假有多容易
];

const args = process.argv.slice(2);
const getArg = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];

const APP_URL = getArg('url') || 'http://localhost:7894/?export=1';
const OUTPUT = getArg('output') || path.join(__dirname, 'video-slides.pptx');
const OUTPUT_CN = path.join(__dirname, '医疗行业GEO_视频页面合集.pptx');
const SLIDE_W = 1920;
const SLIDE_H = 1080;

function emit(data) {
  process.stdout.write(JSON.stringify(data) + '\n');
}

/* PowerPoint「单击视频时播放」的 timing 节点模板（{SPID} 为视频 pic 的形状 id）。
 * interactiveSeq 监听对视频形状本身的点击 → togglePause；
 * cMediaNode 启动条件为 indefinite（不随翻页/单击序列自动开播） */
const CLICK_TO_PLAY_TIMING_XML =
  '<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>' +
  '<p:seq concurrent="1" nextAc="seek">' +
  '<p:cTn id="2" restart="whenNotActive" fill="hold" evtFilter="cancelBubble" nodeType="interactiveSeq">' +
  '<p:stCondLst><p:cond evt="onClick" delay="0"><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cond></p:stCondLst>' +
  '<p:endSync evt="end" delay="0"><p:rtn val="all"/></p:endSync>' +
  '<p:childTnLst><p:par><p:cTn id="3" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' +
  '<p:par><p:cTn id="4" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' +
  '<p:par><p:cTn id="5" presetID="2" presetClass="mediacall" presetSubtype="0" fill="hold" nodeType="clickEffect">' +
  '<p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' +
  '<p:cmd type="call" cmd="togglePause"><p:cBhvr><p:cTn id="6" dur="1" fill="hold"/><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cBhvr></p:cmd>' +
  '</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst>' +
  '</p:cTn>' +
  '<p:nextCondLst><p:cond evt="onClick" delay="0"><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cond></p:nextCondLst>' +
  '</p:seq>' +
  '<p:video><p:cMediaNode vol="80000"><p:cTn id="7" fill="hold" display="0">' +
  '<p:stCondLst><p:cond delay="indefinite"/></p:stCondLst>' +
  '</p:cTn><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cMediaNode></p:video>' +
  '</p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>';

async function postProcessVideoSlides(pptxPath, adjBySlide) {
  const JSZip = require('jszip');
  const zip = await JSZip.loadAsync(fs.readFileSync(pptxPath));
  for (const [slideNum, adj] of Object.entries(adjBySlide)) {
    const name = `ppt/slides/slide${slideNum}.xml`;
    const file = zip.file(name);
    if (!file) continue;
    let xml = await file.async('string');
    let spid = null;
    xml = xml.replace(/<p:pic>[\s\S]*?<\/p:pic>/g, (pic) => {
      if (!pic.includes('<a:videoFile')) return pic;
      spid = pic.match(/<p:cNvPr id="(\d+)"/)?.[1] || null;
      if (adj > 0) {
        pic = pic.replace(
          '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>',
          `<a:prstGeom prst="roundRect"><a:avLst><a:gd name="adj" fmla="val ${adj}"/></a:avLst></a:prstGeom>`
        );
      }
      return pic;
    });
    if (spid && !xml.includes('<p:timing>')) {
      xml = xml.replace(
        '</p:sld>',
        CLICK_TO_PLAY_TIMING_XML.replace(/\{SPID\}/g, spid) + '</p:sld>'
      );
    }
    if (!xml.includes('</p:timing></p:sld>') || xml.includes('{SPID}')) {
      throw new Error(`slide${slideNum}.xml 后处理结果异常`);
    }
    zip.file(name, xml);
  }
  fs.writeFileSync(
    pptxPath,
    await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })
  );
}

function findChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe'),
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];

  const homeCache = path.join(os.homedir(), '.cache', 'puppeteer', 'chrome');
  if (fs.existsSync(homeCache)) {
    const versions = fs.readdirSync(homeCache).filter((d) => d.startsWith('mac') || d.startsWith('win'));
    for (const v of versions.sort().reverse()) {
      candidates.push(
        path.join(
          homeCache,
          v,
          'chrome-mac-arm64',
          'Google Chrome for Testing.app',
          'Contents',
          'MacOS',
          'Google Chrome for Testing'
        )
      );
      candidates.push(path.join(homeCache, v, 'chrome-win64', 'chrome.exe'));
    }
  }

  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  return undefined;
}

function findFfmpeg() {
  const candidates = [
    process.env.FFMPEG_PATH,
    'C:\\Users\\Administrator\\.33TaiCi\\plugin\\ffmpeg.exe',
    'C:\\Program Files (x86)\\Common Files\\Adobe\\CEP\\extensions\\Aeviewer\\bin\\Win\\ffmpeg.exe',
    'ffmpeg',
  ];
  for (const p of candidates) {
    if (!p) continue;
    if (p === 'ffmpeg') {
      try {
        execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' });
        return 'ffmpeg';
      } catch (_) {}
    } else if (fs.existsSync(p)) {
      return p;
    }
  }
  return null;
}

function even(n) {
  return Math.max(2, 2 * Math.round(n / 2));
}

function outputSize(cssW, cssH) {
  const ar = cssW / cssH;
  if (ar >= 1) {
    const outW = even(Math.min(1920, cssW * 2));
    return { outW, outH: even(outW / ar) };
  }
  const outH = even(Math.min(1920, cssH * 2));
  return { outW: even(outH * ar), outH };
}

/* 把带 LIVE DEMO / 播放键的封面接成视频真正的第一帧（关键帧），
 * 而不是只 overlay 0.1 秒——PowerPoint / Keynote 取预览时经常跳过那一小段。 */
function bakeCoverAsFirstFrame(ffmpegExe, videoPath, coverPng, outMp4, outW, outH) {
  const boxAR = outW / outH;
  const filter = [
    `[0:v]scale=${outW}:${outH}:flags=lanczos,setsar=1,fps=30,format=yuv420p[intro]`,
    `[1:v]crop='min(iw,ih*${boxAR})':'min(ih,iw/${boxAR})',scale=${outW}:${outH}:flags=lanczos,setsar=1,fps=30,format=yuv420p[main]`,
    `[intro][main]concat=n=2:v=1:a=0[vout]`,
  ].join(';');

  execFileSync(
    ffmpegExe,
    [
      '-y',
      '-loop', '1',
      '-framerate', '30',
      '-t', '0.067',
      '-i', coverPng,
      '-i', videoPath,
      '-filter_complex', filter,
      '-map', '[vout]',
      '-map', '1:a?',
      '-c:v', 'libx264',
      '-profile:v', 'high',
      '-level', '4.0',
      '-preset', 'fast',
      '-crf', '20',
      '-force_key_frames', '00:00:00.000',
      '-g', '30',
      '-keyint_min', '1',
      '-c:a', 'aac',
      '-shortest',
      '-pix_fmt', 'yuv420p',
      '-movflags', '+faststart',
      outMp4,
    ],
    { stdio: ['ignore', 'pipe', 'pipe'] }
  );
}

(async () => {
  const ffmpegExe = findFfmpeg();
  if (ffmpegExe) {
    console.log(`[FFmpeg] 发现可用转码器: ${ffmpegExe}`);
  } else {
    console.warn('[FFmpeg] 未找到 ffmpeg，将只设置 PPT 封面（部分播放器仍可能显示视频原始第一帧）');
  }

  const executablePath = findChrome();
  const launchOpts = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  };
  if (executablePath) launchOpts.executablePath = executablePath;

  let browser;
  try {
    browser = await puppeteer.launch(launchOpts);
  } catch (err) {
    emit({ type: 'error', message: `无法启动浏览器: ${err.message}` });
    process.exit(1);
  }

  try {
    const page = await browser.newPage();
    await page.setViewport({
      width: SLIDE_W + 128,
      height: SLIDE_H + 128,
      deviceScaleFactor: 2,
    });

    await page.goto(APP_URL, { waitUntil: 'networkidle0', timeout: 30000 });

    await page.addStyleTag({
      content: `
        aside,
        button[title="打开目录"],
        button[title="全屏演示"],
        button[title="上一个版本"],
        button[title="下一个版本"],
        button[title^="版本 "],
        button[title="单击选中文字 · 双击画面也可直接进入编辑"],
        div.pointer-events-none.opacity-20,
        .export-hide,
        .fixed.z-\\[90\\],
        .fixed.z-\\[95\\],
        .fixed.z-\\[100\\],
        .fixed.z-\\[110\\] {
          display: none !important;
        }
        video::-webkit-media-controls,
        video::-webkit-media-controls-enclosure {
          display: none !important;
        }
        .bg-zinc-600 {
          padding: 0 !important;
          background-color: black !important;
        }
        div[style*="1920"] {
          zoom: 1 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          width: 1920px !important;
          height: 1080px !important;
        }
      `,
    });

    await new Promise((r) => setTimeout(r, 1500));
    await page.waitForFunction(() => window.__exportApi, { timeout: 20000 });

    const liveOrder = await page.evaluate(() =>
      typeof window.__exportApi.getOrder === 'function' ? window.__exportApi.getOrder() : null
    );
    const activeOrder = Array.isArray(liveOrder) && liveOrder.length > 0 ? liveOrder : slideOrder;

    const targetSlides = [];
    for (const vid of VIDEO_SLIDE_IDS) {
      const idx = activeOrder.indexOf(vid);
      if (idx !== -1) {
        targetSlides.push({ id: vid, index: idx });
      } else {
        emit({ type: 'warn', message: `顺序中未找到 ${vid}` });
      }
    }

    emit({ type: 'start', total: targetSlides.length, message: `共筛选出 ${targetSlides.length} 个视频页面` });

    const screenshotsDir = path.join(__dirname, 'export-screenshots-videos');
    fs.mkdirSync(screenshotsDir, { recursive: true });

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';

    const videoAdjBySlide = {};
    let pptSlideNum = 0;
    let totalVideos = 0;

    async function waitForAssets() {
      await page.evaluate(async () => {
        const root = document.querySelector('div[style*="width: 1920px"]');
        if (!root) return;
        const imgs = [...root.querySelectorAll('img')];
        await Promise.all(
          imgs.map((img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((res) => {
                  img.addEventListener('load', res, { once: true });
                  img.addEventListener('error', res, { once: true });
                })
          )
        );
        const videos = [...root.querySelectorAll('video')];
        await Promise.all(
          videos.map((video) => {
            if (video.readyState >= 2) return Promise.resolve();
            return new Promise((res) => {
              video.addEventListener('loadeddata', res, { once: true });
              video.addEventListener('error', res, { once: true });
              setTimeout(res, 2500);
            });
          })
        );
        videos.forEach((video) => {
          try {
            video.pause();
            video.currentTime = 0;
            video.controls = false;
            video.removeAttribute('controls');
          } catch (_) {}
        });
      });
      await new Promise((r) => setTimeout(r, 700));
    }

    async function getSlideEl() {
      for (let attempt = 0; attempt < 8; attempt++) {
        const el = await page.$('div[style*="width: 1920px"]');
        if (el) return el;
        await new Promise((r) => setTimeout(r, 250));
      }
      return null;
    }

    /* 取「视频舞台」：从 <video> 往上走到仍与视频同尺寸的祖先，
     * 这样 LIVE DEMO 角标（和视频同级的 sibling）会被算进封面。 */
    async function getVideoStage() {
      return page.evaluate(() => {
        const root = document.querySelector('div[style*="width: 1920px"]');
        const video = root && root.querySelector('video');
        if (!video || video.style.display === 'none') return null;

        let el = video;
        while (el.parentElement && el.parentElement !== root) {
          const parent = el.parentElement;
          const er = el.getBoundingClientRect();
          const pr = parent.getBoundingClientRect();
          if (Math.abs(pr.width - er.width) <= 8 && Math.abs(pr.height - er.height) <= 8) {
            el = parent;
          } else {
            break;
          }
        }

        const rootRect = root.getBoundingClientRect();
        const rect = el.getBoundingClientRect();
        const radius =
          parseFloat(getComputedStyle(el).borderRadius) ||
          parseFloat(getComputedStyle(video.parentElement).borderRadius) ||
          0;

        el.setAttribute('data-video-stage', '1');
        root.querySelectorAll('[data-video-stage="1"]').forEach((node) => {
          if (node !== el) node.removeAttribute('data-video-stage');
        });

        return {
          src: video.getAttribute('src') || '',
          x: (rect.left - rootRect.left) / rootRect.width,
          y: (rect.top - rootRect.top) / rootRect.height,
          w: rect.width / rootRect.width,
          h: rect.height / rootRect.height,
          radiusPx: radius,
          cssW: rect.width,
          cssH: rect.height,
          adj: Math.round((radius / Math.min(rect.width, rect.height)) * 100000),
        };
      });
    }

    for (let t = 0; t < targetSlides.length; t++) {
      const { id: label, index: globalIdx } = targetSlides[t];

      await page.evaluate((idx) => window.__exportApi.goTo(idx), globalIdx);
      try {
        await page.waitForFunction(
          (expectedId) => window.__exportApi?.getState()?.id === expectedId,
          { timeout: 20000 },
          label
        );
      } catch (err) {
        emit({ type: 'error', message: `跳转到 ${label} 失败: ${err.message}` });
        throw err;
      }

      emit({
        type: 'progress',
        current: t + 1,
        total: targetSlides.length,
        slide: label,
      });

      await waitForAssets();
      const slideEl = await getSlideEl();
      if (!slideEl) {
        emit({ type: 'warn', message: `未找到画布，跳过 ${label}` });
        continue;
      }

      const imgPath = path.join(
        screenshotsDir,
        `slide-${String(t + 1).padStart(2, '0')}-${label}.png`
      );
      await slideEl.screenshot({ path: imgPath, type: 'png' });

      pptSlideNum += 1;
      const slide = pptx.addSlide();
      slide.addImage({ path: imgPath, x: 0, y: 0, w: '100%', h: '100%' });

      const videoInfo = await getVideoStage();
      const videoPath =
        videoInfo && videoInfo.src.startsWith('/')
          ? path.join(__dirname, 'public', videoInfo.src)
          : null;

      if (videoInfo && !(videoPath && fs.existsSync(videoPath))) {
        emit({ type: 'warn', message: `${label}: 找到 video 但文件不存在 ${videoInfo.src}` });
      }

      if (videoPath && fs.existsSync(videoPath)) {
        totalVideos += 1;
        emit({ type: 'info', message: `${label}: 嵌入视频 ${videoInfo.src}` });

        const coverPng = path.join(screenshotsDir, `video-cover-${t + 1}.png`);
        const stageEl = await page.$('[data-video-stage="1"]');
        if (stageEl) {
          await stageEl.screenshot({ path: coverPng, type: 'png' });
        } else {
          fs.copyFileSync(imgPath, coverPng);
        }

        const coverDataUrl = `data:image/png;base64,${fs.readFileSync(coverPng).toString('base64')}`;
        const { outW, outH } = outputSize(videoInfo.cssW, videoInfo.cssH);

        const bakedMp4 = path.join(screenshotsDir, `video-baked-${t + 1}.mp4`);
        let mediaPath = videoPath;
        if (fs.existsSync(bakedMp4) && fs.statSync(bakedMp4).size > 1024) {
          mediaPath = bakedMp4;
          emit({ type: 'info', message: `${label}: 复用已烘焙视频` });
        } else if (ffmpegExe) {
          try {
            bakeCoverAsFirstFrame(ffmpegExe, videoPath, coverPng, bakedMp4, outW, outH);
            if (fs.existsSync(bakedMp4) && fs.statSync(bakedMp4).size > 1024) {
              mediaPath = bakedMp4;
              emit({
                type: 'info',
                message: `${label}: 已把封面烧进视频第一帧 ${outW}x${outH}`,
              });
            } else {
              emit({ type: 'warn', message: `${label}: 转码产出异常，回退原视频` });
            }
          } catch (err) {
            const detail = (err.stderr && err.stderr.toString()) || err.message;
            emit({ type: 'warn', message: `${label}: FFmpeg 失败，回退原视频: ${detail.slice(0, 400)}` });
          }
        }

        slide.addMedia({
          type: 'video',
          path: mediaPath,
          cover: coverDataUrl,
          x: videoInfo.x * 10,
          y: videoInfo.y * 5.625,
          w: videoInfo.w * 10,
          h: videoInfo.h * 5.625,
        });
        videoAdjBySlide[pptSlideNum] = videoInfo.adj;
      }
    }

    await pptx.writeFile({ fileName: OUTPUT });
    if (Object.keys(videoAdjBySlide).length > 0) {
      await postProcessVideoSlides(OUTPUT, videoAdjBySlide);
    }
    if (OUTPUT !== OUTPUT_CN) {
      try {
        fs.copyFileSync(OUTPUT, OUTPUT_CN);
      } catch (err) {
        emit({ type: 'warn', message: `无法覆盖中文文件名（可能被 PowerPoint 占用）: ${err.message}` });
      }
    }
    emit({
      type: 'done',
      output: OUTPUT,
      copy: OUTPUT_CN,
      videos: totalVideos,
      slides: pptSlideNum,
      message: `导出完成：共 ${pptSlideNum} 页视频幻灯片，嵌入 ${totalVideos} 个视频`,
    });

    await browser.close();
  } catch (err) {
    emit({ type: 'error', message: err.message });
    try {
      await browser.close();
    } catch (_) {}
    process.exit(1);
  }
})();
