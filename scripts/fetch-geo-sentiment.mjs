#!/usr/bin/env node
/**
 * 采集监测词项目的正负面数据，写入 src/data/geoSentiment.json。
 * 「品牌词舆情分析」章节的三页与痛点页的负面案例都读这份数据。
 *
 * 用法:
 *   node scripts/fetch-geo-sentiment.mjs [project_id ...]   默认 440 441
 */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { login, api } from './geo-api.mjs';

const ids = process.argv.slice(2).filter((a) => /^\d+$/.test(a)).map(Number);
const projectIds = ids.length ? ids : [440, 441];

const user = await login();
console.log(`已登录: ${user.name} (${user.company_name})`);

const projects = (await api('/api/projects')).data;
const out = {};

for (const id of projectIds) {
  const project = projects.find((p) => p.id === id);
  if (!project) throw new Error(`未找到项目 ${id}`);

  const dates = [...((await api(`/api/projects/${id}/data-dates`)).data.dates || [])].sort();
  const range = { project_id: id, start_date: dates[0], end_date: dates[dates.length - 1] };

  const stats = (await api('/api/sentiments/stats', range)).data;
  const negatives = (await api('/api/sentiments/negative-answers', { ...range, page: 1, page_size: 50 })).data;

  out[id] = {
    meta: {
      project_id: id,
      project_name: project.project_name,
      target_product: project.target_product,
      start_date: range.start_date,
      end_date: range.end_date,
      fetched_at: new Date().toISOString(),
    },
    stats,
    negatives,
  };
  console.log(
    `${id} ${project.project_name}: ${range.start_date}~${range.end_date} 正面 ${stats.positive_percentage}% / 负面 ${stats.negative_percentage}% / 负面条目 ${negatives.total}`
  );
}

const outPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/geoSentiment.json');
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
console.log(`已写入 ${outPath}`);
