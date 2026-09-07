#!/usr/bin/env node
/**
 * GEO ONE 数据系统访问工具（自 Slide_JDWL 迁移）。
 *
 * 用法:
 *   node scripts/geo-api.mjs --list                     列出账号下所有项目
 *   node scripts/geo-api.mjs --get <path> [k=v ...]     直接请求任意接口
 *
 * 凭据读取根目录 .env：GEO_API_BASE / GEO_USER / GEO_PASS
 */

import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const envPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const parts = trimmed.split('=');
    const key = parts[0].trim();
    const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
    if (key && val && !process.env[key]) process.env[key] = val;
  }
}

const API_BASE = process.env.GEO_API_BASE;
const USERNAME = process.env.GEO_USER;
const PASSWORD = process.env.GEO_PASS;

let cookie = '';

export async function login() {
  const res = await fetch(new URL('/login', API_BASE), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USERNAME, password: PASSWORD }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(`登录失败: ${json.error}`);
  cookie = (res.headers.getSetCookie?.() || [res.headers.get('set-cookie')])
    .filter(Boolean)
    .map((c) => c.split(';')[0])
    .join('; ');
  return json.user;
}

export async function api(pathname, params = {}) {
  const url = new URL(pathname, API_BASE);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { cookie } });
  const json = await res.json();
  if (!json.ok) throw new Error(`${pathname} 请求失败: ${json.error || res.status}`);
  return json;
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = process.argv.slice(2);
  const user = await login();
  console.error(`已登录: ${user.name} (${user.company_name})`);

  if (args.includes('--list')) {
    const projects = (await api('/api/projects')).data;
    for (const p of projects) {
      console.log(`${p.id}\t${p.project_name}\tproduct=${p.target_product || '-'}\tentries=${p.entry_count ?? '-'}`);
    }
  } else if (args[0] === '--get') {
    const pathname = args[1];
    const params = Object.fromEntries(
      args.slice(2).map((kv) => {
        const i = kv.indexOf('=');
        return [kv.slice(0, i), kv.slice(i + 1)];
      })
    );
    console.log(JSON.stringify(await api(pathname, params), null, 2));
  }
}
