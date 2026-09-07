import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../screenshots');
const SLIDE_URL = 'http://localhost:4466';
const SLIDE_ID = 'chapter-0-0-2'; // 创维壁纸电视用户决策分析
const NEW_TITLE = '一个创维壁纸电视 AI品牌定位的例子';

async function main() {
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

  // 进入编辑模式
  await page.evaluate(() => {
    const btn = [...document.querySelectorAll('button')].find((b) =>
      b.textContent.includes('编辑模式')
    );
    btn?.click();
  });
  await new Promise((r) => setTimeout(r, 800));

  // 双击大标题进入画面内改字
  const titleEl = await page.$('[data-slide-title]');
  if (!titleEl) throw new Error('找不到大标题元素');
  await titleEl.click({ clickCount: 2 });
  await new Promise((r) => setTimeout(r, 600));

  // 全选并输入新标题
  await page.keyboard.down('Meta');
  await page.keyboard.press('a');
  await page.keyboard.up('Meta');
  await page.keyboard.type(NEW_TITLE, { delay: 10 });
  await new Promise((r) => setTimeout(r, 800));

  // 读取目录面板里该页的标题 & localStorage 覆盖
  const result = await page.evaluate((slideId) => {
    const overrides = JSON.parse(localStorage.getItem('slide-title-overrides') || '{}');
    const navTexts = [...document.querySelectorAll('nav.flex-grow span.truncate')].map(
      (el) => el.textContent
    );
    return { override: overrides[slideId], navTexts };
  }, SLIDE_ID);

  console.log('localStorage 覆盖:', result.override);
  console.log('目录面板包含新标题:', result.navTexts.some((t) => t.includes(NEW_TITLE)));

  await page.screenshot({ path: path.join(OUTPUT_DIR, 'title_sync_verify.png') });
  console.log('saved: screenshots/title_sync_verify.png');

  await browser.close();
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
