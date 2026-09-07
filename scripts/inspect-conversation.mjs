#!/usr/bin/env node
/**
 * 查看单场 AI 对话的完整结构（答案正文、引用列表、截图地址）。
 * 用法: node scripts/inspect-conversation.mjs <project_id> <date> <platform_id> <entry_id> [输出文件]
 */

import { writeFileSync } from 'node:fs';
import { login, api } from './geo-api.mjs';

const [projectId, date, platformId, entryId, outFile] = process.argv.slice(2);

await login();

const r = await api('/api/conversations/search', {
  project_id: projectId, date, platform_id: platformId, entry_id: entryId, page: 1, page_size: 5,
});
const list = Array.isArray(r.data) ? r.data : r.data.list || [r.data];
const json = JSON.stringify(list, null, 2);
if (outFile) {
  writeFileSync(outFile, json, 'utf8');
  console.log(`written: ${outFile} (${list.length} conversations)`);
} else {
  console.log(json);
}
