import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q3-4 数据怎么验真
   一件事：谁的数据都不能自己说了算。第三方系统出报告 + 专业团队真机复现。
   ============================================================ */

const GATES = [
    {
        tag: '第一道',
        name: '第三方系统出报告',
        claim: '不接受自己查自己截图',
        items: [
            '报告由甲方认可的第三方监测系统出具，乙方只有查看权',
            '必须交原始日志：答案原文、引用链接、截图、IP 与时间戳',
            '不接受乙方自己截的图，也不接受只给百分比的汇总表',
        ],
    },
    {
        tag: '第二道',
        name: '专业团队人工验真',
        claim: '真机新对话现场复现',
        items: [
            '甲方付费邀请独立专业团队，既不是乙方也不是甲方执行部门',
            '双方各 20 台真机，随机抽 20% 词条，全部在新对话下复现',
            '出具完整验真报告；与系统数据偏差超 20%，以人工为准',
        ],
    },
];

export default function Page_QA_Acceptance_Verify() {
    return (
        <SlideLayout
            title="数据怎么验真"
            subtitle="谁的数据都不能自己说了算：第三方系统出报告，专业团队真机复现"
        >
            <div className="w-full h-full flex flex-col gap-[18px] animate-fadeIn font-['MiSans']">
                <div className="flex-1 min-h-0 flex gap-[18px]">
                    {GATES.map((g) => (
                        <div
                            key={g.tag}
                            className="flex-1 min-w-0 h-full rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 px-10 pt-9 pb-9 flex flex-col relative overflow-hidden"
                        >
                            <span className="absolute left-0 top-0 w-full h-[4px] bg-[#004CE5]" />

                            <div className="shrink-0 flex items-center gap-4">
                                <span className="shrink-0 px-3.5 py-2 rounded-[8px] bg-[#004CE5] text-[21px] font-bold text-white leading-none">
                                    {g.tag}
                                </span>
                                <span className="text-[40px] font-bold text-white leading-none whitespace-nowrap">
                                    {g.name}
                                </span>
                            </div>

                            <span className="shrink-0 mt-4 text-[27px] font-bold text-[#2E6DFF] leading-none">
                                {g.claim}
                            </span>

                            <div className="shrink-0 w-full h-px bg-white/10 my-7" />

                            <div className="flex-1 min-h-0 flex flex-col justify-around overflow-hidden">
                                {g.items.map((it) => (
                                    <div key={it} className="flex items-start gap-4">
                                        <span className="w-[9px] h-[9px] rounded-full bg-[#2E6DFF] shrink-0 mt-[14px]" />
                                        <p className="flex-1 min-w-0 text-[26px] text-white leading-[38px] text-justify">
                                            {it}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="shrink-0 h-[96px] rounded-[22px] border border-[#004CE5]/40 bg-[#004CE5]/10 flex items-center gap-7 px-10">
                    <span className="shrink-0 px-4 py-2 rounded-[8px] bg-[#004CE5] text-[21px] font-bold text-white leading-none whitespace-nowrap">
                        为什么要两道
                    </span>
                    <p className="flex-1 min-w-0 text-[24px] text-white leading-[34px]">
                        因为造假的成本几乎为零——
                        <span className="font-bold">一句预设提示词、一个被教过的老会话、一张改过的截图</span>
                        ，就能凑出一份看起来无懈可击的月报。下一页是实录。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Acceptance_Verify.hideHeader = true;
