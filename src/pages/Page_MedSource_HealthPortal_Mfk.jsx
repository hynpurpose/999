import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/medical-sources/mfk-39yst.png';
const LOGO_SRC = '/medical-sources/mfk.png';

const FACTS = [
    { t: '运营主体', d: '江苏民福康科技股份有限公司，前身三九养生堂' },
    { t: '内容形态', d: '短视频、有声问答、图文问答、文章' },
    { t: '生产方式', d: '联合医院与医生创作，专家出镜、实名署名' },
];

const PRODUCTS = [
    { t: '科普视频', d: '医生出镜解读', price: '6,000', min: '单品 10 期起' },
    { t: '科普文章', d: '医生署名撰稿', price: '2,000', min: '单品 20 条起' },
    { t: '科普问答', d: '医生实名作答', price: '2,000', min: '单品 20 条起' },
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
        <div className="flex-1 min-w-0 h-full rounded-[20px] overflow-hidden bg-white border border-white/[0.08]">
            <img
                src={SHOT_SRC}
                alt="民福康健康首页"
                onError={() => setFailed(true)}
                className="w-full h-full object-cover object-top"
            />
        </div>
    );
}

function LogoPlate() {
    const [failed, setFailed] = useState(false);

    return (
        <span className="w-[34px] h-[34px] shrink-0 rounded-[9px] bg-white overflow-hidden flex items-center justify-center">
            {failed ? (
                <span className="text-[17px] font-bold text-zinc-600">民</span>
            ) : (
                <img
                    src={LOGO_SRC}
                    alt="民福康"
                    onError={() => setFailed(true)}
                    className="w-full h-full object-contain"
                />
            )}
        </span>
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

export default function Page_MedSource_HealthPortal_Mfk() {
    return (
        <SlideLayout
            title="综合医疗健康平台示例：民福康"
            subtitle="老牌养生健康门户，疾病、药品、食疗养生全覆盖，长尾内容较多"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏：平台介绍 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="平台介绍" note="疾病、药品、养生全都做" />

                    <div className="flex-1 min-h-0 mt-7 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <LogoPlate />
                                <span className="text-[22px] font-bold text-white leading-none">民福康健康</span>
                                <span className="text-[16px] text-white/50 font-mono leading-none">39yst.com</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                从三九养生堂发展来的健康门户，疾病、药品、食疗养生全覆盖，长尾内容量极大。
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

                {/* ── 右栏：怎么合作 ── */}
                <div className="w-[640px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="怎么合作" note="医生署名，内容植入产品" />

                    <div className="flex-1 min-h-0 mt-7 flex flex-col gap-3">
                        {PRODUCTS.map((p, i) => (
                            <div
                                key={p.t}
                                className={`flex-1 min-h-0 rounded-[20px] px-6 flex items-center justify-between gap-5 relative overflow-hidden ${
                                    i === 0
                                        ? 'border border-[#004CE5]/45 bg-[#004CE5]/[0.10]'
                                        : 'border border-white/[0.08] bg-white/[0.03]'
                                }`}
                            >
                                {i === 0 && (
                                    <div className="pointer-events-none absolute -right-8 -top-12 w-[180px] h-[180px] rounded-full bg-[#004CE5]/25 blur-[40px]" />
                                )}
                                <div className="relative min-w-0 flex items-center gap-4">
                                    <span className={`w-[34px] shrink-0 text-[20px] font-bold font-['Montserrat'] leading-none ${
                                        i === 0 ? 'text-[#004CE5]' : 'text-white/35'
                                    }`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div className="min-w-0">
                                        <span className="block text-[24px] font-bold text-white leading-none whitespace-nowrap">
                                            {p.t}
                                        </span>
                                        <span className="block mt-2 text-[16px] text-white/55 leading-none whitespace-nowrap">
                                            {p.d}
                                        </span>
                                    </div>
                                </div>
                                <div className="relative shrink-0 text-right">
                                    <div className="flex items-end justify-end gap-1">
                                        <span className="text-[40px] font-black text-white leading-none font-['Montserrat'] tracking-tight">
                                            {p.price}
                                        </span>
                                        <span className="text-[15px] text-white/55 leading-none pb-1 whitespace-nowrap">元/篇</span>
                                    </div>
                                    <span className="block mt-2 text-[15px] text-white/55 leading-none whitespace-nowrap">
                                        {p.min}
                                    </span>
                                </div>
                            </div>
                        ))}

                        <p className="shrink-0 pt-1 text-[18px] text-white/80 leading-[28px]">
                            提供产品资料即可，平台医生撰写并署名；也可我方成稿、对方审核。内容植入产品信息，全站同步上线。
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_MedSource_HealthPortal_Mfk.hideHeader = true;
