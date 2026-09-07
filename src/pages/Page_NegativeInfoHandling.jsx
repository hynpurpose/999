import React from 'react';

export default function Page_NegativeInfoHandling() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-3 px-10 lg:pt-4 lg:pb-4 lg:px-12 xl:pt-5 xl:pb-5 xl:px-16 animate-fade-in">
            {/* Background Ambient Glows - Sleek Dark Mode in Pure Blues */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute right-[-5%] top-[15%] w-[600px] h-[600px] bg-[#004CE5]/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
            <div className="absolute left-[-5%] bottom-[5%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full relative z-10 gap-3 lg:gap-4 xl:gap-5">

                {/* Header Section - Sized at exactly 32px and positioned high */}
                <div className="shrink-0 pt-1 lg:pt-2">
                    <h1 className="text-[32px] font-black text-white tracking-widest leading-none">
                        处理负面及错误信息
                    </h1>
                </div>

                {/* Table Layout - Sleek container */}
                <div className="flex-1 flex flex-col justify-between min-h-0 border-2 border-white/10 rounded-[28px] overflow-hidden bg-zinc-950/40 p-4 lg:p-5 xl:p-6 shadow-2xl">

                    {/* Header Row */}
                    <div className="grid grid-cols-12 gap-4 items-center border-b-2 border-[#004CE5] pb-3 shrink-0">
                        <div className="col-span-2 text-center">
                            <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-zinc-400 tracking-wider">负面信息来源</span>
                        </div>
                        <div className="col-span-3 pl-4">
                            <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-zinc-400 tracking-wider">具体是什么情况？</span>
                        </div>
                        <div className="col-span-3 pl-4">
                            <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-zinc-400 tracking-wider">处理难点在哪里？</span>
                        </div>
                        <div className="col-span-4 pl-4">
                            <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-zinc-400 tracking-wider">我们的处理方式</span>
                        </div>
                    </div>

                    {/* Table Body - Stretch rows to fill height evenly and eliminate gaps */}
                    <div className="flex-1 flex flex-col justify-between gap-3 lg:gap-4 xl:gap-5 pt-3 min-h-0">
                        {/* ROW 1: 功效 / 适应症信息错误 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-600 hover:border-blue-600/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-500 tracking-wide text-center">
                                    功效信息错误
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    AI 在“怎么样 / 能不能根治 / 多久见效”类提问下，常把养胃舒写成“根治胃病、万能养胃”，或夸大疗程与起效速度，脱离说明书适应症。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    夸大表述一旦被多平台反复引用，会长期误导购药预期，且很难按虚假广告直接逐条撤稿。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    说明书口径锚定 + 适应症叙事重置
                                </div>
                                <div className="flex flex-col gap-1 text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    <div>1. 以说明书适应症与禁忌为准，统一对外功效表述。</div>
                                    <div>2. 用可核验的权威健康站语料持续覆盖夸大句，压低绝对化疗效权重。</div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2: 产品信息错误 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-500 hover:border-blue-500/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-400 tracking-wide text-center">
                                    产品信息错误
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    三九养胃舒颗粒被写成三九胃泰颗粒、别家香砂养胃丸，甚至与抑酸 / 抗酸药混为一谈；厂商、适应症或用法写错。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    一旦身份错认，华润三九与养胃舒的温中健脾定位会被算到同门或其他竞品头上，纠偏成本极高。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    身份锚定 + 说明书语料覆盖
                                </div>
                                <p className="text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    在高权重信源集中发布商品名 / 厂商 / 适应症对照表与用法说明，强制 AI 采信官方身份信息，明确与三九胃泰颗粒的差异。
                                </p>
                            </div>
                        </div>

                        {/* ROW 3: 竞品对比偏误 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-400 hover:border-blue-400/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-300 tracking-wide text-center">
                                    竞品对比偏误
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    与达喜、香砂养胃丸、三九胃泰颗粒对比时，AI 常把角色混为一谈，或只推竞品不提养胃舒的脾胃虚寒适用场景。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    对比问答流量高、引用源杂，且药品广告合规边界严，不能靠情绪化拉踩去抢声量。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    分型对照 + 合规对比语料
                                </div>
                                <div className="flex flex-col gap-1 text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    <div>1. 以说明书适应症与权威科普建立可核验对照。</div>
                                    <div>2. 锁定对比表述的合规边界，突出「症状缓解 vs 温中健脾调理」角色差异。</div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 4: 过期历史旧闻 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-zinc-900/40 border border-white/10 border-l-4 border-l-blue-300 hover:border-blue-300/40 hover:bg-zinc-900/80 rounded-2xl p-3 lg:p-4 xl:p-5 transition-all duration-300 flex-1 min-h-0">
                            {/* Source */}
                            <div className="col-span-2 flex flex-col items-center justify-center border-r border-white/10 h-full shrink-0">
                                <span className="text-[17px] lg:text-[19px] xl:text-[22px] font-black text-blue-200 tracking-wide text-center">
                                    过期历史旧闻
                                </span>
                            </div>

                            {/* Situation */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    网上残留过时规格、错误用法或旧品名写法，以及把养胃舒与已下架 / 改版表述混用的陈旧报道。
                                </p>
                            </div>

                            {/* Difficulty */}
                            <div className="col-span-3 pl-4 pr-2 border-r border-white/5 h-full flex items-center">
                                <p className="text-zinc-200 text-[14px] lg:text-[15.5px] xl:text-[18px] leading-relaxed font-bold">
                                    AI 对权威健康站信源权重极高，抓到旧数据后会与当前说明书、规格混淆，当成近期情况直接输出。
                                </p>
                            </div>

                            {/* Response */}
                            <div className="col-span-4 pl-4 h-full flex flex-col justify-center gap-1.5">
                                <div className="text-[16px] lg:text-[18px] xl:text-[20px] font-black text-blue-400 tracking-wide border-b border-blue-500/20 pb-1 w-fit shrink-0">
                                    源头更替与官方口径覆盖
                                </div>
                                <p className="text-[13px] lg:text-[14.5px] xl:text-[17px] text-zinc-300 font-bold leading-relaxed">
                                    清理或申诉已失效的陈旧链接，持续发布最新说明书、规格与权威科普，尽快刷新 AI 的检索记忆。
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
}
