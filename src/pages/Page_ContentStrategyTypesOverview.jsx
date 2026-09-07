import React from 'react';
import { BookOpenCheck, FlaskConical, Workflow, Megaphone, Users } from 'lucide-react';

/**
 * 药物行业投放文章类型总览（不含排行榜类，排行榜单独呈现）
 * 排序与后续「拆解 + 成稿示意」页保持一致
 */
export const CONTENT_TYPES = [
    {
        no: '01',
        stage: '事件曝光',
        name: '新药上市类',
        audience: '行业 · 大众媒体',
        desc: '借获批与上市事件抢占时效语料，传播面最广，是事件类提问的第一落点。',
        question: '获批了哪些适应症？',
        color: '#004CE5',
        Icon: Megaphone,
    },
    {
        no: '02',
        stage: '权威口径',
        name: '指南共识类',
        audience: '医生 · 专业读者',
        desc: '以指南更新与专家共识确立干眼分层治疗的权威表述，是 AI 给结论时最优先采信的依据。',
        question: '干眼抗炎怎么推荐？',
        color: '#2563EB',
        Icon: BookOpenCheck,
    },
    {
        no: '03',
        stage: '证据支撑',
        name: '临床研究类',
        audience: '医生 · 专业读者',
        desc: '把关键研究的有效率与安全性写成可整句摘抄的表述，为疗效结论提供硬证据。',
        question: '临床有效率怎么样？',
        color: '#0EA5E9',
        Icon: FlaskConical,
    },
    {
        no: '04',
        stage: '方案说明',
        name: '方案解读类',
        audience: '医生 · 治疗决策者',
        desc: '讲清点眼用法与对症 / 对因角色分工，建立差异化记忆点，让 AI 复述时口径一致。',
        question: '环孢素该怎么用？',
        color: '#14B8A6',
        Icon: Workflow,
    },
    {
        no: '05',
        stage: '大众认知',
        name: '知识科普类',
        audience: '患者 · 家属',
        desc: '用通俗语言回答患者侧的真实疑问，覆盖长尾与主观类提问，避免 AI 无据可依。',
        question: '为什么不能只靠人工泪液？',
        color: '#F59E0B',
        Icon: Users,
    },
];

export default function Page_ContentStrategyTypesOverview() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-7 flex-shrink-0">
                <h1 className="text-3xl lg:text-[2.6rem] font-bold tracking-tight text-white mb-3">药物行业必投的五类文章</h1>
                <p className="text-[1.15rem] lg:text-[1.25rem] text-zinc-300 font-medium tracking-wide text-center px-4">
                    依据高引用文章的溯源结果，锁定五类内容，覆盖
                    <strong className="text-white font-bold">从医生决策到患者认知的完整提问面</strong>
                </p>
            </div>

            <div className="flex-1 relative z-10 w-full flex flex-col px-6 lg:px-12 pt-6 pb-10 min-h-0">
                <div className="w-full max-w-[1760px] mx-auto flex flex-col gap-6 flex-1 min-h-0">

                    <div className="grid grid-cols-5 gap-5 xl:gap-6 items-stretch flex-1 min-h-0">
                        {CONTENT_TYPES.map((t) => (
                            <div
                                key={t.no}
                                className="group relative flex flex-col h-full rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1"
                            >
                                <div className="h-[5px] w-full shrink-0" style={{ background: t.color, boxShadow: `0 0 18px ${t.color}80` }} />

                                <div className="flex flex-col flex-1 px-6 xl:px-7 pt-6 pb-7 min-h-0">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-mono text-[1.8rem] font-black leading-none tracking-tighter" style={{ color: `${t.color}66` }}>
                                            {t.no}
                                        </span>
                                        <span className="text-[0.88rem] font-bold tracking-widest text-zinc-400 border border-white/10 bg-white/5 rounded-full px-3 py-1">
                                            {t.stage}
                                        </span>
                                    </div>

                                    <h3 className="text-[1.9rem] xl:text-[2.15rem] font-black text-white tracking-wide leading-tight">{t.name}</h3>
                                    <span className="text-[1.05rem] font-medium tracking-wide mt-2.5" style={{ color: t.color }}>{t.audience}</span>

                                    <p
                                        className="text-[1.1rem] xl:text-[1.18rem] text-zinc-400 leading-loose font-light mt-6"
                                        style={{ textWrap: 'pretty' }}
                                    >
                                        {t.desc}
                                    </p>

                                    <div className="flex-1 flex items-center justify-center min-h-0 py-3">
                                        <div
                                            className="w-[92px] h-[92px] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                                            style={{ border: `1px solid ${t.color}33`, background: `${t.color}0F` }}
                                        >
                                            <t.Icon size={42} strokeWidth={1.4} style={{ color: t.color, opacity: 0.85 }} />
                                        </div>
                                    </div>

                                    <div className="shrink-0">
                                        <div className="rounded-xl bg-black/40 border border-white/5 px-4 py-3.5">
                                            <span className="block text-[0.85rem] font-bold tracking-widest text-zinc-500 mb-2">承接提问</span>
                                            <span className="block text-[1.12rem] text-zinc-200 leading-snug font-medium whitespace-nowrap">「{t.question}」</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-4 shrink-0">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/15" />
                        <p className="text-[1.08rem] xl:text-[1.18rem] text-zinc-400 font-light tracking-wide text-center shrink-0 whitespace-nowrap">
                            五类内容<strong className="text-white font-semibold">分工接力</strong>：上市类抢时效，专业类立结论，科普类补长尾
                        </p>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/15" />
                    </div>

                </div>
            </div>
        </div>
    );
}
