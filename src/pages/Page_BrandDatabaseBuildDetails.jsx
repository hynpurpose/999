import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Page_BrandDatabaseBuildDetails() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-4 pb-4 px-6 lg:pt-5 lg:pb-5 lg:px-8 xl:pt-5 xl:pb-6 xl:px-10 animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1700px] mx-auto flex flex-col h-full relative z-10 justify-center items-center">
                
                {/* Main Content Area - Just two giant images connected by a static arrow */}
                <div className="w-full flex items-center justify-center gap-4 lg:gap-8 xl:gap-10 min-h-0">
                    
                    {/* Left: 品牌信息收集 */}
                    <div className="flex flex-col items-center gap-4 shrink-0">
                        <div className="text-zinc-300 font-black text-xl lg:text-2xl xl:text-3xl tracking-widest text-center mb-1">
                            品牌信息收集
                        </div>
                        <div className="w-fit bg-zinc-950 border-2 border-white/10 rounded-3xl overflow-hidden shadow-2xl shrink-0">
                            <img 
                                src="/Add_Charts/brand-info-collection.png" 
                                alt="品牌信息收集" 
                                className="h-[60vh] lg:h-[68vh] xl:h-[72vh] max-h-[750px] min-h-[380px] w-auto object-contain block"
                            />
                        </div>
                    </div>

                    {/* Middle: Connecting Arrow - Pure static simple arrow */}
                    <div className="shrink-0 flex items-center justify-center">
                        <ArrowRight className="w-14 h-14 lg:w-18 lg:h-18 xl:w-22 xl:h-22 text-[#004CE5] opacity-80" />
                    </div>

                    {/* Right: 输入数据库后台 */}
                    <div className="flex flex-col items-center gap-4 shrink-0">
                        <div className="text-zinc-300 font-black text-xl lg:text-2xl xl:text-3xl tracking-widest text-center mb-1">
                            输入数据库后台
                        </div>
                        <div className="w-fit bg-zinc-950 border-2 border-white/10 rounded-3xl overflow-hidden shadow-2xl shrink-0">
                            <img 
                                src="/Add_Charts/brand-database-backend.png" 
                                alt="输入数据库后台" 
                                className="h-[60vh] lg:h-[68vh] xl:h-[72vh] max-h-[750px] min-h-[380px] w-auto object-contain block"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
