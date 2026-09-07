import React from 'react';
import { Search, AlertTriangle, Activity, Radar } from 'lucide-react';

export default function Page_NegativeInfoSearch() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-3 px-10 lg:pt-4 lg:pb-4 lg:px-12 xl:pt-5 xl:pb-5 xl:px-16 animate-fade-in">
            {/* Background Ambient Glows - Sleek Dark Mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute right-[-5%] top-[15%] w-[600px] h-[600px] bg-[#004CE5]/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
            <div className="absolute left-[-5%] bottom-[5%] w-[600px] h-[600px] bg-red-600/[0.04] rounded-full blur-[160px] pointer-events-none z-0"></div>

            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full relative z-10 gap-3 lg:gap-4 xl:gap-5">
                
                {/* Header Section - Positioned higher, size exactly 32px */}
                <div className="shrink-0 pt-1 lg:pt-2">
                    <h1 className="text-[32px] font-black text-white tracking-widest leading-none">
                        如何查找负面信息
                    </h1>
                </div>

                {/* Main Content: Split 6:6 layout for maximum visual scale */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 min-h-0 items-stretch">
                    
                    {/* Left Column: Extremely Large Text Copy (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-4 lg:gap-5 min-h-0">
                        
                        {/* Section 1: 监控难点 */}
                        <div className="flex-1 flex flex-col gap-3 bg-zinc-950/70 border-2 border-red-500/20 hover:border-red-500/40 rounded-3xl p-5 lg:p-6 xl:p-7 transition-all duration-300 relative group min-h-0">
                            {/* Category Header - Removed Icon */}
                            <div className="text-red-500 font-black text-[22px] lg:text-[25px] xl:text-[28px] tracking-wide border-b-2 border-red-500/20 pb-2.5 shrink-0">
                                监控难点
                            </div>

                            {/* Difficulties content */}
                            <div className="flex-1 flex flex-col justify-evenly gap-2 lg:gap-3">
                                {/* Bullet 1 */}
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-white font-black text-[18px] lg:text-[20px] xl:text-[23px] leading-snug flex items-center gap-2 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]"></span>
                                        产生速度极快
                                    </h4>
                                    <p className="text-zinc-300 text-[15px] lg:text-[16.5px] xl:text-[18.5px] leading-relaxed pl-4 font-bold">
                                        互联网上的信息每分每秒都在更新。今天清理干净了，明天可能又会冒出一条夸大功效的帖子，或者一篇把三九养胃舒颗粒写成三九胃泰颗粒 / 别家养胃药的科普贴。
                                    </p>
                                </div>
                                
                                {/* Bullet 2 */}
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-white font-black text-[18px] lg:text-[20px] xl:text-[23px] leading-snug flex items-center gap-2 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]"></span>
                                        AI 抓取速度极快
                                    </h4>
                                    <p className="text-zinc-300 text-[15px] lg:text-[16.5px] xl:text-[18.5px] leading-relaxed pl-4 font-bold">
                                        大模型随时可能把这些新冒出来的错误抓进答案里。一旦 AI 输出功效夸大、品名错认或禁忌写错，用户会当场形成“吃错了 / 不靠谱”的印象，购药决策也被带偏。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: 我们的应对机制 - Layout optimized to avoid vertical truncation */}
                        <div className="flex-1 flex flex-col gap-3 bg-zinc-950/70 border-2 border-blue-500/20 hover:border-[#004CE5]/40 rounded-3xl p-5 lg:p-6 xl:p-7 transition-all duration-300 relative group min-h-0">
                            {/* Category Header - Removed Icon */}
                            <div className="text-blue-400 font-black text-[22px] lg:text-[25px] xl:text-[28px] tracking-wide border-b-2 border-blue-500/20 pb-2.5 shrink-0">
                                我们的应对机制
                            </div>

                            {/* Response content */}
                            <div className="flex-1 flex flex-col justify-evenly gap-2 lg:gap-3">
                                {/* Bullet 1 */}
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-white font-black text-[18px] lg:text-[20px] xl:text-[23px] leading-snug flex items-center gap-2 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.9)]"></span>
                                        高频实时监测
                                    </h4>
                                    <p className="text-zinc-300 text-[15px] lg:text-[16.5px] xl:text-[18.5px] leading-relaxed pl-4 font-bold">
                                        因为 GEO 优化的核心在于“纠偏”，所以我们必须像雷达一样死死盯住 AI。我们会每天进行 1 到 3 次的实时搜索抽查，看看 AI 现在的回答有没有“跑偏”。
                                    </p>
                                </div>

                                {/* Bullet 2 */}
                                <div className="flex flex-col gap-1">
                                    <h4 className="text-white font-black text-[18px] lg:text-[20px] xl:text-[23px] leading-snug flex items-center gap-2 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.9)]"></span>
                                        发现即溯源
                                    </h4>
                                    <p className="text-zinc-300 text-[15px] lg:text-[16.5px] xl:text-[18.5px] leading-relaxed pl-4 font-bold">
                                        只要在当天的搜索中发现 AI 开始功效夸大、品名错认（与三九胃泰混淆）或禁忌写错，第一时间存档留存并溯源引用。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: High-Contrast Static Monitoring Center (6 cols) */}
                    <div className="lg:col-span-6 flex flex-col min-h-0">
                        <div className="flex-1 relative flex items-center justify-center bg-zinc-950/40 border-2 border-white/10 rounded-[36px] overflow-hidden p-6 shadow-2xl min-h-[460px] lg:min-h-0">
                            
                            {/* Scanning Grid Background - Pure clean & high contrast */}
                            <div className="absolute inset-0 bg-[radial-gradient(#004ce515_2.5px,transparent_2.5px)] bg-[size:36px_36px] opacity-60 z-0 pointer-events-none"></div>

                            {/* Concentric Radar Rings - Simple, Thick, Sharp */}
                            <div className="absolute w-[200px] h-[200px] border-2 border-white/10 rounded-full z-0 pointer-events-none"></div>
                            <div className="absolute w-[360px] h-[360px] border-2 border-[#004CE5]/20 rounded-full z-0 pointer-events-none"></div>
                            <div className="absolute w-[520px] h-[520px] border-2 border-white/5 rounded-full z-0 pointer-events-none"></div>

                            {/* Solid Connective Ring (Static visual bridge connecting the 4 nodes) - Reverted to Perfect Circle */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle 
                                    cx="300" 
                                    cy="250" 
                                    r="220" 
                                    fill="none" 
                                    stroke="#004CE5" 
                                    strokeWidth="3.5" 
                                    strokeOpacity="0.4"
                                />
                            </svg>

                            {/* ════════════ NODE 1: Dealer Pricing Risk (Top-Left) ════════════ */}
                            <div className="absolute top-[8%] left-[2%] z-20 flex items-center gap-4 lg:gap-5 xl:gap-6 bg-zinc-900 border-2 border-red-500 rounded-3xl pt-4 pb-4 pl-12 pr-6 lg:pt-5 lg:pb-5 lg:pl-14 lg:pr-7 xl:pt-5.5 xl:pb-5.5 xl:pl-16 xl:pr-8 shadow-[0_8px_32px_rgba(0,0,0,0.7)] whitespace-nowrap">
                                <div className="w-14 h-14 rounded-full bg-red-950 flex items-center justify-center shrink-0 border-2 border-red-500">
                                    <AlertTriangle className="w-7 h-7 text-red-500" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[20px] lg:text-[23px] xl:text-[26px] font-black text-white">
                                        功效夸大编造
                                    </span>
                                    <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-black text-red-500">
                                        ● 触发功效预警
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ NODE 2: Construction Quality Reviews (Top-Right) ════════════ */}
                            <div className="absolute top-[8%] right-[2%] z-20 flex items-center gap-4 lg:gap-5 xl:gap-6 bg-zinc-900 border-2 border-red-500 rounded-3xl pt-4 pb-4 pl-12 pr-6 lg:pt-5 lg:pb-5 lg:pl-14 lg:pr-7 xl:pt-5.5 xl:pb-5.5 xl:pl-16 xl:pr-8 shadow-[0_8px_32px_rgba(0,0,0,0.7)] whitespace-nowrap">
                                <div className="w-14 h-14 rounded-full bg-red-950 flex items-center justify-center shrink-0 border-2 border-red-500">
                                    <AlertTriangle className="w-7 h-7 text-red-500" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[20px] lg:text-[23px] xl:text-[26px] font-black text-white">
                                        品名张冠李戴
                                    </span>
                                    <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-black text-red-500">
                                        ● 触发产品预警
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ NODE 3: Active AI Crawler Crawling (Bottom-Right) ════════════ */}
                            <div className="absolute bottom-[8%] right-[2%] z-20 flex items-center gap-4 lg:gap-5 xl:gap-6 bg-zinc-900 border-2 border-blue-500 rounded-3xl pt-4 pb-4 pl-12 pr-6 lg:pt-5 lg:pb-5 lg:pl-14 lg:pr-7 xl:pt-5.5 xl:pb-5.5 xl:pl-16 xl:pr-8 shadow-[0_8px_32px_rgba(0,0,0,0.7)] whitespace-nowrap">
                                <div className="w-14 h-14 rounded-full bg-blue-950 flex items-center justify-center shrink-0 border-2 border-blue-500">
                                    <Search className="w-7 h-7 text-blue-400" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[20px] lg:text-[23px] xl:text-[26px] font-black text-white">
                                        大模型数据抓取
                                    </span>
                                    <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-black text-blue-400">
                                        ● 全天实时监测
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ NODE 4: All-Web Knowledge Fragments (Bottom-Left) ════════════ */}
                            <div className="absolute bottom-[8%] left-[2%] z-20 flex items-center gap-4 lg:gap-5 xl:gap-6 bg-zinc-900 border-2 border-blue-500 rounded-3xl pt-4 pb-4 pl-12 pr-6 lg:pt-5 lg:pb-5 lg:pl-14 lg:pr-7 xl:pt-5.5 xl:pb-5.5 xl:pl-16 xl:pr-8 shadow-[0_8px_32px_rgba(0,0,0,0.7)] whitespace-nowrap">
                                <div className="w-14 h-14 rounded-full bg-blue-950 flex items-center justify-center shrink-0 border-2 border-blue-500">
                                    <Activity className="w-7 h-7 text-blue-400" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[20px] lg:text-[23px] xl:text-[26px] font-black text-white">
                                        全网知识碎片
                                    </span>
                                    <span className="text-[14px] lg:text-[16px] xl:text-[18px] font-black text-blue-400">
                                        ● 来源合规纠偏
                                    </span>
                                </div>
                            </div>

                            {/* ════════════ CENTER HUB: AI Corrective Radar (Much Bigger, High-Contrast) ════════════ */}
                            <div className="relative w-44 h-44 lg:w-48 h-48 xl:w-52 h-52 rounded-full bg-[#004CE5] shadow-[0_0_50px_rgba(0,76,229,0.6)] flex flex-col items-center justify-center border-[5px] border-white z-20">
                                <Radar className="w-11 h-11 lg:w-13 h-13 text-white mb-2" />
                                <span className="text-[22px] lg:text-[26px] xl:text-[30px] font-black text-white tracking-widest leading-none">
                                    纠偏雷达
                                </span>
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}
