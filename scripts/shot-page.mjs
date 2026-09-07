/* 打磨用：把指定页面按 1920x1080 截图到 /tmp/slide-page.png
   用法: node scripts/shot-page.mjs <slide-id> [输出路径] [端口] */
import puppeteer from 'puppeteer';

const slideId = process.argv[2] || 'chapter-2-2-1';
const out = process.argv[3] || '/tmp/slide-page.png';
const port = process.argv[4] || '7467';

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
    || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
});
const page = await browser.newPage();
await page.goto(`http://localhost:${port}`, { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate((id) => {
  localStorage.removeItem('slide-order-working');
  sessionStorage.setItem('slide-current-id', id);
}, slideId);
await page.reload({ waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 1500));
await page.addStyleTag({ content: 'aside { display: none !important; }' });
const stage = await page.$('div[class*="origin-center"]') || page;
await (stage === page ? page : stage).screenshot({ path: out });
console.log('saved:', out);
await browser.close();
