import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * 量化模型可以做什么？
 * 左：股票交易（人 vs 模型） 对照 GEO 投放（人 vs 模型），逐维度对比
 * 右：模型实际做的三件事（标题 + 一句话描述）
 */

/** 两个分区（人工 / 量化模型），每区四行：维度 · 股票交易 · GEO 投放 */
const VS_BANDS = [
  {
    who: '人工',
    accent: false,
    rows: [
      ['盯盘', '盯几只熟悉的票，凭盘感', '只盯自己排名，偶尔查查'],
      ['决策', '凭经验和消息决定买卖', '凭感觉选平台、写内容'],
      ['目标', '预期收益全靠拍脑袋', 'KPI 靠经验拍脑袋'],
      ['应变', '追涨杀跌，反应慢半拍', '位次掉了才回头找原因'],
    ],
  },
  {
    who: '量化模型',
    accent: true,
    rows: [
      ['盯盘', '全市场几千只票统一监测', '实时监测竞品位次与投放'],
      ['决策', '用因子算出什么驱动股价', '算出什么内容拉动 AI 引用'],
      ['目标', '先回测出预期，再投真钱', '先算出合理 KPI，再定目标'],
      ['应变', '盘面一变，仓位立刻调', '竞品一动，策略立刻调'],
    ],
  },
];

const ABILITIES = [
  {
    tag: '量化目标',
    lead: '找到准确、可实现的 KPI',
    desc: '结合行业竞争、品牌现状和词库难度，\n量化评估提及率、Top1、Top3 的合理目标。',
  },
  {
    tag: '量化优化',
    lead: '找到 AI 真正喜欢的内容和渠道',
    desc: '持续测试文章类型、内容结构和投放平台，\n识别哪些内容更易被引用、哪些渠道更有效。',
  },
  {
    tag: '量化竞争',
    lead: '识别竞品变化并及时反制',
    desc: '持续监测竞品位次、内容和引用来源变化，\n识别对方在加强什么，快速调整内容和投放。',
  },
];

const LABEL_W = 'w-[120px]';
const DATA_GRID = 'grid grid-cols-[88px_1fr_1fr]';
const HEAD_H = 'h-[54px]';

export default function Page_QuantitativeModel_WhatCanDo() {
  return (
    <SlideLayout title="量化模型可以做什么？">
      {/* ── 背景柔光 ── */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-[#004CE5]/[0.07] blur-[220px] right-[-160px] top-[-220px] pointer-events-none z-0" />

      <div className="absolute inset-0 flex flex-col select-none font-['MiSans'] z-10">
        {/* ── Hero：模型的原型就是股票量化交易 ── */}
        <div className="shrink-0 flex items-center gap-10 rounded-3xl border border-[#004CE5]/40 bg-[#004CE5]/[0.07] px-10 py-6 shadow-[0_0_40px_rgba(0,76,229,0.14)]">
          <div className="shrink-0 pr-10 border-r border-white/15">
            <p className="text-[19px] font-black text-white tracking-[0.16em] mb-2 whitespace-nowrap">
              方法论原型 · 股票量化交易
            </p>
            <p className="text-[38px] font-black text-white leading-[1.24] whitespace-nowrap">
              用算法理解算法
            </p>
            <p className="text-[38px] font-black text-[#004CE5] leading-[1.24] whitespace-nowrap">
              用数据对抗算法
            </p>
          </div>
          <p className="text-[26px] text-white leading-[1.55]">
            股票量化交易不靠盘感和消息，用<span className="text-white font-bold">因子</span>和
            <span className="text-white font-bold">数据</span>决定每一分钱投在哪。
            <br />
            GEO 投放也一样，可以靠人做，也可以靠模型做——
            <span className="text-white font-black">模型和人的差距，在每一步上都一样</span>。
          </p>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-[1fr_1fr] gap-7 mt-7">
          {/* ── 左：行=人工/量化模型，列=股票交易/GEO 投放 ── */}
          <div className="min-w-0 rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col">
            <div
              className={`${HEAD_H} shrink-0 flex items-stretch bg-[#004CE5]/15 border-b border-[#004CE5]/30`}
            >
              <div className={`${LABEL_W} shrink-0 border-r border-white/[0.08]`} />
              <div className={`flex-1 min-w-0 ${DATA_GRID}`}>
                <span />
                <span className="text-[22px] font-black text-white px-6 flex items-center">股票交易</span>
                <span className="text-[22px] font-black text-[#004CE5] px-6 border-l border-white/[0.08] flex items-center">
                  GEO 投放
                </span>
              </div>
            </div>

            <div className="flex-1 min-h-0 flex flex-col divide-y divide-white/[0.1]">
              {VS_BANDS.map((b) => (
                <div
                  key={b.who}
                  className={`flex-1 min-h-0 flex items-stretch ${
                    b.accent ? 'bg-[#004CE5]/[0.07]' : ''
                  }`}
                >
                  <div
                    className={`${LABEL_W} shrink-0 flex items-center justify-center border-r border-white/[0.08] ${
                      b.accent ? 'bg-[#004CE5]/25' : 'bg-white/[0.04]'
                    }`}
                  >
                    <span
                      className={`text-[22px] font-black leading-none whitespace-nowrap ${
                        b.accent ? 'text-[#004CE5]' : 'text-white'
                      }`}
                    >
                      {b.who}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col divide-y divide-white/[0.05]">
                    {b.rows.map(([dim, stock, geo]) => (
                      <div key={dim} className={`${DATA_GRID} flex-1 min-h-0 items-stretch`}>
                        <span className="pl-6 text-[18px] font-black text-white leading-none flex items-center">
                          {dim}
                        </span>
                        <span
                          className={`min-w-0 px-6 text-[20px] text-white leading-[1.3] flex items-center ${
                            b.accent ? 'font-bold' : ''
                          }`}
                        >
                          {stock}
                        </span>
                        <span
                          className={`min-w-0 px-6 text-[20px] text-white leading-[1.3] border-l border-white/[0.08] flex items-center ${
                            b.accent ? 'font-bold' : ''
                          }`}
                        >
                          {geo}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 右：模型实际做的三件事 ── */}
          <div className="min-w-0 rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden flex flex-col">
            <div
              className={`${HEAD_H} shrink-0 flex items-center bg-[#004CE5]/15 border-b border-[#004CE5]/30 px-8`}
            >
              <span className="text-[22px] font-black text-white">模型实际做的三件事</span>
            </div>

            <div className="flex-1 min-h-0 flex flex-col divide-y divide-white/[0.07]">
              {ABILITIES.map((a, i) => (
                <div key={a.tag} className="flex-1 min-h-0 flex items-center gap-7 px-8">
                  <div className="shrink-0 w-[72px] h-[72px] rounded-2xl bg-[#004CE5]/15 border border-[#004CE5]/35 flex items-center justify-center">
                    <span className="font-['Montserrat'] text-[30px] font-black text-[#004CE5] leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[28px] font-black text-white leading-none whitespace-nowrap">{a.tag}</span>
                      <span className="text-[24px] font-bold text-white leading-none whitespace-nowrap">{a.lead}</span>
                    </div>
                    <p className="mt-3 text-[22px] text-white leading-[1.5] whitespace-pre-line">{a.desc}</p>
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

Page_QuantitativeModel_WhatCanDo.hideHeader = true;
