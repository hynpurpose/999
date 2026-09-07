import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT } from '../components/geoone/GeoOneApp';
import { C, Tag, GhostButton } from '../components/geoone/ui';
import { pickCases } from './painpointNegatives.js';
import geoSentiment from '../data/geoSentiment.json';

/* ══════════════ 数据：换负面回答列表时只改这一段 ══════════════ */
/* 来源：GEO ONE /api/sentiments/negative-answers · 440 ToC / 441 ToB · 2026-08-14 */

const TARGET = '养胃舒颗粒';

/** 舞台宽度按幻灯片内容区等宽反推：1792 / 633 ≈ 2.83，取 2220×633 使白框铺满 */
const APP_W = 2220;
const APP_H = 633;
const MAIN_W = APP_W - MAIN_LEFT - 22;

const TOC_TOTAL = geoSentiment['440']?.negatives?.total ?? 7;
const TOB_TOTAL = geoSentiment['441']?.negatives?.total ?? 9;

/** C端监测词：消费者侧品名片事实与口碑 */
const BRAND_ROWS = pickCases([
    ['三九养胃舒颗粒适合胃热灼痛吗', '药性判断完全颠倒'],
    ['三九养胃舒颗粒贵吗', '医保甲类'],
    ['三九养胃舒颗粒能长期吃吗', '滋腻碍胃'],
    ['三九养胃舒颗粒效果怎么样', '用法用量错误'],
    ['三九养胃舒颗粒性价比怎么样', '12-18'],
    ['三九养胃舒颗粒副作用大吗', '损伤胃部'],
]);

/** B端监测词：医院/药店渠道侧 */
const COMPARE_ROWS = pickCases([
    ['三九养胃舒颗粒适合医院引进吗', '否认药品目录'],
    ['三九养胃舒颗粒进货划算吗', '动销慢'],
    ['三九养胃舒颗粒货源稳定吗', '基药目录'],
    ['三九养胃舒颗粒消化科常备吗', '医保甲类'],
    ['三九养胃舒颗粒和摩罗丹哪个更适合医院进货', '优先摩罗丹'],
    ['三九养胃舒颗粒医院采购方便吗', '集采目录'],
]);

const COLS = [
    { key: 'term', w: 390, label: '词条' },
    { key: 'type', w: 140, label: '类型' },
    { key: 'summary', w: 410, label: '问题总结' },
    { key: 'answer', w: MAIN_W - 390 - 140 - 410 - 110, label: '具体回答' },
    { key: 'action', w: 110, label: '操作' },
];

/* 每条对应 geoSentiment.json 中的真实负面回答，标题即结论，正文按「AI 怎么说 → 实际是什么 → 后果」一句话讲完 */
const FOOTER_NOTES = {
    brand: [
        {
            title: '把滋阴养胃说成了温燥禁用',
            body: '说明书的主治就是胃脘灼热、隐隐作痛，AI 却回答本品药性温补温燥、胃热的人禁用。用户问「适合胃热灼痛吗」，当场就被劝退。',
        },
        {
            title: '医保乙类被说成甲类',
            body: '实际是国家医保乙类、需要先行自付，AI 却反复说成甲类、门诊能报七成；顺带把用法写成一日三次，价格压到 12–18 元。',
        },
        {
            title: '「长期吃伤胃」被当成结论',
            body: '说明书的不良反应写的是「尚不明确」，AI 却把滋腻碍胃、促进分泌伤胃当成主要缺点，还建议连续服用不要超过四周。',
        },
    ],
    compare: [
        {
            title: '基药、甲类、集采，政策属性全说错',
            body: '养胃舒既没进国家基药目录，也不是医保甲类，更没被集采收录。九条负面里六条踩中这类错误，采购与进院会照着错的政策走。',
        },
        {
            title: '连品名都被否认',
            body: 'AI 直接回答「药品目录里没有三九养胃舒颗粒」，让人去认三九胃泰，医院引进的问询在第一句就被挡了回去。',
        },
        {
            title: '二选一时被判给摩罗丹',
            body: '问「和摩罗丹哪个更适合进货」，两次回答都选摩罗丹——理由是指南弱推荐、非基药、无萎缩性胃炎适应症，本品只配少量备货。',
        },
    ],
};

function FooterNotes({ notes }) {
    return (
        <div className="h-[28%] min-h-[170px] max-h-[220px] shrink-0 w-full">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-3 lg:p-3.5 flex flex-col h-full justify-between gap-2 shadow-2xl">
                <h3 className="text-[19px] lg:text-[21px] xl:text-[23px] font-bold text-white flex items-center gap-2 shrink-0 pl-0.5">
                    <span className="w-1.5 h-4.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                    负面回答类型解析
                </h3>

                <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
                    {notes.map((n) => (
                        <div key={n.title} className="flex flex-col min-h-0 h-full">
                            <div className="bg-white/[0.015] border border-white/[0.06] border-l-4 border-l-rose-500 rounded-r-xl px-3.5 py-2 flex flex-col h-full justify-start gap-1">
                                <h4 className="text-[17px] lg:text-[18px] xl:text-[19px] font-bold text-white flex items-center gap-2 shrink-0 mb-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                    {n.title}
                                </h4>
                                <p className="text-[14px] lg:text-[15px] xl:text-[16px] text-white leading-relaxed text-balance">
                                    {n.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function NegativeListPage({ title, entry, rows, total, notes, brand, brandSub }) {
    return (
        <Frame title={title} aspect={`${APP_W}/${APP_H}`} footer={<FooterNotes notes={notes} />}>
            <GeoOneApp
                width={APP_W}
                height={APP_H}
                active="正负面"
                title="正负面"
                target={TARGET}
                brand={brand}
                brandSub={brandSub}
                avatar="养"
                entry={entry}
            >
                <div
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT,
                        top: 136,
                        width: MAIN_W,
                        bottom: 18,
                        border: `1px solid ${C.border}`,
                        borderRadius: 12,
                        overflow: 'hidden',
                        background: C.white,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0 18px',
                            borderBottom: `1px solid ${C.border}`,
                            flexShrink: 0,
                        }}
                    >
                        <span style={{ fontSize: 17, fontWeight: 700 }}>负面回答列表</span>
                        <GhostButton iconLeft="coin" height={30} fontSize={14}>
                            设置价格范围
                        </GhostButton>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            height: 40,
                            alignItems: 'center',
                            background: C.headBg,
                            borderBottom: `1px solid ${C.border}`,
                            paddingLeft: 16,
                            fontSize: 13.5,
                            color: C.muted,
                            fontWeight: 600,
                            flexShrink: 0,
                        }}
                    >
                        {COLS.map((c) => (
                            <div key={c.key} style={{ width: c.w, flexShrink: 0, paddingRight: 12 }}>
                                {c.label}
                            </div>
                        ))}
                    </div>

                    <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        {rows.map((r, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flex: 1,
                                    minHeight: 0,
                                    borderBottom: `1px solid ${C.border}`,
                                    paddingLeft: 16,
                                }}
                            >
                                <div
                                    style={{
                                        width: COLS[0].w,
                                        flexShrink: 0,
                                        fontSize: 15.5,
                                        fontWeight: 600,
                                        paddingRight: 12,
                                        lineHeight: '21px',
                                        wordBreak: 'keep-all',
                                        overflowWrap: 'break-word',
                                        textWrap: 'pretty',
                                    }}
                                >
                                    {r.term}
                                </div>
                                <div style={{ width: COLS[1].w, flexShrink: 0, paddingRight: 12 }}>
                                    <Tag color={r.color}>{r.type}</Tag>
                                </div>
                                <div
                                    style={{
                                        width: COLS[2].w,
                                        flexShrink: 0,
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: '#1e293b',
                                        paddingRight: 20,
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        lineHeight: '21px',
                                    }}
                                >
                                    {r.summary}
                                </div>
                                <div
                                    style={{
                                        width: COLS[3].w,
                                        flexShrink: 0,
                                        fontSize: 14,
                                        color: C.muted,
                                        paddingRight: 24,
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        lineHeight: '19px',
                                        whiteSpace: 'pre-wrap',
                                    }}
                                >
                                    {r.answer}
                                </div>
                                <div style={{ width: COLS[4].w, flexShrink: 0 }}>
                                    <GhostButton height={28} fontSize={13}>
                                        查看
                                    </GhostButton>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            height: 46,
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: 18,
                            borderTop: `1px solid ${C.border}`,
                            color: C.muted,
                            fontSize: 13.5,
                        }}
                    >
                        共 {total} 条数据
                    </div>
                </div>
            </GeoOneApp>
        </Frame>
    );
}

export default function Page_GeoReport_Sentiment() {
    return (
        <NegativeListPage
            title="正负面分析 · C端监测词"
            entry="品牌词"
            rows={BRAND_ROWS}
            total={TOC_TOTAL}
            notes={FOOTER_NOTES.brand}
            brand="养胃舒颗粒(ToC)"
            brandSub="三九养胃舒颗粒"
        />
    );
}

export function Page_GeoReport_Sentiment_Compare() {
    return (
        <NegativeListPage
            title="正负面分析 · B端监测词"
            entry="渠道词"
            rows={COMPARE_ROWS}
            total={TOB_TOTAL}
            notes={FOOTER_NOTES.compare}
            brand="养胃舒颗粒(ToB)"
            brandSub="三九养胃舒颗粒"
        />
    );
}
