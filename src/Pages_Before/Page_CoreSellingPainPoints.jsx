import React from 'react';

export default function Page_CoreSellingPainPoints() {
    const sellingData = [
        {
            rank: "1",
            feature: "不挑时间，空腹也能喝",
            difference: "因为是柠檬酸钙，不依赖胃酸。不管是还没吃饭还是临睡前，想喝就喝，吸收效果都一样稳。"
        },
        {
            rank: "2",
            feature: "对肚子真的温和",
            difference: "真的不导致便秘。通过去掉卡拉胶和使用有机钙源，解决了传统补钙最让人头疼的“堵心”问题。"
        },
        {
            rank: "3",
            feature: "依从性极高",
            difference: "翻译成白话就是：因为它好喝、方便，你才能真的坚持住。补钙这事，坚持不下来含量再高也没用。"
        },
        {
            rank: "4",
            feature: "品牌硬，安全看得见",
            difference: "迪巧是大药厂牌子，每批货都有 SGS 检测报告。在 2026 年，这种“有证可查”的安全性比什么广告都管用。"
        }
    ];

    const painData = [
        {
            rank: "1",
            pain: "单毫克钙的价格较高",
            challenge: "成本问题：液体钙的包装和物流成本远高于片剂。按钙元素单价计算，它属于高端消费，对于极度敏感价格的家庭有一定压力。"
        },
        {
            rank: "2",
            pain: "营养协同的进阶需求",
            challenge: "成分单一：部分极高端用户在 2026 年追求“钙+D3+K2”的三重组合，迪巧小粉条目前主攻 D3 辅助，尚未集成维生素 K2（引钙入骨）。"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start px-8 lg:px-16 pb-6 min-h-0 container mx-auto mt-4 gap-6 overflow-hidden">
                {/* Table 1: 核心卖点 */}
                <div className="w-full max-w-[1500px] flex-[1.4] flex flex-col overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)]">
                    <div className="px-6 py-4 border-b border-[#004CE5]/20 bg-[#004CE5]/10 shrink-0">
                        <h2 className="text-[1.25rem] font-bold text-blue-200">核心卖点</h2>
                        <p className="text-[0.95rem] text-blue-300/80 mt-1 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]"></div>
                             基于产品本质，建立起难以被竞争对手复制的功能与品牌优势。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[80px_1fr_2.5fr] xl:grid-cols-[100px_1fr_2.5fr] bg-white/[0.02] border-b border-white/10 shrink-0 w-full">
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider text-center">排名</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">核心优势</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">相较于竞争对手的差异化事实</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full flex-1 overflow-hidden flex flex-col">
                        <div className="flex flex-col flex-1">
                            {sellingData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[80px_1fr_2.5fr] xl:grid-cols-[100px_1fr_2.5fr] group ${idx !== sellingData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full flex-1`}>
                                    <div className="py-3 px-4 sm:px-5 flex items-center justify-center shrink-0">
                                        <div className="font-bold text-blue-400 text-[1.4rem] leading-snug whitespace-nowrap">{item.rank}</div>
                                    </div>
                                    <div className="py-3 px-4 sm:px-5 border-l border-white/5 flex items-center text-white/90 font-bold text-[1.1rem]">
                                        {item.feature}
                                    </div>
                                    <div className="py-3 px-4 sm:px-5 border-l border-white/5 flex items-center text-zinc-300 leading-relaxed font-medium text-[1.05rem] pr-6">
                                        {item.difference.split('：').map((segment, i, arr) => {
                                            if (i === 0 && arr.length > 1) {
                                                return <React.Fragment key={i}><span className="font-bold text-blue-300">{segment}：</span></React.Fragment>;
                                            }
                                            return <React.Fragment key={i}>{segment}</React.Fragment>;
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Table 2: 核心痛点 */}
                <div className="w-full max-w-[1500px] flex-1 flex flex-col overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-[1]">
                    <div className="px-6 py-4 border-b border-[#004CE5]/20 bg-[#004CE5]/10 shrink-0">
                        <h2 className="text-[1.25rem] font-bold text-blue-200">核心痛点</h2>
                        <p className="text-[0.95rem] text-blue-300/80 mt-1 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]"></div>
                             面对市场的真实挑战与品牌需要突破的发展瓶颈。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[80px_1.5fr_2.5fr] xl:grid-cols-[100px_1.5fr_2.5fr] bg-white/[0.02] border-b border-white/10 shrink-0 w-full">
                        <div className="py-2.5 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider text-center">排名</div>
                        <div className="py-2.5 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">核心痛点</div>
                        <div className="py-2.5 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">真实存在的挑战描述</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full flex-1 overflow-hidden flex flex-col">
                        <div className="flex flex-col flex-1">
                            {painData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[80px_1.5fr_2.5fr] xl:grid-cols-[100px_1.5fr_2.5fr] group ${idx !== painData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full flex-1`}>
                                    <div className="py-2 px-4 sm:px-5 flex items-center justify-center shrink-0">
                                        <div className="font-bold text-blue-400 text-[1.4rem] leading-snug whitespace-nowrap">{item.rank}</div>
                                    </div>
                                    <div className="py-2 px-4 sm:px-5 border-l border-white/5 flex items-center text-[#ff6b6b]/90 font-bold text-[1.12rem]">
                                        {item.pain}
                                    </div>
                                    <div className="py-2 px-4 sm:px-5 border-l border-white/5 flex items-center text-zinc-300 leading-snug font-medium text-[1.05rem] pr-6">
                                        {item.challenge.split(/：|:/).map((segment, i, arr) => {
                                            if (i === 0 && arr.length > 1) {
                                                return <React.Fragment key={i}><span className="font-bold text-blue-900 bg-blue-200 px-2 py-0.5 rounded mr-2 text-[0.9rem] flex-shrink-0">{segment}</span></React.Fragment>;
                                            }
                                            return <div key={i}>{segment}</div>;
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
