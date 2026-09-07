import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
   数据来源：GEO 监测系统 /api/citations/platforms
   重疾处方药 / 一般处方药 / 非处方药 三组项目，按引用次数合并后重新计算占比
   口径：豆包 + 元宝 + 通义千问 + DeepSeek + 蚂蚁阿福 五个 AI 平台
   ============================================================ */

// 三类药品的主题色：越大众的药，蓝色越饱和
const CAT_COLORS = {
    critical: 'rgba(255,255,255,0.92)',
    rx: '#5B8CFF',
    otc: '#004CE5',
};

// 三类药品 Top 10 引用源（全部 AI 平台，含蚂蚁阿福）
const TOP10 = [
    {
        cat: '处方药（重疾）',
        color: CAT_COLORS.critical,
        rows: [
            { name: '小荷健康', pct: 18.3, icon: '/medical-platforms/xiaohe-health.png' },
            { name: '蚂蚁阿福医学文献库', pct: 10.0, icon: '/source-icons/alipayobjects.com.png' },
            { name: '夸克', pct: 9.6, icon: '/medical-platforms/quark-health.png' },
            { name: 'NIH', pct: 6.0, icon: '/medical-sources/nih.png' },
            { name: 'QQ News', pct: 4.1, icon: '/source-icons/qq.com.png' },
            { name: '支付宝', pct: 2.8, icon: '/source-icons/alipay.com.ico', unique: true },
            { name: '医脉通', pct: 2.1, icon: '/medical-sources/medlive.png', unique: true },
            { name: '神马搜索', pct: 1.9, icon: '/source-icons/sm.cn.png' },
            { name: '中国医药信息查询平台', pct: 1.8, icon: '/medical-sources/dayi.png' },
            { name: '必需药', pct: 1.6, icon: '/medical-sources/himd.png', unique: true },
        ],
    },
    {
        cat: '处方药（一般）',
        color: CAT_COLORS.rx,
        rows: [
            { name: '小荷健康', pct: 27.2, icon: '/medical-platforms/xiaohe-health.png' },
            { name: '蚂蚁阿福医学文献库', pct: 6.1, icon: '/source-icons/alipayobjects.com.png' },
            { name: '夸克', pct: 5.4, icon: '/medical-platforms/quark-health.png' },
            { name: '中国医药信息查询平台', pct: 5.2, icon: '/medical-sources/dayi.png' },
            { name: 'QQ News', pct: 4.2, icon: '/source-icons/qq.com.png' },
            { name: 'NIH', pct: 4.1, icon: '/medical-sources/nih.png' },
            { name: '抖音', pct: 3.1, icon: '/favicons/douyin.svg', unique: true },
            { name: '神马搜索', pct: 2.6, icon: '/source-icons/sm.cn.png' },
            { name: '博禾医生', pct: 1.5, icon: '/medical-sources/bohe.png' },
            { name: '民福康健康', pct: 1.5, icon: '/medical-sources/mfk.png' },
        ],
    },
    {
        cat: '非处方药',
        color: CAT_COLORS.otc,
        rows: [
            { name: '小荷健康', pct: 38.4, icon: '/medical-platforms/xiaohe-health.png' },
            { name: '中国医药信息查询平台', pct: 6.3, icon: '/medical-sources/dayi.png' },
            { name: '夸克', pct: 6.1, icon: '/medical-platforms/quark-health.png' },
            { name: '蚂蚁阿福医学文献库', pct: 5.2, icon: '/source-icons/alipayobjects.com.png' },
            { name: 'QQ News', pct: 3.3, icon: '/source-icons/qq.com.png' },
            { name: '神马搜索', pct: 3.1, icon: '/source-icons/sm.cn.png' },
            { name: 'NIH', pct: 2.4, icon: '/medical-sources/nih.png' },
            { name: '民福康健康', pct: 2.1, icon: '/medical-sources/mfk.png' },
            { name: '博禾医生', pct: 1.6, icon: '/medical-sources/bohe.png' },
            { name: '百度知道', pct: 1.6, icon: '/medical-sources/baidu-zhidao.png', unique: true },
        ],
    },
];

/* ── 通用小组件 ── */

function SourceIcon({ name, icon, size = 30 }) {
    const [failed, setFailed] = useState(false);
    const box = { width: `${size}px`, height: `${size}px` };

    if (failed || !icon) {
        return (
            <span
                className="shrink-0 rounded-[7px] bg-white/10 text-white flex items-center justify-center font-bold"
                style={{ ...box, fontSize: `${size * 0.5}px` }}
            >
                {name.slice(0, 1)}
            </span>
        );
    }
    return (
        <span className="shrink-0 rounded-[7px] bg-white overflow-hidden flex items-center justify-center" style={box}>
            <img src={icon} alt="" onError={() => setFailed(true)} className="w-full h-full object-contain" />
        </span>
    );
}

function CardTitle({ index, title }) {
    return (
        <div className="shrink-0 flex items-center gap-4">
            <span className="text-[20px] font-bold text-[#004CE5] tracking-[0.2em] font-['Montserrat'] leading-none">
                {index}
            </span>
            <h3 className="text-[30px] font-bold text-white leading-[38px] whitespace-nowrap">{title}</h3>
            <span className="flex-1 h-px bg-white/[0.08]" />
        </div>
    );
}

function SourceCard({ name, desc, icon }) {
    return (
        <div className="min-h-0 px-4 rounded-[14px] border border-[#004CE5]/30 bg-[#004CE5]/[0.08] flex items-center gap-3">
            <SourceIcon name={name} icon={icon} size={34} />
            <span className="flex-1 min-w-0 flex flex-col justify-center gap-[6px]">
                <span className="text-[20px] font-bold text-white leading-none whitespace-nowrap truncate">
                    {name}
                </span>
                <span className="text-[16px] text-white leading-none whitespace-nowrap truncate">
                    {desc}
                </span>
            </span>
        </div>
    );
}

/* ============================================================
   页面一：三类药品 Top 10 引用源总览
   ============================================================ */
export default function Page_RxOtc_Overview() {
    return (
        <SlideLayout
            title="处方药与非处方药的引用源对比"
            subtitle="全部 AI 平台合并口径（含蚂蚁阿福），三类药品被引用最多的 Top 10 信源"
        >
            <div className="w-full h-full flex flex-col gap-4 animate-fadeIn font-['MiSans'] pt-2">
                <div className="flex-1 min-h-0 flex gap-6">
                    {TOP10.map((col) => (
                        <div
                            key={col.cat}
                            className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-6 py-5 flex flex-col relative overflow-hidden"
                        >
                            <span
                                className="absolute left-0 top-0 w-full h-[3px]"
                                style={{
                                    background: `linear-gradient(to right, ${col.color}, transparent)`,
                                }}
                            />

                            {/* 列头 */}
                            <div className="shrink-0 flex items-center gap-3 pb-4 border-b border-white/[0.08]">
                                <span
                                    className="w-[14px] h-[14px] rounded-[4px] shrink-0"
                                    style={{ backgroundColor: col.color }}
                                />
                                <span className="text-[27px] font-bold text-white leading-none whitespace-nowrap">
                                    {col.cat}
                                </span>
                            </div>

                            {/* Top10 行 */}
                            <div className="flex-1 min-h-0 mt-3 flex flex-col gap-[6px]">
                                {col.rows.map((r, i) => {
                                    const w = Math.max((r.pct / col.rows[0].pct) * 100, 2);
                                    return (
                                        <div key={r.name} className="flex-1 min-h-0 flex items-center gap-3">
                                            <span
                                                className={`w-[26px] shrink-0 text-[18px] font-bold font-['Montserrat'] leading-none text-right ${i === 0 ? 'text-[#004CE5]' : 'text-white/40'}`}
                                            >
                                                {i + 1}
                                            </span>
                                            <SourceIcon name={r.name} icon={r.icon} size={28} />
                                            <span className="w-[204px] shrink-0 flex items-center gap-2 min-w-0">
                                                <span className="text-[19px] text-white leading-none truncate">
                                                    {r.name}
                                                </span>
                                                {r.unique && (
                                                    <span className="shrink-0 h-[24px] px-[8px] rounded-[6px] bg-[#004CE5] text-white text-[15px] font-bold leading-[24px] shadow-[0_0_12px_rgba(0,76,229,0.55)] ring-1 ring-white/30">
                                                        独有
                                                    </span>
                                                )}
                                            </span>
                                            <div className="flex-1 min-w-0 h-[11px] rounded-full bg-white/[0.06] overflow-hidden">
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{ width: `${w}%`, backgroundColor: col.color }}
                                                />
                                            </div>
                                            <span className="w-[62px] shrink-0 text-[18px] font-bold text-white font-['Montserrat'] leading-none text-right">
                                                {r.pct.toFixed(1)}%
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}

Page_RxOtc_Overview.hideHeader = true;

/* ============================================================
   页面二：两个核心差异
   ============================================================ */

// 差异一：重疾处方药更常出现的专业 / 权威向平台（含 Top 10 独有 + Top 30 学术信源）
const CRITICAL_UNIQUE = [
    { name: 'NIH', desc: '美国国立卫生研究院', icon: '/medical-sources/nih.png' },
    { name: '必需药', desc: '海外新特药信息平台', icon: '/medical-sources/himd.png' },
    { name: '摩熵医药', desc: '医药产业数据库', icon: '/medical-sources/pharnexcloud.png' },
    { name: '丁香园', desc: '专业医学社区', icon: '/medical-sources/dxy-doctor.png' },
    { name: '医脉通', desc: '临床知识平台', icon: '/medical-sources/medlive.png' },
    { name: 'Springer', desc: '国际学术出版', icon: '/medical-sources/springer.png' },
    { name: 'ScienceDirect', desc: '爱思唯尔文献库', icon: '/source-icons/sciencedirect.com.ico' },
    { name: '万方数据', desc: '中文学术文献库', icon: '/medical-sources/wanfang.png' },
];

/* 差异二：非处方药更常引用的大众媒体，以及只在 OTC 榜里出现的种草 / 电商信源 */
const OTC_ONLY = [
    { name: '今日头条', desc: '资讯推荐平台', icon: '/source-icons/toutiao.com.png' },
    { name: '搜狐网', desc: '门户资讯媒体', icon: '/source-icons/sohu.com.png' },
    { name: '网易', desc: '网易新闻门户', icon: '/source-icons/163.com.png' },
    { name: '中华网', desc: '综合资讯门户', icon: '/source-icons/china.com.ico' },
    { name: '医药卫生报', desc: '大众健康媒体', icon: '/source-icons/yywsb.com.png' },
    { name: '科普中国', desc: '大众科普平台', icon: '/source-icons/kepuchina.cn.png' },
    { name: '什么值得买', desc: '消费种草社区', icon: '/source-icons/smzdm.com.png' },
    { name: '淘宝网', desc: '电商商品页', icon: '/source-icons/taobao.com.png' },
];

export function Page_RxOtc_Diff() {
    return (
        <SlideLayout
            title="两个核心差异"
            subtitle="处方药（重疾）更看重专业权威平台，非处方药也会参考大众媒体"
        >
            <div className="w-full h-full flex gap-7 animate-fadeIn font-['MiSans'] pt-2">
                {/* ① 重疾处方药更看重专业、权威平台 */}
                <div className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 py-7 flex flex-col">
                    <CardTitle index="01" title="处方药（重疾）更看重专业、权威平台" />

                    <p className="shrink-0 mt-5 text-[22px] text-white leading-[32px]">
                        <span className="block whitespace-nowrap">
                            对比三类药品的引用榜，<span className="font-bold text-[#004CE5]">只在处方药（重疾）里集中出现的信源</span>，
                        </span>
                        <span className="block whitespace-nowrap">全部是专业、权威向平台：</span>
                    </p>

                    <div className="flex-1 min-h-0 mt-4 grid grid-cols-2 grid-rows-4 gap-3">
                        {CRITICAL_UNIQUE.map((s) => (
                            <SourceCard key={s.name} {...s} />
                        ))}
                    </div>

                    <p className="shrink-0 mt-4 text-[16px] text-white leading-[24px] whitespace-nowrap">
                        * 放宽到 Top 30，这类学术信源仍然只在处方药（重疾）里集中出现
                    </p>
                </div>

                {/* ② 非处方药也会参考大众媒体 */}
                <div className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 py-7 flex flex-col">
                    <CardTitle index="02" title="非处方药也会参考大众媒体" />

                    <p className="shrink-0 mt-5 text-[22px] text-white leading-[32px]">
                        <span className="block whitespace-nowrap">
                            对比三类药品，<span className="font-bold text-[#4C8DFF]">非处方药更常引用今日头条、搜狐网这类大众媒体</span>，
                        </span>
                        <span className="block whitespace-nowrap">也会出现种草和电商内容：</span>
                    </p>

                    <div className="flex-1 min-h-0 mt-4 grid grid-cols-2 grid-rows-4 gap-3">
                        {OTC_ONLY.map((s) => (
                            <SourceCard key={s.name} {...s} />
                        ))}
                    </div>

                    <p className="shrink-0 mt-4 text-[16px] text-white leading-[24px] whitespace-nowrap">
                        * 什么值得买、淘宝网等种草电商信源，在处方药榜单里没有出现
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_RxOtc_Diff.hideHeader = true;
