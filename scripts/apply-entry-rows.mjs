#!/usr/bin/env node
/** 用 dump 结果里的词条数据替换页面里的 ROWS 数组。 */

import { readFileSync, writeFileSync } from 'node:fs';

const [dumpPath, pagePath] = process.argv.slice(2);
const d = JSON.parse(readFileSync(dumpPath, 'utf-8'));
const n = (v) => (v === null || v === undefined || v === '' ? null : Number(v));

const rows = (d.entries.list || []).map((e) => ({
  term: e.entry_name,
  rate: `${n(e.mention_rate) ?? 0}%`,
  rank: n(e.position) ? `NO. ${n(e.position)}` : '—',
  shot: e.last_screenshot_url || '',
  time: (e.last_conversation_time || '').slice(0, 10).replace(/-/g, '/'),
}));

const src = readFileSync(pagePath, 'utf-8');
const start = src.indexOf('const ROWS = [');
const end = src.indexOf('\n];', start);
if (start === -1 || end === -1) throw new Error(`${pagePath} 里找不到 ROWS 数组`);

const block = `const ROWS = ${JSON.stringify(rows, null, 4).replace(/\n/g, '\n')}`;
writeFileSync(pagePath, src.slice(0, start) + block + src.slice(end + 3), 'utf-8');
console.log(`${pagePath}: 写入 ${rows.length} 条词条`);
