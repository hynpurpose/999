import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

const { flatSlides } = await vite.ssrLoadModule('/src/config/parseConfig.js');
const initialOrder = JSON.parse(
  fs.readFileSync(path.join(root, 'src', 'slideOrder.json'), 'utf-8')
);

const defaultOrder = flatSlides.map((s) => s.id);
const validIds = new Set(defaultOrder);
const initialSet = new Set(initialOrder);

const filteredInitial = initialOrder.filter((id) => validIds.has(id));
const newSlides = defaultOrder.filter((id) => !initialSet.has(id));

const result = [...filteredInitial];
for (const newId of newSlides) {
  const defaultIndex = defaultOrder.indexOf(newId);
  let insertAfterIndex = -1;
  for (let i = defaultIndex - 1; i >= 0; i--) {
    const existingIndex = result.indexOf(defaultOrder[i]);
    if (existingIndex !== -1) {
      insertAfterIndex = existingIndex;
      break;
    }
  }
  result.splice(insertAfterIndex + 1, 0, newId);
}

console.log('config 总页数:', defaultOrder.length);
console.log('slideOrder.json 页数:', initialOrder.length);
console.log('应用实际页数:', result.length);
console.log('被过滤的失效 id:', initialOrder.filter((id) => !validIds.has(id)));
console.log('新增未入 order 的 id:', newSlides);

if (process.argv.includes('--write')) {
  fs.writeFileSync(
    path.join(root, 'src', 'slideOrder.json'),
    JSON.stringify(result, null, 2),
    'utf-8'
  );
  console.log('已写回 slideOrder.json');
}

await vite.close();
