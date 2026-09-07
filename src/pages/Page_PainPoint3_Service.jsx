import React from 'react';

export default function Page_PainPoint3_Service() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-white text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">01</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-white tracking-wider">
                    同门兄弟先打架，「999 的养胃药」AI 先想到三九胃泰
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-white text-xl lg:text-[24px] xl:text-[26px] font-bold leading-relaxed tracking-wide mb-4 shrink-0">
                    问「999 的养胃药」，AI 大多答三九胃泰，不是养胃舒；家族内部的证型分工，也常被答反。
                </p>

                {/* Table Slot */}
                <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-start relative overflow-hidden shadow-2xl min-h-0">
                    <div className="w-full border border-white/5 rounded-xl bg-black/40 overflow-hidden flex-1 flex flex-col min-h-0">
                        <table className="w-full h-full text-left border-collapse text-base lg:text-[17px] xl:text-[19px] leading-relaxed">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-white font-bold tracking-wide text-base lg:text-[18px] xl:text-[20px]">
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[25%] border-r border-white/5">高频问法</th>
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[22%] text-center border-r border-white/5">真正想问的</th>
                                    <th className="py-3 px-4 xl:py-3.5 xl:px-5 w-[53%]">同门打架的表现与风险</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-white border-r border-white/5 font-semibold leading-snug">999 有什么养胃药 / 三九的胃药哪个好</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">这个牌子买哪盒</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-white leading-relaxed">答案大多给三九胃泰：提及率 17.1% 对 0.7%（B 端 33% 对 3%）。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-white border-r border-white/5 font-semibold leading-snug">三九胃泰和养胃舒是一个药吗</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">是不是同一个</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-white leading-relaxed">已有平台把三九胃泰当成养胃舒的商品名。实为两个品种。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-white border-r border-white/5 font-semibold leading-snug">慢性胃炎吃三九胃泰还是养胃舒</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">同一个病选谁</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-white leading-relaxed">养胃舒对胃脘灼热隐痛，三九胃泰对湿热内蕴、气滞血瘀。</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-white border-r border-white/5 font-semibold leading-snug">养胃舒和温胃舒哪个好</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-center border-r border-white/5 text-[#004CE5] font-black text-lg lg:text-[20px] xl:text-[22px] tracking-wider">我该买哪一个</td>
                                    <td className="py-2.5 px-4 xl:py-3 xl:px-5 text-white leading-relaxed">证型相反，没有谁更好：胃里发烧灼 vs 胃发凉喜温，答反就吃错。</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Solution Section */}
                <div className="shrink-0 mt-4 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm font-black tracking-widest shrink-0 uppercase">
                        解法
                    </div>
                    <p className="text-white text-lg lg:text-[20px] font-bold leading-relaxed flex-1">
                        写清「三个药各管什么」的对照，并在「999 养胃药」这类品牌词里把养胃舒写进候选清单。
                    </p>
                </div>

                <div className="w-full text-right shrink-0 mt-2">
                    <p className="text-white text-xs tracking-wider">
                        口径说明：提及率为本方案 C / B 端 AI 监测口径；选药建议以各产品说明书功能主治为准。
                    </p>
                </div>
            </div>
        </div>
    );
}
