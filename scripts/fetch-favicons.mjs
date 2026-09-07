#!/usr/bin/env node
/**
 * 抓取站点 favicon 存到 public/medical-sources/。
 * 用法: node scripts/fetch-favicons.mjs <name>=<domain> [...]
 */

import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public/medical-sources');

for (const arg of process.argv.slice(2)) {
  const [name, domain] = arg.split('=');
  const candidates = [
    `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
    `https://favicon.im/${domain}?larger=true`,
    `https://${domain}/favicon.ico`,
  ];
  let saved = false;
  for (const url of candidates) {
    try {
      const res = await fetch(url, { redirect: 'follow' });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 200) continue;
      const ext = url.endsWith('.ico') ? 'ico' : 'png';
      writeFileSync(path.join(outDir, `${name}.${ext}`), buf);
      console.log(`${name} <- ${url} (${buf.length} bytes) -> ${name}.${ext}`);
      saved = true;
      break;
    } catch (e) {
      // 换下一个源
    }
  }
  if (!saved) console.log(`${name} 抓取失败（${domain}）`);
}
