import React from 'react';

function Page_GeoWorkAcceptance() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-2.5 pb-5 sm:pb-6 overflow-hidden animate-fade-in">
            <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-1 min-h-0 relative z-10 pt-0 gap-1.5 xl:gap-2">

                {/* Header Section */}
                <div className="text-center shrink-0 mb-0 mt-0.5">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        工作内容与预期效果
                    </h1>
                </div>

                {/* Main Content Box */}
                <div className="w-full mt-1.5 xl:mt-2 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl py-[12px] px-[16px] xl:py-[16px] xl:px-[24px] shadow-2xl flex flex-col gap-2 xl:gap-2.5 flex-1 min-h-0">

                    {/* Table Container */}
                    <div className="w-full overflow-x-auto flex-1 flex flex-col justify-center">
                        <table className="w-full text-left border-collapse min-w-[1000px] h-full">
                            <thead>
                                <tr className="border-b-2 border-white/[0.22] text-zinc-200 text-[17px] xl:text-[18.5px] font-black">
                                    <th className="pb-2.5 pl-3.5 w-[13%]">词组分类</th>
                                    <th className="pb-2.5 w-[42%] pl-5">工作内容</th>
                                    <th className="pb-2.5 w-[25%] pl-5">预期效果</th>
                                    <th className="pb-2.5 pr-3.5 w-[20%] pl-6">需要品牌方协助的部分</th>
                                </tr>
                            </thead>
                            <tbody className="text-[17.5px] xl:text-[19px] leading-relaxed">

                                {/* Row 1: Tiles (主要产品词) */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-3 xl:py-4 pl-3.5 font-semibold text-zinc-100 align-middle border-b border-white/[0.22]">
                                        <div className="flex flex-col gap-1 mt-1">
                                            <span className="text-[18.5px] xl:text-[20.5px] text-white font-black">主要产品词</span>
                                            <span className="text-[15px] xl:text-[16px] text-zinc-400 font-bold">（儿童护肤品）</span>
                                        </div>
                                    </td>
                                    <td className="py-3 xl:py-4 text-zinc-300 align-middle pr-4 border-b border-white/[0.22] border-l border-white/[0.22] pl-5">
                                        <div className="flex flex-col gap-3 xl:gap-3.5">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-[17.5px] xl:text-[19px] font-black text-white mb-1">
                                                    <span className="w-2 h-3.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]" />
                                                    一、GEO 诊断
                                                </div>
                                                <ul className="list-none pl-4 text-zinc-300 flex flex-col gap-1.5 leading-relaxed text-[16.5px] xl:text-[18px]">
                                                    <li>1、<span className="text-white font-semibold">品牌现状诊断：</span>监测品牌提及、推荐排名、竞品对比、负面信息和引用来源。</li>
                                                    <li>2、<span className="text-white font-semibold">词条策略规划：</span>规划监测词、产品词、高转化问题词，并做优先级分层。</li>
                                                    <li>3、<span className="text-white font-semibold">覆盖平台策略：</span>针对不同 AI 平台制定优化策略，统一品牌表达口径。</li>
                                                </ul>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-[17.5px] xl:text-[19px] font-black text-white mb-1">
                                                    <span className="w-2 h-3.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]" />
                                                    二、GEO 优化执行
                                                </div>
                                                <ul className="list-none pl-4 text-zinc-300 flex flex-col gap-1.5 leading-relaxed text-[16.5px] xl:text-[18px]">
                                                    <li>1、<span className="text-white font-semibold">结构化内容工程：</span>优化内容结构以及引用信号，提升 AI 采信概率。</li>
                                                    <li>2、<span className="text-white font-semibold">内容生成与分发：</span>生成品牌、评测、对比、问答及负面优化类内容。</li>
                                                    <li>3、<span className="text-white font-semibold">外部平台筛选与发布：</span>筛选发布平台，完成合作沟通和内容发布。</li>
                                                    <li>4、<span className="text-white font-semibold">媒体与信号构建：</span>建设可信信息源和多来源引用信号，提升内容权威性。</li>
                                                </ul>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-[17.5px] xl:text-[19px] font-black text-white mb-1">
                                                    <span className="w-2 h-3.5 bg-[#004CE5] rounded-full shadow-[0_0_6px_rgba(0,76,229,0.8)]" />
                                                    三、GEO 监测与反馈
                                                </div>
                                                <ul className="list-none pl-4 text-zinc-300 flex flex-col gap-1.5 leading-relaxed text-[16.5px] xl:text-[18px]">
                                                    <li>1、<span className="text-white font-semibold">数据监测反馈：</span>持续监测核心指标，输出报告并调整优化策略。</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 xl:py-4 text-zinc-300 align-middle pr-4 border-b border-white/[0.22] border-l border-white/[0.22] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-3.5 xl:p-4.5 rounded-xl mt-1 shadow-inner">
                                            <p className="text-zinc-100 text-[18px] xl:text-[19.5px] leading-relaxed">
                                                提升核心产品词下的 <strong className="text-white font-bold">AI 推荐曝光和品牌位次</strong>，增加 AI 销售额 <strong className="text-[#6494ff] font-extrabold">5%</strong>，辅助线上线下渠道转化提升约 <strong className="text-white font-bold">5% - 10%</strong>。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-3 xl:py-4 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.22] pl-6 border-b border-white/[0.22]">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-3.5 xl:p-4.5 rounded-xl text-center shadow-lg">
                                            <span className="text-[17.5px] xl:text-[19px] text-white font-extrabold tracking-widest">共建品牌资料库</span>
                                            <p className="text-[16px] xl:text-[17px] text-zinc-300 leading-relaxed text-left mt-2 border-t border-white/10 pt-2">
                                                需品牌方配合提供品牌画册、产品手册、核心产品卖点及近期技术宣发口径等权威信息源。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 3: 监测词 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-3 xl:py-4 pl-3.5 font-semibold text-zinc-100 align-middle">
                                        <div className="flex flex-col gap-1 mt-1">
                                            <span className="text-[18.5px] xl:text-[20.5px] text-white font-black">监测词</span>
                                            <span className="text-[15px] xl:text-[16px] text-zinc-400 font-bold">（负面及错误）</span>
                                        </div>
                                    </td>
                                    <td className="py-3 xl:py-4 text-zinc-300 align-middle pr-4 border-l border-white/[0.22] pl-5">
                                        <div className="flex flex-col gap-3 text-[16.5px] xl:text-[18px] leading-relaxed">
                                            <p className="text-zinc-200">
                                                <strong className="text-white font-bold">1、错误信息监测：</strong>建立错误信息监测机制，系统排查品牌在 AI 回答中出现的负面信息、错误认知、错误价格、错误来源及高频触发问题，定位主要问题类型和引用信源，并制定针对性优化策略。
                                            </p>
                                            <p className="text-zinc-200">
                                                <strong className="text-white font-bold">2、纠偏处理执行：</strong>针对不同类型的错误信息进行分类处理，通过删除负面，正确信息补充、权威内容发布、负面内容覆盖、引用信号强化等方式，修正 AI 回答中的异常信息，降低负面及错误内容的出现频率。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-3 xl:py-4 text-zinc-300 align-middle pr-4 border-l border-white/[0.22] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-3.5 xl:p-4.5 rounded-xl mt-1 shadow-inner">
                                            <p className="text-zinc-100 text-[18px] xl:text-[19.5px] leading-relaxed">
                                                降低负面及错误信息出现频率，提升品牌信息 <strong className="text-white font-bold">准确性和信任度</strong>，减少用户流失并辅助转化提升约 <strong className="text-[#6494ff] font-extrabold">20%</strong>。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-3 xl:py-4 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.22] pl-6">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-3.5 xl:p-4.5 rounded-xl shadow-lg">
                                            <p className="text-zinc-200 text-[16px] xl:text-[17px] leading-relaxed">
                                                需品牌方提供 <strong className="text-white font-bold">官方口径、正确产品信息、价格说明及证明材料</strong>，并协助确认负面/错误信息的处理优先级和澄清口径。
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

export default Page_GeoWorkAcceptance;
