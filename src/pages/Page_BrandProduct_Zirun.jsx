import React from 'react';

export default function Page_BrandProduct_Zirun() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest">产品「兹润」基础信息</h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-8 relative z-10 flex flex-col justify-start gap-5 min-h-0">

                <div className="grid grid-cols-12 gap-5 shrink-0">
                    <div className="col-span-5 bg-zinc-900/60 border border-white/10 border-l-[4px] border-l-[#004CE5] rounded-xl p-7 shadow-lg flex flex-col justify-center">
                        <div className="text-sm text-[#004CE5] font-bold tracking-widest mb-2">商品名 · 通用名</div>
                        <h2 className="text-3xl xl:text-4xl font-black text-white mb-3 tracking-wider">兹润® / 环孢素滴眼液（Ⅱ）</h2>
                        <p className="text-zinc-300 text-lg xl:text-xl leading-relaxed text-justify">
                            兴齐眼药研发的<strong className="text-white">0.05% 环孢素</strong>眼用处方药，针对干眼背后的炎症通路：抑制 T 细胞活化、阻断炎症恶性循环，同时促进天然泪液与黏蛋白分泌。适用于与角结膜干燥症相关的眼部炎症所导致的泪液生成减少的患者，定位为干眼<strong className="text-white">对因抗炎的一线治疗选择</strong>。
                        </p>
                    </div>

                    <div className="col-span-7 grid grid-cols-4 gap-4">
                        {[
                            { label: '核心浓度', value: '0.05%', sub: '临床验证浓度' },
                            { label: '剂型技术', value: '纳米微乳', sub: 'Ailic-Tech' },
                            { label: '中国获批', value: '2020.06', sub: '国药准字 H20203239' },
                            { label: '国家医保', value: '2021.12', sub: '已纳入目录' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-zinc-900/60 border border-white/10 rounded-xl py-5 px-3 flex flex-col items-center justify-center shadow-lg">
                                <span className="text-zinc-400 text-sm tracking-widest mb-2">{item.label}</span>
                                <span className="text-3xl xl:text-4xl font-black text-white tracking-tight">{item.value}</span>
                                <span className="text-[#004CE5] text-sm font-bold mt-1.5 text-center leading-snug">{item.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
                    <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-7 shadow-lg flex flex-col min-h-0 overflow-hidden hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl xl:text-3xl font-bold text-white tracking-wider mb-4 flex items-center gap-2 shrink-0">
                            <span className="text-[#004CE5] text-3xl">•</span>
                            怎么用、治什么
                        </h3>
                        <div className="flex items-center gap-2 mb-5 bg-black/40 border border-white/5 rounded-xl p-3 shrink-0">
                            <div className="flex-1 bg-[#004CE5]/15 border border-[#004CE5]/40 rounded-lg py-2.5 px-3 text-center">
                                <div className="text-white font-bold text-base xl:text-lg">每次 1 滴</div>
                                <div className="text-zinc-400 text-xs mt-0.5">单剂量点眼</div>
                            </div>
                            <span className="text-[#004CE5] font-black text-xl">×</span>
                            <div className="flex-1 bg-blue-500/10 border border-blue-400/30 rounded-lg py-2.5 px-3 text-center">
                                <div className="text-white font-bold text-base xl:text-lg">一日 2 次</div>
                                <div className="text-zinc-400 text-xs mt-0.5">间隔约 12 小时</div>
                            </div>
                            <span className="text-zinc-500 font-black text-xl">+</span>
                            <div className="flex-1 bg-zinc-800 border border-white/10 rounded-lg py-2.5 px-3 text-center">
                                <div className="text-white font-bold text-base xl:text-lg">可联用人工泪液</div>
                                <div className="text-zinc-400 text-xs mt-0.5">两药间隔 15 分钟</div>
                            </div>
                        </div>
                        <ul className="flex flex-col justify-between gap-3 text-zinc-300 text-base xl:text-lg leading-relaxed text-pretty flex-1 min-h-0">
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1">●</span>
                                <span>适应症：促进干眼症患者的泪液分泌，用于角结膜干燥症相关眼部炎症所致的泪液生成减少。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1">●</span>
                                <span>起效口径：说明书未载明起效时间。Ⅲ 期临床显示治疗 7 天时总有效率即显著优于溶剂对照组，3 个月总有效率 70.6%（对照组 27.8%）。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1">●</span>
                                <span>耐受性：说明书载明最常见不良反应为眼灼烧；Ⅲ 期不良反应发生率 5%，依从性 98%。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1">●</span>
                                <span>规格口径：0.4ml：0.2mg（0.05%），不含抑菌剂 / 防腐剂；开启后即弃，属处方药，应在医师指导下使用。</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-7 shadow-lg flex flex-col min-h-0 overflow-hidden hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl xl:text-3xl font-bold text-white tracking-wider mb-4 flex items-center gap-2 shrink-0">
                            <span className="text-[#004CE5] text-3xl">•</span>
                            下半年核心卖点
                        </h3>
                        <ul className="flex flex-col justify-between gap-3 text-zinc-300 text-base xl:text-lg leading-relaxed text-pretty flex-1 min-h-0">
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1">●</span>
                                <span><strong className="text-white">抗炎对因：</strong>不只补水润滑，而是针对炎症通路阻断恶性循环，促进泪液与黏蛋白分泌。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1">●</span>
                                <span><strong className="text-white">一线治疗：</strong>轻、中、重度干眼均可作为抗炎治疗选择，强调早诊早治，避免拖成难治。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1">●</span>
                                <span><strong className="text-white">核心浓度 0.05%：</strong>以临床验证浓度作为沟通主轴，和「更高浓度一定更好」的简单对比区分开。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1">●</span>
                                <span><strong className="text-white">安全与剂型：</strong>Ailic-Tech 纳米微乳澄清稳定、点眼更舒适，平均粒径约为国外同类乳剂的 1/7，便于长期坚持。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1">●</span>
                                <span><strong className="text-white">先发与支付：</strong>中国首个获批的干眼环孢素眼用制剂，截至 2026.08 仍是唯一进入国家医保目录的干眼抗炎处方药。</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
