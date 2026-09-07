#!/usr/bin/env node
/**
 * 拉取多个项目的高引用文章明细，合并写入 tmp/citation-articles-all.json。
 *
 * 用法: node scripts/fetch-all-citation-articles.mjs <project_ids 逗号分隔> [每项目取前N篇]
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { login, api } from './geo-api.mjs';

const projectIds = (process.argv[2] || '').split(',').map(Number).filter(Boolean);
const perProject = Number(process.argv[3]) || 100;
if (!projectIds.length) {
  console.error('用法: node scripts/fetch-all-citation-articles.mjs <project_ids> [topN]');
  process.exit(1);
}

const user = await login();
console.error(`已登录: ${user.name} (${user.company_name})`);

const projects = (await api('/api/projects')).data;
const out = [];

for (const pid of projectIds) {
  const project = projects.find((p) => p.id === pid);
  if (!project) {
    console.error(`跳过：未找到项目 ${pid}`);
    continue;
  }
  let dates = [];
  try {
    dates = (await api(`/api/projects/${pid}/data-dates`)).data.dates || [];
  } catch { /* 老后端无此接口 */ }
  const range = {
    project_id: pid,
    start_date: dates[0] || project.created_at.slice(0, 10),
    end_date: dates[dates.length - 1] || new Date().toISOString().slice(0, 10),
  };

  const res = await api('/api/citations/articles', {
    ...range, page: 1, page_size: perProject,
    sort_by: 'total_citations', sort_order: 'desc',
  });
  const list = res.data.list || [];
  for (const a of list) {
    out.push({
      project_id: pid,
      project_name: project.project_name,
      target_product: project.target_product,
      title: a.title,
      link_url: a.link_url,
      domain: a.domain,
      platform_name: a.platform_name,
      total_citations: a.total_citations,
      avg_citations: a.avg_citations === null ? null : Number(a.avg_citations),
      has_target_product: !!a.has_target_product,
    });
  }
  console.error(`项目 ${pid} ${project.target_product}: ${list.length} 篇 (${range.start_date}~${range.end_date})`);
}

out.sort((a, b) => b.total_citations - a.total_citations);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
mkdirSync(path.join(root, 'tmp'), { recursive: true });
const outPath = path.join(root, 'tmp', 'citation-articles-all.json');
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
console.error(`\n已写入 ${outPath}，共 ${out.length} 篇`);
