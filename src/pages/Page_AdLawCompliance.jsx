import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ══════════════════════════════════════════════════════════════
   二、医药行业核心门槛 —— 广告法及行业潜规则洞悉
   资料来源：《医药广告法调研_完整版》（2026-08）

   配色只用蓝色，靠饱和度区分语义：
     强蓝  = 安全区 / 推荐做法 / 结论
     弱蓝  = 红线 / 已失效玩法（低饱和深蓝，靠描边与斜杠标记）
   ══════════════════════════════════════════════════════════════ */

const BLUE = {
    strong: '#004CE5', // 高饱和：安全、推荐、结论
    soft: '#4C8DFF', // 亮蓝：次级强调
    deep: '#12305C', // 中饱和深蓝：中风险
    mute: '#16213A', // 低饱和：红线 / 失效
};

function SectionHeading({ index, title, note }) {
    return (
        <div className="shrink-0 h-[40px] flex items-center gap-4">
            <span className="text-[20px] font-bold text-[#004CE5] leading-[40px]">{index}</span>
            <h3 className="text-[30px] font-bold text-white leading-[40px] whitespace-nowrap">{title}</h3>
            {note && (
                <>
                    <span className="w-px h-[22px] bg-white/15" />
                    <span className="text-[22px] font-bold text-white leading-[40px] whitespace-nowrap">{note}</span>
                </>
            )}
            <span className="flex-1 h-px bg-white/[0.08]" />
        </div>
    );
}

/* ═══════════════ 第一页：三层监管 + 前置问题 ═══════════════ */

const LAYERS = [
    {
        no: '01',
        q: '能不能发',
        title: '品类与媒介禁令',
        d: '处方药只能上专业刊物，事实上没有面向大众的合法广告路径。',
    },
    {
        no: '02',
        q: '要不要批',
        title: '广审号事前审查',
        d: '省级药监审批，未经审查不得发布。',
    },
    {
        no: '03',
        q: '能说多少',
        title: '天花板 = 说明书',
        d: '适应症、功能主治，一个字都不能超出说明书。',
    },
];

export default function Page_AdLaw_Framework() {
    return (
        <SlideLayout
            title="医药广告的监管是三层叠加"
            subtitle="但真正决定灰色地带在哪的，是这三层之上的一个前置问题"
        >
            <div className="w-full h-full flex flex-col animate-fadeIn font-['MiSans'] pt-[40px]">
                <div className="flex-1 min-h-0 flex gap-7">
                    {LAYERS.map((l) => (
                        <div
                            key={l.no}
                            className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.10] bg-[#0B0D19]/45 px-9 py-9 flex flex-col relative overflow-hidden"
                        >
                            <span className="absolute left-0 top-0 w-full h-[3px] bg-gradient-to-r from-[#004CE5] to-transparent" />

                            <div className="shrink-0 flex items-center gap-4">
                                <span className="text-[20px] font-black text-[#4C8DFF] font-['Montserrat'] leading-none">
                                    {l.no}
                                </span>
                                <span className="h-[38px] px-4 rounded-[9px] bg-[#004CE5]/20 border border-[#004CE5]/50 text-[21px] font-bold text-white leading-[36px]">
                                    {l.q}
                                </span>
                            </div>

                            <h4 className="shrink-0 mt-8 text-[46px] font-black text-white leading-[58px]">
                                {l.title}
                            </h4>

                            <p className="shrink-0 mt-5 text-[25px] text-white leading-[38px]">{l.d}</p>
                        </div>
                    ))}
                </div>

                <div className="shrink-0 mt-8 h-[218px] rounded-[24px] border border-[#004CE5]/55 bg-[#004CE5]/[0.16] px-11 flex items-center gap-10 relative overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-[5px] bg-[#004CE5]" />
                    <span className="pointer-events-none absolute -right-24 -top-40 w-[420px] h-[420px] rounded-full bg-[#004CE5]/35 blur-[90px]" />

                    <div className="flex-1 min-w-0 relative">
                        <p className="text-[46px] font-black text-white leading-[58px]">
                            这段内容在法律上，算不算「广告」？
                        </p>
                        <p className="mt-3 text-[26px] text-white leading-[38px]">
                            不算广告，上面三层全部不适用。绝大多数所谓潜规则，都不是在违法打擦边球，而是在让内容不构成广告。
                        </p>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_AdLaw_Framework.hideHeader = true;

/* ═══════════════ 第二页：说明书天花板 ═══════════════ */

const CEILING_ROWS = [
    { cat: '药品', scope: '名称、适应症／功能主治、药理作用' },
    { cat: '医疗器械', scope: '名称、适用范围、作用机理、结构组成' },
    { cat: '保健食品', scope: '保健功能、功效成分、适宜人群、食用量' },
    { cat: '特医食品', scope: '名称、配方、营养学特征、适用人群' },
];

const WORDING_PAIRS = [
    { bad: '降血糖', good: '有助于维持血糖健康水平' },
    { bad: '提高免疫力', good: '有助于增强免疫力' },
    { bad: '治便秘', good: '有助于润肠通便' },
];

export function Page_AdLaw_Ceiling() {
    return (
        <SlideLayout
            title="说明书既是底线，也是天花板"
            subtitle="超出说明书一个字，就从合规声称滑向违法宣传"
        >
            <div className="w-full h-full flex gap-12 animate-fadeIn font-['MiSans'] pt-[40px]">
                {/* 左：四品类的天花板 */}
                <div className="w-[820px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="不得超出的范围" />

                    <div className="flex-1 min-h-0 mt-7 flex flex-col gap-5">
                        {CEILING_ROWS.map((r) => (
                            <div
                                key={r.cat}
                                className="flex-1 min-h-0 rounded-[20px] border border-white/[0.10] bg-[#0B0D19]/45 px-8 flex items-center gap-8 relative overflow-hidden"
                            >
                                <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#004CE5] to-transparent" />
                                <span className="w-[190px] shrink-0 text-[32px] font-black text-white leading-[40px] whitespace-nowrap">
                                    {r.cat}
                                </span>
                                <span className="flex-1 min-w-0 text-[24px] text-white leading-[34px]">{r.scope}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 右：话术就是分界 */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="一个词的距离" note="保健食品仅 24 项功能，须用官方表述" />

                    <div className="flex-1 min-h-0 mt-7 flex flex-col gap-5">
                        {WORDING_PAIRS.map((p) => (
                            <div key={p.bad} className="flex-1 min-h-0 flex items-stretch gap-5">
                                <div
                                    className="w-[300px] shrink-0 rounded-[18px] border border-white/25 px-6 flex flex-col justify-center"
                                    style={{ background: BLUE.mute }}
                                >
                                    <span className="text-[17px] font-bold text-white leading-none tracking-[0.15em]">
                                        违 法
                                    </span>
                                    <span className="mt-2.5 text-[32px] font-black text-white leading-[40px] line-through decoration-white/50 decoration-[3px]">
                                        {p.bad}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0 rounded-[18px] border border-[#004CE5]/55 bg-[#004CE5]/[0.16] px-6 flex flex-col justify-center relative overflow-hidden">
                                    <span className="absolute left-0 top-0 h-full w-[3px] bg-[#004CE5]" />
                                    <span className="text-[17px] font-bold text-[#4C8DFF] leading-none tracking-[0.15em]">
                                        合 规
                                    </span>
                                    <span className="mt-2.5 text-[30px] font-black text-white leading-[40px]">
                                        {p.good}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="shrink-0 mt-7 pt-6 border-t border-white/[0.10] text-[24px] text-white leading-[36px]">
                        普通食品连这 24 项都不能说——换成普通食品身份，等于把宣称空间归零。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_AdLaw_Ceiling.hideHeader = true;

/* ═══════════════ 第三页：绝对红线 ═══════════════ */

const RED_LINES = [
    { t: '功效与安全性的断言', d: '「无毒副作用」「天然所以安全」' },
    { t: '治愈率、有效率', d: '涉癌症、近视防控的从重处罚' },
    { t: '与其他产品比较', d: '比功效、比安全性、比机构' },
    { t: '代言人推荐、证明', d: '明星、网红、医师、药师、患者' },
    { t: '制造健康焦虑', d: '暗示不用就会患病、加重病情' },
    { t: '虚构医生与患者', d: '含 AI 生成的「专家」形象' },
];

export function Page_AdLaw_RedLines() {
    return (
        <SlideLayout
            title="六条没有裁量空间的红线"
            subtitle="不存在「操作得好就没事」——踩上就是《广告法》第 55／57／58 条，罚款起步，行刑衔接在后"
        >
            <div className="w-full h-full flex flex-col animate-fadeIn font-['MiSans'] pt-[40px]">
                <div className="flex-1 min-h-0 grid grid-cols-3 grid-rows-2 gap-7">
                    {RED_LINES.map((item, i) => (
                        <div
                            key={item.t}
                            className="min-h-0 rounded-[22px] border border-white/20 px-9 flex flex-col justify-center relative overflow-hidden"
                            style={{ background: BLUE.mute }}
                        >
                            <span className="absolute left-0 top-0 h-full w-[4px] bg-white/35" />

                            <div className="flex items-center gap-5">
                                <span className="shrink-0 w-[52px] h-[52px] rounded-[13px] border border-white/30 bg-white/[0.06] flex items-center justify-center text-[21px] font-black text-white font-['Montserrat'] leading-none">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="flex-1 min-w-0 text-[33px] font-black text-white leading-[42px]">
                                    {item.t}
                                </span>
                            </div>
                            <p className="mt-4 ml-[72px] text-[23px] text-white leading-[34px]">{item.d}</p>
                        </div>
                    ))}
                </div>

                <p className="shrink-0 mt-8 text-[25px] text-white leading-[36px]">
                    另加两条渠道红线：
                    <span className="font-black text-[#4C8DFF]">无广审号发布</span>
                    ，以及
                    <span className="font-black text-[#4C8DFF]">在科普页面内附加购买链接或机构跳转入口</span>。
                </p>
            </div>
        </SlideLayout>
    );
}

Page_AdLaw_RedLines.hideHeader = true;

/* ═══════════════ 第四页：什么算「广告」（核心） ═══════════════ */

const AD_ELEMENTS = ['营销性', '媒介性', '受众不特定性', '非强制性'];

const SAFE_ZONE = [
    { t: '不涉及具体产品的科普宣传', use: '无品牌疾病教育' },
    { t: '电话、私信等点对点即时交流', use: '私域一对一转化' },
    { t: '在互联网聊天群内推销产品', use: '社群营销' },
    { t: '互联网诊疗中医生给的用药建议', use: '互联网医院闭环' },
];

export function Page_AdLaw_WhatIsAd() {
    return (
        <SlideLayout
            title="灰色地带，都从「什么算广告」长出来"
            subtitle="不是我们在推测怎么钻空子，是监管部门主动写进正式文件的合法空间"
        >
            <div className="w-full h-full flex flex-col animate-fadeIn font-['MiSans'] pt-[40px]">
                {/* 四要件 */}
                <div className="shrink-0 flex items-center gap-6">
                    <span className="shrink-0 text-[27px] font-black text-white leading-[38px] whitespace-nowrap">
                        广告的四个构成要件
                    </span>
                    <span className="shrink-0 text-[23px] text-white leading-[38px] whitespace-nowrap">缺一不可</span>
                    <div className="flex-1 min-w-0 flex items-center gap-5">
                        {AD_ELEMENTS.map((e) => {
                            const key = e === '受众不特定性';
                            return (
                                <span
                                    key={e}
                                    className={`flex-1 h-[82px] rounded-[16px] flex items-center justify-center text-[30px] font-black text-white leading-none ${
                                        key
                                            ? 'border-2 border-[#004CE5] bg-[#004CE5]/[0.24] shadow-[0_0_28px_rgba(0,76,229,0.35)]'
                                            : 'border border-white/15 bg-white/[0.04]'
                                    }`}
                                >
                                    {e}
                                </span>
                            );
                        })}
                    </div>
                </div>

                {/* 安全区 */}
                <div className="flex-1 min-h-0 mt-9 flex flex-col">
                    <SectionHeading
                        index="→"
                        title="官方明文写出的「不属于商业广告」"
                        note="《上海市三品一械广告活动合规指引》第 6 条"
                    />

                    <div className="flex-1 min-h-0 mt-7 grid grid-cols-2 gap-7">
                        {SAFE_ZONE.map((s) => (
                            <div
                                key={s.t}
                                className="min-h-0 rounded-[22px] border border-[#004CE5]/50 bg-[#004CE5]/[0.13] px-9 flex flex-col justify-center relative overflow-hidden"
                            >
                                <span className="absolute left-0 top-0 h-full w-[4px] bg-[#004CE5]" />
                                <p className="text-[30px] font-bold text-white leading-[42px]">{s.t}</p>
                                <p className="mt-3 text-[26px] font-black text-[#4C8DFF] leading-[36px]">
                                    → {s.use}的法律依据
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="shrink-0 mt-8 text-[24px] text-white leading-[36px]">
                    同一句话说错了，在广告框架里是虚假广告、按广告费三到五倍罚款；在科普框架里只是责令整改。
                    <span className="font-black text-[#4C8DFF]">这个惩罚落差，就是行业宁愿不做广告的根本原因。</span>
                </p>
            </div>
        </SlideLayout>
    );
}

Page_AdLaw_WhatIsAd.hideHeader = true;

/* ═══════════════ 第五页：2026 年 2 月的分水岭 ═══════════════ */

const PLATFORM_STATUS = [
    {
        name: '小红书',
        head: '2026-02-10 全类目禁推',
        d: '保健食品、OTC、处方药、医疗器械、特医食品全线禁止达人推广，六级阶梯处罚直至封号。',
    },
    {
        name: '抖音',
        head: '未发公告，已实质收紧',
        d: '美瞳等三类器械停止达人带货；处方药仅允许货架售卖，严禁直播与广告推广。',
    },
];

export function Page_AdLaw_Watershed() {
    return (
        <SlideLayout
            title="2026 年 2 月 1 日：一条分水岭"
            subtitle="过去十年最主流的灰色路径「找达人种草三品一械」，在法律和平台两个层面同时关闭"
        >
            <div className="w-full h-full flex flex-col animate-fadeIn font-['MiSans'] pt-[40px]">
                {/* 法律侧的等式 */}
                <div className="shrink-0 flex items-stretch gap-6">
                    <div className="flex-1 min-w-0 h-[214px] rounded-[22px] border border-white/[0.12] bg-[#0B0D19]/45 px-9 py-8 flex flex-col justify-center">
                        <span className="text-[20px] font-bold text-[#4C8DFF] leading-none">
                            《直播电商监督管理办法》第 35 条
                        </span>
                        <p className="mt-5 text-[31px] font-black text-white leading-[44px]">
                            达人以自己的名义或形象
                            <br />
                            推荐商品 = 商业广告
                        </p>
                    </div>

                    <div className="w-[70px] shrink-0 flex items-center justify-center">
                        <span className="text-[46px] font-black text-white leading-none font-['Montserrat']">+</span>
                    </div>

                    <div className="flex-1 min-w-0 h-[214px] rounded-[22px] border border-white/[0.12] bg-[#0B0D19]/45 px-9 py-8 flex flex-col justify-center">
                        <span className="text-[20px] font-bold text-[#4C8DFF] leading-none">
                            《广告法》第 16、18 条
                        </span>
                        <p className="mt-5 text-[31px] font-black text-white leading-[44px]">
                            三品一械不得利用
                            <br />
                            广告代言人作推荐
                        </p>
                    </div>

                    <div className="w-[70px] shrink-0 flex items-center justify-center">
                        <span className="text-[42px] font-black text-white leading-none font-['Montserrat']">=</span>
                    </div>

                    <div className="w-[560px] shrink-0 h-[214px] rounded-[22px] border-2 border-[#004CE5] bg-[#004CE5]/[0.20] px-9 flex flex-col justify-center relative overflow-hidden">
                        <span className="pointer-events-none absolute -right-20 -top-32 w-[340px] h-[340px] rounded-full bg-[#004CE5]/35 blur-[80px]" />
                        <p className="relative text-[38px] font-black text-white leading-[52px]">
                            达人推广三品一械
                            <br />
                            本身即构成违法代言
                        </p>
                    </div>
                </div>

                {/* 平台落地 */}
                <div className="flex-1 min-h-0 mt-9 flex gap-7">
                    {PLATFORM_STATUS.map((p) => (
                        <div
                            key={p.name}
                            className="flex-1 min-w-0 h-full rounded-[22px] border border-white/[0.12] bg-[#0B0D19]/45 px-9 py-8 flex flex-col justify-center"
                        >
                            <div className="shrink-0 flex items-center gap-5">
                                <span className="w-[6px] h-[34px] rounded-full bg-[#004CE5] shrink-0" />
                                <span className="text-[34px] font-black text-white leading-[42px] whitespace-nowrap">
                                    {p.name}
                                </span>
                                <span
                                    className="h-[40px] px-4 rounded-[9px] border border-white/25 text-[21px] font-bold text-white leading-[38px] whitespace-nowrap"
                                    style={{ background: BLUE.mute }}
                                >
                                    {p.head}
                                </span>
                            </div>
                            <p className="mt-6 text-[25px] text-white leading-[38px]">{p.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}

Page_AdLaw_Watershed.hideHeader = true;

/* ═══════════════ 第六页：还在跑的六条路 ═══════════════ */

const PLAYBOOK = [
    {
        t: '无品牌疾病教育',
        risk: '低',
        how: '只讲疾病本身，零产品信息',
        why: '不涉及具体产品的科普，不属于商业广告',
    },
    {
        t: '成分科普占品类词',
        risk: '中低',
        how: '不讲品牌讲成分，用生活场景替代疾病词',
        why: '无品牌露出即不构成广告，也不受说明书约束',
    },
    {
        t: '品牌自播、员工出镜',
        risk: '中低',
        how: '把外部达人换成品牌员工、门店药师',
        why: '广告主及其工作人员作推荐，不认定为代言',
    },
    {
        t: '私域点对点与社群',
        risk: '低',
        how: '公域引流沉淀，私域完成教育与转化',
        why: '点对点与聊天群不满足「受众不特定性」',
    },
    {
        t: '货架化：能卖不能推',
        risk: '低',
        how: '正常上架，详情页只做客观信息展示',
        why: '为保障知情权展示产品，不属于商业广告',
    },
    {
        t: '医生科普—诊疗闭环',
        risk: '中',
        how: '医师做纯科普，用户自主跳转问诊',
        why: '互联网诊疗中的用药建议，不属于广告',
    },
];

export function Page_AdLaw_Playbook() {
    return (
        <SlideLayout
            title="达人路径关闭后，还在跑的六条路"
            subtitle="每一条都有官方文件依据——不是钻空子，是监管主动留出的通道"
        >
            <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-7 animate-fadeIn font-['MiSans'] pt-[40px]">
                {PLAYBOOK.map((p, i) => {
                    const isLow = p.risk === '低';
                    return (
                        <div
                            key={p.t}
                            className="min-h-0 rounded-[22px] border border-[#004CE5]/45 bg-[#004CE5]/[0.11] px-8 py-7 flex flex-col relative overflow-hidden"
                        >
                            <span className="absolute left-0 top-0 h-full w-[4px] bg-[#004CE5]" />

                            <div className="shrink-0 flex items-center gap-4">
                                <span className="text-[18px] font-black text-[#4C8DFF] font-['Montserrat'] leading-none">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span
                                    className="h-[30px] px-3 rounded-[8px] text-[16px] font-black text-white leading-[30px] whitespace-nowrap"
                                    style={{ background: isLow ? BLUE.strong : BLUE.deep }}
                                >
                                    风险{p.risk}
                                </span>
                            </div>

                            <h4 className="shrink-0 mt-4 text-[33px] font-black text-white leading-[42px]">{p.t}</h4>

                            <p className="shrink-0 mt-3 text-[23px] text-white leading-[34px]">{p.how}</p>

                            <div className="flex-1" />

                            <p className="shrink-0 mt-4 pt-4 border-t border-white/[0.12] text-[19px] font-bold text-white leading-[28px]">
                                <span className="text-[#4C8DFF]">依据 </span>
                                {p.why}
                            </p>
                        </div>
                    );
                })}
            </div>
        </SlideLayout>
    );
}

Page_AdLaw_Playbook.hideHeader = true;

/* ═══════════════ 第七页：失效老玩法 + 我们的做法 ═══════════════ */

const DEAD_PLAYS = [
    '找达人、KOC 发三品一械种草笔记',
    '不挂购物链接来规避「广告」认定',
    '医生「大号科普、小号带货」',
    '患者证言、康复前后对比图',
    '标注「由 XX 企业支持」求豁免',
    'AI 生成「专家」形象做背书',
];

const OUR_MOVES = [
    {
        t: '内容主力放在安全区',
        d: 'GEO 要占的是品类词、症状词的信源位，本来就不需要品牌硬广——疾病教育与成分科普既最安全，也最容易被 AI 引用。',
    },
    {
        t: '品牌信息走信源收录',
        d: '产品的准确信息通过药品百科、官方渠道、说明书类客观展示进入 AI 语料，而不是靠达人笔记。',
    },
    {
        t: '内容与转化物理隔离',
        d: '科普页面内不放购买链接与跳转入口，让用户主动搜索后再进入品牌专业号或官网。',
    },
];

export function Page_AdLaw_Conclusion() {
    return (
        <SlideLayout
            title="已经失效的老玩法，与我们的做法"
            subtitle="左边这些如果还在用，需要立刻停；右边是这套规则下 GEO 内容真正该走的路"
        >
            <div className="w-full h-full flex gap-12 animate-fadeIn font-['MiSans'] pt-[40px]">
                {/* 左：失效清单 */}
                <div className="w-[760px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="一、" title="2025—2026 已明确失效" />

                    <div className="flex-1 min-h-0 mt-7 flex flex-col gap-4">
                        {DEAD_PLAYS.map((p) => (
                            <div
                                key={p}
                                className="flex-1 min-h-0 rounded-[18px] border border-white/20 px-8 flex items-center gap-6 relative overflow-hidden"
                                style={{ background: BLUE.mute }}
                            >
                                <span className="absolute left-0 top-0 h-full w-[3px] bg-white/35" />
                                <span className="shrink-0 w-[30px] h-[30px] rounded-full border border-white/40 flex items-center justify-center">
                                    <span className="block w-[15px] h-[2px] bg-white rounded-full rotate-45" />
                                </span>
                                <span className="flex-1 min-w-0 text-[26px] font-bold text-white leading-[36px]">
                                    {p}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 右：我们的三条原则 */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="我们做 GEO 内容的三条原则" />

                    <div className="flex-1 min-h-0 mt-7 flex flex-col gap-6">
                        {OUR_MOVES.map((m, i) => (
                            <div
                                key={m.t}
                                className="flex-1 min-h-0 rounded-[22px] border border-[#004CE5]/50 bg-[#004CE5]/[0.13] px-9 py-7 flex flex-col justify-center relative overflow-hidden"
                            >
                                <span className="absolute left-0 top-0 h-full w-[4px] bg-[#004CE5]" />
                                <div className="flex items-center gap-5">
                                    <span className="shrink-0 w-[46px] h-[46px] rounded-[12px] bg-[#004CE5] flex items-center justify-center text-[20px] font-black text-white font-['Montserrat'] leading-none shadow-[0_0_20px_rgba(0,76,229,0.5)]">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="flex-1 min-w-0 text-[32px] font-black text-white leading-[42px]">
                                        {m.t}
                                    </span>
                                </div>
                                <p className="mt-4 ml-[66px] text-[23px] text-white leading-[34px]">{m.d}</p>
                            </div>
                        ))}
                    </div>

                    <p className="shrink-0 mt-7 pt-6 border-t border-white/[0.10] text-[24px] text-white leading-[36px]">
                        <span className="font-black text-[#4C8DFF]">GEO 争的是 AI 引用的信源位，不是消费者眼前的曝光位</span>
                        ，天然就长在监管划出的安全区里。
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_AdLaw_Conclusion.hideHeader = true;
