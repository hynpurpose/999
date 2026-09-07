import pptxgen from 'pptxgenjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = path.join(__dirname, '../screenshots');
const OUTPUT_PPT = path.join(__dirname, '../Presentation_2026.pptx');

async function main() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';

  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    console.error('❌ screenshots directory does not exist!');
    process.exit(1);
  }

  // Read screenshots
  const files = fs.readdirSync(SCREENSHOTS_DIR)
    .filter(f => f.startsWith('slide_') && f.endsWith('.png'))
    .sort();

  if (files.length === 0) {
    console.error('❌ No screenshots found in screenshots/ directory!');
    process.exit(1);
  }

  console.log(`Found ${files.length} screenshots. Creating PPTX at ${OUTPUT_PPT}...`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(SCREENSHOTS_DIR, file);
    console.log(`[${i + 1}/${files.length}] Adding ${file}...`);
    
    const slide = pptx.addSlide();
    slide.background = { fill: '000000' };
    slide.addImage({
      path: filePath,
      x: 0,
      y: 0,
      w: 10,
      h: 5.625
    });
  }

  await pptx.writeFile({ fileName: OUTPUT_PPT });
  console.log(`\n✅ PPTX successfully generated at: ${OUTPUT_PPT}`);
}

main().catch(err => {
  console.error('❌ Error generating PPTX:', err);
  process.exit(1);
});
