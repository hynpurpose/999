import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const SPOTS = [
    {
        title: '养胃舒颗粒',
        src: '/medical-platforms/xiaohe-brand-drug.png',
        url: 'https://search.xiaohe.cn/drug/document?drug_id=7436622942181647145',
    },
    {
        title: '养胃舒胶囊',
        src: '/medical-platforms/xiaohe-brand-qa.png',
        url: 'https://search.xiaohe.cn/drug/document?drug_id=7436622942181630761',
    },
];

const KEY_FIELDS = ['通用名', '适应症', '用法', '不良反应', '注意事项'];

function ShotFrame({ src, alt, href }) {
    const [failed, setFailed] = useState(false);
    const fileName = src.split('/').pop();
    const Wrap = href ? 'a' : 'div';
    const wrapProps = href
        ? {
              href,
              target: '_blank',
              rel: 'noopener noreferrer',
              onClick: (e) => e.stopPropagation(),
          }
        : {};

    return (
        <Wrap
            {...wrapProps}
            className="flex-1 min-h-0 w-full flex items-stretch justify-start relative pointer-events-auto"
        >
            {/* 背后淡蓝光晕 */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[86%] rounded-full bg-[#004CE5]/[0.12] blur-[48px]" />

            {failed ? (
                <div
                    className="relative h-full rounded-[24px] border border-dashed border-white/20 flex flex-col items-center justify-center gap-3 bg-[#0B0D19]/45"
                    style={{ aspectRatio: '1320 / 1912' }}
                >
                    <span className="text-[22px] font-bold text-white tracking-widest">图片位</span>
                    <span className="text-[16px] text-white font-mono">{fileName}</span>
                </div>
            ) : (
                <div className="relative h-full rounded-[24px] p-[1px] bg-gradient-to-b from-white/25 via-white/10 to-[#004CE5]/40 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                    <img
                        src={src}
                        alt={alt}
                        onError={() => setFailed(true)}
                        className="h-full w-auto max-w-full object-contain rounded-[23px] bg-white"
                    />
                </div>
            )}
        </Wrap>
    );
}

function BrandStatusLayout({ title, subtitle, spots }) {
    return (
        <SlideLayout title={title} subtitle={subtitle}>
            <div className="w-full h-full flex gap-12 animate-fadeIn font-['MiSans'] pt-3">

                {/* ── 左：说明 ── */}
                <div className="w-[560px] shrink-0 h-full flex flex-col justify-center relative pl-8">
                    {/* 左侧竖向强调条 */}
                    <span className="absolute left-0 top-[8%] bottom-[8%] w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#004CE5] to-transparent" />

                    <h3 className="text-[36px] font-bold text-white leading-[46px] mb-7 flex items-center gap-4">
                        <span className="inline-flex items-center justify-center h-[52px] px-4 rounded-xl bg-white shrink-0">
                            <img
                                src="/medical-platforms/xiaohe-health.png"
                                alt="小荷健康"
                                className="h-[34px] w-auto object-contain"
                            />
                        </span>
                        <span>药品说明书</span>
                    </h3>

                    <p className="text-[24px] text-white leading-[38px] mb-8">
                        如果药本身已经获批上市，最基础的目标是让药品的通用名、适应症、用法、不良反应、注意事项等标准信息进入或完善小荷的药品百科。这里更接近标准药品信息收录，而不是品牌宣传。
                    </p>

                    {/* 关键信息点 */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {KEY_FIELDS.map((field) => (
                            <span
                                key={field}
                                className="h-[40px] px-4 rounded-[10px] border border-white/[0.1] bg-white/[0.03] text-[20px] text-white leading-[40px]"
                            >
                                {field}
                            </span>
                        ))}
                    </div>

                    {/* 底部强调句：整句不拆行，避免孤字 / 标点单独占行 */}
                    <div className="rounded-[18px] border border-[#004CE5]/30 bg-[#004CE5]/[0.1] px-6 py-5 flex items-center gap-4">
                        <span className="w-2 h-2 rounded-full bg-[#004CE5] shrink-0" />
                        <p className="text-[24px] text-white leading-[36px] whitespace-nowrap">
                            更接近<span className="font-bold text-[#004CE5]">标准药品信息收录</span>，而不是品牌宣传
                        </p>
                    </div>
                </div>

                {/* ── 右：两张截图 ── */}
                <div className="flex-1 min-w-0 h-full flex gap-8 pl-8">
                    {spots.map((spot, i) => (
                        <div key={`${spot.title}-${i}`} className="flex-1 min-w-0 h-full flex flex-col items-start">
                            <div className={`shrink-0 mb-4 w-full ${spot.note ? 'h-[72px]' : 'h-[40px]'}`}>
                                <div className="h-[40px] flex items-center gap-3">
                                    <span className="text-[18px] font-bold text-[#004CE5] tracking-[0.2em] font-['Montserrat'] leading-[40px]">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h4 className="text-[26px] font-bold text-white leading-[40px] whitespace-nowrap">
                                        {spot.title}
                                    </h4>
                                    <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                                </div>
                                {spot.note && (
                                    <p className="pl-[46px] text-[18px] text-white/70 leading-[28px] whitespace-nowrap">
                                        {spot.note}
                                    </p>
                                )}
                            </div>
                            <ShotFrame src={spot.src} alt={spot.title} href={spot.url} />
                            {spot.url && (
                                <a
                                    href={spot.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="mt-3 w-fit pr-[36px] shrink-0 text-[24px] leading-[34px] text-[#4C8DFF] underline underline-offset-4 pointer-events-auto"
                                >
                                    收录链接
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}

export default function Page_Xiaohe_BrandStatus() {
    return (
        <BrandStatusLayout
            title="目标药品收录情况"
            subtitle="目前三九养胃舒颗粒与养胃舒胶囊都已被小荷健康正常收录"
            spots={SPOTS}
        />
    );
}

Page_Xiaohe_BrandStatus.hideHeader = true;

const ZIRUN_SPOTS = [
    {
        title: '兹润 环孢素滴眼液',
        src: '/medical-platforms/xiaohe-brand-zirun.png',
        url: 'https://search.xiaohe.cn/drug/document?drug_id=7436626746696295204',
    },
    {
        title: '报告类解读',
        src: '/medical-platforms/xiaohe-brand-zirun-detail.png',
    },
];

export function Page_Xiaohe_BrandStatus_Zirun() {
    return (
        <BrandStatusLayout
            title="目标药品收录情况"
            subtitle="兴齐眼药 · 兹润：环孢素滴眼液（Ⅱ）已被小荷健康正常收录"
            spots={ZIRUN_SPOTS}
        />
    );
}

Page_Xiaohe_BrandStatus_Zirun.hideHeader = true;
