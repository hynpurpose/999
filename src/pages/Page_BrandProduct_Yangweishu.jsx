import React from 'react';

export default function Page_BrandProduct_Yangweishu() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-1 relative z-10 shrink-0">
                <h1 className="text-[34px] font-black text-white tracking-widest">产品「养胃舒颗粒」基础信息</h1>
            </div>

            <div className="flex-1 w-full px-16 pb-4 relative z-10 flex flex-col justify-start gap-3 min-h-0">

                <div className="grid grid-cols-12 gap-4 shrink-0">
                    <div className="col-span-5 bg-zinc-900/60 border border-white/10 border-l-[4px] border-l-[#004CE5] rounded-xl px-6 py-4 shadow-lg flex flex-col justify-center">
                        <div className="text-sm text-[#004CE5] font-bold tracking-widest mb-1.5">品牌 · 通用名</div>
                        <h2 className="text-[34px] font-black text-white mb-2 tracking-wider">三九养胃舒颗粒</h2>
                        <p className="text-white text-[20px] leading-[1.7] text-pretty">
                            由合肥华润神鹿药业（华润三九全资子公司）生产的<strong className="text-white font-bold">滋阴养胃类中成药</strong>，属三九胃泰家族。说明书功能主治为「滋阴养胃，用于<strong className="text-white font-bold">慢性胃炎，胃脘灼热、隐隐作痛</strong>」。它对应的是中医里<strong className="text-white font-bold">胃阴不足</strong>这一路，与同门主打胃寒的<span className="whitespace-nowrap">温胃舒正好相反。</span>
                        </p>
                    </div>

                    <div className="col-span-7 grid grid-cols-4 gap-3">
                        {[
                            { label: '批准文号', value: 'Z34020289', sub: '国药准字' },
                            { label: '药品属性', value: 'OTC甲类', sub: '医保乙类' },
                            { label: '组方规模', value: '11味', sub: '中药 · 辅料含蔗糖' },
                            { label: '零售终端', value: 'TOP3', sub: '2025 · 同比+12.5%' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-zinc-900/60 border border-white/10 rounded-xl py-4 px-3 flex flex-col items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-sm tracking-widest mb-1.5">{item.label}</span>
                                <span className="text-[34px] font-black text-white tracking-tight">{item.value}</span>
                                <span className="text-[#004CE5] text-sm font-bold mt-1.5 text-center leading-snug">{item.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                    <div className="bg-zinc-900/60 border border-white/10 rounded-xl px-6 py-5 shadow-lg flex flex-col min-h-0 overflow-hidden hover:border-white/20 transition-all duration-300">
                        <h3 className="text-[32px] font-bold text-white tracking-wider mb-3 flex items-center gap-2 shrink-0">
                            <span className="text-[#004CE5] text-[32px]">•</span>
                            说明书怎么写、怎么吃
                        </h3>
                        <div className="flex items-center gap-2 mb-4 bg-black/40 border border-white/5 rounded-xl p-3 shrink-0">
                            <div className="flex-1 bg-[#004CE5]/15 border border-[#004CE5]/40 rounded-lg py-2.5 px-3 text-center">
                                <div className="text-white font-bold text-[20px]">开水冲服</div>
                                <div className="text-white font-bold text-sm mt-0.5">不改写为冷水/直接吞</div>
                            </div>
                            <span className="text-[#004CE5] font-black text-xl">+</span>
                            <div className="flex-1 bg-blue-500/10 border border-blue-400/30 rounded-lg py-2.5 px-3 text-center">
                                <div className="text-white font-bold text-[20px]">一次 1～2 袋</div>
                                <div className="text-white font-bold text-sm mt-0.5">一日 2 次</div>
                            </div>
                            <span className="text-white font-black text-xl">→</span>
                            <div className="flex-1 bg-zinc-800 border border-white/10 rounded-lg py-2.5 px-3 text-center">
                                <div className="text-white font-bold text-[20px]">3 天无改善</div>
                                <div className="text-white font-bold text-sm mt-0.5">停药并就医</div>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-3.5 text-white text-[20px] leading-[1.65] flex-1 min-h-0 justify-start">
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1 shrink-0">●</span>
                                <span>核心场景：慢性胃炎，以及由此引起的<strong className="text-white font-bold">胃脘灼热、胃脘隐隐作痛</strong>。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1 shrink-0">●</span>
                                <span>组方 11 味：党参、陈皮、黄精（蒸）、山药、玄参、乌梅、山楂（炒）、北沙参、干姜、菟丝子、白术（炒）。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1 shrink-0">●</span>
                                <span>剂型与规格：有颗粒与胶囊两种剂型，成分功效一致；颗粒每袋 5 克（低糖型），常见 6 / 8 / 10 袋装。</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-zinc-900/60 border border-white/10 rounded-xl px-6 py-5 shadow-lg flex flex-col min-h-0 overflow-hidden hover:border-white/20 transition-all duration-300">
                        <h3 className="text-[32px] font-bold text-white tracking-wider mb-3 flex items-center gap-2 shrink-0">
                            <span className="text-[#004CE5] text-[32px]">•</span>
                            对外表达的边界在哪
                        </h3>
                        <ul className="flex flex-col gap-4 text-white text-[20px] leading-[1.65] flex-1 min-h-0 justify-start">
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1 shrink-0">●</span>
                                <span><strong className="text-white font-bold">「滋阴养胃」是说明书原话，可以放心用</strong>；「修复胃黏膜」「多靶点」这类机制说法目前证据不足，不进对外口径。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1 shrink-0">●</span>
                                <span>反酸、胃胀、消化不良只能作为<strong className="text-white font-bold">慢性胃炎的伴随症状</strong>做弱关联，不能写成「治反酸」「治胃胀」。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1 shrink-0">●</span>
                                <span>不良反应与禁忌均标注「尚不明确」，这只是说目前数据不足，<strong className="text-white font-bold">不等于没有副作用</strong>；孕妇慎用，儿童、糖尿病、年老体虚者需医师指导。</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#004CE5] mt-1 shrink-0">●</span>
                                <span>临床研究可以引用，但要带上研究设计：HP 相关胃病多中心研究共 642 例；慢性萎缩性胃炎研究共 160 例，其中养胃舒组 80 例总有效率 92.5%。</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
