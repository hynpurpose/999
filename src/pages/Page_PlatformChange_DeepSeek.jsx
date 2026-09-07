import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/platform-changes/deepseek-v4-doc.png';
const LOGO_SRC = '/ai-logos/deepseek.png';

const FACTS = [
    { t: '128K → 1M', d: '一次能读的资料量扩大 8 倍，官方标配' },
    { t: 'Agent 搜索', d: '模型自己判断何时联网搜、搜完接着推理' },
    { t: '真被用起来了', d: '7.31 V4-Flash 正式版，上线首周调用量全球第一' },
];

const LOSING = ['高度 SEO 化的单篇短稿', '靠关键词密度撑的内容', '和其他来源说法对不上的软文'];

const WINNING = ['专题式完整内容：成分、用法、禁忌讲全', 'FAQ、对比、真实案例等可引用的证据块', '官网、百科、媒体多来源口径一致'];

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
            <img src={SHOT_SRC} alt="DeepSeek-V4 官方发布文档" onError={() => setFailed(true)} className="w-full h-full object-cover object-top" />
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

export default function Page_PlatformChange_DeepSeek() {
    return (
        <SlideLayout
            title="DeepSeek：默认开启百万上下文能力"
            subtitle="4.24 V4 发布：一次能读的资料多了 8 倍，答案由几十篇内容互相印证决定"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[20px]">

                {/* ── 左栏：官方文档证据 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="发生了什么" note="能读的资料量翻了 8 倍" />

                    <div className="flex-1 min-h-0 mt-6 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <span className="w-[34px] h-[34px] shrink-0 rounded-[9px] bg-white overflow-hidden flex items-center justify-center">
                                    <img src={LOGO_SRC} alt="DeepSeek" className="w-full h-full object-contain" />
                                </span>
                                <span className="text-[22px] font-bold text-white leading-none">DeepSeek V4</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                左图为官方发布文档：V4 全系标配 100 万 token 上下文（表格「上下文长度」一列），Agent 能力大幅增强。
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

                {/* ── 右栏：对内容打法的影响 ── */}
                <div className="w-[680px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="对 GEO 意味着什么" note="几十篇一起看，信证据全的" />

                    <p className="shrink-0 mt-5 text-[19px] text-white leading-[30px]">
                        模型现在<span className="text-[#4C8DFF] font-bold">一次能读几十篇资料，对比完才下结论</span>。
                        想靠一篇稿子左右答案越来越难；几十篇内容里说法一致的信息，才会被它采信。
                    </p>

                    <div className="flex-1 min-h-0 mt-5 grid grid-cols-2 gap-4">
                        <div className="rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-5 py-5 flex flex-col">
                            <p className="shrink-0 text-[20px] font-bold text-white/55 mb-4">越来越难奏效</p>
                            <div className="flex-1 flex flex-col justify-start gap-4">
                                {LOSING.map((t) => (
                                    <div key={t} className="flex items-start gap-3">
                                        <span className="shrink-0 mt-[2px] w-6 h-6 rounded-full bg-white/[0.08] text-white/45 text-[14px] font-black flex items-center justify-center leading-none">✕</span>
                                        <p className="text-[18px] text-white/60 leading-[26px]">{t}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[18px] border border-[#4C8DFF]/40 bg-[#004CE5]/[0.10] px-5 py-5 flex flex-col">
                            <p className="shrink-0 text-[20px] font-bold text-[#4C8DFF] mb-4">越来越值钱</p>
                            <div className="flex-1 flex flex-col justify-start gap-4">
                                {WINNING.map((t) => (
                                    <div key={t} className="flex items-start gap-3">
                                        <span className="shrink-0 mt-[2px] w-6 h-6 rounded-full bg-[#004CE5] text-white text-[14px] font-black flex items-center justify-center leading-none">✓</span>
                                        <p className="text-[18px] text-white/90 leading-[26px]">{t}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_PlatformChange_DeepSeek.hideHeader = true;
