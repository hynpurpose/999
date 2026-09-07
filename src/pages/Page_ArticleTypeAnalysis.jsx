import React from 'react';

export default function Page_ArticleTypeAnalysis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[10px] shrink-0 pointer-events-none"></div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center px-8 lg:px-16 pt-4 pb-4 z-10 min-h-0 gap-5">

                {/* ── 纯净信息卡片：展示分组、维度、逻辑 ── */}
                <div className="w-full bg-white/[0.02] border border-[#004CE5]/20 backdrop-blur-md rounded-2xl px-8 py-5 flex flex-col gap-4 shadow-lg shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]"></div>
                        <h2 className="text-2xl font-bold text-blue-100 tracking-widest">投放文章类别分析</h2>
                    </div>

                    <div className="grid grid-cols-[1.5fr_3fr] gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">分析维度</span>
                            <p className="text-white/90 text-[1.2rem] font-bold tracking-wide mt-1">TOP 100 极高频引用文章定位</p>
                        </div>
                        <div className="flex flex-col gap-2 border-l border-white/10 pl-8">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">内容归类与推导逻辑</span>
                            <div className="text-zinc-300 text-[1.12rem] leading-relaxed mt-1 flex flex-col gap-3">
                                <div className="flex items-start gap-3">
                                    <span className="text-[#004CE5] font-bold mt-[2px] tracking-tight">01/</span>
                                    <span>在引用文章列表中<strong className="text-white/90">按照总引用次数排序</strong>，截取前 100 篇高质量文章并对其进行深度的文章类别分析。</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#004CE5] font-bold mt-[2px] tracking-tight">02/</span>
                                    <span>按照三种类型对每篇文章进行标记后，计算每种类型的占比，即可科学得出写文章时<strong className="text-blue-200">每种类型的文章该写多少</strong>。</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#004CE5] font-bold mt-[2px] tracking-tight">03/</span>
                                    <span>深度下钻并提炼高热范本特征，依据各类型的占比反哺后续平台<strong className="text-white/90">内容到底怎么写</strong>。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 空白图片位：占据剩余几乎所有高度 ── */}
                <div className="w-full flex-1 relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center group shadow-2xl">
                    <img
                        src="/Add_Charts/article-type-analysis.png"
                        alt="文章类别占比分析图"
                        className="absolute inset-0 w-full h-full object-contain p-1 z-20"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />

                    {/* Placeholder UI */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                        <div className="w-20 h-20 mb-5 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 text-white/20 transition-all group-hover:bg-[#004CE5]/10 group-hover:text-[#004CE5]/50 group-hover:border-[#004CE5]/30">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-zinc-300 text-[1.3rem] font-bold tracking-widest text-center">
                            文章类型分析图表 占位
                        </span>
                        <span className="text-zinc-500/80 text-[1rem] mt-3 font-mono">
                            文件路径: /Add_Charts/article-type-analysis.png
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
