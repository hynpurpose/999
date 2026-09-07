import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * GEO 量化竞争模型 · 1.0 版本做到了什么
 * 只讲三件事：占住第一形成壁垒、同样位次更低成本、模型变化第一时间有对策。
 * 底部用同等预算下的位次差距做佐证。
 */

const WINS = [
  {
    title: '我们在第一，别人就上不来',
    punch: '第一名不是排名，是壁垒',
    desc: (
      <>
        一旦在 AI 答案里占住首位，就形成<span className="text-white font-bold">位置壁垒</span>
        。竞品想把你换下来，得花 5-10 倍的钱去砸内容和投放，多数品牌不会为此买单。
      </>
    ),
  },
  {
    title: '同样的位次，更低的成本',
    punch: '同样的钱，做出更高的位次',
    desc: (
      <>
        模型算清楚每一分预算的去向：<span className="text-white font-bold">哪些词值得投</span>、
        <span className="text-white font-bold">哪些内容能被引用</span>、
        <span className="text-white font-bold">哪些渠道是无效投入</span>，把钱花在真正拉动排名的地方。
      </>
    ),
  },
  {
    title: '模型一变，第一时间知道',
    punch: '变化当天就有应对方案',
    desc: (
      <>
        持续跟踪各大 AI 的<span className="text-white font-bold">引用逻辑变化</span>
        ，规则一变立刻感知，并同步给出应对方案，不用等排名掉下来才回头找原因。
      </>
    ),
  },
];

export default function Page_QuantitativeModel_Why() {
  return (
    <SlideLayout title="量化竞争模型 1.0 做到了什么">
      <div className="absolute w-[900px] h-[900px] rounded-full bg-[#004CE5]/[0.07] blur-[220px] right-[-160px] top-[-220px] pointer-events-none z-0" />

      <div className="absolute inset-0 flex flex-col select-none font-['MiSans'] z-10">
        {/* ── 开场一句：同等预算下的位次差距 ── */}
        <div className="shrink-0 flex items-center justify-between gap-10">
          <p className="text-[34px] text-white font-black leading-[46px]">
            同样的钱，别人做完只能把品牌推到第 3，我们能把品牌推到第 1。
          </p>
          <span className="shrink-0 rounded-full border border-[#004CE5]/50 bg-[#004CE5]/[0.12] px-7 py-2 text-[22px] font-black text-white tracking-[0.12em] whitespace-nowrap">
            Alpha 模型 1.0 · 已上线
          </span>
        </div>

        {/* ── 1.0 做到的三件事 ── */}
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-7 mt-7">
          {WINS.map((w, i) => (
            <div
              key={w.title}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] px-9 pt-7 pb-7 flex flex-col overflow-hidden"
            >
              <span className="absolute top-0 left-9 right-9 h-[3px] bg-gradient-to-r from-[#004CE5] to-transparent rounded-full" />

              <span className="shrink-0 font-['Montserrat'] text-[54px] font-black text-[#004CE5] leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <p className="shrink-0 mt-4 text-[32px] font-black text-white leading-[1.3]">
                {w.title}
              </p>

              <div className="shrink-0 mt-4 border-t border-white/10" />
              <div className="flex-1 min-h-0 flex items-center">
                <p className="text-[26px] text-white leading-[1.55]">{w.desc}</p>
              </div>

              <p className="shrink-0 mt-5 text-[28px] font-black text-[#004CE5] leading-[1.35]">
                {w.punch}
              </p>
            </div>
          ))}
        </div>

        {/* ── 佐证：同等预算下的位次差距 ── */}
        <div className="shrink-0 mt-7 rounded-2xl border border-[#004CE5]/40 bg-[#004CE5]/[0.07] px-9 py-7 flex items-center gap-10">
          <div className="shrink-0 pr-10 border-r border-white/15">
            <div className="text-[26px] font-black text-white whitespace-nowrap">同等预算下的位次差距</div>
            <div className="mt-1.5 text-[21px] font-bold text-white whitespace-nowrap">
              竞品想挤下来，要多花 5-10 倍
            </div>
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-3">
            <div className="h-[58px] rounded-xl bg-black/30 border border-white/10 flex items-center relative overflow-hidden">
              <div className="h-full w-[34%] bg-[#004CE5] rounded-xl" />
              <span className="absolute left-6 text-[21px] font-black text-white">我们的预算 1×</span>
              <span className="absolute right-6 text-[23px] font-black text-white">第一名（占首位）</span>
            </div>

            <div className="h-[58px] rounded-xl bg-black/30 border border-white/10 flex items-center relative overflow-hidden">
              <div className="h-full w-[86%] bg-white/15 rounded-xl" />
              <span className="absolute left-6 text-[21px] font-black text-white">对手的预算 5-10×</span>
              <span className="absolute right-6 text-[23px] font-black text-white">第三名</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_Why.hideHeader = true;
