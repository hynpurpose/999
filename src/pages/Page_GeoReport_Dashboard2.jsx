import React from 'react';

export default function Page_GeoReport_Dashboard2() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        数据指标与特征诊断
                    </h1>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">

                    {/* Left Column: Quantitative Metrics Table */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full min-h-0 gap-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                关键数据表现
                            </h3>
                            <div className="overflow-hidden rounded-xl border border-[#004CE5]/20 bg-[#020202]/60 flex-1 min-h-0 flex flex-col">
                                <div className="shrink-0 grid grid-cols-[24%_38%_38%] border-b border-[#004CE5]/20 bg-[#004CE5]/10">
                                    {['关键数据', '定义', '数据说明'].map((h) => (
                                        <div
                                            key={h}
                                            className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200"
                                        >
                                            {h}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1 min-h-0 flex flex-col divide-y divide-white/10">
                                    {[
                                        {
                                            name: '整体提及率',
                                            def: '在 C 端消费决策词条下，AI 回复中包含“养胃舒颗粒”的概率。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">1.4%</span>
                                                    （35 个词条里仅 4 个被提及，绝大多数问法进不了候选清单）
                                                </>
                                            ),
                                        },
                                        {
                                            name: 'Top 1 提及率',
                                            def: '当被提及建议时，养胃舒颗粒被排在首位推荐的概率。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">0%</span>
                                                    （同门三九胃泰颗粒 3.1%，首推位全被竞品与兄弟品占据）
                                                </>
                                            ),
                                        },
                                        {
                                            name: '平均提及位次',
                                            def: '被推荐时在 AI 生成文本列表中的平均排名位次。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">NO. 4.8</span>
                                                    （全量位次榜第 13 / 296，略落后香砂养胃丸 NO. 4.2）
                                                </>
                                            ),
                                        },
                                        {
                                            name: 'Top 引用来源',
                                            def: 'AI 生成回答时，最底层的数据抓取来源平台。',
                                            note: '小荷健康 (28.1%)、夸克 (6.1%)、蚂蚁阿福医学文献库 (5.9%)',
                                        },
                                    ].map((row) => (
                                        <div
                                            key={row.name}
                                            className="flex-1 min-h-0 grid grid-cols-[24%_38%_38%] items-center hover:bg-white/[0.02] transition-colors"
                                        >
                                            <div className="px-4 text-[18px] lg:text-[20px] font-bold text-white whitespace-nowrap">
                                                {row.name}
                                            </div>
                                            <div className="px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                                {row.def}
                                            </div>
                                            <div className="px-4 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-100 leading-relaxed">
                                                {row.note}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Three Features evenly stretched */}
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="border border-[#004CE5]/20 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full min-h-0 gap-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                养胃舒颗粒在 C 端养胃选药问答生态里的表现特征：
                            </h3>

                            <div className="flex-1 flex flex-col gap-3 min-h-0">
                                {[
                                    {
                                        n: '01',
                                        title: '只在“品牌榜单类”问法上露过面',
                                        body: '35 个消费决策词条中仅 4 个命中，全部是榜单 / 药企类：养胃中成药品牌排行榜 22.9%、大品牌正规药企的养胃药推荐 11.4%、养胃药品牌推荐 8.6%、养胃药品牌排行榜 5.7%。',
                                    },
                                    {
                                        n: '02',
                                        title: '症状、人群、剂型类问法仍全为 0',
                                        body: '慢性胃炎调理、胃热灼痛、熬夜加班人群、低糖颗粒剂等 31 个词条提及率均为 0%，真正的选药场景里本品完全不在候选清单。',
                                    },
                                    {
                                        n: '03',
                                        title: '同门压制，平台覆盖不均衡',
                                        body: '提及率榜首是三九胃泰颗粒 22.4%，本品仅 1.4%；平台侧元宝 3.7%、DeepSeek 3.3% 有露出，豆包、通义千问、蚂蚁阿福仍为 0%。',
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.n}
                                        className="flex-1 min-h-0 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3.5 flex gap-3 items-center transition-colors duration-300"
                                    >
                                        <div className="text-[#004CE5] text-xl lg:text-2xl font-mono font-bold select-none shrink-0">
                                            {item.n}
                                        </div>
                                        <div className="min-h-0 flex flex-col justify-center gap-1">
                                            <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-snug">
                                                {item.title}
                                            </h4>
                                            <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed text-justify">
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Full-width Action Callout Card */}
                <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-0 mt-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                        核心优化策略
                    </h3>
                    <div className="text-[15px] lg:text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <p className="font-bold text-white mb-0.5 text-[17px] lg:text-[20px]">
                                从“榜单里有名”走向“症状里被点名”
                            </p>
                            <p className="text-zinc-300 leading-relaxed text-justify">
                                目前只有品牌榜单类问法能带出单品名，真正决定购买的症状与人群场景还是空白：围绕“慢性胃炎调理、胃热隐痛、气阴两虚、低糖颗粒剂”等问法，在小荷健康、夸克、蚂蚁阿福医学文献库等高引用信源铺可被引用的内容，并把“999 养胃舒”与三九胃泰的适用边界写清楚，避免品牌流量继续被兄弟品截走。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
