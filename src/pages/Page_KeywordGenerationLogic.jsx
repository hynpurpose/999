import React from 'react';
import { TAG } from '../components/BitableView';

/* ══════════════ 数据：换词条生成逻辑时只改这一段 ══════════════ */

/* 示例：词条穷举表中「类型」各取 1 条（养胃舒颗粒穷举表各类型各取 1 条） */
const ROWS = [
    {
        type: '0.固定',
        tag: TAG.slate,
        name: '品牌推荐',
        desc: '最基本最常见的核心问法',
        keyword: '养胃药品牌推荐',
    },
    {
        type: '1.行业-购买动机',
        tag: TAG.blue,
        name: '慢性胃炎患病人群大、确诊后需要调理',
        desc: '慢性胃炎患病人数庞大，确诊后除对症治疗外，普遍存在中成药调理需求；行业 GEO 优先场景含「慢性胃炎吃什么中成药」。',
        keyword: '慢性胃炎调理用的中成药推荐',
    },
    {
        type: '1.行业-场景画像',
        tag: TAG.orange,
        name: '三餐不规律的上班族',
        desc: '不定时进食、外卖依赖是行业常见胃不适诱因与购药场景。',
        keyword: '适合三餐不规律上班族的养胃药推荐',
    },
    {
        type: '1.行业-核心卖点',
        tag: TAG.cyan,
        name: '中成药调理相对温和的品类认知',
        desc: '消费者对长期抑酸存在顾虑时，常转向中成药/中药组方调理，是品类层卖点。',
        keyword: '纯中药配方的养胃药推荐',
    },
    {
        type: '1.行业-核心痛点',
        tag: TAG.yellow,
        name: '中成药证型繁多消费者不会选',
        desc: '养胃中成药按证型分型，普通消费者易买错证型。',
        keyword: '适合胃热口干人群的养胃药推荐',
    },
    {
        type: '2.产品-购买动机',
        tag: TAG.teal,
        name: '999 / 华润三九品牌背书',
        desc: '华润三九胃药产品线认知度高，降低消费者在繁多证型中的选择成本。',
        keyword: '大品牌正规药企的养胃药推荐',
    },
    {
        type: '2.产品-场景画像',
        tag: TAG.red,
        name: '药店自选购买',
        desc: 'OTC 甲类可在药店直接购买，是本品主要购药路径。',
        keyword: '药店就能买到的养胃药推荐',
    },
    {
        type: '2.产品-核心卖点',
        tag: TAG.purple,
        name: '滋阴养胃，对证胃脘灼热、隐隐作痛',
        desc: '说明书功能主治：滋阴养胃。用于慢性胃炎，胃脘灼热，隐隐作痛。',
        keyword: '胃部灼热隐隐作痛吃的中成药推荐',
    },
    {
        type: '2.产品-核心痛点',
        tag: TAG.green,
        name: '反酸烧心不对症',
        desc: '说明书未将反酸、烧心列为功能主治。',
        keyword: '治反酸烧心的养胃药推荐',
    },
    {
        type: '3.搜索',
        tag: TAG.carmine,
        name: '百度搜索 Top10',
        desc: '来源于百度搜索数据（辅助参考，AI 拟制待替换）',
        keyword: '1. 胃药哪个牌子好',
    },
    {
        type: '3.社媒',
        tag: TAG.grass,
        name: '小红书话题 Top',
        desc: '来源于小红书搜索数据（辅助参考，AI 拟制待替换）',
        keyword: '1. 养胃日常',
    },
];

const FONT =
    '"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Source Han Sans SC", system-ui, sans-serif';

const C = {
    surface: '#141414',
    head: '#1a1a1a',
    line: 'rgba(255,255,255,0.1)',
    text: '#ebebeb',
    muted: '#a0a0a0',
    rowNum: '#6b6b6b',
};

/** 左侧三列：序号+类型 | 名称 | 名称解释 */
const LEFT_COLS = '44px 170px 170px minmax(0, 1fr)';
/** 中间合并列（词条生成箭头）约占整表宽度，右侧为生成词条列 */
const ARROW_W = '24%';
const RIGHT_W = '20%';

function FieldIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8f959e" strokeWidth="1.7">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 9h8M8 12h5M8 15h6" strokeLinecap="round" />
        </svg>
    );
}

function TypeBadge({ label, color }) {
    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                maxWidth: '100%',
                padding: '3px 8px',
                borderRadius: 6,
                background: color,
                color: C.text,
                fontSize: 12.5,
                fontWeight: 600,
                lineHeight: 1.3,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
            title={label}
        >
            {label}
        </span>
    );
}

function HeadCell({ children, style }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '0 12px',
                borderRight: `1px solid ${C.line}`,
                boxSizing: 'border-box',
                ...style,
            }}
        >
            {children}
        </div>
    );
}

function Cell({ children, style, title }) {
    return (
        <div
            title={title}
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                borderRight: `1px solid ${C.line}`,
                boxSizing: 'border-box',
                height: '100%',
                minWidth: 0,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

/** 中间整列合并：大号「词条生成」+ 粗箭头 */
function ArrowColumn() {
    return (
        <div
            style={{
                width: ARROW_W,
                flexShrink: 0,
                alignSelf: 'stretch',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 18,
                borderLeft: `1px solid ${C.line}`,
                borderRight: `1px solid ${C.line}`,
                background: C.surface,
                zIndex: 2,
            }}
        >
            <div
                style={{
                    fontSize: 56,
                    fontWeight: 900,
                    letterSpacing: '0.18em',
                    color: '#fff',
                    lineHeight: 1,
                }}
            >
                词条生成
            </div>
            <svg width="160" height="44" viewBox="0 0 160 44" fill="none" aria-hidden>
                <path
                    d="M4 22H128"
                    stroke="#fff"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <path d="M118 6L156 22L118 38Z" fill="#fff" />
            </svg>
        </div>
    );
}

function LogicTable() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: C.surface,
                fontFamily: FONT,
                color: C.text,
                display: 'flex',
                flexDirection: 'row',
                overflow: 'hidden',
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            {/* 左：输入逻辑表 */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: LEFT_COLS,
                        background: C.head,
                        borderBottom: `1px solid ${C.line}`,
                        height: 40,
                        flexShrink: 0,
                        fontSize: 13,
                        color: '#c8c8c8',
                        fontWeight: 600,
                    }}
                >
                    <HeadCell />
                    <HeadCell>
                        <FieldIcon />
                        类型
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        名称
                    </HeadCell>
                    <HeadCell style={{ borderRight: 'none' }}>
                        <FieldIcon />
                        名称解释
                    </HeadCell>
                </div>

                <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                    {ROWS.map((r, i) => (
                        <div
                            key={i}
                            style={{
                                flex: 1,
                                minHeight: 0,
                                display: 'grid',
                                gridTemplateColumns: LEFT_COLS,
                                borderBottom: i < ROWS.length - 1 ? `1px solid ${C.line}` : 'none',
                                alignItems: 'center',
                            }}
                        >
                            <Cell style={{ justifyContent: 'center', color: C.rowNum, fontSize: 13 }}>
                                {i + 1}
                            </Cell>
                            <Cell>
                                <TypeBadge label={r.type} color={r.tag} />
                            </Cell>
                            <Cell
                                title={r.name}
                                style={{
                                    fontWeight: 700,
                                    fontSize: 14,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {r.name}
                            </Cell>
                            <Cell title={r.desc} style={{ color: C.muted, fontSize: 13, borderRight: 'none' }}>
                                <span
                                    style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        lineHeight: 1.35,
                                    }}
                                >
                                    {r.desc}
                                </span>
                            </Cell>
                        </div>
                    ))}
                </div>
            </div>

            {/* 中：整列合并的「词条生成」箭头 */}
            <ArrowColumn />

            {/* 右：生成词条列 */}
            <div
                style={{
                    width: RIGHT_W,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 220,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '0 14px',
                        background: C.head,
                        borderBottom: `1px solid ${C.line}`,
                        height: 40,
                        flexShrink: 0,
                        fontSize: 13,
                        color: '#c8c8c8',
                        fontWeight: 600,
                    }}
                >
                    <FieldIcon />
                    词条生成
                </div>
                <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                    {ROWS.map((r, i) => (
                        <div
                            key={i}
                            title={r.keyword}
                            style={{
                                flex: 1,
                                minHeight: 0,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 14px',
                                borderBottom: i < ROWS.length - 1 ? `1px solid ${C.line}` : 'none',
                                fontWeight: 700,
                                fontSize: 14,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {r.keyword}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Page_KeywordGenerationLogic() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10 animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3.5 lg:gap-4 min-h-0">
                <div className="shrink-0 flex flex-col gap-2">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">
                        词条生成逻辑
                    </h1>
                </div>

                <div className="w-full flex flex-col gap-3 lg:gap-4 flex-1 min-h-0">
                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 lg:p-5 shrink-0">
                        <p className="text-zinc-300 text-[16px] lg:text-[17.5px] xl:text-[19px] leading-relaxed">
                            将产品的
                            <strong className="text-white font-bold">
                                购买动机、场景画像、核心卖点、核心痛点、搜索引擎数据及社媒数据
                            </strong>
                            所有核心信息收集提炼后，对照生成相应的专业词条。
                        </p>
                    </div>

                    <div className="relative flex-1 min-h-0 w-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        <LogicTable />
                    </div>
                </div>
            </div>
        </div>
    );
}
