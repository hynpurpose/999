import React from 'react';

export default function Page_Zhihu_GeoStrategy() {
    const strategies = [
        {
            id: '01',
            title: '沉淀品牌核心信息',
            direction: '由“内容铺量” ➔ “结构化问答布局”',
            logic: '知乎天然明确的「问与答」框架极度贴合大模型的思维提取与生成逻辑。相比松散的软文，精准针对痛点投喂的结构化格式更容易被直接解析。',
            execution: '围绕产品的卖点与高频阻碍，高强度布局标准问答。将品牌核心主张彻底沉淀为能被 AI 反复调集、稳定输出的「标准答案」。',
            icon: 'message-circle'
        },
        {
            id: '02',
            title: '专业答主赋能增信',
            direction: '垂类前沿创作者 ➔ 品牌可信载体',
            logic: 'AI 引擎的奖励溯源模块对专业度、行业背景呈现出绝对的“信用偏袒”。携带“高质量行业认证”的内容，其调取阈值极低、展示位次极高。',
            execution: '绑定拥有硬核解释力的深水博主产出解析，为品牌构建具有深层壁垒的内容护城河，极大程度上拉高 AI 引用的优先权重。',
            icon: 'award'
        },
        {
            id: '03',
            title: '拉升全域可见概率',
            direction: '以“可信赖源” ➔ 强化 AI 抓取可见度',
            logic: '主流 RAG（检索生成架构）正狂热涌入具备真实互动、强逻辑溯源的高净值社区。高点赞、低水军的稳固语料更容易被封神为“原典”。',
            execution: '维持核心答案的高级活跃态以防被权重降级；同时发散式覆盖海量长尾与差异化意图搜索，全面织造 AI 视野里的检索拦截网。',
            icon: 'trending-up'
        }
    ];

    const getIcon = (id) => {
        const props = { width: "100%", height: "100%", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
        switch(id) {
            case 'message-circle': return <svg {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
            case 'award': return <svg {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
            case 'trending-up': return <svg {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>;
            default: return null;
        }
    };

    return (
        <div className="w-full h-full bg-black relative overflow-hidden font-sans flex flex-col text-white">

            {/* Header Section */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-16 shrink-0 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-widest opacity-95">
                    基于知乎特点的 GEO 优化方案
                </h1>
            </div>

            {/* 3 Pillars Content Grid */}
            <div className="relative z-10 flex-1 w-full px-12 lg:px-16 pb-16 flex flex-col justify-center items-center mt-12">
                
                <div className="w-full max-w-[1500px] grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-10">
                    {strategies.map((item, index) => (
                        <div key={item.id} className="group relative flex flex-col h-full bg-[#0c0c0c]/90 backdrop-blur-3xl border border-zinc-800 rounded-[32px] p-8 xl:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-zinc-500/60">
                            
                            {/* Giant Ghost Number */}
                            <div className="absolute -top-6 -right-4 text-[140px] font-black text-zinc-100 opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700 leading-none">
                                {item.id}
                            </div>

                            {/* Top subtle glow edge */}
                            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon & Title Row */}
                            <div className="relative z-10 flex items-start justify-between mb-8">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_4px_15px_rgba(255,255,255,0.05)_inset] text-zinc-200 shrink-0">
                                    <div className="w-8 h-8">
                                        {getIcon(item.icon)}
                                    </div>
                                </div>
                            </div>

                            {/* Main Setup */}
                            <h3 className="text-[28px] xl:text-[32px] font-black text-white mb-6 relative z-10">
                                {item.title}
                            </h3>

                            {/* Direction Pill */}
                            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/50 w-fit max-w-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0"></span>
                                <span className="text-[17px] xl:text-[18px] text-zinc-200 font-bold tracking-wide truncate">
                                    {item.direction}
                                </span>
                            </div>

                            {/* Rationale Section */}
                            <div className="flex-1 flex flex-col mb-6 relative z-10">
                                <div className="text-[14px] xl:text-[15px] font-black text-zinc-500 tracking-widest mb-2 uppercase">【优化底座逻辑】</div>
                                <p className="text-[19px] xl:text-[20px] text-zinc-400 leading-[1.8] font-medium">
                                    {item.logic}
                                </p>
                            </div>

                            {/* Execution Section */}
                            <div className="relative z-10 bg-[#161616] border border-zinc-800 rounded-2xl p-6 mt-auto">
                                <div className="absolute left-0 top-6 bottom-6 w-1 bg-zinc-500 rounded-r-lg"></div>
                                <div className="flex flex-col">
                                    <h4 className="text-[18px] xl:text-[20px] font-bold text-zinc-200 mb-2 flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                        战术执行层
                                    </h4>
                                    <p className="text-[18px] xl:text-[19px] text-zinc-400 leading-[1.7] font-medium">
                                        {item.execution}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
