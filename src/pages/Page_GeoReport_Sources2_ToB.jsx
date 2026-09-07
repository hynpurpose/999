import React from 'react';

const RANKINGS = [
    { name: '小荷健康', value: '27.7%', pct: 100 },
    { name: '医药信息查询平台', value: '5.6%', pct: 20 },
    { name: '夸克', value: '5.3%', pct: 19 },
    { name: '蚂蚁阿福文献库', value: '5.1%', pct: 18 },
    { name: '神马搜索', value: '4.3%', pct: 16 },
];

const INSIGHTS = [
    {
        title: '信源与 C 端高度同构，渠道产业内容几乎缺席',
        accent: '#004CE5',
        body: 'B 端引用池同样由小荷健康（27.7%）主导，后面是医药信息查询平台、夸克、蚂蚁阿福文献库与神马，与 C 端几乎是同一批消费向信源。医院配备、药店主推、进货采购类可核验渠道内容尚未进入大模型的抓取池。',
    },
    {
        title: '高引用文章全是临床指南，与渠道决策脱节',
        accent: '#F59E0B',
        body: '引用次数最高的三篇分别是慢性胃炎诊治指南（85 次）、胃痛中医诊疗专家共识（81 次）与萎缩性胃炎诊疗指南（78 次），均未提及养胃舒颗粒。若不在指南解读与渠道产业内容上同时布局单品级素材，AI 会继续把「首选」写给三九胃泰或胃苏颗粒。',
    },
];

export default function Page_GeoReport_Sources2_ToB() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10 min-h-0">
                <div className="text-center mb-4 mt-[-20px] shrink-0">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        引用源健康度与诊断 · B端
                    </h1>
                </div>

                <div className="flex-1 min-h-0 grid grid-cols-12 gap-6 pt-5">
                    <div className="col-span-12 lg:col-span-6 min-h-0 flex flex-col">
                        <div className="flex-1 min-h-0 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 lg:p-6 flex flex-col gap-4">
                            <h3 className="shrink-0 text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                引用源健康度评估
                            </h3>

                            <div className="flex-[1.05] min-h-0 flex flex-col justify-between text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed">
                                <p className="text-justify">
                                    监测数据显示，决定<strong className="text-white font-semibold">养胃舒颗粒</strong>在 B 端 AI
                                    问答中表现的最底层数据抓取来源，呈现出
                                    <strong className="text-white font-semibold">“医疗垂类平台 + 医药信息站 + 搜索引擎”</strong>特点。
                                </p>
                                <p className="text-justify">
                                    排名前三的引用平台分别为：
                                    <strong className="text-white font-bold">小荷健康 (27.7%)</strong>、
                                    <strong className="text-white font-bold">医药信息查询平台 (5.6%)</strong>和
                                    <strong className="text-white font-bold">夸克 (5.3%)</strong>。
                                </p>
                                <p className="text-justify border-t border-white/10 pt-3">
                                    这说明 B 端选品问答依然靠消费向的医疗内容在支撑。若不能在这些渠道稳定输出医院配备、药店主推、医保可及等渠道证据，AI 推荐仍会偏向三九胃泰、胃苏颗粒等既有强势品。
                                </p>
                            </div>

                            <div className="flex-1 min-h-0 bg-black/30 border border-white/5 rounded-xl px-4 py-3.5 flex flex-col">
                                <div className="shrink-0 text-[13px] text-zinc-500 font-semibold tracking-wider uppercase mb-2">
                                    TOP 5 引用平台份额对比
                                </div>
                                <div className="flex-1 min-h-0 flex flex-col justify-evenly gap-1">
                                    {RANKINGS.map((item) => (
                                        <div key={item.name} className="flex items-center justify-between gap-4">
                                            <div className="w-40 text-[15px] lg:text-[16px] text-zinc-400 truncate font-medium">
                                                {item.name}
                                            </div>
                                            <div className="flex-1 bg-white/5 h-2.5 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-[#004CE5] to-[#00c6ff] rounded-full"
                                                    style={{ width: `${item.pct}%` }}
                                                />
                                            </div>
                                            <div className="w-12 text-right text-[15px] lg:text-[16px] text-white font-bold">
                                                {item.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6 min-h-0 flex flex-col">
                        <div className="flex-1 min-h-0 bg-gradient-to-br from-[#004CE5]/10 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl p-5 lg:p-6 flex flex-col gap-4 shadow-[0_0_25px_rgba(0,76,229,0.06)]">
                            <h3 className="shrink-0 text-[26px] lg:text-[28px] font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                诊断与洞察
                            </h3>

                            <div className="flex-1 min-h-0 flex flex-col gap-4">
                                {INSIGHTS.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex-1 min-h-0 rounded-r-xl border border-white/5 bg-white/[0.03] px-5 py-4 lg:px-6 lg:py-5 flex flex-col justify-center"
                                        style={{ borderLeft: `4px solid ${item.accent}` }}
                                    >
                                        <h4 className="text-[18px] lg:text-[20px] font-bold text-white leading-tight mb-2.5">
                                            {item.title}
                                        </h4>
                                        <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-zinc-300 leading-relaxed text-justify">
                                            {item.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
