import React from 'react';

/* ══════════════ 数据：换监测口径时只改这一段 ══════════════ */
/* 来源：GEO ONE 项目 457 ToC①（分母 1,050）· 2026-08 */

const ATTRIBUTION = {
    head: 'C 端提到「养胃舒颗粒」的会话',
    lastCol: '占采集',
    withCount: true,
    rows: [
        { label: '提到了「养胃舒颗粒」', n: '242', p: '23.0%', total: true },
        { label: '没有提到任何品牌', n: '190', p: '18.1%' },
        { label: '提到品牌华润三九', n: '47', p: '4.5%', key: true },
        { label: '另提到的品牌是「江中」', n: '2', p: '0.2%' },
        { label: '另提到的品牌是「北京同仁堂」', n: '1', p: '0.1%' },
        { label: '另提到的品牌是「邯郸制药」', n: '1', p: '0.1%' },
        { label: '另提到子品牌「合肥华润神鹿」', n: '1', p: '0.1%' },
    ],
};

const BIG_WORD = {
    head: '「养胃药」相关词条下的产品',
    lastCol: '提及率',
    withCount: false,
    rows: [
        { label: '三九胃泰颗粒', p: '22.4%' },
        { label: '铝碳酸镁咀嚼片', p: '13.6%' },
        { label: '多潘立酮片', p: '7.4%' },
        { label: '胃苏颗粒', p: '6.8%' },
        { label: '三九养胃舒颗粒', p: '1.4%', key: true },
    ],
};

const ACCENT = '#004CE5';
const INK = '#0F172A';

/** 两栏共用：白底表格，容器等高，行随容器均分，左右两栏各条基线对齐 */
function DataTable({ data }) {
    return (
        <div className="h-full min-h-0 rounded-xl bg-white overflow-hidden">
            <table className="w-full h-full text-left border-collapse table-fixed text-[16px]">
                <thead>
                    <tr className="bg-[#EEF2F7] border-b border-[#D5DEE9]">
                        <th className="py-2.5 px-5 font-bold text-[16px] tracking-wide" style={{ color: INK }}>
                            {data.head}
                        </th>
                        {data.withCount && (
                            <th className="py-2.5 px-5 w-[16%] text-right font-bold text-[15px]" style={{ color: INK }}>
                                条数
                            </th>
                        )}
                        <th className="py-2.5 px-5 w-[22%] text-right font-bold text-[15px]" style={{ color: INK }}>
                            {data.lastCol}
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#EDF1F6]">
                    {data.rows.map((r) => (
                        <tr key={r.label} style={{ background: r.key ? '#E4ECFD' : r.total ? '#F7F9FC' : '#FFFFFF' }}>
                            <td
                                className={`px-5 align-middle ${r.total || r.key ? 'font-black' : 'font-semibold'}`}
                                style={{ color: r.key ? ACCENT : INK }}
                            >
                                <span className="flex items-center gap-2.5">
                                    {(r.total || r.key) && (
                                        <span
                                            className="w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{ background: r.key ? ACCENT : INK }}
                                        />
                                    )}
                                    {r.label}
                                </span>
                            </td>
                            {data.withCount && (
                                <td
                                    className="px-5 align-middle text-right font-semibold tabular-nums"
                                    style={{ color: r.key ? ACCENT : INK }}
                                >
                                    {r.n}
                                </td>
                            )}
                            <td
                                className="px-5 align-middle text-right font-black tabular-nums text-[20px]"
                                style={{ color: r.key ? ACCENT : INK }}
                            >
                                {r.p}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ReasonColumn({ no, title, lead, table, conclusion }) {
    return (
        <div className="h-full min-h-0 rounded-2xl border border-white/[0.09] bg-white/[0.03] p-6 flex flex-col">
            <div className="shrink-0">
                <span className="text-[14px] font-black tracking-[0.3em]" style={{ color: ACCENT }}>
                    原因 {no}
                </span>
                <h2 className="mt-2 text-[26px] font-bold text-white tracking-wide leading-tight">{title}</h2>
            </div>

            <p className="mt-3 mb-4 text-[19px] font-bold text-white leading-snug min-h-[52px] shrink-0">{lead}</p>

            <div className="flex-1 min-h-0">
                <DataTable data={table} />
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 shrink-0 min-h-[126px]">
                <div className="text-[13px] font-black tracking-[0.3em] mb-2" style={{ color: ACCENT }}>
                    结论
                </div>
                <p className="text-[19px] font-bold text-white leading-relaxed">{conclusion}</p>
            </div>
        </div>
    );
}

export default function Page_GeoReport_MentionWhy() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full px-12 sm:px-16 pt-3 pb-4 relative z-10 shrink-0">
                <h1 className="text-[32px] font-bold text-white tracking-wider leading-none">
                    三九养胃舒颗粒提及率低的原因
                </h1>
            </div>

            <div className="flex-1 w-full px-12 sm:px-16 pb-4 relative z-10 grid grid-cols-2 gap-6 min-h-0">
                <ReasonColumn
                    no="01"
                    title="有产品认知，但品牌归因不足"
                    lead="AI 已经认得「养胃舒颗粒」这个产品名，却大多说不出它是华润三九的。"
                    table={ATTRIBUTION}
                    conclusion="「养胃舒颗粒」批文由华润三九旗下合肥华润神鹿独家持有，但同方异剂型（片剂、胶囊、软胶囊）分散在多家药企，AI 因此把颗粒剂错误归到别家品牌：提到产品名的会话里只有 4.5% 归因华润三九，目标品提及率仅 1.4%、排名第 19。"
                />

                <ReasonColumn
                    no="02"
                    title="大词下只推成熟的胃药产品"
                    lead="词条围绕「养胃药」需求，但答案集中在 AI 已形成强认知的产品上。"
                    table={BIG_WORD}
                    conclusion="AI 对三九胃泰和养胃舒的产品定位、适用场景、两者区别认知不清，容易把两款产品混在一起；泛「养胃药」需求下，优先推荐认知更成熟的三九胃泰。"
                />
            </div>
        </div>
    );
}
