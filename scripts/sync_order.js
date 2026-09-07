import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { flatSlides } from '../src/config/parseConfig.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const orderFilePath = path.join(__dirname, '..', 'src', 'slideOrder.json');

// Read initialOrder safely using fs
const initialOrder = JSON.parse(fs.readFileSync(orderFilePath, 'utf-8'));

const defaultOrder = flatSlides.map(s => s.id);
const validIds = new Set(defaultOrder);
const initialSet = new Set(initialOrder);

// Filter out deleted slides
const filteredInitial = initialOrder.filter(id => validIds.has(id));

// Find new slides
const newSlides = defaultOrder.filter(id => !initialSet.has(id));

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

fs.writeFileSync(orderFilePath, JSON.stringify(result, null, 2), 'utf-8');
console.log(`Synchronized slideOrder.json successfully! Total slides: ${result.length}`);
