import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_Pricing() {
    return (
        <SlideLayout title="报价">
            <div className="w-full h-full flex gap-6 lg:gap-10 relative z-10 min-h-0">

                {/* 国内 AI 平台 */}
                <div className="flex-1 bg-[#101010] border border-white/10 rounded-[1.5rem] p-10 sm:p-14 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.2)] relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                    <div className="border-b border-white/10 pb-8 mb-8 relative z-10">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                            国内 AI 平台
                        </h3>
                        <div className="flex items-center gap-2 mb-4 pl-6">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 overflow-hidden flex items-center justify-center">
                                    <img src={`/ai-logos/ai-${i}.png`} alt={`AI ${i}`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.opacity = '0'; }} />
                                </div>
                            ))}
                            <span className="text-lg text-zinc-600 font-bold tracking-widest ml-1">...</span>
                        </div>
                        <p className="text-xl text-zinc-500 font-medium tracking-wide pl-6">面向国内市场的专属定价方案</p>
                    </div>

                    <div className="flex flex-col gap-10 flex-grow justify-center relative z-10 pl-6">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-bold text-zinc-300">中小品牌、非竞争激烈行业</h4>
                            <div className="flex items-end gap-3 mt-2">
                                <span className="text-6xl lg:text-7xl font-black text-blue-400 tracking-tight"><span className="inline-flex items-center gap-1">3<span className="text-[0.75em] font-black leading-none">万</span></span><span className="text-3xl lg:text-4xl text-zinc-500 font-semibold align-baseline ml-2">/月起</span></span>
                            </div>
                            <p className="text-lg text-zinc-400 font-medium bg-white/[0.03] border border-white/5 py-2.5 px-5 rounded-xl inline-flex items-center w-fit mt-1">
                                <span className="w-2 h-2 rounded-full bg-blue-400 mr-3"></span>合作周期：三个月起
                            </p>
                        </div>

                        <div className="w-full h-px bg-white/10"></div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-bold text-zinc-300">大品牌、竞争激烈行业</h4>
                            <div className="flex items-end gap-3 mt-2">
                                <span className="text-6xl lg:text-7xl font-black text-blue-400 tracking-tight"><span className="inline-flex items-center gap-1">10<span className="text-[0.75em] font-black leading-none">万</span></span><span className="text-3xl lg:text-4xl text-zinc-500 font-semibold align-baseline ml-2">/月起</span></span>
                            </div>
                            <p className="text-lg text-zinc-400 font-medium bg-white/[0.03] border border-white/5 py-2.5 px-5 rounded-xl inline-flex items-center w-fit mt-1">
                                <span className="w-2 h-2 rounded-full bg-blue-400 mr-3"></span>合作周期：六个月起
                            </p>
                        </div>
                    </div>
                </div>

                {/* 国外 AI 平台 */}
                <div className="flex-1 bg-[#101010] border border-white/10 rounded-[1.5rem] p-10 sm:p-14 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.2)] relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                    <div className="border-b border-white/10 pb-8 mb-8 relative z-10">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                            国外 AI 平台
                        </h3>
                        <div className="flex items-center gap-2 mb-4 pl-6">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 overflow-hidden flex items-center justify-center">
                                    <img src={`/ai-logos/intl-${i}.png`} alt={`Intl AI ${i}`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.opacity = '0'; }} />
                                </div>
                            ))}
                            <span className="text-lg text-zinc-600 font-bold tracking-widest ml-1">...</span>
                        </div>
                        <p className="text-xl text-zinc-500 font-medium tracking-wide pl-6">覆盖出海与跨国品牌的高级方案</p>
                    </div>

                    <div className="flex flex-col gap-10 flex-grow justify-center relative z-10 pl-6">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-bold text-zinc-300">中小品牌、非竞争激烈行业</h4>
                            <div className="flex items-end gap-3 mt-2">
                                <span className="text-6xl lg:text-7xl font-black text-blue-400 tracking-tight"><span className="inline-flex items-center gap-1">5<span className="text-[0.75em] font-black leading-none">万</span></span><span className="text-3xl lg:text-4xl text-zinc-500 font-semibold align-baseline ml-2">/月起</span></span>
                            </div>
                            <p className="text-lg text-zinc-400 font-medium bg-white/[0.03] border border-white/5 py-2.5 px-5 rounded-xl inline-flex items-center w-fit mt-1">
                                <span className="w-2 h-2 rounded-full bg-blue-400 mr-3"></span>合作周期：三个月起
                            </p>
                        </div>

                        <div className="w-full h-px bg-white/10"></div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-bold text-zinc-300">大品牌、竞争激烈行业</h4>
                            <div className="flex items-end gap-3 mt-2">
                                <span className="text-6xl lg:text-7xl font-black text-blue-400 tracking-tight"><span className="inline-flex items-center gap-1">12<span className="text-[0.75em] font-black leading-none">万</span></span><span className="text-3xl lg:text-4xl text-zinc-500 font-semibold align-baseline ml-2">/月起</span></span>
                            </div>
                            <p className="text-lg text-zinc-400 font-medium bg-white/[0.03] border border-white/5 py-2.5 px-5 rounded-xl inline-flex items-center w-fit mt-1">
                                <span className="w-2 h-2 rounded-full bg-blue-400 mr-3"></span>合作周期：六个月起
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </SlideLayout>
    );
}
