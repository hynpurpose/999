import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/medical-sources/dxy-drugs.png';
const LOGO_SRC = '/medical-sources/dxy-doctor.png';

const FACTS = [
    { t: '内容规模', d: '30000+ 指南共识、70000+ 药品说明书、4000+ 诊疗方案' },
    { t: '生产方式', d: '600+ 专业编辑、500+ 审核专家，接入中华医学会指南' },
    { t: '被引证据', d: '《猴头健胃灵片临床应用专家共识》全文已被 AI 直接引用' },
];

const ACADEMIC_STEPS = [
    { t: '联合学会专家', d: '发起共识或临床研究' },
    { t: '成果正式发表', d: '论文、共识全文发布' },
    { t: '指南库收录', d: '24 小时内同步入库' },
    { t: '长期稳定被引', d: '带产品名的共识进引用池' },
];

const COOP_FORMS = ['专家共识', '临床研究', '综述文章', '指南解读'];

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
                alt="丁香园用药助手"
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
                <span className="text-[17px] font-bold text-zinc-600">丁</span>
            ) : (
                <img
                    src={LOGO_SRC}
                    alt="丁香园"
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

export default function Page_MedSource_Academic_DXY() {
    return (
        <SlideLayout
            title="专业学术内容示例：丁香园"
            subtitle="医生查指南、查药品的日常工具，学术内容进 AI 的主要出口"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏：平台介绍 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="平台介绍" note="用药助手 + 临床指南库" />

                    <div className="flex-1 min-h-0 mt-7 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-start gap-2.5 min-w-0">
                                <LogoPlate />
                                <div className="min-w-0 flex flex-col gap-1.5">
                                    <span className="text-[20px] font-bold text-white leading-[26px]">丁香园·用药助手</span>
                                    <span className="text-[16px] text-white/50 font-mono leading-none">drugs.dxy.cn</span>
                                </div>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                300 万+ 医生在用的临床诊疗工具，也是 AI 检索指南、共识时反复命中的站点。
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
                    <SectionHeading index="二、" title="怎么合作" note="学术路径 + 全媒体矩阵" />

                    <div className="flex-1 min-h-0 mt-7 flex gap-4">

                        <div className="flex-1 min-w-0 h-full flex flex-col gap-3">
                            <div className="h-[28px] flex items-center gap-3">
                                <span className="text-[20px] font-bold text-white leading-none">学术进场</span>
                                <span className="flex-1 h-px bg-white/[0.08]" />
                            </div>
                            {ACADEMIC_STEPS.map((s, i) => (
                                <div
                                    key={s.t}
                                    className="flex-1 min-h-0 rounded-[16px] border border-white/[0.08] bg-white/[0.03] px-4 flex items-center gap-3"
                                >
                                    <span className="w-[28px] shrink-0 text-[16px] font-bold text-[#004CE5] font-['Montserrat'] leading-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div className="min-w-0">
                                        <span className="block text-[20px] font-bold text-white leading-none whitespace-nowrap">
                                            {s.t}
                                        </span>
                                        <span className="block mt-1.5 text-[15px] text-white/60 leading-none whitespace-nowrap">
                                            {s.d}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-[268px] shrink-0 h-full rounded-[22px] border border-[#004CE5]/40 bg-[#004CE5]/[0.08] px-5 py-6 flex flex-col relative overflow-hidden">
                            <div className="pointer-events-none absolute -right-10 -top-12 w-[180px] h-[180px] rounded-full bg-[#004CE5]/20 blur-[40px]" />
                            <span className="relative text-[16px] font-bold text-[#004CE5] leading-none tracking-wide">
                                商业投放
                            </span>
                            <p className="relative mt-5 text-[28px] font-bold text-white leading-[38px]">
                                报价视具体<br />版面而定
                            </p>
                            <p className="relative mt-4 text-[16px] text-white/70 leading-[26px]">
                                药企机构合作推广，走丁香园全媒体矩阵，按投放版面谈。
                            </p>
                            <div className="relative mt-auto grid grid-cols-2 gap-2">
                                {COOP_FORMS.map((f) => (
                                    <div
                                        key={f}
                                        className="h-[40px] rounded-[10px] border border-[#004CE5]/25 bg-[#0B0D19]/40 flex items-center justify-center"
                                    >
                                        <span className="text-[15px] text-white leading-none whitespace-nowrap">{f}</span>
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

Page_MedSource_Academic_DXY.hideHeader = true;
