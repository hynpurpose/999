import React from 'react';
import { Database } from 'lucide-react';

/** 四类拆解法则（按干眼 / 兹润高引用内容结构总结） */
const TYPE_RULES = {
  guide: [
    {
      no: '01',
      title: '会议/指南锚点前置',
      body: '标题写清干眼指南 / 专家共识 + 更新主题，方便 AI 归入“权威解读”。',
    },
    {
      no: '02',
      title: '治疗格局用对照呈现',
      body: '人工泪液 / 抗炎处方药 / 其他路径并列，各给定位与 1–2 个关键点，避免只推单一品类。',
    },
    {
      no: '03',
      title: '关键口径可摘抄',
      steps: [
        { k: '分层', v: '轻中重度干眼对应治疗阶梯' },
        { k: '抗炎', v: '环孢素等对因抗炎在指南中的位置' },
        { k: '定位', v: '0.05% 环孢素 = 干眼抗炎代表路径之一' },
      ],
    },
    {
      no: '04',
      title: '收口落个体化选择',
      body: '明确“按严重度与病因适配”，给谨慎结论句，降低绝对化推荐风险。',
    },
  ],
  clinical: [
    {
      no: '01',
      title: '研究名即标题关键词',
      body: 'III 期 / 有效率 / 起效时间——一眼可检索、可引用。',
    },
    {
      no: '02',
      title: '先给研究一句话定位',
      body: '写清人群、对照、干预（兹润：环孢素 0.05% 纳米微乳点眼）。',
    },
    {
      no: '03',
      title: '读数三步法',
      steps: [
        { k: '起效', v: '7 天起效等节奏数字优先可摘抄' },
        { k: '疗效', v: '3 月总有效率与对照并列给出' },
        { k: '安全', v: '不良反应率 / 依从性与疗效同屏出现' },
      ],
    },
    {
      no: '04',
      title: '专家对话抬权威',
      body: '用临床专家解读收口，把数字落到选药与长期用药语境。',
    },
  ],
  regimen: [
    {
      no: '01',
      title: '方案别称 + 机制钩子',
      body: '“抗炎对因 + 纳米微乳递送”，先建立记忆点。',
    },
    {
      no: '02',
      title: '结构表说清角色',
      body: '人工泪液（补水对症）与环孢素（抗炎对因）分栏对照。',
    },
    {
      no: '03',
      title: '五节叙事链',
      steps: [
        { k: '困局', v: '干眼高发 + 只补水不够' },
        { k: '机制', v: '炎症通路与微乳剂型舒适度' },
        { k: '证据', v: 'III 期关键数字' },
        { k: '安全', v: '可长期坚持的耐受叙事' },
        { k: '收口', v: '适用场景与购药 / 处方路径' },
      ],
    },
    {
      no: '04',
      title: '对比时留边界',
      body: '与人工泪液对照时突出对因抗炎，同时承认轻度干眼仍可先对症。',
    },
  ],
  edu: [
    {
      no: '01',
      title: '痛点提问式标题',
      body: '“为什么滴了很多眼药水还是干”直接截流患者搜索意图。',
    },
    {
      no: '02',
      title: '认知→诊断→治疗闭环',
      body: '干眼成因与检查先讲清，再落到抗炎处方药与日常护理。',
    },
    {
      no: '03',
      title: '对因治疗用白话拆解',
      steps: [
        { k: '为何抗炎', v: '炎症是干眼持续加重的关键机制' },
        { k: '有哪些', v: '人工泪液 / 环孢素 / 其他路径' },
        { k: '举例', v: '兹润（环孢素 0.05%）作处方抗炎选项之一' },
      ],
    },
    {
      no: '04',
      title: '给患者可执行建议',
      body: '问医生是否需要抗炎、看说明书与医保口径、规律点眼——便于 AI 整段摘抄。',
    },
  ],
};

const TYPE_META = {
  guide: {
    label: '指南共识类',
    refTag: '良医汇 · 指南共识类',
    image: '/charts/geo-article-analysis-guide.png',
    demoImage: '/charts/geo-article-demo-guide.png',
  },
  clinical: {
    label: '临床研究类',
    refTag: '专业媒体 · 临床研究类',
    image: '/charts/geo-article-analysis-clinical.png',
    demoImage: '/charts/geo-article-demo-clinical.png',
  },
  regimen: {
    label: '方案解读类',
    refTag: 'MedSci · 方案解读类',
    image: '/charts/geo-article-analysis-regimen.png',
    demoImage: '/charts/geo-article-demo-regimen.png',
  },
  edu: {
    label: '知识科普类',
    refTag: '医脉通 · 知识科普类',
    image: '/charts/geo-article-analysis-edu.png',
    demoImage: '/charts/geo-article-demo-edu.png',
  },
};

function DeconstructPage({ typeKey }) {
  const meta = TYPE_META[typeKey];
  const rules = TYPE_RULES[typeKey];
  return (
    <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-20 w-full px-8 lg:px-16 mt-4 lg:mt-5 flex-shrink-0">
        <div className="bg-[#0a0a0a] border border-[#004CE5]/20 rounded-2xl py-4 px-5 lg:px-6 flex flex-col relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004CE5] opacity-80" />
          <div className="flex items-start gap-4">
            <div className="text-4xl lg:text-5xl font-black text-[#004CE5]/20 font-mono leading-none tracking-tighter mt-1">02</div>
            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-black text-white tracking-wide mb-2">文章解构：爆款文章逆向拆解</h3>
              <p className="text-zinc-300 text-[1.05rem] leading-relaxed font-medium">
                对高引用「{meta.label}」文章做结构拆解，提取可被大模型稳定采信与摘抄的写法。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative z-10 w-full flex items-stretch px-8 lg:px-16 pt-4 pb-12 min-h-0 gap-6">
        <div className="w-[35%] flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-lg font-bold text-blue-100 tracking-wide">高引用参考文章</h3>
            <span className="text-[11px] text-zinc-500">{meta.refTag}</span>
          </div>
          <div className="flex-1 w-full rounded-xl overflow-hidden relative border border-white/5 bg-white">
            <div className="w-full h-7 bg-zinc-100 border-b border-zinc-200 flex items-center px-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]/80" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-2 h-2 rounded-full bg-[#27c93f]/80" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 top-7 p-1">
              <img src={meta.image} alt={`${meta.label}参考文章`} className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>

        <div className="w-[3%] flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>

        <div className="flex-1 flex flex-col h-full min-w-0">
          <div className="flex items-center gap-3 mb-5 shrink-0 pt-2">
            <div className="h-8 w-1 bg-white/50 rounded-full" />
            <h2 className="text-2xl xl:text-3xl font-bold text-[#004CE5] tracking-wide">
              【{meta.label}】高引用内容创作法则拆解
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-center relative min-h-0">
            <div className="absolute left-[3px] top-4 bottom-8 w-0.5 bg-white/10" />
            <div className="space-y-6 relative z-10 pl-8">
              {rules.map((rule) => (
                <div key={rule.no} className="relative flex items-start gap-4">
                  <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]" />
                  <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">{rule.no}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-1.5 tracking-wide">{rule.title}</h3>
                    {rule.steps ? (
                      <div className="text-zinc-300 text-[1.05rem] leading-relaxed flex flex-col gap-1">
                        {rule.steps.map((s) => (
                          <div key={s.k} className="flex items-start gap-2">
                            <span className="text-white font-medium shrink-0 w-[2.75rem]">{s.k}</span>
                            <span>{s.v}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-zinc-300 text-[1.05rem] leading-relaxed">{rule.body}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[3%] flex items-center justify-center shrink-0">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#004CE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>

        <div className="w-[18%] lg:w-[20%] flex justify-end items-center shrink-0 pr-2 xl:pr-6">
          <div className="w-[230px] h-[230px] xl:w-[270px] xl:h-[270px] bg-white/[0.02] rounded-full border border-white/10 flex items-center justify-center relative">
            <div className="w-[190px] h-[190px] xl:w-[220px] xl:h-[220px] bg-white/[0.03] rounded-full flex flex-col items-center justify-center border border-white/10 text-center p-4">
              <Database className="text-[#004CE5] mb-2 stroke-[1.5px]" size={42} />
              <span className="text-white font-bold text-xl xl:text-3xl tracking-widest mb-1.5">内容生成</span>
              <span className="text-white/60 font-medium text-[0.95rem] xl:text-lg">Agent 专属数据库</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoPage({ typeKey }) {
  const meta = TYPE_META[typeKey];
  return (
    <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-8 flex-shrink-0">
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
          【{meta.label}】高质量文章示意
        </h1>
      </div>

      <div className="flex-1 relative z-10 w-full flex flex-col px-8 lg:px-16 pt-4 pb-8 min-h-0">
        <div className="w-full h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
          <div className="w-full h-[30px] sm:h-[36px] bg-black/40 border-b border-white/10 flex items-center px-4 shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
            </div>
          </div>
          <div className="flex-1 min-h-0 bg-white relative">
            <img
              src={meta.demoImage}
              alt={`${meta.label}文章示意`}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden flex-col items-center justify-center w-full h-full absolute inset-0 text-zinc-500">
              <span className="text-base font-medium tracking-wide">请放入截图</span>
              <span className="text-sm mt-2 text-zinc-600">public{meta.demoImage}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Page_ContentStrategyDeconstructGuide() {
  return <DeconstructPage typeKey="guide" />;
}
export function Page_ContentStrategyDemoGuide() {
  return <DemoPage typeKey="guide" />;
}
export function Page_ContentStrategyDeconstructClinical() {
  return <DeconstructPage typeKey="clinical" />;
}
export function Page_ContentStrategyDemoClinical() {
  return <DemoPage typeKey="clinical" />;
}
export function Page_ContentStrategyDeconstructRegimen() {
  return <DeconstructPage typeKey="regimen" />;
}
export function Page_ContentStrategyDemoRegimen() {
  return <DemoPage typeKey="regimen" />;
}
export function Page_ContentStrategyDeconstructEdu() {
  return <DeconstructPage typeKey="edu" />;
}
export function Page_ContentStrategyDemoEdu() {
  return <DemoPage typeKey="edu" />;
}
