import React from 'react';

const basesList = [
    {
        num: '01',
        title: '1. 锚定「先说症状、再找药」的真实问法',
        content: [
            { type: 'paragraph', text: '养胃舒是甲类 OTC，消费者在药店或线上自己就能买。他们很少直接搜品牌，而是先描述症状再反过来找药。所以词条建在这些真实问法上，让 AI 回答时能把养胃舒放进对的那一格。' },
            { type: 'bullet', text: '通用层：品牌推荐、排行榜、效果、性价比、口碑，先占住「养胃药」这个品类入口；' },
            { type: 'bullet', text: '场景层：慢性胃炎调理、熬夜加班、中老年、家庭常备等具体人群与情境。' },
        ],
    },
    {
        num: '02',
        title: '2. ToC 与 ToB 分开建组，各看各的账',
        content: [
            { type: 'paragraph', text: '养胃舒要说服的是两类人：一边是自己掏钱买药的消费者，一边是决定进不进货、主不主推的药店与医院。两边问法完全不同——消费者问「哪个养胃药效果好」「贵不贵」，渠道问「医院采购哪些养胃中成药」「好不好卖」。因此优化词和监测词都拆成 ToC、ToB 两套，投放各走各的信源，效果也分开看，不揉成一个数。' },
        ],
    },
    {
        num: '03',
        title: '3. 严守说明书边界，越界的词宁可不要',
        content: [
            { type: 'paragraph', text: '中成药的合规红线写在说明书上。清洗阶段主动砍掉三类词，宁可词少，也不让 AI 从我们的内容里学到越界表达：' },
            { type: 'bullet', text: '接不住的宽口径词：「胃药排行榜」「胃胀气吃什么药」，答案空间被抑酸西药占据；' },
            { type: 'bullet', text: '承接不了的承诺型问法：「副作用小」「见效快」「能长期吃」，与说明书提示相悖；' },
            { type: 'bullet', text: '不对证的方向：反酸烧心非功能主治，胃寒怕凉对应的是同门的温胃舒。' },
        ],
    },
];

export default function Page_KeywordGroupingBasis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-3 pb-2 relative z-10 shrink-0 text-left">
                <h1 className="text-4xl lg:text-[42px] font-black text-white tracking-widest leading-none">
                    词条分组依据
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-6 relative z-10 flex flex-col lg:flex-row gap-8 items-stretch min-h-0">
                {/* Left Side: 4 cards stacked vertically */}
                <div className="flex flex-col justify-between gap-4 lg:w-[53%] xl:w-[55%] shrink-0 min-h-0">
                    {basesList.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-1 bg-zinc-900/40 border border-white/10 hover:border-[#004CE5]/50 rounded-2xl p-4 xl:py-4 xl:px-6 flex flex-col relative overflow-hidden transition-all duration-300 shadow-xl group cursor-default justify-center min-h-0"
                        >
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#004CE5] opacity-60 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex items-center justify-between mb-2 shrink-0">
                                <h3 className="text-[17px] lg:text-[19px] xl:text-[22px] font-extrabold text-white tracking-wider flex items-center gap-2">
                                    <span className="w-1.5 h-4 bg-[#004CE5] rounded-full"></span>
                                    {item.title}
                                </h3>
                                <span className="text-[#004CE5] font-black text-base xl:text-lg">{item.num}</span>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                {item.content.map((itemContent, cIdx) => {
                                    if (itemContent.type === 'paragraph') {
                                        return (
                                            <p key={cIdx} className="text-white text-[14px] lg:text-[15.5px] xl:text-[18.5px] leading-relaxed text-justify">
                                                {itemContent.text}
                                            </p>
                                        );
                                    } else if (itemContent.type === 'bullet') {
                                        return (
                                            <div key={cIdx} className="flex items-start gap-2 ml-2 text-white text-[14px] lg:text-[15.5px] xl:text-[18.5px] leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-2"></span>
                                                <span className="text-justify">{itemContent.text}</span>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Image Container */}
                <div className="flex-1 relative overflow-hidden flex flex-col items-center justify-center min-h-0">
                    <img
                        src="/Add_Charts/keyword-grouping-basis.png"
                        alt="词条分组依据图"
                        className="absolute inset-0 w-full h-full object-contain p-0 z-20"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>
            </div>
        </div>
    );
}
