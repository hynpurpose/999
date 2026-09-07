import React from 'react';

export default function Page_Zhihu_AIDataDecision() {
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
                    推荐品牌产品到底用训练数据还是联网数据
                </h1>
                <p className="text-lg sm:text-xl lg:text-[22px] font-bold text-white/70 tracking-wide mt-2 max-w-[80%] text-center leading-relaxed">
                    <span className="text-white font-black opacity-90 mr-2">结论：</span>
                    做 GEO 优化的大部分产品都是实时决策属性，所以我们更关注 AI 是如何调用互联网信息的
                </p>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 w-full px-8 lg:px-24 pb-12 pt-6 flex items-start justify-center min-h-0">
                <div className="w-full max-w-[2200px] h-full relative grid grid-cols-2 gap-10 lg:gap-14">

                    {/* Left Box: 提问方式 A */}
                    <div className="relative flex flex-col items-start bg-zinc-900/40 rounded-[28px] border border-white/10 p-8 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 shadow-2xl h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="flex-none mb-6 relative z-10">
                            <h2 className="text-2xl xl:text-[28px] font-black tracking-wider mb-4 leading-tight text-white/90">
                                <span className="text-blue-400 mr-3">提问方式 A：</span>
                                结婚摆酒选什么比较适合？
                            </h2>
                            <p className="text-[17px] xl:text-[20px] text-white/60 leading-relaxed pr-4">
                                这种情况一般倾向于用<strong className="text-white">训练数据</strong>，因为这类问题本质上更像“生活方式建议”或“场景判断”，需要的是常识、经验归纳和偏好匹配，一般不依赖联网的实时数据库
                            </p>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full flex-1 relative rounded-2xl bg-black/50 border border-white/5 overflow-hidden flex items-center justify-center min-h-0">
                            <img
                                src="/charts/zhihu-ai-data-decision-a.png"
                                alt="提问方式A示意图"
                                className="w-full h-full object-contain p-2"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden flex-col items-center justify-center w-full h-full opacity-50 z-10 text-white gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                <span>请将图片放入 public/charts/zhihu-ai-data-decision-a.png</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Box: 提问方式 B */}
                    <div className="relative flex flex-col items-start bg-zinc-900/40 rounded-[28px] border border-white/10 p-8 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 shadow-2xl h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="flex-none mb-6 relative z-10">
                            <h2 className="text-2xl xl:text-[28px] font-black tracking-wider mb-4 leading-tight text-white/90">
                                <span className="text-blue-400 mr-3">提问方式 B：</span>
                                婚宴白酒选什么牌子更合适？
                            </h2>
                            <p className="text-[17px] xl:text-[20px] text-white/60 leading-relaxed pr-4">
                                这种情况，用户的问题开始变成带<strong className="text-white">商品推荐或实时决策属性</strong>，平台就更可能混合调用外部数据，而不是只靠训练知识。
                            </p>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full flex-1 relative rounded-2xl bg-black/50 border border-white/5 overflow-hidden flex items-center justify-center min-h-0">
                            <img
                                src="/charts/zhihu-ai-data-decision-b.png"
                                alt="提问方式B示意图"
                                className="w-full h-full object-contain p-2"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden flex-col items-center justify-center w-full h-full opacity-50 z-10 text-white gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                <span>请将图片放入 public/charts/zhihu-ai-data-decision-b.png</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
