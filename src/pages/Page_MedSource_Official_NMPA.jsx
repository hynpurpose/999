import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SHOT_SRC = '/medical-sources/nmpa-datasearch.png';
const LOGO_SRC = '/medical-sources/nmpa.png';

const FACTS = [
    { t: '数据查询', d: '国产 / 进口药品批文、规格、生产企业' },
    { t: '公告通告', d: '抽检结果、召回信息、注册审批公示' },
    { t: '被引方式', d: '出现频次不高，但一出现就是定性结论' },
];

const ACTION_STEPS = [
    { t: '批文核对', d: '文号、规格、厂家与库内记录一致' },
    { t: '说明书对齐', d: '修订备案后，各平台同步更新' },
    { t: '医保状态', d: '目录内名称、支付标准别写错' },
    { t: '通告监测', d: '进了抽检、召回通告要第一时间处理' },
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
                alt="国家药监局数据查询"
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
                <span className="text-[17px] font-bold text-zinc-600">药</span>
            ) : (
                <img
                    src={LOGO_SRC}
                    alt="国家药监局"
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

export default function Page_MedSource_Official_NMPA() {
    return (
        <SlideLayout
            title="官方及权威机构示例：国家药监局"
            subtitle="这类信源做的不是「合作」，是「对齐」——没有投放入口，只有合规动作"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏：平台介绍 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="平台介绍" note="AI 判断「正规药」的最终依据" />

                    <div className="flex-1 min-h-0 mt-7 flex gap-4">
                        <ShotFrame />

                        <div className="w-[300px] shrink-0 h-full flex flex-col">
                            <div className="shrink-0 flex items-center gap-2.5">
                                <LogoPlate />
                                <span className="text-[22px] font-bold text-white leading-none">国家药监局</span>
                                <span className="text-[16px] text-white/50 font-mono leading-none">nmpa.gov.cn</span>
                            </div>

                            <p className="shrink-0 mt-4 text-[18px] text-white leading-[28px]">
                                国家药品监督管理局的数据查询库，收录全国药品的批准文号、说明书备案和抽检通告。
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

                {/* ── 右栏：企业能做什么 ── */}
                <div className="w-[640px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="企业能做什么" note="买不了位置，只能保证不出错" />

                    <div className="flex-1 min-h-0 mt-7 flex flex-col">
                        <div className="flex-1 min-h-0 flex flex-col gap-3">
                            {ACTION_STEPS.map((s, i) => (
                                <div
                                    key={s.t}
                                    className="flex-1 min-h-0 rounded-[18px] border border-[#004CE5]/30 bg-[#004CE5]/[0.08] px-6 flex items-center gap-5"
                                >
                                    <span className="w-[34px] shrink-0 text-[20px] font-bold text-[#004CE5] font-['Montserrat'] leading-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="w-[168px] shrink-0 text-[24px] font-bold text-white leading-none whitespace-nowrap">
                                        {s.t}
                                    </span>
                                    <span className="flex-1 min-w-0 text-[21px] text-white leading-[30px]">
                                        {s.d}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="shrink-0 mt-6 rounded-[18px] border border-white/[0.08] bg-white/[0.03] px-7 py-6">
                            <p className="text-[22px] text-white leading-[34px]">
                                AI 拿这里做底线校验——<span className="font-bold text-[#5B8DEF]">批文信息如果出现错误</span>，
                                其他平台内容<span className="whitespace-nowrap">很难被采信</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_MedSource_Official_NMPA.hideHeader = true;
