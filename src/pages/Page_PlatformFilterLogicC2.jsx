import React from 'react';

export default function Page_PlatformFilterLogicC2() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[10px] shrink-0 pointer-events-none"></div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center px-8 lg:px-16 pt-4 pb-4 z-10 min-h-0 gap-5">

                {/* ── 纯净信息卡片：展示分组、维度、逻辑 ── */}
                <div className="w-full bg-white/[0.02] border border-[#004CE5]/20 backdrop-blur-md rounded-2xl px-8 py-5 flex flex-col gap-4 shadow-lg shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]"></div>
                        <h2 className="text-2xl font-bold text-blue-100 tracking-widest">C组：金钙尔奇命中数据验证</h2>
                    </div>

                    <div className="grid grid-cols-[1.5fr_3fr] gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">验证维度</span>
                            <p className="text-white/90 text-[1.2rem] font-bold tracking-wide mt-1">C 组平台在各 AI 模型的金钙尔奇命中比对</p>
                        </div>
                        <div className="flex flex-col gap-2 border-l border-white/10 pl-8">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">数据分析动作</span>
                            <p className="text-zinc-300 text-[1.15rem] leading-relaxed mt-1">
                                提取 C 组筛选出的高频平台在各大 AI 平台中的金钙尔奇信息曝光命中率。通过跨平台的交叉横评比对，精准验证该批平台在核心竞品相关推导下的极高推荐权重与决策收录价值。
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── 空白图片位：占据剩余几乎所有高度 ── */}
                <div className="w-full flex-1 relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-center group shadow-2xl">
                    <img
                        src="/Add_Charts/platform-filter-logic-c2.png"
                        alt="C组平台表现对比图"
                        className="absolute inset-0 w-full h-full object-contain p-1 z-20"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />

                    {/* Placeholder UI */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                        <div className="w-20 h-20 mb-5 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 text-white/20 transition-all group-hover:bg-[#004CE5]/10 group-hover:text-[#004CE5]/50 group-hover:border-[#004CE5]/30">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-zinc-300 text-[1.3rem] font-bold tracking-widest text-center">
                            C组平台卡萨帝命中对比 数据图占位
                        </span>
                        <span className="text-zinc-500/80 text-[1rem] mt-3 font-mono">
                            文件路径: /Add_Charts/platform-filter-logic-c2.png
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
