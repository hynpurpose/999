/* 列出所有幻灯片 id 与名称，按关键字过滤。用法: node scripts/list-slide-ids.cjs [关键字] */
const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');

const root = path.join(__dirname, '..');
const keyword = process.argv[2] || '';

const stubPlugin = {
  name: 'stub-pages',
  setup(build) {
    build.onResolve({ filter: /(pages|Pages_Before)\// }, (args) => ({ path: args.path, namespace: 'stub' }));
    build.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({
      contents: 'module.exports = new Proxy(function(){}, { get: (t,k) => (k === "__esModule" ? false : t[k] || function(){}) });',
      loader: 'js',
    }));
  },
};

(async () => {
  const outfile = path.join(root, '.tmp-list.cjs');
  await esbuild.build({
    entryPoints: [path.join(root, 'src/config/parseConfig.js')],
    bundle: true, format: 'cjs', platform: 'node', outfile,
    plugins: [stubPlugin], logLevel: 'warning',
  });

  const { flatSlides } = require(outfile);
  const lines = flatSlides
    .map((s) => `${s.id}\t${(s.name || '').replace(/\n/g, ' ')}`)
    .filter((l) => !keyword || l.includes(keyword));
  fs.writeFileSync(path.join(root, 'tmp/slide-ids.txt'), lines.join('\n'), 'utf8');
  console.log(`${lines.length} 条，已写入 tmp/slide-ids.txt`);

  fs.unlinkSync(outfile);
})();
