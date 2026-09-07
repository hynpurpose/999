import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/platform-changes/hy3-tencent.png';
const LOGO_SRC = '/ai-logos/yuanbao.png';

const FACTS = [
    { t: '7.6 正式发布', d: 'Hy3 发布当天元宝第一时间接入' },
    { t: '搜索是强项', d: 'BrowseComp 84.2 分，搜索智能体评测第一' },
    { t: '信源没变', d: '联网搜索仍以微信公众号、视频号为主' },
];

const OLD_FLOW = ['发一篇公众号文章', '元宝搜到', '总结进答案'];
const NEW_FLOW = ['同一问题搜出几十篇', 'AI 逐篇比较、筛选', '有用的那几篇才进答案'];

function ShotFrame() {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div className="flex-1 min-w-0 h-full rounded-[20px] border border-dashed border-white/20 bg-[#0B0D19]/45 flex flex-col items-center justify-center gap-3">
                <span className="text-[22px] text-white tracking-widest font-bold">图片位</span>
                <span className="text-[15px] text-white/50 font-mono">{SHOT_SRC}</span>
            </div>
        );
    }

    return (
        <div className="flex-1 min-w-0 h-full rounded-[20px] overflow-hidden bg-white border border-white/[0.08]">
            <img src={SHOT_SRC} alt="腾讯官网 Hy3 发布公告" onError={() => setFailed(true)} className="w-full h-full object-cover object-top" />
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

function StageCard({ tag, tagActive, title, flow, foot }) {
    return (
        <div
            className={`flex-1 min-h-0 rounded-[18px] border px-6 py-4 flex flex-col justify-center gap-3 ${
                tagActive ? 'border-[#004CE5]/45 bg-[#004CE5]/[0.10]' : 'border-white/[0.08] bg-white/[0.03]'
            }`}
        >
            <div className="shrink-0 flex items-center gap-3">
                <span
                    className={`px-2.5 py-1 rounded text-[14px] font-bold tracking-wide ${
                        tagActive ? 'bg-[#004CE5] text-white' : 'bg-white/10 text-white/60'
                    }`}
                >
                    {tag}
                </span>
                <span className={`text-[22px] font-bold leading-none ${tagActive ? 'text-white' : 'text-white/70'}`}>{title}</span>
            </div>
            <div className="shrink-0 flex items-center gap-2.5 flex-wrap">
                {flow.map((s, i) => (
                    <React.Fragment key={s}>
                        {i > 0 && <span className="text-white/30 text-[16px] font-black shrink-0">›</span>}
                        <span
                            className={`px-3 py-1.5 rounded-[9px] text-[16px] font-bold leading-tight ${
                                tagActive ? 'bg-[#004CE5]/[0.22] border border-[#4C8DFF]/35 text-white' : 'bg-white/[0.06] text-white/60'
                            }`}
                        >
                            {s}
                        </span>
                    </React.Fragment>
                ))}
            </div>
            <p className={`shrink-0 text-[17px] leading-snug ${tagActive ? 'text-white/85' : 'text-white/45'}`}>{foot}</p>
        </div>
    );
}

export default function Page_PlatformChange_Yuanbao() {
    return (
        <SlideLayout
            title="元宝：开始筛选和整合公众号内容"
            subtitle="7.6 新模型 Hy3 接入元宝：回答之前，AI 会自己搜索、比较、筛选内容"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[20px]">

                {/* ── 左栏：官方公告证据 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="腾讯官宣了什么" note="新模型会自己搜索、筛选信息" />

                    <div className="flex-1 min-h-0 mt-6 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <span className="w-[34px] h-[34px] shrink-0 rounded-[9px] bg-white overflow-hidden flex items-center justify-center">
                                    <img src={LOGO_SRC} alt="元宝" className="w-full h-full object-contain" />
                                </span>
                                <span className="text-[22px] font-bold text-white leading-none">腾讯元宝 × Hy3</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                官方专门强调 Search Execution：模型能完成「从开放信息源检索、筛选，再到整合」的 Agent 搜索任务。左图为腾讯官网公告。
                            </p>

                            <div className="flex-1 min-h-0 mt-4 flex flex-col gap-2.5">
                                {FACTS.map((f) => (
                                    <div
                                        key={f.t}
                                        className="flex-1 min-h-0 rounded-[14px] border border-white/[0.08] bg-white/[0.03] px-4 flex flex-col justify-center gap-1.5"
                                    >
                                        <span className="text-[18px] font-bold text-white leading-none">{f.t}</span>
                                        <span className="text-[16px] text-white/80 leading-[24px]">{f.d}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 右栏：两个阶段 ── */}
                <div className="w-[680px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="对 GEO 意味着什么" note="AI 开始挑内容了" />

                    <p className="shrink-0 mt-5 text-[19px] text-white leading-[30px]">
                        元宝的答案还是主要来自微信公众号、视频号，这点没变——
                        <span className="text-[#4C8DFF] font-bold">变的是内容怎么被选上</span>：
                    </p>

                    <div className="flex-1 min-h-0 mt-4 flex flex-col gap-4">
                        <StageCard
                            tag="过去"
                            title="发了，就有机会被引用"
                            flow={OLD_FLOW}
                            foot="搜到什么用什么，内容之间没有竞争"
                        />
                        <StageCard
                            tag="现在"
                            tagActive
                            title="发了，还要赢过同题的几十篇"
                            flow={NEW_FLOW}
                            foot="空话、软文会被直接筛掉，有数据有结论的才留下"
                        />
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_PlatformChange_Yuanbao.hideHeader = true;
