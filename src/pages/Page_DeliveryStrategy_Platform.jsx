import React from 'react';

export default function Page_DeliveryStrategy_Platform() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white pattern-bg">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-8 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">跟小众垂直平台深度合作</h1>
                <p className="text-[1.1rem] lg:text-[1.2rem] text-zinc-300 font-medium tracking-wide">
                    在健康领域寻找一个百科、选购、品牌的专业性垂直网站-复禾健康网
                </p>
            </div>

            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-center px-8 lg:px-16 pt-8 pb-10 min-h-0 gap-6">

                {/* Browser Window Chrome container */}
                <div className="w-full max-w-[1200px] flex-1 flex flex-col bg-[#1e1e1e] border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden shrink-0 min-h-0 relative">

                    {/* Top Bar Navigation */}
                    <div className="w-full h-10 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 shrink-0 relative z-20">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="px-5 py-1 bg-[#1a1a1a] rounded text-white/30 text-[11px] font-mono tracking-widest flex items-center border border-white/5">www.bingxiangpaiming.com</div>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="w-full flex-1 relative flex items-center justify-center overflow-hidden bg-black/40">
                        <img
                            src="/charts/geo-delivery-strategy-site.png"
                            alt="自建高权重平台"
                            className="w-full h-full object-contain block"
                            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
                        />
                        <div className="hidden flex-col items-center justify-center w-full h-full text-zinc-600">
                            <div className="w-16 h-16 mb-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
                                <span className="font-mono text-xl opacity-50">IMG</span>
                            </div>
                            <span className="text-sm tracking-widest uppercase">战略图谱占位区域</span>
                        </div>
                    </div>
                </div>

                {/* Strategy Text Below */}
                <div className="w-full max-w-[1100px] text-center px-4 shrink-0">
                    <p className="text-[1.15rem] lg:text-[1.25rem] text-zinc-300 leading-relaxed font-light tracking-wide text-justify">
                        <strong className="text-blue-400 font-bold mr-2 text-[1.25rem] lg:text-[1.35rem]">策略解析：</strong>
                        建立不受竞品干扰的绝对主场阵地。此站既可强势截留高意向用户的自然搜索流量，更是高权重的独立信源。通过事实性的高质量测评语料，它能定向反向喂养各大AI搜索模型，从内容源头锁定方太的绝对身位优势。
                    </p>
                </div>
            </div>
        </div>
    );
}
