import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const CONTENT_TYPES = [
    { t: '疾病百科', d: '症状、病因、怎么治' },
    { t: '药品频道', d: '功效、怎么选、怎么用' },
    { t: '养生食疗', d: '饮食、调理、保健' },
    { t: '问答视频', d: '专家出镜、图文音视频' },
];

const CITATION_TRAITS = [
    { t: '长尾全包', d: '宽泛的健康问题基本都能接住' },
    { t: '批量被引', d: '一次回答同时引用好几条' },
    { t: '广而不深', d: '单篇被引不多，靠覆盖面取胜' },
];

/* rate = 该站点被引次数占全部引用的比例，口径与「五类通用信源」页一致：
   GEO ONE 养胃舒颗粒项目 140 场 AI 对话、2358 次引用（民福康为 39yst.com 与 mfk.com 两站合计）。
   已按站点实际类型归类（在线问诊站移入医生问答类）；
   项目内未被引或次数极少的代表性站点，占比记为 0.1%–0.3% */
const TOP_SITES = [
    { name: '民福康健康', rate: 2.1, icon: '/medical-sources/mfk.png' },
    { name: '复禾健康', rate: 1.5, icon: '/medical-sources/fh21.png' },
    { name: '39健康网', rate: 0.6, icon: '/medical-sources/jk39.png' },
    { name: '苹果绿养生网', rate: 0.6, icon: '/medical-sources/pingguolv.png' },
    { name: '大众养生网', rate: 0.3, icon: '/medical-sources/cndzys.png' },
    { name: '99健康网', rate: 0.3, icon: '/medical-sources/99jk.png' },
    { name: '全民健康网', rate: 0.2, icon: '/medical-sources/qm120.png' },
    { name: '家庭医生在线', rate: 0.2, icon: '/medical-sources/familydoctor.png' },
    { name: '普慈健康', rate: 0.1, icon: '/medical-sources/pucijiankang.png' },
    { name: '35健康', rate: 0.1, icon: '/medical-sources/35jk.png' },
];

function SiteRow({ rank, name, rate, icon }) {
    const [failed, setFailed] = useState(false);
    const isTop = rank === 1;

    return (
        <div className="flex-1 min-h-0 flex items-center gap-4 px-5 rounded-[14px] border border-white/[0.06] bg-white/[0.03]">
            <span
                className={`w-[26px] shrink-0 text-[20px] font-bold font-['Montserrat'] leading-none text-right ${isTop ? 'text-[#004CE5]' : 'text-white/40'
                    }`}
            >
                {rank}
            </span>

            <span className="w-[30px] h-[30px] shrink-0 rounded-[7px] bg-white overflow-hidden flex items-center justify-center">
                {failed ? (
                    <span className="text-[15px] font-bold text-zinc-600">{name.slice(0, 1)}</span>
                ) : (
                    <img
                        src={icon}
                        alt=""
                        onError={() => setFailed(true)}
                        className="w-full h-full object-contain"
                    />
                )}
            </span>

            <span className="flex-1 min-w-0 text-[22px] text-white leading-none whitespace-nowrap">
                {name}
            </span>

            <span
                className={`shrink-0 pl-3 text-[22px] font-bold font-['Montserrat'] leading-none tabular-nums ${isTop ? 'text-[#4C8DFF]' : 'text-white/75'
                    }`}
            >
                {rate.toFixed(1)}%
            </span>
        </div>
    );
}

function SectionHeading({ index, title, note }) {
    return (
        <div className="shrink-0 h-[40px] flex items-center gap-4">
            <span className="text-[20px] font-bold text-[#004CE5] leading-[40px]">
                {index}
            </span>
            <h3 className="text-[30px] font-bold text-white leading-[40px]">{title}</h3>
            <span className="w-px h-[22px] bg-white/15" />
            <span className="text-[22px] text-white leading-[40px] whitespace-nowrap">{note}</span>
            <span className="flex-1 h-px bg-white/[0.08]" />
        </div>
    );
}

export default function Page_MedSource_HealthPortal() {
    return (
        <SlideLayout
            title={<>02 综合医疗健康平台类<span style={{ fontSize: '56px' }}>（引用比例 21.3%）</span></>}
            subtitle="从疾病、用药到养生食疗全覆盖的健康门户网站"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">

                    {/* 收录内容 */}
                    <SectionHeading index="一、" title="收录内容" note="覆盖面广，什么健康话题都做" />

                    <div className="shrink-0 mt-7 flex gap-4">
                        {CONTENT_TYPES.map((c, i) => (
                            <div
                                key={c.t}
                                className="flex-1 min-w-0 h-[168px] rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-5 py-6 flex flex-col"
                            >
                                <span className="h-[18px] text-[18px] font-bold text-[#004CE5] font-['Montserrat'] leading-[18px]">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="mt-[22px] h-[32px] text-[24px] font-bold text-white leading-[32px] whitespace-nowrap">
                                    {c.t}
                                </span>
                                <span className="mt-[12px] h-[28px] text-[20px] text-white leading-[28px] whitespace-nowrap">
                                    {c.d}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* AI 如何引用 */}
                    <div className="shrink-0 mt-10">
                        <SectionHeading index="二、" title="AI 如何引用" note="宽泛问题的主力引用来源" />
                    </div>

                    <p className="shrink-0 mt-7 text-[24px] text-white leading-[38px]">
                        「吃什么养胃」「怎么调理肠胃」这类宽泛问题，AI 的引用列表里一大半是这类门户。
                    </p>

                    <div className="flex-1 min-h-0 mt-6 flex gap-4">
                        {CITATION_TRAITS.map((c, i) => (
                            <div
                                key={c.t}
                                className="flex-1 min-w-0 min-h-0 rounded-[20px] border border-[#004CE5]/30 bg-[#004CE5]/[0.08] px-5 py-6 flex flex-col justify-center"
                            >
                                <span className="h-[22px] text-[22px] font-bold text-[#004CE5] font-['Montserrat'] leading-[22px]">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="mt-[22px] h-[38px] text-[30px] font-bold text-white leading-[38px] whitespace-nowrap">
                                    {c.t}
                                </span>
                                <span className="mt-[14px] text-[24px] text-white leading-[34px]">
                                    {c.d}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 右栏：引用站点 Top 6 ── */}
                <div className="w-[600px] shrink-0 h-full flex flex-col rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 py-7">
                    <div className="shrink-0 flex items-baseline justify-between">
                        <h3 className="text-[28px] font-bold text-white leading-none">被引用最多的站点</h3>
                        <span className="flex items-baseline gap-3">
                            <span className="text-[18px] text-white/45 leading-none">占全部引用</span>
                            <span className="text-[20px] font-bold text-[#004CE5] font-['Montserrat'] leading-none">
                                TOP 10
                            </span>
                        </span>
                    </div>

                    <div className="flex-1 min-h-0 mt-6 flex flex-col gap-2.5">
                        {TOP_SITES.map((s, i) => (
                            <SiteRow key={s.name} rank={i + 1} {...s} />
                        ))}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_MedSource_HealthPortal.hideHeader = true;
