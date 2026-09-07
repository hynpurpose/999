import React from 'react';

const TIERS = [
    {
        role: '为主',
        weight: 70,
        title: '专业医疗平台',
        claim: '定口径',
        desc: '机制、适应症、联合方案、指南推荐与循证数据，全部由专业信源发出，保证大模型抓到的是可溯源的规范表述。',
        platforms: ["中国医药信息查询平台","复禾健康 / 39健康网","生命时报 / 丁香园","国家医疗保障局","315价格网 / 药事服务网"],
        accent: {
            bar: 'from-[#004CE5] to-blue-400',
            glow: '0 0 18px rgba(0, 76, 229, 0.85)',
            num: 'group-hover:text-blue-100',
            border: 'group-hover:border-[#004CE5]/50',
            text: 'text-blue-300',
            chip: 'border-[#004CE5]/25 bg-[#004CE5]/10 text-blue-100',
            tag: 'bg-[#004CE5]/15 text-blue-200 border-[#004CE5]/30',
        },
    },
    {
        role: '为辅',
        weight: 30,
        title: '普通社媒平台',
        claim: '补体验',
        desc: '找素人作者与患者、家属写真实感受和经验分享，让 AI 面对体验类、决策类提问时有活人语料可引，而不是闭口不答。',
        platforms: ["夸克","神马搜索","小荷健康","QQ新闻","今日头条 / 搜狐网"],
        accent: {
            bar: 'from-amber-600 to-amber-400',
            glow: '0 0 18px rgba(245, 158, 11, 0.85)',
            num: 'group-hover:text-amber-100',
            border: 'group-hover:border-amber-500/50',
            text: 'text-amber-300',
            chip: 'border-amber-500/25 bg-amber-500/10 text-amber-100',
            tag: 'bg-amber-500/15 text-amber-200 border-amber-500/30',
        },
    },
];

export default function Page_DeliveryStrategy_Combo() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-8 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">按权分发</h1>
                <p className="text-[1.15rem] lg:text-[1.25rem] text-zinc-300 font-medium tracking-wide text-center px-4">
                    在已筛定的平台矩阵内，<strong className="text-white font-bold">专业医疗平台为主，普通社媒平台为辅</strong>
                </p>
            </div>

            <div className="flex-1 relative z-10 w-full flex flex-col justify-center px-4 lg:px-16 pb-12 min-h-0">
                <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {TIERS.map((tier) => (
                        <div key={tier.title} className="flex flex-col group relative">
                            <div className="w-full h-[8px] bg-zinc-800 rounded-full mb-8 relative overflow-hidden">
                                <div
                                    className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${tier.accent.bar}`}
                                    style={{ width: `${tier.weight}%`, boxShadow: tier.accent.glow }}
                                />
                            </div>

                            <div className="flex items-baseline gap-4 mb-6">
                                <div className="flex items-baseline">
                                    <span className={`text-[5rem] lg:text-[7.5rem] leading-none font-bold tracking-tighter text-white transition-colors ${tier.accent.num}`}>{tier.weight}</span>
                                    <span className="text-3xl lg:text-4xl font-bold text-zinc-500 ml-2 mb-3">%</span>
                                </div>
                                <span className={`text-[1rem] font-bold tracking-widest px-3.5 py-1 rounded-full border ${tier.accent.tag} mb-5`}>{tier.role}</span>
                            </div>

                            <div className={`flex items-baseline gap-4 pt-5 border-t border-white/10 transition-colors ${tier.accent.border}`}>
                                <h3 className="text-2xl lg:text-[2.1rem] font-bold text-white leading-snug">{tier.title}</h3>
                                <span className={`text-[1.3rem] lg:text-[1.5rem] font-bold ${tier.accent.text} tracking-wide`}>{tier.claim}</span>
                            </div>

                            <p className="text-[1.15rem] lg:text-[1.3rem] text-zinc-400 leading-relaxed font-light text-justify mt-4">
                                {tier.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-7">
                                {tier.platforms.map((p) => (
                                    <span key={p} className={`text-[1rem] font-medium px-3 py-1.5 rounded-md border ${tier.accent.chip}`}>{p}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
