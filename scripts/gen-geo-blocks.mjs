#!/usr/bin/env node
/** 从 dump 结果生成幻灯片页面里要直接粘贴的数据块（词条表格 / 引用文章 / 引用源分布）。 */

import { readFileSync, writeFileSync } from 'node:fs';

const d = JSON.parse(readFileSync(process.argv[2], 'utf-8'));
const n = (v) => (v === null || v === undefined || v === '' ? null : Number(v));

// PowerShell 重定向会破坏 UTF-8，统一由脚本落盘
const out = [];
const console = { log: (...a) => out.push(a.join(' ')) };

const rows = (d.entries.list || []).map((e) => ({
  term: e.entry_name,
  rate: `${n(e.mention_rate) ?? 0}%`,
  rank: n(e.position) ? `NO. ${n(e.position)}` : '—',
  shot: e.last_screenshot_url || '',
  time: (e.last_conversation_time || '').slice(0, 10).replace(/-/g, '/'),
}));
console.log('/* ---------- ROWS ---------- */');
console.log(JSON.stringify(rows, null, 4));

console.log('\n/* ---------- ARTICLES (前 8 篇，标题异常的自行跳过) ---------- */');
for (const a of (d.citationArticles.list || []).slice(0, 8)) {
  console.log(
    JSON.stringify(
      {
        title: a.title,
        url: a.link_url,
        mentioned: !!a.has_target_product,
        total: a.total_citations,
        avg: String(n(a.avg_citations).toFixed(1)),
        platform: a.platform_name,
      },
      null,
      4
    ) + ','
  );
}

console.log('\n/* ---------- 引用源份额 ---------- */');
const ps = d.citationStats.platform_stats || [];
const top5 = ps.slice(0, 5);
const others = 100 - top5.reduce((s, p) => s + n(p.share), 0);
for (const p of top5) console.log(`${p.platform_name}\t${p.domain}\t${n(p.share)}%\t${p.citation_count} 次`);
console.log(`其他\t\t${Math.round(others * 10) / 10}%`);
const max = n(top5[0].share);
console.log('条形图 pct:', top5.map((p) => `${p.platform_name} ${Math.round((n(p.share) / max) * 100)}`).join(' | '));

writeFileSync(process.argv[3], out.join('\n'), 'utf-8');
