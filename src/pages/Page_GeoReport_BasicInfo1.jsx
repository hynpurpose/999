import React from 'react';

export default function Page_GeoReport_BasicInfo1() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-12 sm:px-16 pt-5 pb-10 animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
            <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none mb-3">报告说明</h1>
                <p className="inline-block text-[#004CE5] text-[1.1rem] font-bold tracking-widest bg-[#004CE5]/10 px-6 py-2 rounded-full border border-[#004CE5]/30 shadow-[0_0_20px_rgba(0,76,229,0.15)]">
                    构建具备高置信度与物证溯源的养胃中成药大模型(GEO)监测基准
                </p>
            </div>

            {/* Main Dashboard Layout */}
            <div className="flex-1 w-full pb-8 relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-0 items-stretch pt-[20px]">

                {/* Left Column - Configurations */}
                <div className="flex-[0.95] flex flex-col gap-4 min-h-0">
                    <div className="flex items-center gap-2 px-1 shrink-0">
                        <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full"></span>
                        <h2 className="text-base lg:text-lg xl:text-xl font-black text-zinc-200 tracking-wider">数据监测基准配置</h2>
                    </div>

                    {/* Integrated Configuration Control Center */}
                    <div className="flex-1 bg-[#09090b] border-2 border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl relative flex flex-col justify-between gap-5">
                        {/* Technical accent corner brackets (static) */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#004CE5]/80"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#004CE5]/80"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#004CE5]/80"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#004CE5]/80"></div>

                        {/* Item 1: Brand */}
                        <div className="flex items-start gap-4 relative z-10 py-2 border-b border-white/5">
                            <span className="text-zinc-400 text-base lg:text-lg xl:text-xl font-black tracking-wider w-28 shrink-0 pt-0.5">监测主体</span>
                            <div className="flex-1">
                                <span className="text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-wide">三九养胃舒颗粒</span>
                            </div>
                        </div>

                        {/* Item 2: Product */}
                        <div className="flex items-start gap-4 relative z-10 py-2 border-b border-white/5">
                            <span className="text-zinc-400 text-base lg:text-lg xl:text-xl font-black tracking-wider w-28 shrink-0 pt-0.5">目标品类</span>
                            <div className="flex-1">
                                <span className="text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-wide">养胃中成药 / 胃药 OTC</span>
                            </div>
                        </div>

                        {/* Item 3: Term Configuration */}
                        <div className="flex flex-col relative z-10 py-2 border-b border-white/5">
                            <div className="flex items-start gap-4">
                                <span className="text-zinc-400 text-base lg:text-lg xl:text-xl font-black tracking-wider w-28 shrink-0 pt-0.5">监测词条</span>
                                <div className="flex-1 flex flex-col gap-1">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xl lg:text-2xl xl:text-3xl font-black text-white">共计 60 项核心词条</span>
                                        <span className="text-zinc-400 text-sm lg:text-base font-bold">/ 覆盖 C 端消费选购与 B 端渠道选品</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-28 mt-2.5">
                                <div className="text-zinc-300 text-sm lg:text-base leading-relaxed bg-white/[0.03] border border-white/5 rounded-xl p-4">
                                    包括：C 端消费决策词 35 个、B 端渠道选品词 25 个。
                                </div>
                            </div>
                        </div>

                        {/* Item 4: Platforms */}
                        <div className="flex items-start gap-4 relative z-10 py-2">
                            <span className="text-zinc-400 text-base lg:text-lg xl:text-xl font-black tracking-wider w-28 shrink-0 pt-1.5">覆盖平台</span>
                            <div className="flex-1">
                                <div className="flex flex-col gap-3">
                                    <span className="text-xl lg:text-2xl xl:text-3xl font-black text-white">5 个主流 AI 大模型平台</span>
                                    <div className="flex flex-wrap gap-2.5 mt-1">
                                        <span className="px-4 py-1.5 text-sm lg:text-base font-extrabold text-zinc-300 bg-white/10 border border-white/20 rounded-lg">DeepSeek</span>
                                        <span className="px-4 py-1.5 text-sm lg:text-base font-extrabold text-zinc-300 bg-white/10 border border-white/20 rounded-lg">豆包</span>
                                        <span className="px-4 py-1.5 text-sm lg:text-base font-extrabold text-zinc-300 bg-white/10 border border-white/20 rounded-lg">元宝</span>
                                        <span className="px-4 py-1.5 text-sm lg:text-base font-extrabold text-zinc-300 bg-white/10 border border-white/20 rounded-lg">通义千问</span>
                                        <span className="px-4 py-1.5 text-sm lg:text-base font-extrabold text-zinc-300 bg-white/10 border border-white/20 rounded-lg">蚂蚁阿福</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Column - Summary */}
                <div className="flex-[1.05] flex flex-col gap-4 min-h-0">
                    <div className="flex items-center gap-2 px-1 shrink-0">
                        <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full"></span>
                        <h2 className="text-base lg:text-lg xl:text-xl font-black text-zinc-200 tracking-wider">数据监测执行摘要</h2>
                    </div>

                    <div className="flex-1 bg-[#09090b] border-2 border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl relative flex flex-col justify-start gap-5">
                        {/* Technical accent corner brackets (static) */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#004CE5]/80"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#004CE5]/80"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#004CE5]/80"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#004CE5]/80"></div>

                        {/* Console Log-style Summary Paragraph */}
                        <div className="bg-white/[0.01] border border-white/5 rounded-xl p-6 lg:p-8 relative flex flex-col justify-start gap-8 xl:gap-10 flex-1">
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#004CE5]"></div>

                            {/* Date Summary */}
                            <div className="flex flex-col gap-2.5">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                                    <span className="text-base lg:text-[17.5px] xl:text-[19px] text-zinc-400 font-black tracking-widest">监测执行概况</span>
                                </div>
                                <p className="text-[17px] lg:text-[19.5px] xl:text-[22px] text-zinc-200 leading-relaxed tracking-wide">
                                    本周期针对三九养胃舒颗粒的 GEO 数据雷达排查，全面覆盖了从 <span className="text-white font-black underline decoration-[#004CE5] decoration-2 underline-offset-4">消费者选药与症状问法</span> 到 <span className="text-white font-black underline decoration-[#004CE5] decoration-2 underline-offset-4">药店主推与医院配备选品</span> 的两大搜索生态，各项数据指标均在预期执行范围内，整体运行稳定。
                                </p>
                            </div>

                            {/* Detailed stats in sentences */}
                            <div className="pt-8 border-t border-white/5 flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5]"></span>
                                    <span className="text-base lg:text-[17.5px] xl:text-[19px] text-zinc-400 font-black tracking-widest">指标数据详情</span>
                                </div>
                                <p className="text-[17px] lg:text-[19.5px] xl:text-[22px] text-zinc-300 leading-relaxed text-justify tracking-wide">
                                    本周期共监测 <span className="text-white font-black">60</span> 个关键词条，在 <span className="text-white font-black">5</span> 个平台完成 <span className="text-white font-black">7</span> 天连续查询，合计执行查询 <strong className="text-[#004CE5] font-black font-mono text-xl lg:text-2xl xl:text-3xl">2,100</strong> 次，
                                    抓取并识别引用来源 <strong className="text-[#004CE5] font-black font-mono text-xl lg:text-2xl xl:text-3xl">33,082</strong> 条，同期识别竞品（C 端 / B 端）<strong className="text-[#004CE5] font-black font-mono text-xl lg:text-2xl xl:text-3xl">296 / 795</strong> 个，
                                    截图覆盖率达 <strong className="text-[#004CE5] font-black font-mono text-2xl lg:text-3xl xl:text-4xl">100%</strong>。
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
