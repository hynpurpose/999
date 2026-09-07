#!/usr/bin/env node
/**
 * 导出指定项目里「引用了博禾医生」的会话明细，供 PPT 选案例。
 * 用法: node scripts/dump-bohe-candidates.mjs <project_id> [domain] [输出文件]
 */

import { writeFileSync } from 'node:fs';
import { login, api } from './geo-api.mjs';

const projectId = Number(process.argv[2]);
const domain = process.argv[3] || 'bohe.cn';
const outFile = process.argv[4] || 'tmp-bohe-candidates.json';

await login();

const dates = (await api(`/api/projects/${projectId}/data-dates`)).data.dates || [];
const date = dates[dates.length - 1];
const platforms = (await api('/api/platforms', { project_id: projectId })).data;
const entries = (await api('/api/entries', {
  project_id: projectId, start_date: date, end_date: date, page: 1, page_size: 100,
})).data.list;

const hits = [];
for (const e of entries) {
  for (const p of platforms) {
    let list;
    try {
      const r = await api('/api/conversations/search', {
        project_id: projectId, date, platform_id: p.id, entry_id: e.entry_id, page: 1, page_size: 5,
      });
      list = Array.isArray(r.data) ? r.data : r.data.list || [r.data];
    } catch { continue; }

    for (const conv of list) {
      const cits = conv.citations || [];
      const matched = cits.filter((c) => (c.domain || '').includes(domain));
      if (!matched.length) continue;
      hits.push({
        entryName: conv.entry_name,
        platform: conv.platform_name,
        convId: conv.id,
        date,
        mentioned: conv.is_mentioned,
        rank: conv.mention_rank,
        totalCitations: cits.length,
        boheCount: matched.length,
        screenshot: conv.screenshot_url,
        answer: conv.ai_answer,
        boheCitations: matched.map((m) => ({ title: m.title, url: m.link_url, sort: m.sort_order })),
        allSites: [...new Set(cits.map((c) => c.domain))],
      });
    }
  }
}

hits.sort((a, b) => (b.boheCount - a.boheCount) || (Number(b.mentioned) - Number(a.mentioned)));
writeFileSync(outFile, JSON.stringify(hits, null, 2), 'utf8');

console.log(`项目 ${projectId} / ${date} / 命中 ${hits.length} 条 -> ${outFile}\n`);
for (const h of hits.slice(0, 12)) {
  console.log(`${h.boheCount}/${h.totalCitations}  ${h.mentioned ? `提及第${h.rank}位` : '未提及'}  【${h.entryName}】${h.platform} conv=${h.convId}`);
}
