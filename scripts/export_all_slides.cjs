const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');

const PORT = 4002;
const DIST_DIR = path.join(__dirname, '..', 'dist');
const OUTPUT_FILE = path.join(__dirname, '..', 'Presentation_2026.pptx');
const ARTIFACT_DIR = 'C:/Users/Administrator/.gemini/antigravity-ide/brain/b9b052de-7d8b-4ddf-ba26-ba288e703cf0';
const ARTIFACT_FILE = path.join(ARTIFACT_DIR, 'Presentation_2026.pptx');

const SLIDE_W = 1920;
const SLIDE_H = 1080;

// Simple static file server using Node built-in modules
const server = http.createServer((req, res) => {
  let relativePath = req.url.split('?')[0];
  if (relativePath === '/') relativePath = '/index.html';
  
  const filePath = path.join(DIST_DIR, relativePath);
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
    // Read slideOrder from filesystem directly (it was synchronized in the previous run!)
    const orderFilePath = path.join(__dirname, '..', 'src', 'slideOrder.json');
    const slideOrder = JSON.parse(fs.readFileSync(orderFilePath, 'utf-8'));
    console.log(`Loaded slide list. Total slides to export: ${slideOrder.length}`);

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

    // Start at slide index 0
    await page.evaluateOnNewDocument(() => {
      localStorage.setItem('currentSlide', '0');
    });

    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Explicitly click on the body to ensure the page has focus for keyboard inputs
    await page.evaluate(() => window.focus());
    await page.click('body');
    await new Promise((r) => setTimeout(r, 1000));

    // Inject styles to hide menu elements
    await page.addStyleTag({
      content: `
        aside {
          display: none !important;
        }
        button[title="打开目录"],
        button[title="全屏演示"],
        div.pointer-events-none.opacity-20,
        .export-hide {
          display: none !important;
        }
        .bg-zinc-600 {
          padding: 0 !important;
          background-color: black !important;
        }
        div[style*="1920"] {
          zoom: 1 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          width: 1920px !important;
          height: 1080px !important;
        }
      `,
    });

    const tempScreenshotsDir = path.join(__dirname, '..', 'export-screenshots-all-temp');
    if (!fs.existsSync(tempScreenshotsDir)) {
      fs.mkdirSync(tempScreenshotsDir, { recursive: true });
    }

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';

    console.log(`Starting capture...`);

    for (let i = 0; i < slideOrder.length; i++) {
      // 1. Wait a bit for transition animations to end
      await new Promise((r) => setTimeout(r, 1200));

      // 2. Fetch the active slide title from the DOM to log and verify slide transitions
      const activeTitle = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.textContent.trim() : 'No Title';
      });

      console.log(`Processing slide ${i + 1}/${slideOrder.length} (${slideOrder[i]}) -> DOM Title: "${activeTitle}"`);

      // 3. Take screenshot
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

      // 4. Navigate to next slide, ensuring window is focused
      if (i < slideOrder.length - 1) {
        await page.evaluate(() => window.focus());
        await page.keyboard.press('ArrowRight');
      }
    }

    // Write file to local workspace
    await pptx.writeFile({ fileName: OUTPUT_FILE });
    console.log(`All slides PPTX generated successfully at ${OUTPUT_FILE}`);

    // Copy file to artifacts folder
    if (fs.existsSync(ARTIFACT_DIR)) {
      fs.copyFileSync(OUTPUT_FILE, ARTIFACT_FILE);
      console.log(`All slides PPTX copied to artifact folder at ${ARTIFACT_FILE}`);
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
