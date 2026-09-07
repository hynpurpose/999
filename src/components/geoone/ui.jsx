import React from 'react';

/**
 * GEO ONE 监测后台（浅色）界面的代码复刻——公共设计令牌、图标与基础控件。
 *
 * 所有尺寸均为 1 倍 CSS 像素，取自原始截图（2 倍图）的像素采样：
 * 应用整体设计宽度 1586px，其中左侧导航 286px。
 */

export const DESIGN_W = 1586;
export const SIDEBAR_W = 286;

export const C = {
    text: '#020618',
    strong: '#0f172b',
    muted: '#62748e',
    faint: '#90a1b9',
    border: '#e2e8f0',
    divider: '#f1f5f9',
    soft: '#f1f5f9',
    headBg: '#f7f9fc',
    white: '#ffffff',
    blue: '#2b7fff',
    blueText: '#155dfc',
    blueSoft: '#eff6ff',
    bar: '#252525',
    axis: '#888888',
    grid: '#e5e7eb',
    green: '#00a441',
    red: '#f43131',
    gold: '#ffd700',
    silver: '#d4d4d8',
    bronze: '#f5a97a',
};

export const FONT =
    '"PingFang SC", "HarmonyOS Sans SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", system-ui, sans-serif';

export const MONO = '"SF Mono", "JetBrains Mono", Consolas, monospace';

/* ───────────────────────── 图标 ───────────────────────── */

function Svg({ size = 16, stroke = 1.6, children, style, viewBox = '0 0 24 24' }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox={viewBox}
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0, display: 'block', ...style }}
        >
            {children}
        </svg>
    );
}

export const Icon = {
    globe: (p) => (
        <Svg {...p}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
        </Svg>
    ),
    panelLeft: (p) => (
        <Svg {...p}>
            <rect x="3" y="3" width="18" height="18" rx="2.5" />
            <path d="M9 3v18" />
        </Svg>
    ),
    chevronsUpDown: (p) => (
        <Svg {...p}>
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </Svg>
    ),
    chevronDown: (p) => (
        <Svg {...p}>
            <path d="m6 9 6 6 6-6" />
        </Svg>
    ),
    grid: (p) => (
        <Svg {...p}>
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </Svg>
    ),
    listCheck: (p) => (
        <Svg {...p}>
            <path d="m3 6 2 2 3-3" />
            <path d="m3 16 2 2 3-3" />
            <path d="M11 7h10M11 17h10" />
        </Svg>
    ),
    users: (p) => (
        <Svg {...p}>
            <path d="M15 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
            <circle cx="8.5" cy="7" r="3.5" />
            <path d="M17 4.5a3.5 3.5 0 0 1 0 6.8" />
            <path d="M22 20v-1.5a4 4 0 0 0-3-3.8" />
        </Svg>
    ),
    quote: (p) => (
        <Svg {...p}>
            <path d="M21 13a2 2 0 0 1-2 2H8l-4 3.5V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" />
            <path d="m15 11 2.5 2.5" />
        </Svg>
    ),
    heart: (p) => (
        <Svg {...p}>
            <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1l8.8 8.7 8.8-8.7a5 5 0 0 0 0-7.1z" />
        </Svg>
    ),
    settings: (p) => (
        <Svg {...p}>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
        </Svg>
    ),
    calendar: (p) => (
        <Svg {...p}>
            <rect x="3" y="5" width="18" height="16" rx="2.5" />
            <path d="M3 10h18M8 3v4M16 3v4" />
        </Svg>
    ),
    layers: (p) => (
        <Svg {...p}>
            <path d="M12 3 3 7.5 12 12l9-4.5z" />
            <path d="m3 13 9 4.5L21 13" />
        </Svg>
    ),
    target: (p) => (
        <Svg {...p}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        </Svg>
    ),
    help: (p) => (
        <Svg {...p}>
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.6.2-.7.6-.7 1.1v.5" />
            <path d="M12 17h.01" />
        </Svg>
    ),
    arrowUpRight: (p) => (
        <Svg {...p}>
            <path d="M7 17 17 7M9 7h8v8" />
        </Svg>
    ),
    filter: (p) => (
        <Svg {...p}>
            <path d="M3 5h18l-7 8v6l-4 2v-8z" />
        </Svg>
    ),
    columns: (p) => (
        <Svg {...p}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M9 4v16M15 4v16" />
        </Svg>
    ),
    coin: (p) => (
        <Svg {...p}>
            <circle cx="12" cy="12" r="9" />
            <path d="M15 9.5A3 3 0 0 0 9.8 11c0 2.5 4.4 1.5 4.4 4a3 3 0 0 1-5.2 1.5" />
            <path d="M12 7.2v9.6" />
        </Svg>
    ),
};

/* ───────────────────────── 平台 / 站点小图标 ───────────────────────── */

/** GEO ONE 官方平台 logo（本地缓存自 app.geoindexfuture.com/logo） */
const PLATFORM_LOGO = {
    deepseek: '/geo-platforms/deepseek.png',
    doubao: '/geo-platforms/doubao.png',
    yuanbao: '/geo-platforms/yuanbao.png',
    qwen: '/geo-platforms/qwen.png',
    afu: '/geo-platforms/afu.png',
};

export function PlatformLogo({ name, size = 22 }) {
    const src = PLATFORM_LOGO[name];
    if (!src) return null;
    return (
        <img
            src={src}
            alt={name}
            width={size}
            height={size}
            draggable={false}
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
                flexShrink: 0,
                background: '#fff',
            }}
        />
    );
}

/** DeepSeek：官方 logo */
export function IconDeepSeek({ size = 22 }) {
    return <PlatformLogo name="deepseek" size={size} />;
}

/** 豆包：官方 logo */
export function IconDoubao({ size = 22 }) {
    return <PlatformLogo name="doubao" size={size} />;
}

/** 通义千问：官方 logo */
export function IconQwen({ size = 22 }) {
    return <PlatformLogo name="qwen" size={size} />;
}

/** 元宝：官方 logo */
export function IconYuanbao({ size = 22 }) {
    return <PlatformLogo name="yuanbao" size={size} />;
}

/** 蚂蚁阿福：官方 logo */
export function IconAfu({ size = 22 }) {
    return <PlatformLogo name="afu" size={size} />;
}

/** 监测平台叠放圆标（词条表用） */
export function PlatformDots({ size = 22, overlap = 6 }) {
    const names = ['deepseek', 'doubao', 'yuanbao', 'qwen', 'afu'];
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {names.map((name, i) => (
                <div
                    key={name}
                    style={{
                        marginLeft: i === 0 ? 0 : -overlap,
                        borderRadius: '50%',
                        boxShadow: '0 0 0 1.5px #fff',
                        zIndex: names.length - i,
                    }}
                >
                    <PlatformLogo name={name} size={size} />
                </div>
            ))}
        </div>
    );
}

/** 会话截图缩略图 */
export function ShotThumb({ src, width = 28, height = 38 }) {
    if (!src) {
        return (
            <div
                style={{
                    width,
                    height,
                    borderRadius: 4,
                    border: `1px solid ${C.border}`,
                    background: 'linear-gradient(180deg,#f8fafc 0%,#e2e8f0 100%)',
                }}
            />
        );
    }
    return (
        <img
            src={src}
            alt="会话截图"
            draggable={false}
            style={{
                width,
                height,
                borderRadius: 4,
                border: `1px solid ${C.border}`,
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
                background: '#f8fafc',
            }}
        />
    );
}

/** 中国商报网：红色印章样式 */
export function IconZgswcn({ size = 22 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: 'block' }}>
            <circle cx="16" cy="16" r="15" fill="#fff" />
            <path
                d="M22.6 5.6c-3.6.7-6.4 2.6-8.2 5.2-1.4 2-1.4 3.9-.2 5 1.3 1.2 3.4.9 5.4-.5 1.3-.9 2.3-.6 2.6.4.4 1.3-.7 3.1-2.8 4.6-2.8 2-6.6 2.7-9.9 1.6l-.6 1.7c4 1.4 8.6.6 12-1.8 2.9-2.1 4.3-4.9 3.4-7.2-.8-2.1-3.2-2.7-5.6-1.3-1.3.8-2.4.7-2.7-.1-.3-.9.5-2.3 2-3.5 1.6-1.3 3.7-2.2 5.9-2.6z"
                fill="#E03131"
            />
            <path
                d="M9.4 8.4c-2.4 1.9-3.8 4.4-3.6 6.7.2 2.5 2.4 3.9 5.2 3.3l.3-1.8c-1.8.3-3.1-.4-3.2-1.8-.1-1.5.9-3.3 2.7-4.7z"
                fill="#E03131"
                opacity=".75"
            />
        </svg>
    );
}

/** 通用站点：灰蓝地球 */
export function IconSite({ size = 22, color = '#64748b' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block' }}>
            <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="1.7" />
            <path
                d="M2 12h20M12 2a16 16 0 0 1 0 20a16 16 0 0 1 0-20"
                fill="none"
                stroke={color}
                strokeWidth="1.7"
            />
        </svg>
    );
}

/** 深色方形站点图标（www.foodaily.com 等） */
export function IconSquareSite({ size = 22, label = 'F', bg = '#111827' }) {
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: 4,
                background: bg,
                color: '#fff',
                fontSize: size * 0.55,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
            }}
        >
            {label}
        </div>
    );
}

/** 网易：红色方形 */
export function IconNetease({ size = 22 }) {
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: 4,
                background: '#C8342B',
                color: '#fff',
                fontSize: size * 0.46,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                letterSpacing: '-0.5px',
            }}
        >
            网易
        </div>
    );
}

/* ───────────────────────── 基础控件 ───────────────────────── */

/** 白底圆角卡片，边框 #e2e8f0 */
export function Card({ children, style, radius = 12, pad = 0 }) {
    return (
        <div
            style={{
                background: C.white,
                border: `1px solid ${C.border}`,
                borderRadius: radius,
                padding: pad,
                boxSizing: 'border-box',
                ...style,
            }}
        >
            {children}
        </div>
    );
}

/** 顶部筛选条上的胶囊控件：左侧字段名，中间细分隔线，右侧带浅灰底的取值 */
export function FilterChip({ icon, label, value, active }) {
    const IconCmp = icon ? Icon[icon] : null;
    if (active) {
        return (
            <div
                style={{
                    height: 35,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '0 15px',
                    borderRadius: 10,
                    background: C.blueSoft,
                    color: C.blueText,
                    fontSize: 17,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                }}
            >
                {IconCmp && <IconCmp size={18} />}
                <span>{label}</span>
                <span style={{ color: '#a9c3f5', fontWeight: 400 }}>|</span>
                <span>{value}</span>
            </div>
        );
    }
    return (
        <div
            style={{
                height: 35,
                display: 'flex',
                alignItems: 'center',
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                whiteSpace: 'nowrap',
                background: C.white,
                padding: '0 9px 0 12px',
                gap: 10,
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 17, color: C.strong }}>
                {IconCmp && <IconCmp size={18} style={{ color: '#334155' }} />}
                {label}
            </div>
            <div style={{ width: 1, height: 15, background: C.border }} />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 9,
                    fontSize: 17,
                    color: C.strong,
                }}
            >
                <span style={{ background: C.soft, borderRadius: 6, padding: '3px 8px' }}>{value}</span>
                <Icon.chevronDown size={16} style={{ color: '#94a3b8' }} />
            </div>
        </div>
    );
}

/** 开关 */
export function Toggle({ on = false, size = 1 }) {
    const w = 40 * size;
    const h = 22 * size;
    const k = h - 6 * size;
    return (
        <div
            style={{
                width: w,
                height: h,
                borderRadius: h / 2,
                background: on ? C.blue : '#e2e8f0',
                position: 'relative',
                flexShrink: 0,
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 3 * size,
                    left: on ? w - k - 3 * size : 3 * size,
                    width: k,
                    height: k,
                    borderRadius: '50%',
                    background: '#fff',
                    boxShadow: '0 1px 2px rgba(0,0,0,.2)',
                }}
            />
        </div>
    );
}

/** 复选框 */
export function Checkbox({ checked = false, size = 17 }) {
    return (
        <div
            style={{
                width: size,
                height: size,
                borderRadius: 4,
                border: checked ? 'none' : `1px solid #cbd5e1`,
                background: checked ? C.blue : C.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
            }}
        >
            {checked && (
                <svg width={size * 0.68} height={size * 0.68} viewBox="0 0 24 24" fill="none">
                    <path d="m5 12.5 4.5 4.5L19 7" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </div>
    );
}

/** 排行榜名次徽章：前三名有配色，其余为纯数字 */
export function RankBadge({ n, size = 22 }) {
    const fill = n === 1 ? C.gold : n === 2 ? '#e4e4e7' : n === 3 ? '#fbbf88' : null;
    const fs = Math.max(12, Math.round(size * 0.52));
    if (!fill) {
        return (
            <span
                style={{
                    width: size,
                    textAlign: 'center',
                    fontSize: fs,
                    color: C.muted,
                    flexShrink: 0,
                }}
            >
                {n}
            </span>
        );
    }
    return (
        <span
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                background: fill,
                color: n === 1 ? '#7a5b00' : n === 2 ? '#52525b' : '#8a4b1d',
                fontSize: fs,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
            }}
        >
            {n}
        </span>
    );
}

/** 彩色文字标签 */
export function Tag({ children, color = 'red' }) {
    const map = {
        red: { bg: '#fdeaea', fg: '#d94f4f' },
        orange: { bg: '#fdf0e3', fg: '#e08c2e' },
        blue: { bg: '#e8f0fe', fg: '#3b7bd8' },
        green: { bg: '#e7f7ee', fg: '#1a9c5b' },
        gray: { bg: '#f1f5f9', fg: '#64748b' },
    };
    const s = map[color] || map.red;
    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: s.bg,
                color: s.fg,
                fontSize: 12.5,
                fontWeight: 600,
                padding: '3px 9px',
                borderRadius: 5,
                whiteSpace: 'nowrap',
            }}
        >
            {children}
        </span>
    );
}

/** “目标产品”灰底小标签 */
export function SoftTag({ children }) {
    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: C.soft,
                color: C.muted,
                fontSize: 14,
                padding: '3px 8px',
                borderRadius: 5,
                whiteSpace: 'nowrap',
            }}
        >
            {children}
        </span>
    );
}

/** 次要按钮（展开 / 查看 / 管理列 等），图标默认在文字右侧 */
export function GhostButton({ children, icon, iconLeft, height = 33, style, fontSize = 17 }) {
    const IconCmp = icon ? Icon[icon] : null;
    const IconLeftCmp = iconLeft ? Icon[iconLeft] : null;
    return (
        <div
            style={{
                height,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                padding: '0 13px',
                border: `1px solid ${C.border}`,
                borderRadius: 9,
                fontSize,
                color: C.strong,
                background: C.white,
                whiteSpace: 'nowrap',
                ...style,
            }}
        >
            {IconLeftCmp && <IconLeftCmp size={16} style={{ color: C.muted }} />}
            {children}
            {IconCmp && <IconCmp size={15} style={{ color: '#334155' }} />}
        </div>
    );
}

/** 区块小标题（卡片上方的浅灰说明文字） */
export function SubLabel({ children, style }) {
    return (
        <div style={{ fontSize: 16, color: C.muted, marginBottom: 9, ...style }}>{children}</div>
    );
}
