import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const CONTENT_TYPES = [
    { t: '指南共识', d: '诊疗规范、专家共识全文' },
    { t: '医学论文', d: '期刊文献、学位论文' },
    { t: '决策工具', d: '诊疗方案、用药参考' },
    { t: '学术资讯', d: '会议报道、研究进展' },
];

const CITATION_TRAITS = [
    { t: '循证背书', d: '答案里「怎么治」的依据' },
    { t: '存续期长', d: '指南共识一挂多年，反复被引' },
    { t: '带产品名', d: '进了共识的药直接受益' },
];

/* rate = 该站点被引次数占全部引用的比例，口径与「五类通用信源」页一致：
   GEO ONE 养胃舒颗粒项目 140 场 AI 对话、2358 次引用。
   项目内未被引或次数极少的代表性站点，占比记为 0.1%–0.2% */
const TOP_SITES = [
    { name: '丁香园', rate: 1.0, icon: '/medical-sources/dxy-doctor.png' },
    { name: '万方数据', rate: 0.5, icon: '/medical-sources/wanfang.png' },
    { name: '中国生物医学文献服务系统', rate: 0.4, icon: '/medical-sources/sinomed.png' },
    { name: '医脉通', rate: 0.4, icon: '/medical-sources/medlive.png' },
    { name: 'Springer', rate: 0.4, icon: '/medical-sources/springer.png' },
    { name: '中国知网 CNKI', rate: 0.3, icon: '/medical-sources/cnki.png' },
    { name: '梅斯医学', rate: 0.2, icon: '/medical-sources/medsci.png' },
    { name: 'PubMed', rate: 0.2, icon: '/medical-sources/pubmed.png' },
    { name: '中国中医药报', rate: 0.1, icon: '/medical-sources/cntcm.png' },
    { name: '中华医学会', rate: 0.1, icon: '/medical-sources/cma.png' },
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

export default function Page_MedSource_Academic() {
    return (
        <SlideLayout
            title={<>03 专业学术内容类<span style={{ fontSize: '56px' }}>（引用比例 18.3%）</span></>}
            subtitle="指南、共识、论文和临床决策工具——给 AI 答案提供「循证」背书的一层"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">

                    {/* 收录内容 */}
                    <SectionHeading index="一、" title="收录内容" note="面向专业人士，不是面向患者" />

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
                        <SectionHeading index="二、" title="AI 如何引用" note="给结论「撑腰」的引用" />
                    </div>

                    <p className="shrink-0 mt-7 text-[24px] text-white leading-[38px]">
                        回答「怎么治、选哪个方案」时，AI 会引指南和共识给结论撑腰——产品能进共识，就能被长期引用。
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

Page_MedSource_Academic.hideHeader = true;
