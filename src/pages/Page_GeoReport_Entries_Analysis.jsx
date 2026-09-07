import React from 'react';

/* ══════════════ 数据：换词条洞察时只改这一段 ══════════════ */
/* 来源：GEO ONE 项目 457 三九养胃舒颗粒-ToC① / 35 个监测词条 · 5 个平台 · 1,225 次会话 · 2026-08-14 ~ 08-20 */

/* 文案长度按卡片列宽调过：每条控制在 1 行或 2 行且末行留足字数，避免出现孤字成行 */
const CARDS = [
    {
        no: '01',
        title: '优势词条',
        accent: '#10B981',
        lead: '35 个词条里只有 4 个有露出，且全部集中在品牌榜单类问法。',
        metrics: [
            { v: '4 / 35', l: '词条有非零提及' },
            { v: '22.9%', l: '最高单条提及率' },
            { v: '3.7%', l: '元宝平台提及率' },
        ],
        points: [
            '「养胃中成药品牌排行榜」提及率 22.9%、位次 NO. 5.7，是目前最强的承接面。',
            '「大品牌正规药企的养胃药推荐」11.4%、「养胃药品牌推荐」8.6% 紧随其后。',
            '优势平台只有元宝 3.7% 与 DeepSeek 3.3%，另外三个平台全是 0%。',
            '被提到时排位并不差：平均位次 NO. 4.8，全量位次榜第 13 / 296。',
        ],
        chips: ['品牌排行榜', '正规药企', '元宝', 'DeepSeek'],
    },
    {
        no: '02',
        title: '弱势词条',
        accent: '#F59E0B',
        lead: '31 个词条提及率为 0，缺口覆盖了几乎全部真实选药场景。',
        metrics: [
            { v: '31 / 35', l: '词条提及率为 0' },
            { v: '0%', l: '豆包 / 通义 / 阿福' },
            { v: '0%', l: 'Top1 首推率' },
        ],
        points: [
            '症状与证型词全部空白：慢性胃炎调理、胃热灼痛、滋阴养胃都没命中。',
            '人群场景词同样全是 0：熬夜加班、三餐不规律、中老年、喝酒应酬等。',
            '入口大词「养胃药有哪些 / 养胃中成药有哪些」为 0，选型场景被三九胃泰和铝碳酸镁占满。',
            '豆包、通义千问、蚂蚁阿福三个平台完全零露出，内容还没进入它们的抓取池。',
        ],
        chips: ['慢性胃炎', '胃热灼痛', '人群场景', '多平台零露出'],
    },
    {
        no: '03',
        title: '关键矛盾',
        accent: '#004CE5',
        lead: '不是「排不到前面」，而是「只在榜单里被点到」——品牌资产被同门截走。',
        metrics: [
            { v: '第 17 名', l: '影响力排名' },
            { v: '1.4%', l: '整体提及率' },
            { v: '22.4%', l: '三九胃泰颗粒提及率' },
        ],
        points: [
            '提及率榜首是同门三九胃泰颗粒 22.4%，问「999 养胃药」时答案几乎不落在养胃舒。',
            '全量提及率排名第 19 / 296，位次榜第 13——排位不差，问题是被提到得太少。',
            'Top1 首推率 0%（全量榜第 57），铝碳酸镁 6%、三九胃泰颗粒 3.1%。',
            '要先把单品名写进症状与人群类的候选清单，之后才谈得上首位与位次优化。',
        ],
        chips: ['同门截流', '只进榜单', '先进清单'],
    },
];

const ACTIONS = [
    {
        title: '激活症状 / 证型词',
        body: '围绕慢性胃炎、胃热隐痛、气阴两虚等问法，铺设可被 AI 引用的说明书解读与科普内容。',
    },
    {
        title: '切割同门边界',
        body: '写清养胃舒与三九胃泰、温胃舒各自的适用证型，别让「999」的流量继续被兄弟品吸走。',
    },
    {
        title: '打通弱势平台',
        body: '针对豆包、通义千问、蚂蚁阿福按高权重医药站定向投放，打破对元宝与 DeepSeek 的依赖。',
    },
];

export default function Page_GeoReport_Entries_Analysis() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-12 sm:px-16 pt-5 pb-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
            <div className="text-center mb-4 mt-[-20px] shrink-0 relative z-10">
                <h1 className="text-[30px] lg:text-[34px] font-bold text-white tracking-widest leading-none">词条表现洞察</h1>
                <p className="mt-2 text-base text-white">35 个监测词条 · 5 个 AI 平台 · 1,225 次会话 · 整体提及率 1.4%</p>
            </div>

            <div className="flex-1 relative z-10 grid grid-cols-3 gap-5 min-h-0 mb-4">
                {CARDS.map((c) => (
                    <div key={c.title} className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 xl:p-6 flex flex-col min-h-0">
                        <div className="flex items-center gap-2 shrink-0">
                            <span className="w-1.5 h-5 rounded-full" style={{ background: c.accent }} />
                            <h3 className="text-2xl font-bold">{c.title}</h3>
                            <span className="ml-auto text-sm font-mono text-white">{c.no}</span>
                        </div>

                        {/* 固定两行高度，保证三张卡的指标行与正文起始位置横向对齐 */}
                        <p className="mt-2.5 min-h-[56px] text-[20px] font-semibold leading-snug text-white shrink-0 text-balance">{c.lead}</p>

                        <div className="mt-4 grid grid-cols-3 gap-2 border-y border-white/10 py-3.5 shrink-0">
                            {c.metrics.map((m) => (
                                <div key={m.l}>
                                    <div className="text-[26px] font-bold leading-none" style={{ color: c.accent }}>{m.v}</div>
                                    <div className="mt-1.5 text-[13px] text-white leading-tight">{m.l}</div>
                                </div>
                            ))}
                        </div>

                        <ul className="mt-4 flex-1 flex flex-col justify-start gap-3.5">
                            {c.points.map((p) => (
                                <li key={p} className="flex gap-2.5 text-[17px] leading-[1.65] text-white text-balance">
                                    <span className="mt-[10px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.accent }} />
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-3 border-t border-white/[0.07] flex flex-wrap items-center gap-1.5">
                            <span className="mr-1 text-[12.5px] text-white font-bold">关键标签</span>
                            {c.chips.map((t) => (
                                <span key={t} className="px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[13px] text-white">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative z-10 bg-[#004CE5]/10 border border-[#004CE5]/30 rounded-2xl px-6 py-3.5 shrink-0">
                <div className="text-sm font-bold tracking-[0.2em] text-[#6E9BFF] mb-2.5">行动建议</div>
                <div className="grid grid-cols-3 gap-6">
                    {ACTIONS.map((a, i) => (
                        <div key={a.title} className="flex gap-3">
                            <span className="text-[#004CE5] font-bold text-base mt-[2px]">{`0${i + 1}`}</span>
                            <div>
                                <div className="text-lg font-bold text-white">{a.title}</div>
                                <div className="mt-1 text-[15.5px] leading-[1.55] text-white text-balance">{a.body}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
