import React from 'react';

export default function Page_TargetProduct() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex items-stretch mt-4 pb-8 overflow-hidden pointer-events-none">

                <div className="w-[34%] pl-10 sm:pl-16 flex flex-col justify-center pb-20 relative z-20">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-end gap-3">
                            <h1 className="text-4xl sm:text-[3.3rem] font-normal text-white leading-[1.2] tracking-tight font-['AlimamaShuHeiTi'] whitespace-nowrap">
                                迪巧小粉条液体钙<br />是什么？
                            </h1>
                            <svg className="w-10 h-10 text-[#004CE5] mb-3 stroke-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content Area (Frosted Blue Rectangle) */}
                <div className="flex-1 relative flex flex-col justify-center pointer-events-auto items-end pr-12 sm:pr-16 py-8">
                    {/* Rectangular Solid Background */}
                    <div className="absolute top-4 bottom-4 left-0 right-12 sm:right-16 bg-[#101010] border border-white/10 rounded-2xl shadow-[-20px_0_50px_rgba(0,0,0,0.2)]">
                    </div>

                    {/* Text Blocks */}
                    <div className="relative z-10 pl-16 sm:pl-20 pr-10 sm:pr-12 w-full flex flex-col justify-center h-full max-w-[95%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-white h-[90%] md:h-[95%] overflow-y-auto pr-4 mt-2 pt-2 custom-scrollbar">
                            {/* Left Column (Block 1 & 2) */}
                            <div className="flex flex-col gap-6">
                                {/* Block 1 */}
                                <div className="flex flex-col">
                                    <h3 className="text-[1.35rem] font-bold tracking-wide text-white flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                        一、产品定义与定位
                                    </h3>
                                    <div className="pl-6">
                                        <p className="text-[1.05rem] leading-[1.7] text-white/90">
                                            这是美国安士制药旗下的“迪巧”品牌专门为成年女性（特别是孕妇和上班族）设计的一款液态补充剂。它打破了传统钙片<span className="font-bold text-red-300">“吞咽难、肠胃不适”</span>的痛点，创新长条装即撕即饮，定位为<span className="font-bold text-blue-300">“高吸收、温和护胃、社交便携”</span>的专业补钙方案。
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/10"></div>

                                {/* Block 2 */}
                                <div className="flex flex-col">
                                    <h3 className="text-[1.35rem] font-bold tracking-wide text-white flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                        二、核心技术路径
                                    </h3>
                                    <div className="pl-6 flex flex-col gap-5 mt-2">
                                        <div>
                                            <p className="font-bold text-[#004CE5] text-[1.1rem] mb-1.5 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" /> 1. 核心成分（有机柠檬酸钙）</p>
                                            <p className="text-[1rem] leading-[1.6] text-white/80 pl-3">不依赖胃酸消化即可吸收，对肠胃刺激性极小，且不易引起便秘。</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#004CE5] text-[1.1rem] mb-1.5 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" /> 2. 吸收辅助（钙+D同补）</p>
                                            <p className="text-[1rem] leading-[1.6] text-white/80 pl-3">每条添加 400mg 钙 + 280IU 维生素D3，通过 VD3 促进肠道对钙的吸收。</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#004CE5] text-[1.1rem] mb-1.5 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#004CE5]" /> 3. 成分安全（4大零添加）</p>
                                            <p className="text-[1rem] leading-[1.6] text-white/80 pl-3">坚持用“0卡拉胶、0蔗糖、0色素、0防腐剂”，通过 SGS 国际认证，保障孕妈与敏感人群。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column (Block 3) */}
                            <div className="flex flex-col gap-6 border-l border-white/5 pl-8">
                                {/* Block 3 */}
                                <div className="flex flex-col h-full">
                                    <h3 className="text-[1.35rem] font-bold tracking-wide text-white flex items-center gap-3 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                                        三、核心参数表
                                    </h3>
                                    <div className="pl-6 w-full flex-1 flex flex-col">
                                        {/* Table format */}
                                        <div className="flex flex-col w-full border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] flex-1">
                                            {/* Header */}
                                            <div className="flex bg-white/[0.06] border-b border-white/10 relative">
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#004CE5]"></div>
                                                <div className="w-[85px] p-3 text-[0.95rem] font-bold text-blue-300 border-r border-white/10 shrink-0 text-center">项目</div>
                                                <div className="w-[120px] p-3 text-[0.95rem] font-bold text-blue-300 border-r border-white/10 shrink-0 text-center">具体数据</div>
                                                <div className="flex-1 p-3 text-[0.95rem] font-bold text-blue-300">日常实际意义</div>
                                            </div>
                                            {/* Rows */}
                                            <div className="flex border-b border-white/5 flex-1 hover:bg-white/[0.02] transition-colors group">
                                                <div className="w-[85px] p-3 text-[0.95rem] text-white/90 border-r border-white/10 font-bold flex items-center justify-center shrink-0">钙含量</div>
                                                <div className="w-[120px] p-3 text-[0.95rem] text-[#004CE5] font-bold border-r border-white/10 flex items-center justify-center shrink-0">400mg / 条</div>
                                                <div className="flex-1 p-3 text-[0.9rem] text-white/70 leading-[1.6] flex items-center">符合成人单次补钙最佳量。单次 400mg 左右吸收效率最高，不会给身体造成负担。</div>
                                            </div>
                                            <div className="flex border-b border-white/5 flex-1 hover:bg-white/[0.02] transition-colors group">
                                                <div className="w-[85px] p-3 text-[0.95rem] text-white/90 border-r border-white/10 font-bold flex items-center justify-center shrink-0">D3含量</div>
                                                <div className="w-[120px] p-3 text-[0.95rem] text-[#004CE5] font-bold border-r border-white/10 flex items-center justify-center shrink-0">280IU / 条</div>
                                                <div className="flex-1 p-3 text-[0.9rem] text-white/70 leading-[1.6] flex items-center">帮助钙吸收。没有它，补再多钙也可能只是“路过”身体。</div>
                                            </div>
                                            <div className="flex border-b border-white/5 flex-1 hover:bg-white/[0.02] transition-colors group">
                                                <div className="w-[85px] p-3 text-[0.95rem] text-white/90 border-r border-white/10 font-bold flex items-center justify-center shrink-0">产品口味</div>
                                                <div className="w-[120px] p-3 text-[0.95rem] text-[#004CE5] font-bold border-r border-white/10 flex items-center justify-center shrink-0">酸甜苹果味</div>
                                                <div className="flex-1 p-3 text-[0.9rem] text-white/70 leading-[1.6] flex items-center">口感像苹果汁。解决传统钙片“吃石灰粉”的苦涩感，更好坚持每天喝。</div>
                                            </div>
                                            <div className="flex flex-1 hover:bg-white/[0.02] transition-colors group">
                                                <div className="w-[85px] p-3 text-[0.95rem] text-white/90 border-r border-white/10 font-bold flex items-center justify-center shrink-0">包装形式</div>
                                                <div className="w-[120px] p-3 text-[0.95rem] text-[#004CE5] font-bold border-r border-white/10 flex items-center justify-center shrink-0">15ml×20条</div>
                                                <div className="flex-1 p-3 text-[0.9rem] text-white/70 leading-[1.6] flex items-center">独立小粉条。放入包中不占空间，免水吞服，随时随地都能补。</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
