import React from 'react';

export default function Page_SectionExclusive() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            {/* Centered H1 without blue bar */}
            <div className="relative z-20 w-full pt-10 shrink-0 flex flex-col items-center justify-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-widest text-center">
                    板块三：专属概念——“立标准（定义趋势）”
                </h1>
            </div>

            {/* Main Content Area: Table Form Layout */}
            <div className="flex-1 relative w-full px-12 lg:px-20 pb-16 pt-10 flex items-stretch min-h-0">
                <div className="w-full h-full bg-[#101010] border border-white/10 rounded-2xl px-12 py-6 shadow-2xl flex flex-col overflow-y-auto custom-scrollbar">
                    
                    {/* Row 1: 定义 */}
                    <div className="flex border-b border-white/10 py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            定义
                        </div>
                        <div className="flex-1 text-white/90 text-[1.25rem] leading-relaxed tracking-wide">
                            围绕品牌专属卖点建立认知领域，推动行业评价标准向品牌靠拢。
                        </div>
                    </div>

                    {/* Row 2: 词条 */}
                    <div className="flex border-b border-white/10 py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            词条
                        </div>
                        <div className="flex-1 flex flex-wrap gap-4">
                            {['成分纯净0添加的液体钙推荐', '不依赖胃酸的液体钙推荐', '科学补钙吸收好的补钙产品推荐'].map((tag, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl text-zinc-100 text-[1.15rem] flex items-center shadow-sm">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 3: 时间规划 */}
                    <div className="flex border-b border-white/10 py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            时间规划
                        </div>
                        <div className="flex-1 text-white/90 text-[1.25rem] leading-relaxed tracking-wide">
                            整个周期
                        </div>
                    </div>

                    {/* Row 4: 核心策略 */}
                    <div className="flex py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            核心策略
                        </div>
                        <div className="flex-1 text-white/90 text-[1.25rem] leading-relaxed tracking-wide text-justify">
                            <span className="font-bold text-blue-400 mb-2 block tracking-wider">“立标准（定义趋势）”</span>
                            在该领域，迪巧没有实质性的防守压力。此处的干预不应以强求短期转化为目的，而应视为一种常态化的供给动作。<br/><br/>
                            在整个周期内，品牌只需平稳输出专业的知识和应用场景，致力于<strong className="text-white mx-1">“立标准、定义趋势”</strong>，推动整个行业对话语体系的理解持续向迪巧的定义靠拢即可。
                        </div>
                    </div>

                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 4px; }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.4); }
            `}} />
        </div>
    );
}
