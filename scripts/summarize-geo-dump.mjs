#!/usr/bin/env node
/** 把 dump-geo-project.mjs 的落盘结果压成一页可读摘要，用于核对幻灯片硬编码数字。 */

import { readFileSync } from 'node:fs';

const file = process.argv[2];
const d = JSON.parse(readFileSync(file, 'utf-8'));
const n = (v) => (v === null || v === undefined || v === '' ? null : Number(v));
const pct = (v) => (n(v) === null ? '-' : `${n(v)}%`);

console.log(`=== ${d.project.project_name} (id ${d.project.id}) ===`);
console.log(`区间 ${d.range.start_date} ~ ${d.range.end_date}，共 ${d.dates.length} 天`);
console.log(`目标产品 ${d.project.target_product} / 词条数 ${d.project.entry_count}`);

const s = d.stats || {};
console.log(`\n[总览] 提及率 ${pct(s.brand_mention_rate)} / Top1 ${pct(s.top1_mention_rate)} / Top3 ${pct(s.top3_mention_rate)} / 平均位次 ${n(s.avg_position)}`);

const pmap = Object.fromEntries((d.platforms || []).map((p) => [p.id, p.name]));
console.log('[分平台]');
for (const p of s.platform_stats || []) {
  console.log(`  ${pmap[p.platform_id] || p.platform_id}: 提及率 ${pct(p.brand_mention_rate)} / 位次 ${n(p.avg_position)}`);
}
console.log('[每日]');
for (const x of s.daily_stats || []) {
  console.log(`  ${x.date}: 提及率 ${pct(x.mention_rate ?? x.brand_mention_rate)} / 位次 ${n(x.avg_position)}`);
}

const inf = d.influence || {};
const self = (inf.list || []).find((b) => b.is_target);
console.log(`\n[影响力] 总会话 ${inf.total_conversations} / 榜单 ${(inf.list || []).length} 个品牌 / 本品排名 ${self ? self.rank : '未上榜'}`);
console.log('  Top10:');
for (const b of (inf.list || []).slice(0, 10)) {
  console.log(`   #${b.rank} ${b.brand_name}  影响力 ${n(b.influence_score)} 提及率 ${pct(b.mention_rate)} 位次 ${n(b.avg_position)}${b.is_target ? '  ← 本品' : ''}`);
}
if (self && self.rank > 10) console.log(`   #${self.rank} ${self.brand_name}  影响力 ${n(self.influence_score)} 提及率 ${pct(self.mention_rate)} 位次 ${n(self.avg_position)}  ← 本品`);

const c = d.compare || {};
const showRank = (title, list, key, fmt) => {
  console.log(`\n[${title}] 共 ${(list || []).length} 项`);
  const arr = list || [];
  for (const b of arr.slice(0, 10)) {
    console.log(`   #${b.rank ?? '-'} ${b.display_name || b.brand_name}  ${fmt(b[key])}${b.is_target || b.is_self ? '  ← 本品' : ''}`);
  }
  const me = arr.find((b) => b.is_target || b.is_self);
  const idx = arr.indexOf(me);
  if (me && idx >= 10) console.log(`   #${me.rank ?? idx + 1} ${me.display_name || me.brand_name}  ${fmt(me[key])}  ← 本品（第 ${idx + 1} / ${arr.length}）`);
};
showRank(`提及率全量榜（共 ${d.rankMention?.total} 项）`, d.rankMention?.list, 'selected_top_mention_rate', pct);
showRank(`Top1 全量榜（共 ${d.top1?.total} 项）`, d.top1?.list, 'selected_top_mention_rate', pct);
showRank(`Top3 全量榜（共 ${d.top3?.total} 项）`, d.top3?.list, 'selected_top_mention_rate', pct);
showRank(`位次全量榜（共 ${d.rankPosition?.total} 项）`, d.rankPosition?.list, 'avg_position', (v) => `NO. ${n(v)}`);
showRank('compare 提及率（头部+本品）', c.mention_rate_ranking, 'mention_rate', pct);
showRank('compare 位次（头部+本品）', c.position_ranking, 'avg_position', (v) => `NO. ${n(v)}`);

const e = d.entries || {};
console.log(`\n[词条] 共 ${e.total} 条，非零提及的：`);
for (const x of (e.list || []).filter((x) => n(x.mention_rate) > 0)) {
  console.log(`   ${x.entry_name}  提及率 ${pct(x.mention_rate)} 位次 ${n(x.position) ?? '-'}`);
}
console.log(`   （其余 ${(e.list || []).filter((x) => !(n(x.mention_rate) > 0)).length} 条提及率为 0）`);
console.log('   前 12 条原始顺序：');
for (const x of (e.list || []).slice(0, 12)) {
  console.log(`     ${x.entry_name} | ${pct(x.mention_rate)} | 位次 ${n(x.position) ?? '-'} | 平台 ${(x.platform_ids || []).join(',')}`);
}

const cs = d.citationStats || {};
console.log(`\n[引用源] 总会话 ${cs.total_conversations} / 引用率 ${pct(cs.citation_rate)} / 引用总数 ${cs.total_citations}`);
for (const p of (cs.platform_stats || []).slice(0, 15)) {
  console.log(`   ${p.platform_name} (${p.domain})  ${p.citation_count} 次  ${pct(p.share)}`);
}

console.log(`\n[引用文章] 共 ${d.citationArticles?.total ?? '-'} 篇，Top10：`);
for (const a of (d.citationArticles?.list || []).slice(0, 10)) {
  console.log(`   ${a.total_citations} 次 | ${a.platform_name} | ${a.title}`);
}

if (d.sentiments) {
  console.log(`\n[舆情] 正面 ${pct(d.sentiments.positive_percentage)} / 负面 ${pct(d.sentiments.negative_percentage)} / 中性 ${pct(d.sentiments.neutral_percentage)}`);
}
