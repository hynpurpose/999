import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q3-3 验收怎么设计
   一件事：按词条类型分类验收，每类各设基线与三阶段目标，达不到就扣钱。
   基线取自本方案 GEO ONE 实测（2026-08 期）。
   ============================================================ */

const PAYMENTS = [
    ['预付', '20%'],
    ['阶段一', '25%'],
    ['阶段二', '30%'],
    ['阶段三', '25%'],
];

const COLS = [300, 230, 220, 220, 230];

const ROWS = [
    {
        target: 'C 端优化词',
        scope: '12 条核心（自 35 条池）',
        base: '提及率 1.4%\nTOP1 0%',
        s1: '6%\n0.5%',
        s2: '8%\n2%',
        s3: '25%\n10%',
        penalty: '达标不足 4 条，按缺口比例暂缓支付',
    },
    {
        target: 'B 端优化词',
        scope: '8 条核心（自 25 条池）',
        base: '提及率 3.4%\nTOP1 0%',
        s1: '12%\n1%',
        s2: '18%\n2%',
        s3: '35%\n12%',
        penalty: '达标不足 3 条，不得用 C 端超额抵扣',
    },
    {
        target: '监测词 · 舆情',
        scope: '60 条',
        base: 'C 端负面 7%\nB 端负面 15%',
        s1: '负面\n不上升',
        s2: '负面\n≤ 5%',
        s3: '正面\n≥ 80%',
        penalty: '单条错误信息超 30 天未纠偏，按条扣款',
    },
    {
        target: '基础档案',
        scope: '药品库与官网',
        base: '药品库未收录\n官网 5 项缺失',
        s1: '药品库\n收录完成',
        s2: '官网整改\n100%',
        s3: '结构化\n与 FAQ',
        penalty: '逾期按合同额万分之三／日计违约金',
    },
];

const CELL = 'text-[21px] font-bold text-white leading-[29px] whitespace-pre-line';

export default function Page_QA_Acceptance_Framework() {
    return (
        <SlideLayout
            title="验收怎么设计"
            subtitle="四类词各验各的标准，每阶段都有目标，达不到就扣钱"
        >
            <div className="w-full h-full flex flex-col gap-[18px] animate-fadeIn font-['MiSans']">
                {/* ── 上：原则 ＋ 付款节奏 ── */}
                <div className="shrink-0 h-[104px] rounded-[22px] border border-[#004CE5]/40 bg-[#004CE5]/10 flex items-center gap-8 px-9 relative overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-[5px] bg-[#004CE5]" />
                    <span className="shrink-0 text-[34px] font-bold text-white leading-none whitespace-nowrap">
                        分类验、<span className="text-[#2E6DFF]">分次验</span>
                    </span>
                    <div className="w-px h-[56px] bg-white/15 shrink-0" />
                    <p className="flex-1 min-w-0 text-[23px] text-white leading-[33px]">
                        四类词是四件不同的事，<span className="font-bold">不能用一个总提及率交差</span>
                        ，也不允许一类超额抵扣另一类的缺口。
                    </p>
                    <div className="w-px h-[56px] bg-white/15 shrink-0" />
                    <div className="shrink-0 flex items-center gap-3">
                        <span className="text-[20px] font-bold text-white leading-none whitespace-nowrap">
                            按阶段结算
                        </span>
                        {PAYMENTS.map(([k, v]) => (
                            <div
                                key={k}
                                className="flex flex-col items-center gap-1 rounded-[12px] border border-white/15 bg-[#0B0D19]/50 px-4 py-2"
                            >
                                <span className="text-[24px] font-black text-[#2E6DFF] leading-none font-['Montserrat'] tabular-nums">
                                    {v}
                                </span>
                                <span className="text-[17px] font-bold text-white leading-none whitespace-nowrap">
                                    {k}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 中：分类分阶段验收表 ── */}
                <div className="flex-1 min-h-0 rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 flex flex-col overflow-hidden">
                    <div className="shrink-0 h-[58px] flex items-center bg-white/[0.06] px-8">
                        {['验收对象', '现状基线', '阶段一 · 1–3 月', '阶段二 · 4–9 月', '阶段三 · 10–12 月'].map(
                            (h, i) => (
                                <span
                                    key={h}
                                    className="text-[21px] font-bold text-white leading-none whitespace-nowrap"
                                    style={{ width: COLS[i], flexShrink: 0 }}
                                >
                                    {h}
                                </span>
                            )
                        )}
                        <span className="flex-1 min-w-0 text-[21px] font-bold text-white leading-none whitespace-nowrap">
                            未达标怎么罚
                        </span>
                    </div>

                    {ROWS.map((r) => (
                        <div
                            key={r.target}
                            className="flex-1 min-h-0 flex items-center px-8 border-t border-white/[0.06]"
                        >
                            <div className="shrink-0 flex flex-col gap-2" style={{ width: COLS[0] }}>
                                <span className="text-[25px] font-bold text-white leading-none whitespace-nowrap">
                                    {r.target}
                                </span>
                                <span className="text-[19px] font-bold text-white leading-none whitespace-nowrap">
                                    {r.scope}
                                </span>
                            </div>
                            <span className={CELL} style={{ width: COLS[1], flexShrink: 0 }}>
                                {r.base}
                            </span>
                            <span className={CELL} style={{ width: COLS[2], flexShrink: 0 }}>
                                {r.s1}
                            </span>
                            <span className={CELL} style={{ width: COLS[3], flexShrink: 0 }}>
                                {r.s2}
                            </span>
                            <span
                                className="text-[21px] font-bold text-[#2E6DFF] leading-[29px] whitespace-pre-line"
                                style={{ width: COLS[4], flexShrink: 0 }}
                            >
                                {r.s3}
                            </span>
                            <p className="flex-1 min-w-0 text-[21px] text-white leading-[30px]">{r.penalty}</p>
                        </div>
                    ))}
                </div>

                {/* ── 下：红线 ── */}
                <div className="shrink-0 h-[84px] rounded-[18px] border border-[#004CE5]/40 bg-[#004CE5]/10 flex items-center gap-6 px-9">
                    <span className="shrink-0 px-4 py-2 rounded-[8px] bg-[#004CE5] text-[20px] font-bold text-white leading-none whitespace-nowrap">
                        红线
                    </span>
                    <p className="flex-1 min-w-0 text-[23px] text-white leading-[32px]">
                        <span className="font-bold">连续两个阶段未达标</span>，甲方可终止合同、已付未消耗费用全额退回；
                        <span className="font-bold">数据造假一经查实</span>，全额退款并追加合同总额 20% 违约金。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Acceptance_Framework.hideHeader = true;
