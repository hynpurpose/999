import React from 'react';

export default function Page_Zhihu_AIData() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Header */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-6 sm:pt-8 shrink-0 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-black text-white tracking-widest mb-4 opacity-95">
                    训练数据和联网数据的区别
                </h1>
                <p className="text-lg sm:text-xl lg:text-[22px] font-bold text-white/50 tracking-wide mt-1">
                    核心原则：AI 会根据场景，自动决定是“靠训练数据”还是“联网搜索”。
                </p>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 w-full px-8 lg:px-24 pb-16 pt-4 sm:pt-8 flex items-start mt-6 lg:mt-10 justify-center min-h-0">
                <div className="w-full max-w-[2000px] relative grid grid-cols-2 gap-10 lg:gap-16">

                    {/* Left Box: 训练数据 (Black & White Theme) */}
                    <div className="relative flex flex-col items-start bg-zinc-900/40 rounded-[28px] border border-white/10 p-10 lg:p-12 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="w-full mb-10 relative z-10 flex border-b border-white/5 pb-8 items-center gap-4">
                            {/* Icon: Database / Brain concept */}
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                </svg>
                            </div>
                            <h2 className="text-2xl xl:text-[32px] font-black text-white/90 tracking-wider">
                                训练数据
                            </h2>
                        </div>

                        <div className="flex flex-col gap-10 relative z-10 w-full text-[19px] xl:text-[22px] leading-relaxed">
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-blue-400/80 uppercase tracking-widest text-[18px] mb-2 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full" />定义
                                </span>
                                <span className="text-white/85">AI 在预训练阶段吸收的<strong className="text-white font-black">海量文本、书籍和代码</strong>。</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-blue-400/80 uppercase tracking-widest text-[18px] mb-2 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full" />机制
                                </span>
                                <span className="text-white/85">直接调用模型<strong className="text-white font-black">已学到的内部知识</strong>，无需现查互联网。</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-blue-400/80 uppercase tracking-widest text-[18px] mb-2 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full" />适用场景
                                </span>
                                <span className="text-white/85">常识、稳定的基础学科知识、历史旧信息。</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Box: 联网数据 (Black & White Theme) */}
                    <div className="relative flex flex-col items-start bg-zinc-900/40 rounded-[28px] border border-white/10 p-10 lg:p-12 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="w-full mb-10 relative z-10 flex border-b border-white/5 pb-8 items-center gap-4">
                            {/* Icon: Globe / Network concept */}
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                            </div>
                            <h2 className="text-2xl xl:text-[32px] font-black text-white/90 tracking-wider">
                                联网数据
                            </h2>
                        </div>

                        <div className="flex flex-col gap-10 relative z-10 w-full text-[19px] xl:text-[22px] leading-relaxed">
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-blue-400/80 uppercase tracking-widest text-[18px] mb-2 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full" />定义
                                </span>
                                <span className="text-white/85">AI 临时调用<strong className="text-white font-black">外部实时信息源</strong>。</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-blue-400/80 uppercase tracking-widest text-[18px] mb-2 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full" />机制
                                </span>
                                <span className="text-white/85"><strong className="text-white font-black">实时拉取网页内容</strong>，综合生成答案并附上来源链接。</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-bold text-blue-400/80 uppercase tracking-widest text-[18px] mb-2 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-400/60 rounded-full" />适用场景
                                </span>
                                <span className="text-white/85">最新新闻、实时变化（价格/天气/库存）、政策更新。</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
