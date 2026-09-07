#!/usr/bin/env node
/**
 * 汇总某项目全部被引用文章，按站点（域名）统计引用次数排行。
 * 用法: node scripts/rank-citation-domains.mjs <project_id>
 */

import { login, api } from './geo-api.mjs';

const projectId = Number(process.argv[2]);
if (!projectId) {
  console.error('用法: node scripts/rank-citation-domains.mjs <project_id>');
  process.exit(1);
}

await login();

const dates = (await api(`/api/projects/${projectId}/data-dates`)).data.dates || [];
const range = { project_id: projectId, start_date: dates[0], end_date: dates[dates.length - 1] };

const bySite = new Map();
let page = 1;
let totalPages = 1;
while (page <= totalPages) {
  const r = await api('/api/citations/articles', { ...range, page, page_size: 100, sort_by: 'total_citations', sort_order: 'desc' });
  totalPages = r.data.total_pages;
  for (const a of r.data.list) {
    const key = a.domain;
    const cur = bySite.get(key) || { name: a.platform_name, domain: a.domain, logo: a.logo_url, citations: 0, articles: 0 };
    cur.citations += a.total_citations;
    cur.articles += 1;
    bySite.set(key, cur);
  }
  page += 1;
}

const ranked = [...bySite.values()].sort((a, b) => b.citations - a.citations);
const total = ranked.reduce((s, x) => s + x.citations, 0);
console.log(`站点 ${ranked.length} 个 / 引用合计 ${total}\n`);
const limit = Number(process.argv[3]) || 40;
for (const [i, s] of ranked.slice(0, limit).entries()) {
  console.log(`${String(i + 1).padStart(2, ' ')}. ${s.name}\t${s.domain}\t引用 ${s.citations}\t文章 ${s.articles}\t占比 ${((s.citations / total) * 100).toFixed(1)}%`);
}
