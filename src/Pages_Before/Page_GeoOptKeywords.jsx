import React from 'react';

export default function Page_GeoOptKeywords() {
    const platformData = [
        {
            id: 'baidu',
            name: '百度',
            color: 'from-cyan-500/20',
            borderColor: 'border-cyan-500/20',
            textColor: 'text-cyan-400',
            numColor: 'text-cyan-500/50',
            keywords: ["补钙产品什么时候吃最好", "补钙产品哪个牌子好", "补钙产品排行榜前十名", "老年人最好的补钙产品", "适合老年女性的补钙产品", "适合6岁孩子的补钙产品", "适合50岁女人补钙产品", "鹦鹉补钙最好的补钙产品", "第三代补钙产品", "补钙产品十大品牌"]
        },
        {
            id: 'baidu_mobile',
            name: '百度移动',
            color: 'from-sky-500/20',
            borderColor: 'border-sky-500/20',
            textColor: 'text-sky-300',
            numColor: 'text-sky-400/50',
            keywords: ["补钙产品哪种效果好", "补钙产品哪个牌子好", "补钙产品排行榜前十名", "适合老年女性的补钙产品", "老年人最好的补钙产品", "华北制药补钙产品", "适合6岁孩子的补钙产品", "适合50岁女人补钙产品", "鹦鹉补钙最好的补钙产品", "补钙产品评测"]
        },
        {
            id: 'sogou',
            name: '搜狗',
            color: 'from-amber-500/20',
            borderColor: 'border-amber-500/20',
            textColor: 'text-amber-400',
            numColor: 'text-amber-500/50',
            keywords: ["适合女生补钙的产品", "补钙产品什么时间吃", "补钙产品有什么", "补钙产品钙含量多少合适", "补钙产品过期能吃吗", "补钙产品吸收好", "补钙产品片状好还是液体好", "补钙产品前十名", "十大补钙食品排行", "补钙产品推荐"]
        },
        {
            id: 'zhihu',
            name: '知乎',
            color: 'from-blue-500/20',
            borderColor: 'border-blue-500/20',
            textColor: 'text-blue-400',
            numColor: 'text-blue-400/50',
            keywords: ["补钙产品有用吗", "补钙产品排行榜前十名", "补钙产品的销售话术一句话", "补钙产品推荐中老年", "补钙产品分类", "补钙产品市场调研报告", "补钙产品有必要买吗", "补钙产品推荐儿童", "补钙产品对比", "补钙产品哪种效果好"]
        },
        {
            id: 'taobao',
            name: '淘宝',
            color: 'from-orange-500/20',
            borderColor: 'border-orange-500/20',
            textColor: 'text-orange-400',
            numColor: 'text-orange-500/50',
            keywords: ["液体钙 补钙", "迪巧小粉条", "孕妇补钙 推荐", "成人女性补钙 易吸收", "补钙软糖 咀嚼片", "有机柠檬酸钙", "补钙 免吞咽", "中老年人补钙液", "儿童补钙 口服液", "进口补钙 保健品"]
        },
        {
            id: 'jd',
            name: '京东',
            color: 'from-red-500/20',
            borderColor: 'border-red-500/20',
            textColor: 'text-red-400',
            numColor: 'text-red-500/50',
            keywords: ["补钙产蛋饲料", "补钙产蛋王", "补钙产蛋料", "补钙产蛋粉", "补钙儿童4-17岁京东自营", "补钙儿童6-13岁个子增长", "补钙婴儿0-1岁", "补钙液体钙中老年", "补钙儿童3-6岁奶粉", "补钙产品钙含量"]
        },
        {
            id: 'xhs',
            name: '小红书',
            color: 'from-rose-500/20',
            borderColor: 'border-rose-500/20',
            textColor: 'text-rose-400',
            numColor: 'text-rose-400/50',
            keywords: ["补钙产品排行榜", "适合高中生补钙的产品推荐", "补钙产品什么时间吃", "补钙产品怎么选", "补钙产品马来西亚", "补钙产品什么时候吃", "补钙产品测评", "适合青少年补钙的产品推荐", "补钙产品海报", "补钙产品避坑指南"]
        },
        {
            id: 'douyin',
            name: '抖音',
            color: 'from-zinc-500/20',
            borderColor: 'border-white/10',
            textColor: 'text-white',
            numColor: 'text-white/40',
            keywords: ["补钙产品推荐", "补钙产品成人女性", "补钙吃什么食物", "补钙产品青少年", "补钙产品老年人", "补钙产品排行第一名", "补钙产品测评", "补钙产品广告", "补钙产蛋贝壳粉", "补钙选哪个牌子"]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">

            {/* ── Titles ── */}
            <div className="relative z-20 w-full flex flex-col items-center mt-6 lg:mt-6 flex-shrink-0">
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">各平台热搜词</h1>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 px-8 lg:px-16 pb-8 mt-4 min-h-0 relative z-10">
                {platformData.map((platform, idx) => (
                    <div key={idx} className={`flex flex-col bg-white/[0.02] backdrop-blur-md border ${platform.borderColor} rounded-xl overflow-hidden shadow-lg h-full`}>
                        {/* Header */}
                        <div className={`px-4 py-2.5 bg-gradient-to-r ${platform.color} to-transparent border-b ${platform.borderColor} flex items-center gap-2 shrink-0`}>
                            <img src={`/logo_${platform.id}.png`} alt={platform.name} className="w-5 h-5 object-contain rounded" />
                            <h2 className={`text-[1.05rem] font-bold ${platform.textColor} tracking-widest`}>{platform.name}</h2>
                        </div>
                        {/* List */}
                        <div className="flex flex-col flex-1 justify-around px-3 pt-2 pb-3 gap-0 overflow-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {platform.keywords.map((kw, i) => (
                                <div key={i} className="flex items-center gap-3 py-1 px-2 rounded hover:bg-white/5 transition-colors group">
                                    <span className={`font-mono text-[0.85rem] w-4 text-right shrink-0 ${platform.numColor} group-hover:text-white transition-colors`}>{i + 1}.</span>
                                    <span className="text-white/85 text-[0.8rem] sm:text-[0.85rem] leading-tight truncate">{kw}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>



            <style jsx>{`
                .flex-1::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
