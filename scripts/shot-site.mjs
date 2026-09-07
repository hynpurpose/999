#!/usr/bin/env node
/**
 * 抓取网页截图，用于页面里的示意图。
 * 用法: node scripts/shot-site.mjs <url> <输出路径> [宽] [高]
 */
import puppeteer from 'puppeteer';

const url = process.argv[2];
const out = process.argv[3];
const width = Number(process.argv[4]) || 1440;
const height = Number(process.argv[5]) || 1400;

if (!url || !out) {
  console.error('用法: node scripts/shot-site.mjs <url> <输出路径> [宽] [高]');
  process.exit(1);
}

const chromePath = process.env.PUPPETEER_EXECUTABLE_PATH
  || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: chromePath,
  defaultViewport: { width, height, deviceScaleFactor: 2 },
  args: ['--disable-blink-features=AutomationControlled', '--lang=zh-CN'],
});
const page = await browser.newPage();
await page.setUserAgent(
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
);
await page.setExtraHTTPHeaders({
  'accept-language': 'zh-CN,zh;q=0.9',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
});
await page.evaluateOnNewDocument(() => {
  Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  Object.defineProperty(navigator, 'languages', { get: () => ['zh-CN', 'zh'] });
});
await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
await new Promise((r) => setTimeout(r, 2500));
await page.screenshot({ path: out });
console.log('saved:', out);
await browser.close();
