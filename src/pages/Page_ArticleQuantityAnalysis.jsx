import React from 'react';

export default function Page_ArticleQuantityAnalysis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">投放文章数量</h1>
                <p className="inline-block text-[#004CE5] text-[1.1rem] font-bold tracking-widest bg-[#004CE5]/10 px-6 py-2 rounded-full border border-[#004CE5]/30 shadow-[0_0_20px_rgba(0,76,229,0.15)]">
                    各品牌投放文章数量对比
                </p>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 w-full max-w-[1400px] mx-auto px-4 pb-12 z-10 flex items-center justify-center min-h-0">

                <div className="w-full grid grid-cols-[1fr_1.2fr] gap-12 items-stretch justify-center h-full min-h-0">

                    {/* Left: Table & Info */}
                    <div className="w-full flex flex-col justify-center h-full overflow-y-auto pr-2 pb-2">
                        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-8 backdrop-blur-md shrink-0">
                            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                <span className="w-2 h-6 bg-[#004CE5] rounded-full inline-block shadow-[0_0_10px_rgba(0,76,229,0.5)]"></span>
                                投放文章数量
                            </h2>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/20 text-zinc-400 text-lg">
                                        <th className="py-4 px-6 font-medium whitespace-nowrap">平台</th>
                                        <th className="py-4 px-6 font-medium whitespace-nowrap text-center">Swisse</th>
                                        <th className="py-4 px-6 font-medium whitespace-nowrap text-center">inne</th>
                                        <th className="py-4 px-6 font-medium whitespace-nowrap text-center">金钙尔奇</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-white/10 text-white hover:bg-white/5 transition-colors group">
                                        <td className="py-5 px-6 font-medium text-[#004CE5] text-xl group-hover:text-blue-400 transition-colors">新京报</td>
                                        <td className="py-5 px-6 font-bold text-3xl text-center">39</td>
                                        <td className="py-5 px-6 font-bold text-3xl text-center">34</td>
                                        <td className="py-5 px-6 font-bold text-3xl text-center">8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* New Info List */}
                        <div className="mt-8 flex flex-col gap-4 shrink-0">
                            <div className="flex gap-4 items-start bg-white/[0.03] p-5 rounded-2xl border border-white/10 hover:border-[#004CE5]/40 transition-colors">
                                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#004CE5]/20 text-[#004CE5] font-bold text-sm">1</span>
                                <span className="text-zinc-300 text-[1.05rem] leading-relaxed pt-0.5">确定目前四个AI平台提到最多的产品，分别是<span className="text-white font-bold">Swisse</span>、<span className="text-white font-bold">inne</span>、<span className="text-white font-bold">金钙尔奇</span></span>
                            </div>
                            <div className="flex gap-4 items-start bg-white/[0.03] p-5 rounded-2xl border border-white/10 hover:border-[#004CE5]/40 transition-colors">
                                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#004CE5]/20 text-[#004CE5] font-bold text-sm">2</span>
                                <span className="text-zinc-300 text-[1.05rem] leading-relaxed pt-0.5">查询出这三个产品在<span className="text-white font-bold">A组</span>中投放出的文章数量</span>
                            </div>
                            <div className="flex gap-4 items-start bg-white/[0.03] p-5 rounded-2xl border border-white/10 hover:border-[#004CE5]/40 transition-colors">
                                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#004CE5]/20 text-[#004CE5] font-bold text-sm">3</span>
                                <span className="text-zinc-300 text-[1.05rem] leading-relaxed pt-0.5">我们在不同平台的投放数据就设为其<span className="text-[#004CE5] font-bold">平均值</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Picture Placeholder - Fully Adaptive */}
                    <div className="w-full h-full relative bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl group flex flex-col items-center justify-center backdrop-blur-sm">
                        <img
                            src="/Add_Charts/article-push-search.png"
                            alt="数量分布占位图"
                            className="absolute inset-0 w-full h-full object-contain p-2 z-20"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />

                        {/* Placeholder UI */}
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                            <div className="w-24 h-24 mb-6 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 text-white/20 transition-all duration-300 group-hover:bg-[#004CE5]/10 group-hover:text-[#004CE5]/50 group-hover:border-[#004CE5]/30">
                                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="text-zinc-300 text-[1.5rem] font-bold tracking-widest text-center">
                                图片区域满尺寸显示
                            </span>
                            <span className="text-zinc-500/80 text-[1rem] mt-3 font-mono">
                                无比例锁定 · 自适应最大化
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
