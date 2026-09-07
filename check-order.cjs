const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');

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
  const outfile = path.join(__dirname, '.tmp-check.cjs');
  await esbuild.build({
    entryPoints: [path.join(__dirname, 'src/config/parseConfig.js')],
    bundle: true, format: 'cjs', platform: 'node', outfile,
    plugins: [stubPlugin], logLevel: 'warning',
  });

  const { flatSlides, parsedConfig } = require(outfile);

  console.log('=== 章节编号对照 ===');
  parsedConfig.chapters.forEach((ch, i) => {
    console.log(`chapter-${i}\t[part=${ch.partId}]\t${ch.title.replace(/\n/g, '')}`);
  });

  const order = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/slideOrder.json'), 'utf8'));
  const byId = Object.fromEntries(flatSlides.map((s) => [s.id, s]));

  console.log('\n=== slideOrder.json 中 part-xinqi 前后 12 页 ===');
  const idx = order.indexOf('part-xinqi-cover');
  for (let i = Math.max(0, idx - 8); i < Math.min(order.length, idx + 5); i++) {
    const s = byId[order[i]];
    const mark = order[i].startsWith('part-xinqi') ? '  <<<<<<' : '';
    console.log(`${String(i + 1).padStart(3)}  ${order[i].padEnd(22)} ${s ? s.name.replace(/\n/g, '') : '??'}${mark}`);
  }

  fs.unlinkSync(outfile);
})();
