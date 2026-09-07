import React, { useLayoutEffect, useRef, useState } from 'react';

/**
 * 飞书多维表格（暗色）界面的代码复刻。
 * 尺寸与配色全部取自原始截图像素采样：截图为 2.5 倍图，此处按 1 倍 CSS 尺寸还原，
 * 设计宽度固定 1535px，再整体等比缩放填满容器，因此换多少行数据都不会走形。
 */

const DESIGN_W = 1535;
const TABBAR_H = 46.4;
const TOOLBAR_H = 42;
const HEADER_H = 35.6;
const BORDER = 1.2;
const GUTTER_W = 62;
const ADD_COL_W = 65;

const C = {
    tabBar: '#0a0a0a',
    surface: '#1a1a1a',
    line: '#434343',
    frozenLine: '#5f5f5f',
    text: '#ebebeb',
    tabText: '#f0f0f0',
    muted: '#a6a6a6',
    fieldIcon: '#8f959e',
    rowNum: '#757575',
    accent: '#4c88ff',
};

/** 飞书暗色标签配色（bg 取自截图采样，文字统一 #ebebeb） */
export const TAG = {
    neutral: '#373737',
    slate: '#434343',
    blue: '#173166',
    cyan: '#103647',
    teal: '#173b36',
    green: '#173b12',
    grass: '#21511a',
    lime: '#303804',
    yellow: '#473409',
    orange: '#4a2b10',
    red: '#591f1d',
    carmine: '#591c3f',
    purple: '#3f2073',
    violet: '#5529a3',
};

const FONT =
    '"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", system-ui, sans-serif';

/* ───────────────────────── 图标 ───────────────────────── */

function Svg({ size = 16, children, style }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0, ...style }}
        >
            {children}
        </svg>
    );
}

const I = {
    chevronsRight: (p) => (
        <Svg {...p}>
            <path d="m6 17 5-5-5-5" />
            <path d="m13 17 5-5-5-5" />
        </Svg>
    ),
    chevronDown: (p) => (
        <Svg {...p}>
            <path d="m6 9 6 6 6-6" />
        </Svg>
    ),
    plus: (p) => (
        <Svg {...p}>
            <path d="M12 5v14M5 12h14" />
        </Svg>
    ),
    moreVertical: (p) => (
        <Svg {...p}>
            <circle cx="12" cy="5" r="1" fill="currentColor" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="19" r="1" fill="currentColor" />
        </Svg>
    ),
    grid: (p) => (
        <Svg {...p}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M9 4v16M3 9.5h18" />
        </Svg>
    ),
    gear: (p) => (
        <Svg {...p}>
            <circle cx="12" cy="12" r="3.2" />
            <path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9" />
        </Svg>
    ),
    viewConfig: (p) => (
        <Svg {...p}>
            <rect x="3" y="3" width="14" height="14" rx="2" />
            <path d="M6.5 7.5h7M6.5 11h4" />
            <circle cx="18" cy="18" r="3.2" />
        </Svg>
    ),
    filter: (p) => (
        <Svg {...p}>
            <path d="M3.5 5h17l-6.6 7.6V19l-3.8 2v-8.4z" />
        </Svg>
    ),
    group: (p) => (
        <Svg {...p}>
            <rect x="3" y="4.5" width="18" height="15" rx="2" />
            <path d="M3 10h18M8.5 10v9.5" />
        </Svg>
    ),
    sort: (p) => (
        <Svg {...p}>
            <path d="M5 3.5v17M2 17.5l3 3 3-3" />
            <path d="M11 6h10M11 12h7M11 18h4" />
        </Svg>
    ),
    rowHeight: (p) => (
        <Svg {...p}>
            <path d="M3 4.5h18M3 19.5h18" />
            <path d="M12 8v8M9.5 10.5 12 8l2.5 2.5M9.5 13.5 12 16l2.5-2.5" />
        </Svg>
    ),
    palette: (p) => (
        <Svg {...p}>
            <path d="M12 3a9 9 0 1 0 0 18 2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h1a4 4 0 0 0 4-4 9 9 0 0 0-9-9z" />
            <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
            <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" />
        </Svg>
    ),
    sparkle: (p) => (
        <Svg {...p}>
            <path d="M12 2.8c.5 4.3 1.9 5.7 6.2 6.2-4.3.5-5.7 1.9-6.2 6.2-.5-4.3-1.9-5.7-6.2-6.2 4.3-.5 5.7-1.9 6.2-6.2z" />
            <path d="M18 16.5c.2 1.8.8 2.4 2.6 2.6-1.8.2-2.4.8-2.6 2.6-.2-1.8-.8-2.4-2.6-2.6 1.8-.2 2.4-.8 2.6-2.6z" />
        </Svg>
    ),
    history: (p) => (
        <Svg {...p}>
            <circle cx="11.5" cy="11.5" r="8.5" />
            <path d="M11.5 6.5v5.4l3.4 2" />
            <path d="m17 17.5 4 1.5-1.5 4" />
        </Svg>
    ),
    form: (p) => (
        <Svg {...p}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="m8 12 2.8 2.8L16.5 9" />
        </Svg>
    ),
    share: (p) => (
        <Svg {...p}>
            <path d="M4 19c0-6.1 4.3-9.5 10.5-9.5" />
            <path d="m14 5 5.5 4.5L14 14" />
        </Svg>
    ),
    undo: (p) => (
        <Svg {...p}>
            <path d="M9 14 3.5 8.8 9 3.5" />
            <path d="M3.5 8.8h10.8a6.2 6.2 0 0 1 0 12.4H9" />
        </Svg>
    ),
    redo: (p) => (
        <Svg {...p}>
            <path d="m15 14 5.5-5.2L15 3.5" />
            <path d="M20.5 8.8H9.7a6.2 6.2 0 0 0 0 12.4H15" />
        </Svg>
    ),
    textSearch: (p) => (
        <Svg {...p}>
            <path d="M3 5.5h18M3 10.5h9M3 15.5h6" />
            <circle cx="16" cy="16" r="4" />
            <path d="m19.2 19.2 2 2" />
        </Svg>
    ),
    comment: (p) => (
        <Svg {...p}>
            <path d="M4 4.5h16a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-8.5L7 21v-4.5H4A1.5 1.5 0 0 1 2.5 15V6A1.5 1.5 0 0 1 4 4.5z" />
            <path d="M7.5 10.5h9" />
        </Svg>
    ),
    lock: (p) => (
        <Svg {...p}>
            <rect x="5" y="10.5" width="14" height="10.5" rx="2" />
            <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
        </Svg>
    ),
    select: (p) => (
        <Svg {...p}>
            <circle cx="12" cy="12" r="9" />
            <path d="m8.2 10.4 3.8 3.6 3.8-3.6" />
        </Svg>
    ),
    fieldText: (p) => (
        <Svg {...p}>
            <path d="M1.5 17 6 6.5 10.5 17M3.2 13.2h5.6" />
            <path d="M13.5 8.5h9M13.5 12.5h9M13.5 16.5h6" />
        </Svg>
    ),
};

/* ───────────────────────── 基础件 ───────────────────────── */

function Tag({ color = 'neutral', children }) {
    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: 21,
                padding: '0 10px',
                borderRadius: 999,
                background: TAG[color] || color,
                color: C.text,
                fontSize: 14,
                lineHeight: '21px',
                whiteSpace: 'nowrap',
                maxWidth: '100%',
                overflow: 'hidden',
            }}
        >
            {children}
        </span>
    );
}

function ToolItem({ icon, label, accent, gap = 25 }) {
    const Icon = I[icon];
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                marginRight: gap,
                color: accent ? C.accent : C.muted,
                fontSize: 14,
                whiteSpace: 'nowrap',
            }}
        >
            {Icon && <Icon size={16} />}
            {label}
        </div>
    );
}

/* ───────────────────────── 主体 ───────────────────────── */

export default function BitableView({
    tableName,
    viewName = '全部词条',
    notice,
    columns,
    rows,
    startIndex = 1,
    rowHeight = 33.6,
}) {
    const boxRef = useRef(null);
    const [fit, setFit] = useState({ scale: 1, height: 0 });

    const naturalH = TABBAR_H + TOOLBAR_H + BORDER + HEADER_H + BORDER + rows.length * rowHeight;

    useLayoutEffect(() => {
        const el = boxRef.current;
        if (!el) return;
        const measure = () => {
            const w = el.clientWidth;
            const h = el.clientHeight;
            if (!w || !h) return;
            let s = w / DESIGN_W;
            if (naturalH * s > h) s = h / naturalH;
            setFit({ scale: s, height: h / s });
        };
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
    }, [naturalH]);

    const template = [
        `${GUTTER_W}px`,
        ...columns.map((c) => `${c.width}px`),
        `${ADD_COL_W}px`,
        '1fr',
    ].join(' ');

    const cellBase = {
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 6,
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 14,
        lineHeight: '21px',
        color: C.text,
        minWidth: 0,
        overflow: 'hidden',
    };

    const dividerOf = (i) => (i === 0 ? C.frozenLine : C.line);

    return (
        <div data-bitable-root ref={boxRef} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    width: DESIGN_W,
                    height: Math.max(fit.height, naturalH),
                    transform: `translateX(-50%) scale(${fit.scale})`,
                    transformOrigin: 'top center',
                    background: C.surface,
                    fontFamily: FONT,
                    fontSynthesis: 'none',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* ── 顶部：表名 + 视图页签 ── */}
                <div
                    style={{
                        height: TABBAR_H,
                        flexShrink: 0,
                        background: C.tabBar,
                        display: 'flex',
                        alignItems: 'stretch',
                        paddingLeft: 28,
                        color: C.tabText,
                        fontSize: 14,
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <I.chevronsRight size={18} style={{ color: C.muted }} />
                        <span style={{ marginLeft: 11 }}>{tableName}</span>
                        <I.chevronDown size={15} style={{ color: C.muted, marginLeft: 7 }} />
                    </div>

                    <div
                        style={{
                            marginLeft: 18,
                            alignSelf: 'flex-end',
                            height: 40.8,
                            paddingBottom: 5,
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 15px 5px',
                            background: C.surface,
                            borderRadius: '8px 8px 0 0',
                        }}
                    >
                        <I.grid size={16} style={{ color: C.accent }} />
                        <span style={{ marginLeft: 7 }}>{viewName}</span>
                        <I.moreVertical size={15} style={{ color: C.muted, marginLeft: 9 }} />
                        {notice && (
                            <>
                                <div
                                    style={{
                                        marginLeft: 14,
                                        width: 22,
                                        height: 22,
                                        borderRadius: 5,
                                        background: '#24344f',
                                        color: C.accent,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <I.rowHeight size={14} />
                                </div>
                                <span style={{ color: C.muted, marginLeft: 2 }}>{notice}</span>
                                <span style={{ color: C.accent, marginLeft: 14 }}>清除</span>
                                <span style={{ color: C.accent, marginLeft: 14 }}>保存</span>
                            </>
                        )}
                    </div>

                    <div style={{ marginLeft: 29, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <I.plus size={17} />
                        <span>新建视图</span>
                    </div>
                </div>

                {/* ── 工具栏 ── */}
                <div
                    style={{
                        height: TOOLBAR_H,
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 26px',
                        borderBottom: `${BORDER}px solid ${C.line}`,
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', color: C.accent, fontSize: 14, marginRight: 29 }}>
                        <I.plus size={16} />
                        <span style={{ marginLeft: 5 }}>添加记录</span>
                        <I.chevronDown size={15} style={{ marginLeft: 8 }} />
                    </div>
                    <ToolItem icon="gear" label="字段配置" />
                    <ToolItem icon="viewConfig" label="视图配置" />
                    <ToolItem icon="filter" label="筛选" />
                    <ToolItem icon="group" label="分组" />
                    <ToolItem icon="sort" label="排序" />
                    <ToolItem icon="rowHeight" label="行高" />
                    <ToolItem icon="palette" label="填色" gap={0} />

                    <div style={{ flex: 1 }} />

                    <div style={{ display: 'flex', alignItems: 'center', color: C.muted }}>
                        <I.sparkle size={18} />
                        <div style={{ width: 20 }} />
                        <I.history size={18} />
                        <div style={{ width: 22 }} />
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
                            <I.form size={16} />
                            生成表单
                        </div>
                        <div style={{ width: 22 }} />
                        <I.share size={18} />
                        <div style={{ width: 17 }} />
                        <div style={{ width: 1.2, height: 18, background: '#353535' }} />
                        <div style={{ width: 17 }} />
                        <I.undo size={18} />
                        <div style={{ width: 20 }} />
                        <I.redo size={18} />
                        <div style={{ width: 34 }} />
                        <I.textSearch size={18} />
                        <div style={{ width: 22 }} />
                        <I.comment size={18} />
                    </div>
                </div>

                {/* ── 表头 ── */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: template,
                        height: HEADER_H,
                        flexShrink: 0,
                        borderBottom: `${BORDER}px solid ${C.line}`,
                        color: C.muted,
                        fontSize: 14,
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 9 }}>
                        <div
                            style={{
                                width: 15,
                                height: 15,
                                borderRadius: 3,
                                border: `1.2px solid ${C.fieldIcon}`,
                            }}
                        />
                    </div>

                    {columns.map((col, i) => (
                        <div
                            key={col.key}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                                paddingLeft: i === 0 ? 8 : 8,
                                paddingRight: 8,
                                borderRight: `${BORDER}px solid ${dividerOf(i)}`,
                                minWidth: 0,
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {i === 0 && <I.lock size={14} style={{ color: C.fieldIcon }} />}
                            {col.type === 'text' && <I.fieldText size={15} style={{ color: C.fieldIcon }} />}
                            {col.type === 'select' && <I.select size={15} style={{ color: C.fieldIcon }} />}
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{col.label}</span>
                        </div>
                    ))}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.muted }}>
                        <I.plus size={17} />
                    </div>
                    <div />
                </div>

                {/* ── 数据行 ── */}
                {rows.map((row, r) => (
                    <div
                        key={r}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: template,
                            height: rowHeight,
                            flexShrink: 0,
                            borderBottom: `${BORDER}px solid ${C.line}`,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                paddingTop: 6,
                                paddingLeft: 9,
                                color: C.rowNum,
                                fontSize: 14,
                                lineHeight: '21px',
                            }}
                        >
                            {startIndex + r}
                        </div>

                        {columns.map((col, i) => {
                            const v = row[col.key];
                            return (
                                <div
                                    key={col.key}
                                    style={{
                                        ...cellBase,
                                        borderRight: `${BORDER}px solid ${dividerOf(i)}`,
                                        flexDirection: Array.isArray(v) ? 'column' : 'row',
                                    }}
                                >
                                    {renderCell(v)}
                                </div>
                            );
                        })}

                        <div style={{ borderRight: 'none' }} />
                        <div />
                    </div>
                ))}
            </div>
        </div>
    );
}

function renderCell(v) {
    if (v === undefined || v === null || v === '') return null;
    if (Array.isArray(v)) {
        return v.map((line, k) => (
            <div
                key={k}
                style={{
                    width: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {line}
            </div>
        ));
    }
    if (typeof v === 'object') {
        return <Tag color={v.tag}>{v.text}</Tag>;
    }
    return (
        <span
            style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
        >
            {v}
        </span>
    );
}
