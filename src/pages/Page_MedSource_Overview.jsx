import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/* 类别占比按站点实际类型归类后重算：苹果绿养生网 0.6% 与大众养生网 0.3% 属养生门户，
   由「医生问答及科普」并入「综合医疗健康平台」，两类各 ∓0.9pp，五类合计仍为 100.0% */
const CATEGORIES = [
    {
        name: '药品百科及数据库',
        share: 32.8,
        desc: '专门存药品基础资料——成分、适应症、用法用量、不良反应、禁忌。',
        sites: [
            { name: '中国医药信息查询平台', share: '5.5%', icon: '/medical-sources/dayi.png' },
            { name: '摩熵医药', share: '0.8%', icon: '/medical-sources/pharnexcloud.png' },
            { name: '必需药', share: '0.6%', icon: '/medical-sources/himd.png' },
            { name: '米内网', share: '0.4%', icon: '/medical-sources/menet.ico' },
        ],
    },
    {
        name: '综合医疗健康平台',
        share: 21.3,
        desc: '什么都有的健康门户，从「得了什么病」到「怎么治、用什么药」全包。',
        sites: [
            { name: '民福康', share: '2.1%', icon: '/medical-sources/mfk.png' },
            { name: '复禾健康', share: '1.5%', icon: '/medical-sources/fh21.png' },
            { name: '苹果绿养生网', share: '0.6%', icon: '/medical-sources/pingguolv.png' },
            { name: '39 健康网', share: '0.6%', icon: '/medical-sources/jk39.png' },
        ],
    },
    {
        name: '专业学术内容',
        share: 18.3,
        desc: '医院专家文章、临床指南、专家共识、医学论文，循证医学那一套。',
        sites: [
            { name: '丁香园', share: '1.0%', icon: '/medical-sources/dxy-doctor.png' },
            { name: '医脉通', share: '0.4%', icon: '/medical-sources/medlive.png' },
            { name: 'Springer', share: '0.4%', icon: '/medical-sources/springer.png' },
            { name: '中华医学会', icon: '/medical-sources/cma.png' },
        ],
    },
    {
        name: '医生问答及科普',
        share: 18.1,
        desc: '医生、药师回答患者问题，做疾病与用药科普。价值在于有一个具体的医生名字署在上面。',
        sites: [
            { name: '博禾医生', share: '1.5%', icon: '/medical-sources/bohe.png' },
            { name: '百度知道', share: '1.5%', icon: '/medical-sources/baidu-zhidao.png' },
            { name: '好大夫在线', icon: '/medical-sources/haodf.png' },
            { name: '寻医问药网', icon: '/medical-sources/xywy.png' },
        ],
    },
    {
        name: '官方及权威机构',
        share: 9.5,
        desc: '国家机构发布的硬事实：获没获批、能治什么病、能不能报销、报多少。',
        sites: [
            { name: '美国国立卫生研究院', share: '1.2%', icon: '/medical-sources/nih.png' },
            { name: '国家药监局 NMPA', share: '0.3%', icon: '/medical-sources/nmpa.png' },
            { name: '国家医保局', icon: '/medical-sources/nhsa.png' },
            { name: '国家卫健委', icon: '/medical-sources/nhc.svg' },
        ],
    },
];

function SiteChip({ name, icon }) {
    const [failed, setFailed] = useState(false);

    return (
        <span className="h-[48px] px-3.5 rounded-[10px] bg-white/[0.05] flex items-center gap-3 min-w-0">
            {failed || !icon ? (
                <span className="w-[26px] h-[26px] rounded-md bg-white/10 text-[14px] text-white flex items-center justify-center shrink-0">
                    {name.slice(0, 1)}
                </span>
            ) : (
                <span className="w-[26px] h-[26px] rounded-md bg-white overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                        src={icon}
                        alt=""
                        onError={() => setFailed(true)}
                        className="w-full h-full object-contain"
                    />
                </span>
            )}
            <span className="flex-1 min-w-0 text-[20px] text-white leading-none truncate">{name}</span>
        </span>
    );
}

function HeadCell({ className = '', children }) {
    return (
        <span className={`text-[20px] font-bold text-white leading-none tracking-[0.08em] whitespace-nowrap ${className}`}>
            {children}
        </span>
    );
}

export default function Page_MedSource_Overview() {
    return (
        <SlideLayout
            title="医药行业的五类通用信源"
            subtitle="所有AI平台都会参考的内容，按照内容形式可分为五类"
        >
            <div className="w-full h-full flex flex-col gap-[16px] animate-fadeIn font-['MiSans']">
                {/* 表头行：与下方卡片同款容器，列宽逐列对齐 */}
                <div className="shrink-0 h-[56px] relative flex items-center rounded-[18px] border border-white/[0.10] bg-gradient-to-r from-[#004CE5]/[0.22] via-[#004CE5]/[0.10] to-transparent overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#004CE5] to-transparent" />

                    <span className="w-[112px] shrink-0 text-center text-[16px] font-bold text-white leading-none font-['Montserrat'] tracking-[0.18em]">
                        NO.
                    </span>
                    <HeadCell className="w-[300px] shrink-0">信源类型</HeadCell>
                    <HeadCell className="w-[120px] shrink-0">AI引用比例</HeadCell>
                    <HeadCell className="flex-1 min-w-0 pr-10">说明</HeadCell>
                    <HeadCell className="w-[720px] shrink-0 pr-8">示例平台</HeadCell>
                </div>

                {CATEGORIES.map((c, i) => (
                    <div
                        key={c.name}
                        className="flex-1 min-h-0 relative flex items-center rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 overflow-hidden"
                    >
                        <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#004CE5] to-transparent" />

                        {/* 序号 */}
                        <span
                            className="w-[112px] shrink-0 text-center text-white/[0.78] font-black leading-none select-none font-['Montserrat']"
                            style={{ fontSize: '54px' }}
                        >
                            {String(i + 1).padStart(2, '0')}
                        </span>

                        {/* 类别 */}
                        <h3 className="w-[300px] shrink-0 text-[32px] font-bold text-white leading-none">
                            {c.name}
                        </h3>

                        {/* 引用占比：单独一列对齐 */}
                        <span className="w-[120px] shrink-0 text-[28px] font-bold text-[#4C8DFF] leading-none font-['Montserrat'] tracking-[-0.02em] tabular-nums">
                            {c.share.toFixed(1)}%
                        </span>

                        {/* 说明 */}
                        <p className="flex-1 min-w-0 pr-10 text-[24px] text-white leading-[34px]">
                            {c.desc}
                        </p>

                        {/* 代表平台 */}
                        <div className="w-[720px] shrink-0 pr-8 grid grid-cols-2 gap-x-4 gap-y-2.5 content-center">
                            {c.sites.map((s) => (
                                <SiteChip key={s.name} name={s.name} icon={s.icon} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SlideLayout>
    );
}

Page_MedSource_Overview.hideHeader = true;
