import React from 'react';

export default function Page_CampaignDataAnalysis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Titles ── */}
            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-6 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">投放数据分析</h1>
            </div>

            {/* ── Main Content Area (Vertical Layout) ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col px-8 lg:px-16 pt-2 pb-4 min-h-0">
                {/* ── Single Large 3D Image Placeholder (16:9) ── */}
                <div className="w-full flex-1 min-h-0 flex items-start justify-center group" style={{ perspective: '2000px' }}>
                    <div className="w-[92%] aspect-video max-h-full rounded-2xl border border-white/10 bg-white/[0.02]/50 backdrop-blur-md overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:scale-[1.01] flex flex-col group-hover:border-blue-500/30">
                        {/* Mac Browser Header */}
                        <div className="w-full h-[30px] sm:h-[36px] bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center px-4 shrink-0 relative z-20">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-4 bg-white/5 rounded-md border border-white/5" />
                        </div>

                        {/* Image Content Area */}
                        <div className="flex-1 w-full relative flex flex-col items-center justify-center overflow-hidden bg-white/[0.01]">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50 z-0 pointer-events-none transition-opacity group-hover:opacity-100" />
                            <img
                                src="/charts/geo-campaign-data-analysis.png"
                                alt="投放数据分析图"
                                className="w-full h-full object-cover object-center z-10 relative"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden flex-col items-center justify-center w-full h-full z-10 relative pointer-events-none pb-8 text-zinc-500">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                </div>
                                <span className="text-base sm:text-lg font-medium tracking-widest text-zinc-400 uppercase">投放数据分析图 (16:9)</span>
                                <span className="text-xs sm:text-sm mt-3 text-zinc-600 opacity-80">请在 public/charts/ 中放入图片文件 geo-campaign-data-analysis.png</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
