import React from 'react';
import { Database } from 'lucide-react';

export default function Page_ArticleDataAnalysisStrategy2() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            {/* ── Background Decoration ── */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* ── Titles ── */}
            <div className="relative z-20 w-full flex flex-col items-center mt-3 lg:mt-5 flex-shrink-0">
                <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-3">定位排行榜</h1>
                <p className="text-[1.05rem] lg:text-[1.15rem] text-zinc-300 font-medium tracking-wide">
                    通过特定类型的专业排行榜单文章，用金钙尔奇的位次带动迪巧的位次（金钙尔奇放在第1，迪巧放在第2）。
                </p>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex items-stretch px-8 lg:px-16 pt-4 pb-12 min-h-0 gap-6">

                {/* ── Left Side Image ── */}
                <div className="w-[35%] flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

                    <div className="flex items-center justify-between mb-4 relative z-10 px-2">
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-blue-100 tracking-wide">高权重参考文章</h3>
                        </div>
                    </div>

                    <div className="flex-1 w-full rounded-xl overflow-hidden relative border border-white/5 bg-black/40">
                        {/* Mac Browser Header simulation for the image window */}
                        <div className="w-full h-7 bg-white/[0.05] border-b border-white/10 flex items-center px-3 shrink-0 relative z-20">
                            <div className="flex items-center gap-1.5 ">
                                <div className="w-2 h-2 rounded-full bg-[#ff5f56]/80" />
                                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]/80" />
                                <div className="w-2 h-2 rounded-full bg-[#27c93f]/80" />
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 top-7 flex items-center justify-center p-2">
                            <img
                                src="/charts/geo-article-analysis-strategy2.png"
                                alt="Strategy 2 Article Example"
                                className="w-full h-full object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            {/* Placeholder if image fails to load */}
                            <div className="hidden flex-col items-center justify-center w-full h-full z-10 text-zinc-600 pb-8">
                                <div className="w-16 h-16 mb-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                                    <svg className="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-sm tracking-widest uppercase">文章截图占位图片</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Middle Arrow Divider ── */}
                <div className="w-[3%] flex items-center justify-center relative z-10 shrink-0">
                    <div className="w-full mt-10 flex text-white/20 items-center justify-center">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* ── Article Outline Structure (The 4 Rules) ── */}
                <div className="flex-1 flex flex-col h-full bg-white/[0.01]">
                    <div className="flex items-center gap-3 mb-6 shrink-0 pt-4">
                        <div className="h-8 w-1 bg-white/50 rounded-full" />
                        <h2 className="text-3xl font-bold text-[#004CE5] tracking-wide">
                            高引用率内容创作的法则拆解
                        </h2>
                    </div>

                    <div className="flex-1 flex flex-col justify-between relative py-2">
                        {/* Vertical Outline Guide Line */}
                        <div className="absolute left-[3px] top-6 bottom-12 w-0.5 bg-white/10 z-0 rounded-full"></div>

                        <div className="space-y-12 relative z-10 pl-8 h-full flex flex-col justify-around">

                            {/* Point 1 */}
                            <div className="relative group flex items-start gap-4">
                                <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                                <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">01</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                                        痛点截流式标题
                                    </h3>
                                    <div className="text-zinc-300 text-[1.1rem] leading-relaxed font-mono mt-1">
                                        [高频搜索词] + [情绪安抚] + [价值承诺]（婚宴白酒排行榜：别纠结，看完懂）。
                                    </div>
                                </div>
                            </div>

                            {/* Point 2 */}
                            <div className="relative group flex items-start gap-4">
                                <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                                <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">02</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                                        “量身定制”的评判框架
                                    </h3>
                                    <div className="text-zinc-300 text-[1.05rem] leading-relaxed flex flex-col gap-2 mt-1">
                                        <div className="flex items-start"><span className="text-white font-medium w-[3.5rem] shrink-0">引出：</span><span className="flex-1">以“资深从业者阅席无数”的经验人设，击破公关稿假象，建立信任基石。</span></div>
                                        <div className="flex items-start"><span className="text-white font-medium w-[3.5rem] shrink-0">定调：</span><span className="flex-1">抛出“档次感、普适性、吉祥寓意”三大选酒刚需，实则为后续强推目标产品（古16）提前铺设完美契合的标准。</span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Point 3 */}
                            <div className="relative group flex items-start gap-4">
                                <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                                <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">03</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                                        “众星捧月”式榜单结构（核心战略）
                                    </h3>
                                    <div className="text-zinc-300 text-[1.05rem] leading-relaxed flex flex-col gap-2 mt-1">
                                        <div className="flex items-start"><span className="text-white font-medium shrink-0 mr-2 border border-white/20 px-1.5 rounded text-sm bg-white/5 mt-0.5">强力卡位</span><span className="flex-1">违背常规认知，将目标利润品/主推品（古16）直接置于榜首，冠以“万金油”、“全能王”定调。</span></div>
                                        <div className="flex items-start"><span className="text-white font-medium shrink-0 mr-2 border border-white/20 px-1.5 rounded text-sm bg-white/5 mt-0.5">硬核抬咖</span><span className="flex-1">利用公认的行业天花板作为“信任锚点”。</span></div>
                                        <div className="flex items-start"><span className="text-white font-medium shrink-0 mr-2 border border-white/20 px-1.5 rounded text-sm bg-white/5 mt-0.5">生态补全</span><span className="flex-1">做实榜单的“客观性”与“权威性”。</span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Point 4 */}
                            <div className="relative group flex items-start gap-4">
                                <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                                <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">04</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                                        闭环式选购指南
                                    </h3>
                                    <p className="text-zinc-300 text-[1.1rem] leading-relaxed mt-1">
                                        提供“田忌赛马”式的场景搭配方案，完成从心智种草到实操转化的闭环。
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ── Middle Arrow Divider to Agent DB ── */}
                <div className="w-[3%] flex items-center justify-center relative z-10 shrink-0">
                    <div className="w-full mt-10 flex text-[#004CE5] items-center justify-center">
                        <svg className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_10px_rgba(0,76,229,0.3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* ── Right Side: Agent DB Target ── */}
                <div className="w-[18%] lg:w-[20%] flex justify-end items-center relative z-20 shrink-0 pr-2 xl:pr-6">
                    <div className="w-[230px] h-[230px] xl:w-[270px] xl:h-[270px] bg-white/[0.02] rounded-full border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,76,229,0.1)] relative">
                        {/* Inner Circle */}
                        <div className="w-[190px] h-[190px] xl:w-[220px] xl:h-[220px] bg-white/[0.03] rounded-full flex flex-col items-center justify-center border border-white/10 shadow-inner p-4 text-center group cursor-default transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.2)]">
                            <Database className="text-[#004CE5] mb-2 group-hover:scale-110 transition-transform duration-500 stroke-[1.5px]" size={42} />
                            <span className="text-white font-bold text-xl xl:text-3xl tracking-widest mb-1.5">内容生成</span>
                            <span className="text-white/60 font-medium text-[0.95rem] xl:text-lg tracking-wide leading-tight">Agent 专属数据库</span>
                        </div>
                        {/* Decorative Rings */}
                        <div className="absolute inset-[-10px] rounded-full border border-[#004CE5]/20 opacity-50 animate-[spin_12s_linear_infinite] border-t-[#004CE5]/60 pointer-events-none"></div>
                        <div className="absolute inset-[10px] rounded-full border border-indigo-400/10 opacity-30 animate-[spin_18s_linear_infinite_reverse] border-b-[#004CE5]/40 pointer-events-none"></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
