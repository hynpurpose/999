import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_CoreCapabilities() {
  const capabilities = [
    {
      category: "DATABASE & MONITORING",
      title: "GEO ONE\n数据监测系统",
      imgSrc: "/capabilities/monitor-detail.png"
    },
    {
      category: "AI AUTOMATION",
      title: "内容撰写Agent",
      imgSrc: "/capabilities/generator-2.png"
    },
    {
      category: "SENTIMENT ANALYTICS",
      title: "用户评论分析系统",
      imgSrc: "/capabilities/view-sentiment.png"
    },
    {
      category: "QUANTITATIVE ALGORITHM",
      title: "GEO量化竞争模型\n（Alpha模型）",
      imgSrc: "/capabilities/view-competitors.png"
    }
  ];

  return (
    <SlideLayout title="核心能力">
      {/* ── 主排版区：将卡片容器整体往上移动 (top 调为 65px, mt-6 变 mt-2) ── */}
      <div className="absolute w-[1840px] select-none animate-fadeIn flex flex-col justify-start z-10 pl-0 mt-2" style={{ top: '65px' }}>
        <div className="grid grid-cols-2 gap-10 justify-items-center w-full">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="w-[840px] h-[310px] bg-black border border-white/60 rounded-2xl pl-10 pr-2 py-2 flex justify-between gap-6 relative overflow-hidden group hover:border-white/90 transition-colors"
            >
              {/* Left Column: Huge Montserrat Number, Category & Title */}
              <div className="flex-1 flex flex-col justify-center relative z-10">
                {/* 极大号 Montserrat 序号，满足“更大一些”的要求 */}
                <span className="font-['Montserrat'] text-[72px] text-[#004CE5] font-black leading-none mb-3">
                  0{idx + 1}
                </span>
                
                <span className="text-[13px] text-zinc-500 font-mono tracking-widest font-semibold block mb-2">
                  {cap.category}
                </span>

                <h2
                  className="text-[40px] font-bold text-white font-['MiSans'] tracking-wide"
                  style={{ lineHeight: '50px' }}
                >
                  {cap.title.split('\n').map((line, i) => (
                    <span key={i} className="block whitespace-nowrap">{line}</span>
                  ))}
                </h2>
              </div>

              {/* Right Column: Image (收窄尺寸适配 840px 宽度) */}
              <div className="w-[400px] h-full shrink-0 overflow-hidden flex items-center justify-center rounded-xl">
                <img
                  src={cap.imgSrc}
                  alt={cap.title}
                  className="w-full h-full object-contain scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable slide header
Page_CoreCapabilities.hideHeader = true;
