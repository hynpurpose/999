import React from 'react';

export default function Page_StrategyOutline() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-10 lg:mt-12 flex-shrink-0">
                <h1 className="text-4xl lg:text-[2.8rem] font-bold tracking-tight text-white mb-3 tracking-widest font-['AlimamaShuHeiTi']">战略与 GEO 行动建议</h1>
            </div>

            <div className="flex-1 relative z-10 w-full flex items-center justify-center px-12 lg:px-20 py-2 pb-16 min-h-0">
                <div className="flex w-full max-w-[1400px] mx-auto h-full items-stretch pt-8 gap-16 lg:gap-24">

                    {/* Left Intro and Conclusion */}
                    <div className="w-[45%] flex flex-col justify-center h-full">
                        <div className="bg-gradient-to-br from-[#004CE5]/10 to-transparent border border-[#004CE5]/20 rounded-2xl p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative flex flex-col justify-center gap-10">
                            {/* Decorative blur */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[#004CE5]/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-12 h-1.5 bg-[#004CE5] mb-6 rounded-full shadow-[0_0_15px_rgba(0,76,229,0.5)]" />
                                <p className="text-[1.2rem] lg:text-[1.35rem] text-zinc-200 leading-relaxed font-light text-justify tracking-wide">
                                    面对这种割裂的认知基建，传统的“全网无差别铺量”GEO打法将效果不佳。我们必须依据大模型对不同词条的认知深度与竞争壁垒，将干预目标进行<strong className="text-white font-bold mx-1">严格的分层</strong>，并推导出截然不同的战术手段与介入节奏。
                                </p>
                            </div>

                            <div className="relative z-10">
                                <div className="w-full h-px bg-white/10 mb-8" />

                                <p className="text-[1.25rem] lg:text-[1.4rem] text-[#004CE5] leading-relaxed font-bold tracking-wide text-justify font-['AlimamaShuHeiTi',sans-serif] mb-6">
                                    针对这一现状，我们采用“依势定序、梯次推进”的差异化干预战略：
                                </p>

                                <p className="text-[1.2rem] lg:text-[1.35rem] text-zinc-300 leading-relaxed font-light text-justify tracking-wide bg-[#101010]/80 p-5 rounded-lg border border-white/5 shadow-inner">
                                    最终，品牌将在大模型中逐步完成从“局部可见”到“稳定被推荐”，再到“拥有概念定义权”的<strong className="text-[#004CE5] font-bold ml-1">提升</strong>。
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
                                    <span className="text-[#004CE5] font-black">首要任务</span>
                                    <span className="text-zinc-600 font-light text-xl">|</span>
                                    基础底盘
                                </h3>
                                <p className="text-[1.15rem] lg:text-[1.25rem] leading-relaxed text-zinc-300 font-light text-justify relative z-10">
                                    必须率先并持续攻克“2万预算、保鲜、嵌入”等核心高潜转化场景，填补目前在高净值决策词条上的认知断层。
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
                                    <span className="text-[#004CE5] font-black">后期突围</span>
                                    <span className="text-zinc-600 font-light text-xl">|</span>
                                    攻坚破局
                                </h3>
                                <p className="text-[1.15rem] lg:text-[1.25rem] leading-relaxed text-zinc-300 font-light text-justify relative z-10">
                                    在大众通用需求和综合榜单等“失语”红海区，避开正面硬刚，通过“借势横评”等搭便车策略实现后期渗透。
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
                                    <span className="text-[#004CE5] font-black">常态维护</span>
                                    <span className="text-zinc-600 font-light text-xl">|</span>
                                    品牌背书
                                </h3>
                                <p className="text-[1.15rem] lg:text-[1.25rem] leading-relaxed text-zinc-300 font-light text-justify relative z-10">
                                    在具备压倒性优势的“原鲜”专属概念区，进行常态化的专业标准输出以拔高长期调性。
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
