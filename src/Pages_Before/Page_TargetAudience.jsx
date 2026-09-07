import React from 'react';
import { ShieldCheck, TrendingUp, Heart, Calendar, Coffee, Droplet } from 'lucide-react';

export default function Page_TargetAudience() {
    const motives = [
        { title: "中老年骨质流失防御", desc: "应对绝经后女性及老年群体高发的严重骨质疏松与关节疼痛。核心动机是维持行动能力，极度恐惧因骨脆性增加而导致的致命骨折。", icon: ShieldCheck },
        { title: "婴童青少年发育焦虑", desc: "害怕孩子长不高或出牙晚。此类动机伴随极强的“成长期不可逆”压迫感，家长对促高、促发育的科学配方有着极高的支付意愿。", icon: TrendingUp },
        { title: "孕产期母婴双向干预", desc: "孕妇面临胎儿骨骼发育的极强抽吸效应，常出现抽筋骨盆痛。动机是绝对的生理性止痛与保障胎儿正常发育。", icon: Heart },
    ];

    const scenarios = [
        { title: "每日固定打卡送服", desc: "发生在家中餐桌或床头，搭配温水或牛奶一口吞服，对产品的长期依从性（能不能坚持每天吃）要求极高。", icon: Calendar },
        { title: "随餐饮食同服", desc: "特定剂型限制。如许多传统无机钙必须依赖胃酸才能分解，被强制设定在饭后服用。常放在餐桌上作为附带动作。", icon: Coffee },
        { title: "婴幼儿辅食诱导喂养", desc: "针对缺乏咀嚼能力的婴幼儿，需滴入嘴里或混入牛奶米粉中。此场景对产品的溶解度、腥异味要求极其苛刻。", icon: Droplet },
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start px-8 lg:px-16 pb-8 min-h-0 container mx-auto mt-2 overflow-hidden">
                {/* Centered Title */}
                <h1 className="text-3xl sm:text-[2.2rem] font-bold text-white tracking-widest text-center mb-5 font-['AlimamaShuHeiTi'] shrink-0">
                    口服补钙产品卖给谁？
                </h1>

                <div className="w-full max-w-[1700px] flex-1 flex items-center justify-between relative mt-8">

                    {/* Left Items (Motives) */}
                    <div className="w-[34%] flex flex-col justify-center gap-6 z-20 h-full pb-16 pt-2 text-right">
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
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[280px] flex items-center justify-center pointer-events-none z-10 mt-2">
                        {/* Left Circle */}
                        <div className="absolute left-4 w-60 h-60 rounded-full bg-[#004CE5]/10 border border-[#004CE5]/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,76,229,0.1)] mix-blend-screen -mr-6">
                            <span className="text-3xl font-bold tracking-widest text-blue-100 -ml-12">消费动机</span>
                        </div>
                        {/* Right Circle */}
                        <div className="absolute right-4 w-60 h-60 rounded-full bg-[#004CE5]/10 border border-[#004CE5]/20 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,76,229,0.1)] mix-blend-screen -ml-6">
                            <span className="text-3xl font-bold tracking-widest text-blue-100 ml-12">场景画像</span>
                        </div>

                        {/* Center intersection styling highlight */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-48 bg-[#004CE5]/5 blur-2xl rounded-full mix-blend-plus-lighter"></div>
                    </div>

                    {/* Right Items (Scenarios) */}
                    <div className="w-[34%] flex flex-col justify-center gap-6 z-20 h-full pb-16 pt-2 text-left">
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
