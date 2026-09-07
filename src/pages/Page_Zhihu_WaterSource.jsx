import React from 'react';

export default function Page_Zhihu_WaterSource() {
    const strategies = [
        {
            id: '01',
            title: '沉淀核心信息',
            direction: '内容铺量 ➔ 问答重构',
            logic: '知乎明确的「问答」框架极贴合大模型提取逻辑，容易被深度解析。',
            execution: '围绕核心卖点与阻碍强布局标准问答，将主权内容沉淀为稳定答案。'
        },
        {
            id: '02',
            title: '专业答主增信',
            direction: '垂类极客 ➔ 可信基建',
            logic: 'AI 奖励机制严重“偏袒”专业背景，携带“认证”的语料调取高。',
            execution: '绑定硬核专业博主产出深层解析，构建品牌底层护城河与信用。'
        },
        {
            id: '03',
            title: '拉升响应概率',
            direction: '可信水源 ➔ 检索拦截',
            logic: '检索生成(RAG)极度依赖高净值社区，纯净语料易被封为权威原典。',
            execution: '维持关键内容的高活跃态防降权；织造泛词条拦截网，拉升可见度。'
        }
    ];

    return (
        <div className="w-full h-full bg-black relative overflow-hidden font-sans flex flex-col text-white">

            {/* Header Section */}
            <div className="relative z-20 w-full px-8 lg:px-12 pt-5 xl:pt-6 pb-2 shrink-0 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[2rem] xl:text-[2.2rem] font-black text-white tracking-widest opacity-95">
                    知乎在 GEO 中的「水源」地位与优化策略
                </h1>
            </div>

            <div className="relative z-10 flex-1 w-full px-8 lg:px-12 pb-6 flex flex-col items-center min-h-0 overflow-hidden">
                <div className="w-full max-w-[1550px] flex flex-col gap-4 xl:gap-5 my-auto">
                    
                    {/* Top Row: The 2 Pillars (Water source context) */}
                    <div className="w-full flex gap-4 xl:gap-5 relative -top-[12px]">
                        {/* Pillar 1 */}
                        <div className="flex-1 group flex flex-col bg-[#0c0c0c]/80 backdrop-blur-3xl border border-zinc-800 rounded-[20px] p-4 xl:p-5 relative overflow-hidden hover:border-zinc-500/50 transition-colors">
                            <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 mb-3 shrink-0 shadow-[0_4px_15px_rgba(255,255,255,0.05)_inset]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3 className="text-[1.5rem] xl:text-[1.7rem] font-black text-white mb-2 tracking-wide">专家网络壁垒</h3>
                            <p className="text-[1rem] xl:text-[1.12rem] leading-snug text-zinc-400 mb-3 flex-1">
                                指平台上通过身份认证、专业勋章及高赞严选出的<span className="text-zinc-200 font-medium">垂直领域创作者群体</span>。
                            </p>
                            <div className="bg-[#161616] border border-zinc-800 rounded-xl p-3.5 shrink-0">
                                <strong className="text-rose-400 block mb-1 text-[1rem] xl:text-[1.05rem]">【算法抓取逻辑】</strong>
                                <p className="text-[1rem] xl:text-[1.12rem] text-zinc-300 leading-snug">
                                    大模型倾向于无条件抓取认证领域知识，其底层可信度呈指数级上升。
                                </p>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="flex-1 group flex flex-col bg-[#0c0c0c]/80 backdrop-blur-3xl border border-zinc-800 rounded-[20px] p-5 xl:p-6 relative overflow-hidden hover:border-zinc-500/50 transition-colors">
                            <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 mb-3 shrink-0 shadow-[0_4px_15px_rgba(255,255,255,0.05)_inset]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                            </div>
                            <h3 className="text-[1.5rem] xl:text-[1.7rem] font-black text-white mb-2 tracking-wide">高厚度可信内容</h3>
                            <p className="text-[1rem] xl:text-[1.12rem] leading-snug text-zinc-400 mb-3 flex-1">
                                以独立问答为骨架，沉浸构建具备<span className="text-zinc-200 font-medium">结构化、可长序追溯</span>的优质图文语料池。
                            </p>
                            <div className="bg-[#161616] border border-zinc-800 rounded-xl p-3.5 shrink-0">
                                <strong className="text-rose-400 block mb-1 text-[1rem] xl:text-[1.05rem]">【算法权重指标】</strong>
                                <p className="text-[1rem] xl:text-[1.12rem] text-zinc-300 leading-snug">
                                    高互动及低水军成分，使其在算法奖励机制中极其稳定地获取顶格高分。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Division Title */}
                    <div className="w-full flex justify-center mt-3 mt-b text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-[2rem] xl:text-[2.2rem] font-black text-white tracking-widest opacity-95">
                            基于知乎特点的 GEO 优化方案
                        </h2>
                    </div>

                    {/* Bottom Row: The 3 Strategies */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-5">
                        {strategies.map((item, idx) => (
                            <div key={idx} className="flex flex-col bg-[#0c0c0c]/90 backdrop-blur-3xl border border-zinc-800 rounded-[20px] p-5 xl:p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                                <div className="absolute -top-2 right-2 text-[50px] font-black text-zinc-100 opacity-[0.03] select-none pointer-events-none">
                                    {item.id}
                                </div>
                                <h3 className="text-[1.3rem] xl:text-[1.5rem] font-black text-white mb-2 flex items-center truncate">
                                    <span className="text-zinc-500 mr-2 opacity-60 text-[1rem]">{item.id} /</span>
                                    {item.title}
                                </h3>
                                
                                <div className="mb-2 inline-block px-2.5 py-1 rounded-lg bg-zinc-800/60 border border-zinc-700/50 w-fit">
                                    <span className="text-[0.9rem] xl:text-[1rem] text-zinc-200 font-bold">
                                        {item.direction}
                                    </span>
                                </div>
                                
                                <div className="flex flex-col gap-2 flex-1 mt-1">
                                    <div className="mb-1">
                                        <p className="text-[1rem] xl:text-[1.12rem] leading-snug text-zinc-400">
                                            <strong className="text-zinc-300 mr-1">逻辑:</strong>{item.logic}
                                        </p>
                                    </div>
                                    <div className="bg-[#161616] border border-zinc-800 rounded-xl p-3.5 mt-auto shrink-0">
                                        <p className="text-[1rem] xl:text-[1.12rem] text-rose-300 leading-snug">
                                            <strong className="text-rose-400 mr-1">执行:</strong><span className="font-medium text-white/90">{item.execution}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            
        </div>
    );
}
