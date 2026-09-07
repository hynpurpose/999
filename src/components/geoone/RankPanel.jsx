import React from 'react';
import { C, RankBadge, GhostButton } from './ui';

/**
 * 竞品横向对比三栏排名。
 * 三栏结构完全一致：标题 / 副标题 / 表头 / 五行 / 展开，保证左右对齐。
 */
export default function RankPanel({ columns }) {
    return (
        <div
            data-geoone-root
            style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 28,
                padding: '10px 8px 6px',
                boxSizing: 'border-box',
                background: C.white,
                fontFamily:
                    '"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", system-ui, sans-serif',
                color: C.text,
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            {columns.map((col, ci) => (
                <div
                    key={ci}
                    style={{
                        minWidth: 0,
                        display: 'grid',
                        gridTemplateRows: 'auto 1fr',
                        gap: 12,
                    }}
                >
                    <div
                        style={{
                            fontSize: 26,
                            fontWeight: 800,
                            textAlign: 'center',
                            letterSpacing: '0.02em',
                            lineHeight: 1.2,
                            minHeight: 32,
                        }}
                    >
                        {col.title}
                    </div>

                    <div
                        style={{
                            minHeight: 0,
                            border: `1px solid ${C.border}`,
                            borderRadius: 14,
                            background: C.white,
                            padding: '16px 20px 12px',
                            boxSizing: 'border-box',
                            display: 'grid',
                            gridTemplateRows: 'auto auto 1fr auto',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 15,
                                color: C.muted,
                                lineHeight: 1.45,
                                minHeight: 44,
                                marginBottom: 12,
                            }}
                        >
                            {col.subtitle}
                        </div>

                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '28px minmax(0, 1fr) 120px',
                                columnGap: 12,
                                fontSize: 15,
                                color: C.muted,
                                paddingBottom: 8,
                                borderBottom: `1px solid ${C.border}`,
                                marginBottom: 2,
                            }}
                        >
                            <span />
                            <span>产品名称</span>
                            <span style={{ textAlign: 'right' }}>{col.valueLabel}</span>
                        </div>

                        <div
                            style={{
                                minHeight: 0,
                                display: 'grid',
                                gridTemplateRows: 'repeat(5, 1fr)',
                            }}
                        >
                            {col.rows.map((r, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '28px minmax(0, 1fr) 120px',
                                        columnGap: 12,
                                        alignItems: 'center',
                                        borderBottom: `1px solid ${C.divider}`,
                                        minHeight: 0,
                                    }}
                                >
                                    <RankBadge n={r.rank ?? i + 1} size={28} />
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            minWidth: 0,
                                            gap: 8,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 700,
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {r.name}
                                        </span>
                                        {r.target && (
                                            <span
                                                style={{
                                                    background: C.blueSoft,
                                                    color: C.blueText,
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    padding: '3px 8px',
                                                    borderRadius: 5,
                                                    flexShrink: 0,
                                                }}
                                            >
                                                目标产品
                                            </span>
                                        )}
                                    </div>
                                    <span
                                        style={{
                                            fontSize: 20,
                                            fontWeight: 800,
                                            whiteSpace: 'nowrap',
                                            textAlign: 'right',
                                        }}
                                    >
                                        {r.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                marginTop: 10,
                            }}
                        >
                            <GhostButton height={32} fontSize={15}>
                                展开
                            </GhostButton>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
