import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../screenshots');
const SLIDE_URL = 'http://localhost:4466';

// 用法: node scripts/capture_decision_page.js [输出文件名] [版本序号(从0开始)] [页面ID]
const outName = process.argv[2] || 'decision_page_current.png';
const variantIdx = Number(process.argv[3] || 0);
const SLIDE_ID = process.argv[4] || 'chapter-0-0-3';

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
    defaultViewport: { width: 1984, height: 1144, deviceScaleFactor: 1 },
  });

  const page = await browser.newPage();
  await page.evaluateOnNewDocument((id) => {
    sessionStorage.setItem('slide-current-id', id);
  }, SLIDE_ID);
  await page.goto(SLIDE_URL, { waitUntil: 'networkidle2', timeout: 20000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));

  // 切换到指定版本（若有版本切换按钮）
  for (let i = 0; i < variantIdx; i++) {
    const btn = await page.$('button[title="下一个版本"]');
    if (!btn) break;
    await btn.click();
    await new Promise((r) => setTimeout(r, 400));
  }
  await new Promise((r) => setTimeout(r, 400));

  const outputPath = path.join(OUTPUT_DIR, outName);
  const slideEl = await page.$('.bg-white.overflow-hidden');
  if (slideEl) {
    await slideEl.screenshot({ path: outputPath });
  } else {
    await page.screenshot({ path: outputPath });
  }
  console.log(`saved: ${outputPath}`);

  await browser.close();
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
