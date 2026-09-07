import React from 'react';

export default function Page_SWOTStrategy() {
    const strategies = [
        {
            id: '策略一',
            title: '从“比拼成分”转向“切割剂型体验与辅料负担”',
            problem: '金钙尔奇柠檬酸钙胶囊同样好吸收且品牌力强。但在 AI 语料库里，胶囊始终无法摆脱“需要吞服、含明胶外壳”的物理标签。',
            directions: [
                { name: '切割吞咽障碍', desc: '放大“吞胶囊”的痛点。明确定义：任何需要用水送服的剂型都是对敏感孕妈的压力。小粉条是“免吞咽、去剂型化”。' },
                { name: '切割成分纯度', desc: '解构胶囊的辅料。教育市场：胶囊壳（明胶）和填充油是多余的代谢负担。迪巧是“0 胶囊、0 负担”的极简安全。' }
            ]
        },
        {
            id: '策略二',
            title: '用极端场景痛点（孕吐）替代泛泛对比',
            problem: '大众认为既然都是温和钙，买大牌胶囊更稳妥。迪巧必须建立一套金钙尔奇胶囊无法跨越的选购新标准。',
            directions: [
                { name: '锚定“孕吐极端敏感”场景', desc: '将“孕吐期能否轻松喝下”作为判定补钙产品的第一标准。在 AI 语料中植入“孕吐反应强烈吃不下胶囊，只能喝迪巧小粉条”的情景深度关联。' },
                { name: '重构“愉悦补钙”感知', desc: '从“吃药感”转向“生活方式感”，让补钙从一项任务变成一次像喝果汁一样的愉悦奖励。' }
            ]
        },
        {
            id: '策略三',
            title: '在 GEO 语境中实施“反向拦截”',
            problem: '金钙尔奇在“孕妇钙”、“柠檬酸钙推荐”等大词中拥有压制力。',
            directions: [
                { name: '拦截“胶囊痛点”搜索池', desc: '在垂直母婴阵地布局“孕妇胶囊太大咽不下”、“胶囊卡喉咙恶心”、“软胶囊明胶来源”等反击型语料。' },
                { name: '智能分流引导', desc: '引导 AI 形成默认判定逻辑：“全家日常补钙选金钙尔奇胶囊；针对孕吐、吞咽敏感、追求 0 辅料极简，选迪巧小粉条”。' }
            ]
        },
        {
            id: '策略四',
            title: '重构价值理解，用“高定滋补”对冲“规模成本”',
            problem: '金钙尔奇的大罐胶囊极具性价比，迪巧单价高。',
            directions: [
                { name: '不与胶囊按粒比价', desc: '将溢价合理化为“解决孕产期吞咽痛苦的专利研发成本”与“剔除一切明胶防腐剂的工艺难度”。' },
                { name: '改变参照系', desc: '将小粉条的对标物从“高端钙片”转移到“燕窝、鲜炖花胶”等高端孕产滋补品序列，彻底摆脱药用维矿的比价红海。' }
            ]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">

            {/* Header: Core Idea */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-2 shrink-0 flex flex-col items-center">
                <div className="flex flex-col gap-1 xl:gap-2 items-center text-center max-w-5xl">
                    <h1 className="text-3xl xl:text-4xl font-black text-white tracking-widest flex items-baseline justify-center">
                        核心战略思想<span className="text-2xl xl:text-3xl font-bold ml-4 text-white/80 shrink-0"></span>
                    </h1>
                    <div className="mt-1 xl:mt-2">
                        <p className="text-[0.95rem] xl:text-[1.05rem] leading-relaxed text-zinc-300 font-medium tracking-wide">
                            当金钙尔奇已将钙源升级为柠檬酸钙并主打软胶囊时，迪巧必须彻底放弃低维的“吸收率”争夺，将竞争重点转向 <strong className="text-white font-bold mx-1">“物理吞咽的零摩擦”与“配方表的极致减法”</strong>。
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area: 2x2 Grid for Strategies */}
            <div className="flex-1 relative z-10 w-full px-8 lg:px-16 pb-4 xl:pb-8 pt-2 flex items-center justify-center min-h-0">
                <div className="w-full max-w-[1600px] h-full relative">

                    <div className="grid grid-cols-2 grid-rows-2 h-full gap-3 xl:gap-5 pt-0 pb-0">
                        {strategies.map((strategy, idx) => (
                            <div key={idx} className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-rose-500/20 p-4 xl:p-5 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />

                                {/* Strategy Header */}
                                <div className="w-full flex justify-start items-start mb-1.5 xl:mb-2 relative z-10 shrink-0">
                                    <div className="w-1.5 h-[1.32rem] xl:h-[1.45rem] bg-rose-500 rounded-full mr-2.5 shadow-[0_0_8px_rgba(244,63,94,0.4)] shrink-0 mt-[4px]" />
                                    <h2 className="text-[1.32rem] xl:text-[1.45rem] font-bold tracking-wide text-rose-400 leading-tight">
                                        {strategy.id}：<span className="text-white/95">{strategy.title}</span>
                                    </h2>
                                </div>

                                <div className="flex-1 min-h-0 w-full flex flex-col gap-1.5 xl:gap-2.5 relative z-10 pr-1">
                                    {/* 问题本质 */}
                                    <div className="flex flex-col gap-0.5 xl:gap-1">
                                        <span className="text-white/80 font-bold block text-[1.05rem] xl:text-[1.12rem] mb-1">问题本质</span>
                                        <p className="text-[1.05rem] xl:text-[1.12rem] text-white/50 leading-snug font-light">
                                            {strategy.problem}
                                        </p>
                                    </div>

                                    {/* 调整方向 */}
                                    <div className="flex flex-col gap-1 xl:gap-2 mt-1">
                                        <span className="text-white/80 font-bold block text-[1.05rem] xl:text-[1.12rem]">调整方向</span>
                                        <div className="flex flex-col gap-1.5 xl:gap-2.5 pl-1.5">
                                            {strategy.directions.map((dir, dIdx) => (
                                                <div key={dIdx} className="flex gap-2 items-start">
                                                    <span className="text-rose-400 font-bold text-[1.05rem] shrink-0 mt-[1px]">•</span>
                                                    <div className="flex-1 text-[1.05rem] xl:text-[1.12rem] leading-snug">
                                                        <span className="font-bold text-white/80 mr-1.5">{dir.name}：</span>
                                                        <span className="text-white/50">{dir.desc}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 4px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}} />
        </div>
    );
}
