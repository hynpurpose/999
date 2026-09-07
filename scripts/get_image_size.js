import fs from 'fs';

function readPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  
  // PNG IHDR chunk starts at byte 12 (after 8-byte signature and 4-byte chunk length)
  // Width is 4 bytes at offset 16, Height is 4 bytes at offset 20
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  
  console.log(`PNG Dimensions: ${width} x ${height}`);
  console.log(`Aspect Ratio: ${width / height}`);
}

try {
  readPngDimensions('public/images/geo-test-difference-intro.png');
} catch (err) {
  console.error(err);
}
