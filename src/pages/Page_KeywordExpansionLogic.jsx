import React from 'react';
import {
    KeywordLogicFlow,
    Badge,
    HeadCell,
    Cell,
    FieldIcon,
    Clamp,
    TAG,
    FLOW_C,
} from '../components/KeywordLogicFlow';

/* ══════════════ 数据：换拓展样例时只改这一段 ══════════════ */

/* 示例：按「词条确定」表顺序取前 8 条 */
const ROWS = [
    {
        keyword: '养胃药品牌排行榜',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌排行榜',
        cat2Color: TAG.neutral,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 胃不好想走调理路线，有没有靠谱的养胃药品牌排行榜可以先做功课？',
            '② 养胃药品牌排行榜里，偏滋阴养胃和偏温胃的大概怎么区分？ …',
        ],
    },
    {
        keyword: '养胃药品牌推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌推荐',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 不想只压酸，想调理养胃，直接推荐几个正规的养胃药品牌。',
            '② 慢性胃炎调理常用的养胃药，有哪些大厂品牌比较常见？ …',
        ],
    },
    {
        keyword: '效果好的养胃药推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '质量',
        cat2Color: TAG.orange,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 慢性胃炎反复不适，推荐几款调理效果比较稳的养胃药。',
            '② 效果好的养胃药里，针对胃部灼热隐痛的大概有哪些方向？ …',
        ],
    },
    {
        keyword: '性价比高的养胃药推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '性价比',
        cat2Color: TAG.cyan,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 调理要吃一段时间，推荐几款性价比高的养胃药。',
            '② 同样是养胃中成药，哪些价格亲民又正规、性价比更高？ …',
        ],
    },
    {
        keyword: '口碑好的养胃药推荐',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '口碑',
        cat2Color: TAG.yellow,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 想选大家用过反馈还行的，推荐几款口碑好的养胃药。',
            '② 病友群里常提到的养胃药有哪些？求口碑比较稳的。 …',
        ],
    },
    {
        keyword: '养胃药有哪些',
        cat1: '通用',
        cat1Color: TAG.slate,
        cat2: '品牌推荐',
        cat2Color: TAG.blue,
        sort: '①',
        sortNote: '最基本问法',
        prompts: [
            '① 不想只吃抑酸药，想了解一下养胃药有哪些常见选择。',
            '② 养胃药和止痛、抑酸类胃药有什么区别？养胃药大概分哪些类型？ …',
        ],
    },
    {
        keyword: '慢性胃炎调理用的中成药推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.teal,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 胃镜查了慢性胃炎，推荐几款调理用的中成药。',
            '② 慢性胃炎除了抑酸，中成药调理一般怎么选？求对证方向的推荐。 …',
        ],
    },
    {
        keyword: '适合熬夜加班胃不好人群的养胃药推荐',
        cat1: '场景',
        cat1Color: TAG.blue,
        cat2: '购买动机',
        cat2Color: TAG.teal,
        sort: '①',
        sortNote: '产品核心人群定位',
        prompts: [
            '① 经常熬夜加班胃不舒服，推荐几款适合的养胃药。',
            '② 上班太拼胃隐隐不适，养胃药里哪些更适合作息不规律的人？ …',
        ],
    },
];

const LEFT_COLS = '40px minmax(0,1.2fr) 112px 120px 100px minmax(0,0.85fr)';

function ExpansionTable() {
    return (
        <KeywordLogicFlow
            rows={ROWS}
            arrowLabel="词条拓展"
            arrowWidth="14%"
            rightWidth="36%"
            rightMinWidth={340}
            leftCols={LEFT_COLS}
            leftHeader={
                <>
                    <HeadCell />
                    <HeadCell>
                        <FieldIcon />
                        词条生成
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        词条分类1
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        词条分类2
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        词条排序
                    </HeadCell>
                    <HeadCell style={{ borderRight: 'none' }}>
                        <FieldIcon />
                        排序说明
                    </HeadCell>
                </>
            }
            renderLeftRow={(r, i) => (
                <>
                    <Cell style={{ justifyContent: 'center', color: FLOW_C.rowNum, fontSize: 13 }}>{i + 1}</Cell>
                    <Cell title={r.keyword} style={{ fontWeight: 700, fontSize: 13.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {r.keyword}
                    </Cell>
                    <Cell>
                        <Badge label={r.cat1} color={r.cat1Color} />
                    </Cell>
                    <Cell>
                        <Badge label={r.cat2} color={r.cat2Color} />
                    </Cell>
                    <Cell style={{ justifyContent: 'center', fontWeight: 700 }}>{r.sort}</Cell>
                    <Cell title={r.sortNote} style={{ color: FLOW_C.muted, fontSize: 12.5, borderRight: 'none' }}>
                        <Clamp lines={2}>{r.sortNote}</Clamp>
                    </Cell>
                </>
            )}
            rightHeader={
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 14px', width: '100%' }}>
                    <FieldIcon />
                    关联提示词
                </div>
            }
            renderRightRow={(r) => (
                <div
                    title={r.prompts.join('\n')}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 2,
                        padding: '0 14px',
                        fontSize: 12.5,
                        color: FLOW_C.muted,
                        lineHeight: 1.35,
                        overflow: 'hidden',
                    }}
                >
                    {r.prompts.map((p, idx) => (
                        <div
                            key={idx}
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {p}
                        </div>
                    ))}
                </div>
            )}
        />
    );
}

export default function Page_KeywordExpansionLogic() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10 animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3.5 lg:gap-4 min-h-0">
                <div className="shrink-0 flex flex-col gap-2">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">词条拓展逻辑</h1>
                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 lg:p-5 mt-1">
                        <p className="text-zinc-300 text-[16px] lg:text-[17.5px] xl:text-[19px] leading-relaxed">
                            将生成的
                            <strong className="text-white font-bold">
                                专业核心词条、用户搜索意图、搜索引擎推荐、社媒长尾词及大模型预测词
                            </strong>
                            所有核心维度深度结合，拓宽衍生出更符合用户真实检索场景的长尾词与高价值关联词库。
                        </p>
                    </div>
                </div>

                <div className="relative flex-1 min-h-0 w-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <ExpansionTable />
                </div>
            </div>
        </div>
    );
}
