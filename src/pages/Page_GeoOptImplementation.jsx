import React from 'react';

export default function Page_GeoOptImplementation() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-4 pb-4 px-6 lg:pt-5 lg:pb-5 lg:px-8 xl:pt-5 xl:pb-6 xl:px-10 animate-fade-in">
            {/* Background Ambient Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute right-[-10%] top-[20%] w-[500px] h-[500px] bg-[#004CE5]/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
            <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-[#004CE5]/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3 lg:gap-4 xl:gap-5">

                {/* Header Section */}
                <div className="shrink-0 flex flex-col gap-1.5">
                    <h1 className="text-[34px] lg:text-[40px] xl:text-[46px] font-black text-white tracking-widest leading-tight">
                        可量化且合规的GEO优化如何实现
                    </h1>
                </div>

                {/* Horizontal Flow Container with 4 Steps */}
                <div className="flex-1 flex items-stretch justify-between gap-1 xl:gap-2 min-h-0 py-2">

                    {/* Step 1 */}
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-4 lg:p-5 xl:p-6 transition-all duration-300 relative group">
                        {/* Unified Card Header: AI mechanism label + lighter Step number placed after it */}
                        <div className="flex items-baseline gap-2 mb-3 border-b border-white/10 pb-2.5 shrink-0">
                            <span className="text-zinc-300 font-extrabold text-[14px] lg:text-[16px] xl:text-[18px] tracking-wide">
                                AI真实的搜索机制
                            </span>
                            <span className="text-[15px] lg:text-[18px] xl:text-[21px] font-bold font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 leading-none">
                                01
                            </span>
                        </div>

                        {/* AI Mechanism block details */}
                        <div className="flex-1 flex flex-col gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 lg:p-4 hover:bg-white/[0.04] transition-colors duration-300 justify-start">
                            <h4 className="text-white font-black text-[16px] lg:text-[18.5px] xl:text-[21px] leading-snug shrink-0 h-[48px] lg:h-[56px] xl:h-[64px] flex items-start">
                                把“单个关键词”当成“复杂问题场景”
                            </h4>
                            <p className="text-zinc-400 text-[13.5px] lg:text-[15.5px] xl:text-[17.5px] leading-relaxed">
                                用户搜“脾胃虚寒型慢性胃炎吃什么药”，AI 不是去傻傻匹配这几个字，而是去猜用户是想找养胃中成药、想看分型推荐、想做对比，还是怕选错药。
                            </p>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-2">
                            <div className="h-5 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-2 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3.5 lg:p-4 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40 justify-start">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>

                            {/* Simplified Strategy subhead */}
                            <div className="flex items-center gap-2 text-[#004CE5] font-extrabold text-[12.5px] lg:text-[14px] xl:text-[15.5px] tracking-wider border-b border-[#004CE5]/10 pb-1.5 shrink-0 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的应对策略
                            </div>

                            <h4 className="text-[#004CE5] font-black text-[16px] lg:text-[18.5px] xl:text-[21px] leading-snug shrink-0 z-10 h-[48px] lg:h-[56px] xl:h-[64px] flex items-start">
                                全场景覆盖，不做关键词堆砌
                            </h4>
                            <p className="text-zinc-200 text-[13.5px] lg:text-[15.5px] xl:text-[17.5px] leading-relaxed z-10">
                                我们的目的不是像传统作弊那样在一篇文章里狂塞关键词（不投毒），而是围绕用户“选、比、防雷”等真实诉求，提供高质量的标准答案。
                            </p>
                        </div>
                    </div>

                    {/* Step Connection Line 1 */}
                    <div className="shrink-0 flex flex-col justify-center items-center w-3 xl:w-5">
                        <div className="w-full h-[2px] bg-gradient-to-r from-[#004CE5]/70 to-[#004CE5]/10 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)] animate-pulse"></div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-4 lg:p-5 xl:p-6 transition-all duration-300 relative group">
                        {/* Unified Card Header: AI mechanism label + lighter Step number placed after it */}
                        <div className="flex items-baseline gap-2 mb-3 border-b border-white/10 pb-2.5 shrink-0">
                            <span className="text-zinc-300 font-extrabold text-[14px] lg:text-[16px] xl:text-[18px] tracking-wide">
                                AI真实的搜索机制
                            </span>
                            <span className="text-[15px] lg:text-[18px] xl:text-[21px] font-bold font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 leading-none">
                                02
                            </span>
                        </div>

                        {/* AI Mechanism block details */}
                        <div className="flex-1 flex flex-col gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 lg:p-4 hover:bg-white/[0.04] transition-colors duration-300 justify-start">
                            <h4 className="text-white font-black text-[16px] lg:text-[18.5px] xl:text-[21px] leading-snug shrink-0 h-[48px] lg:h-[56px] xl:h-[64px] flex items-start">
                                一个问题 → 多个“搜索方向”
                            </h4>
                            <div className="text-zinc-400 text-[13.5px] lg:text-[15.5px] xl:text-[17.5px] leading-relaxed">
                                面对同一个问题，AI 会兵分几路去查：
                                <div className="mt-1.5 space-y-1 pl-2">
                                    <span className="block text-zinc-300 font-semibold">
                                        ① 查分型（脾胃虚寒型胃炎怎么选药）
                                    </span>
                                    <span className="block text-zinc-300 font-semibold">
                                        ② 查对比（三九养胃舒和达喜哪个更合适）
                                    </span>
                                    <span className="block text-zinc-300 font-semibold">
                                        ③ 查避坑（养胃舒和三九胃泰颗粒有什么区别）
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-2">
                            <div className="h-5 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-2 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3.5 lg:p-4 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40 justify-start">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>

                            {/* Simplified Strategy subhead */}
                            <div className="flex items-center gap-2 text-[#004CE5] font-extrabold text-[12.5px] lg:text-[14px] xl:text-[15.5px] tracking-wider border-b border-[#004CE5]/10 pb-1.5 shrink-0 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的应对策略
                            </div>

                            <h4 className="text-[#004CE5] font-black text-[16px] lg:text-[18.5px] xl:text-[21px] leading-snug shrink-0 z-10 h-[48px] lg:h-[56px] xl:h-[64px] flex items-start">
                                根据AI的拆解路径，提前铺设对应内容
                            </h4>
                            <p className="text-zinc-200 text-[13.5px] lg:text-[15.5px] xl:text-[17.5px] leading-relaxed z-10">
                                AI 搜分型，我们就准备知识科普与分型选药；AI 搜对比，我们就发与达喜 / 同门品类的合规对照；AI 搜避坑，我们就铺设说明书口径与品名区分。让 AI 无论走哪条路，都能看到可核验的正面信息。
                            </p>
                        </div>
                    </div>

                    {/* Step Connection Line 2 */}
                    <div className="shrink-0 flex flex-col justify-center items-center w-3 xl:w-5">
                        <div className="w-full h-[2px] bg-gradient-to-r from-[#004CE5]/70 to-[#004CE5]/10 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)] animate-pulse"></div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-4 lg:p-5 xl:p-6 transition-all duration-300 relative group">
                        {/* Unified Card Header: AI mechanism label + lighter Step number placed after it */}
                        <div className="flex items-baseline gap-2 mb-3 border-b border-white/10 pb-2.5 shrink-0">
                            <span className="text-zinc-300 font-extrabold text-[14px] lg:text-[16px] xl:text-[18px] tracking-wide">
                                AI真实的搜索机制
                            </span>
                            <span className="text-[15px] lg:text-[18px] xl:text-[21px] font-bold font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 leading-none">
                                03
                            </span>
                        </div>

                        {/* AI Mechanism block details */}
                        <div className="flex-1 flex flex-col gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 lg:p-4 hover:bg-white/[0.04] transition-colors duration-300 justify-start">
                            <h4 className="text-white font-black text-[16px] lg:text-[18.5px] xl:text-[21px] leading-snug shrink-0 h-[48px] lg:h-[56px] xl:h-[64px] flex items-start">
                                在各大平台“抓取并拼凑”答案
                            </h4>
                            <p className="text-zinc-400 text-[13.5px] lg:text-[15.5px] xl:text-[17.5px] leading-relaxed">
                                AI 带着拆解好的方向，去全网各个它信任的平台寻找知识碎片，最后重组为一个完整的回答。
                            </p>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-2">
                            <div className="h-5 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-2 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3.5 lg:p-4 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40 justify-start">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>

                            {/* Simplified Strategy subhead */}
                            <div className="flex items-center gap-2 text-[#004CE5] font-extrabold text-[12.5px] lg:text-[14px] xl:text-[15.5px] tracking-wider border-b border-[#004CE5]/10 pb-1.5 shrink-0 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的应对策略
                            </div>

                            <h4 className="text-[#004CE5] font-black text-[16px] lg:text-[18.5px] xl:text-[21px] leading-snug shrink-0 z-10 h-[48px] lg:h-[56px] xl:h-[64px] flex items-start">
                                投其所好，在AI信任的阵地上布局好内容
                            </h4>
                            <p className="text-zinc-200 text-[13.5px] lg:text-[15.5px] xl:text-[17.5px] leading-relaxed z-10">
                                我们不瞎发通稿，而是根据数据监测，把专门定制的高质量语料，发到 AI 当前最喜欢引用的平台（如行业垂直媒体与社区、综合门户网站）上，让 AI 顺理成章地抓取采纳。
                            </p>
                        </div>
                    </div>

                    {/* Step Connection Line 3 */}
                    <div className="shrink-0 flex flex-col justify-center items-center w-3 xl:w-5">
                        <div className="w-full h-[2px] bg-gradient-to-r from-[#004CE5]/70 to-[#004CE5]/10 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)] animate-pulse"></div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex-1 flex flex-col bg-zinc-950/45 backdrop-blur border border-white/5 hover:border-[#004CE5]/20 hover:shadow-[0_0_30px_rgba(0,76,229,0.12)] rounded-2xl p-4 lg:p-5 xl:p-6 transition-all duration-300 relative group">
                        {/* Unified Card Header: AI mechanism label + lighter Step number placed after it */}
                        <div className="flex items-baseline gap-2 mb-3 border-b border-white/10 pb-2.5 shrink-0">
                            <span className="text-zinc-300 font-extrabold text-[14px] lg:text-[16px] xl:text-[18px] tracking-wide">
                                AI真实的搜索机制
                            </span>
                            <span className="text-[15px] lg:text-[18px] xl:text-[21px] font-bold font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 leading-none">
                                04
                            </span>
                        </div>

                        {/* AI Mechanism block details */}
                        <div className="flex-1 flex flex-col gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3.5 lg:p-4 hover:bg-white/[0.04] transition-colors duration-300 justify-start">
                            <h4 className="text-white font-black text-[16px] lg:text-[18.5px] xl:text-[21px] leading-snug shrink-0 h-[48px] lg:h-[56px] xl:h-[64px] flex items-start">
                                算法更迭，答案是动态变化的
                            </h4>
                            <p className="text-zinc-400 text-[13.5px] lg:text-[15.5px] xl:text-[17.5px] leading-relaxed">
                                AI 的回答不是一成不变的，随着新数据的加入，它推荐的品牌和引用的内容随时可能发生变化。
                            </p>
                        </div>

                        {/* Link between top and bottom in card */}
                        <div className="shrink-0 flex items-center justify-center my-2">
                            <div className="h-5 w-[1px] border-l border-dashed border-[#004CE5]/40 relative">
                                <div className="absolute bottom-0 -left-[2.5px] w-1.5 h-1.5 rounded-full bg-[#004CE5] shadow-[0_0_6px_rgba(0,76,229,0.8)]"></div>
                            </div>
                        </div>

                        {/* White-Hat Strategy block */}
                        <div className="flex-1 flex flex-col gap-2 bg-[#004CE5]/5 border border-[#004CE5]/25 rounded-xl p-3.5 lg:p-4 hover:bg-[#004CE5]/10 transition-colors duration-300 relative overflow-hidden group-hover:border-[#004CE5]/40 justify-start">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-[#004CE5]/10 rounded-full blur-xl pointer-events-none"></div>

                            {/* Simplified Strategy subhead */}
                            <div className="flex items-center gap-2 text-[#004CE5] font-extrabold text-[12.5px] lg:text-[14px] xl:text-[15.5px] tracking-wider border-b border-[#004CE5]/10 pb-1.5 shrink-0 z-10">
                                <span className="w-1.5 h-1.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]"></span>
                                我们的应对策略
                            </div>

                            <h4 className="text-[#004CE5] font-black text-[16px] lg:text-[18.5px] xl:text-[21px] leading-snug shrink-0 z-10 h-[48px] lg:h-[56px] xl:h-[64px] flex items-start">
                                通过持续的数据监测，进行闭环验证与调整
                            </h4>
                            <p className="text-zinc-200 text-[13.5px] lg:text-[15.5px] xl:text-[17.5px] leading-relaxed z-10">
                                文章发出去只是开始。我们会每天监测 AI 到底引用了哪些文章、三九养胃舒颗粒排在第几名。根据这些真实反馈，不断调整我们要发什么内容、去哪个平台发。
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
