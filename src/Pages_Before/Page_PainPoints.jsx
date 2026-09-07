import React from 'react';
import { Snowflake, Box, Zap, Wrench, ShieldAlert, PackageX } from 'lucide-react';

export default function Page_PainPoints() {
    const motives = [
        { title: "保鲜技术能力", desc: "通过精准控温、湿度调节和多循环风冷系统，让蔬菜水果更长时间保持新鲜，减少食材变质。", icon: Snowflake },
        { title: "大容量与合理分区", desc: "提供更大的冷藏和冷冻空间，并通过多层抽屉和可调层架提高储存效率。", icon: Box },
        { title: "低噪音与节能运行", desc: "采用变频压缩机和高能效设计，降低运行噪音和长期电力消耗。", icon: Zap },
    ];

    const scenarios = [
        { title: "品质可靠性与维修成本陷阱", desc: "针对现代高端机型中复杂电子元件（如大屏、自动补货系统）故障频发，且保修期过后零件费用畸高，导致用户陷入“修不如换”的困境。", icon: Wrench },
        { title: "食品健康安全与细菌滋生（李斯特菌）", desc: "针对冰箱并非“保险箱”的现实，用户极度焦虑嗜冷菌（如李斯特菌）在冷藏甚至冷冻环境下的生长，以及生熟混放导致的交叉感染风险。", icon: ShieldAlert },
        { title: "嵌入适配困难与“伪平嵌”翻车", desc: "针对宣传中“完美嵌入”与实际安装不符的矛盾，包括散热空间预留不足、机身过厚凸出橱柜、以及门体开启受限等严重影响美观与使用的细节。", icon: PackageX },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex items-center justify-center px-8 lg:px-16 pb-8 min-h-0 container mx-auto">
                <div className="w-full max-w-[1700px] h-full flex items-center justify-between relative mt-4">

                    {/* Left Items (Motives) */}
                    <div className="w-[34%] flex flex-col justify-center gap-6 z-20 h-full py-4 text-right">
                        {motives.map((motive, idx) => {
                            const marginClass = [0, 2].includes(idx) ? 'mr-0' : 'mr-12';
                            return (
                                <div key={idx} className={`flex flex-col items-end ${marginClass}`}>
                                    <div className="flex items-center gap-4 mb-2">
                                        <h4 className="text-2xl font-bold text-white tracking-wide">{motive.title}</h4>
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center text-zinc-400 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                                            <motive.icon size={28} />
                                        </div>
                                    </div>
                                    <p className="text-lg text-zinc-300 leading-relaxed pr-18 max-w-[34rem]">{motive.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Center Overlapping Circles */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] flex items-center justify-center pointer-events-none z-10 mt-6 mt-12">
                        {/* Left Circle: Low saturation Yellow */}
                        <div className="absolute left-4 w-60 h-60 rounded-full bg-[#004CE5]/10 border border-[#004CE5]/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,76,229,0.1)] mix-blend-screen -mr-6">
                            <span className="text-3xl font-bold tracking-widest text-blue-100/90 -ml-12">核心卖点</span>
       </div>
                        {/* Right Circle: Low saturation Red */}
                        <div className="absolute right-4 w-60 h-60 rounded-full bg-[#004CE5]/10 border border-[#004CE5]/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,76,229,0.1)] mix-blend-screen -ml-6">
                            <span className="text-3xl font-bold tracking-widest text-blue-100/90 ml-12">核心痛点</span>
       </div>

                        {/* Center intersection styling highlight */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 bg-white/5 blur-2xl rounded-full mix-blend-plus-lighter"></div>
                    </div>

                    {/* Right Items (Scenarios) */}
                    <div className="w-[34%] flex flex-col justify-center gap-6 z-20 h-full py-4 text-left">
                        {scenarios.map((scenario, idx) => {
                            const marginClass = [0, 2].includes(idx) ? 'ml-0' : 'ml-12';
                            return (
                                <div key={idx} className={`flex flex-col items-start ${marginClass}`}>
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center text-zinc-400 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                                            <scenario.icon size={28} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white tracking-wide">{scenario.title}</h4>
                                    </div>
                                    <p className="text-lg text-zinc-300 leading-relaxed pl-18 max-w-[34rem]">{scenario.desc}</p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>


        </div>
    );
}
