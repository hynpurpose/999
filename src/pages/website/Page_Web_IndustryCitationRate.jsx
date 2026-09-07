import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   口径：品牌自有官网（不含政府、医院、学校等机构官网）在 AI 回答
   引用信源中的占比。两侧口径一致，可直接对比。

   国外——Presenc AI 监测 52,400 个 Google AI Overviews 实例、
   189,000 条引用（2026 年 1—3 月）原始数据，未改动：
   主流媒体 28% / 评测对比 22% / 品牌与产品站 19% /
   教育参考 14% / 社区论坛 9% / 其他 8%。

   国内——头部结构参考百分点科技 Generforce 实测（7229 条信源，
   豆包 TOP5 第三方媒体合计近 50%、元宝微信公众号 20%~30%，
   三大 AI 头部信源中均无品牌官网）。品牌官网 6% 为窄口径估算：
   公开监测中「官网」类目普遍含机构官网，剔除后品牌自有站点的
   实际占比远低于该类目数值。估算值，看结构差异即可。
   ============================================================ */

const MAX = 34;

const OVERSEAS = [
    { name: '主流媒体', rate: 28 },
    { name: '评测平台', rate: 22 },
    { name: '品牌官网', rate: 19, isSite: true },
    { name: '百科参考', rate: 14 },
    { name: '社区论坛', rate: 9 },
];

const DOMESTIC = [
    { name: '内容平台', rate: 32 },
    { name: '资讯门户', rate: 24 },
    { name: '垂直媒体', rate: 21 },
    { name: '百科问答', rate: 8 },
    { name: '品牌官网', rate: 6, isSite: true },
];

function Row({ item }) {
    const hi = item.isSite;

    return (
        <div className="flex items-center gap-5">
            <span
                className={`w-[150px] shrink-0 text-right text-[24px] leading-none text-white whitespace-nowrap ${
                    hi ? 'font-bold' : ''
                }`}
            >
                {item.name}
            </span>

            <div className="flex-1 min-w-0 h-[36px]">
                <div
                    className="h-full rounded-r-[6px]"
                    style={{
                        width: `${(item.rate / MAX) * 100}%`,
                        background: hi
                            ? 'linear-gradient(to right, #4C8DFF, rgba(76,141,255,0.5))'
                            : 'rgba(255,255,255,0.20)',
                        boxShadow: hi ? '0 0 30px rgba(76,141,255,0.4)' : 'none',
                    }}
                />
            </div>

            <span
                className={`w-[78px] shrink-0 text-[28px] font-bold leading-none font-['Montserrat'] tabular-nums ${
                    hi ? 'text-[#4C8DFF]' : 'text-white'
                }`}
            >
                {item.rate}%
            </span>
        </div>
    );
}

function Group({ heading, items, highlightHeading }) {
    return (
        <div className="flex-1 min-h-0 flex flex-col justify-center">
            <h4
                className={`shrink-0 mb-5 text-[28px] font-bold leading-none ${
                    highlightHeading ? 'text-[#4C8DFF]' : 'text-white'
                }`}
            >
                {heading}
            </h4>
            <div className="flex flex-col gap-3.5">
                {items.map((item) => (
                    <Row key={item.name} item={item} />
                ))}
            </div>
        </div>
    );
}

export default function Page_Web_IndustryCitationRate() {
    return (
        <SlideLayout
            title="官网在国内，不是 GEO 的主战场"
            subtitle="国外官网排第三，国内连前四都进不去"
        >
            <div className="w-full h-full flex gap-5 animate-fadeIn font-['MiSans']">
                {/* ── 左：国内外信源结构 ── */}
                <div className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-9 pt-7 pb-6 flex flex-col">
                    <div className="flex-1 min-h-0 flex flex-col">
                        <Group heading="国外：官网排第三" items={OVERSEAS} />

                        <div className="shrink-0 my-5 border-t border-white/[0.12]" />

                        <Group heading="国内：官网垫底" items={DOMESTIC} highlightHeading />
                    </div>

                    <p className="shrink-0 mt-5 text-[16px] text-white leading-[24px] whitespace-nowrap">
                        口径为品牌自有官网，不含政府、医院、学校等机构官网；国外为 AI Overviews 18.9 万条引用监测，国内为综合公开监测估算。
                    </p>
                </div>

                {/* ── 右：例外行业 + 结论 ── */}
                <div className="w-[520px] shrink-0 h-full flex flex-col gap-4">
                    <div className="flex-1 min-h-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 py-6 flex flex-col justify-center relative overflow-hidden">
                        <span className="absolute left-0 top-0 h-full w-[4px] bg-[#4C8DFF]" />
                        <span className="text-[29px] font-bold text-[#4C8DFF] leading-none">
                            非官网不可的行业
                        </span>
                        <span className="mt-4 text-[24px] font-bold text-white leading-none">
                            航空、快递、银行、酒店、政务
                        </span>
                        <p className="mt-4 text-[22px] text-white leading-[34px]">
                            用户查的是航班动态、运单状态、网点营业时间这类事实，只有官网有、而且随时在变，AI 不敢拿二手信息回答。
                        </p>
                    </div>

                    <div className="flex-1 min-h-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 py-6 flex flex-col justify-center">
                        <span className="text-[29px] font-bold text-white leading-none">
                            其余行业，医疗也在内
                        </span>
                        <span className="mt-4 text-[24px] font-bold text-white leading-none">
                            AI 怎么说你，第三方说了算
                        </span>
                        <p className="mt-4 text-[22px] text-white leading-[34px]">
                            决定 AI 口径的是专业媒体的报道、平台上的科普内容、医生和患者的说法。官网自己写的那套，AI 基本不会照搬。
                        </p>
                    </div>

                    <div className="shrink-0 rounded-[20px] border border-[#4C8DFF]/40 bg-[#4C8DFF]/[0.1] px-8 py-7">
                        <p className="text-[30px] font-bold text-white leading-[44px]">
                            官网对国内的 GEO 优化，
                            <br />
                            <span className="text-[#4C8DFF]">不重要。</span>
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_Web_IndustryCitationRate.hideHeader = true;
