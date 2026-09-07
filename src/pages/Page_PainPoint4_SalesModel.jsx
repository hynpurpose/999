import React from 'react';
import { C, Tag, GhostButton, Icon, ShotThumb } from '../components/geoone/ui';
import { NEGATIVE_CASES, pickCases } from './painpointNegatives.js';

/* ══════════════ 数据：换展示条目时只改这一段 ══════════════ */
/* 来源：GEO ONE /api/sentiments/negative-answers · 440 ToC + 441 ToB · 共 16 条，此处取 6 条 */
const SHOWN = pickCases([
    ['三九养胃舒颗粒适合胃热灼痛吗', '药性判断完全颠倒'],
    ['三九养胃舒颗粒性价比怎么样', '12-18'],
    ['三九养胃舒颗粒能长期吃吗', '滋腻碍胃'],
    ['三九养胃舒颗粒医保能报销吗', '甲类品种'],
    ['三九养胃舒颗粒适合医院引进吗', '否认药品目录'],
    ['三九养胃舒颗粒和摩罗丹哪个更适合医院进货', '优先摩罗丹'],
]);

/** 按 GEO ONE 真实截图还原：词条 / 类型 / 问题总结 / 会话截图 / 操作 + 底栏分页 */
function NegativeListTable({ rows = SHOWN, total = NEGATIVE_CASES.length }) {
    const cols = [
        { key: 'term', w: 360, label: '词条' },
        { key: 'type', w: 100, label: '类型', filter: true },
        { key: 'summary', flex: 1, label: '问题总结' },
        { key: 'shot', w: 100, label: '会话截图' },
        { key: 'action', w: 80, label: '操作' },
    ];

    return (
        <div
            className="w-full h-full rounded-xl overflow-hidden flex flex-col bg-white shadow-sm"
            style={{ border: `1px solid ${C.border}`, fontFamily: 'inherit' }}
        >
            <div
                className="shrink-0 flex items-center px-5"
                style={{ height: 52, borderBottom: `1px solid ${C.border}` }}
            >
                <span style={{ fontSize: 18, fontWeight: 700, color: C.text }}>负面回答列表</span>
            </div>

            <div
                className="shrink-0 flex items-center px-4"
                style={{
                    height: 42,
                    background: C.headBg,
                    borderBottom: `1px solid ${C.border}`,
                    fontSize: 13.5,
                    color: C.muted,
                    fontWeight: 600,
                }}
            >
                {cols.map((c) => (
                    <div
                        key={c.key}
                        style={{
                            width: c.w,
                            flex: c.flex || 'none',
                            flexShrink: c.flex ? 1 : 0,
                            paddingRight: 12,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                        }}
                    >
                        {c.label}
                        {c.filter ? <Icon.filter size={14} style={{ color: C.faint }} /> : null}
                    </div>
                ))}
            </div>

            <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
                {rows.map((r, i) => (
                    <div
                        key={i}
                        className="flex items-center px-4"
                        style={{
                            flex: 1,
                            minHeight: 0,
                            borderBottom: `1px solid ${C.border}`,
                        }}
                    >
                        <div
                            style={{
                                width: cols[0].w,
                                minWidth: cols[0].w,
                                maxWidth: cols[0].w,
                                flexShrink: 0,
                                fontSize: 14,
                                fontWeight: 600,
                                color: C.text,
                                paddingRight: 12,
                                boxSizing: 'border-box',
                                lineHeight: '22px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            title={r.term}
                        >
                            {r.term}
                        </div>
                        <div style={{ width: cols[1].w, flexShrink: 0, paddingRight: 12 }}>
                            <Tag color={r.color}>{r.type}</Tag>
                        </div>
                        <div
                            style={{
                                flex: 1,
                                minWidth: 0,
                                fontSize: 14.5,
                                fontWeight: 500,
                                color: '#1e293b',
                                paddingRight: 16,
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                lineHeight: '20px',
                            }}
                        >
                            {r.summary}
                        </div>
                        <div
                            style={{
                                width: cols[3].w,
                                flexShrink: 0,
                                paddingRight: 12,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <ShotThumb src={r.screenshot} width={52} height={38} />
                        </div>
                        <div style={{ width: cols[4].w, flexShrink: 0 }}>
                            {r.screenshot ? (
                                <GhostButton height={28} fontSize={13}>
                                    查看
                                </GhostButton>
                            ) : (
                                <span style={{ color: C.faint, fontSize: 14, paddingLeft: 8 }}>—</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="shrink-0 flex items-center justify-between px-5"
                style={{
                    height: 48,
                    borderTop: `1px solid ${C.border}`,
                    color: C.muted,
                    fontSize: 13,
                }}
            >
                <div className="flex items-center gap-4">
                    <span>共 {total} 条数据</span>
                    <div className="flex items-center gap-2">
                        <span>每页行数</span>
                        <div
                            style={{
                                height: 28,
                                minWidth: 52,
                                padding: '0 8px',
                                border: `1px solid ${C.border}`,
                                borderRadius: 6,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 6,
                                color: C.text,
                                background: C.white,
                            }}
                        >
                            <span>10</span>
                            <Icon.chevronDown size={14} style={{ color: C.faint }} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-1.5">
                    {[
                        { label: '«', disabled: true },
                        { label: '‹', disabled: true },
                        { label: '1', active: true },
                        { label: '›', disabled: true },
                        { label: '»', disabled: true },
                    ].map((b, i) => (
                        <div
                            key={i}
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: 6,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 13,
                                fontWeight: b.active ? 700 : 500,
                                background: b.active ? C.text : 'transparent',
                                color: b.active ? '#fff' : b.disabled ? C.faint : C.muted,
                                border: b.active ? 'none' : `1px solid transparent`,
                            }}
                        >
                            {b.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Page_PainPoint4_SalesModel() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-white text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">03</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-white tracking-wider">
                    说明书没写的，AI 却当成事实讲
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-white text-xl lg:text-[24px] xl:text-[26px] font-bold leading-relaxed tracking-wide mb-4 shrink-0">
                    药性寒热、医保甲乙、目录里有没有这个药，都被写歪过。AI 把这些当成产品事实讲，就成了品牌风险。
                </p>

                <div className="flex-1 flex items-center justify-center min-h-0 pb-0">
                    <div className="w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="w-full h-full max-w-full max-h-full rounded-lg overflow-hidden bg-[#f4f6f9] p-3">
                            <NegativeListTable rows={SHOWN} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
