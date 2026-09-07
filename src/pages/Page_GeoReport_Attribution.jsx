import React from 'react';

export default function Page_GeoReport_Attribution() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-10 lg:mt-12 flex-shrink-0">
                <h1 className="text-4xl lg:text-[2.8rem] font-bold tracking-tight text-white mb-3 tracking-widest font-['AlimamaShuHeiTi']">为何在主流榜单中“查无此人”？</h1>
            </div>

            <div className="flex-1 relative z-10 w-full flex items-center justify-center px-12 lg:px-20 py-2 pb-16 min-h-0">
                <div className="flex w-full max-w-[1400px] mx-auto h-full items-stretch pt-12 gap-16 lg:gap-24">

                    {/* Left Intro Card */}
                    <div className="w-[45%] flex flex-col justify-center h-full pb-8">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-10 lg:p-12 relative flex flex-col justify-center gap-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[#004CE5]/5 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-8 h-1 bg-[#004CE5]/50 mb-6 rounded-full" />
                                <h3 className="text-xl lg:text-[1.65rem] font-bold text-white mb-4 tracking-wide">为何在主流榜单中“查无此人”？</h3>
                                <p className="text-[1.2rem] lg:text-[1.35rem] text-zinc-300 leading-relaxed font-light text-justify tracking-wide mb-4">
                                    AI大模型的回答机制是检索增强生成（RAG），即依赖全网优质内容库进行归纳。
                                </p>
                                <p className="text-[1.2rem] lg:text-[1.35rem] text-zinc-200 leading-relaxed font-bold text-justify tracking-wide mb-6">
                                    溯源数据直接揭示了方太在通用词条下提及率为0的根本原因。
                                </p>
                                <blockquote className="text-[1.05rem] lg:text-[1.15rem] text-zinc-400 leading-relaxed font-light text-justify tracking-wide bg-white/[0.02] p-5 rounded-lg border-l-2 border-l-red-500/50">
                                    传统的“全网无差别铺量”GEO打法将效果不佳。传统巨头在各大门户和社区沉淀了海量的“年度盘点”、“横评榜单”公关资产。方太由于在这些源头语料中处于真空状态，AI在遇到泛人群提问时遭遇了<strong className="text-zinc-200 mx-1">“无米之炊”</strong>。
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Right Insight Cards */}
                    <div className="w-[55%] flex flex-col justify-center h-full gap-8 relative py-4 pb-12">
                        <div className="absolute left-6 top-8 bottom-16 w-px bg-white/5 z-0" />

                        {/* Card 1: RAG Sources */}
                        <div className="flex items-start gap-6 relative z-10 ml-0 group">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#101010] border border-white/10 text-zinc-500 flex items-center justify-center font-bold text-xl font-mono relative transition-colors group-hover:border-[#004CE5]/30 group-hover:text-[#004CE5]">
                                01
                            </div>
                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all flex flex-col gap-4 relative overflow-hidden mt-0">
                                <h3 className="text-lg lg:text-xl font-bold text-white tracking-wide flex items-center gap-3 relative z-10">
                                    <span className="text-zinc-200">高权重引源平台依赖</span>
                                </h3>
                                <p className="text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-zinc-400 font-light text-justify relative z-10">
                                    驱动AI生成冰箱回答的核心知识源依次为：
                                </p>
                                <div className="flex flex-wrap gap-3 mt-1 relative z-10">
                                    <span className="px-3 py-1 bg-white/5 text-zinc-300 rounded-md text-sm font-mono border border-white/5">抖音 10.2%</span>
                                    <span className="px-3 py-1 bg-white/5 text-zinc-300 rounded-md text-sm font-mono border border-white/5">搜狐网 9.9%</span>
                                    <span className="px-3 py-1 bg-white/5 text-zinc-300 rounded-md text-sm font-mono border border-white/5">新浪新闻 8.5%</span>
                                    <span className="px-3 py-1 bg-white/5 text-zinc-300 rounded-md text-sm font-mono border border-white/5">今日头条 7.2%</span>
                                    <span className="px-3 py-1 bg-white/5 text-zinc-300 rounded-md text-sm font-mono border border-white/5">什么值得买 6.5%</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Missing Data */}
                        <div className="flex items-start gap-6 relative z-10 ml-0 group">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#101010] border border-white/10 text-zinc-500 flex items-center justify-center font-bold text-xl font-mono relative transition-colors group-hover:border-red-500/50 group-hover:text-red-400">
                                02
                            </div>
                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all flex flex-col gap-4 relative overflow-hidden mt-0">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-lg lg:text-xl font-bold text-white tracking-wide flex items-center gap-3 relative z-10">
                                    <span className="text-zinc-200">致命的底层语料缺席</span>
                                </h3>
                                <p className="text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-zinc-400 font-light text-justify relative z-10">
                                    在系统抓取到的、被AI引用次数最高的 <strong className="text-zinc-200 border-b border-zinc-600 pb-0.5">Top 10文章</strong>（如《十大冰箱品牌》等）中：
                                </p>
                                <div className="bg-black/20 border border-white/5 p-4 rounded-lg flex items-center gap-4 relative z-10 mt-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <p className="text-[1.1rem] text-zinc-300 font-mono tracking-wide">
                                        “目标产品（方太）是否提及”一栏全线飘红，全部为<strong className="text-red-400/90 text-xl font-bold mx-2">否</strong>。
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
