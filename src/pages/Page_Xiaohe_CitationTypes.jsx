import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* 数据来源：小荷健康被引页面清单.xlsx · 类型汇总
   对外只展示占比，不展示自测引用次数 */
const TYPES = [
    { name: '药品说明书', share: '87.78%', pct: 87.78, primary: true },
    { name: '医生介绍', share: '7.03%', pct: 7.03 },
    { name: '医院科室介绍', share: '3.55%', pct: 3.55 },
    { name: '小荷医典词条', share: '0.75%', pct: 0.75 },
    { name: 'AI问答', share: '0.70%', pct: 0.70 },
    { name: '医生问答', share: '0.15%', pct: 0.15 },
    { name: '医院推荐列表', share: '0.03%', pct: 0.03 },
    { name: '其他', share: '0.01%', pct: 0.01 },
];

/* 逐级下钻：豆包全部引用 → 小荷健康 → 小荷健康内部的被引类型 */
const DRILL = [
    { label: '豆包 · 全部医疗引用', value: '100%' },
    { label: '小荷健康', value: '占豆包引用 85%', highlight: true },
    { label: '小荷健康被引内容类型', value: '拆分如下' },
];

function TypeRow({ item }) {
    return (
        <div className="flex items-center gap-5 h-[54px]">
            <span
                className={`w-[196px] shrink-0 text-[28px] leading-none whitespace-nowrap ${
                    item.primary ? 'font-bold text-white' : 'text-white'
                }`}
            >
                {item.name}
            </span>
            <div className="flex-1 min-w-0 h-[14px] rounded-full bg-white/[0.06] overflow-hidden">
                <div
                    className={`h-full rounded-full ${item.primary ? 'bg-[#004CE5]' : 'bg-[#004CE5]/40'}`}
                    style={{ width: `${Math.max(item.pct, 1.2)}%` }}
                />
            </div>
            <span
                className={`w-[116px] shrink-0 text-right text-[28px] font-bold leading-none whitespace-nowrap ${
                    item.primary ? 'text-[#004CE5]' : 'text-white'
                }`}
            >
                {item.share}
            </span>
        </div>
    );
}

export default function Page_Xiaohe_CitationTypes() {
    return (
        <SlideLayout
            title="小荷健康引用类型分析"
            subtitle="在占豆包引用 85% 的小荷健康里，被引内容有 87.78% 是药品说明书"
        >
            <div className="w-full h-full flex gap-7 animate-fadeIn font-['MiSans'] pt-2">

                {/* ── 左：类型排行 ── */}
                <div className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 py-7 flex flex-col">
                    <div className="shrink-0 h-[36px] flex items-center gap-4">
                        <h3 className="text-[36px] font-bold text-white leading-[36px] whitespace-nowrap">
                            小荷健康 · 被引内容类型
                        </h3>
                        <span className="flex-1 h-px bg-white/[0.08]" />
                    </div>

                    <div className="shrink-0 mt-4 flex flex-col gap-[10px]">
                        {DRILL.map((step, i) => (
                            <div
                                key={step.label}
                                className="flex items-center"
                                style={{ paddingLeft: i * 34 }}
                            >
                                {i > 0 && (
                                    <span className="w-[18px] h-[22px] -mt-[22px] shrink-0 border-l border-b border-white/25 rounded-bl-[6px]" />
                                )}
                                <span
                                    className={`${i > 0 ? 'ml-3' : ''} px-4 py-[7px] rounded-full text-[21px] font-bold leading-none whitespace-nowrap ${
                                        step.highlight
                                            ? 'border border-[#004CE5]/60 bg-[#004CE5]/[0.14] text-white'
                                            : 'border border-white/[0.12] bg-white/[0.04] text-white'
                                    }`}
                                >
                                    {step.label}
                                </span>
                                <span className="ml-3 text-[21px] font-bold text-[#004CE5] leading-none whitespace-nowrap">
                                    {step.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex-1 min-h-0 mt-3 flex flex-col justify-between">
                        {TYPES.map((item) => (
                            <TypeRow key={item.name} item={item} />
                        ))}
                    </div>
                </div>

                {/* ── 右：结论 + 说明书示例 ── */}
                <div className="w-[700px] shrink-0 h-full rounded-[24px] border border-[#004CE5]/35 bg-[#004CE5]/[0.08] px-6 py-6 flex flex-col gap-4 relative overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#004CE5] to-transparent" />
                    <div className="pointer-events-none absolute -right-16 -top-20 w-[280px] h-[280px] rounded-full bg-[#004CE5]/15 blur-[60px]" />

                    <div className="shrink-0 relative flex items-baseline gap-4">
                        <h3 className="text-[28px] font-bold text-white leading-[36px] whitespace-nowrap">
                            重点优化 药品说明书
                        </h3>
                        <span className="text-[34px] font-bold text-[#004CE5] leading-[36px]">
                            87.78%
                        </span>
                    </div>

                    <p className="shrink-0 relative text-[19px] text-white leading-[30px]">
                        药品说明书就是药盒里那张官方说明：通用名、适应症、用法和注意事项都写在上面。AI
                        抽小荷时几乎都在抽这类标准信息，不是科普或词条。
                    </p>

                    <div className="flex-1 min-h-0 w-full flex items-stretch justify-center relative">
                        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[80%] rounded-full bg-[#004CE5]/[0.12] blur-[40px]" />
                        <div className="relative h-full rounded-[20px] p-[1px] bg-gradient-to-b from-white/25 via-white/10 to-[#004CE5]/40 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                            <img
                                src="/medical-platforms/xiaohe-drug-example.png"
                                alt="药品说明书示例"
                                className="h-full w-auto max-w-full object-contain rounded-[19px] bg-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_Xiaohe_CitationTypes.hideHeader = true;
