#!/usr/bin/env node
/**
 * 扫描全部项目，找出 AI 回答里引用了指定域名的真实会话。
 * 用法: node scripts/find-bohe-citation.mjs [domain] [最多输出条数]
 */

import { login, api } from './geo-api.mjs';

const domain = process.argv[2] || 'bohe.cn';
const limit = Number(process.argv[3]) || 20;

await login();

const projects = (await api('/api/projects')).data;
const hits = [];

for (const proj of projects) {
  let dates = [];
  try {
    dates = (await api(`/api/projects/${proj.id}/data-dates`)).data.dates || [];
  } catch { continue; }
  if (!dates.length) continue;
  const date = dates[dates.length - 1];

  let platforms = [];
  let entries = [];
  try {
    platforms = (await api('/api/platforms', { project_id: proj.id })).data;
    entries = (await api('/api/entries', {
      project_id: proj.id, start_date: date, end_date: date, page: 1, page_size: 100,
    })).data.list;
  } catch { continue; }

  for (const e of entries) {
    for (const p of platforms) {
      let list;
      try {
        const r = await api('/api/conversations/search', {
          project_id: proj.id, date, platform_id: p.id, entry_id: e.entry_id, page: 1, page_size: 5,
        });
        list = Array.isArray(r.data) ? r.data : r.data.list || [r.data];
      } catch { continue; }

      for (const conv of list) {
        const cits = conv.citations || [];
        const matched = cits.filter((c) => (c.domain || c.url || '').includes(domain));
        if (!matched.length) continue;
        hits.push({
          project: proj.project_name,
          projectId: proj.id,
          date,
          entryId: e.entry_id,
          entryName: conv.entry_name || e.entry_name,
          platform: conv.platform_name || p.name,
          convId: conv.id,
          mentioned: conv.is_mentioned,
          rank: conv.mention_rank,
          total: cits.length,
          matched,
          screenshot: conv.screenshot_url,
        });
      }
    }
  }
}

hits.sort((a, b) => (b.matched.length - a.matched.length) || (Number(b.mentioned) - Number(a.mentioned)));
console.log(`命中 ${hits.length} 条会话，含域名 ${domain}\n`);
for (const h of hits.slice(0, limit)) {
  console.log(`【${h.entryName}】${h.project} (project=${h.projectId} entry=${h.entryId} conv=${h.convId}) / ${h.platform} / ${h.date}`);
  console.log(`   本品提及: ${h.mentioned ? `是，第 ${h.rank} 位` : '否'}   共引用 ${h.total} 条，命中 ${h.matched.length} 条`);
  for (const m of h.matched) console.log(`   - ${m.site_name}｜${m.title}\n     ${m.url}`);
  console.log(`   截图: ${h.screenshot}\n`);
}
