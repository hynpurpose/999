import React from 'react';

export default function Page_ProposalNav() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 w-full flex items-stretch mt-4 pb-8 overflow-hidden pointer-events-none">

                {/* Left Side: Title */}
                <div className="w-[45%] pl-12 sm:pl-16 flex flex-col justify-center pb-20 relative z-20">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-end gap-3">
                            <h1 className="text-4xl sm:text-[4.5rem] font-normal text-white leading-tight tracking-tight font-['AlimamaShuHeiTi']">
                                口服补钙产品是什么？
                            </h1>
                            <svg className="w-10 h-10 text-[#004CE5] mb-3 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content Area (Frosted Blue Rectangle) */}
                <div className="flex-1 relative flex flex-col justify-center pointer-events-auto items-end pr-12 sm:pr-16 py-8">
                    {/* Rectangular Solid Background */}
                    <div className="absolute top-8 bottom-8 left-0 right-12 sm:right-16 bg-[#101010] border border-white/10 rounded-2xl shadow-[-20px_0_50px_rgba(0,0,0,0.2)]">
                    </div>

                    {/* Text Blocks */}
                    <div className="relative z-10 pl-20 sm:pl-28 pr-12 sm:pr-16 w-full flex flex-col gap-12 text-white justify-center h-full max-w-[95%]">

                        {/* Block 1: 基本概念 */}
                        <div className="flex flex-col gap-4">
                            <div className="w-10 h-10 mb-3 flex items-center justify-center">
                                <img src="/icons/nav_icon_1.svg" alt="icon 1" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                            </div>

                            <div>
                                <h3 className="text-2xl sm:text-[1.8rem] font-bold mb-4 tracking-wide text-white">基本概念</h3>
                                <p className="text-lg sm:text-xl leading-[1.85] font-medium text-white/90">
                                    以补充人体骨骼及生理代谢所需的钙元素为核心目的，经过特定制剂工艺（如片剂、胶囊、颗粒、液体等）加工而成，通过口服途径摄入的维生素与膳食补充剂（VDS）或非处方药（OTC）。
                                </p>
                            </div>

                            {/* Separator line */}
                            <div className="w-4/5 h-px bg-white/20 mt-4"></div>
                        </div>

                        {/* Block 2: 其他称呼 */}
                        <div className="flex flex-col gap-3">
                            <div className="w-10 h-10 mb-3 ml-1 mt-2 flex items-center justify-center">
                                <img src="/icons/nav_icon_2.svg" alt="icon 2" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                            </div>

                            <div>
                                <h3 className="text-2xl sm:text-[1.8rem] font-bold mb-4 tracking-wide text-white">
                                    其他称呼
                                    <span className="text-[20px] font-normal text-white/60 ml-3">（按消费者真实搜索与口语习惯排序）</span>
                                </h3>
                                <div className="text-lg sm:text-xl leading-[1.85] font-medium text-white/90 flex flex-col gap-2">
                                    <p>1. 钙片（绝对的国民级泛称，无论什么形态，大众都习惯统称买钙片）。</p>
                                    <p>2. 钙剂（医生、药师、营养师等专业语境的称呼）。</p>
                                    <p>3. 骨骼健康营养品（高端保健品或抗衰语境下的包装词）。</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}
