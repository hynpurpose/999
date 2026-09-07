#!/usr/bin/env node
/**
 * 扫描各项目里同一词条下「豆包」与「DeepSeek」的引用源条数，找可用于对比的真实案例。
 * 结果落盘 tmp/geo/citation-counts.json。
 *
 * 用法: node scripts/scan-platform-citation-counts.mjs [projectId,...]
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { login, api } from './geo-api.mjs';

const DOUBAO = 2;
const DEEPSEEK = 1;

await login();

const projects = (await api('/api/projects')).data;
const wanted = (process.argv[2] || '').split(',').filter(Boolean).map(Number);
const targets = wanted.length ? projects.filter((p) => wanted.includes(p.id)) : projects;

const rows = [];

for (const proj of targets) {
  const dates = (await api(`/api/projects/${proj.id}/data-dates`)).data.dates || [];
  for (const date of dates) {
    let entries = [];
    try {
      entries = (await api('/api/entries', {
        project_id: proj.id, start_date: date, end_date: date, page: 1, page_size: 200,
      })).data.list || [];
    } catch { continue; }

    for (const e of entries) {
      const per = {};
      for (const pid of [DOUBAO, DEEPSEEK]) {
        try {
          const r = await api('/api/conversations/search', {
            project_id: proj.id, date, platform_id: pid, entry_id: e.entry_id, page: 1, page_size: 5,
          });
          // 该接口单场会话直接放在 data 上，不是列表
          const list = Array.isArray(r.data) ? r.data : r.data.list || (r.data ? [r.data] : []);
          per[pid] = list.map((c) => ({ convId: c.id, count: (c.citations || []).length }));
        } catch { per[pid] = []; }
      }
      const db = per[DOUBAO]?.[0];
      const ds = per[DEEPSEEK]?.[0];
      if (!db && !ds) continue;
      rows.push({
        projectId: proj.id,
        projectName: proj.project_name,
        date,
        entryId: e.entry_id,
        entryName: e.entry_name,
        doubao: db?.count ?? null,
        doubaoConv: db?.convId ?? null,
        deepseek: ds?.count ?? null,
        deepseekConv: ds?.convId ?? null,
      });
      process.stderr.write('.');
    }
  }
  process.stderr.write(`\n[${proj.id}] ${proj.project_name} 完成\n`);
}

mkdirSync('tmp/geo', { recursive: true });
writeFileSync('tmp/geo/citation-counts.json', JSON.stringify(rows, null, 2), 'utf8');

const sorted = rows
  .filter((r) => r.doubao != null && r.deepseek != null)
  .sort((a, b) => b.doubao - a.doubao);

console.log(`\n共 ${rows.length} 条，双平台都有数据 ${sorted.length} 条\n`);
console.log('豆包引用条数最多的 30 条：');
for (const r of sorted.slice(0, 30)) {
  console.log(`豆包 ${String(r.doubao).padStart(3)} | DeepSeek ${String(r.deepseek).padStart(3)} | [${r.projectId}] ${r.entryName} (${r.date}, entry=${r.entryId})`);
}
