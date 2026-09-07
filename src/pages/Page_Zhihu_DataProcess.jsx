import React from 'react';

export default function Page_Zhihu_DataProcess() {
    const steps = [
        {
            id: '1',
            layer: "采集层",
            title: "原始数据归集",
            icon: "database",
            target: "统一采集多维核心数据",
            desc: "统一采集用户问题、引擎回答结果、引用来源、竞品内容等原始数据，形成可追溯、可审计的底层结构化数据池。",
            borderColor: "border-zinc-700/60",
            bgLight: "bg-[#141414]",
            textAccent: "text-zinc-400"
        },
        {
            id: '2',
            layer: "清洗层",
            title: "数据清洗去噪",
            icon: "filter",
            target: "解决格式混乱及高噪声",
            desc: "对重复内容、无效页面、低质量文本、异常结果进行过滤处理，保证后续分析口径绝对一致与精确无误。",
            borderColor: "border-zinc-700/60",
            bgLight: "bg-[#141414]",
            textAccent: "text-zinc-400"
        },
        {
            id: '3',
            layer: "标签层",
            title: "结构化识别与标签化",
            icon: "layers",
            target: "拆解并映射至标准体系",
            desc: "细颗粒度提取品牌、产品、竞品、问题类型、回答倾向、提及位次等关键维度的隐性参数，实施标准化特征烙印。",
            borderColor: "border-zinc-700/60",
            bgLight: "bg-[#141414]",
            textAccent: "text-zinc-400"
        },
        {
            id: '4',
            layer: "分析层",
            title: "指标入库与决策输出",
            icon: "pie-chart",
            target: "沉淀统一评估指标体系",
            desc: "输出提及率、首位提及率、Top N入选率、竞品同场率及负面绑定率等指标，彻底赋能高阶业务决策。",
            borderColor: "border-zinc-700/60",
            bgLight: "bg-[#141414]",
            textAccent: "text-zinc-400"
        }
    ];

    const getIcon = (id) => {
        const props = { width: "100%", height: "100%", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
        switch(id) {
            case 'database': return <svg {...props}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
            case 'filter': return <svg {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>;
            case 'layers': return <svg {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
            case 'pie-chart': return <svg {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>;
            default: return null;
        }
    };

    return (
        <div className="w-full h-full bg-black relative overflow-hidden font-sans flex flex-col text-white">

            {/* Header Section */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-6 sm:pt-10 shrink-0 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-widest opacity-95">
                    数据清洗和结构化处理的技术流程
                </h1>

                <div className="mt-8 flex justify-center w-full">
                    <div className="relative bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 max-w-[1200px] shadow-2xl flex flex-col items-center text-center">
                        <h3 className="text-[20px] xl:text-[22px] font-black text-white mb-3 tracking-widest">
                            技术实现路径
                        </h3>
                        <p className="text-[17px] xl:text-[18px] text-zinc-400 leading-relaxed font-medium max-w-[1000px]">
                            整体采用<span className="text-zinc-200 font-bold mx-1">“采集层—清洗层—标签层—分析层”</span>的流程式架构：前端完成多源数据高并发采集，中间处理集群实现去重、纠错、标准化及精细化标签挂载，后端计算节点完成统一数据入库并持续产出监测报表。
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Process Pipeline */}
            <div className="relative z-10 flex-1 w-full px-12 pb-16 flex items-center mt-[10px]">
                
                {/* Connection Line Behind Cards */}
                <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-1 bg-zinc-800 rounded-full overflow-hidden hidden xl:block">
                    <div className="h-full w-[80%] bg-zinc-500 opacity-20"></div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative group">
                            
                            {/* Card Container */}
                            <div className={`h-full flex flex-col bg-[#0c0c0c]/80 backdrop-blur-xl border ${step.borderColor} rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]`}>
                                
                                {/* Step Header */}
                                <div className={`relative p-6 ${step.bgLight} border-b border-white/5`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-lg border-[1.5px] border-white/20 shadow-[0_4px_15px_rgba(255,255,255,0.05)_inset,0_4px_15px_rgba(0,0,0,0.5)] text-zinc-200 p-3 shrink-0`}>
                                            {getIcon(step.icon)}
                                        </div>
                                        <div className="text-[40px] font-black opacity-10 leading-none mr-2">
                                            0{step.id}
                                        </div>
                                    </div>
                                    <div className={`uppercase tracking-widest text-[14px] font-bold ${step.textAccent} mb-1 opacity-90`}>
                                        {step.layer}
                                    </div>
                                    <h3 className="text-[24px] xl:text-[26px] font-black text-white tracking-wide">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Step Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-[15px] text-zinc-300 font-bold mb-3 w-full">
                                            <span className="w-2 h-2 rounded-full bg-zinc-400 shrink-0"></span>
                                            {step.target}
                                        </div>
                                    </div>
                                    <p className="text-[17px] xl:text-[18px] text-zinc-400 leading-[1.7] font-medium flex-1">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>

                            {/* Arrow Indicator between cards (Desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden xl:flex absolute top-1/2 -right-6 lg:-right-8 w-6 h-6 items-center justify-center -translate-y-1/2 z-20 pointer-events-none">
                                    <svg className="w-8 h-8 text-zinc-500 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
