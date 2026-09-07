import React from 'react';

export default function Page_Zhihu_AIInternetProcess() {
    const steps = [
        {
            num: "1",
            title: "查询扩展",
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>,
            content: (
                <div className="flex flex-col gap-3 xl:gap-4">
                    <p className="text-white/80 leading-relaxed text-[16px] xl:text-[18px]">
                        当用户输入模糊问题（如“婚宴白酒选什么牌子”），AI 底层代理会将其拆解并生成多个具备<strong className="text-white">高搜索深度</strong>的具体指令：
                    </p>
                    <ul className="flex flex-col gap-2 text-blue-300/90 text-[15px] xl:text-[17px] pl-4 border-l-[3px] border-blue-500/40 mt-1">
                        <li>“不同价位婚宴白酒推荐列表”</li>
                        <li>“婚礼用酒的讲究与寓意”</li>
                        <li>“知乎真实用户口碑与避坑指南”</li>
                    </ul>
                </div>
            )
        },
        {
            num: "2",
            title: "初始检索",
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
            content: (
                <div className="flex flex-col gap-3 xl:gap-4">
                    <p className="text-white/80 leading-relaxed text-[16px] xl:text-[18px]">
                        AI 通过 API 获取每个指令的搜索结果（约 <strong className="text-white">50-100</strong> 个初始网页）。来源包含电商页、品牌官网、资讯文章及论坛等。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-[16px] xl:text-[18px] mt-1">
                        <span className="text-blue-400 font-bold mr-2">【当前状态】</span>
                        此时仅为主体信息的抓取集合（只拿到了标题和简介 Snippet），尚未进入深度阅读，如同一个杂乱的<strong className="text-zinc-300 font-bold">“原材料库”</strong>。
                    </p>
                </div>
            )
        },
        {
            num: "3",
            title: "语义重排",
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5h10M11 9h10M11 13h10M11 17h10M3 17l4 4 4-4M7 21V3"/></svg>,
            content: (
                <div className="flex flex-col gap-3 xl:gap-4">
                    <p className="text-white/80 leading-relaxed text-[16px] xl:text-[18px]">
                        决定 GEO 优化的<strong className="text-blue-400 font-bold">“生死线”</strong>。模型对百余结果重新交叉打分考核。只有包含正向比较、结构化数据的文章才能拿<strong className="text-white">极高分</strong>。纯品牌宣传文则被判定为中低分。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-[16px] xl:text-[18px] mt-1">
                        <span className="text-blue-400 font-bold mr-2">【重排规则】</span>
                        若正文包含深度评测与专家引言，即使排名在第15名，AI也会优先抓取，甚至<strong className="text-zinc-300 font-bold">逆袭首位的单一宣传网址</strong>。
                    </p>
                </div>
            )
        },
        {
            num: "4",
            title: "知识切片与注入",
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
            content: (
                <div className="flex flex-col gap-3 xl:gap-4">
                    <p className="text-white/80 leading-relaxed text-[16px] xl:text-[18px]">
                        从上一步决出的排名前 5-8 个网页中，AI 并不全篇照抓，而是进行<strong className="text-white">切片处理 (Chunking)</strong>，仅析取出与用户意图强相关的事实点。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-[16px] xl:text-[18px] mt-1">
                        <span className="text-blue-400 font-bold mr-2">【全局拼图输出】</span>
                        摒弃单一偏见，将各平台切片的高分信息提取捏合重组，用聚合口吻为您生成客观的<strong className="text-zinc-300 font-bold">决策建议</strong>。
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans selection:bg-blue-500/30">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            {/* Header Layout aligned with Page_Zhihu_AIInternetData */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-6 sm:pt-8 shrink-0 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-black text-white tracking-widest mb-4 opacity-95">
                    基于搜索的AI问答底层机理
                </h1>
            </div>

            {/* Main Content Area: 4 Staggered Steps */}
            <div className="flex-1 relative z-10 w-full flex items-center justify-center px-8 lg:px-20 pb-12 mt-8 lg:mt-12 min-h-0">
                <div className="w-full max-w-[2000px] h-full relative grid grid-cols-4 gap-6 xl:gap-8">
                    
                    {/* Background Connector Lines */}
                    <div className="absolute left-[10%] right-[10%] top-1/2 h-[1px] border-b border-dashed border-white/20 -translate-y-1/2 z-0 hidden lg:block" />

                    {steps.map((step, idx) => {
                        const isDown = idx % 2 === 1;
                        return (
                            <div key={idx} className={`relative flex flex-col ${isDown ? 'justify-end' : 'justify-start'} h-full lg:pb-6 pt-4 z-10 group`}>
                                
                                {/* Vertical connector for staggered layout */}
                                <div className={`absolute left-1/2 w-[1px] border-l border-dashed border-white/20 -translate-x-1/2 z-0 hidden lg:block transition-all duration-300 group-hover:border-blue-400/50 ${isDown ? 'top-1/2 bottom-[calc(100%-80%)] h-[30%]' : 'top-[20%] bottom-1/2 h-[30%]'}`} />
                                <div className={`absolute left-1/2 w-2 h-2 rounded-full bg-white/20 -translate-x-1/2 z-0 hidden lg:block transition-all duration-300 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_#60a5fa] ${isDown ? 'top-1/2 -translate-y-1/2' : 'bottom-1/2 translate-y-1/2'}`} />

                                <div className="bg-[#111]/80 backdrop-blur-xl rounded-[24px] rounded-tl-none p-6 xl:p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-500 shadow-2xl h-[460px] xl:h-[520px] flex flex-col relative z-10 hover:-translate-y-2">
                                    
                                    {/* Number Badge */}
                                    <div className="absolute -top-[1px] -left-[1px] w-12 h-12 xl:w-16 xl:h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-br-2xl group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                                        <span className="text-[24px] xl:text-[32px] font-mono font-light text-white/80 group-hover:text-blue-400">{step.num}</span>
                                    </div>

                                    <div className="mt-12 xl:mt-16 flex-none flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                                        <div className="w-10 h-10 xl:w-12 xl:h-12 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-[22px] xl:text-[26px] font-bold text-white tracking-wide">
                                            {step.title}
                                        </h3>
                                    </div>
                                    
                                    <div className="flex-1 overflow-visible custom-scrollbar-hide flex flex-col justify-start">
                                        {step.content}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .custom-scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </div>
    );
}
