import React from 'react';

/**
 * 基线口径（GEO ONE，2026-08-14 ~ 08-20）：
 *   C端 457：提及率 1.4% / TOP1 0% / 行业影响力排名 NO.17（296）
 *   B端 458：提及率 3.4% / TOP1 0% / 行业影响力排名 NO.22（795）
 *   监测词 440/441：C端正面 93% / 负面 7%；B端正面 85% / 负面 15%
 */
function KpiLine({ n, rank, rate, top1 }) {
    return (
        <div className="flex items-start gap-1.5">
            <span className="text-[11.5px] font-black bg-[#004CE5]/20 text-white border border-[#004CE5]/40 px-1 py-[1px] rounded shrink-0 mt-0.5">{n}</span>
            <div className="min-w-0 leading-snug">
                <div className="font-black">{rank}</div>
                <div>
                    <span className="whitespace-nowrap">（提及率提升至 <strong className="text-white">{rate}</strong></span>
                    <span> · </span>
                    <span className="whitespace-nowrap">TOP1提及率提升至 <strong className="text-white">{top1}</strong>）</span>
                </div>
            </div>
        </div>
    );
}

function Page_GeoKpiAcceptance() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-1.5 pb-2.5 xl:pb-4 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-1 xl:gap-1.5">

                <div className="text-center shrink-0 mb-0 mt-0">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        KPI 及验收标准
                    </h1>
                </div>

                <div className="flex items-center justify-between shrink-0 pl-1 mt-1.5 xl:mt-2.5">
                    <h3 className="text-[17.5px] xl:text-[19px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        品牌当前现状
                    </h3>
                </div>

                {/* 现状：C端 / B端 / 监测词 三列 */}
                <div className="grid grid-cols-12 gap-3 shrink-0 mt-1.5 xl:mt-2.5">
                    {/* C端 */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2.5 px-4 xl:py-3.5 xl:px-5 flex flex-col gap-1.5 shadow-xl">
                        <span className="text-[15px] xl:text-[16.5px] font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                            C端优化词现状
                        </span>
                        <div className="flex items-center gap-3 xl:gap-4 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-white text-[11px] xl:text-[12px] font-bold whitespace-nowrap">提及率</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">1.4%</span>
                            </div>
                            <div className="w-px h-7 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-white text-[11px] xl:text-[12px] font-bold whitespace-nowrap">TOP1 提及率</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">0%</span>
                            </div>
                            <div className="w-px h-7 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-white text-[11px] xl:text-[12px] font-bold whitespace-nowrap">竞品排名</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1 whitespace-nowrap">NO.17</span>
                            </div>
                        </div>
                        <p className="text-[12px] xl:text-[13px] text-white font-bold leading-relaxed text-justify">
                            仅榜单 / 药企类 4 条有露出，其余 31 条为 0；同门三九胃泰颗粒截流，尚未进入消费决策首推梯队。
                        </p>
                    </div>

                    {/* B端 */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2.5 px-4 xl:py-3.5 xl:px-5 flex flex-col gap-1.5 shadow-xl">
                        <span className="text-[15px] xl:text-[16.5px] font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                            B端优化词现状
                        </span>
                        <div className="flex items-center gap-3 xl:gap-4 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-white text-[11px] xl:text-[12px] font-bold whitespace-nowrap">提及率</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">3.4%</span>
                            </div>
                            <div className="w-px h-7 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-white text-[11px] xl:text-[12px] font-bold whitespace-nowrap">TOP1 提及率</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">0%</span>
                            </div>
                            <div className="w-px h-7 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-white text-[11px] xl:text-[12px] font-bold whitespace-nowrap">竞品排名</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1 whitespace-nowrap">NO.22</span>
                            </div>
                        </div>
                        <p className="text-[12px] xl:text-[13px] text-white font-bold leading-relaxed text-justify">
                            略好于 C 端，厂家 / 药店主推等 7 条有命中；医院配备、采购等 18 条仍为 0，渠道选品词整体仍稀疏。
                        </p>
                    </div>

                    {/* 监测词 */}
                    <div className="col-span-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] border-t-2 border-t-[#004CE5] rounded-2xl py-2.5 px-4 xl:py-3.5 xl:px-5 flex flex-col gap-1.5 shadow-xl">
                        <span className="text-[15px] xl:text-[16.5px] font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-4 bg-[#004CE5] rounded-full" />
                            监测词舆情现状
                        </span>
                        <div className="flex items-center gap-4 my-0.5">
                            <div className="flex flex-col">
                                <span className="text-white text-[11px] xl:text-[12px] font-bold">C端负面占比</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">7%</span>
                            </div>
                            <div className="w-px h-7 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-white text-[11px] xl:text-[12px] font-bold">B端负面占比</span>
                                <span className="text-[24px] xl:text-[28px] font-extrabold text-[#004CE5] leading-none mt-1">15%</span>
                            </div>
                        </div>
                        <p className="text-[12px] xl:text-[13px] text-white font-bold leading-relaxed text-justify">
                            已建基线：药性写反、医保甲类 / 用法错配、渠道侧基药误称与摩罗丹导向——需持续纠偏，正面信息守住 80% 以上。
                        </p>
                    </div>
                </div>

                <div className="w-full h-px bg-white/[0.08] mt-2 xl:mt-2.5 mb-0.5 xl:mb-1" />

                <div className="flex items-center justify-between shrink-0 pl-1 mt-0">
                    <h3 className="text-[17.5px] xl:text-[19px] font-bold text-white flex items-center gap-2.5">
                        <span className="w-2 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                        KPI与交付标准
                    </h3>
                </div>

                <div className="w-full mt-1 xl:mt-1.5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl py-[10px] px-[14px] xl:py-[14px] xl:px-[20px] shadow-2xl flex flex-col gap-1.5 flex-1 min-h-0 overflow-hidden">
                    <div className="w-full overflow-hidden flex-1 flex flex-col justify-center min-h-0">
                        <table className="w-full text-left border-collapse table-fixed h-full">
                            <thead>
                                <tr className="border-b-2 border-white/[0.22] text-white text-[16.5px] xl:text-[18px] font-black">
                                    <th className="pb-2.5 pl-3 w-[11%]">词组分类</th>
                                    <th className="pb-2.5 w-[24%]">运营目标与三阶段演进策略</th>
                                    <th className="pb-2.5 w-[30%]">阶段性交付标准与 KPI 考核</th>
                                    <th className="pb-2.5 pr-3 w-[35%] pl-5">最终展现权益及交付标准</th>
                                </tr>
                            </thead>
                            <tbody className="text-[15.5px] xl:text-[16.5px] leading-relaxed">

                                {/* C端优化词 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200 border-b border-white/[0.22]">
                                    <td className="py-1.5 pl-3 font-semibold text-white align-top">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[17px] xl:text-[18.5px] text-white font-extrabold">C端优化词</span>
                                            <span className="text-[13.5px] xl:text-[14.5px] text-white font-bold">（12 条核心 · 消费决策）</span>
                                        </div>
                                    </td>
                                    <td className="py-1.5 text-white align-top pr-3">
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-start gap-1.5">
                                                <span className="text-[12px] font-black bg-white/10 text-white px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[14.5px] xl:text-[15.5px] leading-snug min-w-0">
                                                    <div className="text-white font-black">破零露出｜3个月</div>
                                                    <div className="text-white font-bold">说明书 / 分型选药 / 品名区分</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-1.5">
                                                <span className="text-[12px] font-black bg-white/10 text-white px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[14.5px] xl:text-[15.5px] leading-snug min-w-0">
                                                    <div className="text-white font-black">稳提升｜6个月</div>
                                                    <div className="text-white font-bold">拉升养胃推荐大词，压同门截流</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-1.5">
                                                <span className="text-[12px] font-black bg-white/10 text-white px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段三</span>
                                                <div className="text-[14.5px] xl:text-[15.5px] leading-snug min-w-0">
                                                    <div className="text-white font-black">占高位｜3个月</div>
                                                    <div className="text-white font-bold">冲击消费端首推，压制达喜等</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-1.5 text-white align-top pr-3">
                                        <div className="flex flex-col gap-1.5 text-[13.5px] xl:text-[14.5px] text-white">
                                            <KpiLine n="一" rank="进入前五" rate="6%" top1="0.5%" />
                                            <KpiLine n="二" rank="进入前三" rate="8%" top1="2%" />
                                            <KpiLine n="三" rank="争取第一" rate="25%" top1="10%" />
                                        </div>
                                    </td>
                                    <td className="py-1.5 text-white align-top pr-3 border-l border-white/[0.22] pl-5">
                                        <div className="flex flex-col gap-1 bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 rounded-xl text-[14px] xl:text-[15px] leading-snug">
                                            <p>
                                                在约定 AI 平台搜 C 端词条时，回答中应出现<strong className="text-white">三九养胃舒颗粒</strong>推荐及说明书口径的分型选药表述。
                                            </p>
                                            <p className="border-t border-white/10 pt-1 text-white font-bold text-[13px] xl:text-[13.5px]">
                                                自 35 条监测池圈定 <strong className="text-white">12 条核心</strong>；达标不少于 <strong className="text-white">4 条</strong>视为有效交付，不足按比例退款。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* B端优化词 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200 border-b border-white/[0.22]">
                                    <td className="py-1.5 pl-3 font-semibold text-white align-top">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[17px] xl:text-[18.5px] text-white font-extrabold">B端优化词</span>
                                            <span className="text-[13.5px] xl:text-[14.5px] text-white font-bold">（8 条核心 · 渠道选品）</span>
                                        </div>
                                    </td>
                                    <td className="py-1.5 text-white align-top pr-3">
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-start gap-1.5">
                                                <span className="text-[12px] font-black bg-white/10 text-white px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[14.5px] xl:text-[15.5px] leading-snug min-w-0">
                                                    <div className="text-white font-black">补齐渠道语料｜3个月</div>
                                                    <div className="text-white font-bold">厂家 / 药店主推 / 选品对照</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-1.5">
                                                <span className="text-[12px] font-black bg-white/10 text-white px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[14.5px] xl:text-[15.5px] leading-snug min-w-0">
                                                    <div className="text-white font-black">稳入榜｜6个月</div>
                                                    <div className="text-white font-bold">拉升 B 端提及，进入渠道推荐短名单</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-1.5">
                                                <span className="text-[12px] font-black bg-white/10 text-white px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段三</span>
                                                <div className="text-[14.5px] xl:text-[15.5px] leading-snug min-w-0">
                                                    <div className="text-white font-black">占高位｜3个月</div>
                                                    <div className="text-white font-bold">冲击渠道侧首推梯队</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-1.5 text-white align-top pr-3">
                                        <div className="flex flex-col gap-1.5 text-[13.5px] xl:text-[14.5px] text-white">
                                            <KpiLine n="一" rank="进入前五" rate="12%" top1="1%" />
                                            <KpiLine n="二" rank="进入前三" rate="18%" top1="2%" />
                                            <KpiLine n="三" rank="争取第一" rate="35%" top1="12%" />
                                        </div>
                                    </td>
                                    <td className="py-1.5 text-white align-top pr-3 border-l border-white/[0.22] pl-5">
                                        <div className="flex flex-col gap-1 bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 rounded-xl text-[14px] xl:text-[15px] leading-snug">
                                            <p>
                                                在约定 AI 平台搜 B 端词条时，回答中应出现<strong className="text-white">三九养胃舒颗粒</strong>作为厂家 / 药店可主推选项，并带合规选品理由。
                                            </p>
                                            <p className="border-t border-white/10 pt-1 text-white font-bold text-[13px] xl:text-[13.5px]">
                                                自 25 条监测池圈定 <strong className="text-white">8 条核心</strong>；达标不少于 <strong className="text-white">3 条</strong>视为有效交付，不足按比例退款。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* 监测词 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-1.5 pl-3 font-semibold text-white align-top">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[17px] xl:text-[18.5px] text-white font-extrabold">监测词</span>
                                            <span className="text-[13.5px] xl:text-[14.5px] text-white font-bold">（负面与错误纠偏）</span>
                                        </div>
                                    </td>
                                    <td className="py-1.5 text-white align-top pr-3">
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-start gap-1.5">
                                                <span className="text-[12px] font-black bg-white/10 text-white px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段一</span>
                                                <div className="text-[14.5px] xl:text-[15.5px] leading-snug min-w-0">
                                                    <div className="text-white font-black">建基线｜1个月</div>
                                                    <div className="text-white font-bold">C端负面 7% / B端负面 15%，锁定药性、医保与渠道误称</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-1.5">
                                                <span className="text-[12px] font-black bg-white/10 text-white px-1.5 py-[1px] rounded shrink-0 mt-0.5">阶段二</span>
                                                <div className="text-[14.5px] xl:text-[15.5px] leading-snug min-w-0">
                                                    <div className="text-white font-black">解问题｜11个月</div>
                                                    <div className="text-white font-bold">纠偏与三九胃泰混淆、禁忌写错与竞品偏误</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-1.5 text-white align-top pr-3">
                                        <div className="font-medium bg-[#004CE5]/5 border border-[#004CE5]/15 p-2.5 rounded-xl text-[14.5px] xl:text-[15.5px] leading-snug text-white">
                                            首月完成舆情基线后，针对监测词问询，AI 内容<strong className="text-white">核心事实准确率</strong>达约定标准，<strong className="text-white">正面信息控制在 80% 以上</strong>。
                                        </div>
                                    </td>
                                    <td className="py-1.5 text-white align-top pr-3 border-l border-white/[0.22] pl-5">
                                        <div className="flex flex-col gap-1 bg-white/[0.015] border border-white/[0.04] p-2.5 rounded-xl text-[14px] xl:text-[15px] leading-snug">
                                            <p>
                                                围绕约定 AI 平台及监测词，持续纠偏“与三九胃泰颗粒混淆、功效夸大根治、禁忌写错、对比只推达喜”等表述。
                                            </p>
                                            <p className="border-t border-white/10 pt-1 text-white font-bold text-[13px] xl:text-[13.5px]">
                                                以<strong className="text-white">核心错误纠治</strong>、<strong className="text-white">正面信息占比 80% 以上</strong>为交付标准。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page_GeoKpiAcceptance;
