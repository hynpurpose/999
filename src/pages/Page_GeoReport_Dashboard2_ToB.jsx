import React from 'react';

export default function Page_GeoReport_Dashboard2_ToB() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        数据指标与特征诊断 · B端
                    </h1>
                </div>

                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">
                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full min-h-0 gap-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                关键数据表现
                            </h3>
                            <div className="overflow-hidden rounded-xl border border-[#004CE5]/20 bg-[#020202]/60 flex-1 min-h-0 flex flex-col">
                                <div className="shrink-0 grid grid-cols-[24%_38%_38%] border-b border-[#004CE5]/20 bg-[#004CE5]/10">
                                    {['关键数据', '定义', '数据说明'].map((h) => (
                                        <div key={h} className="py-3 px-4 text-[18px] lg:text-[20px] font-semibold text-zinc-200">
                                            {h}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1 min-h-0 flex flex-col divide-y divide-white/10">
                                    {[
                                        {
                                            name: '整体提及率',
                                            def: '在 B 端渠道选品词条下，AI 回复中包含“养胃舒颗粒”的概率。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">3.4%</span>
                                                    （高于 C 端 1.4%，但仍远低于同门三九胃泰 33.5%）
                                                </>
                                            ),
                                        },
                                        {
                                            name: 'Top 1 提及率',
                                            def: '当被提及建议时，养胃舒颗粒被排在首位推荐的概率。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">0%</span>
                                                    （三九胃泰颗粒 9.3%，渠道侧首推位全被竞品与兄弟品占据）
                                                </>
                                            ),
                                        },
                                        {
                                            name: '平均提及位次',
                                            def: '被推荐时在 AI 生成文本列表中的平均排名位次。',
                                            note: (
                                                <>
                                                    <span className="text-blue-400 font-bold">NO. 9.3</span>
                                                    （全量位次榜第 20 / 795，落后香砂养胃丸 NO. 6.5）
                                                </>
                                            ),
                                        },
                                        {
                                            name: 'Top 引用来源',
                                            def: 'AI 生成回答时，最底层的数据抓取来源平台。',
                                            note: '小荷健康 (27.7%)、医药信息查询平台 (5.6%)、夸克 (5.3%)',
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

                    <div className="col-span-6 flex flex-col min-h-0">
                        <div className="border border-[#004CE5]/20 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] flex flex-col h-full min-h-0 gap-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-white shrink-0 flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                养胃舒颗粒在 B 端渠道选品问答生态里的表现特征：
                            </h3>

                            <div className="flex-1 flex flex-col gap-3 min-h-0">
                                {[
                                    {
                                        n: '01',
                                        title: '厂家与代理选品词是当前长板',
                                        body: '25 个渠道词中 7 个有露出：「养胃药厂家有哪些」22.9%、「养胃中成药厂家有哪些」17.1%、「连锁药店主推哪些养胃中成药」11.4% 且位次 NO. 4，是目前最好的承接面。',
                                    },
                                    {
                                        n: '02',
                                        title: '医院配备与采购场景全面空白',
                                        body: '医院消化科常备、医院采购、基层医院配备、医保目录等 18 个词条提及率均为 0%，渠道心智尚未建立。',
                                    },
                                    {
                                        n: '03',
                                        title: '同门三九胃泰在渠道侧断层领先',
                                        body: '三九胃泰颗粒提及率 33.5%、Top1 9.3%；本品整体 3.4%、Top1 0%。DeepSeek 13.1%、元宝 3.4%、豆包 0.6%，通义与蚂蚁阿福仍为 0%。',
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

                <div className="border border-[#004CE5]/20 border-l-4 border-l-[#004CE5] bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-0 mt-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                        核心优化策略
                    </h3>
                    <div className="text-[15px] lg:text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <p className="font-bold text-white mb-0.5 text-[17px] lg:text-[20px]">
                                从「厂家露出」走向「渠道常备」
                            </p>
                            <p className="text-zinc-300 leading-relaxed text-justify">
                                B 端已在厂家、代理、药店主推类问法上站住脚，下一步应围绕医院配备、医保目录、进货划算等渠道词铺可被 AI 引用的内容，把养胃舒颗粒写进选型答案，并切割与三九胃泰的适用边界，缩小对胃苏颗粒 / 摩罗丹的差距。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
