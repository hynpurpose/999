import React from 'react';

/**
 * GEO 体检报告页的幻灯片外壳：深色底 + 居中标题 + 白框内容区。
 * aspect 控制白框比例；children 填入 GeoOneApp 或内容卡片。
 * aside 可选，挂在白框左侧（如 C/B 端词条列表）。
 */
export default function Frame({ title, aspect = '1586/892.5', padded = true, children, footer, aside }) {
    const box = (
        <div
            className="h-full max-w-full rounded-2xl border border-[#004CE5]/40 shadow-[0_0_30px_rgba(0,76,229,0.25)] overflow-hidden bg-white select-none"
            style={{ aspectRatio: aspect }}
        >
            {children}
        </div>
    );

    const stage = aside ? (
        <div className="flex-1 w-full min-h-0 flex gap-4 items-stretch">
            <div className="w-[440px] xl:w-[500px] shrink-0 min-h-0">{aside}</div>
            <div className="flex-1 min-w-0 min-h-0 flex items-center justify-center overflow-hidden">{box}</div>
        </div>
    ) : (
        box
    );

    return (
        <div
            className={`w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 overflow-hidden animate-fade-in ${
                footer || !padded ? 'pb-10' : 'pb-0'
            }`}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                    {title}
                </h1>
            </div>

            <div
                className={`flex-1 w-full relative min-h-0 z-10 flex ${
                    footer ? 'flex-col gap-3 pt-[20px]' : aside ? 'pt-[20px] pb-2' : 'items-center justify-center pt-[20px] pb-2'
                }`}
            >
                {footer ? (
                    <>
                        <div className="flex-1 w-full min-h-0 mb-4 flex items-center justify-center overflow-hidden">
                            {aside ? stage : box}
                        </div>
                        {footer}
                    </>
                ) : (
                    stage
                )}
            </div>
        </div>
    );
}

/** 末两字绑在一起，避免中文换行后只剩一个字单独成行 */
function NoOrphan({ text }) {
    if (text.length < 3) return text;
    return (
        <>
            {text.slice(0, -2)}
            <span className="whitespace-nowrap">{text.slice(-2)}</span>
        </>
    );
}

/** 总览页左侧：C端 / B端监测词条清单 */
export function KeywordAside({ kind, side, items, cols = 2 }) {
    const perCol = Math.ceil(items.length / cols);
    const columns = Array.from({ length: cols }, (_, i) => items.slice(i * perCol, (i + 1) * perCol));
    return (
        <div className="w-full h-full bg-zinc-900/40 border border-white/10 rounded-2xl flex flex-col relative overflow-hidden min-h-0">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60" />
            <div className="px-4 py-3 border-b border-white/10 bg-white/[0.02] flex items-center justify-between shrink-0 gap-2">
                <div className="flex items-baseline gap-2 min-w-0">
                    <span className="text-[20px] xl:text-[22px] font-extrabold text-white tracking-wider shrink-0">
                        {kind}
                    </span>
                    <span className="text-[19px] xl:text-[21px] font-black text-white font-['Montserrat'] shrink-0">
                        {side}
                    </span>
                </div>
                <span className="bg-[#004CE5] text-white text-sm font-black px-2.5 py-0.5 rounded-full font-mono shrink-0">
                    {items.length}
                </span>
            </div>
            <div
                className={`flex-1 px-3 py-3 xl:px-3.5 xl:py-3.5 grid gap-3 min-h-0 overflow-hidden ${
                    cols === 2 ? 'grid-cols-2' : 'grid-cols-1'
                }`}
            >
                {columns.map((col, i) => (
                    <div key={i} className="flex flex-col justify-between h-full min-h-0">
                        {col.map((word, idx) => (
                            <div key={idx} className="flex items-start gap-2 min-w-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-[7px] shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                                <span className="text-[14px] xl:text-[15.5px] font-bold text-white break-words leading-snug [text-wrap:pretty]">
                                    <NoOrphan text={word} />
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
