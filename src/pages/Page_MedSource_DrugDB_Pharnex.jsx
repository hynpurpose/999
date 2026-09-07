import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/medical-sources/pharnexcloud-home-tall.png';
const LOGO_SRC = '/medical-sources/pharnexcloud.png';

const FACTS = [
    { t: '什么背景', d: '摩熵数科（成都）旗下，前身药融云，商业化医药大数据服务公司' },
    { t: '有什么', d: '药品注册、销售、一致性评价等全产业链数据，外加公开的资讯与共识频道' },
    { t: '被引证据', d: '资讯页发布的《快胃片临床应用专家共识》已被 AI 直接引用' },
];

const PACKAGES = [
    { t: '门户 + 公众号次条', d: '官网发稿，同步公众号次条', price: '1.36' },
    { t: '门户 + 8 个自媒体', d: '官网发稿，铺到 8 个自媒体', price: '1.76' },
    { t: '全量分发', d: '门户 + 8 个自媒体 + 公众号次条', price: '3.6', hi: true },
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
                alt="摩熵医药首页"
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
                <span className="text-[17px] font-bold text-zinc-600">摩</span>
            ) : (
                <img
                    src={LOGO_SRC}
                    alt="摩熵医药"
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

export default function Page_MedSource_DrugDB_Pharnex() {
    return (
        <SlideLayout
            title="药品百科类示例：摩熵医药"
            subtitle="商业化运营的医药数据平台"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏：平台介绍 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="平台介绍" note="生物医药全产业链数据服务平台" />

                    <div className="flex-1 min-h-0 mt-7 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <LogoPlate />
                                <span className="text-[22px] font-bold text-white leading-none">摩熵医药</span>
                                <span className="text-[16px] text-white/50 font-mono leading-none">pharnexcloud.com</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                面向药企的商业数据平台，公开的数据页和资讯页同样会被 AI 抓取、引用。
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
                    <SectionHeading index="二、" title="怎么合作" note="通稿发布，可锁定首页 / 头条" />

                    <div className="flex-1 min-h-0 mt-7 flex flex-col gap-3">
                        {PACKAGES.map((p, i) => (
                            <div
                                key={p.t}
                                className={`flex-1 min-h-0 rounded-[20px] px-6 flex items-center justify-between gap-5 relative overflow-hidden ${
                                    p.hi
                                        ? 'border border-[#004CE5]/45 bg-[#004CE5]/[0.12]'
                                        : 'border border-white/[0.08] bg-white/[0.03]'
                                }`}
                            >
                                {p.hi && (
                                    <div className="pointer-events-none absolute -right-8 -top-12 w-[180px] h-[180px] rounded-full bg-[#004CE5]/25 blur-[40px]" />
                                )}
                                <div className="relative min-w-0 flex items-center gap-4">
                                    <span className={`w-[34px] shrink-0 text-[20px] font-bold font-['Montserrat'] leading-none ${
                                        p.hi ? 'text-[#004CE5]' : 'text-white/35'
                                    }`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-[24px] font-bold text-white leading-none whitespace-nowrap">
                                                {p.t}
                                            </span>
                                            {p.hi && (
                                                <span className="h-[24px] px-2 rounded-[6px] bg-[#004CE5] text-[13px] font-bold text-white leading-[24px] whitespace-nowrap">
                                                    推荐
                                                </span>
                                            )}
                                        </div>
                                        <span className="block mt-2 text-[16px] text-white/60 leading-none whitespace-nowrap">
                                            {p.d}
                                        </span>
                                    </div>
                                </div>
                                <div className="relative shrink-0 flex items-end gap-1">
                                    <span className="text-[44px] font-black text-white leading-none font-['Montserrat']">
                                        {p.price}
                                    </span>
                                    <span className="text-[16px] text-white/60 leading-none pb-1.5 whitespace-nowrap">万/篇</span>
                                </div>
                            </div>
                        ))}

                        <p className="shrink-0 pt-2 text-[18px] text-white/80 leading-[28px]">
                            官方通稿合作，内容会做一定修改；可争取首页、头条等关键位置展现，带产品名的公开页进入 AI 引用池。
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_MedSource_DrugDB_Pharnex.hideHeader = true;
