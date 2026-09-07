import React from 'react';
import kw from '../data/keywords_yangweishu.json';

/** 养胃舒颗粒：优化词 ToC / ToB（词条确定表）+ 监测词 ToC / ToB（监测词表） */
const optimizeToC = kw.optimizeToC || [];
const optimizeToB = kw.optimizeToB || [];
const monitorToC = (kw.monitorToC || []).map((m) => m.keyword);
const monitorToB = (kw.monitorToB || []).map((m) => m.keyword);

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

function KeywordList({ items }) {
    return (
        <div className="flex flex-col justify-between h-full min-h-0">
            {items.map((word, idx) => (
                <div key={idx} className="flex items-start gap-1.5 py-0.5 select-text min-w-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2 shadow-[0_0_6px_rgba(0,76,229,0.6)]" />
                    <span className="text-[12.5px] lg:text-[14px] xl:text-[15.5px] font-bold text-white break-words leading-snug [text-wrap:pretty]">
                        <NoOrphan text={word} />
                    </span>
                </div>
            ))}
        </div>
    );
}

function Panel({ kind, side, sub, items, cols = 1 }) {
    const perCol = Math.ceil(items.length / cols);
    const columns = Array.from({ length: cols }, (_, i) => items.slice(i * perCol, (i + 1) * perCol));
    return (
        <div className="w-full h-full bg-zinc-900/40 border border-white/10 rounded-2xl flex flex-col relative overflow-hidden shadow-2xl min-h-0">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60" />
            <div className="px-4 py-2.5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between shrink-0 gap-3">
                <div className="flex flex-col min-w-0">
                    <div className="flex items-baseline gap-2 min-w-0">
                        <span className="text-[16px] lg:text-[18px] xl:text-[20px] font-extrabold text-white tracking-wider shrink-0">
                            {kind}
                        </span>
                        <span className="text-[15px] lg:text-[16px] xl:text-[18px] font-black text-white font-['Montserrat'] shrink-0">
                            {side}
                        </span>
                    </div>
                    <span className="text-[11px] lg:text-[12px] xl:text-[13.5px] font-bold text-white truncate mt-0.5">
                        {sub}
                    </span>
                </div>
                <span className="bg-[#004CE5] text-white text-xs xl:text-sm font-black px-2.5 py-0.5 rounded-full font-mono shrink-0">
                    {items.length}
                </span>
            </div>
            <div
                className={`flex-1 p-3 xl:p-4 grid gap-3 min-h-0 overflow-y-auto ${
                    cols === 2 ? 'grid-cols-2' : 'grid-cols-1'
                }`}
            >
                {columns.map((col, i) => (
                    <KeywordList key={i} items={col} />
                ))}
            </div>
        </div>
    );
}

export default function Page_KeywordGroupingConclusion() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full px-12 sm:px-16 pt-1 pb-1.5 relative z-10 shrink-0 text-left flex items-baseline gap-4">
                <h1 className="text-3xl lg:text-[32px] font-bold text-white tracking-widest leading-none">
                    词条分组结论
                </h1>
                <span className="text-sm xl:text-base font-bold text-white">
                    优化词负责抢答案，监测词负责看效果；ToC 面向消费者选药，ToB 面向药店与医院渠道，两侧分开建组、分开验收
                </span>
            </div>

            <div
                className="flex-1 w-full px-12 sm:px-16 pb-5 relative z-10 min-h-0 grid gap-4"
                style={{ gridTemplateColumns: '4fr 3fr 1px 3fr 2fr' }}
            >
                <div className="min-h-0">
                    <Panel
                        kind="优化词"
                        side="ToC"
                        sub="消费者选药场景 · 投放与抢答案的主力"
                        items={optimizeToC}
                        cols={2}
                    />
                </div>
                <div className="min-h-0">
                    <Panel kind="优化词" side="ToB" sub="药店进货与医院配备的品类问法" items={optimizeToB} cols={1} />
                </div>

                {/* 优化词 / 监测词 分界 */}
                <div className="h-full border-l border-dashed border-white/30" />

                <div className="min-h-0">
                    <Panel kind="监测词" side="ToC" sub="消费者侧品牌口碑与竞品对比" items={monitorToC} cols={1} />
                </div>
                <div className="min-h-0">
                    <Panel kind="监测词" side="ToB" sub="渠道侧进货、医保与货源" items={monitorToB} cols={1} />
                </div>
            </div>
        </div>
    );
}
