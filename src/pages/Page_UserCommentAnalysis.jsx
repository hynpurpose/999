import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_UserCommentAnalysis() {
  return (
    <SlideLayout title="">
      <div className="w-full h-full flex items-center justify-between pl-12 pr-0 select-none relative z-10">
        
        {/* Left Column: Big Number, Title & Narrative (占宽 48%) */}
        <div className="w-[800px] flex flex-col justify-center gap-6 animate-fadeIn pl-4 relative pb-24 -translate-y-[24px]">
          {/* Large Montserrat Number */}
          <span className="font-['Montserrat'] text-[120px] text-[#004CE5] font-black leading-none mt-2">
            03
          </span>

          {/* Large Title (H1 moved to H2 position) - Size 80px */}
          <h2 className="text-[80px] font-black text-white font-['MiSans'] tracking-wide leading-[95px] -mt-3">
            用户评论分析系统
          </h2>

          {/* Narration text */}
          <p className="text-white text-[28px] font-normal leading-[48px] font-['MiSans'] text-justify mt-4 pr-20">
            通过自研<span className="font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">用户真评引擎</span>，跨平台采集并解析真实用户评论，去除噪声与异常数据，
            将分散、碎片化的用户反馈转化为<span className="font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">结构化洞察</span>，
            准确还原用户真实认知与关注重点，为品牌判断内容方向与产品问题提供<span className="font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">可靠依据</span>。
          </p>

          {/* Decorative accent icon slot — place asset at public/icons/user-comment-analysis-accent.png */}
          <div
            className="absolute w-[64px] h-[64px] pointer-events-none"
            style={{ right: 76, bottom: 0 }}
          >
            <img
              src="/icons/user-comment-analysis-accent.png"
              alt=""
              className="w-full h-full object-contain mix-blend-hard-light"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Right Column: Giant Illustration/Graphic (view-sentiment.png) - Touches right margin */}
        <div className="flex-grow flex items-start justify-end h-full relative pr-0 pt-4">
          {/* Background spotlight behind the graphic */}
          <div className="absolute w-[760px] h-[760px] rounded-full bg-blue-600/5 blur-[160px] pointer-events-none z-0 right-10 top-20" />
          
          <img
            src="/capabilities/view-sentiment.png"
            alt="GEO User Comment Analysis Graphic"
            className="w-[1120px] h-[920px] object-contain z-10 animate-fadeIn -translate-y-[112px]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable standard header
Page_UserCommentAnalysis.hideHeader = true;
