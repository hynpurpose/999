import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/platform-changes/afu-statement.png';
const LOGO_SRC = '/geo-platforms/afu.png';

const FACTS = [
    { t: '用户破 1 亿', d: '日均处理健康提问超 1000 万次，55% 来自三线及以下城市' },
    { t: '答案出自权威库', d: '中华医学会近 200 种期刊、6000 万文献、14 万份说明书' },
    { t: '每条建议都标出处', d: '回答会标明依据哪版指南，可点开原文摘要' },
];

const ENTRIES = [
    { n: '01', t: '说明书与词条先写对', d: '14 万份说明书是它的底座，成分、适应症、用法、禁忌被原文引用' },
    { n: '02', t: '结论要对得上指南共识', d: '回答会标注依据的是哪一版指南，说法对不上就不会被采信' },
    { n: '03', t: '医生侧同样是入口', d: '30 万实名医生、500 多位名医 AI 分身，医生的说法直接进答案' },
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
        <div className="flex-1 min-w-0 h-full rounded-[20px] overflow-hidden bg-white border border-white/[0.08]">
            <img src={SHOT_SRC} alt="蚂蚁阿福官方声明：问答结果不含广告推荐与商业排名" onError={() => setFailed(true)} className="w-full h-full object-cover object-top" />
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

export default function Page_PlatformChange_Afu() {
    return (
        <SlideLayout
            title="蚂蚁阿福：最大的健康 AI，位置买不到"
            subtitle="AQ 升级为阿福后用户破 1 亿；答案直接引用临床指南、专家共识与药品说明书"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[20px]">

                {/* ── 左栏：蚂蚁官方公告证据 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="发生了什么" note="官方声明：不接广告、不排商业位" />

                    <div className="flex-1 min-h-0 mt-6 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <span className="w-[34px] h-[34px] shrink-0 rounded-[9px] bg-white overflow-hidden flex items-center justify-center">
                                    <img src={LOGO_SRC} alt="蚂蚁阿福" className="w-full h-full object-contain" />
                                </span>
                                <span className="text-[22px] font-bold text-white leading-none">蚂蚁阿福</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                左图为蚂蚁阿福官方声明：问答结果中没有任何广告推荐、不存在商业排名，也不受任何其他商业因素干扰。
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

                {/* ── 右栏：唯一进得去的路 ── */}
                <div className="w-[680px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="对 GEO 意味着什么" note="投放买不到，只能靠内容进库" />

                    <p className="shrink-0 mt-5 text-[19px] text-white leading-[30px]">
                        阿福不是把公域网页搜来给你，而是<span className="text-[#004CE5] font-black">从期刊、指南、共识、药品说明书里找答案并标注出处</span>。
                        高度 SEO 化的软文进不了这道门。
                    </p>

                    <div className="shrink-0 mt-4 h-[86px] rounded-[16px] border border-[#004CE5]/40 bg-[#004CE5]/[0.10] px-6 flex items-center gap-5">
                        <span className="shrink-0 text-[44px] font-black text-white font-['Montserrat'] leading-none">0%</span>
                        <span className="flex-1 min-w-0 text-[19px] text-white leading-[27px]">
                            本次监测中，999 养胃舒在阿福的提及率为 <span className="font-bold">0%</span>——内容还没进入它的引用池
                        </span>
                    </div>

                    <p className="shrink-0 mt-5 text-[22px] font-bold text-white">要在阿福里被引用，得同时做到三件事：</p>

                    <div className="flex-1 min-h-0 mt-3 flex flex-col gap-3">
                        {ENTRIES.map((e) => (
                            <div
                                key={e.n}
                                className="flex-1 min-h-0 rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-6 flex items-center gap-5"
                            >
                                <span className="w-[30px] shrink-0 text-[20px] font-bold text-[#004CE5] font-['Montserrat'] leading-none">{e.n}</span>
                                <span className="w-[240px] shrink-0 text-[22px] font-bold text-white leading-tight">{e.t}</span>
                                <span className="flex-1 min-w-0 text-[17px] text-white leading-[26px]">{e.d}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_PlatformChange_Afu.hideHeader = true;
