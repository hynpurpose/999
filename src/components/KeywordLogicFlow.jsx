import React from 'react';
import { TAG } from './BitableView';

export { TAG };

export const FLOW_C = {
    surface: '#141414',
    head: '#1a1a1a',
    line: 'rgba(255,255,255,0.1)',
    text: '#ebebeb',
    muted: '#a0a0a0',
    rowNum: '#6b6b6b',
};

export const FLOW_FONT =
    '"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Source Han Sans SC", system-ui, sans-serif';

export function FieldIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8f959e" strokeWidth="1.7">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 9h8M8 12h5M8 15h6" strokeLinecap="round" />
        </svg>
    );
}

export function Badge({ label, color }) {
    return (
        <span
            title={label}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                maxWidth: '100%',
                padding: '3px 8px',
                borderRadius: 999,
                background: color,
                color: FLOW_C.text,
                fontSize: 12.5,
                fontWeight: 600,
                lineHeight: 1.3,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
        >
            {label}
        </span>
    );
}

export function HeadCell({ children, style }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '0 12px',
                borderRight: `1px solid ${FLOW_C.line}`,
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                minWidth: 0,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

export function Cell({ children, style, title }) {
    return (
        <div
            title={title}
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                borderRight: `1px solid ${FLOW_C.line}`,
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

/** 整列合并的流程箭头列 */
export function FlowArrow({ label, width = '18%' }) {
    return (
        <div
            style={{
                width,
                flexShrink: 0,
                alignSelf: 'stretch',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                borderLeft: `1px solid ${FLOW_C.line}`,
                borderRight: `1px solid ${FLOW_C.line}`,
                background: FLOW_C.surface,
                zIndex: 2,
            }}
        >
            <div
                style={{
                    fontSize: 40,
                    fontWeight: 900,
                    letterSpacing: '0.16em',
                    color: '#fff',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                }}
            >
                {label}
            </div>
            <svg width="140" height="40" viewBox="0 0 160 44" fill="none" aria-hidden>
                <path d="M4 22H128" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
                <path d="M118 6L156 22L118 38Z" fill="#fff" />
            </svg>
        </div>
    );
}

/**
 * 左表 | 合并箭头列 | 右表
 * leftHeader / renderLeftRow 使用 grid + leftCols
 * rightHeader / renderRightRow 自定义右侧
 */
export function KeywordLogicFlow({
    rows,
    arrowLabel,
    arrowWidth = '18%',
    rightWidth = '28%',
    leftCols,
    leftHeader,
    renderLeftRow,
    rightHeader,
    renderRightRow,
    rightMinWidth = 260,
}) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: FLOW_C.surface,
                fontFamily: FLOW_FONT,
                color: FLOW_C.text,
                display: 'flex',
                flexDirection: 'row',
                overflow: 'hidden',
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: leftCols,
                        background: FLOW_C.head,
                        borderBottom: `1px solid ${FLOW_C.line}`,
                        height: 40,
                        flexShrink: 0,
                        fontSize: 13,
                        color: '#c8c8c8',
                        fontWeight: 600,
                    }}
                >
                    {leftHeader}
                </div>
                <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                    {rows.map((row, i) => (
                        <div
                            key={i}
                            style={{
                                flex: 1,
                                minHeight: 0,
                                display: 'grid',
                                gridTemplateColumns: leftCols,
                                borderBottom: i < rows.length - 1 ? `1px solid ${FLOW_C.line}` : 'none',
                                alignItems: 'center',
                            }}
                        >
                            {renderLeftRow(row, i)}
                        </div>
                    ))}
                </div>
            </div>

            <FlowArrow label={arrowLabel} width={arrowWidth} />

            <div
                style={{
                    width: rightWidth,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: rightMinWidth,
                }}
            >
                <div
                    style={{
                        background: FLOW_C.head,
                        borderBottom: `1px solid ${FLOW_C.line}`,
                        height: 40,
                        flexShrink: 0,
                        fontSize: 13,
                        color: '#c8c8c8',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'stretch',
                        minWidth: 0,
                    }}
                >
                    {rightHeader}
                </div>
                <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                    {rows.map((row, i) => (
                        <div
                            key={i}
                            style={{
                                flex: 1,
                                minHeight: 0,
                                borderBottom: i < rows.length - 1 ? `1px solid ${FLOW_C.line}` : 'none',
                                minWidth: 0,
                            }}
                        >
                            {renderRightRow(row, i)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function Clamp({ children, lines = 2 }) {
    return (
        <span
            style={{
                display: '-webkit-box',
                WebkitLineClamp: lines,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: 1.35,
            }}
        >
            {children}
        </span>
    );
}
