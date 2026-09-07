import React, { useLayoutEffect, useRef, useState } from 'react';
import { C, DESIGN_W, FONT, SIDEBAR_W, Icon, FilterChip } from './ui';

/**
 * GEO ONE 后台界面外壳：左侧导航 + 顶部筛选条。
 * 内部按 1586px 设计宽度绘制，再整体等比缩放填满幻灯片容器。
 */

const NAV = [
    { key: '总览', icon: 'grid' },
    { key: '词条', icon: 'listCheck' },
    { key: '竞品对比', icon: 'users' },
    { key: '引用来源', icon: 'quote' },
    { key: '正负面', icon: 'heart' },
];

const NAV_TOP = 170.5;
const NAV_STEP = 40.5;
const NAV_H = 36;
const PAD_X = 18;

/* ───────────────────────── 缩放舞台 ───────────────────────── */

/** 把固定设计尺寸的内容等比缩放进容器 */
export function GeoOneStage({ width = DESIGN_W, height, children, align = 'top' }) {
    const boxRef = useRef(null);
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        const el = boxRef.current;
        if (!el) return;
        const measure = () => {
            const w = el.clientWidth;
            const h = el.clientHeight;
            if (!w || !h) return;
            setScale(Math.min(w / width, h / height));
        };
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
    }, [width, height]);

    return (
        <div
            ref={boxRef}
            data-geoone-root
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: align === 'center' ? 'center' : 'flex-start',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width,
                    height,
                    flexShrink: 0,
                    transform: `scale(${scale})`,
                    transformOrigin: align === 'center' ? 'center center' : 'top center',
                    background: C.white,
                    fontFamily: FONT,
                    color: C.text,
                    WebkitFontSmoothing: 'antialiased',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {children}
            </div>
        </div>
    );
}

/* ───────────────────────── 侧边栏 ───────────────────────── */

function Sidebar({ active, brand, brandSub, brandBadge, avatar }) {
    return (
        <div
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: SIDEBAR_W,
                borderRight: `1px solid ${C.divider}`,
                boxSizing: 'border-box',
            }}
        >
            {/* 产品标识 */}
            <div style={{ position: 'absolute', left: 27, top: 18, display: 'flex', alignItems: 'center' }}>
                <div
                    style={{
                        width: 31,
                        height: 31,
                        borderRadius: 8,
                        background: '#171717',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Icon.globe size={19} />
                </div>
                <span style={{ marginLeft: 10, fontSize: 20, letterSpacing: '0.2px', color: '#171717' }}>
                    GEO ONE
                </span>
            </div>
            <div
                style={{
                    position: 'absolute',
                    right: 22,
                    top: 17,
                    width: 33,
                    height: 33,
                    borderRadius: 9,
                    border: `1px solid ${C.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1e293b',
                }}
            >
                <Icon.panelLeft size={19} />
            </div>

            {/* 品牌切换卡 */}
            <div style={{ position: 'absolute', left: 27, top: 69, right: 20, display: 'flex', alignItems: 'center' }}>
                <div
                    style={{
                        width: 37,
                        height: 37,
                        borderRadius: 10,
                        background: '#1c2236',
                        color: '#fff',
                        fontSize: 17,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}
                >
                    {avatar}
                </div>
                <div style={{ marginLeft: 10, minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#0b0f1a', lineHeight: '21px', whiteSpace: 'nowrap' }}>
                        {brand}
                        {brandBadge}
                    </div>
                    <div style={{ fontSize: 15, color: C.faint, lineHeight: '19px', whiteSpace: 'nowrap' }}>
                        {brandSub}
                    </div>
                </div>
                <Icon.chevronsUpDown size={17} style={{ color: '#334155', marginLeft: 4 }} />
            </div>

            {/* 分组：数据监控 */}
            <div style={{ position: 'absolute', left: 27, top: 143, fontSize: 13, color: '#8b98a9' }}>
                数据监控
            </div>
            {NAV.map((n, i) => {
                const on = n.key === active;
                const IconCmp = Icon[n.icon];
                return (
                    <div
                        key={n.key}
                        style={{
                            position: 'absolute',
                            left: PAD_X,
                            top: NAV_TOP + i * NAV_STEP,
                            width: SIDEBAR_W - PAD_X * 2,
                            height: NAV_H,
                            borderRadius: 9,
                            background: on ? C.soft : 'transparent',
                            border: on && active === '正负面' ? `1px solid ${C.border}` : 'none',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: 10,
                            boxSizing: 'border-box',
                        }}
                    >
                        <IconCmp size={19} style={{ color: '#1e293b' }} />
                        <span style={{ marginLeft: 8, fontSize: 16, color: '#0b0f1a' }}>{n.key}</span>
                    </div>
                );
            })}

            {/* 分组：其他 */}
            <div style={{ position: 'absolute', left: 27, top: 404, fontSize: 13, color: '#8b98a9' }}>
                其他
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: PAD_X,
                    top: 431,
                    width: SIDEBAR_W - PAD_X * 2,
                    height: NAV_H,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 10,
                    boxSizing: 'border-box',
                }}
            >
                <Icon.settings size={19} style={{ color: '#1e293b' }} />
                <span style={{ marginLeft: 8, fontSize: 16, color: '#0b0f1a' }}>设置</span>
            </div>

            {/* 底部账号卡 */}
            <div style={{ position: 'absolute', left: 27, bottom: 24, right: 22, display: 'flex', alignItems: 'center' }}>
                <div
                    style={{
                        width: 37,
                        height: 37,
                        borderRadius: 10,
                        background: C.soft,
                        color: '#334155',
                        fontSize: 17,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}
                >
                    {avatar}
                </div>
                <div style={{ marginLeft: 10, minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#0b0f1a', lineHeight: '21px', whiteSpace: 'nowrap' }}>
                        {brandSub}
                    </div>
                    <div style={{ fontSize: 15, color: C.faint, lineHeight: '19px', whiteSpace: 'nowrap' }}>
                        {brandSub}
                    </div>
                </div>
                <Icon.chevronsUpDown size={17} style={{ color: '#334155', marginLeft: 4 }} />
            </div>
        </div>
    );
}

/* ───────────────────────── 外壳 ───────────────────────── */

export const MAIN_LEFT = SIDEBAR_W + 20;
export const MAIN_W = 1258;

export default function GeoOneApp({
    width = DESIGN_W,
    height = 892.5,
    active = '总览',
    title,
    brand = '养胃舒颗粒(ToC)',
    brandBadge = '',
    brandSub = '三九养胃舒颗粒',
    avatar = '养',
    target = '养胃舒颗粒',
    entry = '全部',
    toolbarRight,
    children,
}) {
    const mainW = width - MAIN_LEFT - 22;
    return (
        <GeoOneStage width={width} height={height}>
            <Sidebar
                active={active}
                brand={brand}
                brandBadge={brandBadge}
                brandSub={brandSub}
                avatar={avatar}
            />

            {/* 页面标题 */}
            <div
                style={{
                    position: 'absolute',
                    left: MAIN_LEFT,
                    top: 36,
                    fontSize: 23,
                    fontWeight: 700,
                    color: C.text,
                }}
            >
                {title}
            </div>

            {/* 筛选条 */}
            <div
                style={{
                    position: 'absolute',
                    left: MAIN_LEFT,
                    top: 81,
                    width: mainW,
                    height: 35,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 13,
                }}
            >
                <FilterChip icon="calendar" label="日期" value="最近7天" />
                <FilterChip icon="layers" label="平台" value="全部" />
                <FilterChip icon="listCheck" label="词条" value={entry} />
                <FilterChip icon="target" label="目标产品" value={target} active />
                {toolbarRight && (
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
                        {toolbarRight}
                    </div>
                )}
            </div>

            {children}
        </GeoOneStage>
    );
}
