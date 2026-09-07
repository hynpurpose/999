import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const LOGO_SRC = '/medical-platforms/xiaohe-health.png';

function LogoPlate({ w = 260, h = 76, maxH = 48 }) {
    const [failed, setFailed] = useState(false);

    return (
        <div
            className="shrink-0 rounded-xl bg-white flex items-center justify-center px-5"
            style={{ width: `${w}px`, height: `${h}px` }}
        >
            {failed ? (
                <span className="text-[13px] text-zinc-500 font-mono">xiaohe-health.png</span>
            ) : (
                <img
                    src={LOGO_SRC}
                    alt="小荷健康"
                    onError={() => setFailed(true)}
                    className="max-w-full object-contain"
                    style={{ maxHeight: `${maxH}px` }}
                />
            )}
        </div>
    );
}

/* ═══════════════ 第一页：小荷健康是什么 ═══════════════ */

const PIPELINE = [
    { t: '专业编辑生产', d: '医学、药学背景团队' },
    { t: '权威专家审核', d: '公立三甲临床专家' },
    { t: '结构化整理', d: '按疾病、症状、药物' },
    { t: '持续更新', d: '依据医学指南迭代' },
];

const LIBRARIES = [
    { name: '疾病百科', note: '结构化词条' },
    { name: '药品百科', note: '约 17,626 种' },
    { name: '症状 / 检查 / 治疗', note: '独立知识库' },
    { name: '科普与问答', note: '近百万条内容' },
];

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

const SCREENSHOT_SRC = '/medical-platforms/xiaohe-yidian.png';

function ScreenshotFrame() {
    const [failed, setFailed] = useState(false);

    return (
        <div className="flex-1 min-h-0 rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 overflow-hidden flex items-center justify-center">
            {failed ? (
                <div className="w-full h-full m-4 rounded-[20px] border border-dashed border-white/20 flex flex-col items-center justify-center gap-3">
                    <span className="text-[24px] text-white tracking-widest font-bold">图片位</span>
                    <span className="text-[18px] text-white/50 font-mono">{SCREENSHOT_SRC}</span>
                </div>
            ) : (
                <img
                    src={SCREENSHOT_SRC}
                    alt="小荷医典页面示意"
                    onError={() => setFailed(true)}
                    className="w-full h-full object-cover object-top"
                />
            )}
        </div>
    );
}

export default function Page_Xiaohe_Overview() {
    return (
        <SlideLayout
            title="小荷健康基础介绍"
            subtitle="字节跳动旗下小荷健康建设的专业医学内容平台与结构化医疗知识库"
        >
            <div className="w-full h-full flex gap-10 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">

                    {/* 收录逻辑 */}
                    <SectionHeading index="一、" title="收录逻辑" note="不是开放百科，词条不可由企业自行改写" />

                    <div className="shrink-0 mt-6 flex items-stretch">
                        {PIPELINE.map((step, i) => (
                            <React.Fragment key={step.t}>
                                <div className="flex-1 min-w-0 h-[176px] rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-4 py-6 flex flex-col">
                                    <span className="h-[18px] text-[18px] font-bold text-[#004CE5] font-['Montserrat'] leading-[18px]">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="mt-[22px] h-[32px] text-[24px] font-bold text-white leading-[32px] whitespace-nowrap">
                                        {step.t}
                                    </span>
                                    <span className="mt-[10px] h-[28px] text-[20px] text-white leading-[28px] whitespace-nowrap">
                                        {step.d}
                                    </span>
                                </div>
                                {i < PIPELINE.length - 1 && (
                                    <div className="w-8 shrink-0 flex items-center justify-center">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                                            <path d="M1 6h14M11 1.5 16.5 6 11 10.5" stroke="#004CE5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* 内容构成 */}
                    <div className="shrink-0 mt-11">
                        <SectionHeading index="二、" title="内容构成" note="疾病之外，还有独立的药品与症状知识库" />
                    </div>

                    <div className="flex-1 min-h-0 mt-6 grid grid-cols-2 grid-rows-2 gap-5">
                        {LIBRARIES.map((lib) => (
                            <div
                                key={lib.name}
                                className="min-h-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 flex items-center justify-between gap-5"
                            >
                                <span className="text-[26px] font-bold text-white leading-[36px] whitespace-nowrap">
                                    {lib.name}
                                </span>
                                <span className="shrink-0 text-[22px] text-[#004CE5] leading-[36px] whitespace-nowrap">
                                    {lib.note}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* 底注 */}
                    <div className="shrink-0 mt-8 pt-6 border-t border-white/[0.08] flex gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-[13px]" />
                        <p className="text-[22px] text-white leading-[34px]">
                            内容由医学编辑团队生产，核心词条经公立三甲医院专家临床审核后入库；官方披露已有近百万条科普词条、案例、问答与视频。
                        </p>
                    </div>
                </div>

                {/* ── 右栏：示意 ── */}
                <div className="w-[600px] shrink-0 h-full flex flex-col gap-5">
                    <LogoPlate w={600} h={84} maxH={52} />
                    <ScreenshotFrame />
                </div>
            </div>
        </SlideLayout>
    );
}

Page_Xiaohe_Overview.hideHeader = true;

/* ═══════════════ 怎么投放：两条优化路径 ═══════════════ */

const COOP_FORMS = ['疾病科普', '药物科普', '专家内容', '问答', '专题'];

const CHECK_ITEMS = [
    '通用名与商品名',
    '说明书信息',
    '成分与规格',
    '生产厂家',
    '适应症',
    '用法用量',
    '功效作用',
    '不良反应',
    '用药禁忌',
    '注意事项',
    '药物联用',
    '医保与分类',
];

const COOP_OUTCOMES = [
    { t: '已有官方合作', d: '我们直接对接小荷健康' },
    { t: '进入药品说明书', d: '收录完成后即时展现' },
];

export function Page_Xiaohe_Cooperation() {
    return (
        <SlideLayout
            title="小荷健康怎么投放"
            subtitle="可以优化两个方向：药品词条建设，以及官方内容共建"
        >
            <div className="w-full h-full flex gap-5 animate-fadeIn font-['MiSans'] pt-4">

                {/* ── 01 药品词条建设（轻量） ── */}
                <div className="w-[640px] shrink-0 h-full rounded-[24px] border border-white/[0.08] bg-white/[0.02] px-8 py-8 flex flex-col relative overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-white/25 to-transparent" />

                    <div className="shrink-0 flex items-center gap-3 mb-5">
                        <span className="text-[18px] font-bold text-white/40 leading-none">
                            一、
                        </span>
                        <h3 className="text-[34px] font-bold text-white leading-none">药品词条建设</h3>
                        <span className="flex-1 h-px bg-white/[0.08]" />
                        <span className="h-[30px] px-3 rounded-[8px] border border-white/15 text-[18px] text-white leading-[30px] whitespace-nowrap">
                            品牌自核即可
                        </span>
                    </div>

                    <p className="shrink-0 text-[24px] text-white leading-[38px] mb-7">
                        目前三九的目标药品已被正常收录，不需要再花费更多精力，品牌自己核对一遍就行。
                    </p>

                    <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-6 gap-2.5">
                        {CHECK_ITEMS.map((item, i) => (
                            <div
                                key={item}
                                className="min-h-0 rounded-[14px] border border-white/[0.08] bg-[#0B0D19]/40 px-4 flex items-center gap-3"
                            >
                                <span className="text-[16px] font-bold text-white/35 font-['Montserrat'] leading-none shrink-0">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="text-[20px] text-white leading-none whitespace-nowrap">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="shrink-0 mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                        <p className="text-[22px] text-white leading-[32px] whitespace-nowrap">
                            重点是核对信息是否完整、准确，而非重新建设
                        </p>
                    </div>
                </div>

                {/* ── 02 官方内容共建（重点） ── */}
                <div className="flex-1 min-w-0 h-full rounded-[24px] border border-[#004CE5]/35 bg-[#004CE5]/[0.08] px-8 py-7 flex flex-col relative overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#004CE5] to-transparent" />
                    <div className="pointer-events-none absolute -right-16 -top-20 w-[320px] h-[320px] rounded-full bg-[#004CE5]/20 blur-[70px]" />

                    <div className="shrink-0 flex items-center gap-3 mb-5 relative">
                        <span className="text-[18px] font-bold text-[#004CE5] leading-none">
                            二、
                        </span>
                        <h3 className="text-[34px] font-bold text-white leading-none">官方内容共建</h3>
                        <span className="flex-1 h-px bg-gradient-to-r from-[#004CE5]/50 to-transparent" />
                        <span className="h-[30px] px-3 rounded-[8px] border border-[#004CE5]/50 bg-[#004CE5]/20 text-[18px] text-white leading-[30px] whitespace-nowrap">
                            已有合作通道
                        </span>
                    </div>

                    {/* 费用主视觉 */}
                    <div className="flex-1 min-h-0 rounded-[22px] border border-[#004CE5]/40 bg-[#0B0D19]/55 px-8 py-6 flex flex-col justify-center relative mb-5">
                        <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[radial-gradient(ellipse_at_center,rgba(0,76,229,0.22),transparent_68%)]" />

                        <div className="relative flex items-end justify-between gap-8">
                            <div className="min-w-0">
                                <span className="block text-[20px] font-bold text-[#004CE5] leading-none mb-4 tracking-wide">
                                    新药收录 · 单品
                                </span>
                                <div className="flex items-end gap-3">
                                    <span className="text-[92px] font-black text-white leading-none font-['Montserrat'] tracking-tight">
                                        10–20
                                    </span>
                                    <span className="text-[40px] font-bold text-white leading-none pb-2">万</span>
                                </div>
                            </div>
                            <div className="shrink-0 flex flex-col gap-3 w-[360px]">
                                {COOP_OUTCOMES.map((item) => (
                                    <div
                                        key={item.t}
                                        className="rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-5 py-3.5"
                                    >
                                        <span className="block text-[22px] font-bold text-white leading-none mb-2">
                                            {item.t}
                                        </span>
                                        <span className="block text-[18px] text-white/70 leading-none">
                                            {item.d}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="relative mt-6 text-[22px] text-white leading-[34px]">
                            收录完成后，药品将直接进入前述药品说明书；费用按单品计，我们负责对接小荷健康官方通道。
                        </p>
                    </div>

                    {/* 内容形态 */}
                    <div className="shrink-0 relative">
                        <div className="h-[28px] flex items-center gap-3 mb-3">
                            <span className="text-[20px] font-bold text-white/70 leading-none">说明书之外，还可落地</span>
                            <span className="flex-1 h-px bg-white/[0.08]" />
                        </div>
                        <div className="grid grid-cols-5 gap-3">
                            {COOP_FORMS.map((form) => (
                                <div
                                    key={form}
                                    className="h-[56px] rounded-[14px] border border-[#004CE5]/25 bg-[#0B0D19]/40 flex items-center justify-center"
                                >
                                    <span className="text-[20px] font-bold text-white leading-none whitespace-nowrap">
                                        {form}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_Xiaohe_Cooperation.hideHeader = true;
