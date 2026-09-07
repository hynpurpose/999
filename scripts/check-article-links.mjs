#!/usr/bin/env node
/**
 * 从本机网络实测引用文章链接的可达性，结果写入 tmp/link-check.json。
 * 只有真正能打开、且正文有实质长度的页面才会标记为 ok。
 *
 * 用法: node scripts/check-article-links.mjs [并发数]
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const concurrency = Number(process.argv[2]) || 12;

// 平台自有聚合页、原始文献库、英文站：不是"我们能写的成稿"，不参与选型
const EXCLUDE = /alipayobjects|alipay\.com|nih\.gov|pubmed|springer|sciencedirect|onlinelibrary|nature\.com|ovid\.com|jamanetwork|jnccn|dana-farber|xiaohe\.cn|sm\.cn|baidu\.com|iesdouyin|toutiao|myodrops|dryeyerescue|\.pdf$/i;

const all = JSON.parse(readFileSync(path.join(root, 'tmp/citation-articles-all.json'), 'utf-8'));
const seen = new Set();
const targets = [];
for (const a of all) {
  if (!a.link_url || EXCLUDE.test(a.link_url)) continue;
  if (seen.has(a.link_url)) continue;
  seen.add(a.link_url);
  targets.push(a);
}
targets.sort((x, y) => y.total_citations - x.total_citations);
console.error(`待检测 ${targets.length} 条`);

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const PAYWALL = /试读结束|登录后.{0,6}(阅读|查看)|获取全文阅读权限|购买本文|请先登录|开通会员|VIP专享/;

// 去掉脚本/样式/标签后估算正文字数，用来识别空壳页和纯导航页
function textLen(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, '')
    .length;
}

async function check(a) {
  const res = { ...a, status: 0, ok: false, note: '', chars: 0, pageTitle: '' };
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const r = await fetch(a.link_url, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: {
        'User-Agent': UA,
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.9',
      },
    });
    res.status = r.status;
    const buf = Buffer.from(await r.arrayBuffer());
    const ct = r.headers.get('content-type') || '';
    const charset = /charset=([\w-]+)/i.exec(ct)?.[1] || 'utf-8';
    let html;
    try {
      html = new TextDecoder(charset).decode(buf);
    } catch {
      html = buf.toString('utf-8');
    }
    res.pageTitle = (/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1] || '').trim().slice(0, 90);
    res.chars = textLen(html);

    if (!r.ok) res.note = `HTTP ${r.status}`;
    else if (PAYWALL.test(html)) res.note = '付费墙/需登录';
    else if (res.chars < 800) res.note = `正文过短(${res.chars}字)`;
    else {
      res.ok = true;
      res.note = `${res.chars}字`;
    }
  } catch (e) {
    res.note = e.name === 'AbortError' ? '超时' : `连接失败: ${e.cause?.code || e.message}`;
  } finally {
    clearTimeout(timer);
  }
  return res;
}

const results = [];
let idx = 0;
async function worker() {
  while (idx < targets.length) {
    const a = targets[idx++];
    const r = await check(a);
    results.push(r);
    if (results.length % 25 === 0) console.error(`  已检测 ${results.length}/${targets.length}`);
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));

results.sort((x, y) => y.total_citations - x.total_citations);
writeFileSync(path.join(root, 'tmp/link-check.json'), JSON.stringify(results, null, 2), 'utf-8');

const ok = results.filter((r) => r.ok);
console.error(`\n可访问 ${ok.length} / ${results.length}`);
for (const r of ok.slice(0, 60)) {
  console.log([r.total_citations, r.platform_name, r.target_product, r.title, r.note, r.link_url].join(' | '));
}
