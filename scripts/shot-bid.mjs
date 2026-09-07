import fs from 'node:fs';
import puppeteer from 'puppeteer';

fs.mkdirSync('tmp/q3', { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath:
    process.env.PUPPETEER_EXECUTABLE_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
});
const page = await browser.newPage();
await page.goto('http://localhost:7894', { waitUntil: 'networkidle0', timeout: 60000 });
await page.evaluate(() => localStorage.removeItem('slide-order-working'));
await new Promise((r) => setTimeout(r, 800));

const clicked = await page.evaluate(() => {
  const nodes = [...document.querySelectorAll('aside *')];
  const hits = nodes.filter((el) => el.textContent.trim() === '标书示意' && el.children.length === 0);
  if (!hits.length) return 0;
  const el = hits[0];
  (el.closest('[role="button"]') || el.closest('button') || el.closest('li') || el).click();
  return hits.length;
});
console.log('hits', clicked);
await new Promise((r) => setTimeout(r, 2000));
await page.addStyleTag({ content: 'aside { display: none !important; }' });
const stage =
  (await page.$('div[class*="origin-center"]')) || (await page.$('div[class*="shadow-[0_20px_50px"]')) || page;
await stage.screenshot({ path: 'tmp/q3/bid-sharp-01.png' });
console.log('ok tmp/q3/bid-sharp-01.png');
await browser.close();
