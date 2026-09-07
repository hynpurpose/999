import React, { useState } from 'react';

const IMAGE_SRC = '/charts/geo-article-generation-demo3.png';

/**
 * 【排行榜类】示意第 2 页（第五部分「GEO实操要点 · 内容策略」使用）
 * 该部分为 nav: 'legacy'，页眉由 ChapterPage 的 ChapterNav 提供，本页不套 SlideLayout。
 */
export default function Page_ContentStrategyDemo4() {
    const [failed, setFailed] = useState(false);

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-8 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
                    【排行榜类】高质量文章示意
                </h1>
            </div>

            <div className="flex-1 relative z-10 w-full flex flex-col px-8 lg:px-16 pt-4 pb-8 min-h-0">
                <div className="w-full h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
                    <div className="w-full h-[30px] sm:h-[36px] bg-black/40 border-b border-white/10 flex items-center px-4 shrink-0">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
                        </div>
                    </div>
                    <div className="flex-1 min-h-0 bg-white relative">
                        {failed ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0B0D19]/45">
                                <span className="text-[22px] font-bold tracking-widest text-white">请放入截图</span>
                                <span className="text-[15px] font-mono text-white">public{IMAGE_SRC}</span>
                            </div>
                        ) : (
                            <img
                                src={IMAGE_SRC}
                                alt="排行榜类文章示意 2"
                                onError={() => setFailed(true)}
                                className="w-full h-full object-cover object-top"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

Page_ContentStrategyDemo4.hideHeader = true;
