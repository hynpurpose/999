#!/usr/bin/env node
/**
 * 有头模式抓取网页截图（用于屏蔽无头浏览器的站点，如药监局）。
 * 用法: node scripts/shot-site-headful.mjs <url> <输出路径> [宽] [高]
 */
import puppeteer from 'puppeteer';

const url = process.argv[2];
const out = process.argv[3];
const width = Number(process.argv[4]) || 1440;
const height = Number(process.argv[5]) || 1400;

const browser = await puppeteer.launch({
  headless: false,
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
    || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  defaultViewport: { width, height, deviceScaleFactor: 2 },
  args: ['--disable-blink-features=AutomationControlled', '--lang=zh-CN', '--window-size=1500,1500'],
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
await new Promise((r) => setTimeout(r, 4000));
await page.screenshot({ path: out });
console.log('saved:', out);
await browser.close();
