import React from 'react';

export default function Page_SectionSummary() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-10 lg:mt-12 flex-shrink-0">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 tracking-widest">总结</h1>
            </div>

            <div className="flex-1 relative z-10 w-full flex items-center justify-center px-12 lg:px-20 py-2 pb-16 min-h-0">
                <div className="flex w-full max-w-[1400px] mx-auto h-full items-stretch pt-8 gap-16 lg:gap-24">

                    {/* Left Intro and Conclusion */}
                    <div className="w-[45%] flex flex-col justify-center h-full">
                        <div className="bg-gradient-to-br from-[#004CE5]/10 to-transparent border border-[#004CE5]/20 rounded-2xl p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative flex flex-col justify-center gap-10">
                            {/* Decorative blur */}
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#004CE5]/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-12 h-1.5 bg-[#004CE5] mb-6 rounded-full shadow-[0_0_15px_rgba(0,76,229,0.5)]" />
                                <p className="text-[1.2rem] lg:text-[1.35rem] text-zinc-200 leading-relaxed font-light text-justify tracking-wide">
                                    综上所述，当前的数据图谱极其清晰地揭示了迪巧干预AI生态的正确路径。这三个板块之间并非平行的优化选项，而是存在着极其严密的<strong className="text-white font-bold mx-1">先后依存与战略支撑关系：</strong>
                                </p>
                            </div>

                            <div className="relative z-10">
                                <div className="w-full h-px bg-white/10 mb-8" />

                                <p className="text-[1.25rem] lg:text-[1.4rem] text-[#004CE5] leading-relaxed font-bold tracking-wide text-justify font-['AlimamaShuHeiTi',sans-serif]">
                                    唯有遵循这套由数据底层逻辑推导出的“依势定序、梯次推进”战略规划，迪巧才能在AI生成式搜索时代，以最高的效率重塑品牌的推荐格局。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Timeline Cards */}
                    <div className="w-[55%] flex flex-col justify-center h-full gap-8 lg:gap-10 relative py-4">
                        {/* Connecting Line */}
                        <div className="absolute left-8 lg:left-9 top-16 bottom-16 w-1 bg-white/[0.05] rounded-full z-0" />

                        {/* Card 1 */}
                        <div className="flex items-center gap-6 lg:gap-8 relative z-10 ml-0 group">
                            <div className="w-16 h-16 lg:w-18 lg:h-18 shrink-0 rounded-full bg-[#101010] border-[3px] border-[#004CE5] text-[#004CE5] shadow-[0_0_15px_rgba(0,76,229,0.5)] flex items-center justify-center font-black text-2xl lg:text-3xl font-mono relative transition-transform group-hover:scale-110">
                                01
                            </div>
                            <div className="flex-1 bg-[#101010] border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/[0.03] hover:border-[#004CE5]/40 transition-all shadow-xl flex flex-col gap-3 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#004CE5]/5 rounded-bl-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-xl lg:text-[1.45rem] font-bold text-white tracking-wide flex items-center gap-3 relative z-10">
                                    <span className="text-[#004CE5] font-black">坚实基础</span>
                                    <span className="text-zinc-600 font-light text-xl">|</span>
                                    板块一：核心场景
                                </h3>
                                <p className="text-[1.15rem] lg:text-[1.25rem] leading-relaxed text-zinc-300 font-light text-justify relative z-10">
                                    必须最先强势突围并贯穿始终。稳扎稳打占据“不便秘、好吞咽、产后”的推荐位，这是为品牌提供商业转化兜底、并向外界证明实力的基石。
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-center gap-6 lg:gap-8 relative z-10 ml-0 group">
                            <div className="w-16 h-16 lg:w-18 lg:h-18 shrink-0 rounded-full bg-[#101010] border-[3px] border-[#004CE5] text-[#004CE5] shadow-[0_0_15px_rgba(0,76,229,0.5)] flex items-center justify-center font-black text-2xl lg:text-3xl font-mono relative transition-transform group-hover:scale-110">
                                02
                            </div>
                            <div className="flex-1 bg-[#101010] border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/[0.03] hover:border-[#004CE5]/40 transition-all shadow-xl flex flex-col gap-3 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#004CE5]/5 rounded-bl-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-xl lg:text-[1.45rem] font-bold text-white tracking-wide flex items-center gap-3 relative z-10">
                                    <span className="text-[#004CE5] font-black">奇兵破局</span>
                                    <span className="text-zinc-600 font-light text-xl">|</span>
                                    板块二：综合大词
                                </h3>
                                <p className="text-[1.15rem] lg:text-[1.25rem] leading-relaxed text-zinc-300 font-light text-justify relative z-10">
                                    作为难点中的难点，不能按部就班。必须等待基石稳固后，在后期利用巧妙的借势手段（搭便车），撕开流量封锁线。
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex items-center gap-6 lg:gap-8 relative z-10 ml-0 group">
                            <div className="w-16 h-16 lg:w-18 lg:h-18 shrink-0 rounded-full bg-[#101010] border-[3px] border-[#004CE5] text-[#004CE5] shadow-[0_0_15px_rgba(0,76,229,0.5)] flex items-center justify-center font-black text-2xl lg:text-3xl font-mono relative transition-transform group-hover:scale-110">
                                03
                            </div>
                            <div className="flex-1 bg-[#101010] border border-white/10 rounded-xl p-6 lg:p-8 hover:bg-white/[0.03] hover:border-[#004CE5]/40 transition-all shadow-xl flex flex-col gap-3 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#004CE5]/5 rounded-bl-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-xl lg:text-[1.45rem] font-bold text-white tracking-wide flex items-center gap-3 relative z-10">
                                    <span className="text-[#004CE5] font-black">长效背书</span>
                                    <span className="text-zinc-600 font-light text-xl">|</span>
                                    板块三：专属概念
                                </h3>
                                <p className="text-[1.15rem] lg:text-[1.25rem] leading-relaxed text-zinc-300 font-light text-justify relative z-10">
                                    作为常规动作，在全周期内提供稳定的专业定义，不强求短期结果，只为拔高品牌的长期科技调性。
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
