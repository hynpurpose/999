import React from 'react';

/**
 * 竞品对比（说明书 / 米内网零售口径，截至 2026.08）
 * 五个中成药竞品 + 一个化药抗酸原研（达喜），覆盖用户在药店与 AI 问答里最常被推荐的选项
 */
const products = [
    { key: 'yws', name: '养胃舒颗粒', sub: '华润三九 · 独家', highlight: true },
    { key: 'dx', name: '达喜', sub: '拜耳 · 铝碳酸镁咀嚼片', highlight: false },
    { key: 'sjwt', name: '三九胃泰颗粒', sub: '华润三九 · 独家', highlight: false },
    { key: 'mld', name: '摩罗丹', sub: '邯郸制药 · 独家', highlight: false },
    { key: 'wsu', name: '胃苏颗粒', sub: '扬子江药业 · 独家', highlight: false },
    { key: 'xsyw', name: '香砂养胃丸', sub: '非独家 · 多家生产', highlight: false },
];

const rows = [
    {
        label: '说明书适应证',
        cells: {
            yws: ['滋阴养胃、扶正固本', '慢性胃炎，胃脘灼热、隐隐作痛', '中成药 · 温和调理为主'],
            sjwt: ['清热燥湿、行气活血、柔肝止痛', '湿热内蕴、气滞血瘀所致胃痛', '中成药 · 清热行气止痛'],
            mld: ['和胃降逆、健脾消胀、通络定痛', '慢性萎缩性胃炎，胃疼、胀满、嗳气', '中成药 · 偏长疗程调理'],
            wsu: ['理气消胀、和胃止痛', '气滞型胃脘痛，胀痛窜及两胁', '中成药 · 行气消胀'],
            xsyw: ['温中和胃', '不思饮食、呕吐酸水、胃脘满闷', '中成药 · 温中健脾'],
            dx: ['中和胃酸、保护胃黏膜', '慢性胃炎，及胃痛、烧心、反酸、饱胀', '化药 · 嚼服，起效快'],
        },
    },
    {
        label: '对应人群画像',
        cells: {
            yws: ['胃里发烧灼、隐隐作痛', '偏轻中度、症状不急', '想长期养一养的人'],
            sjwt: ['胃痛伴反酸、恶心、饱胀', '症状更急、更明确', '认「999 胃药」的人'],
            mld: ['已做胃镜、确诊萎缩性胃炎', '担心癌前病变', '愿意吃长疗程的人'],
            wsu: ['以胀为主，一着急就发作', '胀痛窜到两侧肋部', '多由医生开具'],
            xsyw: ['吃不下、胃里发闷、易疲倦', '偏虚寒、怕凉的人', '想先便宜吃着看'],
            dx: ['反酸、烧心、吃完就难受', '想立刻压住症状的人', '常与抑酸西药一同被提到'],
        },
    },
    {
        label: '2025 零售终端',
        cells: {
            yws: ['中成药胃药 TOP3', '近 1.8 亿元 · 同比 +12.5%', '头部里增速靠前'],
            sjwt: ['中成药胃药 TOP2', '近 2.9 亿元', '同集团的品类招牌'],
            mld: ['浓缩丸与普通丸双上榜', '分列 TOP10 / TOP14', '零售与院内双线'],
            wsu: ['零售 TOP9', '院内终端 TOP1 · 超 5.7 亿元', '专业侧规模最大'],
            xsyw: ['非独家 · 超百家企业生产', '常年在榜', '靠铺货与低价'],
            dx: ['化药抗酸类规模第一', '胃酸相关用药榜唯一过亿品牌', '与中成药不同榜单'],
        },
    },
    {
        label: '主场渠道',
        cells: {
            yws: ['零售驱动', '实体药店 + 网上药店', '柜台自选为主'],
            sjwt: ['零售驱动', '零售额高于院内', '与本品常并排陈列'],
            mld: ['院内 + 零售并重', '有指南共识背书加持', '医生开具比例高'],
            wsu: ['院内驱动', '医生与药师认知最强', '处方与基药双加持'],
            xsyw: ['广铺货', '基层药店与线上都常见', '价格战的主战场'],
            dx: ['零售 + 院内并重', '外资原研品牌', '药店、电商随手可买'],
        },
    },
    {
        label: '支付与购买',
        cells: {
            yws: ['OTC 甲类 · 医保乙类', '可自行购买', '单价亲民'],
            sjwt: ['OTC · 医保目录内', '同柜台常并排陈列', '单价与本品接近'],
            mld: ['OTC 甲类 · 医保乙类', '疗程较长', '总花费更高'],
            wsu: ['OTC 甲类 · 医保甲类', '并列入国家基本药物目录', '报销门槛最低'],
            xsyw: ['OTC 甲类 · 医保甲类', '价格最低', '价格敏感人群首选'],
            dx: ['OTC 甲类 · 医保乙类', '无需处方，嚼服方便', '自我用药不建议超过 7 天'],
        },
    },
    {
        label: '区别与竞争',
        cells: {
            yws: ['胃没力气，还发干发烧灼', '一边补力气，一边补滋润', '999 招牌响，这块没对手'],
            dx: ['胃酸太多，反酸、烧心', '直接中和胃酸，见效快', '只压酸，胃虚乏力管不了'],
            sjwt: ['胃里发闷发热，胀痛反酸', '给胃降火，把堵的气顺开', '同门，却治不了胃虚发热'],
            mld: ['胃镜查出黏膜萎缩', '按疗程慢慢修黏膜', '没做胃镜的人不会选'],
            wsu: ['胃里胀气顶着，老打嗝', '把顶着的那口气顺下去', '只管胀，不管烧灼隐痛'],
            xsyw: ['胃怕凉，吃点凉的就难受', '给胃加温，去掉寒和闷', '同叫养胃，方向正相反'],
        },
    },
];

const GRID = {
    display: 'grid',
    gridTemplateColumns: '140px repeat(6, minmax(0, 1fr))',
    width: '100%',
};

export default function Page_BrandCompetitors() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-1 relative z-10 shrink-0">
                <h1 className="text-[34px] font-black text-white tracking-widest">竞品对比</h1>
            </div>

            <div className="flex-1 w-full px-10 pb-3 relative z-10 flex flex-col min-h-0">
                <div className="w-full flex-1 flex flex-col border border-white/10 rounded-xl overflow-hidden bg-zinc-900/60 min-h-0">

                    <div className="bg-black/70 border-b border-white/10 shrink-0" style={GRID}>
                        <div className="py-2.5 flex items-center justify-center border-r border-white/10 min-w-0">
                            <span className="text-white font-bold text-[17px]">对比项</span>
                        </div>
                        {products.map((p) => (
                            <div
                                key={p.key}
                                className={`py-2.5 px-2 flex flex-col items-center justify-center border-r border-white/10 last:border-r-0 relative min-w-0 ${
                                    p.highlight ? 'bg-[#004CE5]/15' : ''
                                }`}
                            >
                                {p.highlight && <div className="absolute top-0 inset-x-0 h-1 bg-[#004CE5]" />}
                                <span className="text-[19px] font-extrabold tracking-wide text-white text-center leading-tight">
                                    {p.name}
                                </span>
                                <span className="text-[14px] text-white font-bold mt-0.5 text-center leading-tight">
                                    {p.sub}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex-1 flex flex-col divide-y divide-white/10 min-h-0">
                        {rows.map((row) => (
                            <div key={row.label} className="min-h-0 flex-1" style={GRID}>
                                <div className="px-2 flex items-center justify-center border-r border-white/10 text-center bg-black/40 min-w-0">
                                    <span className="font-bold text-white text-[17px] leading-snug whitespace-nowrap">
                                        {row.label}
                                    </span>
                                </div>
                                {products.map((p) => {
                                    const lines = row.cells[p.key];
                                    return (
                                        <div
                                            key={p.key}
                                            className={`px-2.5 py-1.5 flex flex-col justify-center gap-0.5 border-r border-white/10 last:border-r-0 min-w-0 overflow-hidden ${
                                                p.highlight ? 'bg-[#004CE5]/10' : ''
                                            }`}
                                        >
                                            {lines.map((line, i) => (
                                                <p
                                                    key={line}
                                                    className={`leading-snug text-white text-pretty ${
                                                        i === 0 ? 'text-[15.5px] font-bold' : 'text-[15px]'
                                                    }`}
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-white text-[13px] font-bold mt-1.5 text-right shrink-0">
                    适应证与支付属性以各产品说明书、国家医保目录为准；零售规模为米内网中国城市实体药店口径，达喜属化药抗酸类榜单，与中成药胃药榜不可直接比较
                </p>
            </div>
        </div>
    );
}
