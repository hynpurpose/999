import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q2 单品 300 万预算规划（单页讲完）
   基础建设 60 万（20%）／ GEO 核心工作 150 万（50%）／ 投放与渠道 90 万（30%）
   卡内每块只留两条要点 + 一句理由 + 投入节奏，文案控制在单行内不折行
   ============================================================ */

const BLOCKS = [
    {
        no: '01',
        name: '基础建设',
        tag: '资格线',
        amount: 60,
        pct: 20,
        points: [
            { label: '药品库收录', desc: '国家官方库 ＋ AI 平台专项库' },
            { label: '品牌信息建设', desc: '官网 ＋ 线上线下渠道信息' },
        ],
        why: '档案错了，投再多内容也盖不住',
        rhythm: '第 1 – 3 月集中完成',
    },
    {
        no: '02',
        name: 'GEO 核心工作',
        tag: '主战场',
        amount: 150,
        pct: 50,
        accent: true,
        points: [
            { label: '数据分析与策略', desc: 'GEO 监测、词条与打法迭代' },
            { label: '内容与竞品跟踪', desc: '专业内容产出 ＋ 竞品对标' },
        ],
        why: '提及率的天花板由这块决定',
        rhythm: '贯穿全年，按月滚动',
    },
    {
        no: '03',
        name: '投放与渠道',
        tag: '分发入口',
        amount: 90,
        pct: 30,
        points: [
            { label: '渠道建设', desc: '四类专业信源 ＋ 高权重账号' },
            { label: '长期投放', desc: '内容持续投放 ＋ 负面纠偏' },
        ],
        why: '内容进不去 AI，等于没写',
        rhythm: '随内容产出放量',
    },
];

/* 同一蓝色 hue，靠饱和度／明度区分权重：核心工作最亮，基础建设最沉 */
const SEGMENT_BG = [
    'linear-gradient(90deg, rgba(0,76,229,0.32), rgba(46,109,255,0.32))',
    'linear-gradient(90deg, #004CE5, #2E6DFF)',
    'linear-gradient(90deg, rgba(0,76,229,0.62), rgba(46,109,255,0.62))',
];

export default function Page_QA_Budget_Allocation() {
    return (
        <SlideLayout
            title="300 万预算怎么规划"
            subtitle="分成三笔钱：基础建设 60 万打底，核心工作 150 万为主体，投放渠道 90 万放量"
        >
            <div className="w-full h-full flex flex-col gap-6 animate-fadeIn font-['MiSans']">
                {/* ── 顶部：预算比例条 ── */}
                <div className="shrink-0 h-[86px] w-full flex rounded-[18px] overflow-hidden border border-white/[0.08]">
                    {BLOCKS.map((b, i) => (
                        <div
                            key={b.name}
                            className="h-full flex items-center justify-center gap-5 px-4 overflow-hidden"
                            style={{
                                width: `${b.pct}%`,
                                background: SEGMENT_BG[i],
                                borderLeft: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.35)',
                            }}
                        >
                            <span className="text-[34px] font-black text-white leading-none font-['Montserrat'] tabular-nums">
                                {b.pct}%
                            </span>
                            <span className="text-[24px] font-bold text-white leading-none whitespace-nowrap">
                                {b.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* ── 中部：三块钱 ── */}
                <div className="flex-1 min-h-0 flex gap-6">
                    {BLOCKS.map((b) => (
                        <div
                            key={b.name}
                            className="flex-1 min-w-0 h-full rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 px-9 py-9 flex flex-col relative overflow-hidden"
                        >
                            {b.accent && <span className="absolute left-0 top-0 w-full h-[4px] bg-[#004CE5]" />}

                            {/* 名称 + 定位 */}
                            <div className="shrink-0 flex items-center gap-4">
                                <span className="text-[26px] font-black text-white leading-none font-['Montserrat']">
                                    {b.no}
                                </span>
                                <span className="text-[36px] font-bold text-white leading-none whitespace-nowrap">
                                    {b.name}
                                </span>
                                <span className="shrink-0 px-3 py-1.5 rounded-[8px] bg-[#004CE5] text-[20px] font-bold text-white leading-none whitespace-nowrap">
                                    {b.tag}
                                </span>
                            </div>

                            {/* 金额 */}
                            <div className="shrink-0 mt-6 flex items-end gap-3">
                                <span
                                    className={`text-[88px] font-black leading-none font-['Montserrat'] tabular-nums ${
                                        b.accent ? 'text-[#2E6DFF]' : 'text-white'
                                    }`}
                                >
                                    {b.amount}
                                </span>
                                <span
                                    className={`text-[30px] font-black leading-none mb-2 whitespace-nowrap ${
                                        b.accent ? 'text-[#2E6DFF]' : 'text-white'
                                    }`}
                                >
                                    万元
                                </span>
                            </div>

                            <div className="shrink-0 w-full h-px bg-white/10 my-6" />

                            {/* 两条要点 */}
                            <div className="flex-1 min-h-0 flex flex-col justify-center gap-10 overflow-hidden">
                                {b.points.map((p) => (
                                    <div key={p.label} className="flex flex-col gap-2.5">
                                        <div className="flex items-center gap-3">
                                            <span className="w-[9px] h-[9px] rounded-full bg-[#2E6DFF] shrink-0" />
                                            <span className="text-[30px] font-bold text-white leading-none whitespace-nowrap">
                                                {p.label}
                                            </span>
                                        </div>
                                        <span className="pl-[21px] text-[25px] text-white leading-[36px]">
                                            {p.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* 一句话理由 + 投入节奏 */}
                            <div className="shrink-0 mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
                                <p className="text-[24px] text-white leading-[34px]">{b.why}</p>
                                <span className="text-[22px] font-bold text-white leading-none">{b.rhythm}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Budget_Allocation.hideHeader = true;
