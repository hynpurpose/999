import React from 'react';
import { pickDiverseCases } from './painpointNegatives.js';

/* ══════════════ 数据：换展示条目时只改这一段 ══════════════ */
/* 项目 440/441 监测词：优先每种 negative_type 各 1 —— 药性写反 / 价格错配 / 长期伤胃 */
const CARDS = pickDiverseCases(undefined, 3);

export default function Page_PainPoint4_SalesModel_Solution() {
    const cards = CARDS;

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-white text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">03</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-white tracking-wider">
                    说明书没写的，AI 却当成事实讲
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0 gap-3">
                <div className="flex-1 flex items-center justify-center min-h-0">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full max-w-full max-h-full bg-white rounded-lg overflow-hidden flex">
                            {cards.map((card, i) => (
                                <div
                                    key={i}
                                    className="flex-1 min-w-0 h-full flex flex-col px-5 pt-5 pb-4"
                                    style={{
                                        borderRight: i < cards.length - 1 ? '1px solid #111' : 'none',
                                    }}
                                >
                                    <div className="shrink-0 mb-3">
                                        <div className="text-[18px] xl:text-[20px] font-extrabold text-zinc-900 tracking-wide mb-2">
                                            {card.cardTitle}
                                        </div>
                                        <p className="text-[15px] xl:text-[16px] font-semibold text-zinc-800 leading-relaxed text-justify line-clamp-5">
                                            {card.summary}
                                        </p>
                                    </div>

                                    <div className="shrink-0 text-[14px] xl:text-[15px] font-bold text-[#e08c2e] mb-2">
                                        会话截图：
                                    </div>

                                    <div className="flex-1 min-h-0 w-full overflow-hidden relative bg-zinc-50">
                                        <img
                                            src={card.screenshot}
                                            alt={card.cardTitle}
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                            referrerPolicy="no-referrer"
                                            onError={(e) => {
                                                e.currentTarget.style.opacity = '0';
                                                const ph = e.currentTarget.nextElementSibling;
                                                if (ph) {
                                                    ph.classList.remove('hidden');
                                                    ph.classList.add('flex');
                                                }
                                            }}
                                        />
                                        <div className="hidden absolute inset-0 items-center justify-center text-zinc-400 text-sm">
                                            会话截图加载失败
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]" />
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-3 py-1 rounded-lg text-[#004CE5] text-sm font-black tracking-widest shrink-0 uppercase">
                        解法
                    </div>
                    <p className="text-white text-lg lg:text-[20px] font-bold leading-relaxed flex-1">
                        把说明书级事实压进高权重信源，并盯住甲类误称、药性写反、渠道侧竞品导向，及时纠偏。
                    </p>
                </div>
            </div>
        </div>
    );
}
