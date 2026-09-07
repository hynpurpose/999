import React from 'react';

export default function Page_Brands() {
    const brandsData = [
        {
            category: "全球巨头",
            list: [
                { rank: "1", name: "钙尔奇 (Caltrate)", dynamic: "稳居国内钙制剂零售额榜首（在国内拥有百亿级大盘体量）。", advantage: "【传统骨骼健康绝对霸主】背靠赫力昂（原葛兰素史克消费保健品），拥有统治级的医院骨科/妇产科医生推荐背书和线下连锁药房货架占有率，是中老年防骨质疏松的默认首选。" },
                { rank: "2", name: "斯维诗 (Swisse)", dynamic: "国内跨境保健品钙品类销量断层领先（母公司健合集团年营收超百亿）。", advantage: "【年轻化与海淘风向标】凭借“娘娘钙”（柠檬酸钙+D3）成功教育了中国市场。主打温和好吸收，在跨境电商和一二线城市年轻白领、抗初老人群中占据极高心智。" },
                { rank: "3", name: "奥斯特林 (Ostelin)", dynamic: "澳洲药房销量第一（国内母婴海淘头部品牌）。", advantage: "【澳洲专业骨骼营养标杆】专注钙与维生素D的研发，其“恐龙钙”系列在国内母婴海淘圈享有盛誉，是高净值家庭儿童补钙的核心选项之一。" }
            ]
        },
        {
            category: "国内巨头",
            list: [
                { rank: "1", name: "汤臣倍健 (By-health)", dynamic: "VDS整体年营收超90亿元（骨骼健康为核心贡献品类之一）。", advantage: "【全人群终端拦截王】国内VDS龙头。产品线极其丰富（如钙DK等），凭借下沉极深的线下地推网络和药店“驻店营养师”的贴身推销，牢牢把控中国家庭的日常采购大盘。" },
                { rank: "2", name: "哈药 (Hayao)", dynamic: "相关单品年销超10亿元规模（蓝瓶钙为超级大单品）。", advantage: "【国民级下沉市场王者】凭借洗脑级的“蓝瓶的钙，好喝的钙”，在广袤的下沉市场和中老年、儿童群体中拥有不可磨灭的品牌资产，主打基础补充与极致性价比。" },
                { rank: "3", name: "仁和 / 修正 等", dynamic: "电商平价白牌代工销量极高（分散出货，单品体量庞大）。", advantage: "【贴牌代工与电商流量收割者】依托传统老字号药企的商标背书，通过大规模OEM代工，在电商平台主打百元以内的平价多维钙片，收割价格敏感型人群。" }
            ]
        },
        {
            category: "新兴势力",
            list: [
                { rank: "1", name: "WonderLab / 万益蓝", dynamic: "细分赛道破亿元规模（高客单价，复购率极高）。", advantage: "【剂型创新与情绪消费收割机】跨界玩家，将补钙做成高颜值的“夹心软糖”形态。深谙社媒流量与成分党玩法，精准狙击追求“去吃药化”和颜值主义的新锐年轻群体。" },
                { rank: "2", name: "inne / Bio Island", dynamic: "母婴垂直赛道头部销冠（婴童营养品增速极快）。", advantage: "【母婴精细化喂养破局者】绕开传统巨头，专攻“婴童第一口钙”。主打独立条装防腐剂零添加、或者是易于剪开的乳钙软胶囊，在小红书等母婴社区拥有极高的话语权。" }
            ]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start px-8 lg:px-16 pb-6 min-h-0 container mx-auto mt-2 overflow-hidden">
                {/* Centered Title */}
                <h1 className="text-3xl sm:text-[2.2rem] font-bold text-white tracking-widest text-center mb-5 font-['AlimamaShuHeiTi'] shrink-0">
                    钙制剂核心品牌梯队与市场定位
                </h1>

                {/* Table Container */}
                <div className="w-full max-w-[1600px] flex-1 flex flex-col bg-white/[0.03] backdrop-blur-xl border border-[#004CE5]/20 rounded-2xl shadow-[-10px_0_30px_rgba(0,76,229,0.1)] overflow-hidden">
                    {/* Table Body */}
                    <div className="w-full h-full flex flex-col z-0">
                        {brandsData.map((tier, tIdx) => (
                            <div key={tIdx} className={`flex w-full flex-1 ${tIdx !== brandsData.length - 1 ? 'border-b border-white/[0.05]' : ''}`}>
                                {/* Merged First Column (Category) */}
                                <div className="w-[160px] xl:w-[180px] shrink-0 flex items-center justify-center px-4 border-r border-white/5 bg-white/[0.015]">
                                    <div className="font-bold text-blue-300 tracking-widest text-[1.15rem] leading-snug text-center">{tier.category}</div>
                                </div>
                                
                                {/* Right Side: The 5 Brand Rows */}
                                <div className="flex-1 flex flex-col">
                                    {tier.list.map((brand, bIdx) => (
                                        <div key={bIdx} className={`grid grid-cols-[200px_1fr_1.6fr] xl:grid-cols-[240px_1fr_1.8fr] group ${bIdx !== tier.list.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.04] transition-colors w-full flex-1`}>
                                            <div className="py-2 px-3 sm:px-5 flex items-center text-white/90 font-bold text-[0.95rem] lg:text-[1.05rem]">
                                                <span className="text-[#004CE5] mr-2">{brand.rank}.</span> {brand.name}
                                            </div>
                                            <div className="py-2 px-3 sm:px-5 border-l border-white/5 text-zinc-300 leading-snug font-medium flex items-center text-[0.9rem] lg:text-[0.95rem]">
                                                {brand.dynamic}
                                            </div>
                                            <div className="py-2 px-3 sm:px-5 border-l border-white/5 text-blue-100/90 leading-snug flex items-center text-[0.85rem] lg:text-[0.9rem] pr-6">
                                                <div>
                                                    {brand.advantage.split(/(【.*?】)/).map((segment, index) => {
                                                        if (segment.startsWith('【') && segment.endsWith('】')) {
                                                            return <span key={index} className="text-[#004CE5] font-bold">{segment}</span>;
                                                        }
                                                        return segment;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
