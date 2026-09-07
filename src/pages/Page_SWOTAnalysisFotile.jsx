import React from 'react';

export default function Page_SWOTAnalysisFotile() {
    const swotData = {
        S: [
            { id: 'S1', title: '绝对差异化的“免吞咽直饮体验”（高）', content: '面对金钙尔奇的软胶囊，迪巧实现了“0吞咽阻力、0生理抗拒”。撕开即饮的酸甜感，彻底终结了孕期吞服胶囊的焦虑。' },
            { id: 'S2', title: '医疗级“0添加”的配方净度（高）', content: '0明胶、0甘油、0防腐剂。不只是钙源纯，而是整机配方极简，完美切中高端母婴人群对“纯粹无负担”的终极追求。' },
            { id: 'S3', title: '极高的 AI 推荐倾向与 0 负面口碑（高）', content: '在“孕吐期好吞、不反胃”等细分痛点词下，AI 语料呈现压倒性的技术统治位。' },
        ],
        W: [
            { id: 'W1', title: '巨头补齐成分短板后的“同质化”竞争压力（高）', content: '当金钙尔奇也采用柠檬酸钙时，迪巧必须在剂型深度上做更深层的“直饮 vs 胶囊”切割。' },
            { id: 'W2', title: '泛人群搜索语境下的可见度弱势（中/高）', content: '在大众综合榜单中，AI 优先抓取基建语料庞大的金钙尔奇，迪巧面临搜索长尾拦截的挑战。' },
        ],
        T: [
            { id: 'T1', title: '巨头“多维营养”的认知绑架（高）', content: '金钙尔奇通过强调 K2 等复合成分，可能让消费者忽略剂型上的吞咽痛苦。' },
        ],
        O: [
            { id: 'O1', title: '孕产女性对“孕期尊严与舒适度”的追求（高）', content: '现代孕妈拒绝一切痛苦体感，小粉条的悦己属性与高端精细化风口完美共振。' },
        ]
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">


            {/* Header */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-4 sm:pt-6 shrink-0">
                <div className="flex items-center justify-center gap-3">
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-widest flex items-baseline">
                        SWOT<span className="text-2xl sm:text-3xl font-bold ml-3 text-white/70">迪巧小粉条分析</span>
                    </h1>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 w-full px-8 lg:px-16 pb-4 lg:pb-6 pt-0 mt-[10px] flex items-center justify-center min-h-0">

                <div className="w-full max-w-[1500px] h-full relative">

                    {/* SVG Cross Lines */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    </div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-2 grid-rows-2 h-full gap-5 sm:gap-6 pt-0 pb-0">

                        {/* Top Left: Strengths */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-rose-500/20 p-4 lg:p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-start items-center mb-3 relative z-10 shrink-0">
                                <h2 className="text-[1.7rem] lg:text-[1.8rem] font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-rose-400">优势</span>
                                    <span className="text-[1.35rem] text-white/90">（Strengths）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-4 relative z-10 w-full">
                                {swotData.S.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-rose-400 text-[1.05rem] lg:text-[1.15rem] font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[1.05rem] lg:text-[1.15rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.95rem] lg:text-[1.05rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Right: Weaknesses */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-white/5 p-4 lg:p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-end items-center mb-3 relative z-10 shrink-0">
                                <h2 className="text-[1.7rem] lg:text-[1.8rem] font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-white/90">劣势</span>
                                    <span className="text-[1.35rem] text-white/70">（Weaknesses）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-4 relative z-10 w-full">
                                {swotData.W.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-white/70 text-[1.05rem] lg:text-[1.15rem] font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[1.05rem] lg:text-[1.15rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.95rem] lg:text-[1.05rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Left: Threats */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-white/5 p-4 lg:p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-start items-center mb-3 relative z-10 shrink-0">
                                <h2 className="text-[1.7rem] lg:text-[1.8rem] font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-white/90">威胁</span>
                                    <span className="text-[1.35rem] text-white/70">（Threats）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-4 relative z-10 w-full">
                                {swotData.T.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-white/70 text-[1.05rem] lg:text-[1.15rem] font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[1.05rem] lg:text-[1.15rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.95rem] lg:text-[1.05rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Right: Opportunities */}
                        <div className="relative flex flex-col items-start bg-white/[0.015] rounded-2xl border border-rose-500/20 p-4 lg:p-5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tl from-rose-500/5 to-transparent pointer-events-none" />
                            <div className="w-full flex justify-end items-center mb-3 relative z-10 shrink-0">
                                <h2 className="text-[1.7rem] lg:text-[1.8rem] font-bold tracking-wider flex items-center gap-2">
                                    <span className="text-rose-400">机遇</span>
                                    <span className="text-[1.35rem] text-white/90">（Opportunities）</span>
                                </h2>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-4 relative z-10 w-full">
                                {swotData.O.map(item => (
                                    <div key={item.id} className="flex gap-3 leading-relaxed">
                                        <span className="text-rose-400 text-[1.05rem] lg:text-[1.15rem] font-bold shrink-0 mt-0.5">• {item.id}</span>
                                        <div className="flex flex-col gap-1">
                                            <span className="font-bold text-[1.05rem] lg:text-[1.15rem] text-white/95">{item.title}</span>
                                            <p className="text-[0.95rem] lg:text-[1.05rem] text-white/60">{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Center Medal */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] z-20 flex items-center justify-center pointer-events-none drop-shadow-2xl">
                        {/* Outer Ring */}
                        <div className="absolute inset-0 rounded-full bg-black/60 backdrop-blur-xl border-4 border-[#222] overflow-hidden">
                            {/* Colorful Segments matching reference */}
                            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-rose-600" />
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#555]" />
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#666]" />
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-rose-500" />
                        </div>
                        {/* Inner Ring Data Text */}
                        <div className="absolute inset-[15px] rounded-full bg-white flex items-center justify-center p-4">
                            <div className="grid grid-cols-2 grid-rows-2 w-full h-full text-center relative gap-1">
                                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black/10 -translate-x-1/2" />
                                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black/10 -translate-y-1/2" />

                                <div className="flex items-center justify-center text-4xl font-black text-rose-600 tracking-tighter">S</div>
                                <div className="flex items-center justify-center text-4xl font-black text-[#666] tracking-tighter">W</div>
                                <div className="flex items-center justify-center text-4xl font-black text-[#555] tracking-tighter">T</div>
                                <div className="flex items-center justify-center text-4xl font-black text-rose-600 tracking-tighter">O</div>
                            </div>
                        </div>
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
