import React from 'react';

function Page_GeoValueAddedServices() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-12 sm:px-16 pt-5 pb-10 animate-fade-in">
            {/* Background Ambient Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute right-[-10%] top-[15%] w-[500px] h-[500px] bg-[#004CE5]/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
            <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-[#004CE5]/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

            <div className="w-full flex flex-col h-full relative z-10">
                {/* Header Section - Centered and shifted up by 20px using mt-[-20px] */}
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        增值服务
                    </h1>
                </div>

                {/* Main Content Box - Glassmorphic styled matching Page_GeoWorkAcceptance */}
                <div className="w-full mt-1.5 xl:mt-2 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl py-[12px] px-[16px] xl:py-[16px] xl:px-[24px] shadow-2xl flex flex-col gap-2 xl:gap-2.5 flex-1 min-h-0 pt-[20px]">

                    {/* Table Container */}
                    <div className="w-full overflow-x-auto flex-1 flex flex-col justify-center">
                        <table className="w-full text-left border-collapse min-w-[1000px] h-full">
                            <thead>
                                <tr className="border-b-2 border-white/[0.22] text-zinc-200 text-[17px] xl:text-[18.5px] font-black">
                                    <th className="pb-2.5 pl-3.5 w-[15%]">服务项目</th>
                                    <th className="pb-2.5 w-[42%] pl-5">服务内容</th>
                                    <th className="pb-2.5 w-[23%] pl-5">预期成效</th>
                                    <th className="pb-2.5 pr-3.5 w-[20%] pl-6">协同事项</th>
                                </tr>
                            </thead>
                            <tbody className="text-[16.5px] xl:text-[18px] leading-relaxed">

                                {/* Row 1: 信息纠偏 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-2.5 xl:py-3.5 pl-3.5 font-semibold text-zinc-100 align-middle border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[18px] xl:text-[20px] text-white font-black">信息纠偏</span>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">1、大模型舆情监测：</strong>日常监测各大 AI 大模型中有关三九养胃舒颗粒的表述，重点排查与三九胃泰颗粒品名混淆、功效夸大、禁忌写错及对比问答中被竞品压过等误导性内容。
                                            </p>
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">2、错误快速净化：</strong>定位问题引用源，生成以说明书与权威健康站口径为准的高权重澄清语料补充发布，稀释错误表述并纠正 AI 记忆。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-3 rounded-xl shadow-inner">
                                            <p className="text-zinc-100 leading-relaxed">
                                                降低错误与负面表述被抓取的概率，保障 AI 生成的产品信息 <strong className="text-white font-bold">准确、合规、可溯源</strong>，避免误导购药决策。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.12] pl-6 border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-3 rounded-xl shadow-lg">
                                            <p className="text-zinc-300">
                                                配合提供说明书、品名对照口径、经医学 / 合规审核的对外表述，协助判断异常信息的处理优先级。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 2: 知识库搭建 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-2.5 xl:py-3.5 pl-3.5 font-semibold text-zinc-100 align-middle border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[18px] xl:text-[20px] text-white font-black">知识库搭建</span>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">1、数字资产整理：</strong>整合三九养胃舒颗粒的适应症（温中健脾 / 脾胃虚寒型）、用法用量与规格、与三九胃泰产品线区分、安全性注意事项及高频购药问答对。
                                            </p>
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">2、标准化结构改造：</strong>将零散事实转化为大模型偏好、利于爬虫收录的标准化结构语料，建立品牌专属知识屋，统一各平台表述口径。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-3 rounded-xl shadow-inner">
                                            <p className="text-zinc-100 leading-relaxed">
                                                确立产品在大模型底层的“首推事实共识”，消除 AI 对养胃舒的认知真空，<strong className="text-white font-bold">大幅提高 AI 首选推荐概率</strong>。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.12] pl-6 border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-3 rounded-xl shadow-lg">
                                            <p className="text-zinc-300">
                                                提供说明书与药监可查信息、品名对照口径，以及经合规审核的科普与答疑素材。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 3: 官网改造 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-2.5 xl:py-3.5 pl-3.5 font-semibold text-zinc-100 align-middle border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[18px] xl:text-[20px] text-white font-black">官网改造</span>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">1、官方信息点优化：</strong>对品牌官网、官方微信公众号等内容进行排版与代码优化，添加利于 AI 识别的语义标签。
                                            </p>
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">2、抓取信号增强：</strong>在官方站点内埋设适应症、用法与注意事项等高权重事实节点，方便 AI 智能体检索和抓取官方权威信息。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-4 border-b border-white/[0.12] border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-3 rounded-xl shadow-inner">
                                            <p className="text-zinc-100 leading-relaxed">
                                                强化官方渠道对于大模型的影响力，<strong className="text-white font-bold">显著提升官方源被 AI 引用为出处（Citation）</strong>的概率。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.12] pl-6 border-b border-white/[0.12]">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-3 rounded-xl shadow-lg">
                                            <p className="text-zinc-300">
                                                配合开放官网后台或对接技术团队，协助完成页面信息及标签修改，并同步合规审核意见。
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                {/* Row 4: 竞品监测 */}
                                <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                                    <td className="py-2.5 xl:py-3.5 pl-3.5 font-semibold text-zinc-100 align-middle">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[18px] xl:text-[20px] text-white font-black">竞品监测</span>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-4 border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">1、竞品推荐率监控：</strong>持续追踪达喜、三九胃泰颗粒、江中、香砂养胃丸等主要竞品 / 同门品类在各大模型推荐大盘中的位次变化和声量分布。
                                            </p>
                                            <p className="text-zinc-300">
                                                <strong className="text-white font-bold">2、攻防话术调整：</strong>当竞品提及率出现异常上涨时，立即输出防御及拦截建议，动态调整分型选药、温中健脾差异化等优势语料的投放方向。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-4 border-l border-white/[0.12] pl-5">
                                        <div className="flex flex-col gap-2 bg-[#004CE5]/6 border border-[#004CE5]/20 p-3 rounded-xl shadow-inner">
                                            <p className="text-zinc-100 leading-relaxed">
                                                掌握竞品在 AI 端的策略走向，<strong className="text-white font-bold">守住养胃推荐清单中的声量份额</strong>，快速反击竞品与同门截流。
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-2.5 xl:py-3.5 text-zinc-300 align-middle pr-3 leading-relaxed border-l border-white/[0.12] pl-6">
                                        <div className="flex flex-col gap-2 bg-white/[0.025] border border-white/[0.06] p-3 rounded-xl shadow-lg">
                                            <p className="text-zinc-300">
                                                明确重点对线竞品与同门品类名单，协同锁定对比表述的合规边界与口径。
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

export default Page_GeoValueAddedServices;
