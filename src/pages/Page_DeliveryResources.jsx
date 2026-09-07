import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/* ── 通用：白底 logo 板 ── */

function LogoPlate({ src, alt, height = 118, maxH = 74, padX = 20 }) {
    const [failed, setFailed] = useState(false);
    const fileName = src.split('/').pop();

    return (
        <div
            className="w-full shrink-0 rounded-xl bg-white flex items-center justify-center"
            style={{ height: `${height}px`, paddingLeft: `${padX}px`, paddingRight: `${padX}px` }}
        >
            {failed ? (
                <div className="w-full h-full my-3 rounded-lg border border-dashed border-zinc-300 flex flex-col items-center justify-center gap-1">
                    <span className="text-[13px] text-zinc-400 tracking-widest font-bold">图片位</span>
                    <span className="text-[12px] text-zinc-400 font-mono">{fileName}</span>
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setFailed(true)}
                    className="max-w-full object-contain"
                    style={{ maxHeight: `${maxH}px` }}
                />
            )}
        </div>
    );
}

function GroupLabel({ index, title, note }) {
    return (
        <div className="shrink-0 flex items-center gap-4 pb-4">
            <span className="px-3.5 py-1.5 rounded-md bg-[#004CE5] text-white text-[20px] font-bold tracking-widest font-['Montserrat']">
                {index}
            </span>
            <span className="text-[32px] font-bold text-white">{title}</span>
            <span className="text-[24px] text-white">{note}</span>
            <span className="flex-1 h-px bg-white/10" />
        </div>
    );
}

/* ═══════════ 通用投放资源明细（4 页，每页 2 个门户类别，末页留省略位）═══════════ */

/* 数据口径：飞书「医药行业投放资源」表全量 3053 条记录，按「门户类别」字段分组统计。
   可投放位 = 表内记录条数；覆盖平台 = 去掉「首发 / 首页 / 焦点图」等位置后缀后的品牌数。
   01「AI 独家资源」不在该表内，按独家对接通道数计（不按位报价）。
   02 药品百科的原始标签有缺失，部分记录被归到了 03 综合医疗健康平台，这里按实际类别划回，
   两组数字增减相抵，六类可投放位与覆盖平台的总和保持不变。 */

const DETAIL_GROUPS = [
    {
        index: '01',
        title: 'AI 独家资源',
        note: 'AI 平台自建，模型医疗回答的源头',
        stats: [
            { v: '13', u: '家', l: '独家平台' },
            { v: '5', u: '个', l: '覆盖大模型' },
        ],
        summary:
            '小荷健康、腾讯医典、夸克健康、百度健康医典、蚂蚁阿福医学文献库等 13 家，分别对应豆包、元宝、千问、文心、阿福的医疗知识库。公开渠道买不到，均设资质准入与内容审核，通道已经打通，投的是模型答案的源头。',
        shot: '/delivery-detail/ai-exclusive.png',
    },
    {
        index: '02',
        title: '药品百科及数据库',
        note: '按药品名建词条的结构化资料库',
        stats: [
            { v: '48', u: '个', l: '可投放位' },
            { v: '16', u: '家', l: '覆盖平台' },
        ],
        summary:
            '数量最少、门槛最高的一类。摩熵医药、中国医药信息查询平台属独家对接资源，米内网、药智网为行业权威库。报价 160 元 至 1.2 万元不等，投的是「AI 回答某个药怎么吃」时直接取用的那条词条。',
        shot: '/delivery-detail/drug-db.png',
    },
    {
        index: '03',
        title: '综合医疗健康平台',
        note: '体量最大的常规铺量池',
        stats: [
            { v: '1,038', u: '个', l: '可投放位' },
            { v: '846', u: '家', l: '覆盖平台' },
        ],
        summary:
            '39 健康、民福康、中华网健康、凤凰网健康以及大量地方新闻站的健康频道。中位报价 126 元，最低 10 元起，一半以上支持正文内链，是把品牌词、产品词批量种进 AI 语料的主力盘。',
        shot: '/delivery-detail/health-portal.png',
    },
    {
        index: '04',
        title: '专业学术内容',
        note: '医生和从业者自己在看的平台',
        stats: [
            { v: '59', u: '个', l: '可投放位' },
            { v: '21', u: '家', l: '覆盖平台' },
        ],
        summary:
            '丁香园、医脉通、医学界、健康界、动脉网、医师报、生物谷。中位报价 2,200 元，首页焦点图一类的头部位置可到 2.9 万元，买的是 AI 判断「这条信息专不专业」时给的权重。',
        shot: '/delivery-detail/academic.png',
    },
    {
        index: '05',
        title: '医生问答及科普',
        note: '内容形态天然贴合用户提问',
        stats: [
            { v: '36', u: '个', l: '可投放位' },
            { v: '16', u: '家', l: '覆盖平台' },
        ],
        summary:
            '博禾医生、快速问医生、有来医生、寻医问药、丁香医生、医联媒体。一问一答的结构和用户提问方式对得上，AI 常常整段搬运，中位报价 700 元，其中 5 个平台是我们的独家通道。',
        shot: '/delivery-detail/doctor-qa.png',
    },
    {
        index: '06',
        title: '官方及权威机构',
        note: '单价最高，作用是背书',
        stats: [
            { v: '208', u: '个', l: '可投放位' },
            { v: '131', u: '家', l: '覆盖平台' },
        ],
        summary:
            '人民日报健康客户端、新华社、光明网、央视网、健康时报、健康报、中国医药报、中国中医药报，其中央媒资源 65 席。中位报价 1,700 元，头部版面最高 5.2 万元。AI 在下结论、澄清争议时优先引用这一层信源。',
        shot: '/delivery-detail/official.png',
    },
    {
        index: '07',
        title: '自媒体及短视频',
        note: '单价最低，负责量感',
        stats: [
            { v: '1,662', u: '个', l: '可投放位' },
            { v: '1,285', u: '家', l: '覆盖平台' },
        ],
        summary:
            '健康养生类账号矩阵，覆盖头条号、百家号、小红书、视频号等分发渠道。中位报价 60 元，四分之一的资源单价在 36 元以内，用来做话题面上的铺量，让同一个说法在多个渠道反复出现。',
        shot: '/delivery-detail/self-media.png',
    },
];

function ShotSlot({ src }) {
    const [failed, setFailed] = useState(false);
    const fileName = src.split('/').pop();

    return (
        <div className="flex-1 min-h-0 rounded-[18px] border border-white/[0.08] bg-white/[0.03] overflow-hidden flex items-center justify-center">
            {failed ? (
                <div className="w-full h-full m-3 rounded-[14px] border border-dashed border-white/20 flex flex-col items-center justify-center gap-2">
                    <span className="text-[22px] text-white font-bold tracking-widest">图片位</span>
                    <span className="text-[18px] text-white font-mono">{fileName}</span>
                </div>
            ) : (
                <img
                    src={src}
                    alt=""
                    onError={() => setFailed(true)}
                    className="w-full h-full object-contain"
                />
            )}
        </div>
    );
}

function DetailPanel({ group }) {
    return (
        <div className="flex-1 min-w-0 h-full flex flex-col rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 py-7">

            <div className="shrink-0 flex items-center gap-4">
                <span className="px-3.5 py-1.5 rounded-md bg-[#004CE5] text-white text-[20px] font-bold tracking-widest font-['Montserrat']">
                    {group.index}
                </span>
                <h3 className="text-[34px] font-bold text-white leading-none whitespace-nowrap">
                    {group.title}
                </h3>
                <span className="w-px h-[24px] bg-white/15" />
                <span className="text-[22px] text-white leading-none whitespace-nowrap">
                    {group.note}
                </span>
            </div>

            <div className="shrink-0 mt-7 flex items-stretch">
                {group.stats.map((s, i) => (
                    <React.Fragment key={s.l}>
                        {i > 0 && <span className="w-px self-stretch bg-white/[0.1]" />}
                        <div className="flex-1 min-w-0 flex flex-col justify-center gap-3 px-1">
                            <span className="text-[52px] font-black text-[#004CE5] font-['Montserrat'] leading-none tabular-nums">
                                {s.v}
                                <span className="ml-1 text-[24px] font-bold">{s.u}</span>
                            </span>
                            <span className="text-[20px] font-bold text-white leading-none">
                                {s.l}
                            </span>
                        </div>
                    </React.Fragment>
                ))}
            </div>

            <p className="shrink-0 mt-7 text-[22px] text-white leading-[34px]">
                {group.summary}
            </p>

            <div className="shrink-0 h-7" />

            <ShotSlot src={group.shot} />
        </div>
    );
}

/* 末页只剩单个类别，右侧用省略位补齐，表示后面还有内容 */
function MorePanel() {
    return (
        <div className="flex-1 min-w-0 h-full flex flex-col items-center justify-center gap-8 rounded-[24px] border border-dashed border-white/[0.14] bg-[#0B0D19]/25">
            <div className="flex items-center gap-6">
                {[0, 1, 2].map((i) => (
                    <span key={i} className="w-[20px] h-[20px] rounded-full bg-white" />
                ))}
            </div>
            <span className="text-[28px] font-bold text-white">更多资源见完整清单</span>
        </div>
    );
}

function DetailPage({ groups, more = false }) {
    return (
        <SlideLayout
            title="通用投放资源明细"
            subtitle={groups.map((g) => g.title).join(' · ') + (more ? ' 等' : '')}
        >
            <div className="w-full h-full flex gap-8 animate-fadeIn font-['MiSans']">
                {groups.map((g) => (
                    <DetailPanel key={g.title} group={g} />
                ))}
                {more && <MorePanel />}
            </div>
        </SlideLayout>
    );
}

export function Page_DeliveryResources_Detail_A() {
    return <DetailPage groups={DETAIL_GROUPS.slice(0, 2)} />;
}
Page_DeliveryResources_Detail_A.hideHeader = true;

export function Page_DeliveryResources_Detail_B() {
    return <DetailPage groups={DETAIL_GROUPS.slice(2, 4)} />;
}
Page_DeliveryResources_Detail_B.hideHeader = true;

export function Page_DeliveryResources_Detail_C() {
    return <DetailPage groups={DETAIL_GROUPS.slice(4, 6)} />;
}
Page_DeliveryResources_Detail_C.hideHeader = true;

export function Page_DeliveryResources_Detail_D() {
    return <DetailPage groups={DETAIL_GROUPS.slice(6, 7)} more />;
}
Page_DeliveryResources_Detail_D.hideHeader = true;

/* ═══════════ 第一页：高门槛 / 稀缺资源 ═══════════ */

const AI_OWNED = [
    {
        name: '小荷健康',
        logo: '/medical-platforms/xiaohe-health.png',
        text: '字节健康内容总入口，豆包与小荷 AI 医生共用同一套医学知识库。',
    },
    {
        name: '腾讯医典',
        logo: '/medical-platforms/tencent-yidian.png',
        text: '腾讯自建医学词条库，也是元宝医疗回答所依据的内容来源。',
    },
    {
        name: '夸克健康',
        logo: '/medical-platforms/quark-health.png',
        text: '阿里医学知识与循证体系，千问医疗回答优先依据这里的内容。',
    },
    {
        name: '百度健康医典',
        logo: '/medical-platforms/baidu-jiankang.png',
        text: '百度八成医疗搜索结果的产出体系，也是文心医疗回答的内容来源。',
    },
    {
        name: '蚂蚁阿福医学文献库',
        logo: '/medical-platforms/afu-medlib.png',
        text: '蚂蚁沉淀的医学文献与专业资料库，也是阿福医疗回答所依据的内容来源。',
    },
];

const HARD_TOP = [
    {
        name: '博禾医生',
        logo: '/medical-platforms/bohe-doctor.png',
        text: '医生实名问答与科普，按科室分频道，是这类信源里被 AI 引用最多的站点。',
    },
    {
        name: '丁香医生',
        logo: '/medical-platforms/dxy-doctor.png',
        text: '同行评议机制，专业背景的大众科普口碑最好，覆盖用药与就医决策高频场景。',
    },
    {
        name: '好大夫在线',
        logo: '/medical-platforms/haodf.png',
        text: '收录 1 万余家医院近 94 万名医生，真实图文问诊沉淀，医生资质审核全行业最严。',
    },
    {
        name: '度星选',
        logo: '/medical-platforms/baidu-duxingxuan.png',
        text: '百度达人内容分发平台，一次投放可同时覆盖百度搜索与信息流两个通道。',
    },
    {
        name: '摩熵医药',
        logo: '/medical-platforms/pharnexcloud.png',
        text: '商业化医药数据平台，通稿可争取首页、头条，带产品名的公开页进入 AI 引用池。',
    },
];

function ResourceCard({ item, compact = false }) {
    return (
        <div className={`flex-1 min-w-0 min-h-0 overflow-hidden flex flex-col rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 ${
            compact ? 'px-4 py-4 gap-3' : 'px-6 py-6 gap-4'
        }`}>
            <LogoPlate
                src={item.logo}
                alt={item.name}
                height={compact ? 72 : 118}
                maxH={compact ? 44 : 74}
                padX={compact ? 12 : 20}
            />

            <div className="flex items-center gap-3 min-w-0">
                <h3 className={`font-bold text-white leading-none truncate ${
                    compact ? 'text-[24px]' : 'text-[30px]'
                }`}>
                    {item.name}
                </h3>
                <span className="flex-1 h-px bg-white/10" />
            </div>

            <p className={`text-white min-h-0 ${compact ? 'text-[20px] leading-[28px]' : 'text-[22px] leading-[32px]'}`}>
                {item.text}
            </p>
        </div>
    );
}

export default function Page_DeliveryResources_Hard() {
    return (
        <SlideLayout
            title="独家稀缺资源"
            subtitle="已有对接通道的稀缺投放资源"
        >
            <div className="w-full h-full flex flex-col animate-fadeIn font-['MiSans']">

                <div className="flex-1 min-h-0 flex flex-col gap-6">

                    <div className="flex-1 min-h-0 flex flex-col">
                        <GroupLabel index="01" title="AI 平台旗下的自建资源" note="决定各家模型医疗回答的内容来源" />
                        <div className="flex-1 min-h-0 flex gap-5">
                            {AI_OWNED.map((r) => (
                                <ResourceCard key={r.name} item={r} compact />
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 min-h-0 flex flex-col">
                        <GroupLabel index="02" title="行业头部平台" note="名气大、权威度高，医疗决策与内容分发的关键阵地" />
                        <div className="flex-1 min-h-0 flex gap-5">
                            {HARD_TOP.map((r) => (
                                <ResourceCard key={r.name} item={r} compact />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 免责说明 */}
                <p className="shrink-0 pt-4 text-right text-[20px] text-white leading-none">
                    以上平台对品牌方均设有资质准入与内容审核要求，我们负责资源对接与牵线，具体能否落地以平台审核结果为准。
                </p>
            </div>
        </SlideLayout>
    );
}

Page_DeliveryResources_Hard.hideHeader = true;

/* ═══════════ 第二页：通用类资源 ═══════════ */

/* 均选自飞书「1 通用投放资源」；各类信源章节里举过的示例平台（中国医药信息查询平台、
   摩熵医药、民福康、丁香园、博禾医生等）在这里同步列出，与前文对得上。
   数量按表内可识别品牌密度排布，不求每组一样多。
   logo 一律取带站名文字的横版版本；确实找不到横版的，标 lockup 用「favicon + 站名」拼一个，
   再没有图标的就只留站名——总之不能只剩一个认不出来的 icon。 */
const LOGO = (file) => `/delivery-common/${file}`;
const SRC = (file) => `/medical-sources/${file}`;
const PLAT = (file) => `/medical-platforms/${file}`;

const COMMON_GROUPS = [
    {
        title: ['药品百科', '数据库'],
        sites: [
            { name: '中国医药信息查询平台', logo: LOGO('dayi.png') },
            { name: '摩熵医药', logo: PLAT('pharnexcloud.png') },
            { name: '药智网', logo: LOGO('yaozh.png') },
            { name: '米内网', logo: LOGO('menet.png') },
            { name: '必需药', logo: LOGO('himd.png') },
            { name: '人卫智数', logo: LOGO('pmphai.png') },
            { name: '药品价格315网', logo: SRC('315jiage.png'), lockup: true },
            { name: 'A+医学百科', logo: LOGO('a-hospital.png') },
            { name: '用药安全网', logo: LOGO('yongyaoanquan.png') },
            { name: '298医药网', logo: LOGO('298yy.png') },
            { name: '家庭医药网', logo: LOGO('jtyy.png') },
            { name: '药源网', logo: LOGO('yaoyuan.png') },
            { name: '39药品通', logo: LOGO('yaotong39.png') },
            { name: '药渡数据', logo: LOGO('pharmacodia.png') },
            { name: '智慧芽', logo: LOGO('zhihuiya.png') },
            { name: '健客网', logo: LOGO('jianke.png') },
        ],
    },
    {
        title: ['综合医疗', '健康'],
        sites: [
            { name: '民福康', logo: LOGO('mfk.png') },
            { name: '39健康网', logo: LOGO('39jk.png') },
            { name: '复禾健康', logo: LOGO('fh21.png') },
            { name: '家庭医生在线', logo: LOGO('familydoctor.png') },
            { name: '大众养生网', logo: LOGO('cndzys.png') },
            { name: '99健康网', logo: LOGO('99jk.png') },
            { name: '全民健康网', logo: LOGO('qm120.png') },
            { name: '健康时报', logo: LOGO('jksb.png') },
            { name: '生命时报', logo: LOGO('lifetimes.png') },
            { name: '健康报', logo: LOGO('jiankangbao.png') },
            { name: '人民健康网', logo: LOGO('people-health.png') },
            { name: '健康界', logo: LOGO('cn-healthcare.png') },
            { name: '凤凰网健康', logo: LOGO('ifeng-health.png') },
            { name: '中华网健康', logo: LOGO('china-com-health.png') },
            { name: '腾讯网健康', logo: LOGO('qq-health.png') },
            { name: '新浪网健康', logo: LOGO('sina-health.png') },
        ],
    },
    {
        title: ['专业学术', '内容'],
        sites: [
            { name: '丁香园', logo: LOGO('dxy.png') },
            { name: '医脉通', logo: LOGO('medlive.png') },
            { name: '医学界', logo: LOGO('yxj.png') },
            { name: '梅斯医学', logo: LOGO('medsci.png') },
            { name: '医学论坛网', logo: LOGO('cmt.png') },
            { name: '医师报', logo: LOGO('cmtopdr.png') },
            { name: '动脉网', logo: LOGO('vbdata.png') },
            { name: '生物谷', logo: LOGO('bioon.png') },
        ],
    },
    {
        title: ['医生问答', '科普'],
        sites: [
            { name: '博禾医生', logo: PLAT('bohe-doctor.png') },
            { name: '好大夫在线', logo: PLAT('haodf.png') },
            { name: '春雨医生', logo: LOGO('chunyu.png') },
            { name: '有来医生', logo: LOGO('youlai.png') },
            { name: '快速问医生', logo: LOGO('120ask.png') },
            { name: '妙手医生', logo: LOGO('miaoshou.png') },
            { name: '寻医问药网', logo: LOGO('xywy.png') },
            { name: '名医在线网', logo: LOGO('mingyi.png') },
            { name: '爱问健康', logo: LOGO('iask.png') },
            { name: '邻医网', logo: LOGO('linyi.png') },
            { name: '微诊网', logo: LOGO('weizhen.png') },
            { name: '爱爱医', logo: LOGO('iiyi.png') },
            { name: '丁香医生', logo: PLAT('dxy-doctor.png') },
            { name: '杏林普康', logo: LOGO('xinglinpukang.png') },
            { name: '三知健康', logo: LOGO('3zhijk.png') },
        ],
    },
    {
        title: ['官方', '权威机构'],
        sites: [
            { name: '人民网健康', logo: LOGO('people-cn-health.png') },
            { name: '新华网健康', logo: LOGO('xinhua-health.png') },
            { name: '光明网健康', logo: LOGO('gmw-health.png') },
            { name: '央视网健康', logo: LOGO('cctv-health.png') },
            { name: '新华社客户端', logo: LOGO('xinhuashe-app.png') },
            { name: '中国医药报', logo: LOGO('cnpharm.png') },
            { name: '中国中医药报', logo: LOGO('cntcm.png') },
            { name: '科普中国', logo: LOGO('kepuchina.png') },
        ],
    },
];

/* 横版带字 logo 为主；favicon 加站名的拼装形态仅留给暂时找不到横版图的平台。
   图未到位时显示图片位与期望文件名，方便按名补图，不再退回纯文字。 */
function CommonSiteTile({ name, logo, lockup }) {
    const [failed, setFailed] = useState(false);
    const TILE = 'w-[196px] h-[60px] shrink-0 rounded-xl bg-white overflow-hidden flex items-center';

    if (!logo) {
        return (
            <div className={`${TILE} justify-center px-2`}>
                <span className="text-[17px] font-bold text-zinc-900 text-center leading-[22px]">
                    {name}
                </span>
            </div>
        );
    }

    if (failed) {
        return (
            <div className={`${TILE} justify-center px-1.5`}>
                <div className="w-full h-[50px] rounded-lg border border-dashed border-zinc-300 flex flex-col items-center justify-center">
                    <span className="text-[12px] font-bold text-zinc-400 tracking-[0.2em] leading-[16px]">
                        图片位
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono leading-[14px]">
                        {logo.split('/').pop()}
                    </span>
                </div>
            </div>
        );
    }

    if (lockup) {
        return (
            <div className={`${TILE} gap-2.5 px-2.5`}>
                <img
                    src={logo}
                    alt=""
                    onError={() => setFailed(true)}
                    className="w-[34px] h-[34px] shrink-0 object-contain"
                />
                <span className="flex-1 min-w-0 text-[17px] font-bold text-zinc-900 leading-[21px] whitespace-nowrap">
                    {name}
                </span>
            </div>
        );
    }

    return (
        <div className={`${TILE} justify-center px-2`}>
            <img
                src={logo}
                alt={name}
                onError={() => setFailed(true)}
                className="max-w-full object-contain"
                style={{ maxHeight: '48px' }}
            />
        </div>
    );
}

export function Page_DeliveryResources_Common() {
    return (
        <SlideLayout
            title="通用类平台资源"
            subtitle="覆盖 3,000 余家医疗健康平台，占市面可投放医疗资源的 95% 以上"
        >
            <div className="w-full h-full flex flex-col gap-[8px] animate-fadeIn font-['MiSans']">
                {COMMON_GROUPS.map((g, i) => (
                    <div
                        key={g.title.join('/')}
                        className="min-h-0 flex items-center rounded-[18px] border border-white/[0.08] bg-[#0B0D19]/45 px-4 gap-4"
                        style={{ flex: Math.ceil(g.sites.length / 8) }}
                    >
                        <div className="w-[118px] shrink-0 flex flex-col gap-1">
                            <span className="text-[15px] text-[#004CE5] font-black tracking-[0.16em] font-['Montserrat']">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-[20px] font-bold text-white leading-[26px]">
                                {g.title.map((line) => (
                                    <span key={line} className="block whitespace-nowrap">
                                        {line}
                                    </span>
                                ))}
                            </h3>
                        </div>

                        <div className="flex-1 min-w-0 flex flex-wrap content-center gap-x-2 gap-y-2">
                            {g.sites.map((s) => (
                                <CommonSiteTile key={s.name} name={s.name} logo={s.logo} lockup={s.lockup} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SlideLayout>
    );
}

Page_DeliveryResources_Common.hideHeader = true;

/* ═══════════ 第三页：资源实拍视频 ═══════════ */

const VIDEO_SRC = '/videos/delivery-resources.mp4';

const VIDEO_NOTES = [
    {
        index: '01',
        title: '独家稀缺资源 15 家',
        text: 'AI 平台自建的医学知识库，以及行业头部平台。这类资源设有资质准入与内容审核门槛，公开渠道买不到，通道已经打通。',
    },
    {
        index: '02',
        title: '通用投放资源 3,053 个位置',
        text: '分布在 3,000 余家医疗健康平台，占市面可投放医疗资源的 95% 以上。药品数据库、专业学术、医生问答、官方权威、自媒体矩阵，五类信源一站可选。',
    },
];

export function Page_DeliveryResources_Video() {
    const [failed, setFailed] = useState(false);

    return (
        <SlideLayout title="投放资源完整列表">
            <div className="w-full h-full flex items-center gap-7 animate-fadeIn font-['MiSans']">

                <div className="w-[380px] shrink-0 h-full flex flex-col rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-6 py-7">
                    <h3 className="shrink-0 text-[30px] font-bold text-white leading-none">
                        这份清单里有什么
                    </h3>

                    <div className="flex-1 min-h-0 flex flex-col justify-center gap-8">
                        {VIDEO_NOTES.map((n) => (
                            <div key={n.index} className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="px-2.5 py-1 rounded-md bg-[#004CE5] text-white text-[17px] font-bold tracking-widest font-['Montserrat']">
                                        {n.index}
                                    </span>
                                    <span className="flex-1 h-px bg-white/10" />
                                </div>
                                <span className="text-[24px] font-bold text-white leading-[32px]">
                                    {n.title}
                                </span>
                                <p className="text-[20px] text-white leading-[30px]">
                                    {n.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="shrink-0 text-[18px] text-white leading-[26px]">
                        右侧为完整清单实录，逐条可见平台名称、可投放位置、报价与是否支持正文内链。
                    </p>
                </div>

                <div
                    className="h-full rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 overflow-hidden flex items-center justify-center"
                    style={{ aspectRatio: '16 / 9' }}
                >
                    {failed ? (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-4 border border-dashed border-white/15 rounded-[24px]">
                            <span className="w-16 h-16 rounded-full border-2 border-[#004CE5]/60 flex items-center justify-center">
                                <span
                                    className="border-y-[13px] border-y-transparent border-l-[22px] border-l-[#004CE5] ml-1.5"
                                    style={{ width: 0, height: 0 }}
                                />
                            </span>
                            <span className="text-[24px] text-white tracking-widest font-bold">视频位</span>
                            <span className="text-[20px] text-white font-mono">{VIDEO_SRC}</span>
                        </div>
                    ) : (
                        <video
                            src={VIDEO_SRC}
                            controls
                            preload="metadata"
                            onError={() => setFailed(true)}
                            className="w-full h-full object-contain bg-black"
                        />
                    )}
                </div>
            </div>
        </SlideLayout>
    );
}

Page_DeliveryResources_Video.hideHeader = true;
