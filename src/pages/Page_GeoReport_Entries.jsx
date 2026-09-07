import React from 'react';
import Frame from '../components/geoone/Frame';
import GeoOneApp, { MAIN_LEFT, MAIN_W } from '../components/geoone/GeoOneApp';
import { C, Checkbox, Toggle, GhostButton, PlatformDots, ShotThumb } from '../components/geoone/ui';

/* ══════════════ 数据：换监测词条时只改这一段 ══════════════ */
/* 来源：GEO ONE 项目 457 三九养胃舒颗粒-ToC①，2026-08-14 ~ 08-20 */

const TARGET = '养胃舒颗粒'

const ROWS = [
    {
        "term": "养胃中成药品牌排行榜",
        "rate": "22.9%",
        "rank": "NO. 5.7",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/502014a8a48c496283d2a19c448469fa.png",
        "time": "2026/08/19"
    },
    {
        "term": "大品牌正规药企的养胃药推荐",
        "rate": "11.4%",
        "rank": "NO. 8.3",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/086a6eefd3114f6aa012b82c5624a1e3.png",
        "time": "2026/08/19"
    },
    {
        "term": "养胃药品牌推荐",
        "rate": "8.6%",
        "rank": "NO. 8.5",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/de8a131eed3742168b7a3f8e1d55b568.png",
        "time": "2026/08/19"
    },
    {
        "term": "养胃药品牌排行榜",
        "rate": "5.7%",
        "rank": "NO. 9",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/792e1763bb8d4cfb9e569a141f5dc861.png",
        "time": "2026/08/19"
    },
    {
        "term": "效果好的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/0d2ebf215a38487d867ccd02b7d0a7e0.png",
        "time": "2026/08/19"
    },
    {
        "term": "性价比高的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/93d1ebda9a9848719ca7fea9433a47cc.png",
        "time": "2026/08/19"
    },
    {
        "term": "口碑好的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/65443f2203954a28925d48b012684e83.png",
        "time": "2026/08/19"
    },
    {
        "term": "养胃药有哪些",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/29a2ea97b8be46808e20f6555a491de5.png",
        "time": "2026/08/19"
    },
    {
        "term": "慢性胃炎调理用的中成药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/6a2217a3c07a4abbb3f9d2744a8e7f05.png",
        "time": "2026/08/19"
    },
    {
        "term": "适合熬夜加班胃不好人群的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/84f9c51bb6324f83bda065bfa5090c50.png",
        "time": "2026/08/19"
    },
    {
        "term": "适合轻中度长期调理的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/ec47b177b69d4435b091aa194e0bc723.png",
        "time": "2026/08/19"
    },
    {
        "term": "医保能报销的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/5e179c51ac2846ceb872917dc56caa22.png",
        "time": "2026/08/19"
    },
    {
        "term": "老胃病常备的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/e6220eef35a540d98e051a952e533de1.png",
        "time": "2026/08/19"
    },
    {
        "term": "慢性胃炎调理吃什么养胃药好",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/437b6d916cae44e78290faa066171254.png",
        "time": "2026/08/19"
    },
    {
        "term": "适合三餐不规律上班族的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/e3a5e259b9774721a946fb163325c81f.png",
        "time": "2026/08/19"
    },
    {
        "term": "经常喝酒应酬人群的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/37d6d6d8a8164179b29403d07c244919.png",
        "time": "2026/08/19"
    },
    {
        "term": "适合中老年人的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/895f5502f65f4b30be10955384b7af85.png",
        "time": "2026/08/19"
    },
    {
        "term": "家庭常备的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/aa285e85d0814d2083992d953c908ba4.png",
        "time": "2026/08/19"
    },
    {
        "term": "药店就能买到的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/d4f00aa48e094038b67d5ede10d1a5ab.png",
        "time": "2026/08/19"
    },
    {
        "term": "胃口差口干时吃的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/f36f6d514fee47afaa6d0edd2c0c136e.png",
        "time": "2026/08/19"
    },
    {
        "term": "适合轻中度胃部不适的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/889519ed37ec4d329d4b8d30ada73d77.png",
        "time": "2026/08/19"
    },
    {
        "term": "胃部灼热隐隐作痛吃的中成药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/e3e7e12d11594199b0d152eeaf98f265.png",
        "time": "2026/08/19"
    },
    {
        "term": "纯中药配方的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/756120a339384ba28c0c605ebef7c58a.png",
        "time": "2026/08/19"
    },
    {
        "term": "服用方便的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/21c73c1e4f0249248643c036eceafa7d.png",
        "time": "2026/08/19"
    },
    {
        "term": "低糖型的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/a8febf587dca4b7eb09ef1bce6a9d6fb.png",
        "time": "2026/08/19"
    },
    {
        "term": "慢性胃炎反复发作调理用的中成药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/c8d1424a1fd948f38e1ef8dfd7a8a7bc.png",
        "time": "2026/08/19"
    },
    {
        "term": "适合胃热口干人群的养胃药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/cc204e8fe1644ad5b78444c166206580.png",
        "time": "2026/08/19"
    },
    {
        "term": "慢性胃炎吃什么中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/394b031a8668419f996ce549231027ee.png",
        "time": "2026/08/19"
    },
    {
        "term": "胃热灼痛吃什么中成药",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/7d4d954a01c448998a3c8854990fd656.png",
        "time": "2026/08/19"
    },
    {
        "term": "胃部隐隐作痛调理的中成药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/f41afe52a8bd41faa2b369e812d3b533.png",
        "time": "2026/08/19"
    },
    {
        "term": "老胃病调理用的中成药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/ee8f3146eef94890a6b8b6c8d5f8ec4f.png",
        "time": "2026/08/19"
    },
    {
        "term": "养胃中成药有哪些",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/2d471ed76eed4bd2a3ad6c3537472a3e.png",
        "time": "2026/08/19"
    },
    {
        "term": "效果好的养胃中成药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/7531ea8ee4124f7cb5b4829853e38b29.png",
        "time": "2026/08/19"
    },
    {
        "term": "轻中度胃部不适调理的中成药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/af36f37bb6074f5d84d7544ba26114d9.png",
        "time": "2026/08/19"
    },
    {
        "term": "滋阴养胃的中成药推荐",
        "rate": "0%",
        "rank": "—",
        "shot": "https://app.geoindexfuture.com/screenshots/20260819/0c7bc2e521a14e73830c05b88eb6ff90.png",
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

export default function Page_GeoReport_Entries() {
    return (
        <Frame title="词条表现分析" aspect="1586/912.5">
            <GeoOneApp
                height={912.5}
                active="词条"
                title="词条"
                target={TARGET}
                brand="养胃舒颗粒(ToC)"
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
