const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const shotsDir = path.join(__dirname, '..', 'export-screenshots');
const output = process.argv[2] || path.join(__dirname, '..', '医疗行业GEO全景指南_全量.pptx');

const files = fs
  .readdirSync(shotsDir)
  .filter((f) => /^slide-\d+\.png$/.test(f))
  .sort();

if (files.length === 0) {
  console.error('No slide-*.png found in export-screenshots');
  process.exit(1);
}

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_16x9';
pptx.author = 'GEO索引未来';
pptx.title = '医疗行业 GEO 全景指南';

for (const file of files) {
  const slide = pptx.addSlide();
  slide.addImage({
    path: path.join(shotsDir, file),
    x: 0,
    y: 0,
    w: '100%',
    h: '100%',
  });
}

pptx
  .writeFile({ fileName: output })
  .then(() => {
    console.log(JSON.stringify({ type: 'done', output, slides: files.length }));
  })
  .catch((err) => {
    console.error(JSON.stringify({ type: 'error', message: err.message }));
    process.exit(1);
  });
