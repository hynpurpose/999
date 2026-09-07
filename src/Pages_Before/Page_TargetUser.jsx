import React from 'react';

export default function Page_TargetUser() {
    const motiveData = [
        {
            weight: "1",
            motive: "怕吞药、怕胃难受",
            subtext: "“很多女性（尤其是孕妈）吞不下大药片，或者吃完碳酸钙会便秘、打嗝。”",
            trigger: "这款液体钙不刺激胃、不反胃，解决了最头疼的副作用问题。"
        },
        {
            weight: "2",
            motive: "给孩子和自己一份安心",
            subtext: "“备孕或怀孕的人对安全极度敏感，不能吃有风险的东西。”",
            trigger: "迪巧有“蓝帽子”保健食品认证，加上无添加干净配方，就算天天喝也没有坏处。"
        },
        {
            weight: "3",
            motive: "出门在外的便利性",
            subtext: "“职场女性需要经常出差或在办公室随时补钙。”",
            trigger: "小粉条撕开即饮，不需要找水，也不用像拿大药瓶那样觉得麻烦和尴尬。"
        }
    ];

    const scenarioData = [
        {
            rank: "1",
            category: "孕期女性的日常补给",
            description: "主要针对孕吐厉害、吃不下固态钙片的孕妈。在吃不下饭的时候，喝一根酸甜的液体钙，既补了营养又不会引起呕吐。"
        },
        {
            rank: "2",
            category: "职场女性的办公桌零食",
            description: "放在电脑旁，下午茶时间顺手喝一根。像喝果冻一样简单，缓解因为长期久坐、不晒太阳带来的缺钙焦虑。"
        },
        {
            rank: "3",
            category: "差旅/户外出行补能",
            description: "针对不稳定的生活节奏：独立条装可随手放在包包内袋。即便在飞机上、会议间隙，也能在不经意间快速完成补钙。"
        },
        {
            rank: "4",
            category: "产后妈妈的体能恢复",
            description: "刚生完孩子肠胃比较弱，但哺乳期又极度缺钙。选择这种不引起便秘的有机钙，能减少身体负担，同时给母乳补充钙质。"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start px-8 lg:px-16 pb-6 min-h-0 container mx-auto mt-4 gap-6 overflow-hidden">
                {/* Table 1: 购买动机 */}
                <div className="w-full max-w-[1500px] h-fit flex flex-col overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-[1]">
                    <div className="px-6 py-4 border-b border-[#004CE5]/20 bg-[#004CE5]/10">
                        <h2 className="text-[1.25rem] font-bold text-blue-200">一、购买动机</h2>
                        <p className="text-[0.95rem] text-blue-300/80 mt-1 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]"></div>
                             核心洞察：解决传统补钙痛点，提供安全、便捷与温和护胃的补钙体验。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[80px_1.2fr_1.8fr_1fr] xl:grid-cols-[100px_1.2fr_1.8fr_1fr] bg-white/[0.02] border-b border-white/10 shrink-0 w-full">
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider text-center">排名</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">动机名称</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">用户痛点</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">核心驱动点</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full z-0 overflow-hidden">
                        <div className="flex flex-col">
                            {motiveData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[80px_1.2fr_1.8fr_1fr] xl:grid-cols-[100px_1.2fr_1.8fr_1fr] group ${idx !== motiveData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full`}>
                                    <div className="py-4 px-4 sm:px-5 flex items-center justify-center shrink-0">
                                        <div className="font-bold text-blue-400 text-[1.4rem] leading-snug whitespace-nowrap">{item.weight}</div>
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center text-white/90 font-bold text-[1.1rem]">
                                        {item.motive}
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 text-blue-200/90 leading-relaxed italic text-[1rem]">
                                        {item.subtext}
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center text-zinc-300 leading-relaxed font-medium text-[1rem]">
                                        {item.trigger}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Table 2: 使用场景画像 */}
                <div className="w-full max-w-[1500px] flex-1 flex flex-col overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)] shrink-[1]">
                    <div className="px-6 py-4 border-b border-[#004CE5]/20 bg-[#004CE5]/10 shrink-0">
                        <h2 className="text-[1.25rem] font-bold text-blue-200">二、使用场景画像</h2>
                        <p className="text-[0.95rem] text-blue-300/80 mt-1 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#004CE5]"></div>
                             核心触达：从痛点出发，用特定高频场景展现产品的剂型与便捷优势。
                        </p>
                    </div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[80px_200px_1fr] xl:grid-cols-[100px_250px_1fr] bg-white/[0.02] border-b border-white/10 shrink-0 w-full">
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider text-center">排名</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">场景名称</div>
                        <div className="py-3 px-4 sm:px-5 text-[0.95rem] lg:text-[1.05rem] font-bold text-blue-200/80 tracking-wider">场景描述</div>
                    </div>
                    {/* Table Body */}
                    <div className="w-full flex-1 overflow-hidden flex flex-col">
                        <div className="flex flex-col flex-1">
                            {scenarioData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[80px_200px_1fr] xl:grid-cols-[100px_250px_1fr] group ${idx !== scenarioData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full flex-1`}>
                                    <div className="py-4 px-4 sm:px-5 flex items-center justify-center shrink-0">
                                        <div className="font-bold text-blue-400 text-[1.4rem] leading-snug whitespace-nowrap">{item.rank}</div>
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center text-blue-200/90 font-bold text-[1.1rem]">
                                        {item.category}
                                    </div>
                                    <div className="py-4 px-4 sm:px-5 border-l border-white/5 flex items-center text-zinc-300 leading-relaxed font-medium text-[1.05rem]">
                                        {item.description}
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
