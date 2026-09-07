/* 打磨用：按侧边栏页面名截图（不用记 slide-id）
   用法: node scripts/shot-by-name.mjs <页面名> [输出路径] [端口] */
import puppeteer from 'puppeteer';

const name = process.argv[2];
const out = process.argv[3] || 'tmp/slide-by-name.png';
const port = process.argv[4] || '7467';

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
    || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
});
const page = await browser.newPage();
await page.goto(`http://localhost:${port}`, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => localStorage.removeItem('slide-order-working'));
await new Promise((r) => setTimeout(r, 800));

const clicked = await page.evaluate((target) => {
  const nodes = [...document.querySelectorAll('aside *')];
  const hit = nodes.reverse().find((el) => el.textContent.trim() === target && el.children.length === 0);
  if (!hit) return false;
  const clickable = hit.closest('[role="button"], button, li, div[class*="cursor-pointer"]') || hit;
  clickable.click();
  return true;
}, name);

if (!clicked) {
  console.error(`未在侧边栏找到「${name}」`);
  await browser.close();
  process.exit(1);
}

await new Promise((r) => setTimeout(r, 1500));
await page.addStyleTag({ content: 'aside { display: none !important; }' });
const stage = (await page.$('div[class*="origin-center"]')) || (await page.$('div[class*="shadow-[0_20px_50px"]')) || page;
await stage.screenshot({ path: out });
console.log('saved:', out, 'id=', await page.evaluate(() => sessionStorage.getItem('slide-current-id')));
await browser.close();
