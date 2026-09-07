import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_PotentialVerticalCommunity() {
  return (
    <SlideLayout title="30%投放有潜力的垂直社区">
      <div className="w-full h-full flex flex-col gap-6 animate-fadeIn">
        {/* H2 Subtitle */}
        <h2
          className="text-white font-normal font-['MiSans']"
          style={{ fontSize: '48px', lineHeight: '58px' }}
        >
          我们做白酒时发现的一个案例
        </h2>

        {/* ── 左右分栏区 ── */}
        <div className="flex-grow flex items-stretch min-h-0 gap-10 mt-2">
          {/* 左栏：标题 + 图片展示区 (1060px) */}
          <div className="w-[1060px] h-[630px] flex flex-col gap-4 shrink-0">
            {/* 图片上方的 Title */}
            <div className="shrink-0 text-center">
              <h3 className="text-[26px] font-black text-white font-['MiSans'] tracking-wide">
                酒排名社区（由个人运营）
              </h3>
            </div>

            {/* 图片本身 */}
            <div className="flex-1 rounded-[32px] overflow-hidden relative group bg-zinc-950/20 border border-dashed border-zinc-800/80 flex items-center justify-center">
              <img
                src="/images/potential_vertical_community.png"
                alt="有潜力的垂直社区 - 酒排名网"
                className="w-full h-full object-cover opacity-95 transition-opacity duration-500 group-hover:opacity-100"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* 当图片未找到时显示友好占位 */}
              <div className="hidden flex-col items-center justify-center w-full h-full text-zinc-400 p-8 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 mb-4">
                  📷
                </div>
                <span className="text-[20px] font-bold text-zinc-400 font-sans">图片占位符</span>
                <span className="text-[15px] text-zinc-600 font-mono mt-1">请将图片放置在: /public/images/potential_vertical_community.png</span>
              </div>
            </div>
          </div>

          {/* 右栏：从上到下三个流程或步骤 (720px) */}
          <div className="flex-grow flex flex-col justify-between h-[630px] relative pl-4 select-none">

            {/* 背景贯穿线 */}
            <div className="absolute left-[54px] top-[40px] bottom-[40px] w-0.5 border-l border-dashed border-zinc-800 z-0" />

            {/* 步骤 1 */}
            <div className="flex items-start gap-6 relative z-10 group/step h-[180px]">
              <div className="w-[68px] h-[68px] rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-['Montserrat'] text-[24px] font-black text-zinc-500 shrink-0 shadow-md group-hover/step:border-blue-500/50 group-hover/step:text-blue-400 transition-all duration-300">
                01
              </div>
              <div className="flex-grow flex flex-col justify-center pt-2">
                <h3 className="text-[28px] font-bold text-white font-['MiSans'] leading-snug">
                  引用率 100 名开外
                </h3>
                <p className="text-[22px] font-black text-zinc-400 mt-2 font-['MiSans']">
                  —— 无人关注
                </p>
              </div>
            </div>

            {/* 步骤 2 */}
            <div className="flex items-start gap-6 relative z-10 group/step h-[180px]">
              <div className="w-[68px] h-[68px] rounded-2xl bg-[#0052FF]/10 border border-[#0052FF]/30 flex items-center justify-center font-['Montserrat'] text-[24px] font-black text-[#0052FF] shrink-0 shadow-lg shadow-[#0052FF]/5 group-hover/step:border-[#0052FF]/60 transition-all duration-300">
                02
              </div>
              <div className="flex-grow flex flex-col justify-center pt-2">
                <h3 className="text-[28px] font-bold text-white font-['MiSans'] leading-snug">
                  准确度极高
                </h3>
                <p className="text-[22px] font-black text-[#0052FF] mt-2 font-['MiSans']">
                  —— 投一篇用一篇
                </p>
              </div>
            </div>

            {/* 步骤 3 */}
            <div className="flex items-start gap-6 relative z-10 group/step h-[180px]">
              <div className="w-[68px] h-[68px] rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-center font-['Montserrat'] text-[24px] font-black text-emerald-400 shrink-0 shadow-lg shadow-emerald-500/5 group-hover/step:border-emerald-500/60 transition-all duration-300">
                03
              </div>
              <div className="flex-grow flex flex-col justify-center pt-2">
                <h3 className="text-[28px] font-bold text-white font-['MiSans'] leading-snug">
                  独家买断合作
                </h3>
                <p className="text-[22px] font-black text-emerald-400 mt-2 font-['MiSans']">
                  —— 其他服务商很难超过
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_PotentialVerticalCommunity.hideHeader = true;
