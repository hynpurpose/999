#!/usr/bin/env node
/**
 * 用本机网络抓取指定文章并提取正文，输出到 tmp/dump/。
 * 用于人工核对"用户实际能看到的内容"，避免依赖境外抓取结果。
 *
 * 用法: node scripts/dump-article-text.mjs <urls.txt>
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const listFile = process.argv[2];
if (!listFile) {
  console.error('用法: node scripts/dump-article-text.mjs <urls.txt>');
  process.exit(1);
}
const urls = readFileSync(path.resolve(root, listFile), 'utf-8')
  .split('\n').map((s) => s.trim()).filter((s) => s && !s.startsWith('#'));

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const outDir = path.join(root, 'tmp/dump');
mkdirSync(outDir, { recursive: true });

function toText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<\/(p|div|h[1-6]|li|tr|br)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .split('\n').map((l) => l.trim()).filter(Boolean)
    .join('\n');
}

const parts = [];
await Promise.all(urls.map(async (u, i) => {
  let body;
  try {
    const r = await fetch(u, { headers: { 'User-Agent': UA, 'Accept-Language': 'zh-CN,zh;q=0.9', Accept: 'text/html,*/*' } });
    const buf = Buffer.from(await r.arrayBuffer());
    const charset = /charset=([\w-]+)/i.exec(r.headers.get('content-type') || '')?.[1] || 'utf-8';
    let html;
    try { html = new TextDecoder(charset).decode(buf); } catch { html = buf.toString('utf-8'); }
    body = `HTTP ${r.status}\n${toText(html).slice(0, 6000)}`;
  } catch (e) {
    body = `抓取失败: ${e.cause?.code || e.message}`;
  }
  parts[i] = `\n\n${'='.repeat(90)}\n[${i + 1}] ${u}\n${'='.repeat(90)}\n${body}`;
}));

const outPath = path.join(outDir, 'articles.txt');
writeFileSync(outPath, parts.join(''), 'utf-8');
console.error(`已写入 ${outPath}`);
