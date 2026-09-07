import React from 'react';

export default function Page_SWOTAnalysis() {
    const swotData = {
        S: [
            { id: 'S1', title: '钙源代际升级带来的竞争力（高）', content: '已升级为有机柠檬酸钙，成功洗脱传统碳酸钙带来的“胀气、便秘”历史标签。' },
            { id: 'S2', title: '黄金营养矩阵的背书（高）', content: '钙+VD3+VK2（引钙入骨）三效合一，符合大众对“全面补钙”的权威认知。' },
            { id: 'S3', title: '统治级的医疗与全渠道渗透（高）', content: '百年巨头地位带来的医生/药师高推荐率，AI 语料库中品牌提及率具备压倒性优势。' },
        ],
        W: [
            { id: 'W1', title: '胶囊剂型带来的“物理吞咽障碍”（高）', content: '虽然胶囊宣称“易吞服”，但本质仍需水送服。对于孕吐严重、喉咙敏感的孕妈，大颗胶囊极易引发恶心感和心理压力。' },
            { id: 'W2', title: '胶囊外壳及填充物的辅料负担（中/高）', content: '制作胶囊不可避免涉及明胶、甘油甚至着色剂（如二氧化钛）。在极致追求“0添加”的母婴圈层中，成分表不够纯净。' },
            { id: 'W3', title: '普适化品牌的“高定感”缺失（中）', content: '作为全家品牌下的延伸线，缺乏针对高敏人群、高净值女性的专属定制感。' },
        ],
        T: [
            { id: 'T1', title: '垂直赛道“免吞咽直饮钙”的降维打击（高）', content: '迪巧小粉条以“撕开即饮”的去剂型化体验，正在解构“吞胶囊”这一传统行为。' },
            { id: 'T2', title: '母婴“成分党”对隐形添加的审视（中/高）', content: '社媒评测开始关注胶囊壳的明胶来源及辅料，对巨头形成的纯净度挑战日益严峻。' },
        ],
        O: [
            { id: 'O1', title: '液体钙市场的整体教育红利（高）', content: '巨头主推液体钙，加速了片剂的淘汰。' },
        ]
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">


            {/* Header */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-4 sm:pt-6 shrink-0">
                <div className="flex items-center justify-center gap-3">
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-widest flex items-baseline">
                        SWOT<span className="text-2xl sm:text-3xl font-bold ml-3 text-white/70">金钙尔奇（孕妇液体钙软胶囊）分析</span>
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
