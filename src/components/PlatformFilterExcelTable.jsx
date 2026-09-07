import React from 'react';

const FONT =
    '"PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", system-ui, sans-serif';

/** 精致一点的 Excel 表壳：保留色系与网格感，略增留白与字重层次 */
export function ExcelShell({ children, style }) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#fff',
                fontFamily: FONT,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                color: '#1a1a1a',
                WebkitFontSmoothing: 'antialiased',
                ...style,
            }}
        >
            {children}
        </div>
    );
}

export function TitleBar({ bg, children, align = 'center' }) {
    return (
        <div
            style={{
                flexShrink: 0,
                background: bg,
                color: '#fff',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: '0.04em',
                padding: '8px 16px',
                textAlign: align,
                lineHeight: 1.35,
                whiteSpace: 'nowrap',
            }}
        >
            {children}
        </div>
    );
}

export function MetaLine({ children }) {
    return (
        <div
            style={{
                flexShrink: 0,
                padding: '7px 14px',
                fontSize: 13.5,
                color: '#6b7280',
                background: '#fafafa',
                borderBottom: '1px solid #e8eef4',
                lineHeight: 1.5,
            }}
        >
            {children}
        </div>
    );
}

export function LogicLine({ children, color = '#1d6fbf' }) {
    return (
        <div
            style={{
                flexShrink: 0,
                padding: '8px 14px',
                fontSize: 14,
                color,
                fontStyle: 'italic',
                background: '#fff',
                borderBottom: '1px solid #e8eef4',
                lineHeight: 1.5,
            }}
        >
            {children}
        </div>
    );
}

export function SubBanner({ bg, color, children }) {
    return (
        <div
            style={{
                flexShrink: 0,
                background: bg,
                color,
                fontSize: 14.5,
                fontWeight: 700,
                padding: '8px 14px',
                textAlign: 'center',
                borderBottom: '1px solid #d5e2ef',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
            }}
        >
            {children}
        </div>
    );
}

export function Cell({
    children,
    align = 'center',
    bold,
    border,
    style,
    title,
}) {
    return (
        <div
            title={title}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:
                    align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
                padding: '0 8px',
                borderRight: border ? `1px solid ${border}` : 'none',
                boxSizing: 'border-box',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontWeight: bold ? 700 : 400,
                minWidth: 0,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

export function Stars({ n = 0 }) {
    return (
        <span style={{ letterSpacing: 1, color: '#1a1a1a', fontSize: 14.5 }}>{'★'.repeat(n)}</span>
    );
}
