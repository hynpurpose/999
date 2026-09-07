import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ServiceIntro() {
    return (
        <SlideLayout fullBleed={true}>
            {/* Main Columns Container with top padding to clear the navigation bar */}
            <div className="w-full h-full pt-[120px] pb-4 flex items-center justify-between gap-10 relative z-10 select-none animate-fadeIn pl-2">
                
                {/* Left Column (800px width): Text Blocks */}
                <div className="w-[800px] flex flex-col gap-12 justify-center">
                    
                    {/* Block 01 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-6">
                            <span className="text-[96px] font-black text-[#004CE5] leading-none select-none tracking-tight font-['Montserrat']">01</span>
                            <span className="text-[64px] font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'AlimamaShuHeiTi', sans-serif" }}>GEO 优化服务</span>
                        </div>
                        <p className="text-zinc-450 text-[24px] leading-[38px] tracking-wide font-normal font-['MiSans'] text-justify pl-1">
                            通过系统化的内容与结构优化，提升品牌在生成式AI场景中的可见度与被推荐概率，使品牌在用户向主流AI平台提问时，更有机会出现在AI回答的首要提及与核心推荐位置。
                        </p>
                    </div>

                    {/* Block 02 */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-6">
                            <span className="text-[96px] font-black text-[#004CE5] leading-none select-none tracking-tight font-['Montserrat']">02</span>
                            <span className="text-[64px] font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'AlimamaShuHeiTi', sans-serif" }}>GEO 电商服务</span>
                        </div>
                        <p className="text-zinc-450 text-[24px] leading-[38px] tracking-wide font-normal font-['MiSans'] text-justify pl-1">
                            专注于在主流AI平台的对话情境中，精准植入品牌商品链接。通过对用户购买意图的深度识别，让AI引擎在提供建议的同时，直接将你的商品作为"最佳解决方案"推荐给用户。
                        </p>
                        <div className="flex flex-col gap-5 pl-1 mt-2">
                            <p className="text-[#004CE5] text-[22px] font-bold tracking-wide">
                                GEO 电商服务国内目前正处在早期阶段，各平台政策未固定
                            </p>
                            {/* Decorative accent icon matching the screenshot, aligned exactly to the right edge of the text column */}
                            <div className="w-full flex justify-end">
                                <div className="w-[48px] h-[48px] pointer-events-none">
                                    <img
                                        src="/icons/geo-monitor-intro-accent.png"
                                        alt="GEO Accent Icon"
                                        className="w-full h-full object-contain mix-blend-hard-light"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (1000px width): Even Larger Circle Network Image (Moved up by 16px) */}
                <div className="w-[1000px] h-[820px] flex items-center justify-center relative -top-4">
                    <img
                        src="/images/company_intro.png"
                        alt="GEO Network Circle"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </SlideLayout>
    );
}
