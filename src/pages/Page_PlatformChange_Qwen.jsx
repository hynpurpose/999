import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_DOC = '/platform-changes/qwen-agent-doc.png';
const SHOT_FLOW = '/platform-changes/qwen-agent-flow.png';
const LOGO_SRC = '/ai-logos/qwen.png';

/* 官方文档里最关键的三个配置项，说人话版 */
const FACTS = [
    { t: '边想边搜', d: '按问题难易自动决定搜几轮、搜多广' },
    { t: '网页深度阅读', d: '不止看摘要，会点进网页读全文' },
    { t: '指定检索范围', d: '可设最多 100 个优先信源网站' },
];

/* 一次用药咨询，AI 实际拆出的检索链 */
const CHAIN = [
    { n: '01', q: '过敏性鼻炎 常用药物有哪些', d: '先搞清这类病该用什么药' },
    { n: '02', q: '鼻喷激素 和 口服抗组胺药 区别', d: '再对比成分和用法' },
    { n: '03', q: '××品牌鼻喷剂 效果 评价', d: '最后核对具体品牌的口碑' },
];

function ShotFrame({ src, alt }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div className="flex-1 min-w-0 h-full rounded-[20px] border border-dashed border-white/20 bg-[#0B0D19]/45 flex flex-col items-center justify-center gap-3">
                <span className="text-[22px] text-white tracking-widest font-bold">图片位</span>
                <span className="text-[15px] text-white/50 font-mono">{src}</span>
            </div>
        );
    }

    return (
        <div className="flex-1 min-w-0 h-full rounded-[20px] overflow-hidden bg-white border border-white/[0.08]">
            <img src={src} alt={alt} onError={() => setFailed(true)} className="w-full h-full object-cover object-top" />
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

export default function Page_PlatformChange_Qwen() {
    return (
        <SlideLayout
            title="千问：从只搜一次变为多轮验证"
            subtitle="6 月底上线联网检索 Agent：模型自己决定搜什么、搜几轮、读多深"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[20px]">

                {/* ── 左栏：官方文档证据 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="变化了什么" note="千问模型官方文档" />

                    <div className="flex-1 min-h-0 mt-6 flex gap-4">
                        <ShotFrame src={SHOT_DOC} alt="千问联网检索 Agent 官方文档" />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <span className="w-[34px] h-[34px] shrink-0 rounded-[9px] bg-white overflow-hidden flex items-center justify-center">
                                    <img src={LOGO_SRC} alt="千问" className="w-full h-full object-contain" />
                                </span>
                                <span className="text-[22px] font-bold text-white leading-none">千问检索 Agent</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                以前是你问一句、它搜一次；现在它会先改写你的问题，然后自己反复找证据。左图为阿里云官方文档。
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

                {/* ── 右栏：对医药 GEO 意味着什么 ── */}
                <div className="w-[680px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="对 GEO 的影响" note="从抢一个词到抢一整条证据链" />

                    <p className="shrink-0 mt-5 text-[19px] text-white leading-[30px]">
                        用户只问一句「过敏性鼻炎用什么药」，AI 自己会连搜三轮——
                        <span className="text-[#4C8DFF] font-bold">每一轮，品牌都需要有内容在场</span>：
                    </p>

                    <div className="shrink-0 mt-4 flex flex-col gap-2.5">
                        {CHAIN.map((c) => (
                            <div
                                key={c.n}
                                className="h-[62px] rounded-[14px] border border-[#004CE5]/30 bg-[#004CE5]/[0.08] px-5 flex items-center gap-4"
                            >
                                <span className="w-[30px] shrink-0 text-[18px] font-bold text-[#004CE5] font-['Montserrat'] leading-none">
                                    {c.n}
                                </span>
                                <span className="text-[20px] font-bold text-white leading-none whitespace-nowrap">「{c.q}」</span>
                                <span className="flex-1 min-w-0 text-[16px] text-white/60 leading-tight text-right whitespace-nowrap">{c.d}</span>
                            </div>
                        ))}
                    </div>

                    {/* 千问检索 Agent 官方架构图：原图完整展示，不裁剪 */}
                    <div className="flex-1 min-h-0 mt-5 rounded-[16px] overflow-hidden bg-[#EEF0FB] flex items-center justify-center">
                        <img
                            src={SHOT_FLOW}
                            alt="千问联网检索 Agent 架构图"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_PlatformChange_Qwen.hideHeader = true;
