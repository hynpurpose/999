import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoMonitorIntro() {
  return (
    <SlideLayout title="">
      <div className="w-full h-full flex items-center justify-between pl-12 pr-0 select-none relative z-10">

        {/* Left Column: Big Number, Title & Narrative */}
        <div className="w-[800px] flex flex-col justify-center gap-6 animate-fadeIn pl-4 relative pb-24 -translate-y-[24px]">
          {/* Large Montserrat Number */}
          <span className="font-['Montserrat'] text-[120px] text-[#004CE5] font-black leading-none mt-2">
            01
          </span>

          {/* Large Title */}
          <h2 className="text-[80px] font-black text-white font-['MiSans'] tracking-wide leading-[95px] -mt-3">
            <span className="block whitespace-nowrap">GEO ONE</span>
            <span className="block">数据监测系统</span>
          </h2>

          {/* Narration text */}
          <p className="text-white text-[28px] font-normal leading-[48px] font-['MiSans'] text-justify mt-4 pr-20">
            耗时一年研发，它就是我们开展 GEO 业务的眼睛，
            <span className="font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">提及率</span>、
            <span className="font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">竞品情况</span>、
            <span className="font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">引用来源</span>，品牌正负面查询都得靠它。
          </p>

          {/* Decorative accent icon slot — place asset at public/icons/geo-monitor-intro-accent.png */}
          <div
            className="absolute w-[64px] h-[64px] pointer-events-none"
            style={{ right: 76, bottom: 0 }}
          >
            <img
              src="/icons/geo-monitor-intro-accent.png"
              alt=""
              className="w-full h-full object-contain mix-blend-hard-light"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Right Column: Giant Circular Network Graphic (monitor-detail.png) */}
        <div className="flex-grow flex items-start justify-end h-full relative pr-0 pt-4">
          {/* Background spotlight behind the graphic */}
          <div className="absolute w-[760px] h-[760px] rounded-full bg-blue-600/5 blur-[160px] pointer-events-none z-0 right-10 top-20" />

          <img
            src="/capabilities/monitor-detail.png"
            alt="GEO Monitor System Graphic"
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
Page_GeoMonitorIntro.hideHeader = true;
