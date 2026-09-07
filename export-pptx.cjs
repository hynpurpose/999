const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const slideOrder = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/slideOrder.json'), 'utf-8')
);

const args = process.argv.slice(2);
const getArg = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];

const APP_URL = getArg('url') || 'http://localhost:7894/?export=1';
const OUTPUT = getArg('output') || path.join(__dirname, 'geo-guide.pptx');
const OUTPUT_CN = path.join(__dirname, '医疗行业GEO全景指南.pptx');
const CUSTOM_OUTPUT = Boolean(getArg('output'));
const SLIDE_W = 1920;
const SLIDE_H = 1080;

// --pages=8 或 --pages=8-10：只导出指定页码范围（1 起始）
// --ids=id1,id2：只导出指定 slide id（顺序按参数）
const PAGES = getArg('pages');
const onlyIds = getArg('ids')
  ? getArg('ids').split(',').map((s) => s.trim()).filter(Boolean)
  : null;
let startIdx = 0;
let endIdx = slideOrder.length - 1;
if (PAGES) {
  const [s, e] = PAGES.split('-').map(Number);
  startIdx = Math.max(0, (s || 1) - 1);
  endIdx = Math.min(slideOrder.length - 1, (e || s || slideOrder.length) - 1);
}

function resolveExportIndices(order) {
  if (onlyIds) {
    const missing = onlyIds.filter((id) => !order.includes(id));
    if (missing.length) {
      throw new Error(`找不到这些页: ${missing.join(', ')}`);
    }
    return onlyIds.map((id) => order.indexOf(id));
  }
  const indices = [];
  for (let i = startIdx; i <= endIdx; i++) indices.push(i);
  return indices;
}

let exportIndices = resolveExportIndices(slideOrder);

function emit(data) {
  process.stdout.write(JSON.stringify(data) + '\n');
}

/* PowerPoint「单击视频时播放」的 timing 节点模板（{SPID} 为视频 pic 的形状 id）。
 * 结构与 PowerPoint 手动插入视频并设为“单击时”生成的 XML 一致：
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

/* 后处理含视频的幻灯片：
 * 1. 视频 pic 的矩形几何改成圆角矩形（封面图与播放画面共用同一形状）
 * 2. 注入「单击时播放」timing：只有点视频本身才播放，翻页/普通单击不触发 */
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

const BAKED_BY_BASENAME = {
  'geo-one-demo': 'video-baked-1.mp4',
  'geo-monitor-demo': 'video-baked-2.mp4',
  'content-agent-demo': 'video-baked-3.mp4',
  'dazhong-zhenping-demo': 'video-baked-4.mp4',
  'delivery-resources': 'video-baked-5.mp4',
  'douyin-case': 'video-baked-6.mp4',
  'geo-test-difference': 'video-baked-7.mp4',
};

function findBakedVideo(src) {
  const base = path.basename(src, path.extname(src));
  const sourcePath = src.startsWith('/')
    ? path.join(__dirname, 'public', src)
    : path.join(__dirname, 'public', 'videos', path.basename(src));
  const sourceMtime = fs.existsSync(sourcePath) ? fs.statSync(sourcePath).mtimeMs : 0;

  const candidates = [
    path.join(__dirname, 'export-screenshots', `video-baked-${base}.mp4`),
  ];
  const mapped = BAKED_BY_BASENAME[base];
  if (mapped) {
    candidates.push(path.join(__dirname, 'export-screenshots-videos', mapped));
  }

  for (const p of candidates) {
    if (!fs.existsSync(p) || fs.statSync(p).size <= 1024) continue;
    if (sourceMtime && fs.statSync(p).mtimeMs < sourceMtime) continue;
    return p;
  }
  return null;
}

(async () => {
  let totalSlides = exportIndices.length;
  emit({ type: 'start', total: totalSlides });

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

    const startSlideId = onlyIds ? onlyIds[0] : slideOrder[exportIndices[0]];
    await page.evaluateOnNewDocument((slideId) => {
      sessionStorage.setItem('slide-current-id', slideId);
    }, startSlideId);
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

    // 以页面实际顺序为准（config 新增页会在运行时插入），避免 slideOrder.json 落后导致漏页/对不上 ID
    const liveOrder = await page.evaluate(() =>
      typeof window.__exportApi.getOrder === 'function' ? window.__exportApi.getOrder() : null
    );
    if (Array.isArray(liveOrder) && liveOrder.length > 0) {
      slideOrder.length = 0;
      slideOrder.push(...liveOrder);
      if (!PAGES && !onlyIds) {
        startIdx = 0;
        endIdx = slideOrder.length - 1;
      } else if (PAGES) {
        endIdx = Math.min(slideOrder.length - 1, endIdx);
      }
      exportIndices = resolveExportIndices(slideOrder);
      totalSlides = exportIndices.length;
      emit({ type: 'start', total: totalSlides, message: `使用页面实际顺序，共 ${slideOrder.length} 页` });
    }

    const screenshotsDir = path.join(__dirname, 'export-screenshots');
    fs.mkdirSync(screenshotsDir, { recursive: true });

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';

    const videoAdjBySlide = {};
    let pptSlideNum = 0;
    let totalLinks = 0;
    let totalVideos = 0;

    async function waitForAssets() {
      await page.evaluate(async () => {
        const root = document.querySelector('div[style*="width: 1920px"]');
        if (!root) return;
        const imgs = [...root.querySelectorAll('img')];
        await Promise.all(
          imgs.map(
            (img) =>
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
      await new Promise((r) => setTimeout(r, 400));
    }

    async function getSlideEl() {
      for (let attempt = 0; attempt < 8; attempt++) {
        const el = await page.$('div[style*="width: 1920px"]');
        if (el) return el;
        await new Promise((r) => setTimeout(r, 250));
      }
      return null;
    }

    let progressCurrent = 0;
    for (const i of exportIndices) {
      const label = slideOrder[i];

      await page.evaluate((idx) => window.__exportApi.goTo(idx), i);
      try {
        await page.waitForFunction(
          (expectedId) => window.__exportApi?.getState()?.id === expectedId,
          { timeout: 20000 },
          label
        );
      } catch (err) {
        const actual = await page.evaluate(() => window.__exportApi?.getState()?.id || '');
        emit({
          type: 'error',
          message: `跳转到 ${label} 失败（实际 ${actual || '未知'}）: ${err.message}`,
        });
        throw err;
      }

      const variantCount = await page.evaluate(
        () => window.__exportApi.getState().variantCount || 1
      );

      for (let v = 0; v < variantCount; v++) {
        if (v > 0) {
          await page.evaluate((idx) => window.__exportApi.setVariant(idx), v);
          await page.waitForFunction(
            (expected) => window.__exportApi?.getState()?.variantIndex === expected,
            { timeout: 10000 },
            v
          );
        }

        const slideLabel = variantCount > 1 ? `${label}#v${v + 1}` : label;
        progressCurrent += 1;
        emit({
          type: 'progress',
          current: progressCurrent,
          total: totalSlides,
          slide: slideLabel,
        });

        await waitForAssets();
        const slideEl = await getSlideEl();
        if (!slideEl) {
          emit({ type: 'warn', message: `未找到画布，跳过 ${slideLabel}` });
          continue;
        }
        const imgPath = path.join(
          screenshotsDir,
          `slide-${String(i).padStart(3, '0')}-v${v}.png`
        );
        await slideEl.screenshot({ path: imgPath, type: 'png' });

        pptSlideNum += 1;
        const slide = pptx.addSlide();
        slide.addImage({ path: imgPath, x: 0, y: 0, w: '100%', h: '100%' });

        // 页面里的 <a href>：用透明形状覆盖，保证 PPT 里超链接可点击
        const linkInfos = await page.evaluate(() => {
          const root = document.querySelector('div[style*="width: 1920px"]');
          if (!root) return [];
          const rootRect = root.getBoundingClientRect();
          const links = [];
          for (const a of root.querySelectorAll('a[href]')) {
            const href = (a.getAttribute('href') || '').trim();
            if (!href || href.startsWith('#') || href.startsWith('javascript:')) continue;
            const rect = a.getBoundingClientRect();
            if (rect.width < 2 || rect.height < 2) continue;
            // 相对路径补成绝对 URL（导出后仍可打开）
            let url = href;
            try {
              url = new URL(href, window.location.origin).href;
            } catch (_) {}
            links.push({
              url,
              x: (rect.left - rootRect.left) / rootRect.width,
              y: (rect.top - rootRect.top) / rootRect.height,
              w: rect.width / rootRect.width,
              h: rect.height / rootRect.height,
            });
          }
          return links;
        });
        if (linkInfos.length > 0) {
          totalLinks += linkInfos.length;
          emit({
            type: 'info',
            message: `${slideLabel}: ${linkInfos.length} 个超链接`,
          });
        }
        for (const link of linkInfos) {
          slide.addShape(pptx.ShapeType.rect, {
            x: link.x * 10,
            y: link.y * 5.625,
            w: Math.max(link.w * 10, 0.15),
            h: Math.max(link.h * 5.625, 0.12),
            fill: { type: 'solid', color: 'FFFFFF', transparency: 99 },
            line: { color: 'FFFFFF', transparency: 100 },
            hyperlink: { url: link.url },
          });
        }

        const videoInfo = await page.evaluate(() => {
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

        const videoPath =
          videoInfo && videoInfo.src.startsWith('/')
            ? path.join(__dirname, 'public', videoInfo.src)
            : null;

        if (videoInfo && !(videoPath && fs.existsSync(videoPath))) {
          emit({
            type: 'warn',
            message: `${slideLabel}: 找到 video 但文件不存在 ${videoInfo.src}`,
          });
        }

        if (videoPath && fs.existsSync(videoPath)) {
          totalVideos += 1;
          emit({
            type: 'info',
            message: `${slideLabel}: 嵌入视频 ${videoInfo.src}`,
          });

          const coverPng = path.join(screenshotsDir, `video-cover-${i}-v${v}.png`);
          const stageEl = await page.$('[data-video-stage="1"]');
          if (stageEl) {
            await stageEl.screenshot({ path: coverPng, type: 'png' });
          } else {
            fs.copyFileSync(imgPath, coverPng);
          }
          const coverDataUrl = `data:image/png;base64,${fs.readFileSync(coverPng).toString('base64')}`;

          let mediaPath = findBakedVideo(videoInfo.src);
          if (mediaPath) {
            emit({ type: 'info', message: `${slideLabel}: 复用已烘焙视频` });
          } else {
            mediaPath = videoPath;
            const ffmpegExe = findFfmpeg();
            if (ffmpegExe) {
              try {
                const { outW, outH } = outputSize(videoInfo.cssW, videoInfo.cssH);
                const bakedMp4 = path.join(
                  screenshotsDir,
                  `video-baked-${path.basename(videoInfo.src, path.extname(videoInfo.src))}.mp4`
                );
                bakeCoverAsFirstFrame(ffmpegExe, videoPath, coverPng, bakedMp4, outW, outH);
                if (fs.existsSync(bakedMp4) && fs.statSync(bakedMp4).size > 1024) {
                  mediaPath = bakedMp4;
                  emit({
                    type: 'info',
                    message: `${slideLabel}: 已把封面烧进视频第一帧 ${outW}x${outH}`,
                  });
                }
              } catch (err) {
                emit({
                  type: 'warn',
                  message: `${slideLabel}: FFmpeg 失败，回退原视频: ${err.message}`,
                });
              }
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
    }

    await pptx.writeFile({ fileName: OUTPUT });
    if (Object.keys(videoAdjBySlide).length > 0) {
      await postProcessVideoSlides(OUTPUT, videoAdjBySlide);
    }
    if (!CUSTOM_OUTPUT && OUTPUT !== OUTPUT_CN) {
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
      links: totalLinks,
      videos: totalVideos,
      message: `导出完成：${pptSlideNum} 页，超链接 ${totalLinks} 个，视频 ${totalVideos} 个`,
    });

    await browser.close();
  } catch (err) {
    emit({ type: 'error', message: err.message });
    try { await browser.close(); } catch (_) {}
    process.exit(1);
  }
})();
