import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';
import { BookOpenCheck, FlaskConical, Workflow, Megaphone, Users } from 'lucide-react';

/**
 * 「不同类型文章展示」：总览 + 五篇成稿示意
 * 与第四部分（兴齐方案）的同名内容相比，这里的页面走 SlideLayout，
 * 以便沿用第三部分的页眉与大标题；截图路径两边共用。
 * 提问与描述保持行业通用，不落到具体产品。
 */

const TYPES = [
  {
    no: '01',
    stage: '事件曝光',
    name: '新药上市类',
    audience: '行业 · 大众媒体',
    desc: '借获批与上市事件抢占时效语料，传播面最广，是事件类提问的第一落点。',
    question: '这个药获批了吗？',
    color: '#0039B8',
    Icon: Megaphone,
  },
  {
    no: '02',
    stage: '权威口径',
    name: '指南共识类',
    audience: '医生 · 专业读者',
    desc: '以指南更新与专家共识确立权威表述，是 AI 给结论时最优先采信的依据。',
    question: '一线治疗怎么选？',
    color: '#004CE5',
    Icon: BookOpenCheck,
  },
  {
    no: '03',
    stage: '证据支撑',
    name: '临床研究类',
    audience: '医生 · 专业读者',
    desc: '把关键研究的有效率与安全性写成可整句摘抄的表述，为疗效结论提供硬证据。',
    question: '临床数据怎么样？',
    color: '#2563EB',
    Icon: FlaskConical,
  },
  {
    no: '04',
    stage: '方案说明',
    name: '方案解读类',
    audience: '医生 · 治疗决策者',
    desc: '讲清用法与对症 / 对因的角色分工，建立差异化记忆点，让 AI 复述时口径一致。',
    question: '这个方案该怎么用？',
    color: '#3B82F6',
    Icon: Workflow,
  },
  {
    no: '05',
    stage: '大众认知',
    name: '知识科普类',
    audience: '患者 · 家属',
    desc: '用通俗语言回答患者侧的真实疑问，覆盖长尾与主观类提问，避免 AI 无据可依。',
    question: '这个病该怎么治？',
    color: '#60A5FA',
    Icon: Users,
  },
];

/* ═══════════════════ 五类文章总览 ═══════════════════ */

export default function Page_ContentTypesOverview() {
  return (
    <SlideLayout
      title="同一套逻辑，产出五类文章"
      subtitle="依据高引用文章的溯源结果锁定五类内容，覆盖从医生决策到患者认知的完整提问面"
    >
      <div className="w-full h-full flex flex-col gap-5 select-none font-['MiSans'] animate-fadeIn">
        <div className="grid grid-cols-5 gap-5 items-stretch flex-1 min-h-0">
          {TYPES.map((t) => (
            <div
              key={t.no}
              className="relative flex flex-col h-full rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="h-[5px] w-full shrink-0" style={{ background: t.color, boxShadow: `0 0 18px ${t.color}80` }} />

              <div className="flex flex-col flex-1 px-7 pt-6 pb-6 min-h-0">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-['Montserrat'] text-[30px] font-black leading-none tracking-tighter"
                    style={{ color: `${t.color}66` }}
                  >
                    {t.no}
                  </span>
                  <span className="text-[15px] font-bold tracking-widest text-zinc-400 border border-white/10 bg-white/5 rounded-full px-3 py-1">
                    {t.stage}
                  </span>
                </div>

                <h3 className="text-[34px] font-black text-white tracking-wide leading-tight">{t.name}</h3>
                <span className="text-[18px] font-medium tracking-wide mt-2" style={{ color: t.color }}>
                  {t.audience}
                </span>

                <p className="text-[19px] text-zinc-400 leading-[1.7] font-light mt-5" style={{ textWrap: 'pretty' }}>
                  {t.desc}
                </p>

                <div className="flex-1 flex items-center justify-center min-h-0 py-3">
                  <div
                    className="w-[88px] h-[88px] rounded-full flex items-center justify-center"
                    style={{ border: `1px solid ${t.color}33`, background: `${t.color}0F` }}
                  >
                    <t.Icon size={40} strokeWidth={1.4} style={{ color: t.color, opacity: 0.85 }} />
                  </div>
                </div>

                <div className="shrink-0 rounded-xl bg-black/40 border border-white/5 px-4 py-3">
                  <span className="block text-[14px] font-bold tracking-widest text-zinc-500 mb-1.5">承接提问</span>
                  <span className="block text-[18px] text-zinc-200 leading-snug font-medium whitespace-nowrap">
                    「{t.question}」
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shrink-0 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/15" />
          <p className="text-[21px] text-zinc-400 font-light tracking-wide text-center shrink-0 whitespace-nowrap">
            五类内容<strong className="text-white font-semibold">分工接力</strong>：上市类抢时效，专业类立结论，科普类补长尾
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/15" />
        </div>
      </div>
    </SlideLayout>
  );
}

/* ═══════════════════ 五类拆解 ═══════════════════ */

const DECONSTRUCT = {
  launch: {
    title: '【新药上市类】高引用写法拆解',
    subtitle: '对高引用上市类文章做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '光明网 · 新药上市类',
    typeName: '新药上市类',
    image: '/charts/geo-article-analysis-anlotinib.png',
    articles: [
      '新药获批上市：适应症、机制与可及性一次说清',
      '这款新药过审了：一线治疗缺什么，它补哪一层',
      '新药上市速览：医保、处方路径与患者可及',
      '从获批到进院：这款新药的临床定位怎么看',
      '新药获批解读：关键研究数字与安全性一并给',
      '上市即关注：它解决的是哪一类未满足需求',
      '新药获批问答：适不适合、怎么用、哪里能开到',
      '这款新药进医保了吗？可及路径一次讲清',
      '新药上市观察：机制差异比价格更值得先看',
      '获批背后：III期关键终点如何改写治疗选择',
      '新药可及性盘点：处方、医保、院内路径',
      '上市新药怎么选进方案：适应症与证据要对上',
      '新药获批不是终点：长期用药与耐受怎么看',
      '导读给全要素：适应症 · 机制 · 可及一次齐',
      '从事件到治疗选择：专家口径如何收口',
    ],
    rules: [
      { no: '01', title: '结论前置', body: '标题直接给获批 / 上市结论，导读首句写清产品定位。' },
      { no: '02', title: '导读一次给齐关键要素', body: '适应症 · 机制或剂型 · 可及性（医保 / 处方），关键信息一次说清。' },
      {
        no: '03',
        title: '五节叙事链',
        steps: [
          { k: '困局', v: '现有治疗还缺什么' },
          { k: '机制', v: '新药解决的是哪一层问题' },
          { k: '证据', v: '关键研究数字' },
          { k: '安全', v: '耐受性与能否长期用' },
          { k: '收口', v: '专家 / 指南口径 + 可及路径' },
        ],
      },
      { no: '04', title: '关键数字做成可摘抄句', body: '起效时间、有效率对照、安全性数字写成整句，便于 AI 直接引用。' },
      { no: '05', title: '专家引言抬权威', body: '用临床专家或指南共识原话收口，把叙事从事件推到治疗选择。' },
    ],
  },
  guide: {
    title: '【指南共识类】高引用写法拆解',
    subtitle: '对高引用指南解读做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '良医汇 · 指南共识类',
    typeName: '指南共识类',
    image: '/charts/geo-article-analysis-guide.png',
    articles: [
      '最新指南更新：一线治疗格局怎么变',
      '专家共识解读：分层治疗对应哪条路径',
      '指南里这款药排在哪：推荐等级一次看清',
      '治疗选择对照：指南口径下的一线与后线',
      '指南更新速览：关键推荐句可直接引用',
      '共识怎么落地：按严重度匹配治疗阶梯',
      '权威解读：指南修订改了哪几条结论',
      '一线怎么选？把指南推荐写成可摘抄句',
      '专家共识要点：适应人群与排除边界',
      '指南对照表：不同路径各承担什么角色',
      '治疗格局更新：新证据如何改写推荐',
      '共识收口：个体化选择而不是绝对推荐',
      '指南问答：谁适合、何时用、用到什么程度',
      '权威口径整理：会议共识与指南原文对齐',
      '最新专家共识：关键推荐与临床落地路径',
    ],
    rules: [
      { no: '01', title: '会议 / 指南锚点前置', body: '标题写清指南或专家共识名称 + 更新主题，方便 AI 归入“权威解读”。' },
      { no: '02', title: '治疗格局用对照呈现', body: '不同路径并列，各给定位与 1–2 个关键点，避免只推单一品类。' },
      {
        no: '03',
        title: '关键口径可摘抄',
        steps: [
          { k: '分层', v: '按严重度或病因对应治疗阶梯' },
          { k: '一线', v: '指南里谁在什么位置' },
          { k: '定位', v: '本品对应哪一条推荐路径' },
        ],
      },
      { no: '04', title: '收口落个体化选择', body: '明确“按病情适配”，给谨慎结论句，降低绝对化推荐风险。' },
    ],
  },
  clinical: {
    title: '【临床研究类】高引用写法拆解',
    subtitle: '对高引用临床研究解读做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '专业媒体 · 临床研究类',
    typeName: '临床研究类',
    image: '/charts/geo-article-analysis-clinical.png',
    articles: [
      'III期结果解读：有效率、起效时间一次给齐',
      '关键研究读数：对照、人群、干预怎么写',
      '临床数据怎么看：疗效与安全性必须同屏',
      '这项研究证明了什么：一句话定位先写清',
      '有效率对照：试验组 vs 对照组数字可摘抄',
      '起效节奏盘点：7天、4周、3月分别看什么',
      '安全性读数：不良反应率与停药率怎么报',
      '研究名即关键词：III期终点一眼可检索',
      '临床证据链：主要终点、次要终点、亚组',
      '长期随访数据：疗效能否维持、耐受如何',
      '对照试验解读：差异有多大、临床意义是什么',
      '专家读数：把数字落到选药与长期用药',
      '这项研究的人群是谁：纳入排除决定引用边界',
      '关键终点拆解：有效率、缓解率与生存数据',
      '临床研究问答：数据怎么用、不能推出什么',
    ],
    rules: [
      { no: '01', title: '研究名即标题关键词', body: 'III 期 / 有效率 / 起效时间——一眼可检索、可引用。' },
      { no: '02', title: '先给研究一句话定位', body: '写清人群、对照、干预，读者和 AI 都能立刻抓住这是哪项研究。' },
      {
        no: '03',
        title: '读数三步法',
        steps: [
          { k: '起效', v: '节奏数字优先可摘抄' },
          { k: '疗效', v: '有效率与对照并列给出' },
          { k: '安全', v: '不良反应 / 依从性与疗效同屏出现' },
        ],
      },
      { no: '04', title: '专家对话抬权威', body: '用临床专家解读收口，把数字落到选药与长期用药语境。' },
    ],
  },
  regimen: {
    title: '【方案解读类】高引用写法拆解',
    subtitle: '对高引用方案解读做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: 'MedSci · 方案解读类',
    typeName: '方案解读类',
    image: '/charts/geo-article-analysis-regimen.png',
    articles: [
      '这套方案怎么用：对症与对因角色一次分清',
      '方案别称 + 机制：先给记忆点再讲结构',
      '联合还是序贯：适用场景对照表',
      '方案解读：补的是哪一层治疗缺口',
      '用法与路径：处方、疗程、随访怎么安排',
      '对因治疗方案：机制差异决定临床定位',
      '方案对照：现有路径还缺什么、新方案补什么',
      '长期坚持得了吗：耐受、依从与疗程设计',
      '方案落地：什么人适合、什么边界要留',
      '治疗方案拆解：角色分工写成可复述口径',
      '方案选择逻辑：先看机制再看证据',
      '这套组合怎么排：一线、维持与换药节点',
      '方案解读问答：怎么用、用多久、何时调整',
      '差异化记忆点：方案名、机制、适用场景',
      '处方路径：从诊断到方案落地的完整链路',
    ],
    rules: [
      { no: '01', title: '方案别称 + 机制钩子', body: '先给一个好记的方案名和机制，建立记忆点。' },
      { no: '02', title: '结构表说清角色', body: '对症与对因分栏对照，各写清承担什么角色。' },
      {
        no: '03',
        title: '五节叙事链',
        steps: [
          { k: '困局', v: '现有方案还缺什么' },
          { k: '机制', v: '这个方案补的是哪一层' },
          { k: '证据', v: '关键研究数字' },
          { k: '安全', v: '能否长期坚持' },
          { k: '收口', v: '适用场景与处方路径' },
        ],
      },
      { no: '04', title: '对比时留边界', body: '突出差异的同时承认其他路径仍有适用场景，避免绝对化。' },
    ],
  },
  edu: {
    title: '【知识科普类】高引用写法拆解',
    subtitle: '对高引用患者科普做结构拆解，提取可被大模型稳定采信与摘抄的写法',
    refTag: '医脉通 · 知识科普类',
    typeName: '知识科普类',
    image: '/charts/geo-article-analysis-edu.png',
    articles: [
      '为什么总治不好？先分清对症和对因',
      '这个病该怎么治：患者提问式标题更易被搜',
      '检查之后看什么：诊断到治疗怎么闭环',
      '日常护理清单：问医生、看说明书、规律用药',
      '症状反复怎么办：机制用白话讲清',
      '患者最常问的10个问题：一次给可执行建议',
      '这个药是干什么的：适应症与用法说人话',
      '家属陪诊手册：该问医生哪几件事',
      '长期用药要注意什么：耐受与随访用白话',
      '治不好是不是用错方案：对症对因先分清',
      '什么情况下该就医：警示症状与就诊路径',
      '科普问答：病因、检查、治疗、护理一条链',
      '用药误区盘点：这些做法没有证据',
      '患者视角：这个病和生活怎么共存',
      '从症状到治疗：把专业口径翻译成患者语言',
    ],
    rules: [
      { no: '01', title: '痛点提问式标题', body: '用患者会搜的原话做标题，直接截流搜索意图。' },
      { no: '02', title: '认知 → 诊断 → 治疗闭环', body: '成因与检查先讲清，再落到治疗选择与日常护理。' },
      {
        no: '03',
        title: '对因治疗用白话拆解',
        steps: [
          { k: '为何', v: '问题持续的关键机制是什么' },
          { k: '有哪些', v: '对症 / 对因各有哪些路径' },
          { k: '举例', v: '本品作为其中一条选项出现' },
        ],
      },
      { no: '04', title: '给患者可执行建议', body: '问医生、看说明书、规律用药——写成整段，便于 AI 摘抄。' },
    ],
  },
};

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const ColTitle = ({ title }) => (
  <div className="mb-3 shrink-0 h-[32px] flex items-center">
    <h3 className="text-[20px] font-black text-white tracking-wide leading-none">{title}</h3>
  </div>
);

function DeconstructPage({ typeKey }) {
  const meta = DECONSTRUCT[typeKey];

  return (
    <SlideLayout title={meta.title} subtitle={meta.subtitle}>
      <div className="w-full h-full flex items-stretch min-h-0 gap-5 select-none font-['MiSans'] animate-fadeIn">
        {/* 左：高引用参考文章示意 */}
        <div className="w-[28%] shrink-0 flex flex-col h-full min-h-0">
          <ColTitle title="高引用参考文章示意" />
          <div className="flex-1 min-h-0">
            <ArticleShot src={meta.image} alt={`${meta.title}参考文章`} />
          </div>
        </div>

        <div className="w-8 shrink-0 flex items-center justify-center pt-[32px]">
          <ArrowRight className="w-8 h-8 text-white" />
        </div>

        {/* 中：标题在白底列表上方 */}
        <div className="w-[25%] shrink-0 flex flex-col h-full min-h-0">
          <ColTitle title="高引用参考文章 TOP200" />

          <div className="flex-1 min-h-0 flex flex-col bg-white border border-zinc-200 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="flex items-center text-[12px] font-bold text-zinc-900 border-b border-zinc-200 pb-1.5 px-1 shrink-0">
              <span className="w-8">序号</span>
              <span className="flex-grow">文章标题</span>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col justify-between py-1 my-1">
              {meta.articles.map((title, idx) => (
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

        <div className="w-8 shrink-0 flex items-center justify-center pt-[32px]">
          <ArrowRight className="w-8 h-8 text-[#004CE5]" />
        </div>

        {/* 右：高引用公式总结 */}
        <div className="flex-1 flex flex-col h-full min-w-0">
          <ColTitle title="高引用公式总结" />

          <div className="flex-1 flex flex-col justify-center relative min-h-0 pr-1">
            <div className="absolute left-[3px] top-3 bottom-3 w-0.5 bg-white/10" />
            <div className="space-y-6 relative z-10 pl-8">
              {meta.rules.map((rule) => (
                <div key={rule.no} className="relative flex items-start gap-3">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-black" />
                  <div className="text-[#004CE5] font-['Montserrat'] text-[22px] font-black pt-0.5 shrink-0 w-9">{rule.no}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[24px] font-black text-white mb-1 tracking-wide">{rule.title}</h3>
                    {rule.steps ? (
                      <div className="text-white text-[18px] leading-relaxed flex flex-col gap-0.5 font-bold">
                        {rule.steps.map((s) => (
                          <div key={s.k} className="flex items-start gap-2">
                            <span className="text-white font-black shrink-0 w-[2.75rem]">{s.k}</span>
                            <span className="min-w-0">{s.v}</span>
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

export function Page_ContentTypeDeconstruct_Launch() {
  return <DeconstructPage typeKey="launch" />;
}
export function Page_ContentTypeDeconstruct_Guide() {
  return <DeconstructPage typeKey="guide" />;
}
export function Page_ContentTypeDeconstruct_Clinical() {
  return <DeconstructPage typeKey="clinical" />;
}
export function Page_ContentTypeDeconstruct_Regimen() {
  return <DeconstructPage typeKey="regimen" />;
}
export function Page_ContentTypeDeconstruct_Edu() {
  return <DeconstructPage typeKey="edu" />;
}

/* ═══════════════════ 五篇成稿示意 ═══════════════════ */

const DEMOS = {
  launch: {
    title: '【新药上市类】成稿示意',
    subtitle: '结论前置，关键数字写成可摘抄句，抢占获批与上市的时效语料',
    image: '/charts/geo-article-launch-demo.png',
  },
  guide: {
    title: '【指南共识类】成稿示意',
    subtitle: '以指南更新与专家共识确立权威口径，AI 给结论时优先采信',
    image: '/charts/geo-article-demo-guide.png',
  },
  clinical: {
    title: '【临床研究类】成稿示意',
    subtitle: '把有效率与安全性写成可整句引用的表述，为疗效结论提供硬证据',
    image: '/charts/geo-article-demo-clinical.png',
  },
  regimen: {
    title: '【方案解读类】成稿示意',
    subtitle: '讲清用法与对症 / 对因的角色分工，让 AI 复述时口径一致',
    image: '/charts/geo-article-demo-regimen.png',
  },
  edu: {
    title: '【知识科普类】成稿示意',
    subtitle: '用患者语言回答真实疑问，覆盖长尾与主观类提问',
    image: '/charts/geo-article-demo-edu.png',
  },
};

function ArticleShot({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-full h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
      <div className="w-full h-[36px] bg-black/40 border-b border-white/10 flex items-center px-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
      </div>
      <div className="flex-1 min-h-0 bg-white relative">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0B0D19]/45 text-zinc-500">
            <span className="text-[22px] font-bold tracking-widest">请放入截图</span>
            <span className="text-[15px] font-mono text-zinc-600">public{src}</span>
          </div>
        ) : (
          <img src={src} alt={alt} onError={() => setFailed(true)} className="w-full h-full object-cover object-top" />
        )}
      </div>
    </div>
  );
}

function DemoPage({ typeKey }) {
  const meta = DEMOS[typeKey];

  return (
    <SlideLayout title={meta.title} subtitle={meta.subtitle}>
      <div className="w-full h-full animate-fadeIn">
        <ArticleShot src={meta.image} alt={meta.title} />
      </div>
    </SlideLayout>
  );
}

export function Page_ContentTypeDemo_Launch() {
  return <DemoPage typeKey="launch" />;
}
export function Page_ContentTypeDemo_Guide() {
  return <DemoPage typeKey="guide" />;
}
export function Page_ContentTypeDemo_Clinical() {
  return <DemoPage typeKey="clinical" />;
}
export function Page_ContentTypeDemo_Regimen() {
  return <DemoPage typeKey="regimen" />;
}
export function Page_ContentTypeDemo_Edu() {
  return <DemoPage typeKey="edu" />;
}

Page_ContentTypesOverview.hideHeader = true;
Page_ContentTypeDeconstruct_Launch.hideHeader = true;
Page_ContentTypeDeconstruct_Guide.hideHeader = true;
Page_ContentTypeDeconstruct_Clinical.hideHeader = true;
Page_ContentTypeDeconstruct_Regimen.hideHeader = true;
Page_ContentTypeDeconstruct_Edu.hideHeader = true;
Page_ContentTypeDemo_Launch.hideHeader = true;
Page_ContentTypeDemo_Guide.hideHeader = true;
Page_ContentTypeDemo_Clinical.hideHeader = true;
Page_ContentTypeDemo_Regimen.hideHeader = true;
Page_ContentTypeDemo_Edu.hideHeader = true;
