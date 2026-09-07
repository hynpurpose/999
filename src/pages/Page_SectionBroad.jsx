import React from 'react';

export default function Page_SectionBroad() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            {/* Centered H1 without blue bar */}
            <div className="relative z-20 w-full pt-10 shrink-0 flex flex-col items-center justify-center">
                <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-widest text-center">
                    板块二：综合大词
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
                            搜索需求高、竞争最激烈，但品牌当前存在感较弱的行业大词。
                        </div>
                    </div>

                    {/* Row 2: 词条 */}
                    <div className="flex border-b border-white/10 py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            词条
                        </div>
                        <div className="flex-1 flex flex-wrap gap-4">
                            {['液体钙推荐', '孕妇补钙产品品牌推荐', '补钙产品品牌排行榜'].map((tag, idx) => (
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
                            放在整个规划的后期
                        </div>
                    </div>

                    {/* Row 4: 核心策略 */}
                    <div className="flex py-8">
                        <div className="w-[20%] xl:w-[15%] shrink-0 text-white font-bold text-[1.4rem] flex items-start gap-3">
                            <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0 mt-2.5" />
                            核心策略
                        </div>
                        <div className="flex-1 text-white/90 text-[1.25rem] leading-relaxed tracking-wide text-justify">
                            <span className="font-bold text-blue-400 mb-2 block tracking-wider">“搭便车（借势渗透）”</span>
                            这是破局中难点中的难点。面对海量语料高墙，按部就班地正面强攻毫无胜算。因此，在时间规划上，这部分高地攻坚必须放在整个规划的后期（待板块一的基础打牢之后）。在战术上，必须出奇招致胜——采取“搭便车（借势渗透）”的核心策略。主动制造包含行业头部巨头（如钙尔奇、金钙尔奇、斯维诗）的深度横评合集，借助市场已形成的内容搜索权重，巧妙地将迪巧植入其中，从而强行进入用户与AI的通用候选视野。
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
