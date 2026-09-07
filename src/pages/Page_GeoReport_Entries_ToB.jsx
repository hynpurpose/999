import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Checkbox, Toggle, GhostButton, PlatformDots, ShotThumb } from '../components/geoone/ui';

/* ══════════════ 数据：换监测词条时只改这一段 ══════════════ */
/* 来源：GEO ONE 项目 458 三九养胃舒颗粒-ToB①，2026-08-14 ~ 08-20 */

const TARGET = '养胃舒颗粒'

const ROWS = [
    {
        "term": "养胃药厂家有哪些",
        "rate": "22.9%",
        "rank": "NO. 13.4",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/386deb9ce05548709bc2495e6bf9301d.png",
        "time": "2026/08/19"
    },
    {
        "term": "养胃中成药厂家有哪些",
        "rate": "17.1%",
        "rank": "NO. 15.1",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/d158eaadbe1a4f44b6ec7e9abea8af53.png",
        "time": "2026/08/19"
    },
    {
        "term": "连锁药店主推哪些养胃中成药",
        "rate": "11.4%",
        "rank": "NO. 4",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/a6321f99366046be8cd13c8327ef1502.png",
        "time": "2026/08/19"
    },
    {
        "term": "慢性胃炎中成药厂家有哪些",
        "rate": "11.4%",
        "rank": "NO. 13.6",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/5be33f05943c448bbfb10f5cc21b2364.png",
        "time": "2026/08/19"
    },
    {
        "term": "养胃中成药品牌有哪些",
        "rate": "8.6%",
        "rank": "NO. 8.8",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/4fccc540b78d4c13b9c36cf94d757706.png",
        "time": "2026/08/19"
    },
    {
        "term": "销量好的养胃中成药有哪些适合进货",
        "rate": "8.6%",
        "rank": "NO. 7.1",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/92ef4ed77c984dcc8544793bad39b32f.png",
        "time": "2026/08/19"
    },
    {
        "term": "代理哪些养胃中成药品牌好",
        "rate": "5.7%",
        "rank": "NO. 7.4",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/80c87f9272d847f3832c4b8f1f485cd2.png",
        "time": "2026/08/19"
    },
    {
        "term": "养胃中成药产品有哪些",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/34679ce71a58426d9997fbf3f3a4b9c2.png",
        "time": "2026/08/19"
    },
    {
        "term": "医院消化科常备哪些养胃中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/92c97739ceb74140b4afef8fd5733772.png",
        "time": "2026/08/19"
    },
    {
        "term": "医院采购哪些养胃中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/209ae72c4aa1442fb34312358b7a6a28.png",
        "time": "2026/08/19"
    },
    {
        "term": "药房进哪些养胃中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/f24ed23937fd48f6b97aea37190be645.png",
        "time": "2026/08/19"
    },
    {
        "term": "适合基层医院配备的养胃中成药有哪些",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/ec84c9d2975e405282321259a7bef577.png",
        "time": "2026/08/19"
    },
    {
        "term": "慢性胃炎医生常开哪些中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/6235bf14c2804ecca831b51d88ed7bd2.png",
        "time": "2026/08/19"
    },
    {
        "term": "纳入医保目录的养胃中成药有哪些",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/0886d72da8184719a426664c4cf5cea4.png",
        "time": "2026/08/19"
    },
    {
        "term": "按证型配备的养胃中成药有哪些",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/292459ace45b4a1a829fb882a9f23591.png",
        "time": "2026/08/19"
    },
    {
        "term": "中医科常开哪些养胃中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/e0ba68b5c21d4c5fbe23adf1c42570ff.png",
        "time": "2026/08/19"
    },
    {
        "term": "气阴两虚胃痛常用哪些中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/572f49c9c61f4d75866a40b267e1d486.png",
        "time": "2026/08/19"
    },
    {
        "term": "颗粒剂养胃中成药有哪些",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/ba6edf712dd0453fbf6f238eab9e590a.png",
        "time": "2026/08/19"
    },
    {
        "term": "医院消化科常备哪些养胃药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/3e7b9c52b48942628634840b1f0008ef.png",
        "time": "2026/08/19"
    },
    {
        "term": "医院采购哪些养胃药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/24991c29742a43d79e09e630ee08df3c.png",
        "time": "2026/08/19"
    },
    {
        "term": "医院采购哪些慢性胃炎用药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/d621724a49ad44cfa3ea744d6a8aed6d.png",
        "time": "2026/08/19"
    },
    {
        "term": "医院消化科常备哪些慢性胃炎用药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/b1b6d948614346eea994a2b836fa5558.png",
        "time": "2026/08/19"
    },
    {
        "term": "纳入医保目录的慢性胃炎用药有哪些",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/037e8dcb9b1d4065884fd278fe8e4fbe.png",
        "time": "2026/08/19"
    },
    {
        "term": "医院消化科常备哪些慢性胃炎中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/8a4aaa053a0d4441a83cff5cd19ca915.png",
        "time": "2026/08/19"
    },
    {
        "term": "药房进哪些慢性胃炎中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/5f9ed28432a84c2b9ed4f03a4f2c27e9.png",
        "time": "2026/08/19"
    }
]

const COLS = [
    { key: 'check', w: 44, label: '' },
    { key: 'idx', w: 48, label: '#' },
    { key: 'term', w: 420, label: '词条' },
    { key: 'rate', w: 110, label: '提及率' },
    { key: 'rank', w: 150, label: '平均提及位次' },
    { key: 'plats', w: 150, label: '监测平台' },
    { key: 'shot', w: 110, label: '会话截图' },
    { key: 'time', w: 140, label: '最近更新时间' },
];

const ROW_H = 56;
const HEAD_H = 44;

export default function Page_GeoReport_Entries_ToB() {
    return (
        <Frame title="词条表现分析 · B端" aspect="1586/912.5">
            <GeoOneApp
                height={912.5}
                active="词条"
                title="词条"
                target={TARGET}
                brand="养胃舒颗粒(ToB)"
                brandSub="三九养胃舒颗粒"
                avatar="养"
                toolbarRight={
                    <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <Toggle on={false} size={1.1} />
                            <span style={{ fontSize: 16, color: C.text }}>平台对比</span>
                        </div>
                        <GhostButton iconLeft="columns" height={33} fontSize={15}>
                            管理列
                        </GhostButton>
                    </>
                }
            >
                <div
                    style={{
                        position: 'absolute',
                        left: MAIN_LEFT,
                        top: 140,
                        width: MAIN_W,
                        bottom: 24,
                        border: `1px solid ${C.border}`,
                        borderRadius: 12,
                        overflow: 'hidden',
                        background: C.white,
                    }}
                >
                    {/* 表头 */}
                    <div
                        style={{
                            height: HEAD_H,
                            display: 'flex',
                            alignItems: 'center',
                            background: C.headBg,
                            borderBottom: `1px solid ${C.border}`,
                            paddingLeft: 8,
                            boxSizing: 'border-box',
                        }}
                    >
                        {COLS.map((c) => (
                            <div
                                key={c.key}
                                style={{
                                    width: c.w,
                                    flexShrink: 0,
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: C.muted,
                                    paddingLeft: c.key === 'check' ? 10 : 8,
                                }}
                            >
                                {c.key === 'check' ? <Checkbox /> : c.label}
                            </div>
                        ))}
                    </div>

                    {/* 行 */}
                    {ROWS.map((r, i) => (
                        <div
                            key={i}
                            style={{
                                height: ROW_H,
                                display: 'flex',
                                alignItems: 'center',
                                borderBottom: `1px solid ${C.border}`,
                                paddingLeft: 8,
                                boxSizing: 'border-box',
                            }}
                        >
                            <div style={{ width: COLS[0].w, flexShrink: 0, paddingLeft: 10 }}>
                                <Checkbox />
                            </div>
                            <div style={{ width: COLS[1].w, flexShrink: 0, paddingLeft: 8, fontSize: 14, color: C.muted }}>
                                {i + 1}
                            </div>
                            <div
                                style={{
                                    width: COLS[2].w,
                                    flexShrink: 0,
                                    paddingLeft: 8,
                                    paddingRight: 12,
                                    fontSize: 14.5,
                                    color: C.text,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {r.term}
                            </div>
                            <div style={{ width: COLS[3].w, flexShrink: 0, paddingLeft: 8, fontSize: 15, fontWeight: 600 }}>
                                {r.rate}
                            </div>
                            <div style={{ width: COLS[4].w, flexShrink: 0, paddingLeft: 8, fontSize: 15, fontWeight: 600 }}>
                                {r.rank}
                            </div>
                            <div style={{ width: COLS[5].w, flexShrink: 0, paddingLeft: 8 }}>
                                <PlatformDots />
                            </div>
                            <div style={{ width: COLS[6].w, flexShrink: 0, paddingLeft: 8 }}>
                                <ShotThumb src={r.shot} />
                            </div>
                            <div style={{ width: COLS[7].w, flexShrink: 0, paddingLeft: 8, fontSize: 14, color: C.muted }}>
                                {r.time}
                            </div>
                        </div>
                    ))}
                </div>
            </GeoOneApp>
        </Frame>
    );
}
