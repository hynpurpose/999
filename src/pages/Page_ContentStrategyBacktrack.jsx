import React from 'react';

/* ══════════════ 数据：换品牌 / 类别分布时只改这一段 ══════════════ */

const META = {
    source: 'geo-one',
    dateRange: '2026-08-04 ~ 2026-08-04',
    logic: '按总引用次数排序取前100篇文章',
    totalArticles: 1374,
    brand: '华润三九',
    brandTopN: 100,
};

/**
 * 文章类别分布：左 = 综合 Top100；右 = 提到华润三九的稿件
 * 按可投放品类归拢后的口径，「其他」只留无法归类的少量残余，两列合计仍为 100。
 */
const ROWS = [
    {
        "category": "知识科普",
        "leftCount": 42,
        "leftPct": 42,
        "rightCount": 40,
        "rightPct": 40,
        "color": "#6B8F3C"
    },
    {
        "category": "排行榜",
        "leftCount": 25,
        "leftPct": 25,
        "rightCount": 27,
        "rightPct": 27,
        "color": "#C65911"
    },
    {
        "category": "行业资讯",
        "leftCount": 15,
        "leftPct": 15,
        "rightCount": 16,
        "rightPct": 16,
        "color": "#3B7FC4"
    },
    {
        "category": "单品介绍",
        "leftCount": 9,
        "leftPct": 9,
        "rightCount": 9,
        "rightPct": 9,
        "color": "#595959"
    },
    {
        "category": "测评",
        "leftCount": 5,
        "leftPct": 5,
        "rightCount": 5,
        "rightPct": 5,
        "color": "#C9A227"
    },
    {
        "category": "其他",
        "leftCount": 4,
        "leftPct": 4,
        "rightCount": 3,
        "rightPct": 3,
        "color": "#7B3FA0"
    }
];

const TOTAL = {
    leftCount: 100,
    leftPct: 100.0,
    rightCount: META.brandTopN,
    rightPct: 100.0,
};

const C = {
    titleBg: '#1B2A3D',
    sectionBg: '#EAF1F8',
    sectionText: '#1E4E7A',
    headBg: '#3A7DB2',
    border: '#B7CBE0',
    totalBg: '#D6E4F5',
    track: '#F3F7FB',
    text: '#1A1A1A',
    muted: '#6B7C8F',
};

const FONT =
    '"PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", system-ui, sans-serif';

const COLS = '1.1fr 0.85fr 0.85fr 2.8fr 1.35fr 0.85fr';

function HatchBar({ pct, color }) {
    const w = Math.max(0, Math.min(100, pct));
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: 22,
                background: C.track,
                borderRadius: 2,
                overflow: 'hidden',
            }}
        >
            {/* 同色点阵铺满，表示 100% 刻度（更浅，不抢实心段） */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(${color} 1.1px, transparent 1.1px)`,
                    backgroundSize: '5px 5px',
                    opacity: 0.22,
                }}
            />
            {/* 实心段 = 综合 Top100 占比 */}
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${w}%`,
                    background: color,
                }}
            />
        </div>
    );
}

function Cell({ children, style, header, total }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 10px',
                borderRight: `1px solid ${header ? 'rgba(255,255,255,0.35)' : C.border}`,
                boxSizing: 'border-box',
                ...style,
            }}
        >
            {children}
        </div>
    );
}

function Top100Chart() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#fff',
                fontFamily: FONT,
                color: C.text,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            {/* 标题 */}
            <div
                style={{
                    background: C.titleBg,
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 22,
                    fontWeight: 800,
                    padding: '12px 16px',
                    letterSpacing: '0.04em',
                    flexShrink: 0,
                }}
            >
                引用文章 Top100 分析
            </div>

            {/* 元信息 */}
            <div
                style={{
                    textAlign: 'center',
                    fontSize: 12.5,
                    color: C.muted,
                    padding: '8px 12px',
                    borderBottom: `1px solid ${C.border}`,
                    flexShrink: 0,
                    lineHeight: 1.5,
                }}
            >
                数据来源: {META.source}　|　数据日期: {META.dateRange}　|　统计口径: {META.logic}
                　|　共涉及 {META.totalArticles} 篇独立文章　|　自家品牌: {META.brand}
            </div>

            {/* 小节说明 */}
            <div
                style={{
                    background: C.sectionBg,
                    color: C.sectionText,
                    fontSize: 15,
                    fontWeight: 700,
                    padding: '9px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    flexShrink: 0,
                    borderBottom: `1px solid ${C.border}`,
                }}
            >
                <span style={{ width: 4, height: 16, background: C.headBg, borderRadius: 1 }} />
                文章类别分布统计（左：综合Top100；右：提到{META.brand}Top{META.brandTopN}）
            </div>

            {/* 表头 */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: COLS,
                    background: C.headBg,
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 700,
                    height: 44,
                    flexShrink: 0,
                }}
            >
                {['文章类别', '文章数量', '占比', '可视化', `提到${META.brand}的稿件数`, '占比'].map(
                    (label, i, arr) => (
                        <Cell key={i} header style={{ borderRight: i === arr.length - 1 ? 'none' : undefined }}>
                            {label}
                        </Cell>
                    )
                )}
            </div>

            {/* 数据行 */}
            <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateRows: `repeat(${ROWS.length}, 1fr) auto` }}>
                {ROWS.map((r, i) => (
                    <div
                        key={r.category}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: COLS,
                            borderBottom: `1px solid ${C.border}`,
                            background: i % 2 === 1 ? '#F7FAFD' : '#fff',
                            fontSize: 16,
                            minHeight: 0,
                        }}
                    >
                        <Cell style={{ fontWeight: 700, justifyContent: 'flex-start' }}>{r.category}</Cell>
                        <Cell style={{ fontWeight: 600 }}>{r.leftCount}</Cell>
                        <Cell style={{ fontWeight: 600 }}>{r.leftPct.toFixed(1)}%</Cell>
                        <Cell style={{ padding: '0 16px' }}>
                            <HatchBar pct={r.leftPct} color={r.color} />
                        </Cell>
                        <Cell style={{ fontWeight: 600 }}>{r.rightCount}</Cell>
                        <Cell style={{ fontWeight: 600, borderRight: 'none' }}>{r.rightPct.toFixed(1)}%</Cell>
                    </div>
                ))}

                {/* 合计 */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: COLS,
                        background: C.totalBg,
                        fontSize: 16,
                        fontWeight: 800,
                        height: 44,
                        flexShrink: 0,
                    }}
                >
                    <Cell>合计</Cell>
                    <Cell>{TOTAL.leftCount}</Cell>
                    <Cell>{TOTAL.leftPct.toFixed(1)}%</Cell>
                    <Cell />
                    <Cell>{TOTAL.rightCount}</Cell>
                    <Cell style={{ borderRight: 'none' }}>{TOTAL.rightPct.toFixed(1)}%</Cell>
                </div>
            </div>
        </div>
    );
}

export default function Page_ContentStrategyBacktrack() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3 lg:gap-4">
                <div className="shrink-0 flex items-center justify-between">
                    <h1 className="text-4xl lg:text-[46px] font-black text-white tracking-widest leading-tight">
                        内容策略
                    </h1>
                </div>

                <div className="bg-zinc-900/50 border border-white/5 hover:border-white/10 rounded-2xl py-3 px-4 lg:py-3.5 lg:px-5.5 flex items-start gap-4 shadow-xl backdrop-blur-md relative overflow-hidden transition-all duration-300 shrink-0">
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#004CE5]" />
                    <div className="flex-1 min-w-0">
                        <p className="text-zinc-300 text-[1rem] lg:text-[1.08rem] leading-relaxed tracking-wide font-medium">
                            为了杜绝 <span className="text-white font-bold">AI 批量洗稿带来的降权</span> 和被标记为{' '}
                            <span className="text-red-400 font-bold font-black">“投毒”风险</span>
                            ，确保更多的语料能被主流大模型抓取并高频引用，我们将严格执行以下内容策略：
                        </p>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#004CE5]/20 hover:border-[#004CE5]/50 rounded-2xl py-4 px-5 lg:py-4.5 lg:px-6 flex flex-col relative overflow-hidden transition-all duration-300 shadow-xl group cursor-default shrink-0">
                    <div className="absolute top-0 left-0 w-full h-[4px] bg-[#004CE5] opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-[#004CE5]/5 blur-3xl group-hover:bg-[#004CE5]/10 transition-all duration-500" />

                    <div className="flex items-start gap-4">
                        <div className="text-4xl lg:text-5xl font-black text-[#004CE5]/20 group-hover:text-[#004CE5]/40 transition-colors font-mono leading-none tracking-tighter mt-1">
                            01
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl lg:text-2xl font-black text-white tracking-wide mb-2 lg:mb-3 flex items-center gap-2.5">
                                溯源反推：搞清大模型的引用偏好
                            </h3>
                            <p className="text-zinc-300 text-[1.05rem] lg:text-[1.12rem] leading-relaxed tracking-wide font-medium">
                                依托前期的 <span className="text-white font-bold">GEO 监测数据系统</span>
                                ，针对特定的目标搜索词条，
                                <span className="text-[#004CE5] font-bold">精准定向抓取</span>{' '}
                                当前已被各类大模型高频引用的头部文章源。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex-1 relative border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-h-[380px] lg:min-h-[480px] xl:min-h-[530px] bg-white">
                    <Top100Chart />
                </div>
            </div>
        </div>
    );
}
