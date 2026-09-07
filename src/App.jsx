import React, { useState, useEffect, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import SlideContainer from './components/SlideContainer';
import SlideEditor from './components/SlideEditor';
import CoverSlide from './templates/CoverSlide';
import TOCSlide from './templates/TOCSlide';
import Page_ProposalChapterCover from './pages/Page_ProposalChapterCover';
import ChapterPage from './components/ChapterPage';
import { flatSlides, parsedConfig } from './config/parseConfig';
import initialOrder from './slideOrder.json';

/* 导出 PPT 时带 ?export=1：不渲染侧栏 / 编辑 / 版本切换等叠加 UI，避免截进画布 */
const EXPORT_MODE =
  typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).has('export');

const slideDictionary = {};
flatSlides.forEach((slide) => {
  let component;
  switch (slide.type) {
    case 'cover':
      component = (
        <CoverSlide
          key={slide.id}
          bgImage={slide.backgroundImage}
          brand={slide.brand}
          subtitle={slide.subtitle}
          date={slide.date}
          layout={slide.layout}
        />
      );
      break;
    case 'toc':
      component = (
        <TOCSlide
          key={slide.id}
          bgImage={slide.backgroundImage}
          title="目录"
          menuText={slide.menuText}
          brandLabel={slide.brandLabel}
          serviceGuide={slide.serviceGuide}
          partId={slide.partId}
        />
      );
      break;
    case 'chapter-cover':
      component = (
        <Page_ProposalChapterCover
          key={slide.id}
          bgImage={slide.backgroundImage}
          title={slide.name}
          subtitle={slide.subtitle}
          coverTitle={slide.coverTitle}
          coverSubtitle={slide.coverSubtitle}
          coverLabel={slide.coverLabel}
          brandLabel={slide.brandLabel || parsedConfig.toc?.brandLabel}
          navNumber={slide.navNumber}
          groupChapters={parsedConfig.chapters.filter(
            (c) => (c.group || 'default') === (slide.group || 'default')
          )}
        />
      );
      break;
    case 'content':
      const contentComponent = slide.component;

      component = (
        <ChapterPage
          key={slide.id}
          chapterIndex={slide.chapterIndex}
          sectionIndex={slide.sectionIndex}
          pageIndex={slide.pageIndex}
          component={contentComponent}
          title={slide.name}
          hideHeader={slide.hideHeader}
          nav={slide.nav}
        />
      );
      break;
  }
  let variants = null;
  if (slide.type === 'content' && slide.variants) {
    variants = slide.variants.map((Comp, i) => (
      <ChapterPage
        key={`${slide.id}-v${i}`}
        chapterIndex={slide.chapterIndex}
        sectionIndex={slide.sectionIndex}
        pageIndex={slide.pageIndex}
        component={Comp}
        title={slide.name}
        hideHeader={slide.hideHeader}
        nav={slide.nav}
      />
    ));
  }
  slideDictionary[slide.id] = { name: slide.name, type: slide.type, component, variants };
});

const defaultOrder = flatSlides.map((s) => s.id);
const SLIDE_POSITION_KEY = 'slide-current-id';
const COLLAPSED_CHAPTERS_KEY = 'slide-collapsed-chapters';
const TITLE_OVERRIDES_KEY = 'slide-title-overrides';

function getInitialTitleOverrides() {
  try {
    return JSON.parse(localStorage.getItem(TITLE_OVERRIDES_KEY)) || {};
  } catch {
    return {};
  }
}
const VISUAL_EDITS_KEY = 'slide-visual-edits'; // 与 SlideEditor 保持一致
const WORKING_ORDER_KEY = 'slide-order-working'; // 当前会话内未写入 slideOrder.json 前的临时副本
const ORDER_BASELINE_KEY = 'slide-order-baseline'; // 临时副本对应的 slideOrder.json 快照

// 清理旧版 localStorage 缓存（曾持久化到浏览器，导致各端顺序不一致）
try {
  localStorage.removeItem(WORKING_ORDER_KEY);
  localStorage.removeItem(ORDER_BASELINE_KEY);
} catch {
  // ignore
}

/* ------------------------------------------------------------------ */
/* 可视化编辑持久化（方案 1+3）：                                        */
/*  - 落盘到 src/slideEdits.json（可进 git、团队共享），机制与排序一致    */
/*  - 启动时通过 /api/load-edits “实时”从磁盘读取，而不是静态 import。    */
/*    静态 import 会被 dev 服务器缓存：git pull 后普通刷新读不到新内容，  */
/*    必须重启 dev 才生效。实时读取则每次刷新都能拿到最新文件内容。       */
/* ------------------------------------------------------------------ */

/* 每次调用都让服务端实时读盘，返回最新的 slideEdits.json 内容 */
async function loadEditsFromServer() {
  const res = await fetch('/api/load-edits', { cache: 'no-store' });
  if (!res.ok) throw new Error('load-edits failed');
  const data = await res.json();
  return {
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

/* 把当前 localStorage 里的可视化编辑写回服务端文件（防抖调用） */
async function saveEditsToServer() {
  try {
    const visualEdits = JSON.parse(
      localStorage.getItem(VISUAL_EDITS_KEY) || '{}'
    );
    const titleOverrides = JSON.parse(
      localStorage.getItem(TITLE_OVERRIDES_KEY) || '{}'
    );
    await fetch('/api/save-edits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visualEdits, titleOverrides }),
    });
  } catch (err) {
    console.error('保存可视化编辑失败:', err);
  }
}

/* 副本页 id：在原 id 后面加 __copyN，渲染时映射回原组件 */
const COPY_SEP = '__copy';
const baseIdOf = (id) => id.split(COPY_SEP)[0];
const isCopyId = (id) => id.includes(COPY_SEP);

function getInitialCollapsedChapters() {
  try {
    const saved = localStorage.getItem(COLLAPSED_CHAPTERS_KEY);
    if (saved) return new Set(JSON.parse(saved));
  } catch {
    // localStorage unavailable or corrupted data
  }
  return new Set();
}

function getInitialOrder(useWorking = true) {
  const validIds = new Set(Object.keys(slideDictionary));

  // 仅当前浏览器会话内保留临时顺序（防误刷新丢失拖拽进度）；
  // 新开浏览器 / git pull 后始终以 slideOrder.json 为准，保证团队一致
  let baseOrder = initialOrder;
  const orderBaseline = JSON.stringify(initialOrder);
  if (useWorking) {
    try {
      const savedBaseline = sessionStorage.getItem(ORDER_BASELINE_KEY);
      if (savedBaseline === orderBaseline) {
        const working = JSON.parse(sessionStorage.getItem(WORKING_ORDER_KEY));
        if (Array.isArray(working) && working.length > 0) baseOrder = working;
      } else {
        sessionStorage.removeItem(WORKING_ORDER_KEY);
        sessionStorage.setItem(ORDER_BASELINE_KEY, orderBaseline);
      }
    } catch {
      // sessionStorage unavailable or corrupted data
    }
  }

  const initialSet = new Set(baseOrder.map(baseIdOf));

  // 过滤掉已从 config 删除的旧页面（副本页按其原始页判断是否有效）
  const filteredInitial = baseOrder.filter((id) => validIds.has(baseIdOf(id)));

  // 找出 config 中新增但不在已保存顺序里的页面
  const newSlides = defaultOrder.filter((id) => !initialSet.has(id));

  if (newSlides.length === 0) return filteredInitial;

  // 将新页面插入到它们在 defaultOrder 中自然位置的对应位置
  const result = [...filteredInitial];
  for (const newId of newSlides) {
    const defaultIndex = defaultOrder.indexOf(newId);
    let insertAfterIndex = -1;
    for (let i = defaultIndex - 1; i >= 0; i--) {
      const existingIndex = result.indexOf(defaultOrder[i]);
      if (existingIndex !== -1) {
        insertAfterIndex = existingIndex;
        break;
      }
    }
    result.splice(insertAfterIndex + 1, 0, newId);
  }

  return result;
}

function getInitialSlideIndex(order) {
  try {
    const savedId = sessionStorage.getItem(SLIDE_POSITION_KEY);
    if (savedId) {
      const index = order.indexOf(savedId);
      if (index !== -1) return index;
    }
  } catch {
    // sessionStorage unavailable
  }
  return 0;
}

export default function App() {
  const [slideOrder, setSlideOrder] = useState(getInitialOrder);
  const [currentSlide, setCurrentSlide] = useState(() =>
    getInitialSlideIndex(getInitialOrder())
  );
  const [isMenuOpen, setIsMenuOpen] = useState(!EXPORT_MODE);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [variantIndex, setVariantIndex] = useState(0);
  const [tooltip, setTooltip] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [collapsedChapters, setCollapsedChapters] = useState(
    getInitialCollapsedChapters
  );
  const [titleOverrides, setTitleOverrides] = useState(getInitialTitleOverrides);
  // 是否已从服务端拿到最新的可视化编辑；应用到画面要等它为 true，
  // 保证同事 git pull 后一刷新就用最新文件、且“删除的编辑”也能正确还原
  const [editsReady, setEditsReady] = useState(false);

  // 编辑器里改了页面大标题 → 目录面板同步显示新标题
  useEffect(() => {
    const onTitleOverride = (e) => {
      const { slideId: id, title } = e.detail;
      setTitleOverrides((prev) => {
        const next = { ...prev };
        if (title === null || title === undefined || title === '') delete next[id];
        else next[id] = title;
        return next;
      });
    };
    window.addEventListener('slide-title-override', onTitleOverride);
    return () => window.removeEventListener('slide-title-override', onTitleOverride);
  }, []);

  // 启动时从服务端实时加载可视化编辑（每次刷新 / 同事 git pull 后都拿到最新内容）：
  //  - 文件有内容 → 以文件为准回填 localStorage，并刷新目录标题；
  //  - 文件为空但本地有内容 → 把本地内容回写文件（首次迁移/备份），不覆盖本地；
  //  - 服务端不可用 → 保留本地 localStorage，不影响使用。
  // 最后统一置 editsReady=true，SlideEditor 再把编辑应用到画面。
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { visualEdits, titleOverrides: fileTitles } =
          await loadEditsFromServer();
        if (cancelled) return;
        const fileHasData =
          Object.keys(visualEdits).length > 0 ||
          Object.keys(fileTitles).length > 0;
        if (fileHasData) {
          localStorage.setItem(VISUAL_EDITS_KEY, JSON.stringify(visualEdits));
          localStorage.setItem(TITLE_OVERRIDES_KEY, JSON.stringify(fileTitles));
          setTitleOverrides(fileTitles);
        } else {
          const localVisual = JSON.parse(
            localStorage.getItem(VISUAL_EDITS_KEY) || '{}'
          );
          const localTitles = JSON.parse(
            localStorage.getItem(TITLE_OVERRIDES_KEY) || '{}'
          );
          if (
            Object.keys(localVisual).length > 0 ||
            Object.keys(localTitles).length > 0
          ) {
            saveEditsToServer();
          }
        }
      } catch (err) {
        console.error('加载可视化编辑失败:', err);
      } finally {
        if (!cancelled) setEditsReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // 可视化编辑自动保存：改动后 800ms 写回 slideEdits.json（与排序自动保存一致）
  useEffect(() => {
    let timer = null;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(() => saveEditsToServer(), 800);
    };
    window.addEventListener('slide-visual-edits-changed', schedule);
    window.addEventListener('slide-title-override', schedule);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('slide-visual-edits-changed', schedule);
      window.removeEventListener('slide-title-override', schedule);
    };
  }, []);

  const getSlideName = (id, fallback) => titleOverrides[id] || fallback;

  const [toast, setToast] = useState(null); // 复制/粘贴等操作的轻提示
  const toastTimerRef = useRef(null);
  const copiedSlideRef = useRef(null); // ⌘C 复制的页面 id

  const slideRootRef = useRef(null);
  const editInitialTargetRef = useRef(null); // 双击进入编辑模式时要直接选中的元素
  // 「已保存」基准 = slideOrder.json 的内容；顺序变化后自动写回文件
  const [savedOrder, setSavedOrder] = useState(() => getInitialOrder(false));
  const isOrderDirty =
    JSON.stringify(slideOrder) !== JSON.stringify(savedOrder);

  const slideData = slideOrder
    .map((id) => slideDictionary[baseIdOf(id)])
    .filter(Boolean);

  // Keynote 式导航分组：章节封面为父级，其后的内容页为子级。
  // 折叠时整个章节（封面 + 子页）合并成一个可拖拽块，页码编号保持全局不变。
  const navBlocks = [];
  {
    let i = 0;
    while (i < slideData.length) {
      const id = slideOrder[i];
      const slide = slideData[i];
      if (slide.type === 'chapter-cover') {
        let end = i + 1;
        while (end < slideData.length && slideData[end].type === 'content')
          end++;
        const collapsed = collapsedChapters.has(id);
        navBlocks.push({
          id,
          index: i,
          slide,
          isParent: true,
          collapsed,
          level: 0,
          childCount: end - i - 1,
          blockIds: collapsed ? slideOrder.slice(i, end) : [id],
        });
        if (!collapsed) {
          for (let j = i + 1; j < end; j++) {
            navBlocks.push({
              id: slideOrder[j],
              index: j,
              slide: slideData[j],
              isParent: false,
              collapsed: false,
              level: 1,
              childCount: 0,
              blockIds: [slideOrder[j]],
            });
          }
        }
        i = end;
      } else {
        navBlocks.push({
          id,
          index: i,
          slide,
          isParent: false,
          collapsed: false,
          level: 0,
          childCount: 0,
          blockIds: [id],
        });
        i++;
      }
    }
  }

  const toggleChapterCollapse = (id) => {
    setCollapsedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(COLLAPSED_CHAPTERS_KEY, JSON.stringify([...next]));
      } catch {
        // localStorage unavailable
      }
      return next;
    });
  };

  const currentSlideData = slideData[currentSlide];
  const currentVariants = currentSlideData?.variants || null;
  const hasVariants = !!currentVariants && currentVariants.length > 1;
  const safeVariantIndex = hasVariants
    ? Math.min(variantIndex, currentVariants.length - 1)
    : 0;

  const handleNextSlide = () => {
    if (editMode) return;
    setCurrentSlide((prev) => Math.min(prev + 1, slideData.length - 1));
  };

  const handlePrevSlide = () => {
    if (editMode) return;
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.isContentEditable
      )
        return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideData.length, editMode]);

  const showToast = (text) => {
    setToast(text);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 2200);
  };

  /* 复制当前页：把 id 记到"剪贴板" */
  const copyCurrentSlide = () => {
    const id = slideOrder[currentSlide];
    if (!id) return;
    copiedSlideRef.current = id;
    const name = slideDictionary[baseIdOf(id)]?.name || id;
    showToast(`已复制「${name}」 · 按 ⌘V 在其下方粘贴副本`);
  };

  /* 粘贴：在被复制页的下方插入一个副本（连同可视化编辑一起拷贝） */
  const pasteCopiedSlide = () => {
    const srcId = copiedSlideRef.current;
    if (!srcId) return;
    const srcIndex = slideOrder.indexOf(srcId);
    const insertAfter = srcIndex !== -1 ? srcIndex : currentSlide;

    // 生成不重复的副本 id
    const baseId = baseIdOf(srcId);
    let n = 1;
    let newId = `${baseId}${COPY_SEP}${n}`;
    while (slideOrder.includes(newId)) newId = `${baseId}${COPY_SEP}${++n}`;

    // 把源页面的可视化编辑（字体、位置、文案改动）一起复制给副本
    try {
      const all = JSON.parse(localStorage.getItem(VISUAL_EDITS_KEY)) || {};
      if (all[srcId]) {
        all[newId] = JSON.parse(JSON.stringify(all[srcId]));
        localStorage.setItem(VISUAL_EDITS_KEY, JSON.stringify(all));
        window.dispatchEvent(new Event('slide-visual-edits-changed'));
      }
    } catch {
      // localStorage unavailable
    }

    const newOrder = [...slideOrder];
    newOrder.splice(insertAfter + 1, 0, newId);
    setSlideOrder(newOrder);
    setCurrentSlide(insertAfter + 1);
    const name = slideDictionary[baseId]?.name || baseId;
    showToast(`已在下方粘贴「${name}」副本`);
  };

  /* 删除副本页（原始页来自配置，不允许删）*/
  const deleteSlideAt = (index) => {
    const id = slideOrder[index];
    if (!id || !isCopyId(id)) return;
    const newOrder = slideOrder.filter((_, i) => i !== index);
    setSlideOrder(newOrder);
    setCurrentSlide(Math.min(index, newOrder.length - 1));
    if (copiedSlideRef.current === id) copiedSlideRef.current = null;
    try {
      const all = JSON.parse(localStorage.getItem(VISUAL_EDITS_KEY)) || {};
      delete all[id];
      localStorage.setItem(VISUAL_EDITS_KEY, JSON.stringify(all));
      window.dispatchEvent(new Event('slide-visual-edits-changed'));
    } catch {
      // localStorage unavailable
    }
    showToast('已删除副本页');
  };

  /* ⌘C 复制当前页 / ⌘V 粘贴副本 / Backspace 删除副本页 */
  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      if (
        t.tagName === 'INPUT' ||
        t.tagName === 'TEXTAREA' ||
        t.isContentEditable
      )
        return;

      if (e.metaKey || e.ctrlKey) {
        const key = e.key.toLowerCase();
        if (key === 'c') {
          // 用户正在复制选中的文字时不抢占
          if (String(window.getSelection?.() || '')) return;
          e.preventDefault();
          copyCurrentSlide();
        } else if (key === 'v') {
          e.preventDefault();
          pasteCopiedSlide();
        }
        return;
      }

      // 非编辑模式下按 Backspace/Delete 删除当前副本页
      if (
        !editMode &&
        (e.key === 'Backspace' || e.key === 'Delete') &&
        isCopyId(slideOrder[currentSlide] || '')
      ) {
        e.preventDefault();
        deleteSlideAt(currentSlide);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => {
    setVariantIndex(0);
  }, [currentSlide]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const id = slideOrder[currentSlide];
    if (!id) return;
    try {
      sessionStorage.setItem(SLIDE_POSITION_KEY, id);
    } catch {
      // sessionStorage unavailable
    }
  }, [currentSlide, slideOrder]);

  /* 当前会话内的临时顺序（关浏览器即失效，不影响团队同步） */
  useEffect(() => {
    try {
      sessionStorage.setItem(WORKING_ORDER_KEY, JSON.stringify(slideOrder));
    } catch {
      // sessionStorage unavailable
    }
  }, [slideOrder]);

  const jumpToSlide = (index) => {
    setCurrentSlide(index);
  };

  /* 导出脚本用：按页码 / 变体精确跳转，避免 ArrowRight 漏页 */
  useEffect(() => {
    if (!EXPORT_MODE) return undefined;
    window.__exportApi = {
      goTo: (index) => {
        setCurrentSlide(Math.max(0, Math.min(index, slideOrder.length - 1)));
        setVariantIndex(0);
      },
      setVariant: (index) => setVariantIndex(Math.max(0, index)),
      getOrder: () => slideOrder,
      getState: () => ({
        id: slideOrder[currentSlide] || '',
        index: currentSlide,
        variantIndex: safeVariantIndex,
        variantCount: hasVariants ? currentVariants.length : 1,
      }),
    };
    return () => {
      delete window.__exportApi;
    };
  }, [
    slideOrder,
    currentSlide,
    safeVariantIndex,
    hasVariants,
    currentVariants?.length,
  ]);

  // 拖拽以“块”为单位：折叠的章节封面会带着其所有子页一起移动
  const onDragEnd = (result) => {
    if (!result.destination) return;
    if (result.source.index === result.destination.index) return;

    const currentId = slideOrder[currentSlide];
    const movedBlock = navBlocks[result.source.index];
    const blocks = navBlocks.map((b) => b.blockIds);
    const [moved] = blocks.splice(result.source.index, 1);
    blocks.splice(result.destination.index, 0, moved);
    const newOrder = blocks.flat();

    setSlideOrder(newOrder);

    // 如果拖动的是单个内容页，检查它落进了哪个章节；
    // 落进折叠章节会被“吸进去”看不见，这时自动展开该章节
    if (
      movedBlock &&
      !movedBlock.isParent &&
      movedBlock.blockIds.length === 1 &&
      movedBlock.slide.type === 'content'
    ) {
      const movedId = movedBlock.id;
      const pos = newOrder.indexOf(movedId);
      let ownerCoverId = null;
      for (let i = pos - 1; i >= 0; i--) {
        const s = slideDictionary[baseIdOf(newOrder[i])];
        if (!s) continue;
        if (s.type === 'chapter-cover') {
          ownerCoverId = newOrder[i];
          break;
        }
        if (s.type !== 'content') break; // 越过封面/目录等非章节区域
      }
      if (ownerCoverId && collapsedChapters.has(ownerCoverId)) {
        toggleChapterCollapse(ownerCoverId);
        const name = slideDictionary[baseIdOf(ownerCoverId)]?.name || '';
        showToast(`该页已移入「${name}」章节，已自动展开`);
      }
    }

    const newIndex = newOrder.indexOf(currentId);
    if (newIndex !== -1) setCurrentSlide(newIndex);
  };

  const saveOrder = async (order = slideOrder) => {
    setIsSaving(true);
    setSaveStatus(null);
    try {
      const response = await fetch('/api/save-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order }),
      });
      if (!response.ok) throw new Error('Save failed');

      setSaveStatus('success');
      setSavedOrder([...order]);
      try {
        sessionStorage.setItem(ORDER_BASELINE_KEY, JSON.stringify(order));
      } catch {
        // sessionStorage unavailable
      }
      setTimeout(() => setSaveStatus(null), 2000);
    } catch (err) {
      console.error(err);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  /* 目录顺序自动保存：变化 800ms 后写入 slideOrder.json，无需手动点保存 */
  useEffect(() => {
    if (!isOrderDirty) return;
    const t = setTimeout(() => saveOrder(slideOrder), 800);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideOrder, isOrderDirty]);

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none flex bg-zinc-900">
      {/* 复制/粘贴/删除 轻提示 */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] px-5 py-2.5 rounded-full bg-zinc-800/95 backdrop-blur-md text-white text-sm shadow-2xl border border-zinc-700 pointer-events-none">
          {toast}
        </div>
      )}

      {/* Instant custom tooltip for full slide titles */}
      {tooltip && (
        <div
          className="fixed z-[100] pointer-events-none px-4 py-2.5 rounded-lg bg-zinc-800 text-white text-lg font-medium shadow-2xl border border-zinc-700 -translate-y-1/2 max-w-md whitespace-normal break-words"
          style={{ top: tooltip.top, left: tooltip.left }}
        >
          {tooltip.text}
        </div>
      )}

      {/* TOC Sidebar (Keynote-style navigator, side-by-side) */}
      {!EXPORT_MODE && (
      <aside
        className={`h-full bg-zinc-950 border-r border-zinc-800/50 flex-shrink-0 overflow-hidden transition-[width] duration-300 ease-out ${isMenuOpen && !isFullscreen ? 'w-64 sm:w-80' : 'w-0'
          }`}
      >
        <div className="w-64 sm:w-80 h-full p-8 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-zinc-100 font-medium tracking-widest text-sm uppercase">
              目录面板
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-500 hover:text-white transition-colors p-2 -mr-2"
              title="收起目录"
            >
              ✕
            </button>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="toc-list">
              {(provided) => (
                <nav
                  className="flex-grow flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar pb-2"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {navBlocks.map((block, blockIndex) => {
                    const isActive =
                      currentSlide === block.index ||
                      (block.isParent &&
                        block.collapsed &&
                        currentSlide > block.index &&
                        currentSlide <= block.index + block.childCount);

                    return (
                      <Draggable
                        key={block.id}
                        draggableId={block.id}
                        index={blockIndex}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={`flex items-center rounded-xl transition-all duration-200 ${block.level > 0 ? 'ml-6' : ''
                              } ${snapshot.isDragging
                                ? 'bg-zinc-800 shadow-xl opacity-90 z-50 scale-[1.02]'
                                : isActive
                                  ? 'bg-zinc-800 text-white font-medium'
                                  : 'text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200 cursor-pointer'
                              }`}
                            onClick={() => jumpToSlide(block.index)}
                            onMouseEnter={(e) => {
                              if (snapshot.isDragging) return;
                              const rect =
                                e.currentTarget.getBoundingClientRect();
                              setTooltip({
                                text: getSlideName(block.id, block.slide.name),
                                top: rect.top + rect.height / 2,
                                left: rect.right + 12,
                              });
                            }}
                            onMouseLeave={() => setTooltip(null)}
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="p-3 text-zinc-600 hover:text-zinc-300 cursor-grab active:cursor-grabbing flex items-center justify-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="8" y1="6" x2="21" y2="6" />
                                <line x1="8" y1="12" x2="21" y2="12" />
                                <line x1="8" y1="18" x2="21" y2="18" />
                                <line x1="3" y1="6" x2="3.01" y2="6" />
                                <line x1="3" y1="12" x2="3.01" y2="12" />
                                <line x1="3" y1="18" x2="3.01" y2="18" />
                              </svg>
                            </div>

                            {block.isParent && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleChapterCollapse(block.id);
                                }}
                                className="p-1 -ml-1 mr-1 rounded text-zinc-500 hover:text-white hover:bg-zinc-700/60 transition-colors flex items-center justify-center"
                                title={block.collapsed ? '展开章节' : '折叠章节'}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={`transition-transform duration-200 ${block.collapsed ? '' : 'rotate-90'
                                    }`}
                                >
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </button>
                            )}

                            <div className="py-3 pr-4 flex-grow truncate flex items-center">
                              <span className="text-sm text-white opacity-90 mr-3 font-mono bg-zinc-900 px-2 py-0.5 rounded">
                                {String(block.index + 1).padStart(2, '0')}
                              </span>
                              <span className="truncate">
                                {getSlideName(block.id, block.slide.name)}
                              </span>
                              {isCopyId(block.id) && (
                                <span className="ml-2 flex-shrink-0 text-[10px] text-amber-400/90 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded-full">
                                  副本
                                </span>
                              )}
                              {block.isParent && block.collapsed && (
                                <span className="ml-2 flex-shrink-0 text-[10px] font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded-full">
                                  +{block.childCount}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </nav>
              )}
            </Droppable>
          </DragDropContext>

          {/* Save button area */}
          <div className="pt-6 mt-2">
            <div className="flex flex-col gap-3">
              {isOrderDirty && (
                <button
                  onClick={saveOrder}
                  disabled={isSaving}
                  className={`w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${saveStatus === 'success'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                      : saveStatus === 'error'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/20'
                    }`}
                >
                  {isSaving ? (
                    <span className="animate-pulse">保存中...</span>
                  ) : saveStatus === 'success' ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      保存成功
                    </>
                  ) : saveStatus === 'error' ? (
                    '保存失败'
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                        <polyline points="17 21 17 13 7 13 7 21" />
                        <polyline points="7 3 7 8 15 8" />
                      </svg>
                      保存目录修改
                    </>
                  )}
                </button>
              )}

              <p className="text-[10px] text-zinc-600 font-mono tracking-wide text-center">
                SLIDE ENGINE v1.0
              </p>
            </div>
          </div>
        </div>
      </aside>
      )}

      {/* Main slide area：双击直接进入编辑模式并选中双击处的文字。
          编辑模式下右侧留出面板宽度，画布自动缩小不被遮挡 */}
      <div
        onDoubleClick={(e) => {
          if (EXPORT_MODE || isFullscreen || editMode) return;
          if (e.target instanceof HTMLElement) {
            editInitialTargetRef.current = e.target;
          }
          setEditMode(true);
        }}
        className="flex-1 relative overflow-hidden transition-[margin] duration-300 ease-out"
        style={{ marginRight: editMode && !isFullscreen ? 340 : 0 }}
      >
        <SlideContainer>
          <div
            key={`${currentSlide}-${safeVariantIndex}`}
            ref={slideRootRef}
            className="w-full h-full"
            data-export-id={slideOrder[currentSlide] || ''}
            data-export-variant={safeVariantIndex}
          >
            {hasVariants
              ? currentVariants[safeVariantIndex]
              : currentSlideData?.component}
          </div>
        </SlideContainer>

        {/* Version switcher (shown only when this page has multiple versions) */}
        {hasVariants && !isFullscreen && !EXPORT_MODE && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setVariantIndex(
                  (safeVariantIndex - 1 + currentVariants.length) %
                  currentVariants.length
                );
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/60 hover:bg-zinc-800 text-white transition-colors backdrop-blur-md export-hide"
              title="上一个版本"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setVariantIndex(
                  (safeVariantIndex + 1) % currentVariants.length
                );
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/60 hover:bg-zinc-800 text-white transition-colors backdrop-blur-md export-hide"
              title="下一个版本"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div
              className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/70 backdrop-blur-md export-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-white text-sm font-medium">
                版本 {safeVariantIndex + 1} / {currentVariants.length}
              </span>
              <div className="flex items-center gap-1.5">
                {currentVariants.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setVariantIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === safeVariantIndex
                        ? 'bg-white'
                        : 'bg-zinc-600 hover:bg-zinc-400'
                      }`}
                    title={`版本 ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Toggle navigator button (only when hidden) */}
        {!isMenuOpen && !isFullscreen && !EXPORT_MODE && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(true);
            }}
            className="absolute top-4 left-4 sm:top-8 sm:left-8 z-50 p-3 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors backdrop-blur-md group export-hide"
            title="打开目录"
          >
            <div className="w-5 h-4 flex flex-col justify-between opacity-70 group-hover:opacity-100">
              <span className="w-full h-[2px] bg-current rounded-full" />
              <span className="w-full h-[2px] bg-current rounded-full" />
              <span className="w-full h-[2px] bg-current rounded-full" />
            </div>
          </button>
        )}

        {/* Slide counter */}
        {!isFullscreen && !EXPORT_MODE && (
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-40 px-3 py-1.5 rounded-full bg-zinc-900/50 backdrop-blur-md text-zinc-400 text-xs font-mono pointer-events-none export-hide">
          {currentSlide + 1} / {slideData.length}
        </div>
        )}

        {/* Fullscreen Toggle */}
        {!EXPORT_MODE && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen().catch(() => { });
            } else {
              if (document.exitFullscreen) document.exitFullscreen();
            }
          }}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors backdrop-blur-md opacity-20 hover:opacity-100 group pointer-events-auto export-hide"
          title="全屏演示"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
        )}

        {/* 编辑模式开关 */}
        {!isFullscreen && !EXPORT_MODE && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditMode((v) => !v);
            }}
            className={`export-hide absolute bottom-4 right-16 sm:right-20 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors backdrop-blur-md text-sm font-medium ${editMode
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white'
              }`}
            title="单击选中文字 · 双击画面也可直接进入编辑"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            {editMode ? '退出编辑' : '编辑模式'}
          </button>
        )}
      </div>

      {/* 可视化编辑器（单击选中文字 → 右侧面板改格式） */}
      <SlideEditor
        enabled={editMode && !isFullscreen && !EXPORT_MODE}
        slideId={slideOrder[currentSlide]}
        slideKey={`${currentSlide}-${safeVariantIndex}`}
        rootRef={slideRootRef}
        initialTargetRef={editInitialTargetRef}
        editsReady={editsReady}
      />
    </div>
  );
}
