import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * 内容撰写 Agent · 前三步逻辑详解（三页）
 *   01 构建品牌资料库   —— 先给 Agent 一个统一的信息底座
 *   02 目标用户设定     —— 决定这篇内容替谁说话
 *   03 AI 高引用规律总结 —— 参考文章 → 拆出结构法则 → 固化进 Agent
 *
 * 01 / 02 左右对照：左侧「是什么」，右侧「怎么做」+ 底部落地。
 * 03 单页三栏推进：左侧示意 App 竖版界面，中间高引用文章样本，右侧拆出的法则。
 */

const ZONE = { footer: 'h-[106px]' };

/* ─────────────────────── 共用组件 ─────────────────────── */

const Em = ({ children }) => <span className="text-white font-bold">{children}</span>;

/** 底部：一句话落地 */
const Footer = ({ label, children }) => (
  <div
    className={`${ZONE.footer} shrink-0 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-8 flex items-center gap-6`}
  >
    <span className="shrink-0 text-[19px] font-black text-black bg-white rounded px-3.5 py-1.5 tracking-widest">
      {label}
    </span>
    <p className="text-[26px] text-white font-bold leading-snug">{children}</p>
  </div>
);

const CardLabel = ({ children, accent = false, className = '' }) => (
  <div
    className={`shrink-0 text-[21px] font-bold tracking-[0.14em] ${
      accent ? 'text-[#7FA9FF]' : className ? '' : 'text-white'
    } ${className}`}
  >
    {children}
  </div>
);

/** 是什么 / 怎么做：纯文字分区标题，不用色块标签 */
const ZoneTitle = ({ children }) => (
  <div className="shrink-0 flex items-center gap-3">
    <span className="w-[3px] h-[22px] bg-[#004CE5] rounded-full" />
    <span className="text-[22px] font-black text-white tracking-[0.18em]">{children}</span>
  </div>
);

/* ═══════════════════════════════════════════════════════════
 * 01 构建品牌资料库
 * ═════════════════════════════════════════════════════════*/

const KB_INPUTS = ['品牌官网', '产品详情页', '白皮书 / 说明书', '竞品资料', '品牌既有数据'];

const KB_OUTPUTS = ['产品卖点', '技术路线', '品牌调性', '术语 · 禁用词'];

/**
 * 「怎么做」：示意 App 的真实界面截图（由 scripts/shot-kb-app.mjs 生成）
 * 图片比例已按此展示区域调好，用 cover 铺满。
 */
const HowAppShot = ({ title, src, alt }) => (
  <div className="flex-1 min-h-0 rounded-2xl bg-[#0b0c0e] border border-white/[0.14] overflow-hidden flex flex-col shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
    <div className="shrink-0 h-[38px] px-5 flex items-center gap-3 bg-[#101214] border-b border-white/10">
      <span className="flex items-center gap-1.5">
        {['#f87171', '#fbbf24', '#3fb950'].map((c) => (
          <span key={c} className="w-[10px] h-[10px] rounded-full" style={{ background: c }} />
        ))}
      </span>
      <span className="ml-2 text-[17px] font-bold text-white tracking-wide">{title}</span>
    </div>

    <div className="flex-1 min-h-0 bg-[#08090b]">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  </div>
);

const HowKbApp = () => (
  <HowAppShot
    title="内容撰写 Agent · 品牌知识库"
    src="/capabilities/kb-app-real.png"
    alt="品牌知识库界面：产品卖点 / 竞品对比 / 合规与禁用词"
  />
);

export default function Page_ContentAgentStep_BrandKB() {
  return (
    <SlideLayout title="01 构建品牌资料库" subtitle="品牌有什么、竞品有什么、什么能说不能说，Agent 一次学会，后面直接调用。">
      <div className="absolute w-[560px] h-[560px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -right-40 top-10 pointer-events-none" />

      <div className="w-full h-full flex flex-col gap-5 select-none relative z-10 font-['MiSans']">
        {/* 左右结构：左边是什么，右边怎么做（示意 App 真实界面） */}
        <div className="flex-1 min-h-0 flex items-stretch gap-7">
          <div className="w-[520px] shrink-0 flex flex-col min-h-0 gap-2.5">
            <ZoneTitle>是什么</ZoneTitle>
            <div className="flex-1 min-h-0 flex flex-col gap-3">
              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4">
                <CardLabel>品牌现有资料</CardLabel>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {KB_INPUTS.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1 text-[20px] text-white font-bold leading-snug"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex items-center justify-center gap-3">
                <svg width="22" height="32" viewBox="0 0 22 32" fill="none">
                  <path d="M11 2V24" stroke="#004CE5" strokeWidth="3" strokeLinecap="round" />
                  <path d="M3 17L11 25L19 17" stroke="#004CE5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[20px] text-white font-bold">抓取 · 识别 · 结构化</span>
              </div>

              <div className="flex-1 min-h-0 rounded-2xl border border-[#004CE5]/50 bg-[#004CE5]/[0.10] shadow-[0_0_40px_rgba(0,76,229,0.12)] px-6 py-5 flex flex-col">
                <CardLabel accent>沉淀成一份品牌知识库</CardLabel>
                <div className="mt-4 flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-3">
                  {KB_OUTPUTS.map((s) => (
                    <div
                      key={s}
                      className="rounded-xl border border-white/[0.10] bg-white/[0.06] px-4 flex items-center gap-2.5 min-h-0"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#004CE5] shrink-0" />
                      <span className="text-[23px] font-black text-white leading-tight whitespace-nowrap">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0 flex flex-col min-h-0 gap-2.5">
            <ZoneTitle>怎么做</ZoneTitle>
            <HowKbApp />
          </div>
        </div>

        <Footer label="怎么用">
          卖点、竞品差异、敏感词原本散在各处，<Em>建库一次统一沉淀</Em>，之后每篇内容都调用同一套口径，包括哪些话不能说。
        </Footer>
      </div>
    </SlideLayout>
  );
}

/* ═══════════════════════════════════════════════════════════
 * 02 目标用户设定
 * ═════════════════════════════════════════════════════════*/

const PERSONA_CASE = [
  { who: '办公室上班族', focus: '重点讲每天坐 8 小时，腰累不累' },
  { who: '居家用户', focus: '更多讲占不占地方、和装修搭不搭' },
];

const CHAIR_IMG = '/images/ergonomic_chair.png';

export function Page_ContentAgentStep_TargetUser() {
  const [chairOk, setChairOk] = React.useState(true);

  return (
    <SlideLayout
      title="02 目标用户设定"
      subtitle="面对不同用户和使用场景，同一个产品要讲的东西完全不同。"
    >
      <div className="absolute w-[560px] h-[560px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -left-40 bottom-0 pointer-events-none" />

      <div className="w-full h-full flex flex-col gap-5 select-none relative z-10 font-['MiSans']">
        {/* 左右结构：左边是什么，右边怎么做（示意 App 真实界面） */}
        <div className="flex-1 min-h-0 flex items-stretch gap-7">
          <div className="w-[520px] shrink-0 flex flex-col min-h-0 gap-2.5">
            <ZoneTitle>是什么</ZoneTitle>
            <div className="flex-1 min-h-0 flex flex-col gap-3">
              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 relative overflow-hidden">
                <div className="relative z-10 pr-[130px]">
                  <CardLabel>同一个产品</CardLabel>
                  <div className="mt-2 text-[34px] font-black text-white leading-tight whitespace-nowrap">
                    一把人体工学椅
                  </div>
                  <div className="mt-1 text-[20px] text-white font-bold">卖点和参数完全一样</div>
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[130px] h-[130px] pointer-events-none">
                  {chairOk ? (
                    <img
                      src={CHAIR_IMG}
                      alt="人体工学椅"
                      className="w-full h-full object-contain"
                      onError={() => setChairOk(false)}
                    />
                  ) : null}
                </div>
              </div>

              <div className="shrink-0 flex items-center justify-center gap-3">
                <svg width="22" height="32" viewBox="0 0 22 32" fill="none">
                  <path d="M11 2V24" stroke="#004CE5" strokeWidth="3" strokeLinecap="round" />
                  <path d="M3 17L11 25L19 17" stroke="#004CE5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[20px] text-white font-bold">按人群拆开写</span>
              </div>

              <div className="flex-1 min-h-0 flex flex-col gap-3">
                {PERSONA_CASE.map((c) => (
                  <div
                    key={c.who}
                    className="flex-1 min-h-0 rounded-2xl border border-[#004CE5]/50 bg-[#004CE5]/[0.10] shadow-[0_0_40px_rgba(0,76,229,0.12)] px-6 py-4 flex flex-col justify-center"
                  >
                    <div className="text-[28px] font-black text-white leading-none">{c.who}</div>
                    <div className="mt-3 text-[21px] text-white font-bold leading-snug">{c.focus}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0 flex flex-col min-h-0 gap-2.5">
            <ZoneTitle>怎么做</ZoneTitle>
            <HowAppShot
              title="内容撰写 Agent · 目标用户设定"
              src="/capabilities/persona-app-real.png"
              alt="目标用户设定界面：6 组用户画像，本次写作选用办公室久坐上班族"
            />
          </div>
        </div>

        <Footer label="怎么用">
          同一个产品面对不同人群关注点完全不同，<Em>提前设定多组用户画像</Em>（身份 · 场景 · 痛点 · 顾虑），每次写作指定这篇面向谁，Agent 就按这个人群来写。
        </Footer>
      </div>
    </SlideLayout>
  );
}

/* ═══════════════════════════════════════════════════════════
 * 03 AI 高引用规律总结 · 是什么
 * 版式对齐 Slide_Skyworth / Page_SkyworthContentStrategyDeconstruct
 * ═════════════════════════════════════════════════════════*/

const CITATION_ARTICLES = [
  '2026人体工学椅推荐：3000 / 5000 / 8000 怎么选',
  '按身高体重选人体工学椅，这几项必须对上',
  '腰托、头枕、扶手怎么调，久坐才不累',
  '办公人体工学椅横评：先看支撑再看价格',
  '人体工学椅选购清单：预算定档，再对调节',
  '久坐8小时不累？人体工学椅支撑力实测对比',
  '3000元人体工学椅避坑：这几个调节不能少',
  '网椅还是海绵椅？人体工学椅坐感怎么选',
  '人体工学椅头枕有没有用？按坐姿看才准',
  '小个子怎么选人体工学椅：坐深和腰托先对上',
  '人体工学椅扶手怎么调，敲键盘才不耸肩',
  '万元人体工学椅值不值：先看腰背一体支撑',
  '居家办公人体工学椅推荐：占地和调节怎么平衡',
  '人体工学椅倾仰锁死还是随动？久坐选这项',
  '人体工学椅选购避坑：别只看网布和颜值',
];

const CITATION_RULES = [
  {
    no: '01',
    title: '按预算分档对比',
    body: '标题直接给 3000 / 5000 / 8000 三档，读者先对号入座，再进入对比。',
  },
  {
    no: '02',
    title: '按身高体重适配',
    body: '坐深、腰托高度、头枕位置必须和体型对上，而不是只堆参数。',
  },
  {
    no: '03',
    title: '调节功能做成对照表',
    steps: [
      { k: '腰托', v: '高度、深浅能不能锁住腰椎' },
      { k: '头枕', v: '靠上去是否对上颈椎，而不是空摆' },
      { k: '扶手', v: '敲键盘时肩膀是否还能放平' },
      { k: '倾仰', v: '锁死还是随动，久坐选哪一档' },
    ],
  },
  {
    no: '04',
    title: '先看支撑再看价格',
    body: '横评先比腰背支撑和久坐体验，价格放在后面当筛选条件。',
  },
];

const DoubleChevron = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>
);

export function Page_ContentAgentStep_CitationPattern() {
  return (
    <SlideLayout
      title="03 AI高引用规律总结"
      subtitle="先看 AI 现在在引用什么，拆出已被验证的结构，再写进 Agent。"
    >
      <div className="absolute w-[560px] h-[560px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -right-40 top-10 pointer-events-none" />

      <div className="w-full h-full flex items-stretch min-h-0 gap-6 select-none relative z-10 font-['MiSans'] animate-fadeIn">
        {/* 左：规律已固化进 Agent（示意 App 真实界面） */}
        <div className="w-[32%] shrink-0 flex flex-col h-full min-h-0">
          <HowAppShot
            title="内容撰写 Agent · AI 高引用规律"
            src="/capabilities/citation-app-portrait.png"
            alt="AI 高引用规律界面：200 篇样本的统计结果与三条写作规律"
          />
        </div>

        <div className="w-[2.5%] flex items-center justify-center relative z-10 shrink-0">
          <DoubleChevron className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse rotate-180" />
        </div>

        {/* 中：高引用参考文章 */}
        <div className="w-[25%] shrink-0 flex flex-col h-full bg-white border border-zinc-200 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative overflow-hidden">
          <div className="flex flex-col gap-0.5 mb-4 shrink-0">
            <h3 className="text-[20px] font-black text-zinc-900 tracking-wide">高引用参考文章</h3>
            <span className="text-[15px] font-bold text-[#004CE5]">目标词条 · 人体工学椅</span>
          </div>

          <div className="flex-1 min-h-0 flex flex-col bg-zinc-50/50 rounded-xl border border-zinc-200/60 p-2.5 overflow-hidden">
            <div className="flex items-center text-[12px] font-bold text-zinc-900 border-b border-zinc-200 pb-1.5 px-1 shrink-0">
              <span className="w-8">序号</span>
              <span className="flex-grow">文章标题</span>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col justify-between py-1 my-1">
              {CITATION_ARTICLES.map((title, idx) => (
                <div key={title} className="flex items-center h-[28px] text-[14px] border-b border-zinc-100/50 px-1">
                  <span className="w-8 font-['Montserrat'] text-zinc-900 font-bold">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="flex-grow truncate text-zinc-900 font-bold pr-1">{title}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center text-[#004CE5] text-[28px] font-black shrink-0 border-t border-zinc-200 mt-1 tracking-[0.3em] flex items-center justify-center leading-none">
              •••
            </div>
          </div>
        </div>

        <div className="w-[2.5%] flex items-center justify-center relative z-10 shrink-0">
          <DoubleChevron className="w-8 h-8 text-[#004CE5] drop-shadow-[0_0_10px_rgba(0,76,229,0.3)]" />
        </div>

        {/* 右：法则拆解 */}
        <div className="flex-grow flex flex-col h-full min-w-0">
          <div className="flex items-center gap-3 mb-4 shrink-0">
            <div className="h-8 w-1 bg-[#004CE5] rounded-full" />
            <h2 className="text-[28px] font-bold text-[#004CE5] tracking-wide">
              从高引用文章里拆出的结构法则
            </h2>
          </div>

          <div className="flex-1 flex flex-col justify-center relative min-h-0">
            <div className="absolute left-[3px] top-4 bottom-8 w-0.5 bg-white/10 z-0 rounded-full" />
            <div className="space-y-5 relative z-10 pl-8">
              {CITATION_RULES.map((rule) => (
                <div key={rule.no} className="relative flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-black" />
                  <div className="text-[#004CE5] font-['Montserrat'] text-[28px] font-black pt-0.5 shrink-0 w-10">
                    {rule.no}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[24px] font-extrabold text-white mb-1 tracking-wide">{rule.title}</h3>
                    {rule.steps ? (
                      <div className="text-white text-[18px] leading-relaxed flex flex-col gap-1 font-bold">
                        {rule.steps.map((s) => (
                          <div key={s.k} className="flex items-start">
                            <span className="text-white font-black w-[3.2rem] shrink-0">{s.k}</span>
                            <span>{s.v}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-white text-[18px] leading-relaxed font-bold">{rule.body}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_ContentAgentStep_BrandKB.hideHeader = true;
Page_ContentAgentStep_TargetUser.hideHeader = true;
Page_ContentAgentStep_CitationPattern.hideHeader = true;
