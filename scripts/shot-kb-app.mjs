#!/usr/bin/env node
/**
 * 对示意 App（Content Agent New）的三个步骤详情页截真图，
 * 用于幻灯片 01/02/03 三页的「怎么做」区域。
 * 连 App 自己的顶部导航一起截，保留真实界面感；正文只留核心条目并放大字号。
 * 用法: node scripts/shot-kb-app.mjs
 */
import puppeteer from 'puppeteer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appHtml = 'file:///J:/GEO/Content%20Agent%20New/index.html';
const outDir = path.resolve(__dirname, '../public/capabilities');

// 01/02 仍是半栏「怎么做」；03 已并回规律页右栏，按图框实测约 589 × 702（竖版）
const VIEW = { width: 1280, height: 528 };
const VIEW_FULL = { width: 1840, height: 532 };
const VIEW_PORTRAIT = { width: 800, height: 954 };

/** 三页通用：压留白 + 放大正文字号 */
const baseCss = (id) => `
  #${id} .meta-concept-banner { display: none !important; }
  #${id} .detail-page-main { overflow: hidden !important; padding-top: 14px !important; }
  #${id} .detail-container { max-width: 1180px !important; gap: 10px !important; }
  #${id} .clean-section { padding: 14px 16px !important; }
  #${id} .clean-section-header { margin-bottom: 10px !important; padding-bottom: 8px !important; }
  #${id} .clean-section-title { font-size: 20px !important; }
  #${id} .clean-section-sub { font-size: 14px !important; }
  #${id} .clean-tab-btn { font-size: 15px !important; padding: 7px 14px !important; }
  #${id} .detail-header-title { font-size: 19px !important; }
  #${id} .step-nav-pill { font-size: 14px !important; }
`;

const clampCss = (sel, lines = 1) => `
  ${sel} {
    display: -webkit-box !important;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden !important;
  }
`;

const TARGETS = [
  /* ── 01 品牌资料库 ── */
  {
    view: 'brand-kb',
    file: 'kb-app-real.png',
    css: `
      #view-brand-kb .clean-section:nth-of-type(2),
      #view-brand-kb .clean-section:nth-of-type(4) { display: none !important; }
      #view-brand-kb .search-filter-wrap { display: none !important; }
      #view-brand-kb #matrix-panel-chunks { display: none !important; }

      /* 上排：产品卖点 + 竞品对比并列；下排：合规与禁用词通栏 */
      #view-brand-kb .pillars-container {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      #view-brand-kb #matrix-panel-rules { grid-column: 1 / -1; }
      #view-brand-kb .pillar-panel { display: block !important; margin: 0 !important; }
      #view-brand-kb .usp-grid-clean { grid-template-columns: 1fr !important; gap: 10px !important; }
      #view-brand-kb .usp-grid-clean .usp-clean-card:nth-child(n+3) { display: none !important; }
      #view-brand-kb .usp-clean-card .usp-meta-row { display: none !important; }
      #view-brand-kb .clean-table tbody tr:nth-child(n+2) { display: none !important; }
      #view-brand-kb .clean-table th:nth-child(4),
      #view-brand-kb .clean-table td:nth-child(4),
      #view-brand-kb .clean-table th:nth-child(5),
      #view-brand-kb .clean-table td:nth-child(5) { display: none !important; }
      #view-brand-kb .rules-clean-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
      #view-brand-kb .clean-rules-list li:nth-child(n+2) { display: none !important; }

      #view-brand-kb .pillar-title { font-size: 18px !important; }
      #view-brand-kb .pillar-count { font-size: 14px !important; }
      #view-brand-kb .pillar-header-bar { margin-bottom: 8px !important; padding-bottom: 6px !important; }
      #view-brand-kb .usp-clean-card { padding: 10px 14px !important; }
      #view-brand-kb .usp-name { font-size: 18px !important; }
      #view-brand-kb .usp-badge { font-size: 13px !important; }
      #view-brand-kb .usp-desc { font-size: 16px !important; line-height: 1.45 !important; margin-top: 5px !important; }
      #view-brand-kb .clean-table th { font-size: 15px !important; padding: 10px 14px !important; }
      #view-brand-kb .clean-table td { font-size: 16px !important; padding: 10px 14px !important; }
      #view-brand-kb .rules-box { padding: 10px 14px !important; }
      #view-brand-kb .rules-box-title { font-size: 17px !important; margin-bottom: 5px !important; }
      #view-brand-kb .clean-rules-list li { font-size: 16px !important; line-height: 1.45 !important; }
      ${clampCss('#view-brand-kb .usp-desc')}
      ${clampCss('#view-brand-kb .clean-rules-list li')}
    `,
    rename: () => {
      const setText = (sel, text) => {
        const el = document.querySelector(sel);
        if (el) el.textContent = text;
      };
      setText('#view-brand-kb .detail-header-title', '品牌资料库');

      const section = [...document.querySelectorAll('#view-brand-kb .clean-section')]
        .find((s) => s.querySelector('.pillars-container'));
      if (section) {
        const title = section.querySelector('.clean-section-title');
        const sub = section.querySelector('.clean-section-sub');
        const num = section.querySelector('.section-num');
        if (title) title.textContent = '品牌知识库';
        if (sub) sub.textContent = '共 128 条 · 最近更新 2026-08-12 14:20 · 已同步至内容 Agent';
        if (num) num.remove();
      }

      const tabText = ['全部 (128)', '产品卖点 (52)', '竞品对比 (24)', '合规与禁用词 (36)', '向量切片 (16)'];
      document.querySelectorAll('#view-brand-kb .matrix-tab-btn').forEach((btn, i) => {
        if (tabText[i]) btn.textContent = tabText[i];
      });

      const pillars = [
        { title: '产品卖点', count: '52 条' },
        { title: '竞品对比', count: '24 组' },
        { title: '合规与禁用词', count: '36 条' },
      ];
      document.querySelectorAll('#view-brand-kb .pillar-panel').forEach((panel, i) => {
        const cfg = pillars[i];
        if (!cfg) return;
        const bullet = panel.querySelector('.pillar-bullet');
        if (bullet) bullet.remove();
        const t = panel.querySelector('.pillar-title');
        if (t) t.textContent = cfg.title;
        const c = panel.querySelector('.pillar-count');
        if (c) c.textContent = cfg.count;
      });

      const ruleTitles = ['推荐表达', '禁用表达'];
      document.querySelectorAll('#view-brand-kb .rules-box-title span').forEach((el, i) => {
        if (ruleTitles[i]) el.textContent = ruleTitles[i];
      });

      const th = document.querySelectorAll('#view-brand-kb .clean-table thead th');
      if (th[0]) th[0].textContent = '对比项';
    },
  },

  /* ── 02 目标用户设定 ── */
  {
    view: 'persona-studio',
    file: 'persona-app-real.png',
    css: `
      /* 只留画像库本身：隐藏提示词注入模块与「一物多写」对照实验台 */
      #view-persona-studio .clean-section:nth-of-type(3) { display: none !important; }
      #view-persona-studio .comparator-clean-card { display: none !important; }

      /* 6 组画像铺成 3 × 2，本次只选用其中 1 组 */
      #view-persona-studio .persona-cards-row {
        grid-template-columns: repeat(3, 1fr) !important;
        grid-auto-rows: 166px !important;
        gap: 11px !important;
      }
      #view-persona-studio .clean-section-header { margin-bottom: 8px !important; padding-bottom: 6px !important; }
      #view-persona-studio .clean-persona-card {
        padding: 10px 14px !important;
        gap: 8px !important;
        height: 100% !important;
        overflow: hidden !important;
      }
      #view-persona-studio .clean-persona-card.is-idle { opacity: 0.5 !important; }
      #view-persona-studio .clean-persona-card.is-current {
        border-color: rgba(0, 229, 153, 0.55) !important;
        background: rgba(0, 229, 153, 0.05) !important;
        box-shadow: 0 0 0 1px rgba(0, 229, 153, 0.18) inset !important;
      }
      #view-persona-studio .is-current .clean-checkbox-label { color: #00e599 !important; font-weight: 700 !important; }
      #view-persona-studio .clean-checkbox-label { font-size: 13.5px !important; }
      #view-persona-studio .clean-checkbox-label input { width: 14px !important; height: 14px !important; }
      #view-persona-studio .persona-avatar-box { width: 32px !important; height: 32px !important; font-size: 18px !important; }
      #view-persona-studio .persona-name { font-size: 18px !important; }
      #view-persona-studio .persona-role { font-size: 13px !important; }
      #view-persona-studio .persona-fields-grid {
        grid-template-columns: 1fr !important;
        gap: 8px !important;
        padding: 10px 12px !important;
        align-content: center !important;
        flex: 1 1 auto !important;
        min-height: 0 !important;
      }
      #view-persona-studio .p-field-k { font-size: 13px !important; }
      #view-persona-studio .p-field-v { font-size: 15px !important; line-height: 1.4 !important; }
      ${clampCss('#view-persona-studio .p-field-v', 1)}
    `,
    rename: () => {
      const setText = (sel, text) => {
        const el = document.querySelector(sel);
        if (el) el.textContent = text;
      };
      setText('#view-persona-studio .detail-header-title', '目标用户设定');

      const section = [...document.querySelectorAll('#view-persona-studio .clean-section')]
        .find((s) => s.querySelector('.persona-cards-row'));
      if (section) {
        const title = section.querySelector('.clean-section-title');
        const sub = section.querySelector('.clean-section-sub');
        const num = section.querySelector('.section-num');
        if (title) title.textContent = '用户画像库';
        if (sub) sub.textContent = '共 6 组 · 本次写作选用：办公室久坐上班族 · 换人群即换一套讲法';
        if (num) num.remove();
      }

      const tabText = ['人体工学椅', '高端智能冰箱'];
      document.querySelectorAll('#view-persona-studio .domain-pill').forEach((btn, i) => {
        if (tabText[i]) btn.textContent = tabText[i];
      });

      const PERSONAS = [
        {
          icon: '👔',
          name: '办公室久坐上班族',
          role: '久坐办公 / 腰颈椎亚健康',
          scene: '写字楼每日连续办公 8-10 小时，午间小憩',
          pain: '腰肌劳损、尾椎受压酸胀、颈部悬空',
        },
        {
          icon: '🏡',
          name: '居家极简生活用户',
          role: '居家办公 / 家居美学追求者',
          scene: '书房客厅多功能融合区，小户型弹性移动',
          pain: '传统工学椅笨重、刮伤地板、与家装违和',
        },
        {
          icon: '💻',
          name: '长时高强度伏案者',
          role: '程序员 / 设计师 / 电竞玩家',
          scene: '每天 10 小时以上前倾操作，频繁切换坐姿',
          pain: '肩颈僵硬、手肘悬空、椅背跟不上动作',
        },
        {
          icon: '📚',
          name: '学生与租房党',
          role: '备考自习 / 小面积出租屋',
          scene: '书桌前长时间学习，一两年内可能搬家',
          pain: '预算有限，怕买到坐一年就塌陷的便宜椅',
        },
        {
          icon: '🩺',
          name: '腰椎有伤病人群',
          role: '腰突 / 术后康复期',
          scene: '医生建议减压坐姿，需要长期正确支撑',
          pain: '久坐即痛，担心支撑不到位反而加重',
        },
        {
          icon: '🏢',
          name: '企业行政采购',
          role: '批量选型 / 员工关怀预算',
          scene: '一次为办公室配置 50-200 张，统一验收',
          pain: '员工体型差异大、耐用性与质保难判断',
        },
      ];

      const row = document.querySelector('#view-persona-studio #bench-view-chair .persona-cards-row');
      const tpl = row && row.querySelector('.clean-persona-card');
      if (row && tpl) {
        const model = tpl.cloneNode(true);
        row.textContent = '';

        PERSONAS.forEach((p, i) => {
          const card = model.cloneNode(true);
          const current = i === 0;
          card.classList.add(current ? 'is-current' : 'is-idle');

          const avatar = card.querySelector('.persona-avatar-box');
          if (avatar) avatar.textContent = p.icon;
          const name = card.querySelector('.persona-name');
          if (name) name.textContent = p.name;
          const role = card.querySelector('.persona-role');
          if (role) role.textContent = p.role;

          const check = card.querySelector('.persona-select-check');
          if (check) {
            check.checked = current;
            if (current) check.setAttribute('checked', '');
            else check.removeAttribute('checked');
          }
          const checkText = card.querySelector('.clean-checkbox-label span');
          if (checkText) checkText.textContent = current ? '本次生效' : '未选用';

          const fields = [...card.querySelectorAll('.p-field')];
          fields.slice(2).forEach((f) => f.remove());
          const fill = (field, k, v) => {
            if (!field) return;
            const kEl = field.querySelector('.p-field-k');
            const vEl = field.querySelector('.p-field-v');
            if (kEl) kEl.textContent = k;
            if (vEl) vEl.textContent = v;
          };
          fill(fields[0], '使用场景', p.scene);
          fill(fields[1], '核心痛点', p.pain);

          row.appendChild(card);
        });
      }
    },
  },

  /* ── 03 AI 高引用规律（整页「怎么做」，按 1840 × 532 重截） ── */
  {
    view: 'citation-intel',
    file: 'citation-app-real.png',
    viewSize: VIEW_FULL,
    css: `
      /* 只留样本洞察与三大规律，隐藏蓝图与对比沙盒 */
      #view-citation-intel .clean-section:nth-of-type(4) { display: none !important; }

      #view-citation-intel .detail-page-main { padding: 10px 20px 12px !important; }
      #view-citation-intel .detail-container { max-width: 1800px !important; gap: 10px !important; }
      #view-citation-intel .clean-section { padding: 12px 18px !important; }
      #view-citation-intel .clean-section-header { margin-bottom: 10px !important; padding-bottom: 8px !important; }
      #view-citation-intel .clean-section-title { font-size: 22px !important; }
      #view-citation-intel .clean-section-sub { font-size: 15px !important; }
      #view-citation-intel .clean-tab-btn { font-size: 16px !important; padding: 8px 16px !important; }
      #view-citation-intel .detail-header-title { font-size: 20px !important; }
      #view-citation-intel .step-nav-pill { font-size: 15px !important; }

      #view-citation-intel .intel-metrics-grid { gap: 14px !important; }
      #view-citation-intel .intel-metric-box { padding: 12px 18px !important; }
      #view-citation-intel .m-label { font-size: 16px !important; }
      #view-citation-intel .m-val { font-size: 32px !important; }
      #view-citation-intel .m-val small { font-size: 16px !important; }
      #view-citation-intel .m-sub { font-size: 14px !important; line-height: 1.4 !important; }
      ${clampCss('#view-citation-intel .m-sub', 1)}
      #view-citation-intel .rules-triptych-grid { gap: 14px !important; }
      #view-citation-intel .rule-law-card { padding: 14px 18px !important; }
      #view-citation-intel .law-card-top { display: flex !important; align-items: center !important; gap: 10px !important; }
      #view-citation-intel .law-num {
        font-size: 13px !important;
        display: inline-block !important;
        white-space: nowrap !important;
        margin-bottom: 0 !important;
      }
      #view-citation-intel .law-title { display: block !important; font-size: 20px !important; line-height: 1.35 !important; }
      #view-citation-intel .law-desc { font-size: 16px !important; line-height: 1.5 !important; margin: 6px 0 !important; }
      #view-citation-intel .law-highlight-box { font-size: 15px !important; line-height: 1.5 !important; padding: 10px 14px !important; }
      ${clampCss('#view-citation-intel .law-desc', 2)}
      ${clampCss('#view-citation-intel .law-highlight-box', 3)}
    `,
    rename: () => {
      const setText = (sel, text) => {
        const el = document.querySelector(sel);
        if (el) el.textContent = text;
      };
      setText('#view-citation-intel .detail-header-title', 'AI 高引用规律');

      const sections = [...document.querySelectorAll('#view-citation-intel .clean-section')];
      const sample = sections.find((s) => s.querySelector('.intel-metrics-grid'));
      if (sample) {
        const title = sample.querySelector('.clean-section-title');
        const sub = sample.querySelector('.clean-section-sub');
        const num = sample.querySelector('.section-num');
        if (title) title.textContent = '高引用样本分析';
        if (sub) sub.textContent = '目标词：人体工学椅推荐 · 样本 200 篇 · 采集自 5 个 AI 入口 · 更新 2026-08-12';
        if (num) num.remove();
      }
      const laws = sections.find((s) => s.querySelector('.rules-triptych-grid'));
      if (laws) {
        const title = laws.querySelector('.clean-section-title');
        const sub = laws.querySelector('.clean-section-sub');
        const num = laws.querySelector('.section-num');
        if (title) title.textContent = '共性规律';
        if (sub) sub.textContent = '从 200 篇样本中提取，已固化为写作规范，生成时自动套用';
        if (num) num.remove();
      }

      const tabText = ['人体工学椅 (200)', '高端智能冰箱 (200)'];
      document.querySelectorAll('#view-citation-intel .blueprint-pill').forEach((btn, i) => {
        if (tabText[i]) btn.textContent = tabText[i];
      });

      const METRICS = [
        { label: '分析样本', val: '200', unit: '篇', sub: 'AI 回答中被引用的前 200 篇' },
        { label: '按价格分档推荐', val: '84', unit: '%', sub: '以 3000 / 5000 / 8000 三档为主' },
        { label: '给出身材适配建议', val: '76', unit: '%', sub: '按身高体重区分推荐型号' },
        { label: '含参数横向对比表', val: '91', unit: '%', sub: '参数可核对，AI 直接摘录' },
      ];
      document.querySelectorAll('#view-citation-intel .intel-metric-box').forEach((box, i) => {
        const m = METRICS[i];
        if (!m) return;
        const label = box.querySelector('.m-label');
        if (label) label.textContent = m.label;
        const val = box.querySelector('.m-val');
        if (val) val.innerHTML = m.val + ' <small>' + m.unit + '</small>';
        const sub = box.querySelector('.m-sub');
        if (sub) sub.textContent = m.sub;
      });

      const LAWS = [
        {
          title: '价格分档推荐结构',
          desc: '84% 的样本按价格带切分推荐，读者先对号入座，再往下看具体型号。',
          box: '<strong>写作要求：</strong>开篇给出 3000 元以下 / 3000-5000 / 5000 元以上 三档，每档 2-3 款并标注适用人群。',
        },
        {
          title: '身材适配选型建议',
          desc: '76% 的样本按身高体重区分推荐，把「谁适合」写成可判断的条件。',
          box: '<strong>写作要求：</strong>170cm 以下 / 170-185cm / 185cm 以上，分别对应坐深、靠背高度与腰托位置区间。',
        },
        {
          title: '可核对的参数对比表',
          desc: '形容词不进入引用，只有能核对的参数会被 AI 摘录进回答。',
          box: '<strong>写作要求：</strong>腰托升降 6cm、头枕俯仰 30°、扶手 4D 调节等做成多款横向对比表。',
        },
      ];
      document.querySelectorAll('#view-citation-intel .rule-law-card').forEach((card, i) => {
        const law = LAWS[i];
        if (!law) return;
        const num = card.querySelector('.law-num');
        if (num) num.textContent = 'RULE 0' + (i + 1);
        const title = card.querySelector('.law-title');
        if (title) title.textContent = law.title;
        const desc = card.querySelector('.law-desc');
        if (desc) desc.textContent = law.desc;
        const box = card.querySelector('.law-highlight-box');
        if (box) box.innerHTML = law.box;
      });
    },
  },

  /* ── 03 AI 高引用规律（竖版，放进「规律总结」页右栏，只留三条法则与关键指标） ── */
  {
    key: 'citation-portrait',
    view: 'citation-intel',
    file: 'citation-app-portrait.png',
    viewSize: VIEW_PORTRAIT,
    css: `
      #view-citation-intel .clean-section:nth-of-type(4) { display: none !important; }
      #view-citation-intel .nav-back-btn,
      #view-citation-intel .breadcrumb-divider,
      #view-citation-intel .header-center,
      #view-citation-intel .header-right,
      #view-citation-intel .clean-tab-group,
      #view-citation-intel .clean-section-sub,
      #view-citation-intel .m-sub,
      #view-citation-intel .intel-metric-box:nth-child(n+4) { display: none !important; }

      #view-citation-intel .detail-page-main { padding: 12px 14px 14px !important; }
      #view-citation-intel .detail-container { max-width: 772px !important; gap: 12px !important; }
      #view-citation-intel .clean-section { padding: 14px 16px !important; }
      #view-citation-intel .clean-section-header { margin-bottom: 12px !important; padding-bottom: 10px !important; }
      #view-citation-intel .clean-section-title { font-size: 27px !important; line-height: 1.3 !important; }
      #view-citation-intel .detail-header-title { font-size: 25px !important; }
      #view-citation-intel .step-index-tag { font-size: 16px !important; }

      #view-citation-intel .intel-metrics-grid {
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 12px !important;
      }
      #view-citation-intel .intel-metric-box { padding: 12px 14px !important; }
      #view-citation-intel .m-label { font-size: 18px !important; line-height: 1.3 !important; }
      #view-citation-intel .m-val { font-size: 40px !important; }
      #view-citation-intel .m-val small { font-size: 19px !important; }

      #view-citation-intel .rules-triptych-grid {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
      }
      #view-citation-intel .rule-law-card { padding: 14px 16px !important; }
      #view-citation-intel .law-card-top { display: flex !important; align-items: center !important; gap: 10px !important; }
      #view-citation-intel .law-num {
        font-size: 16px !important;
        display: inline-block !important;
        white-space: nowrap !important;
        margin-bottom: 0 !important;
      }
      #view-citation-intel .law-title { display: block !important; font-size: 26px !important; line-height: 1.3 !important; }
      #view-citation-intel .law-desc { font-size: 21px !important; line-height: 1.45 !important; margin: 8px 0 !important; }
      #view-citation-intel .law-highlight-box { font-size: 20px !important; line-height: 1.45 !important; padding: 10px 12px !important; }
      ${clampCss('#view-citation-intel .law-desc', 2)}
      ${clampCss('#view-citation-intel .law-highlight-box', 1)}
    `,
    rename: () => {
      const setText = (sel, text) => {
        const el = document.querySelector(sel);
        if (el) el.textContent = text;
      };
      setText('#view-citation-intel .detail-header-title', 'AI 高引用规律');

      const sections = [...document.querySelectorAll('#view-citation-intel .clean-section')];
      const sample = sections.find((s) => s.querySelector('.intel-metrics-grid'));
      if (sample) {
        const title = sample.querySelector('.clean-section-title');
        const num = sample.querySelector('.section-num');
        if (title) title.textContent = '高引用样本分析 · 人体工学椅';
        if (num) num.remove();
      }
      const laws = sections.find((s) => s.querySelector('.rules-triptych-grid'));
      if (laws) {
        const title = laws.querySelector('.clean-section-title');
        const num = laws.querySelector('.section-num');
        if (title) title.textContent = '共性规律 · 生成时自动套用';
        if (num) num.remove();
      }

      const METRICS = [
        { label: '分析样本', val: '200', unit: '篇' },
        { label: '按价格分档推荐', val: '84', unit: '%' },
        { label: '含参数对比表', val: '91', unit: '%' },
      ];
      document.querySelectorAll('#view-citation-intel .intel-metric-box').forEach((box, i) => {
        const m = METRICS[i];
        if (!m) return;
        const label = box.querySelector('.m-label');
        if (label) label.textContent = m.label;
        const val = box.querySelector('.m-val');
        if (val) val.innerHTML = m.val + ' <small>' + m.unit + '</small>';
      });

      const LAWS = [
        {
          title: '价格分档推荐结构',
          desc: '84% 的样本按价格带切分推荐，读者先对号入座再看型号。',
          box: '<strong>写作要求：</strong>3000 以下 / 3000-5000 / 5000 以上 三档。',
        },
        {
          title: '身材适配选型建议',
          desc: '76% 的样本按身高体重区分推荐，把「谁适合」写成可判断条件。',
          box: '<strong>写作要求：</strong>按身高分段给坐深、腰托区间。',
        },
        {
          title: '可核对的参数对比表',
          desc: '形容词不进入引用，只有能核对的参数会被 AI 摘录进回答。',
          box: '<strong>写作要求：</strong>腰托升降、头枕俯仰做成横向对比表。',
        },
      ];
      document.querySelectorAll('#view-citation-intel .rule-law-card').forEach((card, i) => {
        const law = LAWS[i];
        if (!law) return;
        const num = card.querySelector('.law-num');
        if (num) num.textContent = 'RULE 0' + (i + 1);
        const title = card.querySelector('.law-title');
        if (title) title.textContent = law.title;
        const desc = card.querySelector('.law-desc');
        if (desc) desc.textContent = law.desc;
        const box = card.querySelector('.law-highlight-box');
        if (box) box.innerHTML = law.box;
      });
    },
  },
];

const chromePath = process.env.PUPPETEER_EXECUTABLE_PATH
  || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: chromePath,
  defaultViewport: { ...VIEW, deviceScaleFactor: 3 },
  args: ['--allow-file-access-from-files', '--lang=zh-CN'],
});

// 传入视图名（brand-kb / persona-studio / citation-intel / citation-portrait）可只重截其中一张
const only = process.argv[2];

for (const target of TARGETS) {
  if (only && (target.key || target.view) !== only) continue;
  const page = await browser.newPage();
  const view = target.viewSize || VIEW;
  await page.setViewport({ ...view, deviceScaleFactor: 3 });
  await page.goto(appHtml, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1000));

  await page.evaluate(
    ({ view, css, renameSrc }) => {
      document.getElementById('app').className = 'view-' + view;
      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
      // eslint-disable-next-line no-new-func
      new Function(`return (${renameSrc})`)()();
    },
    { view: target.view, css: baseCss('view-' + target.view) + target.css, renameSrc: target.rename.toString() }
  );
  await new Promise((r) => setTimeout(r, 1200));

  const el = await page.$('#view-' + target.view);
  if (!el) {
    console.error('未找到视图:', target.view);
    continue;
  }
  const out = path.join(outDir, target.file);
  await el.screenshot({ path: out });
  console.log('saved:', out);
  await page.close();
}

await browser.close();
