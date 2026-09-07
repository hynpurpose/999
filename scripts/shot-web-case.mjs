/* 截取桃李官网诊断案例的原始页面，作为合并页的缩略图素材。
   截图存进 public/web-case/，由 pages/website/Page_WebCase_*.jsx 引用。

   注意：SHOTS 里的 slide id 必须还挂在 slideConfig 上才能截到。
   诊断报告那 18 页已经被合并页取代、从 config 摘掉了（组件文件仍在 pages/website/），
   要重截这批图得先把它们临时挂回 slideConfig。

   用法: node scripts/shot-web-case.mjs [端口] */
import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';

const port = process.argv[2] || '7894';
const outDir = path.resolve('public/web-case');
const CH = 'chapter-qa-官网对GEO建设是否重要';

/* [slide id, 输出文件名] */
const SHOTS = [
  // ——— 瑞幸标杆案例的四个亮点页 ———
  [`${CH}-1-8`, 'luckin-robots'],
  [`${CH}-1-9`, 'luckin-products'],
  [`${CH}-1-10`, 'luckin-faq'],
  [`${CH}-1-11`, 'luckin-open'],

  // ——— 诊断报告 18 页（已从 config 摘掉，需要时挂回来再放开） ———
  // [`${CH}-1-0`,  'criteria'],
  // [`${CH}-1-1`,  'assessment'],
  // [`${CH}-1-2`,  'psi-desktop'],
  // [`${CH}-1-3`,  'psi-mobile'],
  // [`${CH}-1-4`,  'arch-result'],
  // [`${CH}-1-5`,  'arch-issue-structure'],
  // [`${CH}-1-6`,  'arch-issue-heading'],
  // [`${CH}-1-7`,  'arch-issue-robots'],
  // [`${CH}-1-8`,  'arch-issue-sitemap'],
  // [`${CH}-1-9`,  'arch-issue-schema'],
  // [`${CH}-1-10`, 'arch-competitor'],
  // [`${CH}-1-11`, 'content-result'],
  // [`${CH}-1-12`, 'content-issue-product'],
  // [`${CH}-1-13`, 'content-issue-aftersales'],
  // [`${CH}-1-14`, 'content-issue-usecase'],
  // [`${CH}-1-15`, 'content-issue-faq'],
  // [`${CH}-1-16`, 'content-issue-ops'],
  // [`${CH}-1-17`, 'content-competitor'],
];

fs.mkdirSync(outDir, { recursive: true });

/* 视口比画布大 64px（SlideContainer 的留白），缩放正好为 1，截出原生 1920×1080 */
const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
    || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  defaultViewport: { width: 1984, height: 1144, deviceScaleFactor: 1 },
});
const page = await browser.newPage();
await page.goto(`http://localhost:${port}/?export=1`, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => localStorage.removeItem('slide-order-working'));

/* 缩略图里不需要本册的章节导航条和 logo，去掉后画面更干净 */
const HIDE_CHROME = `
  aside, .export-hide { display: none !important; }
  [style*="top: 36px"][style*="left: 40px"] { display: none !important; }
  img[src="/logo.png"] { display: none !important; }
`;

for (const [id, name] of SHOTS) {
  await page.evaluate((slideId) => sessionStorage.setItem('slide-current-id', slideId), id);
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1400));
  await page.addStyleTag({ content: HIDE_CHROME });
  const stage = await page.$('div[class*="shadow-[0_20px_50px"]');
  const out = path.join(outDir, `${name}.png`);
  await stage.screenshot({ path: out });
  console.log('saved:', name);
}

await browser.close();
