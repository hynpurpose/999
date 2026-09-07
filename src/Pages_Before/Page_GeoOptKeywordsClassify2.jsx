import React from 'react';

export default function Page_GeoOptKeywordsClassify2() {

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area: Image Placeholder ── */}
            <div className="flex-1 w-full px-4 lg:px-8 pb-8 mt-6 min-h-0 relative z-10 flex flex-col items-center justify-start overflow-hidden">
                <div
                    className="w-full h-full max-w-[1700px] overflow-hidden bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col relative group transition-all duration-300 hover:border-white/20"
                >
                    {/* Mac Browser Header */}
                    <div className="w-full h-[30px] sm:h-[36px] bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center px-4 shrink-0 relative z-20">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-1/3 h-4 bg-white/5 rounded-md border border-white/5" />
                    </div>

                    <div className="w-full flex-1 relative flex flex-col items-center justify-center overflow-hidden bg-white/[0.01]">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50 z-0 pointer-events-none transition-opacity group-hover:opacity-100" />
                        <img
                            src="/charts/geo-opt-keywords-exhaust-clean-2.png"          alt="词条穷举及清洗 2"
                            className="w-full h-full object-fill z-10 relative block mix-blend-screen"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling.style.display = 'flex';
                            }}
                        />
                        <div className="hidden flex-col items-center justify-center w-full h-full z-10 relative pointer-events-none py-12 text-zinc-500">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                            </div>
                            <span className="text-base sm:text-lg font-medium tracking-widest uppercase">词条穷举及清洗 截图二</span>
                            <span className="text-xs sm:text-sm mt-3 opacity-80 pl-2 pr-2 text-center">此处将展示完整截图的内容，请最大化呈现以利用空间</span>
                        </div>
                    </div>
                </div>
            </div>

            

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}} />
        </div>
    );
}
