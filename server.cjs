const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4000;
const DIST_DIR = path.join(__dirname, 'dist');

app.use(express.json());

app.post('/api/save-order', (req, res) => {
  const { order } = req.body;
  if (!Array.isArray(order)) {
    return res.status(400).json({ error: "'order' must be an array" });
  }
  try {
    const filePath = path.join(__dirname, 'src/slideOrder.json');
    fs.writeFileSync(filePath, JSON.stringify(order, null, 2), 'utf-8');
    res.json({ success: true });
  } catch (err) {
    console.error('Save failed:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/load-edits', (req, res) => {
  try {
    const filePath = path.join(__dirname, 'src/slideEdits.json');
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
    res.set('Cache-Control', 'no-store');
    res.json(payload);
  } catch (err) {
    console.error('Load edits failed:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/save-edits', (req, res) => {
  const { visualEdits, titleOverrides } = req.body || {};
  try {
    const filePath = path.join(__dirname, 'src/slideEdits.json');
    const payload = {
      visualEdits:
        visualEdits && typeof visualEdits === 'object' ? visualEdits : {},
      titleOverrides:
        titleOverrides && typeof titleOverrides === 'object' ? titleOverrides : {},
    };
    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf-8');
    res.json({ success: true });
  } catch (err) {
    console.error('Save edits failed:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  Slide server running at http://localhost:${PORT}\n`);
});
