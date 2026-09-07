import React from 'react';

export default function Page_GeoReport_CoreSummary() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-10 lg:mt-12 flex-shrink-0">
                <h1 className="text-4xl lg:text-[2.8rem] font-bold tracking-tight text-white mb-3 tracking-widest font-['AlimamaShuHeiTi']">方太冰箱 GEO近期监测深度诊断与推演报告</h1>
            </div>

            <div className="flex-1 relative z-10 w-full flex items-center justify-center px-12 lg:px-20 py-2 pb-16 min-h-0">
                <div className="flex w-full max-w-[1400px] mx-auto h-full items-stretch pt-12 gap-16 lg:gap-24">

                    {/* Left Intro Card */}
                    <div className="w-[45%] flex flex-col justify-center h-full pb-8">
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-10 lg:p-12 relative flex flex-col justify-center gap-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[#004CE5]/5 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-8 h-1 bg-[#004CE5]/50 mb-6 rounded-full" />
                                <p className="text-[1.2rem] lg:text-[1.35rem] text-zinc-300 leading-relaxed font-light text-justify tracking-wide">
                                    综合各项数据指标，方太冰箱在目前的AI大模型认知中呈现出<strong className="text-white font-bold mx-1">“极度偏科的技术特长生”</strong>画像。
                                </p>
                            </div>

                            <div className="relative z-10">
                                <div className="w-full h-px bg-white/5 mb-8" />
                                <p className="text-[1.1rem] lg:text-[1.2rem] text-zinc-400 mb-4">大模型定调结论：</p>
                                <blockquote className="text-[1.2rem] lg:text-[1.35rem] text-zinc-300 leading-relaxed font-light text-justify tracking-wide bg-white/[0.02] p-6 rounded-lg border-l-2 border-[#004CE5]/50 font-serif italic">
                                    “方太是技术极其硬核的高端玩家，但在冰箱领域资历尚浅、性价比与传统巨头相比不占优。”
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Right Insight Cards */}
                    <div className="w-[55%] flex flex-col justify-center h-full gap-8 relative py-4 pb-12">
                        <div className="absolute left-6 top-8 bottom-16 w-px bg-white/5 z-0" />

                        {/* Card 1 */}
                        <div className="flex items-start gap-6 relative z-10 ml-0 group">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#101010] border border-white/10 text-zinc-500 flex items-center justify-center font-bold text-xl font-mono relative transition-colors group-hover:border-[#004CE5]/30 group-hover:text-[#004CE5]">
                                01
                            </div>
                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all flex flex-col gap-3 relative overflow-hidden mt-0">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#004CE5]/5 rounded-bl-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-xl lg:text-[1.35rem] font-bold text-white tracking-wide flex items-center gap-3 relative z-10">
                                    <span className="text-zinc-200">技术护城河</span>
                                    <span className="text-zinc-700 font-light text-xl">|</span>
                                    <span className="text-zinc-400 font-normal">不可替代的壁垒</span>
                                </h3>
                                <p className="text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-zinc-400 font-light text-justify relative z-10">
                                    品牌凭借差异化的<strong className="text-zinc-200 font-bold mx-1">“原鲜/远洋级氮气保鲜”</strong>技术，在特定细分维度的提问中彻底打穿了AI的认知，具备极强的不可替代性。
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex items-start gap-6 relative z-10 ml-0 group">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#101010] border border-white/10 text-zinc-500 flex items-center justify-center font-bold text-xl font-mono relative transition-colors group-hover:border-zinc-300 group-hover:text-zinc-300">
                                02
                            </div>
                            <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-6 lg:p-8 hover:bg-white/[0.04] transition-all flex flex-col gap-3 relative overflow-hidden mt-0">
                                <h3 className="text-xl lg:text-[1.35rem] font-bold text-white tracking-wide flex items-center gap-3 relative z-10">
                                    <span className="text-zinc-200">致命失语区</span>
                                    <span className="text-zinc-700 font-light text-xl">|</span>
                                    <span className="text-zinc-400 font-normal">导购场景断层</span>
                                </h3>
                                <p className="text-[1.1rem] lg:text-[1.2rem] leading-relaxed text-zinc-400 font-light text-justify relative z-10">
                                    受限于跨界新入局者的身份，方太在<strong className="text-zinc-200 font-bold mx-1">“大众通用需求”、“综合排行榜”</strong>以及<strong className="text-zinc-200 font-bold mx-1">“精准高预算选购”</strong>等核心导购场景中，面临大面积的流量失语。
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
