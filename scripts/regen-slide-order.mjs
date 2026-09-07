/**
 * 重新生成 src/slideOrder.json
 *
 * slideOrder.json 用页面 id（chapter-{章节key}-{节}-{页}）锁定放映顺序。
 * 章节 key 已改为按标题生成、与位置无关，但在一个 section 中间插页仍会让
 * 后面的页序号后移。改完 slideConfig 后跑一次这个脚本，顺序即与 config 对齐。
 *
 * 用法：node scripts/regen-slide-order.mjs
 */
import { build } from 'esbuild';
import { writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

// 排序只依赖 slideConfig 的结构，页面组件一律替换成占位模块，
// 这样不用打包整棵 React 组件树。CJS 形式的占位可以满足任意具名导入。
const KEEP = /src[\\/]config[\\/](slideConfig|parseConfig)\.js$/;

const stubEverythingElse = {
  name: 'stub-everything-else',
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
};

const result = await build({
  entryPoints: ['src/config/parseConfig.js'],
  bundle: true,
  write: false,
  format: 'esm',
  platform: 'node',
  plugins: [stubEverythingElse],
});

// 写进项目目录再 import：bare 的 react 外部依赖只能从项目内解析
const tmp = resolve('node_modules/.cache/slide-order-bundle.mjs');
writeFileSync(tmp, result.outputFiles[0].text);
let mod;
try {
  mod = await import(pathToFileURL(tmp).href);
} finally {
  rmSync(tmp, { force: true });
}

const order = mod.flatSlides.map((s) => s.id);
writeFileSync('src/slideOrder.json', `${JSON.stringify(order, null, 2)}\n`);
console.log(`slideOrder.json 已更新，共 ${order.length} 页`);
