import React, { useMemo, useState } from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q3 标书示意
   每页 3 个 A4 图位。显示图为 Lanczos 缩小 + 锐化后的 4:4:4 JPEG：
   public/bid-sample/display/0001.jpg … 0019.jpg
   ============================================================ */

const TOTAL_PAGES = 19;

function srcFor(pageNo) {
    const n = String(pageNo).padStart(4, '0');
    return `/bid-sample/display/${n}.jpg`;
}

function A4Slot({ pageNo }) {
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);
    const src = useMemo(() => srcFor(pageNo), [pageNo]);
    const label = String(pageNo).padStart(2, '0');

    if (pageNo > TOTAL_PAGES) {
        return <div className="h-full aspect-[1400/1980] shrink-0" />;
    }

    return (
        <div className="relative h-full aspect-[1400/1980] shrink-0 overflow-hidden bg-white shadow-[0_18px_44px_rgba(0,0,0,0.55)]">
            {!failed && (
                <img
                    src={src}
                    alt={`招标文件第 ${pageNo} 页`}
                    width={1400}
                    height={1980}
                    decoding="sync"
                    className={`absolute inset-0 w-full h-full object-fill ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        imageRendering: '-webkit-optimize-contrast',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                    }}
                    onLoad={() => setLoaded(true)}
                    onError={() => setFailed(true)}
                />
            )}
            {!loaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#0B0D19] px-6">
                    <span className="text-[64px] font-black text-white leading-none font-['Montserrat'] tabular-nums">
                        {label}
                    </span>
                    <p className="text-[20px] font-bold text-white leading-[28px] text-center">
                        未找到
                        <br />
                        display/{String(pageNo).padStart(4, '0')}.jpg
                    </p>
                </div>
            )}
        </div>
    );
}

function BidSampleStrip({ start }) {
    const pages = [start, start + 1, start + 2];

    return (
        <SlideLayout fullBleed>
            <div className="w-full h-full flex flex-col animate-fadeIn font-['MiSans']">
                <h1
                    data-slide-title
                    className="shrink-0 text-white"
                    style={{
                        fontFamily: "'AlimamaShuHeiTi', sans-serif",
                        fontWeight: 700,
                        fontSize: '56px',
                        lineHeight: '64px',
                        letterSpacing: '0.02em',
                    }}
                >
                    标书示意
                </h1>
                <div className="flex-1 min-h-0 mt-5 flex items-stretch justify-center gap-5">
                    {pages.map((n) => (
                        <A4Slot key={n} pageNo={n} />
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}

export default function Page_QA_Bid_Sample() {
    return <BidSampleStrip start={1} />;
}
export function Page_QA_Bid_Sample2() {
    return <BidSampleStrip start={4} />;
}
export function Page_QA_Bid_Sample3() {
    return <BidSampleStrip start={7} />;
}
export function Page_QA_Bid_Sample4() {
    return <BidSampleStrip start={10} />;
}
export function Page_QA_Bid_Sample5() {
    return <BidSampleStrip start={13} />;
}
export function Page_QA_Bid_Sample6() {
    return <BidSampleStrip start={16} />;
}
export function Page_QA_Bid_Sample7() {
    return <BidSampleStrip start={19} />;
}

[
    Page_QA_Bid_Sample,
    Page_QA_Bid_Sample2,
    Page_QA_Bid_Sample3,
    Page_QA_Bid_Sample4,
    Page_QA_Bid_Sample5,
    Page_QA_Bid_Sample6,
    Page_QA_Bid_Sample7,
].forEach((page) => {
    page.hideHeader = true;
});
