import React from 'react';
import Frame from '../components/geoone/Frame';
import {
    C, Card, RankBadge, Tag, GhostButton, Icon,
    IconSite, IconSquareSite,
} from '../components/geoone/ui';
import { DonutChart } from '../components/geoone/charts';

/* ══════════════ 数据：换引用源结果时只改这一段 ══════════════ */
/* 来源：GEO ONE 457 三九养胃舒颗粒-ToC① · citations/platform_stats + articles · 2026-08-14 ~ 08-20 */
/* 文章列表按总引用次数取前三；标题抓取异常的条目（"健康科普 +"）跳过 */

const SEGMENTS = [
    { name: '小荷健康', pct: 28.1, color: '#00C48C', icon: <IconSquareSite size={24} label="荷" bg="#00C48C" /> },
    { name: '夸克', pct: 6.1, color: '#4C6FFF', icon: <IconSquareSite size={24} label="夸" bg="#4C6FFF" /> },
    { name: '蚂蚁阿福文献库', pct: 5.9, color: '#1677FF', icon: <IconSquareSite size={24} label="阿" bg="#1677FF" /> },
    { name: '医药信息查询平台', pct: 5.9, color: '#0EA5E9', icon: <IconSquareSite size={24} label="医" bg="#0EA5E9" /> },
    { name: '神马搜索', pct: 4.5, color: '#F59E0B', icon: <IconSquareSite size={24} label="神" bg="#F59E0B" /> },
    { name: '其他', pct: 49.5, color: '#9ca3af' },
];

const ARTICLES = [
    {
        title: '中国慢性胃炎诊治指南（2022年，上海）',
        url: 'https://mdn.alipayobjects.com/medlib_data/afts/file/XtkGR6dDgdAAAAAAgEAAAAgADZhPAQFr',
        mentioned: false,
        total: 117,
        avg: '16.7',
    },
    {
        title: '胃痛中医诊疗专家共识（2024）',
        url: 'https://mdn.alipayobjects.com/medlib_data/afts/file/CU8jSq21kgoAAAAAgBAAAAgAnJhPAQFr',
        mentioned: false,
        total: 93,
        avg: '13.3',
    },
    {
        title: '2025 国际临床实践指南：中医药治疗功能性消化不良（英文版）',
        url: 'https://www.sciencedirect.com/science/article/pii/S2095496425000640',
        mentioned: false,
        total: 81,
        avg: '11.6',
    },
];

const FONT =
    '"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", system-ui, sans-serif';

export default function Page_GeoReport_Sources() {
    const top5 = SEGMENTS.filter((s) => s.name !== '其他');
    const top = top5[0];

    return (
        <Frame title="引用源分析" aspect="16/10">
            <div
                data-geoone-root
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '22px 24px 18px',
                    boxSizing: 'border-box',
                    display: 'grid',
                    gridTemplateRows: 'auto 1.35fr 1fr',
                    gap: 16,
                    background: C.white,
                    fontFamily: FONT,
                    color: C.text,
                    WebkitFontSmoothing: 'antialiased',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 24, fontWeight: 800 }}>
                    Top引用数据
                    <Icon.help size={18} style={{ color: C.faint }} />
                </div>

                {/* 上：两栏 */}
                <div style={{ minHeight: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {/* 左：环形图 */}
                    <Card
                        style={{
                            minHeight: 0,
                            padding: '18px 22px 14px',
                            display: 'grid',
                            gridTemplateRows: 'auto auto minmax(0, 1fr) auto',
                            rowGap: 12,
                            overflow: 'hidden',
                        }}
                    >
                        <div style={{ fontSize: 18, fontWeight: 700, color: C.muted }}>
                            目标词条引用来源分布
                        </div>
                        <div>
                            <div style={{ fontSize: 15, color: C.muted, marginBottom: 4 }}>引用率最高的平台</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                {top.icon}
                                <span style={{ fontSize: 22, fontWeight: 800 }}>
                                    {top.name}: {top.pct}%
                                </span>
                            </div>
                        </div>

                        <div
                            style={{
                                minHeight: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                            }}
                        >
                            <DonutChart
                                size={200}
                                thickness={12}
                                gapDeg={10}
                                segments={SEGMENTS}
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                                gap: 14,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 6,
                                flexShrink: 0,
                                overflow: 'hidden',
                            }}
                        >
                            {SEGMENTS.map((s) => (
                                <div
                                    key={s.name}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        fontSize: 13,
                                        color: C.muted,
                                        whiteSpace: 'nowrap',
                                        flexShrink: 1,
                                        minWidth: 0,
                                    }}
                                >
                                    <span
                                        style={{
                                            width: 11,
                                            height: 11,
                                            borderRadius: 2,
                                            background: s.color,
                                            flexShrink: 0,
                                        }}
                                    />
                                    {s.name}
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* 右：平台榜单 */}
                    <Card
                        style={{
                            minHeight: 0,
                            padding: '18px 22px 14px',
                            display: 'grid',
                            gridTemplateRows: 'auto auto 1fr auto',
                            gap: 8,
                        }}
                    >
                        <div style={{ fontSize: 18, fontWeight: 700, color: C.muted }}>
                            目标词条高频引用平台榜单
                        </div>

                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '36px 1fr auto',
                                columnGap: 12,
                                fontSize: 15,
                                color: C.muted,
                                paddingBottom: 8,
                                borderBottom: `1px solid ${C.border}`,
                            }}
                        >
                            <span />
                            <span>平台名称</span>
                            <span>引用率</span>
                        </div>

                        <div
                            style={{
                                minHeight: 0,
                                display: 'grid',
                                gridTemplateRows: 'repeat(5, 1fr)',
                            }}
                        >
                            {top5.map((s, i) => (
                                <div
                                    key={s.name}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '36px 1fr auto',
                                        columnGap: 12,
                                        alignItems: 'center',
                                        borderBottom: `1px solid ${C.divider}`,
                                        minHeight: 0,
                                    }}
                                >
                                    <RankBadge n={i + 1} size={28} />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                                        <span style={{ display: 'flex', flexShrink: 0 }}>{s.icon}</span>
                                        <span
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 700,
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {s.name}
                                        </span>
                                    </div>
                                    <span style={{ fontSize: 20, fontWeight: 800 }}>{s.pct}%</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
                            <GhostButton height={32} fontSize={15}>展开</GhostButton>
                        </div>
                    </Card>
                </div>

                {/* 下：引用文章表 */}
                <Card
                    style={{
                        minHeight: 0,
                        padding: 0,
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateRows: 'auto auto 1fr',
                    }}
                >
                    <div style={{ padding: '14px 20px 8px', fontSize: 18, fontWeight: 800 }}>
                        引用文章列表
                    </div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '48px 1.7fr 130px 100px 100px 70px 80px',
                            gap: 8,
                            padding: '0 20px',
                            height: 36,
                            alignItems: 'center',
                            background: C.headBg,
                            fontSize: 14,
                            color: C.muted,
                            fontWeight: 600,
                        }}
                    >
                        <span />
                        <span>文章标题</span>
                        <span>目标产品是否提及</span>
                        <span>总引用次数</span>
                        <span>平均引用次数</span>
                        <span>来源</span>
                        <span>文章链接</span>
                    </div>
                    <div style={{ minHeight: 0, display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        {ARTICLES.map((a, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '48px 1.7fr 130px 100px 100px 70px 80px',
                                    gap: 8,
                                    padding: '0 20px',
                                    alignItems: 'center',
                                    borderBottom: `1px solid ${C.divider}`,
                                    minHeight: 0,
                                }}
                            >
                                <RankBadge n={i + 1} size={26} />
                                <div style={{ minWidth: 0 }}>
                                    <div
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 700,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {a.title}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: 13,
                                            color: C.faint,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {a.url}
                                    </div>
                                </div>
                                <div>
                                    <Tag color={a.mentioned ? 'green' : 'red'}>
                                        {a.mentioned ? '是' : '否'}
                                    </Tag>
                                </div>
                                <div style={{ fontSize: 17, fontWeight: 700 }}>{a.total}</div>
                                <div style={{ fontSize: 17, fontWeight: 700 }}>{a.avg}</div>
                                <div><IconSite size={22} /></div>
                                <GhostButton height={30} fontSize={14}>查看</GhostButton>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </Frame>
    );
}
