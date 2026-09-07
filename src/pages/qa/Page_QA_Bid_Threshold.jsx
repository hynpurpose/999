import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q3-1 标书怎么写
   一句前提：别写做不到的 KPI。
   四道门槛：数据查询能力／投放资源与逻辑／方案专业度／低价惩罚。
   每张卡片：一句说清要求（how）＋ 一句底线规则（rule，固定高度保证对齐）。
   ============================================================ */

const GATES = [
    {
        no: '01',
        name: '数据查询能力',
        metric: '2 小时交完 1 万条',
        unit: '现场限时，考真实查询能力',
        how: '开标时现场发上万条量级的词条包，要求 2 小时内一次性交齐全部查询结果。没有真实查询系统的公司，这道题当场就交不出来。',
        rule: '不允许分批提交，不允许事后补交。',
    },
    {
        no: '02',
        name: '投放资源与逻辑',
        metric: '投什么、为什么投',
        unit: '资源写全，逻辑讲通',
        how: '写清手上有哪些投放资源：投哪些平台、多少账号、单篇成本多少；再讲清为什么投这些平台、预算为什么这样分。',
        rule: '只列得出资源、讲不出逻辑的，视为没有实操经验。',
    },
    {
        no: '03',
        name: '方案专业度',
        metric: '按整体专业度打分',
        unit: '策略、执行、交付逐项评',
        how: '把方案当成一个整体来评估：目标怎么拆、分几个阶段、每阶段做哪些动作、什么节奏交付，逐项对照，看写得够不够专业、完不完整。',
        rule: '方案要落到具体的执行动作和交付节奏，只讲方法论的不算数。',
    },
    {
        no: '04',
        name: '低价惩罚',
        metric: '设定低价惩罚措施',
        unit: '低于平均价 40%，价格分清零',
        how: '以全场平均报价为基准价：报价比基准低得越多，价格分扣得越多；低到一定幅度，直接重罚。',
        rule: '例：平均报 100 万，有人报 60 万——价格分直接清零。',
    },
];

export default function Page_QA_Bid_Threshold() {
    return (
        <SlideLayout
            title="标书怎么写"
            subtitle="先别定做不到的 KPI，再用四道门槛把没能力的服务商挡在外面"
        >
            <div className="w-full h-full flex flex-col gap-[18px] animate-fadeIn font-['MiSans']">
                {/* ── 上：一句前提 ── */}
                <div className="shrink-0 h-[104px] rounded-[22px] border border-[#004CE5]/40 bg-[#004CE5]/10 flex items-center gap-8 px-9 relative overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-[5px] bg-[#004CE5]" />
                    <span className="shrink-0 text-[34px] font-bold text-white leading-none whitespace-nowrap">
                        前提：<span className="text-[#2E6DFF]">别定做不到的 KPI</span>
                    </span>
                    <div className="w-px h-[56px] bg-white/15 shrink-0" />
                    <p className="flex-1 min-w-0 text-[23px] text-white leading-[33px]">
                        KPI 定得超出实际能做到的范围，有真实能力的公司算完成本就不来了，剩下敢接的只能造假。
                        <span className="font-bold">所有目标值从实测基线出发，分阶段约定。</span>
                    </p>
                </div>

                {/* ── 中：四道门槛 ── */}
                <div className="flex-1 min-h-0 flex gap-4">
                    {GATES.map((g) => (
                        <div
                            key={g.no}
                            className="flex-1 min-w-0 h-full rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 pt-7 pb-6 flex flex-col relative overflow-hidden"
                        >
                            <span className="absolute left-0 top-0 w-full h-[4px] bg-[#004CE5]" />

                            <div className="shrink-0 flex items-center gap-3.5">
                                <span className="text-[40px] font-black text-[#2E6DFF] leading-none font-['Montserrat']">
                                    {g.no}
                                </span>
                                <span className="text-[28px] font-bold text-white leading-none whitespace-nowrap">
                                    {g.name}
                                </span>
                            </div>

                            <div className="shrink-0 w-full h-px bg-white/10 my-4" />

                            <div className="shrink-0 flex flex-col gap-2.5">
                                <span className="text-[38px] font-black text-white leading-none tabular-nums whitespace-nowrap">
                                    {g.metric}
                                </span>
                                <span className="text-[20px] font-bold text-[#2E6DFF] leading-none whitespace-nowrap">
                                    {g.unit}
                                </span>
                            </div>

                            <p className="flex-1 min-h-0 mt-5 text-[22px] text-white leading-[35px] text-justify overflow-hidden">
                                {g.how}
                            </p>

                            <div className="shrink-0 h-[88px] pt-4 border-t border-white/10">
                                <p className="text-[21px] font-bold text-white leading-[31px] text-justify">
                                    {g.rule}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Bid_Threshold.hideHeader = true;
