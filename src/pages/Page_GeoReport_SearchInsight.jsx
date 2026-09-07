import React from 'react';

export default function Page_GeoReport_SearchInsight() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-10 lg:mt-12 flex-shrink-0">
                <h1 className="text-4xl lg:text-[2.8rem] font-bold tracking-tight text-white mb-3 tracking-widest font-['AlimamaShuHeiTi']">谁在贡献流量，谁在导致漏斗流失？</h1>
            </div>

            <div className="flex-1 relative z-10 w-full flex items-center justify-center px-12 lg:px-20 py-2 pb-16 min-h-0">
                <div className="flex w-full max-w-[1400px] mx-auto h-full items-stretch pt-12 gap-16 lg:gap-24">

                    {/* Left Intro Card */}
                    <div className="w-[45%] flex flex-col justify-center h-full pb-8">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-10 lg:p-12 relative flex flex-col justify-center gap-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[#004CE5]/5 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-8 h-1 bg-[#004CE5]/50 mb-6 rounded-full" />
                                <h3 className="text-xl lg:text-[1.65rem] font-bold text-white mb-4 tracking-wide">明确的“能力边界”</h3>
                                <p className="text-[1.2rem] lg:text-[1.35rem] text-zinc-300 leading-relaxed font-light text-justify tracking-wide mb-4">
                                    通过对 <span className="text-zinc-100 font-bold text-xl mx-1 border-b border-zinc-600 pb-0.5">9</span> 个核心监测词条的下钻分析，我们可以清晰看到 AI 是如何给方太划定能力边界的。
                                </p>
                                <p className="text-[1.2rem] lg:text-[1.35rem] text-zinc-300 leading-relaxed font-light text-justify tracking-wide">
                                    品牌目前的<strong className="text-zinc-100 mx-1 font-bold">流量分布</strong>呈现出了极其明显的两极分化断层。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Insight Cards */}
                    <div className="w-[55%] flex flex-col justify-center h-full gap-8 relative py-4 pb-12">
                        <div className="absolute left-6 top-8 bottom-16 w-px bg-white/5 z-0" />

                        {/* Domain 1: Moat */}
                        <div className="flex items-start gap-6 relative z-10 ml-0 group">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#101010] border border-white/10 text-zinc-500 flex items-center justify-center font-bold text-xl font-mono relative transition-colors group-hover:border-[#004CE5]/30 group-hover:text-[#004CE5]">
                                A
                            </div>
                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all flex flex-col gap-3 relative overflow-hidden mt-0">
                                <h3 className="text-lg lg:text-xl font-bold text-white tracking-wide">
                                    <span className="text-zinc-200">1. 绝对护城河</span> <span className="text-zinc-500 font-normal">（技术与细分场景）</span>
                                </h3>

                                <div className="grid grid-cols-2 gap-4 text-[0.95rem] tracking-wide text-zinc-300 mt-2">
                                    <div className="bg-black/20 p-4 rounded-lg flex flex-col gap-2 border border-white/5">
                                        <span className="font-bold text-zinc-200">原鲜冰箱推荐</span>
                                        <div className="flex justify-between items-center text-[#004CE5]/90"><span className="text-xl font-black">67.9%</span><span>NO. 1.9</span></div>
                                    </div>
                                    <div className="bg-black/20 p-4 rounded-lg flex flex-col gap-2 border border-white/5">
                                        <span className="font-bold text-zinc-200">保鲜效果好的冰箱<br />嵌入式冰箱推荐</span>
                                        <div className="flex justify-between items-center text-zinc-500"><span className="text-lg font-bold">~ 20%</span><span>前列</span></div>
                                    </div>
                                </div>

                                <div className="mt-3 border-l-2 border-[#004CE5]/50 pl-4 py-1">
                                    <p className="text-[1.05rem] text-zinc-400 text-justify">
                                        洞察：方太的<strong className="text-zinc-200 mx-1">远洋级氮气保鲜</strong>和<strong className="text-zinc-200 mx-1">平嵌</strong>概念在底层PR非常成功，大模型已深度认可。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Domain 2: Missing */}
                        <div className="flex items-start gap-6 relative z-10 ml-0 group">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#101010] border border-white/10 text-zinc-500 flex items-center justify-center font-bold text-xl font-mono relative transition-colors group-hover:border-red-500/50 group-hover:text-red-400">
                                B
                            </div>
                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all flex flex-col gap-3 relative overflow-hidden mt-0">
                                <h3 className="text-lg lg:text-xl font-bold text-white tracking-wide">
                                    <span className="text-zinc-200">2. 致命的转化盲区</span> <span className="text-zinc-500 font-normal">（预算与通用导购）</span>
                                </h3>

                                <div className="flex flex-col gap-3 mt-2 bg-black/20 p-4 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
                                        <span className="text-zinc-300 flex-1">2w预算冰箱品牌 / 排行榜前十</span>
                                        <span className="text-red-400/80 font-mono font-bold">0.0%</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                                        <span className="text-zinc-400 flex-1">高端冰箱品牌推荐</span>
                                        <span className="text-zinc-500 font-mono font-bold">7.1% (No.7)</span>
                                    </div>
                                </div>

                                <div className="mt-3 border-l-2 border-red-500/40 pl-4 py-1">
                                    <p className="text-[1.05rem] text-zinc-400 text-justify">
                                        洞察：这是最危险的漏斗断层。当受众拿着“2万预算”或检索“高端排行榜”时，AI 完美避开了方太。高端定价与导购语料严重脱节。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
