import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../title-preview');
const SLIDE_URL = 'http://localhost:4466';
const SLIDE_INDEX = 2; // 第三页（chapter-0-cover）

const variants = [
  { label: 'up-40px', offsetPx: 40, desc: '大标题上移 40px' },
  { label: 'up-80px', offsetPx: 80, desc: '大标题上移 80px' },
];

async function gotoChapterCover(page) {
  await page.evaluate(() => {
    sessionStorage.setItem('slide-current-id', 'chapter-0-cover');
  });
  await page.reload({ waitUntil: 'networkidle2' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1500));
}

async function captureVariant(page, offsetPx, outputPath) {
  await page.evaluate((px) => {
    const h1 = document.querySelector('h1');
    if (h1) {
      const currentBottom = parseInt(h1.style.bottom || '500', 10);
      h1.style.bottom = `${currentBottom + px}px`;
    }
  }, offsetPx);

  await new Promise((r) => setTimeout(r, 400));

  const slideEl = await page.$('.bg-white.overflow-hidden');
  if (slideEl) {
    await slideEl.screenshot({ path: outputPath });
  } else {
    await page.screenshot({ path: outputPath });
  }
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    channel: 'chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
    defaultViewport: { width: 1984, height: 1144, deviceScaleFactor: 2 },
  });

  const page = await browser.newPage();
  await page.goto(SLIDE_URL, { waitUntil: 'networkidle2', timeout: 20000 });

  for (const variant of variants) {
    await gotoChapterCover(page);
    const outputPath = path.join(OUTPUT_DIR, `chapter-cover-title-${variant.label}.png`);
    await captureVariant(page, variant.offsetPx, outputPath);
    console.log(`✅ ${variant.desc} → ${outputPath}`);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
