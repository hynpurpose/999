import React from 'react';
import SlideLayout from '../components/SlideLayout';

// 图表整组等比缩放，标注坐标沿用原图基准，无需逐个换算
const CHART_SCALE = 0.89;
const CHART_TOP = 74;

const CHART_POINTS = [
  { x: 168, y: 660, v: '22%' },
  { x: 244, y: 588, v: '63%' },
  { x: 313, y: 585, v: '66%' },
  { x: 383, y: 605, v: '54%' },
  { x: 453, y: 609, v: '51%' },
  { x: 522, y: 632, v: '39%' },
];

export default function Page_UserCommentProblem() {
  return (
    <SlideLayout title="用户评论分析系统解决什么问题">
      <div className="w-full h-full relative select-none animate-fadeIn">
        <h2
          className="absolute top-0 left-0 text-white font-normal font-['MiSans']"
          style={{ fontSize: '40px', lineHeight: '52px', maxWidth: '1840px' }}
        >
          品牌卖点和用户真实认知错位，投放量再大，GEO数据也做不上去
        </h2>

        {/* 左：提及率趋势图（浏览器窗口 + 框选 + 数据点标注） */}
        <div
          className="absolute origin-top-left"
          style={{
            left: '0px',
            top: `${CHART_TOP}px`,
            width: '1210px',
            height: '721px',
            transform: `scale(${CHART_SCALE})`,
          }}
        >
          <div className="w-full h-full border border-zinc-700 bg-white flex flex-col overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            <div className="w-full h-10 bg-zinc-100 border-b border-zinc-200 flex items-center px-4 shrink-0 relative">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-6 bg-white rounded border border-zinc-200 flex items-center justify-center">
                <span className="text-[11px] text-zinc-400 font-mono select-none">geoindexfuture.com</span>
              </div>
            </div>
            <div className="flex-grow w-full bg-white flex items-center justify-center overflow-hidden relative">
              <img
                src="/images/stagnant_marketing_chart.png"
                alt="提及率瓶颈趋势"
                className="w-full h-full object-contain"
              />
              <div
                className="absolute border-[3px] border-amber-500 rounded-lg z-30 pointer-events-none shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                style={{ left: '56px', top: '222px', width: '552px', height: '445px' }}
              />
            </div>
          </div>

          {CHART_POINTS.map((p, i) => (
            <div
              key={i}
              className="absolute z-40 pointer-events-none"
              style={{ left: `${p.x}px`, top: `${p.y - CHART_TOP}px` }}
            >
              <div
                className="absolute w-[11px] h-[11px] rounded-full bg-[#4285F4] border-2 border-white shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
                style={{ left: '-5.5px', top: '-5.5px' }}
              />
              <div className="absolute -translate-x-1/2 whitespace-nowrap" style={{ top: '-36px' }}>
                <span className="text-[14px] font-bold text-[#1a73e8] font-['Montserrat']">{p.v}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 图表脚注：解释框选区间 */}
        <div
          className="absolute flex items-start gap-4"
          style={{ left: '0px', top: '736px', width: '1078px' }}
        >
          <span className="w-[40px] h-[4px] rounded-full bg-amber-500 shrink-0" style={{ marginTop: '15px' }} />
          <p className="text-white font-bold font-['MiSans']" style={{ fontSize: '24px', lineHeight: '34px' }}>
            框选区间：内容继续加、投放继续加，提及率冲到 66% 后反而一路回落到 39%。
          </p>
        </div>

        <div className="absolute border-r border-zinc-800/80" style={{ left: '1112px', top: '78px', bottom: '6px' }} />

        {/* 右：核心认知 + 白酒案例 */}
        <div
          className="absolute flex flex-col gap-8"
          style={{ left: '1142px', width: '698px', top: `${CHART_TOP}px`, bottom: '6px' }}
        >
          {/* 核心认知：AI 更接近消费者视角 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[26px] rounded-sm bg-[#004CE5]" />
              <span
                className="text-white font-bold font-['MiSans']"
                style={{ fontSize: '22px', letterSpacing: '0.08em' }}
              >
                为什么会错位
              </span>
            </div>

            <p
              className="text-white font-black font-['MiSans']"
              style={{ fontSize: '38px', lineHeight: '50px' }}
            >
              AI 相对中立，
              <br />
              更接近消费者视角
            </p>

            <p className="text-white font-bold font-['MiSans']" style={{ fontSize: '24px', lineHeight: '38px' }}>
              品牌自己想讲的卖点，不一定是用户真正认可的卖点。方向讲错了，内容发得越多，越会强化 AI 对品牌的错误认知。
            </p>

            <div className="flex items-center gap-4">
              <div className="flex-1 px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-700">
                <span className="block text-white font-bold font-['MiSans'] text-[18px] mb-1.5">品牌想讲</span>
                <span className="block text-white font-black font-['MiSans'] text-[28px] leading-none">自己的卖点</span>
              </div>
              <span className="text-white font-black text-[34px] leading-none">≠</span>
              <div className="flex-1 px-5 py-3 rounded-2xl bg-[#004CE5] border border-blue-400/40 shadow-[0_16px_40px_-16px_rgba(0,76,229,0.6)]">
                <span className="block text-white font-bold font-['MiSans'] text-[18px] mb-1.5">用户认可</span>
                <span className="block text-white font-black font-['MiSans'] text-[28px] leading-none">真实卖点</span>
              </div>
            </div>
          </div>

          {/* 白酒案例 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-4 border-b border-zinc-800 pb-2.5">
              <h3
                className="text-white font-extrabold tracking-wide"
                style={{ fontSize: '36px', lineHeight: '46px', fontFamily: "'AlimamaShuHeiTi', sans-serif" }}
              >
                白酒案例
              </h3>
              <span className="text-white font-bold font-['MiSans']" style={{ fontSize: '20px' }}>
                换掉讲错的卖点，数据才重新增长
              </span>
            </div>

            <p className="text-white font-bold font-['MiSans']" style={{ fontSize: '24px', lineHeight: '38px' }}>
              品牌一直强调「口感好」，年轻消费者真实反馈却大量是「难喝」；改成消费者真正认可的「聚会小酌」后，数据才重新增长。
            </p>

            <div className="border-l-4 border-[#004CE5] pl-5">
              <p className="text-white font-black font-['MiSans']" style={{ fontSize: '26px', lineHeight: '40px' }}>
                不是内容发得不够多，而是讲错了消费者真正认可的卖点。
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentProblem.hideHeader = true;
