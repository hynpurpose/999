import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/medical-sources/dayi-home-tall.png';
const LOGO_SRC = '/medical-sources/dayi.png';

const FACTS = [
    { t: '什么背景', d: '中国中医药信息学会主办，源自国家中医药管理局 2015 年设立的规范推广项目' },
    { t: '内容体系', d: '疾病、药品、医院、医生等 11 大类词条，三甲专家编写、主任医师审核' },
    { t: '权威分发', d: '标注国家权威认证，词条同步推广至百度、今日头条、搜狗、360、神马' },
];

const COOP_ENTRIES = ['药品词条', '企业词条', '中药材词条', '保健品词条', '疾病词条', '医生词条'];

const QA_PLANS = [
    { t: '疾病问答', price: '5,000' },
    { t: '产品问答', price: '4,000' },
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
                alt="中国医药信息查询平台首页"
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
                <span className="text-[17px] font-bold text-zinc-600">医</span>
            ) : (
                <img
                    src={LOGO_SRC}
                    alt="中国医药信息查询平台"
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

export default function Page_MedSource_DrugDB_Dayi() {
    return (
        <SlideLayout
            title="药品数据库类示例：中国医药信息查询平台"
            subtitle="官方公益属性的药品词条库"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏：平台介绍 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="平台介绍" note="AI 查药品「标准答案」的第一来源" />

                    <div className="flex-1 min-h-0 mt-7 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-start gap-2.5 min-w-0">
                                <LogoPlate />
                                <div className="min-w-0 flex flex-col gap-1.5">
                                    <span className="text-[20px] font-bold text-white leading-[26px]">中国医药信息查询平台</span>
                                    <span className="text-[16px] text-white/50 font-mono leading-none">dayi.org.cn</span>
                                </div>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                本项目里被引用最多的通用信源，仅次于小荷健康，问到具体药品时几乎必被命中。
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
                    <SectionHeading index="二、" title="怎么合作" note="已有指定服务商通道" />

                    <div className="flex-1 min-h-0 mt-7 flex flex-col gap-4">

                        <div className="flex-1 min-h-0 rounded-[22px] border border-[#004CE5]/40 bg-[#004CE5]/[0.08] px-7 py-6 flex flex-col relative overflow-hidden">
                            <div className="pointer-events-none absolute -right-10 -top-16 w-[220px] h-[220px] rounded-full bg-[#004CE5]/20 blur-[50px]" />
                            <div className="relative shrink-0 flex items-end justify-between gap-4">
                                <div>
                                    <span className="block text-[18px] font-bold text-[#004CE5] leading-none mb-3 tracking-wide">
                                        入驻词条 · 单品
                                    </span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-[72px] font-black text-white leading-none font-['Montserrat'] tracking-tight">
                                            2
                                        </span>
                                        <span className="text-[32px] font-bold text-white leading-none pb-1.5">万</span>
                                    </div>
                                </div>
                                <span className="shrink-0 h-[30px] px-3 rounded-[8px] border border-[#004CE5]/50 bg-[#004CE5]/20 text-[16px] text-white leading-[30px] whitespace-nowrap mb-2">
                                    指定服务商上传
                                </span>
                            </div>
                            <div className="relative flex-1 min-h-0 mt-5 grid grid-cols-3 grid-rows-2 gap-2">
                                {COOP_ENTRIES.map((f) => (
                                    <div
                                        key={f}
                                        className="min-h-0 rounded-[10px] border border-[#004CE5]/25 bg-[#0B0D19]/40 flex items-center justify-center"
                                    >
                                        <span className="text-[18px] text-white leading-none whitespace-nowrap">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0">
                            <div className="h-[28px] flex items-center gap-3 mb-3">
                                <span className="text-[20px] font-bold text-white leading-none">问答合作</span>
                                <span className="h-[26px] px-2.5 rounded-[6px] border border-white/15 text-[15px] text-white/70 leading-[26px] whitespace-nowrap">
                                    100 条起
                                </span>
                                <span className="flex-1 h-px bg-white/[0.08]" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {QA_PLANS.map((p) => (
                                    <div
                                        key={p.t}
                                        className="h-[118px] rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-5 flex flex-col justify-center"
                                    >
                                        <span className="text-[18px] text-white/70 leading-none mb-2">{p.t}</span>
                                        <div className="flex items-end gap-1.5">
                                            <span className="text-[40px] font-black text-white leading-none font-['Montserrat']">
                                                {p.price}
                                            </span>
                                            <span className="text-[16px] text-white/60 leading-none pb-1">元/条</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="shrink-0 text-[18px] text-white/80 leading-[28px]">
                            公益平台没有公开投放位。材料由指定服务商整理上传，平台审核后更新，并同步分发到各搜索端。
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_MedSource_DrugDB_Dayi.hideHeader = true;
