import { createServer } from 'vite';
import puppeteer from 'puppeteer';
import pptxgen from 'pptxgenjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log('1. Starting Vite dev server programmatically...');
  const server = await createServer({
    configFile: path.resolve(__dirname, '../vite.config.js'),
    server: {
      port: 5178, // run on a distinct port to avoid conflicts
      strictPort: true
    }
  });
  await server.listen();
  
  const address = server.httpServer.address();
  const port = address.port;
  const appUrl = `http://localhost:${port}`;
  console.log(`Vite server listening at ${appUrl}`);

  try {
    console.log('2. Resolving slide config and updating slideOrder.json...');
    const { flatSlides } = await server.ssrLoadModule('./src/config/parseConfig.js');
    const order = flatSlides.map(s => s.id);
    const orderFilePath = path.resolve(__dirname, '../src/slideOrder.json');
    fs.writeFileSync(orderFilePath, JSON.stringify(order, null, 2), 'utf-8');
    console.log(`Successfully wrote ${order.length} slides to slideOrder.json.`);

    console.log('3. Launching browser via Puppeteer...');
    const browser = await puppeteer.launch({
      headless: 'new',
      defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 2 },
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080']
    });
    
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    });

    console.log(`Navigating to ${appUrl}...`);
    await page.goto(appUrl, { waitUntil: 'networkidle0', timeout: 45000 });

    // Inject styles to hide control UI and scale slide to 100% size
    await page.addStyleTag({
      content: `
        aside,
        .export-hide,
        /* 叠在画布上的操作控件一律隐藏，避免漏加 export-hide 再进截图 */
        .flex-1.relative.overflow-hidden > .absolute {
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

    console.log('Waiting 2 seconds for initial slide to settle...');
    await new Promise(r => setTimeout(r, 2000));

    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';

    const screenshotsDir = path.resolve(__dirname, '../export-screenshots');
    if (fs.existsSync(screenshotsDir)) {
      fs.rmSync(screenshotsDir, { recursive: true, force: true });
    }
    fs.mkdirSync(screenshotsDir, { recursive: true });

    const limitArg = process.argv.find(arg => arg.startsWith('--limit='));
    const limit = limitArg ? parseInt(limitArg.split('=')[1], 10) : null;
    const totalSlides = limit ? Math.min(limit, order.length) : order.length;
    console.log(`Starting capture of ${totalSlides} slides (out of ${order.length})...`);

    for (let i = 0; i < totalSlides; i++) {
      console.log(`[${i + 1}/${totalSlides}] Capturing slide: ${order[i]}...`);

      // Wait for slide transitions to complete
      await new Promise(r => setTimeout(r, 1000));

      const slideEl = await page.$('div[style*="width: 1920px"]');
      if (slideEl) {
        const imgPath = path.join(screenshotsDir, `slide-${String(i).padStart(3, '0')}.png`);
        await slideEl.screenshot({ path: imgPath, type: 'png' });

        const slide = pptx.addSlide();
        slide.background = { fill: '000000' };
        slide.addImage({ path: imgPath, x: 0, y: 0, w: '100%', h: '100%' });
      } else {
        console.warn(`Warning: Could not find slide element for slide ${i + 1}`);
      }

      if (i < totalSlides - 1) {
        await page.keyboard.press('ArrowRight');
      }
    }

    const outputFileName = limit ? `Presentation_2026_limit${limit}.pptx` : 'Presentation_2026.pptx';
    const outputName = path.resolve(__dirname, `../${outputFileName}`);
    console.log(`Writing PPTX to ${outputName}...`);
    await pptx.writeFile({ fileName: outputName });
    console.log(`\n✅ PPTX successfully generated at: ${outputName}`);

    await browser.close();
  } catch (err) {
    console.error('❌ Error during PPT export:', err);
  } finally {
    console.log('Closing Vite dev server...');
    await server.close();
  }
}

main();
