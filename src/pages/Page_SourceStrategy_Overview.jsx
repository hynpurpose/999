import React from 'react';
import { Video, Database, Landmark, Newspaper, Radar } from 'lucide-react';

const ROWS = [
    {
        icon: Video,
        tag: '抖音',
        sub: '医生 / 药师 KOL',
        action: '让认证医生、药师拍 1 分钟以内的科普短视频',
        steps: ['前 5 秒先把品牌和药品名说出来，最后 10 秒把结论再说一遍', '医生个人号比机构号更容易被 AI 引用'],
        lever: '现成的高权重账号资源',
        proof: '豆包 76.1% 的答案引自抖音视频，一个月前只有 8.7%；视频一长，中段 AI 根本不看',
    },
    {
        icon: Database,
        tag: '医疗 / AI 平台',
        sub: '小荷健康等',
        action: '先把药品词条核对准确，再和平台官方共建内容',
        steps: ['通用名、适应症、用法等 12 项逐条核对', '新药收录单品 10–20 万，可落科普、问答与专家内容'],
        lever: '小荷等平台合作通道',
        proof: 'AI 引用小荷时，87.78% 抽的都是药品说明书，不是软文',
    },
    {
        icon: Landmark,
        tag: '权威媒体',
        sub: '人民网 / 新华网等',
        action: '先和官方信息对齐，再上央媒发稿',
        steps: ['批文、说明书、医保状态逐项核对（药监局这类只能对齐，没法投放）', '人民网、新华网健康频道署名发稿，再做转载'],
        lever: '央媒健康频道发稿资源',
        proof: '信息对不上，AI 直接不推荐这个品牌；央媒背书能让 AI 更愿采信',
    },
    {
        icon: Newspaper,
        tag: '其他媒体',
        sub: '常规文章投放',
        action: '7 成发专业医疗网站，3 成发社媒',
        steps: ['专业网站负责把适应症、用法讲准确', '社媒负责覆盖患者的口语问法'],
        lever: '已筛好的投放网站名单',
        proof: '四个主流 AI 都在引用的网站，已经筛出三组名单',
    },
    {
        icon: Radar,
        tag: '日常监测',
        sub: '提及 · 推荐 · 引用',
        action: '每天盯着 AI 提没提你、推荐了谁、引用了哪些网站',
        steps: ['信源一变，当天调整投放', '负面信息和错误价格同步排查处理'],
        lever: '自研监测系统 GEO ONE',
        proof: '豆包 7 月 4 日信源大换血，我们当天就发现了',
    },
];

export default function Page_SourceStrategy_Overview() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}
                />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center text-center pt-10 pb-7 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest">面对不同信源怎么做</h1>
            </div>

            <div className="flex-1 relative z-10 w-full max-w-[1620px] mx-auto flex flex-col px-6 lg:px-10 min-h-0">
                <div className="flex-1 min-h-0 flex flex-col rounded-2xl border border-white/15 overflow-hidden bg-white/[0.02]">
                    {/* 表头 */}
                    <div className="shrink-0 grid grid-cols-[280px_1fr_260px_390px] bg-white/[0.07] border-b border-white/15">
                        {['在哪个信源', '品牌该做什么', '我们有什么', '为什么这么做'].map((h, i) => (
                            <span
                                key={h}
                                className={`text-[1.1rem] font-bold text-white/90 tracking-widest px-7 py-3.5 ${
                                    i > 0 ? 'border-l border-white/10' : ''
                                }`}
                            >
                                {h}
                            </span>
                        ))}
                    </div>

                    {/* 表体 */}
                    {ROWS.map((row) => {
                        const Icon = row.icon;
                        return (
                            <div
                                key={row.tag}
                                className="flex-1 min-h-0 grid grid-cols-[280px_1fr_260px_390px] border-t border-white/10 first:border-t-0"
                            >
                                <div className="flex items-center gap-4 min-w-0 px-6">
                                    <span className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center bg-[#004CE5]/20 text-[#4C8DFF]">
                                        <Icon size={22} />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-[1.4rem] font-bold leading-tight text-white">{row.tag}</p>
                                        <p className="text-[0.95rem] text-zinc-500 leading-tight mt-0.5">{row.sub}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center min-w-0 px-7 border-l border-white/10">
                                    <p className="text-[1.28rem] font-bold text-white leading-snug">{row.action}</p>
                                    <div className="mt-2 flex flex-col gap-1">
                                        {row.steps.map((s) => (
                                            <div key={s} className="flex items-start gap-2.5">
                                                <span className="shrink-0 w-1.5 h-1.5 rounded-full mt-[0.5rem] bg-[#4C8DFF]" />
                                                <p className="text-[1.02rem] text-zinc-400 leading-snug">{s}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center min-w-0 px-7 border-l border-white/10">
                                    <p className="text-[1.15rem] font-medium leading-snug text-blue-100/90">{row.lever}</p>
                                </div>

                                <div className="flex items-center min-w-0 px-7 border-l border-white/10">
                                    <p className="text-[1.1rem] text-zinc-300 leading-snug">{row.proof}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[1620px] mx-auto px-6 lg:px-10 pt-4 pb-7 shrink-0">
                <p className="text-center text-[1.25rem] font-bold text-white leading-snug">
                    这五件事不用找五家公司——<span className="text-[#4C8DFF]">从监测、写内容到投放，我们一个团队全做</span>
                    <span className="text-zinc-500 font-medium">，而且同类产品只服务一家</span>
                </p>
            </div>
        </div>
    );
}
