import React from 'react';

export default function Page_AgentDataFlow() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* Content Area */}
            <div className="flex-1 relative z-10 w-full h-full flex items-center justify-center mt-4">
                {/* Visual Canvas using % for positioning */}
                <div className="relative w-full max-w-[1400px] aspect-[16/9] lg:aspect-auto lg:h-[85%] mx-auto">

                    {/* Central 4:3 Image with Gradient Mask */}
                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] aspect-[4/3] pointer-events-none flex items-center justify-center">
                        <img
                            src="/agent-flow-bg.png"
                            alt="Agent Flow Background Placeholder"
                            className="w-full h-full object-cover"
                            style={{
                                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)',
                                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)'
                            }}
                        />
                    </div>

                    {/* Nodes Component */}

                    {/* Top-Left: Brand KB (purple) */}
                    <div className="absolute top-[20%] left-[5%] lg:left-[10%] xl:left-[12%] -translate-y-1/2 w-[280px] lg:w-[320px] 2xl:w-[360px] z-20">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[1.6rem] xl:text-[1.75rem] font-bold text-purple-400">冰箱品牌知识库</h3>
                            <p className="text-[1.1rem] xl:text-[1.15rem] text-zinc-300 leading-[1.6]">沉淀行业走势、方太产品属性与核心保鲜科技信息，拉齐认知基线</p>
                        </div>
                    </div>

                    {/* Top: Article Data (green) */}
                    <div className="absolute top-[3%] lg:top-[5%] left-[45%] lg:left-[48%] -translate-x-1/2 w-[320px] 2xl:w-[360px] z-20">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[1.6rem] xl:text-[1.75rem] font-bold text-emerald-400">家电文章清洗数据</h3>
                            <p className="text-[1.1rem] xl:text-[1.15rem] text-zinc-300 leading-[1.6]">高频抽取 AI 倾向的高端家电评测博文语料，沉淀优质选购结构</p>
                        </div>
                    </div>

                    {/* Left: Input (purple) */}
                    <div className="absolute top-[50%] left-[5%] lg:left-[10%] xl:left-[14%] -translate-y-1/2 z-20 flex flex-col items-start xl:pl-4">
                        <span className="text-[1.75rem] xl:text-[2rem] font-black text-purple-400 mb-2 tracking-widest pl-2">输入</span>
                        <div className="h-[2px] w-24 bg-purple-400/50 relative mt-2">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-[2px] border-r-[2px] border-purple-400/60 rotate-45 transform translate-x-[1px]"></div>
                        </div>
                    </div>

                    {/* Bottom-Left: User Reviews (green) */}
                    <div className="absolute top-[75%] left-[5%] lg:left-[10%] xl:left-[12%] -translate-y-1/2 w-[280px] lg:w-[320px] 2xl:w-[360px] z-20">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[1.6rem] xl:text-[1.75rem] font-bold text-emerald-400">冰洗用户真实评论</h3>
                            <p className="text-[1.1rem] xl:text-[1.15rem] text-zinc-300 leading-[1.6]">提炼消费者在异味、耗电与结冰上的真实痛点池，反哺防雷信号</p>
                        </div>
                    </div>

                    {/* Bottom: Citation Data (green) */}
                    <div className="absolute bottom-[-2%] lg:bottom-[0%] left-[45%] lg:left-[48%] -translate-x-1/2 w-[320px] 2xl:w-[360px] z-20">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[1.6rem] xl:text-[1.75rem] font-bold text-emerald-400">引用平台数据</h3>
                            <p className="text-[1.1rem] xl:text-[1.15rem] text-zinc-300 leading-[1.6]">识别 AI 偏好的引用来源与内容<br />载体。</p>
                        </div>
                    </div>

                    {/* Bottom-Right: Platform Strategy (green) */}
                    <div className="absolute top-[75%] right-[2%] lg:right-[5%] xl:right-[10%] -translate-y-1/2 w-[280px] lg:w-[320px] 2xl:w-[360px] z-20">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[1.6rem] xl:text-[1.75rem] font-bold text-emerald-400">投放平台量化策略</h3>
                            <p className="text-[1.1rem] xl:text-[1.15rem] text-zinc-300 leading-[1.6]">基于平台差异，制定可验证的投放策略</p>
                        </div>
                    </div>

                    {/* Right: Output (green) */}
                    <div className="absolute top-[50%] right-[3%] lg:right-[8%] xl:right-[12%] -translate-y-1/2 z-20 flex flex-col items-start xl:pl-4">
                        <span className="text-[1.75rem] xl:text-[2rem] font-black text-emerald-400 mb-2 tracking-widest pl-2">输出</span>
                        <div className="h-[2px] w-[90px] bg-emerald-400/50 relative mt-2">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-[2px] border-r-[2px] border-emerald-400/60 rotate-45 transform translate-x-[1px]"></div>
                        </div>
                    </div>

                    {/* Top-Right: Quality Content (green) */}
                    <div className="absolute top-[30%] right-[2%] lg:right-[5%] xl:right-[10%] -translate-y-1/2 w-[280px] lg:w-[320px] 2xl:w-[360px] z-20">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[1.6rem] xl:text-[1.75rem] font-bold text-emerald-400">高质量内容生成</h3>
                            <p className="text-[1.1rem] xl:text-[1.15rem] text-zinc-300 leading-[1.6]">生成更符合 AI 理解与引用逻辑的内容</p>
                        </div>
                    </div>

                    {/* Central Agent previously here, now replaced by the 4:3 image above */}

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes dash {
                    to {
                        stroke-dashoffset: 1000;
                    }
                }
            `}} />
        </div>
    );
}
