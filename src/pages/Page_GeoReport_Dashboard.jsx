import React from 'react';
import Frame, { KeywordAside } from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT } from '../components/geoone/GeoOneApp';
import kw from '../data/keywords_yangweishu.json';
import {
    C, Card, Icon, Toggle, Checkbox, SoftTag, GhostButton,
    IconDeepSeek, IconDoubao, IconQwen, IconYuanbao, IconAfu, IconSite,
} from '../components/geoone/ui';
import { LineChart, BarChart, BarAxisLabels } from '../components/geoone/charts';

/* ══════════════ 数据：换成新的监测结果时只改这一段 ══════════════ */
/* 口径：提及率/位次=conversations/stats；影响力排名=influence is_target.rank */
/* 来源：GEO ONE 项目 457 三九养胃舒颗粒-ToC①，2026-08-14 ~ 08-20 */

const TARGET = '养胃舒颗粒';

const KPI = [
    { label: '提及率', value: '1.4%' },
    { label: '平均提及位次', value: 'NO. 4.8' },
    { label: '行业影响力排名', value: 'NO. 17' },
    {
        label: 'Top引用来源',
        icons: [
            <IconSite key="a" size={22} color="#00C48C" />,
            <IconSite key="b" size={22} color="#4C6FFF" />,
            <IconSite key="c" size={22} color="#0EA5E9" />,
        ],
    },
];

const RATE = '1.4%';

/* 每日提及率 8/14~8/20：0.6 / 0.6 / 2.3 / 1.1 / 2.9 / 1.1 / 1.1；tick =(3-v)/0.5 */
const LINE_TICKS = ['3%', '2.5%', '2%', '1.5%', '1%', '0.5%', '0%'];
const LINE_DATES = ['8月14日', '8月15日', '8月16日', '8月17日', '8月18日', '8月19日', '8月20日'];
const LINE_DAILY = [0.6, 0.6, 2.3, 1.1, 2.9, 1.1, 1.1];
const LINE_POINTS = LINE_DAILY.map((v, i) => ({
    x: (i + 0.5) / LINE_DAILY.length,
    tick: (3 - v) / 0.5,
}));

const BAR_TICKS = [
    { label: '4%', v: 4 },
    { label: '3.5%', v: 3.5 },
    { label: '3%', v: 3 },
    { label: '2.5%', v: 2.5 },
    { label: '2%', v: 2 },
    { label: '1.5%', v: 1.5 },
    { label: '1%', v: 1 },
    { label: '0.5%', v: 0.5 },
    { label: '0%', v: 0 },
];
const BARS = [
    { label: 'DeepSeek', value: 3.3, icon: <IconDeepSeek size={24} /> },
    { label: '豆包', value: 0, icon: <IconDoubao size={24} /> },
    { label: '元宝', value: 3.7, icon: <IconYuanbao size={24} /> },
    { label: '通义千问', value: 0, icon: <IconQwen size={24} /> },
    { label: '蚂蚁阿福', value: 0, icon: <IconAfu size={24} /> },
];

/* ══════════════ 版式常量（取自截图像素采样） ══════════════ */

const KPI_TOP = 162;
const KPI_H = 131;
const KPI_W = 300;
const GAP = 19;
const CARD_TOP = 402;
const CARD_H = 481;
const CARD_W = 619;

function KpiCard({ item, left }) {
    return (
        <Card
            style={{
                position: 'absolute',
                left,
                top: KPI_TOP,
                width: KPI_W,
                height: KPI_H,
                padding: '22px 24px 0',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 18, fontWeight: 600, color: C.text }}>{item.label}</span>
                <Icon.help size={15} style={{ color: C.faint }} />
            </div>
            {item.value ? (
                <div style={{ marginTop: 14, fontSize: 32, fontWeight: 800, letterSpacing: '-0.3px' }}>
                    {item.value}
                </div>
            ) : (
                <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 9 }}>
                    {item.icons.map((ic, i) => (
                        <div
                            key={i}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: '50%',
                                background: i === 0 ? 'transparent' : C.soft,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {ic}
                        </div>
                    ))}
                </div>
            )}
        </Card>
    );
}

function ChartCardHead({ children }) {
    return (
        <>
            <div style={{ fontSize: 15, color: '#8b98a9' }}>目标产品提及率</div>
            <div style={{ marginTop: 2, fontSize: 34, fontWeight: 800, letterSpacing: '-0.5px' }}>
                {RATE}
            </div>
            {children}
        </>
    );
}

export default function Page_GeoReport_Dashboard() {
    return (
        <Frame
            title="核心指标定义与表现概览"
            aspect="1586/892.5"
            aside={
                <KeywordAside
                    kind="监测词条"
                    side="C端"
                    items={kw.optimizeToC}
                    cols={2}
                />
            }
        >
            <GeoOneApp active="总览" title="总览" target={TARGET} brand="养胃舒颗粒(ToC)" brandSub="三九养胃舒颗粒" avatar="养">
                {KPI.map((k, i) => (
                    <KpiCard key={i} item={k} left={MAIN_LEFT + i * (KPI_W + GAP)} />
                ))}

                <div
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT,
                        top: 322,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                    }}
                >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 20, fontWeight: 700 }}>
                        提及率
                        <Icon.help size={15} style={{ color: C.faint }} />
                    </span>
                    <GhostButton icon="arrowUpRight" height={31} fontSize={16}>
                        查看明细
                    </GhostButton>
                </div>

                <div style={{ position: 'absolute', left: MAIN_LEFT, top: 371, fontSize: 16, color: C.muted }}>
                    提及率随时间的变化趋势
                </div>
                <div
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT + CARD_W + GAP,
                        top: 371,
                        fontSize: 16,
                        color: C.muted,
                    }}
                >
                    提及率在不同AI平台的对比
                </div>

                <Card
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT,
                        top: CARD_TOP,
                        width: CARD_W,
                        height: CARD_H,
                        padding: '26px 31px',
                    }}
                >
                    <div style={{ position: 'absolute', right: 28, top: 26, display: 'flex', alignItems: 'center', gap: 11 }}>
                        <Toggle on={false} size={1.15} />
                        <span style={{ fontSize: 17, color: C.text }}>竞品对比</span>
                    </div>
                    <ChartCardHead />
                    <div style={{ marginTop: 26 }}>
                        <LineChart
                            width={CARD_W - 62}
                            height={295}
                            ticks={LINE_TICKS}
                            points={LINE_POINTS}
                            xLabels={LINE_DATES}
                        />
                    </div>
                    <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 32 }}>
                        <Checkbox checked size={19} />
                        <span style={{ fontSize: 17, color: C.text }}>{TARGET}</span>
                        <SoftTag>目标产品</SoftTag>
                    </div>
                </Card>

                <Card
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT + CARD_W + GAP,
                        top: CARD_TOP,
                        width: CARD_W,
                        height: CARD_H,
                        padding: '26px 31px',
                    }}
                >
                    <ChartCardHead />
                    <div style={{ marginTop: 26 }}>
                        <BarChart width={CARD_W - 62} height={295} ticks={BAR_TICKS} bars={BARS} />
                        <BarAxisLabels width={CARD_W - 62} bars={BARS} />
                    </div>
                </Card>
            </GeoOneApp>
        </Frame>
    );
}
