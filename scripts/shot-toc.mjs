/* 目录页打磨用：截取分目录页的每个版本
   用法: node scripts/shot-toc.mjs <输出目录> <端口> <slide-id> */
import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';

const outDir = process.argv[2];
const port = process.argv[3];
const slideId = process.argv[4];

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
await page.evaluate((id) => sessionStorage.setItem('slide-current-id', id), slideId);
await page.reload({ waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 1200));
await page.addStyleTag({ content: 'aside { display: none !important; }' });

await page.evaluate(() => {
  const style = document.createElement('style');
  style.id = 'shot-hide';
  style.textContent = '.export-hide { display: none !important; }';
  style.disabled = true;
  document.head.appendChild(style);
});

const setHidden = (hidden) =>
  page.evaluate((h) => {
    document.getElementById('shot-hide').disabled = !h;
  }, hidden);

const count = (await page.$$('button[title^="版本"]')).length || 1;

for (let i = 0; i < count; i++) {
  await page.evaluate((idx) => {
    const btns = document.querySelectorAll('button[title^="版本"]');
    if (btns[idx]) btns[idx].click();
  }, i);
  await new Promise((r) => setTimeout(r, 700));

  await setHidden(true);
  const stage = await page.$('div[style*="1920"]');
  const out = path.join(outDir, `${slideId}-v${i + 1}.png`);
  await (stage || page).screenshot({ path: out });
  console.log('saved:', out);
  await setHidden(false);
}

await browser.close();
