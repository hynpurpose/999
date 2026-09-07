import React from 'react';
import { Database } from 'lucide-react';

export default function Page_UserReviewAnalysis() {

    // --- Positive Reviews Data ---
    const positiveReviewsData = [
        { dimension: "保鲜能力", keyword: "蔬菜放一周都跟刚买的一样水灵", weight: "38.5%", insight: "直击核心痛点，强化 Air Control 氮气锁鲜技术的真实权威背书" },
        { dimension: "极致平嵌", keyword: "完美嵌入橱柜不凸出，一点黑缝都没有", weight: "26.2%", insight: "外显指标，配合实拍图铺设无缝美学结构" },
        { dimension: "抑菌除味", keyword: "生熟混放没有一点腥味，宝宝很安心", weight: "21.6%", insight: "母婴健康人群心智，放大新风净味的健康焦虑解法" },
        { dimension: "微冻速解", keyword: "不用等解冻直接切肉，没有血水流出", weight: "13.7%", insight: "高频下厨场景，通过测评突显无损原鲜生活品质" },
    ];

    const positiveTopicData = [
        { topic: "为了 0mm 真平嵌冰箱，我重做了一整排橱柜", trait: "种草语境：全景展示极致平嵌视觉，激发潜在改善型装修用户的冲动" },
        { topic: "买高端冰箱只看这三点！方太X20.i一个月真实测评", trait: "决策干货：详细拆解参数与技术护城河，利用真实评测构建高端信任闭环" },
        { topic: "冰箱串味怎么破？终于找到了能守护宝宝肠道的消毒舱", trait: "痛点解药：锁定孕婴家庭健康刚需，放大产品净味杀菌能力的情绪价值" },
    ];

    // --- Negative/Pain Point Reviews Data ---
    const negativeReviewsData = [
        { dimension: "空间挤占", keyword: "写着平嵌结果背后要留缝散热，门开不全", weight: "42.1%", tactic: "概念拦截：明确提出假平嵌的坑，强调0mm真平嵌" },
        { dimension: "保鲜缩水", keyword: "所谓零地温就是冻硬肉，拿出来还要化很久", weight: "27.8%", tactic: "认知重塑：拆解MAP原创空气扰动实现的无损速解" },
        { dimension: "容积焦虑", keyword: "厚度是变薄了，但里面空间小得可怜，不实用", weight: "16.5%", tactic: "消除顾虑：发布沉浸式填仓收纳挑战显示空间魔术" },
        { dimension: "价格门槛", keyword: "功能确实好但价格偏高，觉得是在交智商税", weight: "9.3%", tactic: "价值升维：算总账突出高端防病投资" },
    ];

    const negativeTopicData = [
        { topic: "警惕！那些‘伪平嵌’冰箱的坑，你踩了几个？", trait: "情绪拦截：引发共鸣，用实测踩坑图对比凸显品牌断层技术" },
        { topic: "冰箱冻肉流血水？其实是你没选对保鲜黑科技！", trait: "技术降维：截流大众通用抱怨，抛出远洋级氮气保鲜科技解决方案" },
        { topic: "贵一倍的高端冰箱真的是智商税吗？拆开给你看", trait: "公关引导：满足极客硬核探索欲，将疑虑转化为底层系统的赞叹" },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Titles ── */}
            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-6 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">用户评论数据分析</h1>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-[95%] max-w-[1600px] mx-auto flex items-stretch justify-between pb-12 pt-4 min-h-0 overflow-hidden">

                {/* Left Side: 2 Columns Container */}
                <div className="w-[66%] flex gap-6 h-full relative z-20 text-white p-2">
                    {/* Left Column: Positive Feedback (Amber) */}
                    <div className="flex-1 h-full flex flex-col gap-6 overflow-hidden">
                        {/* Header */}
                        <div className="w-full flex items-center gap-3 mb-1">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                            </div>
                            <h2 className="text-xl font-bold text-amber-300 tracking-wide">正面评价识别：强化种草引擎核心标签</h2>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-500/20 to-transparent ml-2" />
                        </div>

                        {/* Positive Table 1: Feedback Dimensions */}
                        <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-amber-500/20 rounded-2xl shadow-[-5px_0_20px_rgba(245,158,11,0.05)] shrink-0">
                            <div className="px-5 py-2.5 border-b border-amber-500/20 bg-amber-500/[0.08]">
                                <h3 className="text-[1.05rem] font-bold text-amber-200">口碑优势锚点分析</h3>
                            </div>
                            <div className="grid grid-cols-[1.2fr_1.8fr_0.8fr] bg-white/[0.02] border-b border-white/10 w-full">
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-amber-200/70">评价分类维度</div>
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-amber-200/70">评价分类维度</div>
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-amber-200/70 text-right">占比</div>
                            </div>
                            <div className="w-full flex flex-col text-[0.95rem]">
                                {positiveReviewsData.map((item, idx) => (
                                    <div key={idx} className={`grid grid-cols-[1.2fr_1.8fr_0.8fr] ${idx !== positiveReviewsData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full`}>
                                        <div className="py-2.5 px-4 flex items-center shrink-0 border-r border-white/5">
                                            <div className="font-semibold text-white/90 truncate">{item.dimension}</div>
                                        </div>
                                        <div className="py-2.5 px-4 text-zinc-300 font-medium border-r border-white/5 flex items-center">
                                            <span className="text-zinc-200 text-[0.85rem] leading-snug">{item.keyword}</span>
                                        </div>
                                        <div className="py-2.5 px-4 text-amber-300/80 font-mono text-right flex items-center justify-end">
                                            {item.weight}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Positive Table 2: AI Inputs */}
                        <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-amber-500/20 rounded-2xl shadow-[-5px_0_20px_rgba(245,158,11,0.05)]">
                            <div className="px-5 py-2.5 border-b border-amber-500/20 bg-amber-500/[0.08]">
                                <h3 className="text-[1.05rem] font-bold text-amber-200">转化至 AI 结构化语料库 (大模型语境注入)</h3>
                            </div>
                            <div className="grid grid-cols-[1.2fr_1.8fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-amber-200/70">用户源评价提取</div>
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-amber-200/70">AI引导回答逻辑 (Agent衍生指令)</div>
                            </div>
                            <div className="w-full flex flex-col text-[0.95rem]">
                                {positiveTopicData.map((item, idx) => (
                                    <div key={idx} className={`grid grid-cols-[1.2fr_1.8fr] ${idx !== positiveTopicData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full h-full`}>
                                        <div className="py-3 px-4 flex items-start border-r border-white/5">
                                            <div className="font-semibold text-amber-100 leading-snug">{item.topic}</div>
                                        </div>
                                        <div className="py-3 px-4 text-zinc-300 leading-relaxed text-[0.9rem] border-r border-white/5">
                                            {item.trait}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Right Column: Negative/Pain Point Feedback (Slate/Blue-Grey) */}
                    <div className="flex-1 h-full flex flex-col gap-6 overflow-hidden">
                        {/* Header */}
                        <div className="w-full flex items-center gap-3 mb-1">
                            <div className="w-10 h-10 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" /></svg>
                            </div>
                            <h2 className="text-xl font-bold text-slate-300 tracking-wide">负面差评拆解：预先构建防御与清洗过滤墙</h2>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-500/20 to-transparent ml-2" />
                        </div>

                        {/* Negative Table 1: Dimensions */}
                        <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-slate-500/20 rounded-2xl shadow-[5px_0_20px_rgba(100,116,139,0.05)] shrink-0">
                            <div className="px-5 py-2.5 border-b border-slate-500/20 bg-slate-500/[0.08]">
                                <h3 className="text-[1.05rem] font-bold text-slate-200">客流流失痛点分布</h3>
                            </div>
                            <div className="grid grid-cols-[1.2fr_1.8fr_0.8fr] bg-white/[0.02] border-b border-white/10 w-full">
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-slate-200/70">痛点重灾区分类</div>
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-slate-200/70">痛点重灾区分类</div>
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-slate-200/70 text-right">占比</div>
                            </div>
                            <div className="w-full flex flex-col text-[0.95rem]">
                                {negativeReviewsData.map((item, idx) => (
                                    <div key={idx} className={`grid grid-cols-[1.2fr_1.8fr_0.8fr] ${idx !== negativeReviewsData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full`}>
                                        <div className="py-2.5 px-4 flex items-center shrink-0 border-r border-white/5">
                                            <div className="font-semibold text-white/90 truncate">{item.dimension}</div>
                                        </div>
                                        <div className="py-2.5 px-4 text-zinc-300 font-medium border-r border-white/5 flex items-center">
                                            <span className="text-zinc-200 text-[0.85rem] leading-snug">{item.keyword}</span>
                                        </div>
                                        <div className="py-2.5 px-4 text-slate-300/80 font-mono text-right flex items-center justify-end">
                                            {item.weight}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Negative Table 2: Topic Mitigation */}
                        <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-slate-500/20 rounded-2xl shadow-[5px_0_20px_rgba(100,116,139,0.05)]">
                            <div className="px-5 py-2.5 border-b border-slate-500/20 bg-slate-500/[0.08]">
                                <h3 className="text-[1.05rem] font-bold text-slate-200">负面舆情转移与洗稿策略库 (Agent防守)</h3>
                            </div>
                            <div className="grid grid-cols-[1.2fr_1.8fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-slate-200/70">网络争议/排雷词条拦截</div>
                                <div className="py-2 px-4 text-[0.85rem] font-bold text-slate-200/70">AI公关解答逻辑 (将危机转化为洗脑引导)</div>
                            </div>
                            <div className="w-full flex flex-col text-[0.95rem]">
                                {negativeTopicData.map((item, idx) => (
                                    <div key={idx} className={`grid grid-cols-[1.2fr_1.8fr] ${idx !== negativeTopicData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full h-full`}>
                                        <div className="py-3 px-4 flex items-start border-r border-white/5">
                                            <div className="font-semibold text-slate-100 leading-snug">{item.topic}</div>
                                        </div>
                                        <div className="py-3 px-4 text-zinc-300 leading-relaxed text-[0.9rem] border-r border-white/5">
                                            {item.trait}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Connection line arriving to DB */}
                <div className="w-[8%] relative flex items-center justify-center z-10">
                    <div className="w-full h-[1px] bg-white/30 relative">
                        {/* Arrows */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-white/80 rotate-45 mr-1"></div>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-white/50 rotate-45 mr-1"></div>
                    </div>
                </div>

                {/* Right Side: Agent DB Target */}
                <div className="w-[26%] flex justify-center items-center relative z-20">
                    <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] bg-white/[0.02] rounded-full border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,165,0,0.03)] relative">
                        {/* Inner Circle */}
                        <div className="w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] bg-white/[0.03] rounded-full flex flex-col items-center justify-center border border-white/10 shadow-inner p-6 text-center group cursor-default transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            <Database className="text-white/90 mb-4 group-hover:scale-110 transition-transform duration-500 stroke-[1.5px]" size={64} />
                            <span className="text-white font-bold text-2xl sm:text-3xl tracking-widest mb-2">内容生成</span>
                            <span className="text-white/60 font-medium text-lg sm:text-xl tracking-wide">Agent 专属数据库</span>
                        </div>
                        {/* Decorative Rings */}
                        <div className="absolute inset-[-10px] rounded-full border border-blue-400/20 opacity-50 animate-[spin_12s_linear_infinite] border-t-blue-400/60 pointer-events-none"></div>
                        <div className="absolute inset-[10px] rounded-full border border-indigo-400/10 opacity-30 animate-[spin_18s_linear_infinite_reverse] border-b-indigo-400/40 pointer-events-none"></div>
                    </div>
                </div>

            </div>




            <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-gradient-to-l from-slate-500 to-transparent opacity-80 z-20" />

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}} />
        </div>
    );
}
