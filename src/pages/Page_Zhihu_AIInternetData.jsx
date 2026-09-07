import React from 'react';

export default function Page_Zhihu_AIInternetData() {
    const tableData = [
        { model: 'ChatGPT', source: 'Bing', level: '较明确' },
        { model: 'Google Gemini', source: 'Google Search', level: '明确' },
        { model: 'Perplexity', source: 'Perplexity 自有搜索索引', level: '明确' },
        { model: 'DeepSeek', source: '官方已上线联网搜索，但未见官方明确公开具体外部搜索引擎名称', level: '只能确认有联网搜索，不能确认具体引擎' },
        { model: '豆包', source: '官方可确认有 AI 搜索/联网检索，但未见官方明确公开具体外部搜索引擎名称', level: '只能确认有联网检索，不能确认具体引擎' },
        { model: '腾讯元宝', source: '可确认整合腾讯生态内容源；未见官方明确公开统一外部搜索引擎名称', level: '能确认内容源类型，不能完全确认统一搜索引擎品牌' },
        { model: '阿里通义千问', source: '阿里云自家的联网搜索 / UnifiedSearch（IQS）体系', level: '较明确' },
        { model: '百度文心', source: '百度搜索', level: '明确' },
    ];

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
                    AI 模型调用互联网数据跟人用百度谷歌搜索一样吗？
                </h1>

                {/* Simplified Intro Box */}
                <div className="w-full max-w-[1600px] mt-4 bg-zinc-900/40 border border-blue-500/20 rounded-2xl p-6 lg:p-8 shadow-lg backdrop-blur-md text-left leading-relaxed relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <p className="text-[18px] xl:text-[21px] text-white/80 relative z-10 m-0">
                        <span className="font-black text-blue-400 mr-3 text-[19px] xl:text-[22px]">核心机理：</span>
                        AI 模型同样依赖搜索引擎，但它们不经过网页，而是<strong className="text-white font-bold">直接调用底层 Search API</strong>，从而实现远超人类的检索抓取速度。<br />
                        但由于各大AI公司的技术与商业战略不同，其接入的底层搜索引擎也会不一样且部分不向公众披露细节。
                    </p>
                </div>
            </div>

            {/* Main Content Area: Table */}
            <div className="flex-1 relative z-10 w-full flex flex-col items-center justify-start px-8 lg:px-16 pt-8 pb-10 min-h-0 overflow-hidden">
                <div className="w-full max-w-[1600px] flex-1 flex flex-col overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-blue-500/20 rounded-[24px] shadow-[0_10px_40px_rgba(59,130,246,0.05)]">

                    {/* Header Row */}
                    <div className="grid grid-cols-[200px_1fr_1fr] xl:grid-cols-[250px_1.5fr_1fr] bg-white/[0.04] border-b border-blue-500/30 shrink-0 w-full">
                        <div className="py-4 xl:py-5 px-5 xl:px-8 text-[1.05rem] xl:text-[1.15rem] font-bold text-blue-300 tracking-wider flex items-center justify-center">模型 / 产品</div>
                        <div className="py-4 xl:py-5 px-5 xl:px-8 border-l border-white/10 text-[1.05rem] xl:text-[1.15rem] font-bold text-blue-300 tracking-wider flex items-center">公开可确认的搜索来源</div>
                        <div className="py-4 xl:py-5 px-5 xl:px-8 border-l border-white/10 text-[1.05rem] xl:text-[1.15rem] font-bold text-blue-300 tracking-wider flex items-center">能确认的程度</div>
                    </div>

                    {/* Table Body */}
                    <div className="w-full flex-1 overflow-hidden flex flex-col">
                        <div className="flex flex-col flex-1">
                            {tableData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[200px_1fr_1fr] xl:grid-cols-[250px_1.5fr_1fr] group ${idx !== tableData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.03] transition-colors w-full flex-1`}>
                                    <div className="py-2 xl:py-3 px-5 xl:px-8 flex items-center justify-center shrink-0">
                                        <div className="font-bold text-white text-[1.05rem] xl:text-[1.15rem] whitespace-nowrap">{item.model}</div>
                                    </div>
                                    <div className="py-2 xl:py-3 px-5 xl:px-8 border-l border-white/5 flex items-center text-zinc-300 leading-relaxed font-medium text-[0.95rem] xl:text-[1.05rem]">
                                        {item.source}
                                    </div>
                                    <div className="py-2 xl:py-3 px-5 xl:px-8 border-l border-white/5 flex items-center text-white/70 leading-relaxed font-medium text-[0.95rem] xl:text-[1.05rem]">
                                        <span className={item.level === '明确' || item.level === '较明确' ? 'text-blue-400 font-bold' : ''}>
                                            {item.level}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                /* 移除了自定义滚动条代码，因为已经不再需要滚动展示 */
            `}} />
        </div>
    );
}
