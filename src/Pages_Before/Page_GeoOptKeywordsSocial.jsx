import React from 'react';

export default function Page_GeoOptKeywordsSocial() {

    // --- Xiaohongshu Data (Red Theme) ---
    const xhsSearchData = [
        { keyword: "1. 补钙产品推荐", type: "泛需种草", volume: "345.2w" },
        { keyword: "2. 补钙产品排行榜", type: "购买决策", volume: "284.1w" },
        { keyword: "3. 适合高中生补钙的产品推荐", type: "人群细分", volume: "198.5w" },
        { keyword: "4. 补钙产品怎么选", type: "知识科普", volume: "172.3w" },
        { keyword: "5. 补钙产品什么时间吃", type: "服用指导", volume: "156.4w" },
        { keyword: "6. 补钙产品什么时候吃", type: "服用指导", volume: "125.8w" },
        { keyword: "7. 补钙产品测评", type: "横线对比", volume: "98.6w" },
        { keyword: "8. 医生推荐的儿童补钙产品", type: "权威背书", volume: "85.2w" },
        { keyword: "9. 适合青少年补钙的产品推荐", type: "人群细分", volume: "64.1w" },
        { keyword: "10. 成人补钙产品推荐", type: "人群细分", volume: "45.7w" }
    ];

    const xhsTopicData = [
        { topic: "# 补钙推荐", trait: "全品类知识科普，提供人群补钙经验", views: "14.5亿" },
        { topic: "# 液体钙", trait: "年轻消费新趋势，主打高吸收免吞咽", views: "8.8亿" },
        { topic: "# 孕妇补钙", trait: "母婴极客人群，强调安全成分与零添加", views: "5.2亿" },
        { topic: "# 儿童长高秘籍", trait: "宝妈群体刚需，身高焦虑驱动口碑分享", views: "3.5亿" },
        { topic: "# 骨质疏松", trait: "中老年隐患防护前置，保健意识觉醒", views: "2.1亿" },
        { topic: "# 迪巧小粉条", trait: "品牌单品内容种草，搜索转化效率极高", views: "1.7亿" },
        { topic: "# 补钙怎么选", trait: "成分党横向测评对比，树立专业人设", views: "8562.6w" },
        { topic: "# 上班族养生", trait: "办公桌健康好物，轻量级场景高频植入", views: "6543.4w" }
    ];

    // --- Douyin Data (Cyan/Dark Blue Theme) ---
    const douyinSearchData = [
        { keyword: "1. 补钙吃什么食物", type: "健康科普", volume: "845.2w" },
        { keyword: "2. 补钙产品测评", type: "开箱实测", volume: "756.1w" },
        { keyword: "3. 补钙产品推荐", type: "直观种草", volume: "623.5w" },
        { keyword: "4. 液体钙哪个牌子好", type: "选购依据", volume: "512.4w" },
        { keyword: "5. 孕妇缺钙的症状", type: "痛点对症", volume: "485.6w" },
        { keyword: "6. 儿童长高补钙", type: "育儿教育", volume: "396.2w" },
        { keyword: "7. 中老年防骨折补钙", type: "特殊关爱", volume: "345.8w" },
        { keyword: "8. 迪巧液体钙好不好", type: "品牌检索", volume: "285.4w" },
        { keyword: "9. 最安全的补钙产品", type: "安全防雷", volume: "194.2w" },
        { keyword: "10. 补钙产品排行第一", type: "跟风拔草", volume: "158.5w" }
    ];

    const douyinTopicData = [
        { topic: "# 补钙", trait: "全网通用极大词，覆盖海量泛健康流量", views: "189.2亿" },
        { topic: "# 医生讲骨骼", trait: "医疗白大褂硬核背书，转化高信任群体", views: "54.7亿" },
        { topic: "# 补钙测评", trait: "营养师横评，直接引导直播间小黄车", views: "41.5亿" },
        { topic: "# 液体钙推荐", trait: "短平快的剧情展示，直接打透好喝不卡嗓", views: "25.2亿" },
        { topic: "# 孕期囤货", trait: "母婴好物分享大全，达人矩阵集体宣发", views: "18.9亿" },
        { topic: "# 养生小妙招", trait: "下沉资讯短片分发，迅速积累庞大泛播放", views: "15.6亿" },
        { topic: "# 长高宝典", trait: "配合成长科普内容一起输出，完播率极高", views: "10.8亿" },
        { topic: "# 迪巧小粉条", trait: "官方全民任务挑战赛，实现破圈级曝光", views: "9.5亿" }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Titles ── */}
            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-6 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">社媒数据</h1>
            </div>

            {/* ── Main Content Area (Two Columns) ── */}
            <div className="flex-1 relative z-10 w-full flex items-start justify-center px-8 lg:px-10 pb-4 min-h-0 container mx-auto mt-4 gap-6 overflow-hidden">

                {/* Left Column: Xiaohongshu (Red) */}
                <div className="flex-1 h-full flex flex-col gap-4 overflow-hidden">
                    {/* Header */}
                    <div className="w-full flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center overflow-hidden">
                            <img src="/logo_xhs.png" alt="小红书" className="w-6 h-6 object-contain" />
                        </div>
                        <h2 className="text-xl font-bold text-red-300 tracking-wide">小红书数据概览</h2>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-red-500/20 to-transparent ml-2" />
                    </div>

                    {/* XHS Table 1: Search Keywords */}
                    <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-red-500/20 rounded-2xl shadow-[-5px_0_20px_rgba(239,68,68,0.05)] shrink-0">
                        <div className="px-4 py-2 border-b border-red-500/20 bg-red-500/[0.08] shrink-0">
                            <h3 className="text-[1rem] font-bold text-red-200">高频长尾搜索词 (Top 10)</h3>
                        </div>
                        <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70">搜索词</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70">需求分类</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70 text-right">预估热度</div>
                        </div>
                        <div className="w-full flex flex-col text-[0.85rem]">
                            {xhsSearchData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.5fr_1fr_1fr] ${idx !== xhsSearchData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full shrink-0`}>
                                    <div className="py-1 px-3 flex items-center shrink-0 border-r border-white/5">
                                        <div className="font-semibold text-white/90 truncate">{item.keyword}</div>
                                    </div>
                                    <div className="py-1 px-3 text-zinc-300 border-r border-white/5 flex items-center">
                                        <span className="bg-red-500/10 text-red-200/90 px-1.5 py-0.5 rounded text-[0.75rem]">{item.type}</span>
                                    </div>
                                    <div className="py-1 px-3 text-red-300/80 font-mono text-right flex items-center justify-end">
                                        {item.volume}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* XHS Table 2: Topics */}
                    <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-red-500/20 rounded-2xl shadow-[-5px_0_20px_rgba(239,68,68,0.05)] shrink-0">
                        <div className="px-4 py-2 border-b border-red-500/20 bg-red-500/[0.08] shrink-0">
                            <h3 className="text-[1rem] font-bold text-red-200">高点击话题与痛点交叉 (Top 8)</h3>
                        </div>
                        <div className="grid grid-cols-[1.2fr_1.5fr_0.8fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70">热门话题标签</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70">内容切入策略 (AI语境)</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-red-200/70 text-right">全网浏览量</div>
                        </div>
                        <div className="w-full flex flex-col text-[0.85rem]">
                            {xhsTopicData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.2fr_1.5fr_0.8fr] ${idx !== xhsTopicData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full shrink-0`}>
                                    <div className="py-1 px-3 flex items-start border-r border-white/5">
                                        <div className="font-semibold text-red-100 leading-snug">{item.topic}</div>
                                    </div>
                                    <div className="py-1 px-3 text-zinc-300 leading-relaxed text-[0.8rem] border-r border-white/5">
                                        {item.trait}
                                    </div>
                                    <div className="py-1 px-3 text-red-300/80 font-mono text-right flex items-start justify-end">
                                        {item.views}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Right Column: Douyin (Cyan/Dark Blue) */}
                <div className="flex-1 h-full flex flex-col gap-4 overflow-hidden">
                    {/* Header */}
                    <div className="w-full flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center overflow-hidden">
                            <img src="/logo_douyin.png" alt="抖音" className="w-6 h-6 object-contain" />
                        </div>
                        <h2 className="text-xl font-bold text-cyan-300 tracking-wide">抖音数据概览</h2>
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent ml-2" />
                    </div>

                    {/* Douyin Table 1: Search Keywords */}
                    <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[5px_0_20px_rgba(6,182,212,0.05)] shrink-0">
                        <div className="px-4 py-2 border-b border-cyan-500/20 bg-cyan-500/[0.08] shrink-0">
                            <h3 className="text-[1rem] font-bold text-cyan-200">视频下拉高优搜索词 (Top 10)</h3>
                        </div>
                        <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70">搜索词</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70">视频属性分类</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70 text-right">预估热度</div>
                        </div>
                        <div className="w-full flex flex-col text-[0.85rem]">
                            {douyinSearchData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.5fr_1fr_1fr] ${idx !== douyinSearchData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full shrink-0`}>
                                    <div className="py-1 px-3 flex items-center shrink-0 border-r border-white/5">
                                        <div className="font-semibold text-white/90 truncate">{item.keyword}</div>
                                    </div>
                                    <div className="py-1 px-3 text-zinc-300 border-r border-white/5 flex items-center">
                                        <span className="bg-cyan-500/10 text-cyan-200/90 px-1.5 py-0.5 rounded text-[0.75rem]">{item.type}</span>
                                    </div>
                                    <div className="py-1 px-3 text-cyan-300/80 font-mono text-right flex items-center justify-end">
                                        {item.volume}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Douyin Table 2: Topics */}
                    <div className="w-full flex flex-col bg-white/[0.02] backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[5px_0_20px_rgba(6,182,212,0.05)] shrink-0">
                        <div className="px-4 py-2 border-b border-cyan-500/20 bg-cyan-500/[0.08] shrink-0">
                            <h3 className="text-[1rem] font-bold text-cyan-200">爆款话题与种草矩阵 (Top 8)</h3>
                        </div>
                        <div className="grid grid-cols-[1.2fr_1.5fr_0.8fr] bg-white/[0.02] border-b border-white/10 w-full shrink-0">
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70">热门精选话题</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70">短视频算法引流策略</div>
                            <div className="py-1.5 px-3 text-[0.85rem] font-bold text-cyan-200/70 text-right">累计播放量</div>
                        </div>
                        <div className="w-full flex flex-col text-[0.85rem]">
                            {douyinTopicData.map((item, idx) => (
                                <div key={idx} className={`grid grid-cols-[1.2fr_1.5fr_0.8fr] ${idx !== douyinTopicData.length - 1 ? 'border-b border-white/[0.05]' : ''} hover:bg-white/[0.02] transition-colors w-full shrink-0`}>
                                    <div className="py-1 px-3 flex items-start border-r border-white/5">
                                        <div className="font-semibold text-cyan-100 leading-snug">{item.topic}</div>
                                    </div>
                                    <div className="py-1 px-3 text-zinc-300 leading-relaxed text-[0.8rem] border-r border-white/5">
                                        {item.trait}
                                    </div>
                                    <div className="py-1 px-3 text-cyan-300/80 font-mono text-right flex items-start justify-end">
                                        {item.views}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


            <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-gradient-to-l from-cyan-500 to-transparent opacity-80 z-20" />

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}} />
        </div>
    );
}
