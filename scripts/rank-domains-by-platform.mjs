#!/usr/bin/env node
/**
 * 按 AI 平台分别统计站点引用次数排行。
 * /api/citations/articles 的 platform_id 不生效，只能逐 (词条 × 平台) 拉会话里的 citations 汇总。
 *
 * 用法: node scripts/rank-domains-by-platform.mjs <project_ids 逗号分隔> [topN]
 */

import { login, api } from './geo-api.mjs';

const projectIds = (process.argv[2] || '').split(',').map(Number).filter(Boolean);
const topN = Number(process.argv[3]) || 12;
if (!projectIds.length) {
  console.error('用法: node scripts/rank-domains-by-platform.mjs <project_ids> [topN]');
  process.exit(1);
}

await login();

const byPlatform = new Map();

for (const pid of projectIds) {
  const dates = (await api(`/api/projects/${pid}/data-dates`)).data.dates || [];
  const platforms = (await api('/api/platforms', { project_id: pid })).data;
  for (const date of dates) {
    const entries = (await api('/api/entries', { project_id: pid, start_date: date, end_date: date, page: 1, page_size: 200 })).data.list;
    for (const entry of entries) {
      for (const plat of platforms) {
        let conv;
        try {
          conv = (await api('/api/conversations/search', {
            project_id: pid, date, platform_id: plat.id, entry_id: entry.entry_id, page: 1, page_size: 50,
          })).data;
        } catch {
          continue;
        }
        if (!conv || !Array.isArray(conv.citations)) continue;
        const bucket = byPlatform.get(plat.name) || new Map();
        for (const c of conv.citations) {
          // 同一站点常有多个域名（如复禾健康 fh21.com / fh21.com.cn），按站点名合并
          const key = c.site_name || c.domain || c.link_url;
          if (!key) continue;
          const cur = bucket.get(key) || { name: c.site_name || c.domain, domain: c.domain, count: 0 };
          cur.count += 1;
          bucket.set(key, cur);
        }
        byPlatform.set(plat.name, bucket);
      }
    }
    console.error(`  项目 ${pid} / ${date} 完成`);
  }
}

for (const [platName, bucket] of byPlatform) {
  const ranked = [...bucket.values()].sort((a, b) => b.count - a.count);
  const total = ranked.reduce((s, x) => s + x.count, 0);
  console.log(`\n===== ${platName}  站点 ${ranked.length} / 引用 ${total} =====`);
  for (const [i, s] of ranked.slice(0, topN).entries()) {
    console.log(`${String(i + 1).padStart(2, ' ')}. ${s.name}\t${s.domain}\t${s.count}\t${((s.count / total) * 100).toFixed(1)}%`);
  }
}
