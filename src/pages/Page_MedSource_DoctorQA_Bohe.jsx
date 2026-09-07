import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/medical-sources/bohe-ask.png';
const LOGO_SRC = '/medical-sources/bohe.png';

const FACTS = [
    { t: '内容形态', d: '权威问答、健康知道、科普文章、语音、短视频' },
    { t: '组织方式', d: '按内科、外科、中医科等二十余个科室分频道' },
    { t: '医生署名', d: '主任医师 / 副主任医师 + 所在医院 + 擅长方向' },
];

const COOP_POINTS = [
    { t: '医生实名作答', d: '职称、医院、擅长方向' },
    { t: '按病种定题', d: '对准疾病与用药场景' },
    { t: '多形态入库', d: '问答 / 文章 / 短视频' },
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
                alt="博禾医生问答频道"
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
                <span className="text-[17px] font-bold text-zinc-600">博</span>
            ) : (
                <img
                    src={LOGO_SRC}
                    alt="博禾医生"
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

export default function Page_MedSource_DoctorQA_Bohe() {
    return (
        <SlideLayout
            title="医生问答及科普类示例：博禾医生"
            subtitle="复禾健康旗下的医患问答与科普平台，也是这类信源里被 AI 引用最多的站点"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏：平台介绍 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="平台介绍" note="医生实名作答的问答频道" />

                    <div className="flex-1 min-h-0 mt-7 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <LogoPlate />
                                <span className="text-[22px] font-bold text-white leading-none">博禾医生</span>
                                <span className="text-[16px] text-white/50 font-mono leading-none">bohe.cn/ask</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                患者提问、医生作答的健康问答平台，每条回答都挂着医生的姓名、职称和所在医院。
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
                    <SectionHeading index="二、" title="怎么合作" note="医生署名问答，批量入库" />

                    <div className="flex-1 min-h-0 mt-7 flex flex-col gap-4">

                        <div className="flex-1 min-h-0 rounded-[22px] border border-[#004CE5]/40 bg-[#004CE5]/[0.08] px-8 flex flex-col justify-center relative overflow-hidden">
                            <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[radial-gradient(ellipse_at_center,rgba(0,76,229,0.22),transparent_68%)]" />
                            <div className="relative flex items-end justify-between gap-6">
                                <div>
                                    <span className="block text-[18px] font-bold text-[#004CE5] leading-none mb-4 tracking-wide">
                                        问答合作 · 单价
                                    </span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-[72px] font-black text-white leading-none font-['Montserrat'] tracking-tight">
                                            3,000
                                        </span>
                                        <span className="text-[24px] font-bold text-white leading-none pb-2">元/条</span>
                                    </div>
                                </div>
                                <span className="shrink-0 h-[34px] px-3 rounded-[8px] border border-[#004CE5]/50 bg-[#004CE5]/20 text-[18px] text-white leading-[34px] whitespace-nowrap mb-2">
                                    50 条起
                                </span>
                            </div>
                        </div>

                        <div className="shrink-0 grid grid-cols-3 gap-3">
                            {COOP_POINTS.map((p) => (
                                <div
                                    key={p.t}
                                    className="h-[132px] rounded-[16px] border border-white/[0.08] bg-white/[0.03] px-4 flex flex-col justify-center"
                                >
                                    <span className="text-[20px] font-bold text-white leading-none whitespace-nowrap">
                                        {p.t}
                                    </span>
                                    <span className="mt-3 text-[15px] text-white/60 leading-none whitespace-nowrap">
                                        {p.d}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="shrink-0 text-[18px] text-white/80 leading-[28px]">
                            走服务商通道对接，批量选题后由平台合作医生作答并审核入库。
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_MedSource_DoctorQA_Bohe.hideHeader = true;
