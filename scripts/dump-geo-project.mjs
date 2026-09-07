#!/usr/bin/env node
/**
 * 把单个 GEO ONE 项目的全部报告接口原样落盘，供人工核对幻灯片里的硬编码数字。
 *
 * 用法:
 *   node scripts/dump-geo-project.mjs <project_id> [--out tmp/geo/<id>.json]
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { login, api } from './geo-api.mjs';

const args = process.argv.slice(2);
const projectId = Number(args.find((a) => !a.startsWith('--')));
if (!projectId) {
  console.error('用法: node scripts/dump-geo-project.mjs <project_id>');
  process.exit(1);
}
const outFlag = args.indexOf('--out');
const outPath = path.resolve(outFlag !== -1 ? args[outFlag + 1] : `tmp/geo/${projectId}.json`);

const user = await login();
console.error(`已登录: ${user.name} (${user.company_name})`);

const project = (await api('/api/projects')).data.find((p) => p.id === projectId);
if (!project) {
  console.error(`未找到项目 ${projectId}`);
  process.exit(1);
}

const dates = [...((await api(`/api/projects/${projectId}/data-dates`)).data.dates || [])].sort();
const range = { project_id: projectId, start_date: dates[0], end_date: dates[dates.length - 1] };
console.error(`${project.project_name} / ${range.start_date} ~ ${range.end_date} (${dates.length} 天)`);

const tryApi = async (pathname, params) => {
  try {
    return (await api(pathname, params)).data;
  } catch (e) {
    console.error(`  跳过 ${pathname}: ${e.message}`);
    return null;
  }
};

const out = {
  project,
  dates,
  range,
  platforms: await tryApi('/api/platforms', { project_id: projectId }),
  stats: await tryApi('/api/conversations/stats', range),
  entries: await tryApi('/api/entries', { ...range, page: 1, page_size: 200, sort_by: 'mention_rate', sort_order: 'desc' }),
  influence: await tryApi('/api/competitors/influence', { ...range, page: 1, page_size: 100 }),
  compare: await tryApi('/api/competitors/compare', range),
  // 全量榜（compare 只回头部 4 名 + 本品，拿不到本品在全量里的真实名次）
  rankMention: await tryApi('/api/competitors/top-mention-rate', { ...range, top_type: 'mention', page: 1, page_size: 500 }),
  top1: await tryApi('/api/competitors/top-mention-rate', { ...range, top_type: 'top1', page: 1, page_size: 500 }),
  top3: await tryApi('/api/competitors/top-mention-rate', { ...range, top_type: 'top3', page: 1, page_size: 500 }),
  rankPosition: await tryApi('/api/competitors/position', { ...range, page: 1, page_size: 500 }),
  citationStats: await tryApi('/api/citations/stats', range),
  citationArticles: await tryApi('/api/citations/articles', { ...range, page: 1, page_size: 30, sort_by: 'total_citations', sort_order: 'desc' }),
  sentiments: await tryApi('/api/sentiments/stats', range),
};

mkdirSync(path.dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
console.error(`已写入 ${outPath}`);
