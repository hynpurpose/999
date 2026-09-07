import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoMonitor() {
  return (
    <SlideLayout title="GEO ONE 数据监测系统">
      <div className="w-full h-full flex items-center justify-between px-12 select-none relative z-10">

        {/* Left Column: Highlight NO.1 */}
        <div className="w-[600px] flex items-center justify-end gap-8 pr-4 animate-fadeIn">
          <div className="flex flex-col justify-center items-end text-right">
            {/* Giant highlighted NO.1 (White) */}
            <span
              className="text-[240px] font-black text-white tracking-tighter leading-none"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              NO.1
            </span>

            {/* Text description */}
            <h2 className="text-[54px] font-bold text-white font-['MiSans'] mt-2 tracking-wide">
              GEO ONE
            </h2>
            <p className="text-white text-[36px] font-normal font-['MiSans'] leading-normal mt-2">
              在百度自然排名持续第一
            </p>
          </div>

          {/* Vertical Divider Line (Solid Blue) */}
          <div className="w-[1.5px] self-stretch bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.3)]" />
        </div>

        {/* Center: Smartphone Mockup */}
        <div className="flex-1 flex items-center justify-center h-full">
          <div className="w-[398px] h-full rounded-[48px] border-[12px] border-zinc-800 bg-zinc-950 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden flex items-center justify-center">
            {/* Notch / Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-900 rounded-full z-20" />

            {/* Screen Content Image */}
            <img
              src="/images/geo_one_ranking.png"
              alt="GEO ONE ranking screenshot"
              className="w-full h-full object-cover z-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Screen Gloss Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-15 pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Description */}
        <div className="w-[550px] flex items-center justify-start gap-8 pl-8 animate-fadeIn">
          {/* Vertical Divider Line (Solid Blue) */}
          <div className="w-[1.5px] self-stretch bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.3)]" />

          <p className="text-white text-[36px] font-normal font-['MiSans'] leading-[54px] tracking-wide text-justify">
            我们今年才把 <span className="font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">GEO ONE</span> 作为独立产品正式发布出来。
            现在不管是品牌方，还是其他 GEO 服务商，都在<span className="font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8">付费使用</span>我们的产品。
            同时我们也会收到很多服务商的想换皮肤、换 logo 的需求。
          </p>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_GeoMonitor.hideHeader = true;
