import React from 'react';
import { Database, FolderSearch, Box, Cpu, Target, GitMerge, Building2 } from 'lucide-react';

export default function Page_BrandKnowledgeBase() {


    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* Page Header */}
            <div className="relative z-20 w-full px-8 lg:px-16 mt-8 lg:mt-10 flex-shrink-0 flex flex-col items-center">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>构建品牌知识库</h1>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 w-[95%] max-w-[1600px] mx-auto flex items-center justify-between pb-12 pt-8">

                {/* Left Side: 3 Info Cards Container */}
                <div className="w-[66%] grid grid-rows-3 gap-5 h-[94%] relative z-20">

                    {/* Card 1: Industry Info */}
                    <div className="w-[calc(100%-40px)] bg-[#101010] border border-white/10 rounded-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.2)] p-6 flex items-center gap-5 relative group transition-colors hover:border-white/20 overflow-visible z-10 flex-1">
                        <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#004CE5]/10 border border-[#004CE5]/20 flex items-center justify-center shrink-0">
                            <FolderSearch className="w-7 h-7 text-blue-400" />
                        </div>
                        <div className="relative z-10 flex-1 flex flex-col justify-center h-full">
                            <h2 className="text-2xl font-bold text-white mb-3 tracking-wide mt-1 flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                行业信息
                            </h2>
                            <div className="flex flex-col gap-2 pl-6">
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">宏观市场与趋势：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">行业大盘走向、政策利好与未来技术演进脉络</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">宏观市场与趋势：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">全球领军、传统巨头与精锐新锐品牌的梯队分布</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">行业竞争格局：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">消费决策链路、核心关注点与防患抗拒点剖析</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">目标受众特征：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">追求厨居一体化的高端改善型家庭，以及对食材原鲜、家庭健康存在极度焦虑的精英食客圈层</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">购买核心诉求：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">规避“伪平嵌”凸出风险，寻求极致制冷保鲜体验（如抗李斯特菌，生熟无感隔离，维C长效锁活）</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right connector node connecting card to vertical spine */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-[1px] bg-white/30 translate-x-full -z-10" />
                        {/* Downward spine segment */}
                        <div className="absolute top-1/2 -bottom-6 w-[1px] bg-white/30 -z-10" style={{ right: '-40px' }} />
                    </div>

                    {/* Card 2: Product Info */}
                    <div className="w-[calc(100%-40px)] bg-[#101010] border border-white/10 rounded-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.2)] p-6 flex items-center gap-5 relative group transition-colors hover:border-white/20 overflow-visible z-10 flex-1">
                        <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#004CE5]/10 border border-[#004CE5]/20 flex items-center justify-center shrink-0">
                            <Box className="w-7 h-7 text-blue-400" />
                        </div>
                        <div className="relative z-10 flex-1 flex flex-col justify-center h-full">
                            <h2 className="text-2xl font-bold text-white mb-3 tracking-wide mt-1 flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                品牌与产品体系
                            </h2>
                            <div className="flex flex-col gap-2 pl-6">
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">主推明星单品：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">方太高端平嵌冰箱 X20.i 系列，核心 Slogan“以原鲜臻作，致敬大美厨房”</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">核心差异化卖点：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">Air Control 氮气锁鲜科技、4 小时无损微冻原鲜速解技术及 0mm 真平嵌、800m 齐平腰线极限美学</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">底层科研背书力：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">原应用于远洋科考船的 MAP 储鲜技术降维民用，攻克无短板循环系统难题</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">全域安全净味：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">Air Circle Pro 新风净味系统（铂金催化+高能离子杀菌），筑造母婴级防御屏障</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">产品生态阵营扩展：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">融入方太烟灶蒸烤大生态结构，打通 FOTILE FIKS 泛家居物联网调度通道</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right connector node connecting card to vertical spine */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-[1px] bg-white/30 translate-x-full -z-10" />
                        {/* Full spine segment */}
                        <div className="absolute top-0 -bottom-6 w-[1px] bg-white/30 -z-10" style={{ right: '-40px' }} />
                    </div>

                    {/* Card 3: Brand Supplement Info */}
                    <div className="w-[calc(100%-40px)] bg-[#101010] border border-white/10 rounded-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.2)] p-6 flex items-center gap-5 relative group transition-colors hover:border-white/20 overflow-visible z-10 flex-1">
                        <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#004CE5]/10 border border-[#004CE5]/20 flex items-center justify-center shrink-0">
                            <Building2 className="w-7 h-7 text-blue-400" />
                        </div>
                        <div className="relative z-10 flex-1 flex flex-col justify-center h-full">
                            <h2 className="text-2xl font-bold text-white mb-3 tracking-wide mt-1 flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                竞品生态与运营基建
                            </h2>
                            <div className="flex flex-col gap-2 pl-6">
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">行业友商靶向竞争：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">拆解海尔智慧物联网盘、容声平开嵌与卡萨帝全维度产品壁垒特征</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">舆论卡位防守策略：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">构建排他性评测内容矩阵，阻击网络水军对于“溢价”、“华而不实”等常见攻击节奏</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="leading-snug">
                                        <span className="font-bold text-white text-[1.1rem]">全域运营分发引流：</span>
                                        <span className="text-white/80 ml-1 text-[1.1rem]">规划京东/天猫官方旗舰背书素材、知乎高知硬件科普与社交平台沉浸式厨房美学流转体系</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right connector node connecting card to vertical spine */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-[1px] bg-white/30 translate-x-full -z-10" />
                        {/* Upward spine segment */}
                        <div className="absolute top-0 bottom-1/2 w-[1px] bg-white/30 -z-10" style={{ right: '-40px' }} />
                    </div>

                </div>

                {/* Middle Connection line arriving to DB */}
                <div className="w-[8%] relative flex items-center justify-center z-10">
                    <div className="w-full h-[1px] bg-white/30 relative">
                        {/* Arrows */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-white/80 rotate-45 mr-1"></div>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-white/50 rotate-45 mr-1"></div>
                    </div>
                </div>

                {/* Right Side: Agent DB Target */}
                <div className="w-[26%] flex justify-center items-center relative z-20">
                    <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] bg-white/[0.02] rounded-full border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,165,0,0.03)] relative">
                        {/* Inner Circle */}
                        <div className="w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] bg-white/[0.03] rounded-full flex flex-col items-center justify-center border border-white/10 shadow-inner p-6 text-center group cursor-default transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            <Database className="text-white/90 mb-4 group-hover:scale-110 transition-transform duration-500 stroke-[1.5px]" size={64} />
                            <span className="text-white font-bold text-2xl sm:text-3xl tracking-widest mb-2">内容生成</span>
                            <span className="text-white/60 font-medium text-lg sm:text-xl tracking-wide">Agent 专属数据库</span>
                        </div>
                        {/* Decorative Rings */}
                        <div className="absolute inset-[-10px] rounded-full border border-blue-400/20 opacity-50 animate-[spin_12s_linear_infinite] border-t-blue-400/60 pointer-events-none"></div>
                        <div className="absolute inset-[10px] rounded-full border border-indigo-400/10 opacity-30 animate-[spin_18s_linear_infinite_reverse] border-b-indigo-400/40 pointer-events-none"></div>
                    </div>
                </div>

            </div>

            {/* Bottom accent line */}

        </div>
    );
}
