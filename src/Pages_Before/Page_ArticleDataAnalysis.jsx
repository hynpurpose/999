import React from 'react';
import { Database } from 'lucide-react';

export default function Page_ArticleDataAnalysis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Titles ── */}
            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-6 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">文章数据清洗分析</h1>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex items-stretch px-8 lg:px-16 pt-6 pb-12 min-h-0 gap-6">

                {/* ── Left Side Image ── */}
                <div className="w-[35%] flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

                    <div className="flex items-center justify-between mb-4 relative z-10 px-2">
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-blue-100 tracking-wide">高引用文章列表</h3>
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
                                src="/charts/geo-high-citation-list.png"
                                alt="High Citation Articles List"
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
                                <span className="text-sm tracking-widest uppercase">高引用文章列表示意图</span>
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

                {/* ── Article Outline Structure (The 5 Rules) ── */}
                <div className="flex-1 flex flex-col h-full bg-white/[0.01]">
                    <div className="flex items-center gap-3 mb-6 shrink-0">
                        <div className="h-8 w-1 bg-white/50 rounded-full" />
                        <h2 className="text-3xl font-bold text-[#004CE5] tracking-wide">
                            高引用率内容创作的5大核心法则
                        </h2>
                    </div>

                    <div className="flex-1 flex flex-col justify-center relative">
                        {/* Vertical Outline Guide Line */}
                        <div className="absolute left-[3px] top-6 bottom-12 w-0.5 bg-white/10 z-0 rounded-full"></div>

                        <div className="space-y-10 relative z-10 pl-8">

                            {/* Point 1 */}
                            <div className="relative group flex items-start gap-4">
                                <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                                <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">01</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                                        高爆款标题公式
                                    </h3>
                                    <div className="text-zinc-300 text-lg leading-relaxed font-mono mt-1">
                                        [年份] + [品类] + 评测/对比 + [核心重点]
                                    </div>
                                </div>
                            </div>

                            {/* Point 2 */}
                            <div className="relative group flex items-start gap-4">
                                <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                                <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">02</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                                        “沙漏型”文章结构
                                    </h3>
                                    <div className="text-zinc-300 text-lg leading-relaxed flex flex-col gap-1.5 mt-1">
                                        <div className="flex items-start"><span className="text-white font-medium w-[3.5rem] shrink-0">引流：</span><span>埋关键词，点主题</span></div>
                                        <div className="flex items-start"><span className="text-white font-medium w-[3.5rem] shrink-0">科普：</span><span>输出评测标准知识</span></div>
                                        <div className="flex items-start"><span className="text-white font-medium w-[3.5rem] shrink-0">主推：</span><span>详情介绍核心优势</span></div>
                                        <div className="flex items-start"><span className="text-white font-medium w-[3.5rem] shrink-0">陪跑：</span><span>嵌入多款竞品对比</span></div>
                                    </div>
                                </div>
                            </div>

                            {/* Point 3 */}
                            <div className="relative group flex items-start gap-4">
                                <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                                <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">03</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                                        段落字数控制
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed mt-1">
                                        每段控制 <span className="text-white font-bold">300字内</span>，高度结构化以降低AI提取摘要难度。
                                    </p>
                                </div>
                            </div>

                            {/* Point 4 */}
                            <div className="relative group flex items-start gap-4">
                                <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                                <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">04</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                                        构建专业权威度
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed mt-1">
                                        引入 <strong className="text-white font-medium">官方数据背书</strong> 并加配高清大图，提高大模型的采信率。
                                    </p>
                                </div>
                            </div>

                            {/* Point 5 */}
                            <div className="relative group flex items-start gap-4">
                                <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]"></div>
                                <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">05</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                                        AI偏好的平台布局
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed mt-1">
                                        AI更倾向提取 “排名/评测类” 垂直网站流媒体作为推荐背书参考。
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
