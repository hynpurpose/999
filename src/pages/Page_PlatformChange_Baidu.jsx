import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/platform-changes/ernie51-blog.png';
const LOGO_SRC = '/ai-logos/wenxin.png';

const FACTS = [
    { t: '全球第四', d: 'Search Arena 搜索榜 1223 分，国内第一' },
    { t: '唯一上榜', d: '榜单前列唯一的国产模型' },
    { t: '搜索工具化', d: '百度搜索开放成 AI 可调用的检索工具（MCP）' },
];

const CONDITIONS = [
    { n: '01', t: '百度可收录', d: '内容首先要进得了百度的索引' },
    { n: '02', t: '匹配 AI 拆出的子问题', d: 'AI 会把一个问题拆成多个 query 分头去搜' },
    { n: '03', t: '结论可直接摘取', d: '关键信息写得清楚，AI 拿来就能用' },
];

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
        <div className="flex-1 min-w-0 h-full rounded-[20px] overflow-hidden bg-[#1a1a1a] border border-white/[0.08]">
            <img src={SHOT_SRC} alt="文心 5.1 发布公告与 Search Arena 榜单" onError={() => setFailed(true)} className="w-full h-full object-cover object-top" />
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

export default function Page_PlatformChange_Baidu() {
    return (
        <SlideLayout
            title="百度：正在用AI搜索代替普通搜索"
            subtitle="5.9 文心 5.1 发布、搜索榜全球第四；百度搜索开放给 AI 直接调用"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[20px]">

                {/* ── 左栏：官方博客证据 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="发生了什么" note="深度搜索成了主打能力" />

                    <div className="flex-1 min-h-0 mt-6 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <span className="w-[34px] h-[34px] shrink-0 rounded-[9px] bg-white overflow-hidden flex items-center justify-center">
                                    <img src={LOGO_SRC} alt="文心" className="w-full h-full object-contain" />
                                </span>
                                <span className="text-[22px] font-bold text-white leading-none">百度 · 文心 5.1</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                左图为文心官方博客：5.1 发布当天即登上 Search Arena 搜索榜第 4 名（黄框处），把「深度搜索」列为重点提升方向。
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

                {/* ── 右栏：对 GEO 意味着什么 ── */}
                <div className="w-[680px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="对 GEO 意味着什么" note="SEO 和 GEO 开始合流" />

                    <p className="shrink-0 mt-5 text-[19px] text-white leading-[30px]">
                        搜索的服务对象变了：从<span className="text-white/60">翻页只看前三条的人</span>，
                        变成<span className="text-[#4C8DFF] font-bold">一次吞几十条结果、再交叉验证的模型</span>。
                        文章排第几是一回事，AI 把问题拆成什么 query、召回哪几篇、吸收哪句话，是另一回事。
                    </p>

                    <p className="shrink-0 mt-6 text-[22px] font-bold text-white">品牌内容要同时满足三个条件：</p>

                    <div className="flex-1 min-h-0 mt-4 flex flex-col gap-3">
                        {CONDITIONS.map((c) => (
                            <div
                                key={c.n}
                                className="flex-1 min-h-0 rounded-[18px] border border-[#004CE5]/30 bg-[#004CE5]/[0.08] px-6 flex items-center gap-5"
                            >
                                <span className="w-[34px] shrink-0 text-[20px] font-bold text-[#004CE5] font-['Montserrat'] leading-none">{c.n}</span>
                                <span className="w-[280px] shrink-0 text-[23px] font-bold text-white leading-tight">{c.t}</span>
                                <span className="flex-1 min-w-0 text-[18px] text-white/80 leading-[27px]">{c.d}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_PlatformChange_Baidu.hideHeader = true;
