import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ServiceStandard() {
    const steps = [
        {
            number: "1",
            title: "品牌定位",
            description: "通过大模型模拟与行为研究，锁定品牌在生成式AI语境下的心智定位与竞争格局。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            )
        },
        {
            number: "2",
            title: "关键词策略",
            description: "科学划分监测词与优化词，模拟主流搜索引擎机制与算法，锁定高潜搜索流量入口。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                </svg>
            )
        },
        {
            number: "3",
            title: "现状诊断报告",
            description: "对品牌提及率、引用源及竞品声量进行深度体检，提纯为结构化口碑诊断数据。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
            )
        },
        {
            number: "4",
            title: "优化策略与KPI 设定",
            description: "量化设定提及率提升目标，建立排他服务原则与量化竞争模型，规划执行里程碑。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
            )
        },
        {
            number: "5",
            title: "内容策略",
            description: "部署自研内容撰写 Agent，通过人机协同（Human-in-the-Loop）生成高权重优化语料。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
            )
        },
        {
            number: "6",
            title: "投放策略",
            description: "精细化语料发布与垂直社区渗透，持续监控 AI 召回率并科学验收提及率增长指标。",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
            )
        }
    ];

    return (
        <SlideLayout fullBleed={true}>
            <div className="w-full h-full flex items-center justify-center relative z-10 select-none animate-fadeIn">
                
                {/* 6-Step Timeline Container */}
                <div className="relative w-full max-w-[1600px] h-[550px]" style={{ transform: 'translateY(24px)' }}>
                    
                    {/* The Wave SVG */}
                    <div className="absolute inset-0 z-0 flex items-center drop-shadow-[0_0_15px_rgba(59,130,246,0.25)]">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 1600 500" preserveAspectRatio="none">
                            {/* Wavy path computed exactly for x = 100, 380, 660, 940, 1220, 1500 and y alternating 150 & 350 */}
                            <path
                                d="M -50 150 C 50 150, 0 150, 100 150 C 240 150, 240 350, 380 350 C 520 350, 520 150, 660 150 C 800 150, 800 350, 940 350 C 1080 350, 1080 150, 1220 150 C 1360 150, 1360 350, 1500 350 C 1550 350, 1600 350, 1650 350"
                                fill="none"
                                stroke="url(#blue-wave-6)"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />

                            {/* Node 1 Point (100, 150) */}
                            <g transform="translate(100, 150)">
                                <circle cx="0" cy="0" r="16" fill="rgba(10,15,18,1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                                <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                            </g>

                            {/* Node 2 Point (380, 350) */}
                            <g transform="translate(380, 350)">
                                <circle cx="0" cy="0" r="16" fill="rgba(10,15,18,1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                                <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                            </g>

                            {/* Node 3 Point (660, 150) */}
                            <g transform="translate(660, 150)">
                                <circle cx="0" cy="0" r="16" fill="rgba(10,15,18,1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                                <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                            </g>

                            {/* Node 4 Point (940, 350) */}
                            <g transform="translate(940, 350)">
                                <circle cx="0" cy="0" r="16" fill="rgba(10,15,18,1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                                <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                            </g>

                            {/* Node 5 Point (1220, 150) */}
                            <g transform="translate(1220, 150)">
                                <circle cx="0" cy="0" r="16" fill="rgba(10,15,18,1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                                <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                            </g>

                            {/* Node 6 Point (1500, 350) */}
                            <g transform="translate(1500, 350)">
                                <circle cx="0" cy="0" r="16" fill="rgba(10,15,18,1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                                <circle cx="0" cy="0" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                            </g>

                            <defs>
                                <linearGradient id="blue-wave-6" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                    <stop offset="10%" stopColor="#3b82f6" />
                                    <stop offset="50%" stopColor="#60a5fa" />
                                    <stop offset="90%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Node 1 - Above curve (100, 150) */}
                    <div className="absolute flex flex-col z-20 w-[270px] select-none" style={{ left: '100px', top: '150px', transform: 'translate(-50%, -100%)', paddingBottom: '35px' }}>
                        <div className="absolute -left-12 -top-16 text-[14rem] leading-none font-bold select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-b from-white/[0.06] to-transparent z-0">1</div>
                        <div className="relative z-10 flex flex-col">
                            <div className="w-16 h-16 bg-[#121a20] border-2 border-white/10 rounded-2xl flex items-center justify-center transform rotate-45 shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-8 group hover:border-blue-500/50 hover:bg-[#1a232b] transition-all duration-300 ml-4">
                                <div className="transform -rotate-45 text-white group-hover:scale-110 transition-transform duration-300">
                                    {steps[0].icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[28px] font-bold text-white mb-3 tracking-wide">{steps[0].title}</h3>
                                <p className="text-[17px] text-zinc-400 leading-relaxed font-medium text-justify">{steps[0].description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Node 2 - Below curve (380, 350) */}
                    <div className="absolute flex flex-col z-20 w-[270px] select-none" style={{ left: '380px', top: '350px', transform: 'translate(-50%, 0)', paddingTop: '35px' }}>
                        <div className="absolute -left-16 top-4 text-[14rem] leading-none font-bold select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-t from-white/[0.06] to-transparent z-0">2</div>
                        <div className="relative z-10 flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-[28px] font-bold text-white mb-3 tracking-wide">{steps[1].title}</h3>
                                <p className="text-[17px] text-zinc-400 leading-relaxed font-medium text-justify">{steps[1].description}</p>
                            </div>
                            <div className="w-16 h-16 bg-[#121a20] border-2 border-white/10 rounded-2xl flex items-center justify-center transform rotate-45 shadow-[0_0_20px_rgba(59,130,246,0.2)] group hover:border-blue-500/50 hover:bg-[#1a232b] transition-all duration-300 ml-4 mt-2">
                                <div className="transform -rotate-45 text-white group-hover:scale-110 transition-transform duration-300">
                                    {steps[1].icon}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Node 3 - Above curve (660, 150) */}
                    <div className="absolute flex flex-col z-20 w-[270px] select-none" style={{ left: '660px', top: '150px', transform: 'translate(-50%, -100%)', paddingBottom: '35px' }}>
                        <div className="absolute -left-12 -top-16 text-[14rem] leading-none font-bold select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-b from-white/[0.06] to-transparent z-0">3</div>
                        <div className="relative z-10 flex flex-col">
                            <div className="w-16 h-16 bg-[#121a20] border-2 border-white/10 rounded-2xl flex items-center justify-center transform rotate-45 shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-8 group hover:border-blue-500/50 hover:bg-[#1a232b] transition-all duration-300 ml-4">
                                <div className="transform -rotate-45 text-white group-hover:scale-110 transition-transform duration-300">
                                    {steps[2].icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[28px] font-bold text-white mb-3 tracking-wide">{steps[2].title}</h3>
                                <p className="text-[17px] text-zinc-400 leading-relaxed font-medium text-justify">{steps[2].description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Node 4 - Below curve (940, 350) */}
                    <div className="absolute flex flex-col z-20 w-[270px] select-none" style={{ left: '940px', top: '350px', transform: 'translate(-50%, 0)', paddingTop: '35px' }}>
                        <div className="absolute -left-16 top-4 text-[14rem] leading-none font-bold select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-t from-white/[0.06] to-transparent z-0">4</div>
                        <div className="relative z-10 flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-[28px] font-bold text-white mb-3 tracking-wide">{steps[3].title}</h3>
                                <p className="text-[17px] text-zinc-400 leading-relaxed font-medium text-justify">{steps[3].description}</p>
                            </div>
                            <div className="w-16 h-16 bg-[#121a20] border-2 border-white/10 rounded-2xl flex items-center justify-center transform rotate-45 shadow-[0_0_20px_rgba(59,130,246,0.2)] group hover:border-blue-500/50 hover:bg-[#1a232b] transition-all duration-300 ml-4 mt-2">
                                <div className="transform -rotate-45 text-white group-hover:scale-110 transition-transform duration-300">
                                    {steps[3].icon}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Node 5 - Above curve (1220, 150) */}
                    <div className="absolute flex flex-col z-20 w-[270px] select-none" style={{ left: '1220px', top: '150px', transform: 'translate(-50%, -100%)', paddingBottom: '35px' }}>
                        <div className="absolute -left-12 -top-16 text-[14rem] leading-none font-bold select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-b from-white/[0.06] to-transparent z-0">5</div>
                        <div className="relative z-10 flex flex-col">
                            <div className="w-16 h-16 bg-[#121a20] border-2 border-white/10 rounded-2xl flex items-center justify-center transform rotate-45 shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-8 group hover:border-blue-500/50 hover:bg-[#1a232b] transition-all duration-300 ml-4">
                                <div className="transform -rotate-45 text-white group-hover:scale-110 transition-transform duration-300">
                                    {steps[4].icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[28px] font-bold text-white mb-3 tracking-wide">{steps[4].title}</h3>
                                <p className="text-[17px] text-zinc-400 leading-relaxed font-medium text-justify">{steps[4].description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Node 6 - Below curve (1500, 350) */}
                    <div className="absolute flex flex-col z-20 w-[270px] select-none" style={{ left: '1500px', top: '350px', transform: 'translate(-50%, 0)', paddingTop: '35px' }}>
                        <div className="absolute -left-16 top-4 text-[14rem] leading-none font-bold select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-t from-white/[0.06] to-transparent z-0">6</div>
                        <div className="relative z-10 flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-[28px] font-bold text-white mb-3 tracking-wide">{steps[5].title}</h3>
                                <p className="text-[17px] text-zinc-400 leading-relaxed font-medium text-justify">{steps[5].description}</p>
                            </div>
                            <div className="w-16 h-16 bg-[#121a20] border-2 border-white/10 rounded-2xl flex items-center justify-center transform rotate-45 shadow-[0_0_20px_rgba(59,130,246,0.2)] group hover:border-blue-500/50 hover:bg-[#1a232b] transition-all duration-300 ml-4 mt-2">
                                <div className="transform -rotate-45 text-white group-hover:scale-110 transition-transform duration-300">
                                    {steps[5].icon}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </SlideLayout>
    );
}
