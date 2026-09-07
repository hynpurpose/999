/* 打磨用：一次截多页，复用同一个浏览器
   用法: node scripts/shot-many.mjs <输出目录> <端口> <slide-id...> */
import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';

const outDir = process.argv[2];
const port = process.argv[3];
const ids = process.argv.slice(4);

fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
    || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
});
const page = await browser.newPage();
await page.goto(`http://localhost:${port}`, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => localStorage.removeItem('slide-order-working'));

for (const id of ids) {
  await page.evaluate((slideId) => sessionStorage.setItem('slide-current-id', slideId), id);
  await page.reload({ waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1200));
  await page.addStyleTag({ content: 'aside { display: none !important; }' });
  const stage = (await page.$('div[class*="origin-center"]')) || page;
  const out = path.join(outDir, `${id}.png`);
  await stage.screenshot({ path: out });
  console.log('saved:', out);
}

await browser.close();
