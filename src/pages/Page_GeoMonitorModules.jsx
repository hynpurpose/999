import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_GeoMonitorModules() {
  return (
    <SlideLayout
      title="数据系统核心模块"
      subtitle="GEO ONE SYSTEM"
    >
      {/* Background glowing effects (ambient light) */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container: 2-Column Equal Layout (Left: Total Overview, Right: 2x2 Grid with 8px gaps) */}
      <div className="w-full h-full pb-6 box-border grid grid-cols-2 gap-2 relative z-10 select-none items-stretch min-h-0">
        
        {/* Left Column: 总览 (Maximized, White Background Card) */}
        <div className="w-full h-full flex flex-col justify-start items-stretch bg-white border border-[#004CE5]/30 rounded-2xl overflow-hidden shadow-lg">
          {/* Top: Title Block (Above the screenshot) */}
          <div className="bg-[#eef1f6] px-8 h-[85px] border-b border-[#004CE5]/30 flex items-center gap-3 shrink-0">
            <div className="w-4 h-4 bg-[#7F22FE]" />
            <div className="text-[34px] font-black text-black font-['MiSans'] tracking-wide">
              总览
            </div>
          </div>

          {/* Bottom: Image Area */}
          <div className="flex-1 w-full overflow-hidden flex items-center justify-center p-8 bg-white relative">
            <img
              src="/capabilities/monitor-module-overview.png"
              alt="总览"
              className="max-w-full max-h-full object-contain rounded-lg border border-zinc-200/50 shadow-md"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            {/* Fallback mesh when image is missing */}
            <div className="hidden absolute inset-0 bg-[#eef1f6] flex-col items-center justify-center p-4 text-center z-10">
              <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 mb-2">
                📊
              </div>
              <span className="text-[12px] text-zinc-500 font-mono break-all px-4 leading-normal">
                待替换: /capabilities/monitor-module-overview.png
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Grid Cells (Pure White Background Cards, 8px gaps) */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full min-h-0">
          
          {/* Cell 1: 词条 */}
          <div className="bg-white border border-[#004CE5]/30 rounded-2xl flex flex-col justify-start items-stretch overflow-hidden relative shadow-md">
            {/* Top: Title Block */}
            <div className="bg-[#eef1f6] px-6 h-[65px] border-b border-[#004CE5]/30 flex items-center gap-2 shrink-0">
              <div className="w-3 h-3 bg-[#1ED9A1]" />
              <div className="text-[28px] font-black text-black font-['MiSans'] tracking-wide">
                词条
              </div>
            </div>
            {/* Bottom: Screenshot Image */}
            <div className="flex-1 w-full flex items-center justify-center bg-white p-5 relative overflow-hidden">
              <img
                src="/capabilities/monitor-module-words.png"
                alt="词条"
                className="max-w-full max-h-full object-contain rounded border border-zinc-200/50 shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-[#eef1f6] flex-col items-center justify-center p-4 text-center z-10">
                <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 mb-1">
                  📊
                </div>
                <span className="text-[10px] text-zinc-500 font-mono break-all px-2">
                  待替换: /capabilities/monitor-module-words.png
                </span>
              </div>
            </div>
          </div>

          {/* Cell 2: 竞品 */}
          <div className="bg-white border border-[#004CE5]/30 rounded-2xl flex flex-col justify-start items-stretch overflow-hidden relative shadow-md">
            {/* Top: Title Block */}
            <div className="bg-[#eef1f6] px-6 h-[65px] border-b border-[#004CE5]/30 flex items-center gap-2 shrink-0">
              <div className="w-3 h-3 bg-[#EC0040]" />
              <div className="text-[28px] font-black text-black font-['MiSans'] tracking-wide">
                竞品
              </div>
            </div>
            {/* Bottom: Screenshot Image */}
            <div className="flex-1 w-full flex items-center justify-center bg-white p-5 relative overflow-hidden">
              <img
                src="/capabilities/monitor-module-competitors.png"
                alt="竞品"
                className="max-w-full max-h-full object-contain rounded border border-zinc-200/50 shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-[#eef1f6] flex-col items-center justify-center p-4 text-center z-10">
                <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 mb-1">
                  📊
                </div>
                <span className="text-[10px] text-zinc-500 font-mono break-all px-2">
                  待替换: /capabilities/monitor-module-competitors.png
                </span>
              </div>
            </div>
          </div>

          {/* Cell 3: 引用源 */}
          <div className="bg-white border border-[#004CE5]/30 rounded-2xl flex flex-col justify-start items-stretch overflow-hidden relative shadow-md">
            {/* Top: Title Block */}
            <div className="bg-[#eef1f6] px-6 h-[65px] border-b border-[#004CE5]/30 flex items-center gap-2 shrink-0">
              <div className="w-3 h-3 bg-[#0084D1]" />
              <div className="text-[28px] font-black text-black font-['MiSans'] tracking-wide">
                引用源
              </div>
            </div>
            {/* Bottom: Screenshot Image */}
            <div className="flex-1 w-full flex items-center justify-center bg-white p-5 relative overflow-hidden">
              <img
                src="/capabilities/monitor-module-sources.png"
                alt="引用源"
                className="max-w-full max-h-full object-contain rounded border border-zinc-200/50 shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-[#eef1f6] flex-col items-center justify-center p-4 text-center z-10">
                <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 mb-1">
                  📊
                </div>
                <span className="text-[10px] text-zinc-500 font-mono break-all px-2">
                  待替换: /capabilities/monitor-module-sources.png
                </span>
              </div>
            </div>
          </div>

          {/* Cell 4: 正负面 */}
          <div className="bg-white border border-[#004CE5]/30 rounded-2xl flex flex-col justify-start items-stretch overflow-hidden relative shadow-md">
            {/* Top: Title Block */}
            <div className="bg-[#eef1f6] px-6 h-[65px] border-b border-[#004CE5]/30 flex items-center gap-2 shrink-0">
              <div className="w-3 h-3 bg-[#E17100]" />
              <div className="text-[28px] font-black text-black font-['MiSans'] tracking-wide">
                正负面
              </div>
            </div>
            {/* Bottom: Screenshot Image */}
            <div className="flex-1 w-full flex items-center justify-center bg-white p-5 relative overflow-hidden">
              <img
                src="/capabilities/monitor-module-sentiment.png"
                alt="正负面"
                className="max-w-full max-h-full object-contain rounded border border-zinc-200/50 shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 bg-[#eef1f6] flex-col items-center justify-center p-4 text-center z-10">
                <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 mb-1">
                  📊
                </div>
                <span className="text-[10px] text-zinc-500 font-mono break-all px-2">
                  待替换: /capabilities/monitor-module-sentiment.png
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header because this layout occupies the full screen directly
Page_GeoMonitorModules.hideHeader = true;
