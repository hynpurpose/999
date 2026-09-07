import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Undo2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from 'lucide-react';

const STORAGE_KEY = 'slide-visual-edits';
const TITLE_OVERRIDES_KEY = 'slide-title-overrides';
const SLIDE_WIDTH = 1920;

/* ------------------------------------------------------------------ */
/* 持久化：localStorage 里按 slideId -> path -> override 存储             */
/* ------------------------------------------------------------------ */
function loadAll() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}
function saveAll(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
  // 通知 App 把可视化编辑防抖写回 slideEdits.json（持久化，可进 git）
  window.dispatchEvent(new Event('slide-visual-edits-changed'));
}

/* ------------------------------------------------------------------ */
/* 大标题覆盖：编辑器里改了页面大标题后，目录面板要同步显示新标题。       */
/* 存 slideId -> 标题文本，并广播事件通知 App 更新目录面板。             */
/* ------------------------------------------------------------------ */
function saveTitleOverride(slideId, title) {
  try {
    const all = JSON.parse(localStorage.getItem(TITLE_OVERRIDES_KEY)) || {};
    if (title === null) delete all[slideId];
    else all[slideId] = title;
    localStorage.setItem(TITLE_OVERRIDES_KEY, JSON.stringify(all));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent('slide-title-override', { detail: { slideId, title } })
  );
}

/* el 是否就是大标题本身，或在大标题内部 / 包含大标题 */
function findRelatedTitleEl(root, el) {
  const titleEl = root?.querySelector('[data-slide-title]');
  if (!titleEl || !el) return null;
  if (titleEl === el || titleEl.contains(el) || el.contains(titleEl)) return titleEl;
  return null;
}

/* ------------------------------------------------------------------ */
/* DOM 路径：把选中元素编码成相对 slide 根节点的 child index 链           */
/* ------------------------------------------------------------------ */
function getPath(root, el) {
  const path = [];
  let node = el;
  while (node && node !== root) {
    const parent = node.parentElement;
    if (!parent) return null;
    const index = Array.prototype.indexOf.call(parent.children, node);
    path.unshift(index);
    node = parent;
  }
  return node === root ? path.join('.') : null;
}
function resolvePath(root, path) {
  if (!root) return null;
  if (path === '') return root;
  let node = root;
  for (const seg of path.split('.')) {
    if (!node) return null;
    node = node.children[Number(seg)];
  }
  return node || null;
}

/* ------------------------------------------------------------------ */
/* 颜色工具                                                             */
/* ------------------------------------------------------------------ */
function rgbToHex(rgb) {
  const m = rgb && rgb.match(/\d+/g);
  if (!m || m.length < 3) return '#ffffff';
  return (
    '#' +
    m
      .slice(0, 3)
      .map((n) => Number(n).toString(16).padStart(2, '0'))
      .join('')
  );
}

/* 记录元素被修改前的原始 style 和内容，用于「重置 / 撤销」还原到源码状态 */
const originals = new WeakMap();
function ensureOriginal(el) {
  if (!originals.has(el)) {
    originals.set(el, {
      style: el.getAttribute('style'),
      html: el.innerHTML,
    });
  }
}

/* 把一个 override 应用到元素上（只写内联样式/文本，不动源码） */
function applyOverride(el, o) {
  if (!el || !o) return;
  ensureOriginal(el);
  const dx = Number(o.dx) || 0;
  const dy = Number(o.dy) || 0;
  el.style.translate = dx || dy ? `${dx}px ${dy}px` : '';
  el.style.rotate = o.rotate ? `${o.rotate}deg` : '';
  if (o.fontSize) el.style.fontSize = `${o.fontSize}px`;
  if (o.color) el.style.color = o.color;
  if (o.fontFamily) el.style.fontFamily = o.fontFamily;
  if (o.fontWeight) el.style.fontWeight = String(o.fontWeight);
  if (o.italic !== undefined) el.style.fontStyle = o.italic ? 'italic' : 'normal';
  if (o.underline !== undefined || o.strikethrough !== undefined) {
    const dec = [o.underline ? 'underline' : '', o.strikethrough ? 'line-through' : '']
      .filter(Boolean)
      .join(' ');
    el.style.textDecorationLine = dec || 'none';
  }
  if (o.textAlign) el.style.textAlign = o.textAlign;
  if (o.lineHeight) el.style.lineHeight = String(o.lineHeight);
  if (o.letterSpacing !== undefined && o.letterSpacing !== '')
    el.style.letterSpacing = `${o.letterSpacing}px`;
  if (o.marginTop !== undefined && o.marginTop !== '')
    el.style.marginTop = `${o.marginTop}px`;
  if (o.marginBottom !== undefined && o.marginBottom !== '')
    el.style.marginBottom = `${o.marginBottom}px`;
  // 文案：优先按 innerHTML 还原（保留内部 span 的字号/颜色等局部格式）；
  // 旧版数据只存了纯文本时才退回 textContent
  if (typeof o.html === 'string') {
    if (el.innerHTML !== o.html) el.innerHTML = o.html;
  } else if (typeof o.text === 'string' && el.textContent !== o.text) {
    el.textContent = o.text;
  }
}

/* 把元素还原到源码状态并清掉记录 */
function restoreOriginal(el) {
  if (!el) return;
  if (originals.has(el)) {
    const orig = originals.get(el);
    if (orig.style === null) el.removeAttribute('style');
    else el.setAttribute('style', orig.style);
    el.innerHTML = orig.html;
    originals.delete(el);
  } else {
    el.style.translate = '';
    el.style.rotate = '';
  }
}

/* 简短描述一个元素（给面板标题用） */
function describe(el) {
  if (!el) return '';
  const tag = el.tagName.toLowerCase();
  const text = (el.textContent || '').trim().replace(/\s+/g, ' ');
  return text ? `${tag} · ${text.slice(0, 24)}${text.length > 24 ? '…' : ''}` : tag;
}

/* Keynote 风格的字体 / 字重选项 */
const FONT_FAMILIES = [
  { label: '默认字体', value: '' },
  { label: '苹方（PingFang SC）', value: '"PingFang SC", sans-serif' },
  { label: '冬青黑体', value: '"Hiragino Sans GB", sans-serif' },
  { label: '宋体（Songti SC）', value: '"Songti SC", serif' },
  { label: '楷体（Kaiti SC）', value: '"Kaiti SC", serif' },
  { label: 'Helvetica Neue', value: '"Helvetica Neue", Helvetica, sans-serif' },
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Times New Roman', value: '"Times New Roman", Times, serif' },
  { label: '等宽（Menlo）', value: 'Menlo, "Courier New", monospace' },
];

const FONT_WEIGHTS = [
  { label: '细体', value: 300 },
  { label: '常规体', value: 400 },
  { label: '中黑体', value: 500 },
  { label: '半粗体', value: 600 },
  { label: '粗体', value: 700 },
  { label: '特粗体', value: 900 },
];

function normalizeAlign(v) {
  if (v === 'start') return 'left';
  if (v === 'end') return 'right';
  return v;
}

export default function SlideEditor({ enabled, slideId, slideKey, rootRef, initialTargetRef, editsReady = true }) {
  const [selected, setSelected] = useState(null); // DOM 元素
  const [ov, setOv] = useState(null); // 当前选中元素的 override 数据
  const [box, setBox] = useState(null); // 高亮框在屏幕上的位置
  const [prefill, setPrefill] = useState({
    fontSize: '',
    color: '#ffffff',
    fontFamily: '',
    fontWeight: 400,
    italic: false,
    underline: false,
    strikethrough: false,
    textAlign: 'left',
    lineHeight: '',
  });
  const [inlineEditing, setInlineEditing] = useState(false); // 直接在画面中改字
  const [tab, setTab] = useState('text'); // 'text' | 'arrange'
  const [, setHistVer] = useState(0); // 撤销栈变化时触发重渲染
  const [hasSelRange, setHasSelRange] = useState(false); // 改字时拖选了部分文字
  const [fragVal, setFragVal] = useState({ fontSize: '', color: '#ffffff' }); // 选中片段的当前字号/颜色
  const dragRef = useRef(null);
  const patchRef = useRef(null);
  const historyRef = useRef([]); // 撤销栈：{ slideId, path, prev, time }
  const savedRangeRef = useRef(null); // 改字时保存的文字选区（焦点移到面板后仍可用）
  const activeSpanRef = useRef(null); // 已为当前选区创建的样式 span，可复用

  /* 读取 / 写入当前 slide 的全部 override */
  const getSlideEdits = useCallback(() => loadAll()[slideId] || {}, [slideId]);
  const setElementEdit = useCallback(
    (path, override) => {
      const all = loadAll();
      if (!all[slideId]) all[slideId] = {};
      if (override) all[slideId][path] = override;
      else {
        delete all[slideId][path];
        if (Object.keys(all[slideId]).length === 0) delete all[slideId];
      }
      saveAll(all);
    },
    [slideId]
  );

  /* ---------------- 撤销栈 ---------------- */
  const pushHistory = useCallback(
    (path, prevOverride) => {
      const h = historyRef.current;
      const last = h[h.length - 1];
      const now = Date.now();
      // 同一元素的连续快速修改（拖拽、滑杆、打字）合并成一步
      if (last && last.slideId === slideId && last.path === path && now - last.time < 600) {
        last.time = now;
        return;
      }
      h.push({
        slideId,
        path,
        prev: prevOverride ? { ...prevOverride } : null,
        time: now,
      });
      if (h.length > 100) h.shift();
      setHistVer((v) => v + 1);
    },
    [slideId]
  );

  /* 每次切换页面 / 变体后，把已保存的调整重新应用到新渲染出的 DOM 上 */
  useEffect(() => {
    setSelected(null);
    setOv(null);
    setBox(null);
    // 等 App 从服务端拿到最新编辑（editsReady）再应用，避免用旧的 localStorage 覆盖，
    // 同时保证 DOM 是刚渲染的源内容，被删除的编辑能正确还原
    if (!editsReady) return;
    const raf = requestAnimationFrame(() => {
      const root = rootRef.current;
      if (!root) return;
      const edits = getSlideEdits();
      let titleTouched = false;
      Object.entries(edits).forEach(([path, override]) => {
        const el = resolvePath(root, path);
        if (el) {
          applyOverride(el, override);
          // 历史改动里有大标题的文案修改：加载时也同步到目录面板
          if (typeof override.html === 'string' && findRelatedTitleEl(root, el)) {
            titleTouched = true;
          }
        }
      });
      if (titleTouched) {
        const titleEl = root.querySelector('[data-slide-title]');
        if (titleEl) saveTitleOverride(slideId, titleEl.textContent.trim());
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [slideKey, slideId, rootRef, getSlideEdits, editsReady]);

  /* 计算当前缩放比例（slide 用 zoom 缩放） */
  const getScale = useCallback(() => {
    const root = rootRef.current;
    if (!root) return 1;
    const rect = root.getBoundingClientRect();
    return rect.width / SLIDE_WIDTH || 1;
  }, [rootRef]);

  /* 更新高亮框位置 */
  const updateBox = useCallback((el) => {
    if (!el) return setBox(null);
    const r = el.getBoundingClientRect();
    setBox({ left: r.left, top: r.top, width: r.width, height: r.height });
  }, []);

  /* 选中一个元素：读取现有 override + 计算样式作为面板默认值 */
  const selectElement = useCallback(
    (el) => {
      const root = rootRef.current;
      if (!root || !el || el === root || !root.contains(el)) return;
      const path = getPath(root, el);
      if (path === null) return;

      const edits = getSlideEdits();
      const existing = edits[path] || {};
      const cs = getComputedStyle(el);
      const fs = parseFloat(cs.fontSize) || 0;
      const lh = parseFloat(cs.lineHeight);
      setPrefill({
        fontSize: Math.round(fs) || '',
        color: rgbToHex(cs.color),
        fontFamily: cs.fontFamily,
        fontWeight: Number(cs.fontWeight) || 400,
        italic: cs.fontStyle === 'italic',
        underline: (cs.textDecorationLine || '').includes('underline'),
        strikethrough: (cs.textDecorationLine || '').includes('line-through'),
        textAlign: normalizeAlign(cs.textAlign),
        lineHeight: fs && !Number.isNaN(lh) ? Number((lh / fs).toFixed(2)) : '',
      });
      setSelected(el);
      setOv({
        path,
        dx: existing.dx || 0,
        dy: existing.dy || 0,
        rotate: existing.rotate || 0,
        fontSize: existing.fontSize || '',
        color: existing.color || '',
        fontFamily: existing.fontFamily || '',
        fontWeight: existing.fontWeight || '',
        italic: existing.italic,
        underline: existing.underline,
        strikethrough: existing.strikethrough,
        textAlign: existing.textAlign || '',
        lineHeight: existing.lineHeight || '',
        letterSpacing: existing.letterSpacing ?? '',
        marginTop: existing.marginTop ?? '',
        marginBottom: existing.marginBottom ?? '',
        // 文案：text 供面板文本框显示；html 是真正持久化的内容（保留局部格式）。
        // _baseHtml 用来判断内容是否真的被改过（null 表示已有历史改动）
        text: existing.text !== undefined ? existing.text : el.textContent,
        html: existing.html,
        _baseHtml:
          existing.html !== undefined || existing.text !== undefined
            ? null
            : el.innerHTML,
      });
      updateBox(el);
    },
    [rootRef, getSlideEdits, updateBox]
  );

  /* 单击选中元素；双击进入画面内改字（Keynote 习惯） */
  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    if (!root) return;

    const onClick = (e) => {
      const el = e.target;
      if (!(el instanceof HTMLElement) || !root.contains(el)) return;
      // 正在画面内改字：点击选中元素内部只是移动光标，放行
      if (inlineEditing && selected && selected.contains(el)) return;
      e.preventDefault();
      e.stopPropagation();
      setInlineEditing(false);
      if (el === root) {
        // 点空白处取消选中
        setSelected(null);
        setOv(null);
        setBox(null);
        return;
      }
      selectElement(el);
    };

    const onDblClick = (e) => {
      const el = e.target;
      if (!(el instanceof HTMLElement) || !root.contains(el)) return;
      if (inlineEditing && selected && selected.contains(el)) return;
      e.preventDefault();
      e.stopPropagation();
      if (el === root) return;
      selectElement(el);
      setInlineEditing(true);
    };

    root.addEventListener('click', onClick, true);
    root.addEventListener('dblclick', onDblClick, true);
    return () => {
      root.removeEventListener('click', onClick, true);
      root.removeEventListener('dblclick', onDblClick, true);
    };
  }, [enabled, slideKey, rootRef, selectElement, inlineEditing, selected]);

  /* 双击幻灯片进入编辑模式时，直接选中当初双击的那个元素
     （等画布缩小的过渡动画结束后再定位高亮框） */
  useEffect(() => {
    if (!enabled || !initialTargetRef) return;
    const el = initialTargetRef.current;
    if (!el) return;
    initialTargetRef.current = null;
    if (el instanceof HTMLElement) {
      const t = setTimeout(() => selectElement(el), 350);
      return () => clearTimeout(t);
    }
  }, [enabled, initialTargetRef, selectElement]);

  /* 选中元素后，同步高亮框（窗口尺寸变化 / 滚动） */
  useEffect(() => {
    if (!selected) return;
    const sync = () => updateBox(selected);
    window.addEventListener('resize', sync);
    window.addEventListener('scroll', sync, true);
    return () => {
      window.removeEventListener('resize', sync);
      window.removeEventListener('scroll', sync, true);
    };
  }, [selected, updateBox]);

  /* 退出编辑模式：清掉高亮，但保留已应用的样式 */
  useEffect(() => {
    if (!enabled) {
      setSelected(null);
      setOv(null);
      setBox(null);
      setInlineEditing(false);
    }
  }, [enabled]);

  /* 应用并持久化一个字段的变化（写入前先记一步撤销） */
  const patch = useCallback(
    (changes) => {
      if (!selected || !ov) return;

      // 面板文本框改纯文本：直接写 textContent（会合并内部格式，有提示），
      // 然后以改动后的 innerHTML 作为持久化内容
      if ('text' in changes && !('html' in changes)) {
        if (selected.textContent !== changes.text) {
          ensureOriginal(selected);
          selected.textContent = changes.text;
        }
        changes = { ...changes, html: selected.innerHTML };
      }

      const next = { ...ov, ...changes };
      setOv(next);

      pushHistory(ov.path, getSlideEdits()[ov.path] || null);

      // 内容是否真的被改过（没改过就不动 innerHTML）
      const htmlActive =
        next._baseHtml === null ||
        (typeof next.html === 'string' && next.html !== next._baseHtml);

      // 被清空的字段，把内联样式一并清掉（回退到源码样式）
      const clearable = {
        fontSize: 'fontSize',
        color: 'color',
        fontFamily: 'fontFamily',
        fontWeight: 'fontWeight',
        textAlign: 'textAlign',
        lineHeight: 'lineHeight',
        letterSpacing: 'letterSpacing',
        marginTop: 'marginTop',
        marginBottom: 'marginBottom',
      };
      Object.entries(clearable).forEach(([key, prop]) => {
        const v = next[key];
        if (v === '' || v === undefined) selected.style[prop] = '';
      });

      applyOverride(selected, {
        ...next,
        html: htmlActive ? next.html : undefined,
        text: undefined,
      });
      updateBox(selected);

      // 只有真正有调整时才写入存储
      const meaningful =
        next.dx ||
        next.dy ||
        next.rotate ||
        next.fontSize ||
        next.color ||
        next.fontFamily ||
        next.fontWeight ||
        next.textAlign ||
        next.lineHeight ||
        next.italic !== undefined ||
        next.underline !== undefined ||
        next.strikethrough !== undefined ||
        (next.letterSpacing !== '' && next.letterSpacing !== undefined) ||
        (next.marginTop !== '' && next.marginTop !== undefined) ||
        (next.marginBottom !== '' && next.marginBottom !== undefined) ||
        htmlActive;
      setElementEdit(
        ov.path,
        meaningful
          ? {
              dx: Number(next.dx) || 0,
              dy: Number(next.dy) || 0,
              rotate: Number(next.rotate) || 0,
              fontSize: next.fontSize || '',
              color: next.color || '',
              fontFamily: next.fontFamily || '',
              fontWeight: next.fontWeight || '',
              textAlign: next.textAlign || '',
              lineHeight: next.lineHeight || '',
              letterSpacing: next.letterSpacing,
              ...(next.italic !== undefined ? { italic: next.italic } : {}),
              ...(next.underline !== undefined ? { underline: next.underline } : {}),
              ...(next.strikethrough !== undefined
                ? { strikethrough: next.strikethrough }
                : {}),
              ...(next.marginTop !== '' && next.marginTop !== undefined
                ? { marginTop: next.marginTop }
                : {}),
              ...(next.marginBottom !== '' && next.marginBottom !== undefined
                ? { marginBottom: next.marginBottom }
                : {}),
              ...(htmlActive ? { html: next.html ?? selected.innerHTML } : {}),
            }
          : null
      );

      // 改的是页面大标题：同步到目录面板
      if (htmlActive) {
        const titleEl = findRelatedTitleEl(rootRef.current, selected);
        if (titleEl) saveTitleOverride(slideId, titleEl.textContent.trim());
      }
    },
    [selected, ov, setElementEdit, updateBox, pushHistory, getSlideEdits, rootRef, slideId]
  );
  patchRef.current = patch;

  /* 撤销上一步操作（⌘Z） */
  const undo = useCallback(() => {
    const h = historyRef.current;
    const last = h[h.length - 1];
    if (!last || last.slideId !== slideId) return;
    h.pop();
    setHistVer((v) => v + 1);

    const root = rootRef.current;
    const el = root ? resolvePath(root, last.path) : null;
    setElementEdit(last.path, last.prev);
    if (el) {
      restoreOriginal(el);
      if (last.prev) applyOverride(el, last.prev);
      // 撤销涉及大标题时，同步目录面板（完全还原则清掉覆盖）
      const titleEl = findRelatedTitleEl(root, el);
      if (titleEl) {
        saveTitleOverride(
          slideId,
          last.prev && typeof last.prev.html === 'string'
            ? titleEl.textContent.trim()
            : null
        );
      }
    }
    setInlineEditing(false);
    if (el && ov && ov.path === last.path) {
      selectElement(el);
    }
  }, [slideId, rootRef, setElementEdit, ov, selectElement]);

  const canUndo =
    historyRef.current.length > 0 &&
    historyRef.current[historyRef.current.length - 1].slideId === slideId;

  /* ⌘Z / Ctrl+Z 全局撤销（正在打字时交给系统自带的文字撤销） */
  useEffect(() => {
    if (!enabled) return;
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key.toLowerCase() === 'z') {
        const t = e.target;
        if (t.tagName === 'TEXTAREA' || t.isContentEditable) return;
        e.preventDefault();
        e.stopPropagation();
        undo();
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [enabled, undo]);

  /* 拖拽高亮框来移动元素 */
  const onBoxPointerDown = (e) => {
    if (!selected || !ov) return;
    e.preventDefault();
    e.stopPropagation();
    const scale = getScale();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseDx: Number(ov.dx) || 0,
      baseDy: Number(ov.dy) || 0,
      scale,
    };

    const onMove = (ev) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = Math.round(d.baseDx + (ev.clientX - d.startX) / d.scale);
      const dy = Math.round(d.baseDy + (ev.clientY - d.startY) / d.scale);
      patchRef.current({ dx, dy });
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  /* 键盘微调（选中元素时，方向键移动，Shift 步长 10） */
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      // 正在画面里直接改字：Esc 退出改字，其余按键交给输入光标
      if (inlineEditing) {
        if (e.key === 'Escape') {
          setInlineEditing(false);
          e.preventDefault();
          e.stopPropagation();
        }
        return;
      }
      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.isContentEditable
      )
        return;
      if (e.metaKey || e.ctrlKey) return;
      const step = e.shiftKey ? 10 : 1;
      let handled = true;
      if (e.key === 'ArrowLeft') patch({ dx: (Number(ov.dx) || 0) - step });
      else if (e.key === 'ArrowRight') patch({ dx: (Number(ov.dx) || 0) + step });
      else if (e.key === 'ArrowUp') patch({ dy: (Number(ov.dy) || 0) - step });
      else if (e.key === 'ArrowDown') patch({ dy: (Number(ov.dy) || 0) + step });
      else if (e.key === 'Escape') {
        setSelected(null);
        setOv(null);
        setBox(null);
      } else handled = false;
      if (handled) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [selected, ov, patch, inlineEditing]);

  /* 画面内直接编辑文字：给选中元素开 contentEditable，输入实时保存 */
  useEffect(() => {
    if (!inlineEditing || !selected) return;
    ensureOriginal(selected);
    try {
      selected.contentEditable = 'plaintext-only';
    } catch {
      selected.contentEditable = 'true';
    }
    // 上层容器有 select-none，需要临时放开才能出现光标
    const prevUserSelect = selected.style.userSelect;
    selected.style.userSelect = 'text';
    selected.style.cursor = 'text';
    selected.focus();
    // 光标移到文字末尾
    const range = document.createRange();
    range.selectNodeContents(selected);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    const onInput = () =>
      patchRef.current({ html: selected.innerHTML, text: selected.textContent });
    selected.addEventListener('input', onInput);
    return () => {
      selected.removeEventListener('input', onInput);
      selected.removeAttribute('contenteditable');
      selected.style.userSelect = prevUserSelect;
      selected.style.cursor = '';
    };
  }, [inlineEditing, selected]);

  /* 改字时跟踪文字选区：拖选一段文字后，面板的字体/字号/颜色只作用于该片段。
     焦点移到面板输入框时选区会失效，所以随时把有效选区备份到 ref 里 */
  useEffect(() => {
    if (!inlineEditing || !selected) {
      savedRangeRef.current = null;
      activeSpanRef.current = null;
      setHasSelRange(false);
      return;
    }
    const onSel = () => {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const r = sel.getRangeAt(0);
      if (!selected.contains(r.commonAncestorContainer)) return; // 选区在面板等处，保留备份
      if (r.collapsed) {
        // 在元素内点击（光标塌缩）：视为取消片段选择
        savedRangeRef.current = null;
        activeSpanRef.current = null;
        setHasSelRange(false);
        return;
      }
      savedRangeRef.current = r.cloneRange();
      // 选区变了就不再复用旧 span
      const span = activeSpanRef.current;
      if (span && !(span.contains(r.startContainer) && span.contains(r.endContainer))) {
        activeSpanRef.current = null;
      }
      // 读取选区起点处的字号/颜色，作为面板显示值
      const sn = r.startContainer;
      const se = sn.nodeType === 1 ? sn : sn.parentElement;
      if (se) {
        const cs = getComputedStyle(se);
        setFragVal({
          fontSize: Math.round(parseFloat(cs.fontSize)) || '',
          color: rgbToHex(cs.color),
        });
      }
      setHasSelRange(true);
    };
    document.addEventListener('selectionchange', onSel);
    return () => document.removeEventListener('selectionchange', onSel);
  }, [inlineEditing, selected]);

  /* 把样式只应用到选中的文字片段：用 span 包住选区 */
  const styleSelection = useCallback(
    (styles) => {
      const el = selected;
      const range = savedRangeRef.current;
      if (!el || !range) return false;
      ensureOriginal(el);

      let span = activeSpanRef.current;
      if (!span || !el.contains(span)) {
        span = document.createElement('span');
        try {
          span.appendChild(range.extractContents());
          range.insertNode(span);
        } catch {
          return false; // 选区跨越了无法拆分的结构，退回整个元素调整
        }
        activeSpanRef.current = span;
      }
      Object.assign(span.style, styles);

      // 更新备份选区指向该 span 的内容（不去动浏览器选区，
      // 否则会把焦点/输入抢回画布，打断面板里的连续输入）
      try {
        const r = document.createRange();
        r.selectNodeContents(span);
        savedRangeRef.current = r;
      } catch {
        /* ignore */
      }

      patchRef.current({ html: el.innerHTML, text: el.textContent });
      return true;
    },
    [selected]
  );

  /* 选区起点处的计算样式（用于判断粗体/斜体等当前状态） */
  const getSelStyle = () => {
    const r = savedRangeRef.current;
    if (!r) return null;
    const n = r.startContainer;
    const e = n.nodeType === 1 ? n : n.parentElement;
    return e ? getComputedStyle(e) : null;
  };

  /* 有文字片段选区时作用于片段，否则作用于整个元素 */
  const applyStyleOr = (styles, fallbackChanges) => {
    if (inlineEditing && savedRangeRef.current && styleSelection(styles)) return;
    patch(fallbackChanges);
  };

  const resetElement = () => {
    if (!selected || !ov) return;
    pushHistory(ov.path, getSlideEdits()[ov.path] || null);
    setInlineEditing(false);
    restoreOriginal(selected);
    setElementEdit(ov.path, null);
    // 重置的是大标题：目录面板恢复原标题
    if (findRelatedTitleEl(rootRef.current, selected)) {
      saveTitleOverride(slideId, null);
    }
    setSelected(null);
    setOv(null);
    setBox(null);
  };

  const clearSlide = () => {
    const root = rootRef.current;
    const edits = getSlideEdits();
    if (root) {
      Object.entries(edits).forEach(([path, override]) => {
        pushHistory(path, override);
        const el = resolvePath(root, path);
        if (el) restoreOriginal(el);
      });
    }
    const all = loadAll();
    delete all[slideId];
    saveAll(all);
    saveTitleOverride(slideId, null);
    setInlineEditing(false);
    setSelected(null);
    setOv(null);
    setBox(null);
  };

  const copyCss = () => {
    if (!ov) return;
    const lines = [];
    if (ov.dx || ov.dy) lines.push(`translate: ${Number(ov.dx) || 0}px ${Number(ov.dy) || 0}px;`);
    if (ov.rotate) lines.push(`rotate: ${ov.rotate}deg;`);
    if (ov.fontFamily) lines.push(`font-family: ${ov.fontFamily};`);
    if (ov.fontWeight) lines.push(`font-weight: ${ov.fontWeight};`);
    if (ov.fontSize) lines.push(`font-size: ${ov.fontSize}px;`);
    if (ov.italic !== undefined) lines.push(`font-style: ${ov.italic ? 'italic' : 'normal'};`);
    if (ov.underline !== undefined || ov.strikethrough !== undefined) {
      const dec = [ov.underline ? 'underline' : '', ov.strikethrough ? 'line-through' : '']
        .filter(Boolean)
        .join(' ');
      lines.push(`text-decoration-line: ${dec || 'none'};`);
    }
    if (ov.color) lines.push(`color: ${ov.color};`);
    if (ov.textAlign) lines.push(`text-align: ${ov.textAlign};`);
    if (ov.lineHeight) lines.push(`line-height: ${ov.lineHeight};`);
    if (ov.letterSpacing !== '' && ov.letterSpacing !== undefined)
      lines.push(`letter-spacing: ${ov.letterSpacing}px;`);
    if (ov.marginTop !== '' && ov.marginTop !== undefined)
      lines.push(`margin-top: ${ov.marginTop}px;`);
    if (ov.marginBottom !== '' && ov.marginBottom !== undefined)
      lines.push(`margin-bottom: ${ov.marginBottom}px;`);
    navigator.clipboard?.writeText(lines.join('\n'));
  };

  if (!enabled) return null;

  const editCount = Object.keys(getSlideEdits()).length;

  /* 面板显示用的「当前值」：override 优先，否则用计算样式 */
  const curWeight = Number(ov?.fontWeight || prefill.fontWeight) || 400;
  const isBold = curWeight >= 600;
  const isItalic = ov?.italic !== undefined ? ov.italic : prefill.italic;
  const isUnderline = ov?.underline !== undefined ? ov.underline : prefill.underline;
  const isStrike = ov?.strikethrough !== undefined ? ov.strikethrough : prefill.strikethrough;
  const curAlign = ov?.textAlign || prefill.textAlign || 'left';

  return (
    <>
      {/* 高亮 / 拖拽框 */}
      {box && (
        <div
          className="fixed z-[90] cursor-move"
          style={{
            left: box.left,
            top: box.top,
            width: box.width,
            height: box.height,
            outline: inlineEditing ? '2px solid #22c55e' : '2px solid #3b82f6',
            outlineOffset: '2px',
            boxShadow: '0 0 0 9999px rgba(0,0,0,0)',
            // 改字时放行鼠标事件，让光标能点进文字里
            pointerEvents: inlineEditing ? 'none' : 'auto',
          }}
          onPointerDown={onBoxPointerDown}
          onDoubleClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setInlineEditing(true);
          }}
          title="拖拽移动 · 双击改文字"
        >
          <span
            className={`absolute -top-6 left-0 px-2 py-0.5 rounded text-white text-[11px] font-mono whitespace-nowrap pointer-events-none ${
              inlineEditing ? 'bg-green-600' : 'bg-blue-600'
            }`}
          >
            {inlineEditing
              ? '正在改文字 · 拖选文字可单独调整片段样式 · Esc 结束'
              : '拖拽移动 · 双击改文字'}
          </span>
        </div>
      )}

      {/* 右侧格式面板（Keynote 风格） */}
      <div className="fixed top-0 right-0 h-full w-[340px] z-[95] bg-zinc-950/95 backdrop-blur-md border-l border-zinc-800 text-zinc-200 flex flex-col shadow-2xl">
        {/* 标题栏 + 撤销 */}
        <div className="px-5 py-3 border-b border-zinc-800 flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-wide text-white">格式</h3>
          <button
            onClick={undo}
            disabled={!canUndo}
            title="撤销上一步（⌘Z）"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
              canUndo
                ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
            }`}
          >
            <Undo2 size={14} />
            撤销 ⌘Z
          </button>
        </div>

        {/* 文本 / 排列 选项卡 */}
        <div className="px-5 pt-3">
          <div className="flex bg-zinc-900 rounded-lg p-1 gap-1">
            <TabBtn active={tab === 'text'} onClick={() => setTab('text')}>
              文本
            </TabBtn>
            <TabBtn active={tab === 'arrange'} onClick={() => setTab('arrange')}>
              排列
            </TabBtn>
          </div>
        </div>

        {!ov ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8 text-zinc-500 gap-3">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
            </div>
            <p className="text-sm">还没有选中元素</p>
            <p className="text-[12px] leading-relaxed">
              在左侧幻灯片里 <span className="text-blue-400 font-medium">单击</span> 任意文字即可选中，
              <span className="text-blue-400 font-medium">双击</span> 可直接在画面里改字。
              <br />
              ⌘Z 撤销上一步 · Esc 取消选中
            </p>
          </div>
        ) : tab === 'text' ? (
          <div className="flex-1 overflow-y-auto custom-scrollbar px-5 py-4 flex flex-col gap-5">
            {/* 选中信息 */}
            <div className="text-[12px] text-zinc-400 bg-zinc-900 rounded-lg px-3 py-2 break-all">
              {describe(selected)}
            </div>

            {/* 片段选择提示 */}
            {inlineEditing && hasSelRange && (
              <div className="text-[11px] text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2 leading-relaxed">
                已拖选一段文字：下面的字体、字号、颜色、粗斜体只作用于
                <span className="font-semibold">选中的片段</span>
              </div>
            )}

            {/* 字体 */}
            <Section label="字体">
              <select
                value={ov.fontFamily || ''}
                onChange={(e) =>
                  applyStyleOr(
                    { fontFamily: e.target.value },
                    { fontFamily: e.target.value }
                  )
                }
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
              >
                {FONT_FAMILIES.map((f) => (
                  <option key={f.label} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
              <div className="flex gap-2 mt-2">
                <select
                  value={String(ov.fontWeight || prefill.fontWeight || 400)}
                  onChange={(e) =>
                    applyStyleOr(
                      { fontWeight: e.target.value },
                      { fontWeight: Number(e.target.value) }
                    )
                  }
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                >
                  {FONT_WEIGHTS.map((w) => (
                    <option key={w.value} value={String(w.value)}>
                      {w.label}
                    </option>
                  ))}
                  {!FONT_WEIGHTS.some(
                    (w) => w.value === (Number(ov.fontWeight || prefill.fontWeight) || 400)
                  ) && (
                    <option value={String(ov.fontWeight || prefill.fontWeight)}>
                      {ov.fontWeight || prefill.fontWeight}
                    </option>
                  )}
                </select>
                <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-lg px-2">
                  <input
                    type="number"
                    min="8"
                    max="300"
                    value={
                      inlineEditing && hasSelRange
                        ? fragVal.fontSize || ''
                        : ov.fontSize || ''
                    }
                    placeholder={String(prefill.fontSize)}
                    onChange={(e) => {
                      const v = e.target.value ? Number(e.target.value) : '';
                      if (inlineEditing && hasSelRange) {
                        setFragVal((f) => ({ ...f, fontSize: v }));
                      }
                      applyStyleOr(
                        { fontSize: v ? `${v}px` : '' },
                        { fontSize: v }
                      );
                    }}
                    className="w-14 bg-transparent py-2 text-sm text-white focus:outline-none"
                  />
                  <span className="text-[11px] text-zinc-500">点</span>
                </div>
              </div>
            </Section>

            {/* 粗斜下删 + 颜色 */}
            <Section label="样式">
              <div className="grid grid-cols-4 gap-1.5">
                <ToggleBtn
                  active={isBold}
                  title="粗体"
                  onClick={() => {
                    if (inlineEditing && savedRangeRef.current) {
                      const cs = getSelStyle();
                      const b = cs && Number(cs.fontWeight) >= 600;
                      styleSelection({ fontWeight: b ? '400' : '700' });
                    } else patch({ fontWeight: isBold ? 400 : 700 });
                  }}
                >
                  <Bold size={15} />
                </ToggleBtn>
                <ToggleBtn
                  active={isItalic}
                  title="斜体"
                  onClick={() => {
                    if (inlineEditing && savedRangeRef.current) {
                      const cs = getSelStyle();
                      const it = cs && cs.fontStyle === 'italic';
                      styleSelection({ fontStyle: it ? 'normal' : 'italic' });
                    } else patch({ italic: !isItalic });
                  }}
                >
                  <Italic size={15} />
                </ToggleBtn>
                <ToggleBtn
                  active={isUnderline}
                  title="下划线"
                  onClick={() => {
                    if (inlineEditing && savedRangeRef.current) {
                      const cs = getSelStyle();
                      const cur = (cs && cs.textDecorationLine) || '';
                      const u = !cur.includes('underline');
                      const s = cur.includes('line-through');
                      const dec = [u ? 'underline' : '', s ? 'line-through' : '']
                        .filter(Boolean)
                        .join(' ');
                      styleSelection({ textDecorationLine: dec || 'none' });
                    } else patch({ underline: !isUnderline });
                  }}
                >
                  <Underline size={15} />
                </ToggleBtn>
                <ToggleBtn
                  active={isStrike}
                  title="删除线"
                  onClick={() => {
                    if (inlineEditing && savedRangeRef.current) {
                      const cs = getSelStyle();
                      const cur = (cs && cs.textDecorationLine) || '';
                      const u = cur.includes('underline');
                      const s = !cur.includes('line-through');
                      const dec = [u ? 'underline' : '', s ? 'line-through' : '']
                        .filter(Boolean)
                        .join(' ');
                      styleSelection({ textDecorationLine: dec || 'none' });
                    } else patch({ strikethrough: !isStrike });
                  }}
                >
                  <Strikethrough size={15} />
                </ToggleBtn>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-[12px] text-zinc-400 flex-shrink-0">文本颜色</span>
                <input
                  type="color"
                  value={
                    inlineEditing && hasSelRange
                      ? fragVal.color
                      : ov.color || prefill.color
                  }
                  onChange={(e) => {
                    if (inlineEditing && hasSelRange) {
                      setFragVal((f) => ({ ...f, color: e.target.value }));
                    }
                    applyStyleOr({ color: e.target.value }, { color: e.target.value });
                  }}
                  className="w-10 h-8 bg-transparent border border-zinc-800 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={inlineEditing && hasSelRange ? fragVal.color : ov.color || ''}
                  placeholder={prefill.color}
                  onChange={(e) => {
                    if (inlineEditing && hasSelRange) {
                      setFragVal((f) => ({ ...f, color: e.target.value }));
                    }
                    applyStyleOr({ color: e.target.value }, { color: e.target.value });
                  }}
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-sm text-white font-mono"
                />
              </div>
            </Section>

            {/* 对齐 */}
            <Section label="对齐">
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  ['left', AlignLeft, '左对齐'],
                  ['center', AlignCenter, '居中'],
                  ['right', AlignRight, '右对齐'],
                  ['justify', AlignJustify, '两端对齐'],
                ].map(([val, Icon, name]) => (
                  <ToggleBtn
                    key={val}
                    active={curAlign === val}
                    title={name}
                    onClick={() => patch({ textAlign: val })}
                  >
                    <Icon size={15} />
                  </ToggleBtn>
                ))}
              </div>
            </Section>

            {/* 间距 */}
            <Section label="间距">
              <div className="grid grid-cols-2 gap-3">
                <NumField
                  label="行距"
                  value={ov.lineHeight}
                  step={0.1}
                  placeholder={String(prefill.lineHeight || '')}
                  onChange={(v) => patch({ lineHeight: v })}
                />
                <NumField
                  label="字间距 px"
                  value={ov.letterSpacing}
                  step={0.5}
                  onChange={(v) => patch({ letterSpacing: v === '' ? '' : v })}
                />
                <NumField
                  label="段前 px"
                  value={ov.marginTop}
                  onChange={(v) => patch({ marginTop: v === '' ? '' : v })}
                />
                <NumField
                  label="段后 px"
                  value={ov.marginBottom}
                  onChange={(v) => patch({ marginBottom: v === '' ? '' : v })}
                />
              </div>
            </Section>

            {/* 文案内容 */}
            <Section label="文案内容">
              <textarea
                value={ov.text ?? ''}
                onChange={(e) => patch({ text: e.target.value })}
                rows={4}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white leading-relaxed resize-y focus:border-blue-500 focus:outline-none"
                placeholder="在这里直接改文字…"
              />
              <button
                onClick={() => setInlineEditing((v) => !v)}
                className={`w-full mt-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                  inlineEditing
                    ? 'bg-green-600 hover:bg-green-500 text-white'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                }`}
              >
                {inlineEditing ? '完成画面内编辑' : '直接在画面里改字'}
              </button>
              {selected && selected.children.length > 0 && (
                <p className="text-[11px] text-amber-500/80 leading-relaxed mt-2">
                  注意：这段文字内部有局部格式（加粗、变色、不同字号的片段）。在上面的文本框改文案会把格式合并成统一样式；想保留局部格式，请用「直接在画面里改字」。
                </p>
              )}
            </Section>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto custom-scrollbar px-5 py-4 flex flex-col gap-5">
            {/* 选中信息 */}
            <div className="text-[12px] text-zinc-400 bg-zinc-900 rounded-lg px-3 py-2 break-all">
              {describe(selected)}
            </div>

            {/* 位置 */}
            <Section label="位置（偏移量 px）">
              <div className="grid grid-cols-2 gap-3">
                <NumField label="水平 X" value={ov.dx} onChange={(v) => patch({ dx: v })} />
                <NumField label="垂直 Y" value={ov.dy} onChange={(v) => patch({ dy: v })} />
              </div>
              <div className="flex items-center justify-center gap-1 mt-3">
                <NudgeBtn onClick={() => patch({ dx: (Number(ov.dx) || 0) - 1 })}>←</NudgeBtn>
                <div className="flex flex-col gap-1">
                  <NudgeBtn onClick={() => patch({ dy: (Number(ov.dy) || 0) - 1 })}>↑</NudgeBtn>
                  <NudgeBtn onClick={() => patch({ dy: (Number(ov.dy) || 0) + 1 })}>↓</NudgeBtn>
                </div>
                <NudgeBtn onClick={() => patch({ dx: (Number(ov.dx) || 0) + 1 })}>→</NudgeBtn>
              </div>
              <p className="text-[11px] text-zinc-600 text-center mt-2">
                也可直接拖拽画面里的蓝框 · 方向键微调（Shift 步长 10）
              </p>
            </Section>

            {/* 旋转 */}
            <Section label="旋转">
              <NumField label="角度 °" value={ov.rotate} onChange={(v) => patch({ rotate: v })} />
            </Section>

            {/* 操作 */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={copyCss}
                className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm font-medium transition-colors"
              >
                复制 CSS
              </button>
              <button
                onClick={resetElement}
                className="w-full py-2 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-400 text-sm font-medium transition-colors"
              >
                重置此元素
              </button>
            </div>
          </div>
        )}

        {/* 底部：本页调整统计 */}
        <div className="px-5 py-3 border-t border-zinc-800 flex items-center justify-between text-[12px]">
          <span className="text-zinc-500">本页已调整 {editCount} 处</span>
          {editCount > 0 && (
            <button onClick={clearSlide} className="text-red-400 hover:text-red-300">
              清除本页
            </button>
          )}
        </div>
      </div>
    </>
  );
}

/* ---------- 小组件 ---------- */
function TabBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
        active ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-zinc-200'
      }`}
    >
      {children}
    </button>
  );
}

function ToggleBtn({ active, title, onClick, children }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`h-9 rounded-md flex items-center justify-center transition-colors ${
        active
          ? 'bg-blue-600 text-white'
          : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800'
      }`}
    >
      {children}
    </button>
  );
}

function Section({ label, children }) {
  return (
    <div>
      <label className="block text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function NumField({ label, value, onChange, step = 1, placeholder }) {
  return (
    <div>
      <span className="block text-[11px] text-zinc-500 mb-1">{label}</span>
      <input
        type="number"
        step={step}
        placeholder={placeholder}
        value={value === '' || value === undefined ? '' : value}
        onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
        className="w-full bg-zinc-900 border border-zinc-800 rounded px-2 py-1.5 text-sm text-white"
      />
    </div>
  );
}

function NudgeBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-9 h-9 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-base flex items-center justify-center transition-colors"
    >
      {children}
    </button>
  );
}
