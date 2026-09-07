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

/* ══════════════ 数据：换打标样例时只改这一段 ══════════════ */

/* 示例：六类打标各取 1 条，顺序与下方「打标依据」①～⑥ 对齐。
   其中「品类共性」「搜索意图低」两条为拟制样例——穷举表本轮未触发这两类，待真实数据补入后替换。 */
const ROWS = [
    {
        type: '3.搜索',
        typeColor: TAG.carmine,
        name: '百度搜索 Top10',
        desc: '来源于百度搜索数据（辅助参考，AI 拟制待替换）',
        keyword: '4. 养胃舒颗粒的功效与作用',
        tag: '非购买意图',
        tagColor: TAG.slate,
        note: '单品说明书/百科查询，非品类购买决策。',
    },
    {
        type: '0.固定',
        typeColor: TAG.slate,
        name: '品牌排行榜',
        desc: '最基本最常见的核心问法',
        keyword: '胃药品牌排行榜',
        tag: '跟目标产品不符',
        tagColor: TAG.violet,
        note: '该问法答案空间以奥美拉唑、达喜、吗丁啉等对症西药为主；本品为滋阴养胃调理型中成药，难以进入该入口主流推荐。',
    },
    {
        type: '1.行业-核心卖点',
        typeColor: TAG.cyan,
        name: '「健脾和胃」类共性功效表述',
        desc: '健脾、和胃、护胃是养胃类中成药普遍使用的功效表述，绝大多数品种都能对上。',
        keyword: '能健脾和胃的养胃药推荐',
        tag: '品类共性',
        tagColor: TAG.carmine,
        note: '属养胃中成药共有表述，接不出本品滋阴养胃、对证胃脘灼热隐痛的差异化定位。',
    },
    {
        type: '2.产品-核心痛点',
        typeColor: TAG.green,
        name: '胃寒人群不适用',
        desc: '脾胃虚寒、胃脘凉痛对应姊妹产品温胃舒，非本品证型。',
        keyword: '适合胃寒怕凉人群的养胃药推荐',
        tag: '产品痛点',
        tagColor: TAG.blue,
        note: '产品不足：本品对证灼热隐痛/气阴两虚方向，脾胃虚寒凉痛接不住。',
    },
    {
        type: '1.行业-场景画像',
        typeColor: TAG.orange,
        name: '泛化的养胃需求表达',
        desc: '消费者常以「胃不舒服」「养养胃」这类笼统说法描述状态，未指向具体症状或证型。',
        keyword: '胃不舒服想养养胃吃什么',
        tag: '搜索意图低',
        tagColor: TAG.teal,
        note: '既不指向症状也不指向证型，答案空间发散，难以稳定落到具体品种推荐。',
    },
    {
        type: '2.产品-购买动机',
        typeColor: TAG.teal,
        name: '说明书锚定慢性胃炎',
        desc: '功能主治明确用于慢性胃炎。',
        keyword: '慢性胃炎调理用的养胃药推荐',
        tag: '重复',
        tagColor: TAG.grass,
        note: '与行业段「慢性胃炎调理用的中成药推荐」及「慢性胃炎调理吃什么养胃药好」意图重叠。',
    },
];

const LEFT_COLS = '40px 150px 140px minmax(0,1.2fr) minmax(0,1fr)';
const RIGHT_COLS = '140px minmax(0,1fr)';

const CRITERIA = [
    { num: '①', title: '非购买意图', desc: 'AI不会推荐任何品牌，而是以回答“信息”为主', badgeClass: 'bg-[#404040]/90 border-[#606060]/50 text-white' },
    { num: '②', title: '跟目标产品不符', desc: '与品牌定位、客户定位不符', badgeClass: 'bg-[#4F2EAF]/90 border-[#744BE3]/50 text-white' },
    { num: '③', title: '品类共性', desc: '属于行业普遍具备的特点，难以体现品牌差异', badgeClass: 'bg-[#732053]/90 border-[#9E3374]/50 text-white' },
    { num: '④', title: '产品痛点', desc: '涉及产品痛点的问题，若无解决办法，不提缺点', badgeClass: 'bg-[#144A63]/90 border-[#207299]/50 text-white' },
    { num: '⑤', title: '搜索意图低', desc: '用户搜索意图较低，表达意思比较模糊', badgeClass: 'bg-[#174E45]/90 border-[#287569]/50 text-white' },
    { num: '⑥', title: '重复', desc: '与前面的词或搜索意图相同，去掉重复项', badgeClass: 'bg-[#1E521C]/90 border-[#347A31]/50 text-white' },
];

function TaggingTable() {
    return (
        <KeywordLogicFlow
            rows={ROWS}
            arrowLabel="词条打标"
            arrowWidth="16%"
            rightWidth="34%"
            rightMinWidth={320}
            leftCols={LEFT_COLS}
            leftHeader={
                <>
                    <HeadCell />
                    <HeadCell>
                        <FieldIcon />
                        类型
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        名称
                    </HeadCell>
                    <HeadCell>
                        <FieldIcon />
                        名称解释
                    </HeadCell>
                    <HeadCell style={{ borderRight: 'none' }}>
                        <FieldIcon />
                        词条生成
                    </HeadCell>
                </>
            }
            renderLeftRow={(r, i) => (
                <>
                    <Cell style={{ justifyContent: 'center', color: FLOW_C.rowNum, fontSize: 13 }}>{i + 1}</Cell>
                    <Cell>
                        <Badge label={r.type} color={r.typeColor} />
                    </Cell>
                    <Cell title={r.name} style={{ fontWeight: 700, fontSize: 13.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {r.name}
                    </Cell>
                    <Cell title={r.desc} style={{ color: FLOW_C.muted, fontSize: 12.5 }}>
                        <Clamp lines={2}>{r.desc}</Clamp>
                    </Cell>
                    <Cell title={r.keyword} style={{ fontWeight: 700, fontSize: 13.5, borderRight: 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {r.keyword}
                    </Cell>
                </>
            )}
            rightHeader={
                <div style={{ display: 'grid', gridTemplateColumns: RIGHT_COLS, width: '100%' }}>
                    <HeadCell>
                        <FieldIcon />
                        词条清洗打标
                    </HeadCell>
                    <HeadCell style={{ borderRight: 'none' }}>
                        <FieldIcon />
                        清洗打标说明
                    </HeadCell>
                </div>
            }
            renderRightRow={(r) => (
                <div style={{ display: 'grid', gridTemplateColumns: RIGHT_COLS, width: '100%', height: '100%', alignItems: 'center' }}>
                    <Cell>
                        <Badge label={r.tag} color={r.tagColor} />
                    </Cell>
                    <Cell title={r.note} style={{ color: FLOW_C.muted, fontSize: 12.5, borderRight: 'none' }}>
                        <Clamp lines={2}>{r.note}</Clamp>
                    </Cell>
                </div>
            )}
        />
    );
}

export default function Page_KeywordTaggingLogic() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans pt-3 pb-5 px-6 lg:pt-4 lg:pb-6 lg:px-8 xl:pt-5 xl:pb-8 xl:px-10 animate-fade-in">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full max-w-[1650px] mx-auto flex flex-col h-full relative z-10 pt-0 gap-3.5 lg:gap-4 min-h-0">
                <div className="shrink-0 flex flex-col gap-2">
                    <h1 className="text-[32px] font-extrabold text-white tracking-widest leading-tight">词条打标逻辑</h1>

                    <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 lg:p-5 mt-1">
                        <div className="text-[18px] lg:text-[20px] xl:text-[22px] text-zinc-100 font-extrabold mb-4 tracking-wider border-b border-white/10 pb-3 flex items-center gap-2.5">
                            <span className="w-2.5 h-5 bg-[#004CE5] rounded shadow-[0_0_12px_rgba(0,76,229,0.6)]" />
                            打标依据：
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-4">
                            {CRITERIA.map((item) => (
                                <div
                                    key={item.num}
                                    className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.15] rounded-xl p-4 lg:p-5 transition-all duration-300 flex flex-col gap-3 group hover:-translate-y-0.5 shadow-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-zinc-400 font-black text-[18px] lg:text-[20px] xl:text-[22px]">
                                            {item.num}
                                        </span>
                                        <span
                                            className={`px-4 lg:px-4.5 py-1.5 rounded-full text-[15px] lg:text-[16.5px] xl:text-[18px] font-extrabold tracking-wider border shadow-md ${item.badgeClass}`}
                                        >
                                            {item.title}
                                        </span>
                                    </div>
                                    <p className="text-zinc-200 text-[15px] lg:text-[16.5px] xl:text-[18px] leading-relaxed pl-8 font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative flex-1 min-h-0 w-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <TaggingTable />
                </div>
            </div>
        </div>
    );
}
