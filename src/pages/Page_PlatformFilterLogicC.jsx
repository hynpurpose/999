import React from 'react';
import { ExcelShell, TitleBar, Cell } from '../components/PlatformFilterExcelTable';

/* ══════════════ 数据：换 C 组明细时只改这一段 ══════════════ */

/* C组参考品牌 = 行业头部竞品「达喜」（竞品命中数 TOP1），非自家品牌 */
const BRAND = '达喜'

/* 来源：投放平台量化分析 Excel · C组 · 三九养胃舒颗粒-ToC① · 2026-08-04 */
const ROWS = [
    {
        "rank": 1,
        "site": "315价格网",
        "cites": 5,
        "hits": 5,
        "rate": "100.00%",
        "deepseek": [
            0,
            0
        ],
        "doubao": [
            0,
            0
        ],
        "yuanbao": [
            5,
            5
        ],
        "tongyi": [
            0,
            0
        ],
        "note": "极高命中率，达喜在此平台强势覆盖"
    },
    {
        "rank": 2,
        "site": "湖南药事服务网",
        "cites": 4,
        "hits": 4,
        "rate": "100.00%",
        "deepseek": [
            0,
            0
        ],
        "doubao": [
            0,
            0
        ],
        "yuanbao": [
            4,
            4
        ],
        "tongyi": [
            0,
            0
        ],
        "note": "极高命中率，达喜在此平台强势覆盖"
    },
    {
        "rank": 3,
        "site": "国家医疗保障局",
        "cites": 3,
        "hits": 3,
        "rate": "100.00%",
        "deepseek": [
            0,
            0
        ],
        "doubao": [
            0,
            0
        ],
        "yuanbao": [
            3,
            3
        ],
        "tongyi": [
            0,
            0
        ],
        "note": "极高命中率，达喜在此平台强势覆盖"
    },
    {
        "rank": 4,
        "site": "第一三共健康官网",
        "cites": 3,
        "hits": 3,
        "rate": "100.00%",
        "deepseek": [
            0,
            0
        ],
        "doubao": [
            0,
            0
        ],
        "yuanbao": [
            3,
            3
        ],
        "tongyi": [
            0,
            0
        ],
        "note": "极高命中率，达喜在此平台强势覆盖"
    },
    {
        "rank": 5,
        "site": "中国食品药品网",
        "cites": 3,
        "hits": 2,
        "rate": "66.67%",
        "deepseek": [
            1,
            1
        ],
        "doubao": [
            0,
            0
        ],
        "yuanbao": [
            2,
            1
        ],
        "tongyi": [
            0,
            0
        ],
        "note": "极高命中率，达喜在此平台强势覆盖"
    }
];
const C = {
    title: '#7B2C2C',
    head: '#7B2C2C',
    zebra: '#FFF5F2',
    border: '#E8C8C4',
    headBorder: 'rgba(255,255,255,0.22)',
};

const COLS =
    '0.5fr 1.35fr 0.7fr 0.95fr 0.7fr 0.75fr 0.75fr 0.7fr 0.7fr 0.7fr 0.7fr 0.85fr 0.85fr 1.7fr';

const HEADERS = [
    '排名',
    '网站名称',
    '引用次数',
    `${BRAND}出现次数`,
    '命中率',
    'DeepSeek 引用',
    'DeepSeek 命中',
    '豆包 引用',
    '豆包 命中',
    '元宝 引用',
    '元宝 命中',
    '通义千问 引用',
    '通义千问 命中',
    '分析说明',
];

function TableC() {
    return (
        <ExcelShell>
            <TitleBar bg={C.title}>C组 — {BRAND} 品牌命中率最高的前5个平台</TitleBar>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: COLS,
                    background: C.head,
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 700,
                    height: 44,
                    flexShrink: 0,
                }}
            >
                {HEADERS.map((h, i) => (
                    <Cell
                        key={h}
                        border={i < HEADERS.length - 1 ? C.headBorder : undefined}
                        style={{
                            fontSize: 12,
                            whiteSpace: 'normal',
                            textAlign: 'center',
                            lineHeight: 1.25,
                            padding: '4px 4px',
                            justifyContent: 'center',
                        }}
                    >
                        {h}
                    </Cell>
                ))}
            </div>

            <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                {ROWS.map((r, i) => (
                    <div
                        key={r.rank}
                        style={{
                            flex: 1,
                            minHeight: 0,
                            display: 'grid',
                            gridTemplateColumns: COLS,
                            background: i % 2 === 0 ? C.zebra : '#fff',
                            borderBottom: `1px solid ${C.border}`,
                            fontSize: 13,
                        }}
                    >
                        <Cell border={C.border}>{r.rank}</Cell>
                        <Cell align="left" bold border={C.border} title={r.site}>
                            {r.site}
                        </Cell>
                        <Cell border={C.border}>{r.cites}</Cell>
                        <Cell border={C.border} bold>
                            {r.hits}
                        </Cell>
                        <Cell border={C.border} bold style={{ color: '#7B2C2C' }}>
                            {r.rate}
                        </Cell>
                        <Cell border={C.border}>{r.deepseek[0]}</Cell>
                        <Cell border={C.border}>{r.deepseek[1]}</Cell>
                        <Cell border={C.border}>{r.doubao[0]}</Cell>
                        <Cell border={C.border}>{r.doubao[1]}</Cell>
                        <Cell border={C.border}>{r.yuanbao[0]}</Cell>
                        <Cell border={C.border}>{r.yuanbao[1]}</Cell>
                        <Cell border={C.border}>{r.tongyi[0]}</Cell>
                        <Cell border={C.border}>{r.tongyi[1]}</Cell>
                        <Cell align="left" title={r.note} style={{ fontSize: 12.5 }}>
                            {r.note}
                        </Cell>
                    </div>
                ))}
            </div>
        </ExcelShell>
    );
}

export default function Page_PlatformFilterLogicC() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[10px] shrink-0 pointer-events-none" />

            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center px-8 lg:px-16 pt-4 pb-4 z-10 min-h-0 gap-5">
                <div className="w-full bg-white/[0.02] border border-[#004CE5]/20 backdrop-blur-md rounded-2xl px-8 py-5 flex flex-col gap-4 shadow-lg shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
                        <h2 className="text-2xl font-bold text-blue-100 tracking-widest">C组：高命中高频阵地</h2>
                    </div>

                    <div className="grid grid-cols-[1.5fr_3fr] gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">
                                筛选维度
                            </span>
                            <p className="text-white/90 text-[1.2rem] font-bold tracking-wide mt-1">
                                行业头部竞品收录偏好分析
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 border-l border-white/10 pl-8">
                            <span className="text-zinc-500 font-bold text-[1.05rem] uppercase tracking-wider">
                                筛选逻辑动作
                            </span>
                            <p className="text-zinc-300 text-[1.15rem] leading-relaxed mt-1">
                                把行业头部竞品「达喜」单独深挖（竞品命中数 TOP1），将命中率（出现品牌 / 总引用次数）作为验证数值，选出最高命中的 5 个平台。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex-1 relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-h-0">
                    <TableC />
                </div>
            </div>
        </div>
    );
}
