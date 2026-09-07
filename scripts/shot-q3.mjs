/* 打磨用：批量截 Q3「标书和验收」章节页
   用法: node scripts/shot-q3.mjs [端口] */
import fs from 'node:fs';
import puppeteer from 'puppeteer';

const port = process.argv[2] || '7894';
const OUT_DIR = 'tmp/q3';
const NAMES = ['标书怎么写', '标书示意', '验收怎么设计', '数据怎么验真', '造假有多容易'];

fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath:
    process.env.PUPPETEER_EXECUTABLE_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
});
const page = await browser.newPage();
await page.goto(`http://localhost:${port}`, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => localStorage.removeItem('slide-order-working'));
await new Promise((r) => setTimeout(r, 1000));

for (const [i, name] of NAMES.entries()) {
  const clicked = await page.evaluate((target) => {
    const nodes = [...document.querySelectorAll('aside *')];
    const hit = nodes.reverse().find((el) => el.textContent.trim() === target && el.children.length === 0);
    if (!hit) return false;
    (hit.closest('[role="button"], button, li, div[class*="cursor-pointer"]') || hit).click();
    return true;
  }, name);

  if (!clicked) {
    console.error(`MISS  ${name}`);
    continue;
  }

  await new Promise((r) => setTimeout(r, 1400));
  await page.addStyleTag({ content: 'aside { display: none !important; }' });
  const stage =
    (await page.$('div[class*="origin-center"]')) || (await page.$('div[class*="shadow-[0_20px_50px"]')) || page;
  const out = `${OUT_DIR}/${String(i + 1).padStart(2, '0')}-${name}.png`;
  await stage.screenshot({ path: out });
  console.log(`OK    ${out}`);
}

await browser.close();
