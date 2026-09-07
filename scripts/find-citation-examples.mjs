#!/usr/bin/env node
/**
 * 在 GEO ONE 数据里找「AI 回答引用了某一类信源」的真实会话，用于 PPT 举例截图。
 *
 * 用法:
 *   node scripts/find-citation-examples.mjs <project_id> [domain,domain,...]
 *
 * 不传域名时默认查「医生问答及科普」类站点。
 */

import { login, api } from './geo-api.mjs';

const DEFAULT_DOMAINS = ['bohe.cn', 'dayi.org.cn', 'pingguolv.com', 'cndzys.com', 'fh21.com.cn', 'youlai.cn', 'baidu.com'];

const projectId = Number(process.argv[2]);
if (!projectId) {
  console.error('用法: node scripts/find-citation-examples.mjs <project_id> [domain,domain,...]');
  process.exit(1);
}
const domains = (process.argv[3] || '').split(',').filter(Boolean);
const targetDomains = domains.length ? domains : DEFAULT_DOMAINS;

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
      const matched = cits.filter((c) => targetDomains.some((d) => (c.domain || '').includes(d)));
      if (!matched.length) continue;
      hits.push({ conv, entryId: e.entry_id, matched, total: cits.length });
    }
  }
}

hits.sort((a, b) => (b.matched.length - a.matched.length) || (Number(b.conv.is_mentioned) - Number(a.conv.is_mentioned)));
console.log(`日期 ${date} / 命中 ${hits.length} 条会话\n`);
for (const h of hits.slice(0, 15)) {
  const c = h.conv;
  console.log(`【${c.entry_name}】(entry_id=${h.entryId}) / ${c.platform_name} / conversation=${c.id}`);
  console.log(`   本品提及: ${c.is_mentioned ? `是，第 ${c.mention_rank} 位` : '否'}   引用 ${h.total} 条，其中目标类 ${h.matched.length} 条`);
  for (const m of h.matched) console.log(`   - ${m.site_name}｜${m.title}`);
  console.log(`   截图: ${c.screenshot_url}\n`);
}
