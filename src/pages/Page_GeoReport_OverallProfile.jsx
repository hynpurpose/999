import React from 'react';

export default function Page_GeoReport_OverallProfile() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-10 lg:mt-12 flex-shrink-0">
                <h1 className="text-4xl lg:text-[2.8rem] font-bold tracking-tight text-white mb-3 tracking-widest font-['AlimamaShuHeiTi']">极端分化的“偏科型高端新锐”</h1>
            </div>

            <div className="flex-1 relative z-10 w-full flex items-center justify-center px-12 lg:px-20 py-2 pb-16 min-h-0">
                <div className="flex w-full max-w-[1400px] mx-auto h-full items-stretch pt-12 gap-16 lg:gap-24">

                    {/* Left Intro Card */}
                    <div className="w-[45%] flex flex-col justify-center h-full pb-8">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-10 lg:p-12 relative flex flex-col justify-center gap-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[#004CE5]/5 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-8 h-1 bg-[#004CE5]/50 mb-6 rounded-full" />
                                <h3 className="text-xl lg:text-[1.65rem] font-bold text-white mb-4 tracking-wide">极端分化的“偏科型高端”</h3>
                                <p className="text-[1.2rem] lg:text-[1.35rem] text-zinc-300 leading-relaxed font-light text-justify tracking-wide">
                                    基于近7天（截至3月27日）主流AI大模型及生成式搜索平台的监测数据，方太冰箱在AI生态中的表现呈现出极其显著的<strong className="text-zinc-100 font-bold mx-1 border-b border-zinc-600 pb-0.5">“非对称分布”</strong>。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Insight Cards containing data vis */}
                    <div className="w-[55%] flex flex-col justify-center h-full gap-8 relative py-4 pb-12">
                        <div className="absolute left-6 top-8 bottom-16 w-px bg-white/5 z-0" />

                        {/* Card 1: Weak Base */}
                        <div className="flex items-start gap-6 relative z-10 ml-0 group">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#101010] border border-white/10 text-zinc-500 flex items-center justify-center font-bold text-xl font-mono relative transition-colors group-hover:border-zinc-300 group-hover:text-zinc-300">
                                —
                            </div>
                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all flex flex-col gap-6 relative overflow-hidden mt-0">
                                <div>
                                    <h3 className="text-xl lg:text-[1.35rem] font-bold text-white tracking-wide flex items-center gap-3">
                                        <span className="text-zinc-200">基础声量存在严重断层</span>
                                        <span className="text-zinc-700 font-light text-xl">|</span>
                                        <span className="text-zinc-500 font-normal">行业第14位</span>
                                    </h3>
                                </div>

                                <div className="flex flex-col gap-3 w-full bg-black/20 p-4 rounded-lg border border-white/5">
                                    {/* Bar chart rows */}
                                    <div className="flex items-center w-full gap-4">
                                        <span className="w-20 text-right text-zinc-400 font-mono">卡萨帝</span>
                                        <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-zinc-600 rounded-full" style={{ width: '70.3%' }}></div>
                                        </div>
                                        <span className="w-12 text-zinc-400 font-mono text-sm">70.3%</span>
                                    </div>
                                    <div className="flex items-center w-full gap-4">
                                        <span className="w-20 text-right text-zinc-400 font-mono">海尔</span>
                                        <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-zinc-600 rounded-full" style={{ width: '51.5%' }}></div>
                                        </div>
                                        <span className="w-12 text-zinc-400 font-mono text-sm">51.5%</span>
                                    </div>
                                    <div className="flex items-center w-full gap-4 mt-2">
                                        <span className="w-20 text-right text-white font-bold tracking-widest font-['AlimamaShuHeiTi']">方太</span>
                                        <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#004CE5]/80 rounded-full" style={{ width: '13.8%' }}></div>
                                        </div>
                                        <span className="w-12 text-[#004CE5]/90 font-bold font-mono text-sm">13.8%</span>
                                    </div>
                                </div>
                                <p className="text-[1.1rem] leading-relaxed text-zinc-400 font-light text-justify">
                                    方太整体提及率仅为 13.8%，相较于传统白电寡头，基础声量处于绝对劣势。
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Strong Niche */}
                        <div className="flex items-start gap-6 relative z-10 ml-0 group">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#101010] border border-white/10 text-zinc-500 flex items-center justify-center font-bold text-xl font-mono relative transition-colors group-hover:border-[#004CE5]/30 group-hover:text-[#004CE5]">
                                +
                            </div>
                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all flex flex-col gap-6 relative overflow-hidden mt-0">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#004CE5]/5 rounded-bl-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-xl lg:text-[1.35rem] font-bold text-white tracking-wide flex items-center gap-3 relative z-10">
                                    <span className="text-zinc-200">优势场景首位逆袭</span>
                                    <span className="text-zinc-700 font-light text-xl">|</span>
                                    <span className="text-zinc-500 font-normal">Top 1 推荐表现</span>
                                </h3>
                                
                                <div className="flex items-center gap-8 relative z-10 mt-2">
                                    <div className="flex flex-col">
                                        <span className="text-[3.2rem] font-bold text-[#004CE5]/90 leading-none font-mono tracking-tighter">8.8<span className="text-2xl ml-1 text-[#004CE5]/70">%</span></span>
                                        <span className="text-zinc-500 text-sm mt-1 uppercase tracking-widest">方太 Top1 提及率</span>
                                    </div>
                                    <div className="h-12 w-px bg-white/10"></div>
                                    <div className="flex flex-col">
                                        <span className="text-[1.8rem] font-bold text-zinc-500 leading-none font-mono">4.6<span className="text-lg ml-1 text-zinc-600">%</span></span>
                                        <span className="text-zinc-600 text-sm mt-1 uppercase tracking-widest">容声 Top1 提及率</span>
                                    </div>
                                </div>

                                <p className="text-[1.1rem] leading-relaxed text-zinc-400 font-light text-justify relative z-10 mt-2">
                                    但在方太具备竞争优势的<strong className="text-zinc-200 mx-1">特定提问下</strong>，其 Top 1（首位推荐）提及率能逆势飞越，越级碾压部分传统品牌。
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
