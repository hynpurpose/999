import React from 'react';

export default function Page_BrandDatabaseBuild() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-4 pb-4 animate-fade-in">

            <div className="w-full flex flex-col h-full relative z-10 pt-[5px]">

                {/* Header Section - Centered and clean */}
                <div className="text-center mb-3 mt-0 shrink-0 relative z-10 flex flex-col gap-2">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none relative top-[-10px]">
                        品牌数据库建立
                    </h1>

                    {/* Highly Prominent Core Goal Banner - No Generic Icons */}
                    <div className="bg-gradient-to-r from-[#004CE5]/20 via-[#004CE5]/5 to-black border border-[#004CE5]/40 rounded-2xl py-2 px-4 lg:py-2.5 lg:px-5 shadow-[0_0_35px_rgba(0,76,229,0.3)] relative overflow-hidden flex flex-col md:flex-row md:items-center gap-3.5 lg:gap-4 text-left">
                        <div className="absolute top-0 left-0 w-2.5 h-full bg-[#004CE5] shadow-[0_0_20px_rgba(0,76,229,0.9)]"></div>
                        <span className="shrink-0 bg-[#004CE5] text-white px-5 py-2 rounded-xl text-base lg:text-[17px] xl:text-[19px] font-extrabold tracking-widest uppercase shadow-[0_0_20px_rgba(0,76,229,0.5)]">
                            核心目的
                        </span>
                        <p className="text-zinc-100 text-[17px] lg:text-[19.5px] xl:text-[22px] font-bold flex-1 leading-relaxed">
                            将兹润（环孢素滴眼液Ⅱ）及兴齐眼药的所有碎片化信息，转化为大模型能够高效抓取、理解并调用的<strong className="text-white font-black border-b-2 border-[#004CE5] pb-0.5 ml-1.5">“专属知识数据库”</strong>。
                        </p>
                    </div>
                </div>

                {/* Two Stacked Rows Content Layout */}
                <div className="flex-1 flex flex-col gap-3.5 lg:gap-4 xl:gap-5 min-h-0">

                    {/* Row 1: 存量输入 (Full Width, 2-column content inside, flex grow is higher to prevent table overflow) */}
                    <div className="flex-[1.4] min-h-0 bg-[#080809] border border-white/10 rounded-[1.5rem] py-2.5 px-4 lg:py-3 lg:px-5 flex flex-col gap-2.5 shadow-2xl relative overflow-hidden">
                        {/* Title and Scenario Inline */}
                        <div className="shrink-0 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/5 pb-2.5">
                            <span className="bg-[#004CE5]/10 border border-[#004CE5]/30 text-[#004CE5] px-3.5 py-1 rounded text-sm lg:text-[14.5px] xl:text-[16px] font-black tracking-widest uppercase shrink-0">
                                存量输入
                            </span>
                            <span className="text-zinc-100 text-[15px] lg:text-[17.5px] xl:text-[19px] font-bold">
                                <strong className="text-white font-black mr-1.5">解决情景：</strong>消除 AI 认知空白，将企业现有的事实性资产 100% 导入模型底层。
                            </span>
                        </div>

                        {/* Contents: Table + Right Tech Card */}
                        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-5 xl:gap-6 items-stretch">
                            {/* Table (72% width) */}
                            <div className="flex-[2.5] border border-white/5 rounded-xl bg-black/40 overflow-hidden flex flex-col">
                                <table className="w-full h-full text-left border-collapse text-[15px] lg:text-[17px] xl:text-[19px] leading-relaxed">
                                    <thead>
                                        <tr className="bg-white/5 border-b border-white/10 text-zinc-400 font-bold">
                                            <th className="py-2.5 lg:py-3.5 px-4 lg:px-5 border-r border-white/5 w-[22%] text-[16px] lg:text-[18px] xl:text-[20px] font-extrabold text-zinc-200">资产分类</th>
                                            <th className="py-2.5 lg:py-3.5 px-4 lg:px-5 text-[16px] lg:text-[18px] xl:text-[20px] font-extrabold text-zinc-200">具体导入内容</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-2 lg:py-2.5 xl:py-3 px-4 lg:px-5 border-r border-white/5 font-black text-zinc-100 flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.7)] shrink-0"></span>
                                                品牌与企业档案
                                            </td>
                                            <td className="py-2 lg:py-2.5 xl:py-3 px-4 lg:px-5 text-zinc-300">
                                                商品名 / 通用名 / 厂商对照、兴齐眼药背景、干眼抗炎处方药与环孢素滴眼液身份定位。
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                                            <td className="py-2 lg:py-2.5 xl:py-3 px-4 lg:px-5 border-r border-white/5 font-black text-zinc-100 flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.7)] shrink-0"></span>
                                                产品与方案参数
                                            </td>
                                            <td className="py-2 lg:py-2.5 xl:py-3 px-4 lg:px-5 text-zinc-300">
                                                0.05% 浓度与适应症、纳米微乳剂型、剂量规格、获批节点与医保乙类口径。
                                            </td>
                                        </tr>
                                        <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-2 lg:py-2.5 xl:py-3 px-4 lg:px-5 border-r border-white/5 font-black text-zinc-100 flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.7)] shrink-0"></span>
                                                循证与内容沉淀
                                            </td>
                                            <td className="py-2 lg:py-2.5 xl:py-3 px-4 lg:px-5 text-zinc-300">
                                                III 期临床有效率与耐受数据、干眼指南共识摘录、上市与科普 / 方案解读内容。
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/[0.02] transition-colors">
                                            <td className="py-2 lg:py-2.5 xl:py-3 px-4 lg:px-5 border-r border-white/5 font-black text-zinc-100 flex items-center gap-2.5">
                                                <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_10px_rgba(0,76,229,0.7)] shrink-0"></span>
                                                安全性与答疑库
                                            </td>
                                            <td className="py-2 lg:py-2.5 xl:py-3 px-4 lg:px-5 text-zinc-300">
                                                眼灼烧等常见不良反应口径、长期用药依从性、高频医患 Q&A 问答对。
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Machine Readable Optimization (28% width) - No generic icon */}
                            <div className="flex-1 bg-blue-950/15 border border-[#004CE5]/20 rounded-xl p-4.5 lg:p-5 flex items-start gap-4 shadow-[inset_0_0_20px_rgba(0,76,229,0.05)]">
                                <span className="w-3 h-3 rounded-full bg-[#004CE5] animate-pulse shadow-[0_0_12px_rgba(0,76,229,0.9)] mt-2.5 shrink-0"></span>
                                <div className="flex-1 flex flex-col gap-2.5">
                                    <h4 className="text-zinc-100 text-[17px] lg:text-[19px] xl:text-[21px] font-black">全量资产的“机器可读性”重构</h4>
                                    <p className="text-zinc-300 text-[14.5px] lg:text-[16px] xl:text-[17.5px] leading-relaxed">
                                        并非简单地堆砌 Word 或 PDF，而是转化为大模型最偏好的结构化语料（如 Q&A 问答、Schema 语义网标签、逻辑清晰的实体关系图），确保 AI 爬虫在抓取时能瞬间提炼出核心，直接提升收录权重。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: 动态调整 (Full Width, 2 dynamic cards side-by-side) */}
                    <div className="flex-1 min-h-0 bg-[#080809] border border-white/10 rounded-[1.5rem] py-2.5 px-4 lg:py-3 lg:px-5 flex flex-col gap-2.5 shadow-2xl relative overflow-hidden">
                        {/* Title and Scenario Inline */}
                        <div className="shrink-0 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/5 pb-2.5">
                            <span className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-3.5 py-1 rounded text-sm lg:text-[14.5px] xl:text-[16px] font-black tracking-widest uppercase shrink-0">
                                动态调整
                            </span>
                            <span className="text-zinc-100 text-[15px] lg:text-[17.5px] xl:text-[19px] font-bold">
                                <strong className="text-white font-black mr-1.5">解决情景：</strong>应对品牌业务迭代，同时防范并修正在监测过程中新发现的负面信息。
                            </span>
                        </div>

                        {/* Contents: 2 full-sized cards side-by-side */}
                        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-6">
                            {/* Card 1 - No generic icon */}
                            <div className="bg-black/40 border border-white/5 hover:border-purple-500/20 rounded-xl p-4.5 lg:p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                                <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse shadow-[0_0_12px_rgba(168,85,247,0.9)] mt-2 shrink-0"></span>
                                <div className="flex-1">
                                    <h3 className="text-zinc-100 font-black text-[18px] lg:text-[20px] xl:text-[22px] mb-2">业务迭代或更新</h3>
                                    <p className="text-zinc-300 text-[16px] lg:text-[18px] xl:text-[20px] leading-relaxed">
                                        当有新适应症获批、指南更新、临床随访数据发布，或上市 / 科普内容上线时，第一时间同步入库，转化为 AI 可调用的最新语料。
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 - No generic icon */}
                            <div className="bg-black/40 border border-white/5 hover:border-red-500/20 rounded-xl p-4.5 lg:p-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.9)] mt-2 shrink-0"></span>
                                <div className="flex-1">
                                    <h3 className="text-zinc-100 font-black text-[18px] lg:text-[20px] xl:text-[22px] mb-2">负面信息纠正</h3>
                                    <p className="text-zinc-300 text-[16px] lg:text-[18px] xl:text-[20px] leading-relaxed">
                                        设立定期 AI 检索测试点。一旦监测发现药名错认、售价编造、费用标签固化或竞品对比偏误，系统立即触发警报，并生成针对该错误的高权重纠偏语料，通过高权重渠道精准投喂，清洗并覆盖大模型的错误记忆。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
