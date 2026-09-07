import React from 'react';
import { C } from './ui';

/**
 * GEO ONE 界面里的四种图表：折线、柱状、环形、正负面堆叠条。
 * 全部用 SVG / div 手绘，几何参数外露，方便按截图微调。
 */

/* ───────────────────────── 折线图 ───────────────────────── */

/**
 * 采样折线图：每个采样日一个空心圆点，两个点以上再连折线，横轴一条实线。
 * ticks 从上到下书写。
 */
export function LineChart({
    width,
    height,
    ticks,
    points = [{ x: 0.5, tick: 2 }],
    xLabels = ['6月17日'],
    labelW = 62,
    padRight = 18,
}) {
    const plotL = labelW + 14;
    const plotR = width - padRight;
    const plotT = 10;
    const rowH = (height - plotT - 34) / (ticks.length - 1 + 0.9);
    const axisY = plotT + rowH * (ticks.length - 1 + 0.9);

    return (
        <svg width={width} height={height} style={{ display: 'block', overflow: 'visible' }}>
            {ticks.map((t, i) => {
                const y = plotT + i * rowH;
                return (
                    <g key={i}>
                        <text
                            x={labelW}
                            y={y + 4.5}
                            textAnchor="end"
                            fontSize="14"
                            fill={C.muted}
                        >
                            {t}
                        </text>
                        <line
                            x1={plotL}
                            y1={y}
                            x2={plotR}
                            y2={y}
                            stroke="#e8ebf0"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                        />
                    </g>
                );
            })}

            <line x1={plotL} y1={axisY} x2={plotR} y2={axisY} stroke={C.axis} strokeWidth="1" />

            {points.length > 1 && (
                <polyline
                    points={points
                        .map((p) => `${plotL + (plotR - plotL) * p.x},${plotT + p.tick * rowH}`)
                        .join(' ')}
                    fill="none"
                    stroke={C.blue}
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            )}

            {points.map((p, i) => (
                <circle
                    key={i}
                    cx={plotL + (plotR - plotL) * p.x}
                    cy={plotT + p.tick * rowH}
                    r="4"
                    fill="#fff"
                    stroke={C.blue}
                    strokeWidth="2"
                />
            ))}

            {xLabels.map((l, i) => (
                <text
                    key={i}
                    x={plotL + ((plotR - plotL) * (i + 0.5)) / xLabels.length}
                    y={axisY + 26}
                    textAnchor="middle"
                    fontSize="15"
                    fill={C.strong}
                >
                    {l}
                </text>
            ))}
        </svg>
    );
}

/* ───────────────────────── 柱状图 ───────────────────────── */

/**
 * 纵轴刻度自下而上，柱子按 value 在 [min,max] 区间内取高度。
 */
export function BarChart({
    width,
    height,
    ticks,
    bars,
    labelW = 52,
    padRight = 18,
    barW = 52,
}) {
    const plotL = labelW + 14;
    const plotR = width - padRight;
    const plotT = 10;
    const axisY = height - 34;
    const step = (axisY - plotT) / (ticks.length - 1);

    const lo = ticks[ticks.length - 1].v;
    const hi = ticks[0].v;
    const yOf = (v) => axisY - ((v - lo) / (hi - lo)) * (axisY - plotT);

    const slot = (plotR - plotL) / bars.length;

    return (
        <svg width={width} height={height} style={{ display: 'block', overflow: 'visible' }}>
            {ticks.map((t, i) => {
                const y = plotT + i * step;
                return (
                    <g key={i}>
                        <text x={labelW} y={y + 4.5} textAnchor="end" fontSize="14" fill={C.muted}>
                            {t.label}
                        </text>
                        <line
                            x1={plotL}
                            y1={y}
                            x2={plotR}
                            y2={y}
                            stroke="#e8ebf0"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                        />
                    </g>
                );
            })}

            <line x1={plotL} y1={axisY} x2={plotR} y2={axisY} stroke="#d9dde3" strokeWidth="1" />

            {bars.map((b, i) => {
                const cx = plotL + slot * (i + 0.5);
                const y = yOf(b.value);
                return (
                    <rect
                        key={i}
                        x={cx - barW / 2}
                        y={y}
                        width={barW}
                        height={Math.max(axisY - y, 0)}
                        fill={C.bar}
                    />
                );
            })}
        </svg>
    );
}

/** 柱状图下方的平台标签（图标 + 名称） */
export function BarAxisLabels({ width, bars, labelW = 52, padRight = 18 }) {
    const plotL = labelW + 14;
    const plotR = width - padRight;
    const slot = (plotR - plotL) / bars.length;
    return (
        <div style={{ position: 'relative', width, height: 62 }}>
            {bars.map((b, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: plotL + slot * i,
                        width: slot,
                        top: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 6,
                    }}
                >
                    {b.icon}
                    <span style={{ fontSize: 15, color: C.muted }}>{b.label}</span>
                </div>
            ))}
        </div>
    );
}

/* ───────────────────────── 环形图 ───────────────────────── */

function polar(cx, cy, r, deg) {
    // 0° = 12 点，顺时针
    const a = ((deg - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function arcPath(cx, cy, r, startDeg, endDeg) {
    const sweep = Math.max(endDeg - startDeg, 0.01);
    const [x1, y1] = polar(cx, cy, r, startDeg);
    const [x2, y2] = polar(cx, cy, r, endDeg);
    const large = sweep > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

/**
 * GEO ONE 引用来源环形图（对照产品截图）：
 * - 中等粗细环 + strokeLinecap round 圆角端点
 * - 段与段之间有明显留白
 * - 彩色段从 12 点顺时针，灰色“其他”补满剩余
 */
export function DonutChart({
    size = 220,
    thickness = 18,
    segments,
    gapDeg = 12,
    otherColor = '#9ca3af',
    style,
}) {
    // 圆角端点会向外各伸出 thickness/2，半径略内缩，避免贴边裁切
    const r = (size - thickness) / 2 - 1;
    const cx = size / 2;
    const cy = size / 2;

    const colored = segments.filter((s) => s.name !== '其他' && s.pct > 0);
    const coloredSum = colored.reduce((a, s) => a + s.pct, 0);
    const otherPct = Math.max(0, 100 - coloredSum);
    const all = [...colored, { name: '其他', pct: otherPct, color: otherColor }];

    const n = all.length;
    const usableDeg = 360 - gapDeg * n;

    let cursor = 0;
    const arcs = all.map((s) => {
        const sweep = (s.pct / 100) * usableDeg;
        const start = cursor + gapDeg / 2;
        const end = start + Math.max(sweep, 0.8);
        cursor += sweep + gapDeg;
        return { ...s, start, end };
    });

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            style={{ display: 'block', overflow: 'visible', ...style }}
        >
            {arcs.map((s, i) => (
                <path
                    key={i}
                    d={arcPath(cx, cy, r, s.start, s.end)}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={thickness}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ))}
        </svg>
    );
}

/* ───────────────────────── 正负面堆叠条 ───────────────────────── */

export function SentimentBar({ width, positive = 80, height = 26 }) {
    return (
        <div style={{ width }}>
            <div style={{ display: 'flex', width, height, borderRadius: 5, overflow: 'hidden' }}>
                <div style={{ width: `${positive}%`, background: C.green }} />
                <div style={{ width: `${100 - positive}%`, background: C.red }} />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 6,
                    fontSize: 12.5,
                    color: C.muted,
                }}
            >
                <span>{Number(positive.toFixed(1))}%</span>
                <span>{Number((100 - positive).toFixed(1))}%</span>
            </div>
        </div>
    );
}
