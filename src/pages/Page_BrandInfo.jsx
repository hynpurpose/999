import React from 'react';

export default function Page_BrandInfo() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-4 pb-2 relative z-10 shrink-0">
                <h1 className="text-[36px] font-black text-white tracking-widest">企业与品牌基础信息</h1>
            </div>

            <div className="flex-1 w-full px-16 pb-10 relative z-10 flex flex-col justify-start gap-6 min-h-0">

                <div className="grid grid-cols-4 gap-6 w-full shrink-0">
                    {[
                        { label: '三九胃泰品牌创立', value: '1985年' },
                        { label: '集团营收(2025)', value: '316亿元' },
                        { label: '自我诊疗业务(2025)', value: '151亿元' },
                        { label: 'OTC生产企业榜', value: '12年第一' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-zinc-900/60 border border-white/10 rounded-xl py-7 flex flex-col items-center justify-center shadow-lg hover:border-white/20 transition-all duration-300">
                            <span className="text-zinc-400 text-lg tracking-widest mb-2 font-medium">{item.label}</span>
                            <span className="text-6xl font-black text-white tracking-tight">{item.value}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-6 w-full min-h-0 flex-1">
                    <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-10 shadow-lg relative flex flex-col justify-start hover:border-white/20 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-white tracking-wider mb-5 flex items-center gap-2">
                            <span className="text-[#004CE5] text-3xl">•</span>
                            品牌基础简介
                        </h3>
                        <p className="text-zinc-300 text-[22px] leading-relaxed text-justify tracking-wide">
                            华润三九前身为 1985 年成立的深圳南方制药厂，「三九胃泰」是其起家产品，「三九」与「999」商标均由此得名。公司以「999」为主品牌构建 1+N 品牌矩阵，覆盖感冒、胃肠、皮肤、肝胆、儿科等品类，长期位居中国非处方药生产企业榜单首位。
                        </p>
                    </div>

                    <div className="bg-zinc-900/60 border border-white/10 border-l-[4px] border-l-[#004CE5] rounded-xl p-10 shadow-lg relative flex flex-col justify-start hover:border-white/20 transition-all duration-300">
                        <h3 className="text-3xl font-bold text-white tracking-wider mb-5 flex items-center gap-2">
                            <span className="text-[#004CE5] text-3xl">•</span>
                            本方案关注重点
                        </h3>
                        <div className="text-zinc-300 text-[22px] leading-relaxed text-justify tracking-wide flex flex-col gap-4">
                            <strong className="text-white text-[24px] border-l-4 border-[#004CE5] pl-3.5">
                                聚焦养胃舒颗粒：滋阴养胃类中成药，甲类 OTC。
                            </strong>
                            养胃舒颗粒由合肥华润神鹿药业生产，说明书功能主治为「滋阴养胃，用于慢性胃炎，胃脘灼热、隐隐作痛」。它是三九胃泰家族中主打「胃阴不足」这一路的产品，消费者可在药店自行购买。
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-10 shadow-lg w-full flex flex-col shrink-0">
                    <h3 className="text-3xl font-bold text-white tracking-wider mb-6 flex items-center gap-2">
                        <svg className="w-7 h-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        关键决策与影响人群
                    </h3>

                    <div className="grid grid-cols-2 gap-12">
                        <div className="border-l border-white/20 pl-6 flex flex-col justify-start">
                            <h4 className="text-2xl font-bold text-white mb-3 tracking-wider">
                                第一类：自己拿主意的消费者
                            </h4>
                            <p className="text-[21px] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                胃部反复不适、被诊断过慢性胃炎，或替家人买药的人。他们往往先描述症状（胃里烧、隐隐疼），再反过来找药，习惯先搜一轮再决定买哪一个。
                            </p>
                        </div>
                        <div className="border-l border-white/20 pl-6 flex flex-col justify-start">
                            <h4 className="text-2xl font-bold text-white mb-3 tracking-wider">
                                第二类：临门一脚的推荐者
                            </h4>
                            <p className="text-[21px] text-zinc-400 leading-relaxed text-justify tracking-wide">
                                药店店员与执业药师、线上问诊医生。行业调研显示，店员推荐能改变多数人的购药意向，是 OTC 品类里决定最终拿哪一盒的关键一环。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
