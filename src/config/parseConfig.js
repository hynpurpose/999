import { slideConfig } from './slideConfig.js';

const CN_NUMERALS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

/* 章节的稳定标识：幻灯片 id 由它拼出来，所以不能用章节序号——
   在中间插入一个 chapter 会让其后所有章节的序号后移，slideOrder.json 里
   已保存的 id 就会指向别的章节，放映顺序随之错乱。
   默认取「所属部分 + 章节标题」，也可以在 config 里显式写 key 覆盖。 */
function makeChapterKey(item, part, used) {
  const raw = item.key || `${part?.id || 'x'}-${(item.title || '').replace(/\s+/g, '')}`;
  const base = raw.replace(/[^\p{Letter}\p{Number}_-]/gu, '') || 'chapter';
  let key = base;
  let n = 2;
  while (used.has(key)) key = `${base}-${n++}`;
  used.add(key);
  return key;
}

export function parseConfig(flatConfig) {
  const result = { cover: null, toc: null, parts: [], chapters: [] };
  let currentPart = null;
  let currentChapter = null;
  let currentSection = null;
  const usedChapterKeys = new Set();

  for (const item of flatConfig) {
    switch (item.type) {
      // 大层级（一、二、三…）：本身不产生幻灯片，只为章节提供归属与编号
      case 'part':
        currentPart = {
          id: item.id,
          title: item.title,
          tocTitle: item.tocTitle || item.title,
          subtitle: item.subtitle || '',
          nav: item.nav || 'default',
          index: result.parts.length,
          numeral: CN_NUMERALS[result.parts.length] || String(result.parts.length + 1),
          // 每个大层级可以有自己的封面页与目录页
          cover: item.cover || null,
          toc: item.toc || null,
          chapters: [],
        };
        result.parts.push(currentPart);
        currentChapter = null;
        currentSection = null;
        break;
      case 'cover':
        result.cover = {
          title: item.title,
          backgroundImage: item.backgroundImage,
          brand: item.brand || '',
          subtitle: item.subtitle || '',
          date: item.date || '',
        };
        break;
      case 'toc':
        result.toc = {
          title: item.title,
          backgroundImage: item.backgroundImage,
          menuText: item.menuText,
          brandLabel: item.brandLabel,
          serviceGuide: item.serviceGuide,
        };
        break;
      case 'chapter':
        currentChapter = {
          key: makeChapterKey(item, currentPart, usedChapterKeys),
          title: item.title,
          subtitle: item.subtitle || '',
          group: item.group || currentPart?.id || 'default',
          partId: currentPart?.id || null,
          partTitle: currentPart?.title || '',
          partNumeral: currentPart?.numeral || '',
          nav: item.nav || currentPart?.nav || 'default',
          brandLabel: item.brandLabel || '',
          coverTitle: item.coverTitle || '',
          coverSubtitle: item.coverSubtitle || '',
          coverLabel: item.coverLabel || '',
          backgroundImage: item.backgroundImage,
          sections: [],
        };
        currentSection = null;
        result.chapters.push(currentChapter);
        if (currentPart) currentPart.chapters.push(currentChapter);
        break;
      case 'section':
        currentSection = {
          title: item.title,
          component: item.component || null,
          pages: [],
        };
        if (currentChapter) currentChapter.sections.push(currentSection);
        break;
      case 'page':
        if (currentSection) {
          currentSection.pages.push({
            title: item.title,
            component: item.component || null,
            components: item.components || null,
            variants: item.variants || null,
            hideHeader: item.hideHeader || false,
          });
        }
        break;
    }
  }

  // 组内序号：每个 group 内部从 1 开始独立编号（导航条 / 章节封面 / 目录都用它）
  const groupCounters = {};
  for (const ch of result.chapters) {
    const g = ch.group || 'default';
    groupCounters[g] = (groupCounters[g] || 0) + 1;
    ch.navNumber = groupCounters[g];
  }

  return result;
}

export function generateSlides(parsed) {
  const slides = [];

  if (parsed.cover) {
    slides.push({
      id: 'cover',
      type: 'cover',
      name: parsed.cover.title,
      backgroundImage: parsed.cover.backgroundImage,
      brand: parsed.cover.brand,
      subtitle: parsed.cover.subtitle,
      date: parsed.cover.date,
    });
  }

  if (parsed.toc) {
    slides.push({
      id: 'toc',
      type: 'toc',
      name: parsed.toc.title,
      backgroundImage: parsed.toc.backgroundImage,
      menuText: parsed.toc.menuText,
      brandLabel: parsed.toc.brandLabel,
      serviceGuide: parsed.toc.serviceGuide,
    });
  }

  parsed.chapters.forEach((chapter, ci) => {
    // 进入某个大层级的第一章之前，先插入它自己的封面页与目录页
    const part = (parsed.parts || []).find((p) => p.id === chapter.partId);
    if (part && part.chapters[0] === chapter) {
      if (part.cover) {
        slides.push({
          id: `part-${part.id}-cover`,
          type: 'cover',
          name: `${part.numeral}、${part.title} · 封面`,
          backgroundImage: part.cover.backgroundImage || '',
          brand: part.cover.brand || '',
          subtitle: part.cover.subtitle || part.title,
          date: part.cover.date || '',
          layout: part.cover.layout || '',
        });
      }
      if (part.toc) {
        slides.push({
          id: `part-${part.id}-toc`,
          type: 'toc',
          name: `${part.numeral}、${part.title} · 目录`,
          backgroundImage: part.toc.backgroundImage || '',
          menuText: part.toc.menuText || 'MENU',
          brandLabel: part.toc.brandLabel || '',
          serviceGuide: part.toc.serviceGuide || '',
          partId: part.id,
        });
      }
    }

    const ck = chapter.key;

    slides.push({
      id: `chapter-${ck}-cover`,
      type: 'chapter-cover',
      name: chapter.title,
      subtitle: chapter.subtitle,
      coverTitle: chapter.coverTitle,
      coverSubtitle: chapter.coverSubtitle,
      coverLabel: chapter.coverLabel,
      brandLabel: chapter.brandLabel,
      backgroundImage: chapter.backgroundImage,
      chapterIndex: ci,
      group: chapter.group,
      navNumber: chapter.navNumber,
    });

    chapter.sections.forEach((section, si) => {
      if (section.pages.length > 0) {
        section.pages.forEach((page, pi) => {
          const multiComponents = page.components && page.components.length > 1;

          if (multiComponents) {
            page.components.forEach((comp, subPi) => {
              slides.push({
                id: `chapter-${ck}-${si}-${pi}-${subPi}`,
                type: 'content',
                name: page.title,
                chapterIndex: ci,
                sectionIndex: si,
                pageIndex: pi,
                subPageIndex: subPi,
                component: comp,
                nav: chapter.nav,
              });
            });
          } else {
            slides.push({
              id: `chapter-${ck}-${si}-${pi}`,
              type: 'content',
              name: page.title,
              chapterIndex: ci,
              sectionIndex: si,
              pageIndex: pi,
              subPageIndex: 0,
              component: page.variants?.[0] ?? page.components?.[0] ?? page.component,
              variants: page.variants && page.variants.length > 1 ? page.variants : null,
              hideHeader: page.hideHeader,
              nav: chapter.nav,
            });
          }
        });
      } else {
        slides.push({
          id: `chapter-${ck}-${si}`,
          type: 'content',
          name: section.title,
          chapterIndex: ci,
          sectionIndex: si,
          pageIndex: null,
          subPageIndex: 0,
          component: section.component,
          nav: chapter.nav,
        });
      }
    });
  });

  return slides;
}

export const parsedConfig = parseConfig(slideConfig);
export const flatSlides = generateSlides(parsedConfig);
