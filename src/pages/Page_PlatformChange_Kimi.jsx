import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/platform-changes/kimi-k3-blog.png';
const LOGO_SRC = '/ai-logos/kimi.png';

const FACTS = [
    { t: '7.16 K3 发布', d: '2.8 万亿参数，原生看图，100 万 token 上下文' },
    { t: 'Agent 集群', d: '主 Agent 自主调度最多 300 个子 Agent 同时搜' },
    { t: '搜索准确率翻倍', d: 'BrowseComp 从 15.9% 提升到 33.3%' },
];

/* 一句提问，Kimi 会同时拆出的几路检索 */
const FANOUT = [
    { n: '01', t: '适应症与证候', d: '慢性胃炎、胃热证该不该用' },
    { n: '02', t: '人群与场景', d: '熬夜、三餐不规律、中老年' },
    { n: '03', t: '安全与禁忌', d: '孕妇、糖尿病、联合用药注意' },
    { n: '04', t: '同类对比', d: '与三九胃泰、铝碳酸镁怎么选' },
    { n: '05', t: '真实反馈', d: '疗程、见效时间、用药体验' },
];

const TAKEAWAYS = [
    { t: '广度比排名重要', d: '少写一个角度，就少一路子 Agent 把你的内容带回答案' },
    { t: '结论要能被一句话摘走', d: '子 Agent 只把关键结论交回主 Agent，长篇铺垫不会被带上' },
];

function ShotFrame() {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div className="flex-1 min-w-0 h-full rounded-[20px] border border-dashed border-white/20 bg-[#0B0D19]/45 flex flex-col items-center justify-center gap-3">
                <span className="text-[22px] text-white tracking-widest font-bold">图片位</span>
                <span className="text-[15px] text-white font-mono">{SHOT_SRC}</span>
            </div>
        );
    }

    return (
        <div className="flex-1 min-w-0 h-full rounded-[20px] overflow-hidden bg-[#0d0d0d] border border-white/[0.08]">
            <img src={SHOT_SRC} alt="Kimi Agent 集群官方帮助文档" onError={() => setFailed(true)} className="w-full h-full object-cover object-top" />
        </div>
    );
}

function SectionHeading({ index, title, note }) {
    return (
        <div className="shrink-0 h-[40px] flex items-center gap-4">
            <span className="text-[20px] font-bold text-[#004CE5] leading-[40px]">{index}</span>
            <h3 className="text-[30px] font-bold text-white leading-[40px]">{title}</h3>
            <span className="w-px h-[22px] bg-white/15" />
            <span className="text-[22px] text-white leading-[40px] whitespace-nowrap">{note}</span>
            <span className="flex-1 h-px bg-white/[0.08]" />
        </div>
    );
}

export default function Page_PlatformChange_Kimi() {
    return (
        <SlideLayout
            title="Kimi：一个问题被拆成上百路同时搜"
            subtitle="7.16 K3 发布，Agent 集群最多调度 300 个子 Agent 并行检索，搜索准确率翻倍"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[20px]">

                {/* ── 左栏：官方技术博客证据 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="发生了什么" note="从一个人跑腿到一群人分头跑" />

                    <div className="flex-1 min-h-0 mt-6 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <span className="w-[34px] h-[34px] shrink-0 rounded-[9px] bg-white overflow-hidden flex items-center justify-center">
                                    <img src={LOGO_SRC} alt="Kimi" className="w-full h-full object-contain" />
                                </span>
                                <span className="text-[22px] font-bold text-white leading-none">Kimi K3 · Agent 集群</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                左图为 Kimi 官方帮助文档：主 Agent 自己指挥最多 300 个子 Agent，单次任务调用工具超 4000 次，比一个个顺序搜快 4.5 倍。
                            </p>

                            <div className="flex-1 min-h-0 mt-4 flex flex-col gap-2.5">
                                {FACTS.map((f) => (
                                    <div
                                        key={f.t}
                                        className="flex-1 min-h-0 rounded-[14px] border border-white/[0.08] bg-white/[0.03] px-4 flex flex-col justify-center gap-1.5"
                                    >
                                        <span className="text-[18px] font-bold text-white leading-none">{f.t}</span>
                                        <span className="text-[16px] text-white leading-[24px]">{f.d}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 右栏：一句提问如何扇出成多路检索 ── */}
                <div className="w-[680px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="对 GEO 意味着什么" note="不是抢排名，是铺满角度" />

                    <p className="shrink-0 mt-5 text-[19px] text-white leading-[30px]">
                        用户还是只问一句，Kimi 却会把它<span className="text-[#004CE5] font-black">同时拆成几十上百个角度分头去搜</span>，
                        每路各带回一句结论，再汇总成答案：
                    </p>

                    <div className="flex-1 min-h-0 mt-4 flex items-stretch gap-3">
                        <div className="w-[128px] shrink-0 rounded-[16px] border border-[#004CE5]/40 bg-[#004CE5]/[0.10] px-3 flex flex-col items-center justify-center gap-2.5">
                            <span className="text-[16px] font-bold text-white leading-none">用户只问一句</span>
                            <span className="text-[21px] font-black text-white leading-[28px] text-center">
                                养胃舒
                                <br />
                                适合谁吃
                            </span>
                        </div>

                        <div className="w-[22px] shrink-0 flex flex-col gap-2.5">
                            {FANOUT.map((f) => (
                                <span key={f.n} className="flex-1 min-h-0 flex items-center justify-center text-[18px] font-black text-white">
                                    ›
                                </span>
                            ))}
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col gap-2.5">
                            {FANOUT.map((f) => (
                                <div
                                    key={f.n}
                                    className="flex-1 min-h-0 rounded-[14px] border border-white/[0.08] bg-white/[0.03] px-5 flex items-center gap-4"
                                >
                                    <span className="w-[28px] shrink-0 text-[17px] font-bold text-[#004CE5] font-['Montserrat'] leading-none">
                                        {f.n}
                                    </span>
                                    <span className="w-[168px] shrink-0 text-[20px] font-bold text-white leading-none">{f.t}</span>
                                    <span className="flex-1 min-w-0 text-[17px] text-white leading-tight">{f.d}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="shrink-0 mt-4 grid grid-cols-2 gap-4">
                        {TAKEAWAYS.map((t) => (
                            <div key={t.t} className="h-[120px] rounded-[18px] border border-[#004CE5]/30 bg-[#004CE5]/[0.08] px-5 flex flex-col justify-center gap-2.5">
                                <span className="text-[21px] font-bold text-white leading-none">{t.t}</span>
                                <span className="text-[17px] text-white leading-[25px]">{t.d}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_PlatformChange_Kimi.hideHeader = true;
