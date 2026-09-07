import React from 'react';

/* 来源：GEO ONE 项目 458 三九养胃舒颗粒-ToB① / 25 个监测词条 · 5 个平台 · 875 次会话 · 2026-08-14 ~ 08-20 */

const FINDINGS = [
    {
        "title": "厂家与代理选品词是当前长板",
        "metric": "7 / 25 有提及",
        "tone": "warn",
        "body": "「养胃药厂家有哪些」22.9%、「养胃中成药厂家有哪些」17.1%、「连锁药店主推哪些养胃中成药」11.4% 且位次 NO. 4、「慢性胃炎中成药厂家有哪些」11.4%，另有品牌、进货、代理三个词各 5.7%~8.6%。"
    },
    {
        "title": "医院配备与采购场景全面空白",
        "metric": "提及率 0%",
        "tone": "warn",
        "body": "「医院消化科常备」「医院采购」「基层医院配备」「药房进货」等 18 个核心 B 端词提及率均为 0%。渠道侧 AI 几乎不会主动推荐养胃舒颗粒。"
    },
    {
        "title": "有提及但位次偏后，且被同门压制",
        "metric": "提及率 3.4% · 位次 NO. 9.3",
        "tone": "warn",
        "body": "B 端整体提及率 3.4%，影响力排名第 22；同门三九胃泰颗粒提及率高达 33.5%。Top 1 首推率 0%（全量榜第 145 / 795），「进清单」到「占首位」尚未起步。"
    }
];

const STRATEGIES = [
    {
        "title": "长板词（厂家 / 药店主推 / 代理）",
        "tag": "守擂扩面",
        "show": "「养胃药厂家有哪些」22.9%、「养胃中成药厂家有哪些」17.1%、「连锁药店主推哪些养胃中成药」11.4% 且位次 NO. 4。",
        "advice": "已有稳定曝光，策略转为「渠道证据维护」：持续输出厂家资质、药店主推案例、消化科常备清单类可被引用内容，防止被三九胃泰、胃苏颗粒反向侵蚀。"
    },
    {
        "title": "短板词（医院采购 / 医保 / 基层配备）",
        "tag": "痛点攻坚",
        "show": "医院配备、采购、医保目录、基层医院配备等 18 个词条提及率均为 0%。",
        "advice": "这是 B 端突破线。需围绕「基层医院配备、医保报销、货源稳定、进货划算」铺设可被大模型抓取的渠道内容，把养胃舒颗粒写进选型答案。"
    }
];

function SectionShell({ title, children }) {
    return (
        <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] backdrop-blur-xl overflow-hidden flex flex-col shadow-[0_16px_40px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/70 to-transparent" />
            <div className="absolute -top-24 right-0 w-56 h-56 rounded-full bg-[#004CE5]/10 blur-3xl pointer-events-none" />

            <div className="relative px-6 pt-5 pb-4 border-b border-white/[0.08]">
                <h3 className="text-[24px] lg:text-[27px] font-bold text-white tracking-wide">{title}</h3>
            </div>

            <div className="relative flex-1 min-h-0 p-5 flex flex-col gap-3.5">{children}</div>
        </div>
    );
}

function MetricChip({ children, tone = 'strong' }) {
    const styles =
        tone === 'warn'
            ? 'bg-white/[0.04] border-white/15 text-zinc-200'
            : 'bg-[#004CE5]/12 border-[#004CE5]/35 text-[#9CBCFF]';
    return (
        <span
            className={`shrink-0 px-3 py-1 rounded-full border text-[14px] lg:text-[15px] font-semibold tracking-wide ${styles}`}
        >
            {children}
        </span>
    );
}

function FindingCard({ index, title, metric, tone, body }) {
    return (
        <div className="group flex-1 min-h-0 rounded-xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.04] hover:border-[#004CE5]/25 transition-colors px-4 py-3.5 flex flex-col gap-2.5">
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                    <span className="mt-0.5 w-8 h-8 rounded-lg bg-[#004CE5]/15 border border-[#004CE5]/25 text-[#9CBCFF] text-[14px] font-bold flex items-center justify-center shrink-0">
                        {String(index).padStart(2, '0')}
                    </span>
                    <h4 className="text-[18px] lg:text-[20px] xl:text-[21px] font-bold text-white leading-snug pt-0.5">
                        {title}
                    </h4>
                </div>
                <MetricChip tone={tone}>{metric}</MetricChip>
            </div>
            <p className="pl-11 text-[16px] lg:text-[17px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                {body}
            </p>
        </div>
    );
}

function StrategyCard({ title, tag, show, advice }) {
    return (
        <div className="flex-1 min-h-0 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#004CE5]/10 to-white/[0.02] hover:border-[#004CE5]/30 transition-colors px-5 py-4 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
                <h4 className="text-[20px] lg:text-[22px] xl:text-[23px] font-bold text-white tracking-wide">
                    {title}
                </h4>
                <MetricChip>{tag}</MetricChip>
            </div>

            <div className="flex flex-col gap-2.5 text-[16px] lg:text-[17px] xl:text-[18px] leading-relaxed text-zinc-300">
                <div className="rounded-lg bg-black/20 border border-white/[0.05] px-3.5 py-2.5">
                    <span className="text-[#9CBCFF] font-semibold mr-1.5">表现</span>
                    <span className="text-justify">{show}</span>
                </div>
                <div className="rounded-lg bg-black/20 border border-white/[0.05] px-3.5 py-2.5">
                    <span className="text-[#9CBCFF] font-semibold mr-1.5">诊断与建议</span>
                    <span className="text-justify">{advice}</span>
                </div>
            </div>
        </div>
    );
}

export default function Page_GeoReport_Entries_Analysis_ToB() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] rounded-full bg-[#004CE5]/10 blur-3xl pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10">
                <div className="text-center mb-4 mt-[-20px] shrink-0">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        词条表现诊断与策略规划 · B端
                    </h1>
                </div>

                <div className="flex-grow grid grid-cols-12 gap-6 min-h-0 pt-[20px]">
                    <div className="col-span-6 min-h-0">
                        <SectionShell title="监测词条核心发现">
                            {FINDINGS.map((item, i) => (
                                <FindingCard key={item.title} index={i + 1} {...item} />
                            ))}
                        </SectionShell>
                    </div>

                    <div className="col-span-6 min-h-0">
                        <SectionShell title="长短板诊断与词条策略">
                            {STRATEGIES.map((item) => (
                                <StrategyCard key={item.title} {...item} />
                            ))}
                        </SectionShell>
                    </div>
                </div>
            </div>
        </div>
    );
}
