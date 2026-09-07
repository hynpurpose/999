import puppeteer from 'puppeteer';
import fs from 'fs';

const OUT_DIR = './export-screenshots';
const URL = 'http://localhost:7467';
const COUNT = parseInt(process.argv[2] || '13', 10);

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  defaultViewport: { width: 2200, height: 1400, deviceScaleFactor: 1 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('[page error]', e.message));

await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
await page.addStyleTag({
  content: 'aside { display: none !important; } .export-hide { display: none !important; } .flex-1.relative.overflow-hidden > .absolute { display: none !important; }',
});
await new Promise((r) => setTimeout(r, 1500));

for (let i = 0; i < COUNT; i++) {
  await new Promise((r) => setTimeout(r, 600));
  const el = await page.$('.origin-center');
  if (!el) break;
  await page.evaluate(() => {
    document.querySelector('.origin-center').style.zoom = '1';
  });
  await new Promise((r) => setTimeout(r, 200));
  await el.screenshot({ path: `${OUT_DIR}/slide_${String(i + 1).padStart(2, '0')}.png` });
  await page.evaluate(() => {
    document.querySelector('.origin-center').style.zoom = '';
  });
  await page.keyboard.press('ArrowRight');
}

await browser.close();
console.log('done');
