const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');

const PORT = 4001;
const DIST_DIR = path.join(__dirname, '..', 'dist');
const OUTPUT_FILE = path.join(__dirname, '..', 'Presentation_AboutUs.pptx');
const ARTIFACT_DIR = 'C:/Users/Administrator/.gemini/antigravity-ide/brain/d68a4324-5f0d-41c3-9b3f-8f81c4b40284';
const ARTIFACT_FILE = path.join(ARTIFACT_DIR, 'Presentation_AboutUs.pptx');

const SLIDE_W = 1920;
const SLIDE_H = 1080;

// Simple static file server using built-in Node modules (no express dependency required)
const server = http.createServer((req, res) => {
  // Normalize request path
  let relativePath = req.url.split('?')[0];
  if (relativePath === '/') relativePath = '/index.html';
  
  const filePath = path.join(DIST_DIR, relativePath);
  
  // Basic content type mapping
  const ext = path.extname(filePath);
  let contentType = 'text/html';
  if (ext === '.css') contentType = 'text/css';
  else if (ext === '.js') contentType = 'application/javascript';
  else if (ext === '.png') contentType = 'image/png';
  else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
  else if (ext === '.svg') contentType = 'image/svg+xml';
  else if (ext === '.ico') contentType = 'image/x-icon';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`File not found: ${relativePath}`);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, async () => {
  console.log(`Temp static server running at http://localhost:${PORT}`);

  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({
      width: SLIDE_W + 128,
      height: SLIDE_H + 128,
      deviceScaleFactor: 2,
    });

    // Seed localStorage to open on index 28 ("关于我们" cover)
    await page.evaluateOnNewDocument(() => {
      localStorage.setItem('currentSlide', '28');
    });

    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0', timeout: 30000 });

    // Inject styles to hide menu elements
    await page.addStyleTag({
      content: `
        div[style*="1920"] {
          zoom: 1 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }
        button[title="打开目录"],
        button[title="全屏演示"],
        div.pointer-events-none.opacity-20 {
          display: none !important;
        }
      `,
    });

    await new Promise((r) => setTimeout(r, 1500));

    const tempScreenshotsDir = path.join(__dirname, '..', 'export-screenshots-temp');
    if (!fs.existsSync(tempScreenshotsDir)) {
      fs.mkdirSync(tempScreenshotsDir, { recursive: true });
    }

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';

    // Capturing 9 slides in the "About Us" section (indices 28 to 36)
    const numSlides = 9;
    console.log(`Starting capture of ${numSlides} slides of "关于我们" section...`);

    for (let i = 0; i < numSlides; i++) {
      console.log(`Processing slide ${i + 1}/${numSlides}...`);
      await new Promise((r) => setTimeout(r, 1000));

      const slideEl = await page.$('div[style*="width: 1920px"]');
      if (slideEl) {
        const imgPath = path.join(
          tempScreenshotsDir,
          `slide-${String(i).padStart(3, '0')}.png`
        );
        await slideEl.screenshot({ path: imgPath, type: 'png' });

        const slide = pptx.addSlide();
        slide.addImage({ path: imgPath, x: 0, y: 0, w: '100%', h: '100%' });
      }

      if (i < numSlides - 1) {
        await page.keyboard.press('ArrowRight');
      }
    }

    // Write file to local workspace
    await pptx.writeFile({ fileName: OUTPUT_FILE });
    console.log(`PPTX file generated at ${OUTPUT_FILE}`);

    // Copy file to artifacts folder if path exists
    if (fs.existsSync(ARTIFACT_DIR)) {
      fs.copyFileSync(OUTPUT_FILE, ARTIFACT_FILE);
      console.log(`PPTX file copied to artifact folder at ${ARTIFACT_FILE}`);
    }

    // Cleanup temp screenshots
    fs.readdirSync(tempScreenshotsDir).forEach((file) => {
      fs.unlinkSync(path.join(tempScreenshotsDir, file));
    });
    fs.rmdirSync(tempScreenshotsDir);

    await browser.close();
    server.close(() => {
      console.log('Temp server closed. Export finished successfully.');
      process.exit(0);
    });

  } catch (err) {
    console.error('Error occurred during export:', err);
    server.close(() => {
      process.exit(1);
    });
  }
});
