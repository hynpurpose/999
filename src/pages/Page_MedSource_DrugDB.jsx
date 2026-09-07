import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const CONTENT_TYPES = [
    { t: '说明书字段', d: '适应症、用法用量、禁忌' },
    { t: '基础资料', d: '成分、规格、批准文号' },
    { t: '用药指导', d: '联用、特殊人群、注意' },
    { t: '行业数据', d: '注册、销售、竞品格局' },
];

const CITATION_TRAITS = [
    { t: '按名命中', d: '问到药品名，词条直接对上' },
    { t: '字段即答案', d: '说明书内容原样进回答' },
    { t: '引用量最大', d: '这类站点整体被引频次最高' },
];

/* rate = 该站点被引次数占全部引用的比例，口径与「五类通用信源」页一致：
   GEO ONE 养胃舒颗粒项目 140 场 AI 对话、2358 次引用。
   项目内未被引或次数极少的代表性站点，占比记为 0.1%–0.3% */
const TOP_SITES = [
    { name: '中国医药信息查询平台', rate: 5.5, icon: '/medical-sources/dayi.png' },
    { name: '摩熵医药', rate: 0.8, icon: '/medical-sources/pharnexcloud.png' },
    { name: '必需药', rate: 0.6, icon: '/medical-sources/himd.png' },
    { name: '米内网', rate: 0.4, icon: '/medical-sources/menet.ico' },
    { name: '人卫智数（人民卫生出版社）', rate: 0.3, icon: '/medical-sources/pmphai.ico' },
    { name: '药品价格315网', rate: 0.3, icon: '/medical-sources/315jiage.png' },
    { name: 'A+医学百科', rate: 0.2, icon: '/medical-sources/a-hospital.png' },
    { name: '药智网', rate: 0.2, icon: '/medical-sources/yaozh.png' },
    { name: '智慧芽', rate: 0.1, icon: '/medical-sources/zhihuiya.png' },
    { name: '药渡数据', rate: 0.1, icon: '/medical-sources/pharmacodia.png' },
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

export default function Page_MedSource_DrugDB() {
    return (
        <SlideLayout
            title={<>01 药品百科及数据库类<span style={{ fontSize: '56px' }}>（引用比例 32.8%）</span></>}
            subtitle="按药品名建词条的结构化资料库，AI 眼里的「电子说明书」"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">

                    {/* 收录内容 */}
                    <SectionHeading index="一、" title="收录内容" note="按药品名建词条，一个字段一个字段列清楚" />

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
                        <SectionHeading index="二、" title="AI 如何引用" note="问到具体药品时的「标准答案」" />
                    </div>

                    <p className="shrink-0 mt-7 text-[24px] text-white leading-[38px]">
                        问题落到某个具体的药——怎么吃、有什么禁忌、是不是正规药——AI 就直接引用这类词条的字段。
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

Page_MedSource_DrugDB.hideHeader = true;
