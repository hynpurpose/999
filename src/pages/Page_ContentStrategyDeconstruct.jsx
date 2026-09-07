import React from 'react';
import { Database } from 'lucide-react';

/**
 * 拆解法则：按高引用「新药上市 / 递送优化」类文章结构总结（兹润 / 环孢素干眼）
 * 左侧仍放高引用参考截图，截图替换后即可对齐新品牌视觉
 */
const RULES = [
    {
        no: '01',
        title: '结论前置',
        body: '标题直接给结论：环孢素眼用递送升级 / 兹润获批与可及；导读首句写清产品定位。',
    },
    {
        no: '02',
        title: '导读一次给齐关键要素',
        body: '适应症 · 0.05% 浓度 · 纳米微乳剂型 · 不含防腐剂 · 医保乙类可及。',
    },
    {
        no: '03',
        title: '五节叙事链',
        steps: [
            { k: '困局', v: '干眼高发 + 人工泪液只能补水' },
            { k: '机制', v: '抗炎对因 + 纳米微乳点眼更舒适' },
            { k: '证据', v: 'III 期有效率与起效节奏关键数字' },
            { k: '安全', v: '耐受性与依从性，强调可长期用药' },
            { k: '收口', v: '专家 / 指南口径 + 购药路径' },
        ],
    },
    {
        no: '04',
        title: '关键数字做成可摘抄句',
        body: '7 天起效、3 月总有效率 70.6% vs 27.8%、不良反应率约 5%、依从性 98%，便于 AI 整句引用。',
    },
    {
        no: '05',
        title: '专家引言抬权威',
        body: '用临床专家或指南共识原话收口，把叙事从“补水眼药水”推到“抗炎对因治疗”。',
    },
];

export default function Page_ContentStrategyDeconstruct() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative z-20 w-full px-8 lg:px-16 mt-4 lg:mt-5 flex-shrink-0">
                <div className="bg-[#0a0a0a] border border-[#004CE5]/20 rounded-2xl py-4 px-5 lg:px-6 flex flex-col relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004CE5] opacity-80" />
                    <div className="flex items-start gap-4">
                        <div className="text-4xl lg:text-5xl font-black text-[#004CE5]/20 font-mono leading-none tracking-tighter mt-1">02</div>
                        <div className="flex-1">
                            <h3 className="text-xl lg:text-2xl font-black text-white tracking-wide mb-2">文章解构：爆款文章逆向拆解</h3>
                            <p className="text-zinc-300 text-[1.05rem] leading-relaxed font-medium">
                                对高引用「新药上市类」文章做结构拆解，提取可被大模型稳定采信与摘抄的写法。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative z-10 w-full flex items-stretch px-8 lg:px-16 pt-4 pb-12 min-h-0 gap-6">
                <div className="w-[35%] flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h3 className="text-lg font-bold text-blue-100 tracking-wide">高引用参考文章</h3>
                        <span className="text-[11px] text-zinc-500">光明网 · 新药上市类</span>
                    </div>
                    <div className="flex-1 w-full rounded-xl overflow-hidden relative border border-white/5 bg-white">
                        <div className="w-full h-7 bg-zinc-100 border-b border-zinc-200 flex items-center px-3">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-[#ff5f56]/80" />
                                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]/80" />
                                <div className="w-2 h-2 rounded-full bg-[#27c93f]/80" />
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 top-7 p-1">
                            <img
                                src="/charts/geo-article-analysis-anlotinib.png"
                                alt="新药上市类参考文章"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-[3%] flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </div>

                <div className="flex-1 flex flex-col h-full min-w-0">
                    <div className="flex items-center gap-3 mb-5 shrink-0 pt-2">
                        <div className="h-8 w-1 bg-white/50 rounded-full" />
                        <h2 className="text-2xl xl:text-3xl font-bold text-[#004CE5] tracking-wide">
                            【新药上市类】高引用内容创作法则拆解
                        </h2>
                    </div>
                    <div className="flex-1 flex flex-col justify-center relative min-h-0">
                        <div className="absolute left-[3px] top-4 bottom-8 w-0.5 bg-white/10" />
                        <div className="space-y-6 relative z-10 pl-8">
                            {RULES.map((rule) => (
                                <div key={rule.no} className="relative flex items-start gap-4">
                                    <div className="absolute -left-[2.15rem] top-2.5 w-3 h-3 bg-zinc-700 rounded-full border-2 border-[#0a0f12]" />
                                    <div className="text-[#004CE5] font-mono text-xl font-bold pt-0.5 shrink-0 w-8">{rule.no}</div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-2xl font-bold text-white mb-1.5 tracking-wide">{rule.title}</h3>
                                        {rule.steps ? (
                                            <div className="text-zinc-300 text-[1.05rem] leading-relaxed flex flex-col gap-1">
                                                {rule.steps.map((s) => (
                                                    <div key={s.k} className="flex items-start gap-2">
                                                        <span className="text-white font-medium shrink-0 w-[2.75rem]">{s.k}</span>
                                                        <span>{s.v}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-zinc-300 text-[1.05rem] leading-relaxed">{rule.body}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-[3%] flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[#004CE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </div>

                <div className="w-[18%] lg:w-[20%] flex justify-end items-center shrink-0 pr-2 xl:pr-6">
                    <div className="w-[230px] h-[230px] xl:w-[270px] xl:h-[270px] bg-white/[0.02] rounded-full border border-white/10 flex items-center justify-center relative">
                        <div className="w-[190px] h-[190px] xl:w-[220px] xl:h-[220px] bg-white/[0.03] rounded-full flex flex-col items-center justify-center border border-white/10 text-center p-4">
                            <Database className="text-[#004CE5] mb-2 stroke-[1.5px]" size={42} />
                            <span className="text-white font-bold text-xl xl:text-3xl tracking-widest mb-1.5">内容生成</span>
                            <span className="text-white/60 font-medium text-[0.95rem] xl:text-lg">Agent 专属数据库</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
