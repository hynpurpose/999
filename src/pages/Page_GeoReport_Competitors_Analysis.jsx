import React from 'react';
import RankPanel from '../components/geoone/RankPanel';

/* ══════════════ 数据：换竞品排名时只改这一段 ══════════════ */
/* 来源：GEO ONE 457 ToC · mention-rate / top1 / top3 全量榜（共 296 项），2026-08-14 ~ 08-20 */

/* 展示规则：前 4 名为全量榜头部；第 5 行钉住目标产品，rank 取全量榜真实名次（不是列表序号） */
/* 同名不同厂的条目在名称后标注厂家，避免看起来像重复行 */
const COLUMNS = [
    {
        "title": "提及率排名",
        "subtitle": "产品或品牌在AI生态中提及率排名",
        "valueLabel": "提及率",
        "rows": [
            {
                "name": "三九胃泰颗粒",
                "value": "22.4%",
                "rank": 1,
                "target": false
            },
            {
                "name": "铝碳酸镁咀嚼片",
                "value": "13.6%",
                "rank": 2,
                "target": false
            },
            {
                "name": "多潘立酮片",
                "value": "7.4%",
                "rank": 3,
                "target": false
            },
            {
                "name": "胃苏颗粒",
                "value": "6.8%",
                "rank": 4,
                "target": false
            },
            {
                "name": "养胃舒颗粒",
                "value": "1.4%",
                "rank": 19,
                "target": true
            }
        ]
    },
    {
        "title": "Top1 提及率排名",
        "subtitle": "产品或品牌在AI生态中Top1提及率排名",
        "valueLabel": "Top1提及率",
        "rows": [
            {
                "name": "铝碳酸镁咀嚼片",
                "value": "6%",
                "rank": 1,
                "target": false
            },
            {
                "name": "三九胃泰颗粒",
                "value": "3.1%",
                "rank": 2,
                "target": false
            },
            {
                "name": "健胃消食片",
                "value": "1.4%",
                "rank": 3,
                "target": false
            },
            {
                "name": "铝碳酸镁咀嚼片（达喜）",
                "value": "0.8%",
                "rank": 4,
                "target": false
            },
            {
                "name": "养胃舒颗粒",
                "value": "0%",
                "rank": 57,
                "target": true
            }
        ]
    },
    {
        "title": "Top3 提及率排名",
        "subtitle": "产品或品牌在AI生态中Top3提及率排名",
        "valueLabel": "Top3提及率",
        "rows": [
            {
                "name": "铝碳酸镁咀嚼片",
                "value": "7.2%",
                "rank": 1,
                "target": false
            },
            {
                "name": "三九胃泰颗粒",
                "value": "6.1%",
                "rank": 2,
                "target": false
            },
            {
                "name": "胃苏颗粒",
                "value": "2.5%",
                "rank": 3,
                "target": false
            },
            {
                "name": "健胃消食片",
                "value": "2%",
                "rank": 4,
                "target": false
            },
            {
                "name": "养胃舒颗粒",
                "value": "0.5%",
                "rank": 15,
                "target": true
            }
        ]
    }
];

export default function Page_GeoReport_Competitors_Analysis() {
    return (
        <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-5 pb-10 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full flex flex-col h-full relative z-10 pt-0 gap-3">
                <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-white tracking-widest leading-none">
                        竞品横向对比
                    </h1>
                </div>

                <div className="flex-1 w-full max-h-[46vh] min-h-0 mb-3 flex items-center justify-center overflow-hidden rounded-xl bg-white">
                    <RankPanel columns={COLUMNS} />
                </div>

                <div className="h-[32%] min-h-[180px] max-h-[240px] shrink-0 grid grid-cols-12 gap-5">
                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-4 pb-3 px-5 sm:pt-4 sm:pb-3.5 sm:px-6 flex flex-col h-full justify-start gap-2">
                            <h3 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                核心发现
                            </h3>
                            <div className="flex-grow text-[16px] lg:text-[18px] xl:text-[20px] text-white leading-relaxed text-justify">
                                养胃舒颗粒 C 端提及率 1.4%，影响力排名第 17 / 296；头部由三九胃泰颗粒（22.4%）、铝碳酸镁咀嚼片、多潘立酮片占据，本品只在品牌榜单类问法里露出。
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl pt-4 pb-3 px-5 sm:pt-4 sm:pb-3.5 sm:px-6 flex flex-col h-full justify-start gap-2">
                            <h3 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                竞争格局总结
                            </h3>
                            <div className="flex-grow text-[16px] lg:text-[18px] xl:text-[20px] text-white leading-relaxed text-justify">
                                Top 1 首推率 0%（全量榜第 57）、Top 3 提及率 0.5%（第 15），而铝碳酸镁咀嚼片 7.2%、同门三九胃泰颗粒 6.1%——本品既进不了首推，也很少留在前三。
                            </div>
                        </div>
                    </div>

                    <div className="col-span-4 flex flex-col min-h-0">
                        <div className="bg-gradient-to-br from-[#004CE5]/08 to-white/[0.01] backdrop-blur-xl border border-[#004CE5]/30 rounded-2xl pt-4 pb-3 px-5 sm:pt-4 sm:pb-3.5 sm:px-6 flex flex-col h-full justify-start gap-2 shadow-[0_0_20px_rgba(0,76,229,0.05)]">
                            <h3 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white shrink-0 flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-4 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
                                行动建议
                            </h3>
                            <div className="flex-grow text-[16px] lg:text-[18px] xl:text-[20px] text-white leading-relaxed text-justify">
                                榜单类问法已经站住，下一步把单品名写进「慢性胃炎调理 / 胃热灼痛 / 熬夜人群」等症状与人群答案，并用证型边界内容区分三九胃泰，再攻坚 Top 1。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
