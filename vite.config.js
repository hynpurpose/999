import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

/* moduleGraph 的 key 是正斜杠路径，Windows 下 path.resolve 出来的反斜杠查不到模块，
   会导致缓存失效静默失败、刷新后仍读到旧内容 */
function invalidateFile(server, filePath) {
  const mods = server.moduleGraph.getModulesByFile(normalizePath(filePath));
  if (mods) mods.forEach((m) => server.moduleGraph.invalidateModule(m));
}

function slideOrderSavePlugin() {
  return {
    name: 'slide-order-save',
    configureServer(server) {
      server.middlewares.use('/api/save-order', (req, res, next) => {
        if (req.method !== 'POST') return next();

        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (!Array.isArray(data.order)) {
              throw new Error("Invalid payload: 'order' must be an array");
            }
            const filePath = path.resolve(__dirname, 'src/slideOrder.json');
            fs.writeFileSync(filePath, JSON.stringify(data.order, null, 2), 'utf-8');
            // 该文件已从 watch 排除（避免每次自动保存都整页刷新），
            // 这里手动失效模块缓存，保证下次刷新读到最新内容
            invalidateFile(server, filePath);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (err) {
            console.error('Save failed:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
      });
    }
  }
}

// 可视化文字/样式编辑的持久化：和排序一样落盘到 src/slideEdits.json，可进 git、可团队共享
function slideEditsSavePlugin() {
  return {
    name: 'slide-edits-save',
    configureServer(server) {
      // 实时读取磁盘上的 slideEdits.json（每次刷新都拿最新内容，git pull 后无需重启）
      server.middlewares.use('/api/load-edits', (req, res, next) => {
        if (req.method !== 'GET') return next();
        try {
          const filePath = path.resolve(__dirname, 'src/slideEdits.json');
          let payload = { visualEdits: {}, titleOverrides: {} };
          if (fs.existsSync(filePath)) {
            const data = JSON.parse(fs.readFileSync(filePath, 'utf-8') || '{}');
            payload = {
              visualEdits:
                data.visualEdits && typeof data.visualEdits === 'object'
                  ? data.visualEdits
                  : {},
              titleOverrides:
                data.titleOverrides && typeof data.titleOverrides === 'object'
                  ? data.titleOverrides
                  : {},
            };
          }
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-store');
          res.end(JSON.stringify(payload));
        } catch (err) {
          console.error('Load edits failed:', err);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      server.middlewares.use('/api/save-edits', (req, res, next) => {
        if (req.method !== 'POST') return next();

        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const payload = {
              visualEdits:
                data.visualEdits && typeof data.visualEdits === 'object'
                  ? data.visualEdits
                  : {},
              titleOverrides:
                data.titleOverrides && typeof data.titleOverrides === 'object'
                  ? data.titleOverrides
                  : {},
            };
            const filePath = path.resolve(__dirname, 'src/slideEdits.json');
            fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf-8');
            // 与 slideOrder.json 一致：文件已从 watch 排除，这里手动失效模块缓存
            invalidateFile(server, filePath);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (err) {
            console.error('Save edits failed:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), slideOrderSavePlugin(), slideEditsSavePlugin()],
  server: {
    host: true,
    port: 7894,
    strictPort: true,
    allowedHosts: true,
    watch: {
      // 忽略外部生成的临时目录（如 _tmp_*/report.zip），其被占用会导致 EBUSY 崩溃；
      // slideOrder.json 由自动保存频繁写入，排除掉避免每次保存都触发整页刷新
      ignored: ['**/_tmp_*/**', '**/*.zip', '**/src/slideOrder.json', '**/src/slideEdits.json'],
    },
  },
})
