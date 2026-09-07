#!/usr/bin/env node
/**
 * 导出指定词条在豆包 / DeepSeek 上的完整引用源清单，供幻灯片抄真实数据。
 * 结果落盘 tmp/geo/pair-<entry_id>.json。
 *
 * 用法: node scripts/dump-platform-citation-pair.mjs <project_id> <date> <entry_id>
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { login, api } from './geo-api.mjs';

const [projectId, date, entryId] = process.argv.slice(2);
if (!projectId || !date || !entryId) {
  console.error('用法: node scripts/dump-platform-citation-pair.mjs <project_id> <date> <entry_id>');
  process.exit(1);
}

await login();

const grab = async (platformId) => {
  const r = await api('/api/conversations/search', {
    project_id: projectId, date, platform_id: platformId, entry_id: entryId, page: 1, page_size: 5,
  });
  return Array.isArray(r.data) ? r.data[0] : r.data;
};

const out = {};
for (const [name, pid] of [['doubao', 2], ['deepseek', 1]]) {
  const c = await grab(pid);
  out[name] = {
    convId: c.id,
    entryName: c.entry_name,
    platform: c.platform_name,
    mentioned: c.is_mentioned,
    rank: c.mention_rank,
    shot: c.screenshot_url,
    total: (c.citations || []).length,
    citations: (c.citations || []).map((x) => ({
      sort: x.sort_order, site: x.site_name, domain: x.domain, title: x.title, url: x.link_url,
    })),
  };
}

mkdirSync('tmp/geo', { recursive: true });
writeFileSync(`tmp/geo/pair-${entryId}.json`, JSON.stringify(out, null, 2), 'utf8');

for (const k of ['doubao', 'deepseek']) {
  const d = out[k];
  const bySite = {};
  for (const c of d.citations) bySite[c.site || c.domain] = (bySite[c.site || c.domain] || 0) + 1;
  console.log(`\n=== ${d.platform} | ${d.entryName} | conv=${d.convId} | 引用 ${d.total} 条 | ${d.mentioned ? `提及第${d.rank}位` : '未提及'}`);
  console.log('站点分布:', Object.entries(bySite).sort((a, b) => b[1] - a[1]).map(([s, n]) => `${s}×${n}`).join('  '));
  for (const c of d.citations) console.log(`  ${String(c.sort).padStart(2)}. [${c.site || c.domain}] ${c.title}`);
}
