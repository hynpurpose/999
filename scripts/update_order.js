import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const server = await createServer({
    configFile: path.resolve(__dirname, '../vite.config.js'),
  });
  try {
    const { flatSlides } = await server.ssrLoadModule('./src/config/parseConfig.js');
    const order = flatSlides.map(s => s.id);
    const orderFilePath = path.resolve(__dirname, '../src/slideOrder.json');
    fs.writeFileSync(orderFilePath, JSON.stringify(order, null, 2), 'utf-8');
    console.log(`Successfully updated slideOrder.json with ${order.length} slides.`);
  } catch (err) {
    console.error('Failed to update slide order:', err);
  } finally {
    await server.close();
  }
}

main();
