import React from 'react';

export default function Page_BrandChannel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header */}
            <div className="w-full px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-[36px] font-bold text-zinc-100 tracking-wider">商业模式与消费者触达体系</h1>
            </div>

            {/* Content Grid */}
            <div className="flex-1 w-full px-16 pb-8 relative z-10 grid grid-cols-12 gap-6 items-stretch min-h-0">

                {/* Left Column */}
                <div className="col-span-5 flex flex-col gap-6 h-full min-h-0 justify-between">

                    {/* Top Box: Mix Ratio */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex-1 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#004CE5] opacity-[0.08] blur-[60px] rounded-full"></div>

                        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3 shrink-0">
                            <span className="w-2 h-7 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.5)]"></span>
                            胃肠 OTC 渠道结构（2024）
                        </h2>

                        <div className="flex-1 flex items-center justify-around gap-8">
                            <div className="relative w-44 h-44 flex items-center justify-center shrink-0">
                                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#004CE5" strokeWidth="4.8"
                                        pathLength="100" strokeDasharray="38 62" strokeDashoffset="0" strokeLinecap="round"
                                        className="drop-shadow-[0_0_8px_rgba(0,76,229,0.6)]" />
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#64748b" strokeWidth="4.8"
                                        pathLength="100" strokeDasharray="26 74" strokeDashoffset="-38" strokeLinecap="round" />
                                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#f43f5e" strokeWidth="4.8"
                                        pathLength="100" strokeDasharray="36 64" strokeDashoffset="-64" strokeLinecap="round"
                                        className="drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-black text-white tracking-tight leading-none">OTC</span>
                                    <span className="text-sm text-blue-400 font-bold tracking-widest mt-1.5">消费者自主决策</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-4.5 h-4.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.6)] shrink-0"></span>
                                    <span className="text-xl font-bold text-white">连锁药店 约 38%</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-4.5 h-4.5 rounded-full bg-[#64748b] shrink-0"></span>
                                    <span className="text-xl font-bold text-zinc-300">单体药店 约 26%</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-4.5 h-4.5 rounded-full bg-[#f43f5e] shadow-[0_0_8px_rgba(244,63,94,0.6)] shrink-0"></span>
                                    <span className="text-xl font-bold text-zinc-300">线上药店 / 电商 约 36%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Box: Quadrant */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 flex-1 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 opacity-[0.06] blur-[60px] rounded-full"></div>

                        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3 shrink-0">
                            <span className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                            触达效能定位象限
                        </h2>

                        <div className="flex-1 w-full relative flex items-center justify-center">
                            <svg className="w-full max-w-[420px] h-[200px]" viewBox="0 0 160 100">
                                <line x1="14" y1="50" x2="154" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
                                <line x1="84" y1="10" x2="84" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 2" />
                                <line x1="14" y1="90" x2="154" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                <line x1="14" y1="10" x2="14" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                <path d="M154 88 L158 90 L154 92 Z" fill="rgba(255,255,255,0.4)" />
                                <path d="M12 10 L14 6 L16 10 Z" fill="rgba(255,255,255,0.4)" />

                                <text fill="rgba(255,255,255,0.6)" fontSize="10" fontWeight="bold" textAnchor="middle">
                                    <tspan x="7" y="30">认</tspan>
                                    <tspan x="7" y="42">知</tspan>
                                    <tspan x="7" y="54">影</tspan>
                                    <tspan x="7" y="66">响</tspan>
                                </text>
                                <text x="154" y="98" fill="rgba(255,255,255,0.6)" fontSize="10" fontWeight="bold" textAnchor="end">成交即时性 ➔</text>

                                <circle cx="45" cy="28" r="14" fill="#f43f5e" fillOpacity="0.85" className="drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
                                <text x="45" y="31.5" fill="#fff" fontSize="8" fontWeight="black" textAnchor="middle">内容/GEO</text>

                                <circle cx="100" cy="62" r="14" fill="#64748b" fillOpacity="0.85" />
                                <text x="100" y="65.5" fill="#fff" fontSize="8" fontWeight="black" textAnchor="middle">电商/O2O</text>

                                <circle cx="138" cy="28" r="16" fill="#004CE5" fillOpacity="0.85" className="drop-shadow-[0_0_10px_rgba(0,76,229,0.8)]" />
                                <text x="138" y="31.5" fill="#fff" fontSize="8" fontWeight="black" textAnchor="middle">店员推荐</text>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Column: Three cards */}
                <div className="col-span-7 flex flex-col gap-4 h-full min-h-0 justify-between">

                    {/* Card 1 */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-row gap-6 justify-between items-stretch flex-1 hover:border-white/20 transition-all duration-300">
                        <div className="w-[380px] flex flex-col justify-between gap-3 border-r border-white/10 pr-6 shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(0,76,229,0.3)] shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[24px] font-bold text-white">线下药店与店员推荐</h3>
                                    <span className="text-sm font-black text-blue-400 tracking-wider mt-0.5 inline-block">核心 // 连锁 · 单体 · 柜台推荐</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-1 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[18px] font-bold text-center shrink-0">进店</div>
                                <svg className="w-4 h-4 text-blue-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-blue-600/10 border border-blue-500/30 px-2 py-1.5 rounded text-white text-[18px] font-bold text-center shrink-0 shadow-[0_0_6px_rgba(59,130,246,0.2)]">店员</div>
                                <svg className="w-4 h-4 text-blue-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[18px] font-bold text-center shrink-0">成交</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-4 pl-6 border-l border-white/5">
                            <div className="flex items-start gap-3">
                                <span className="text-[#004CE5] mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">柜台决胜：</strong>胃药 OTC 的成交大多发生在柜台前，行业调研显示店员推荐能改变多数消费者原本的品牌选择。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#004CE5] mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">内容的作用：</strong>进店前若已建立「我这种情况对应养胃舒」的判断，被换成别家的概率会明显下降。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-row gap-6 justify-between items-stretch flex-1 hover:border-white/20 transition-all duration-300">
                        <div className="w-[380px] flex flex-col justify-between gap-3 border-r border-white/10 pr-6 shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-600/20 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[24px] font-bold text-white">线上药店与即时零售</h3>
                                    <span className="text-sm font-black text-zinc-400 tracking-wider mt-0.5 inline-block">增量 // 电商 · O2O · 网上药店</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-1 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[18px] font-bold text-center shrink-0">搜索</div>
                                <svg className="w-4 h-4 text-zinc-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-850 border border-white/15 px-2 py-1.5 rounded text-white text-[18px] font-bold text-center shrink-0">比对</div>
                                <svg className="w-4 h-4 text-zinc-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[18px] font-bold text-center shrink-0">下单</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-4 pl-6 border-l border-white/5">
                            <div className="flex items-start gap-3">
                                <span className="text-zinc-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">线上已过三成：</strong>胃肠道 OTC 的线上销售占比已接近四成，网上药店与即时零售是增长最快的部分。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-zinc-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">线上没有店员：</strong>用户只能靠搜索结果、详情页和评价自己判断，AI 给出的答案会直接影响下单。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-row gap-6 justify-between items-stretch flex-1 hover:border-white/20 transition-all duration-300">
                        <div className="w-[380px] flex flex-col justify-between gap-3 border-r border-white/10 pr-6 shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.3)] shrink-0">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[24px] font-bold text-white">搜索 · 问诊 · 社媒科普</h3>
                                    <span className="text-sm font-black text-rose-400 tracking-wider mt-0.5 inline-block">前置 // 症状自查 · AI 问答 · 内容种草</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-1 bg-black/40 border border-white/5 p-2 rounded-xl">
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[18px] font-bold text-center shrink-0">症状</div>
                                <svg className="w-4 h-4 text-rose-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-rose-600/10 border border-rose-500/30 px-2 py-1.5 rounded text-white text-[18px] font-bold text-center shrink-0 shadow-[0_0_6px_rgba(244,63,94,0.2)]">判断</div>
                                <svg className="w-4 h-4 text-rose-500/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <div className="bg-zinc-900 border border-white/10 px-2 py-1.5 rounded text-zinc-300 text-[18px] font-bold text-center shrink-0">选药</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-4 pl-6 border-l border-white/5">
                            <div className="flex items-start gap-3">
                                <span className="text-rose-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">先查再买：</strong>多数胃药购买者会先查说明书或第三方信息；线上问诊后直接下单，也已经成为常见路径。
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-rose-400 mt-1 shrink-0 text-xl">●</span>
                                <p className="text-zinc-300 text-xl leading-relaxed text-justify">
                                    <strong className="text-white font-bold">GEO 意图：</strong>把「我这是什么情况、该选哪一个」答对，才能在店员和详情页之前先影响判断。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
