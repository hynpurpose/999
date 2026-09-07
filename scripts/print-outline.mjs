/** 打印当前 slideOrder.json 的放映大纲，用于核对 part 封面/目录与章节的位置 */
import { build } from 'esbuild';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const KEEP = /src[\\/]config[\\/](slideConfig|parseConfig)\.js$/;

const result = await build({
  entryPoints: ['src/config/parseConfig.js'],
  bundle: true,
  write: false,
  format: 'esm',
  platform: 'node',
  plugins: [
    {
      name: 'stub',
      setup(b) {
        b.onResolve({ filter: /.*/ }, (args) => {
          if (args.kind === 'entry-point') return null;
          const target = resolve(args.resolveDir, args.path);
          if (KEEP.test(target)) return { path: target };
          return { path: args.path, namespace: 'stub' };
        });
        b.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({
          contents: 'module.exports = new Proxy({}, { get: () => ({}) });',
          loader: 'js',
        }));
      },
    },
  ],
});

const tmp = resolve('node_modules/.cache/outline-bundle.mjs');
writeFileSync(tmp, result.outputFiles[0].text);
let mod;
try {
  mod = await import(pathToFileURL(tmp).href);
} finally {
  rmSync(tmp, { force: true });
}

const byId = new Map(mod.flatSlides.map((s) => [s.id, s]));
const order = JSON.parse(readFileSync('src/slideOrder.json', 'utf8'));

order.forEach((id, i) => {
  const s = byId.get(id);
  if (!s) return console.log(`${String(i).padStart(3)}  ??? ${id}`);
  if (s.type === 'content') return;
  const label = (s.name || '').replace(/\n/g, ' ');
  console.log(`${String(i).padStart(3)}  [${s.type}] ${label}`);
});
