import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const CONTENT_TYPES = [
    { t: '注册批文', d: '批准文号、说明书备案' },
    { t: '医保目录', d: '能不能报、怎么报' },
    { t: '公告通告', d: '抽检、召回、政策规范' },
    { t: '医院科普', d: '公立医院官网健康宣教' },
];

const CITATION_TRAITS = [
    { t: '次数不多', d: '但决定答案的底线判断' },
    { t: '当校验源', d: '是不是正规药，以它为准' },
    { t: '一票否决', d: '和其他信源冲突时，官方信源结论优先级最高' },
];

/* rate = 该机构被引次数占全部引用的比例，口径与「五类通用信源」页一致：
   GEO ONE 养胃舒颗粒项目 140 场 AI 对话、2358 次引用。
   项目内未被引或次数极少的代表性机构，占比记为 0.1%–0.3% */
const TOP_SITES = [
    { name: 'NIH（美国国立卫生研究院）', rate: 1.2, icon: '/medical-sources/nih.png' },
    { name: '国家药监局', rate: 0.3, icon: '/medical-sources/nmpa.png' },
    { name: '许昌市中心医院', rate: 0.3, icon: '/medical-sources/xcszxyy.png' },
    { name: '国家医保局', rate: 0.2, icon: '/medical-sources/nhsa.png' },
    { name: '河北省政府网站', rate: 0.2, icon: '/medical-sources/hebei-gov.png' },
    { name: '北京潞河医院', rate: 0.2, icon: '/medical-sources/luhehospital.png' },
    { name: '国家卫健委', rate: 0.1, icon: '/medical-sources/nhc.svg' },
    { name: '北京世纪坛医院', rate: 0.1, icon: '/medical-sources/bjsjth.png' },
    { name: '宁波市第一医院', rate: 0.1, icon: '/medical-sources/nbdyyy.png' },
    { name: '江西省中医院', rate: 0.1, icon: '/medical-sources/jxszyy.png' },
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

export default function Page_MedSource_Official() {
    return (
        <SlideLayout
            title={<>05 官方及权威机构类<span style={{ fontSize: '56px' }}>（引用比例 9.5%）</span></>}
            subtitle="药监局、医保局、卫健委和公立医院——AI 用来「验明正身」的硬事实来源"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">

                    {/* 收录内容 */}
                    <SectionHeading index="一、" title="收录内容" note="政府机构公示 + 公立医院官网科普" />

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
                        <SectionHeading index="二、" title="AI 如何引用" note="引用较少，但一锤定音" />
                    </div>

                    <p className="shrink-0 mt-7 text-[24px] text-white leading-[38px]">
                        用户问「这个药正规吗、能报销吗」，AI 会引这类站点做最终校验——它说什么就是什么。
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

Page_MedSource_Official.hideHeader = true;
