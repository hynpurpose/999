import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/* ============================================================
   数据来源：GEO 监测系统 /api/citations/platforms
   重疾处方药 / 一般处方药 / 非处方药 三组项目，按 AI 平台分别汇总各站点引用次数，
   占比 = 该站点次数 / 该平台在这组项目里的总引用次数
   ============================================================ */

const ICONS = {
    'xiaohe.cn': '/source-icons/xiaohe.cn.ico',
    'iesdouyin.com': '/source-icons/iesdouyin.com.ico',
    'toutiao.com': '/source-icons/toutiao.com.png',
    'qq.com': '/source-icons/qq.com.png',
    'baidu.com': '/source-icons/baidu.com.png',
    'quark.cn': '/source-icons/quark.cn.png',
    'sm.cn': '/source-icons/sm.cn.png',
    'sohu.com': '/source-icons/sohu.com.png',
    '163.com': '/source-icons/163.com.png',
    'china.com': '/source-icons/china.com.ico',
    'gmw.cn': '/source-icons/gmw.cn.png',
    'xinhuanet.com': '/source-icons/xinhuanet.com.png',
    'smzdm.com': '/source-icons/smzdm.com.png',
    'dayi.org.cn': '/source-icons/dayi.org.cn.png',
    'dxy.cn': '/source-icons/dxy.cn.png',
    'bohe.cn': '/source-icons/bohe.cn.png',
    'fh21.com': '/source-icons/fh21.com.png',
    'fh21.com.cn': '/source-icons/fh21.com.png',
    'mfk.com': '/source-icons/mfk.com.png',
    '39yst.com': '/source-icons/39yst.com.png',
    '39.net': '/source-icons/39.net.png',
    '99.com.cn': '/source-icons/99.com.cn.png',
    'youlai.cn': '/source-icons/youlai.cn.png',
    'liangyihui.net': '/source-icons/liangyihui.net.ico',
    'cn-healthcare.com': '/source-icons/cn-healthcare.com.png',
    'pharmcube.com': '/source-icons/pharmcube.com.png',
    'menet.com.cn': '/source-icons/menet.com.cn.png',
    'msdmanuals.cn': '/source-icons/msdmanuals.cn.png',
    'sinomed.ac.cn': '/source-icons/sinomed.ac.cn.png',
    'yiigle.com': '/source-icons/yiigle.com.png',
    'kepuchina.cn': '/source-icons/kepuchina.cn.png',
    'cnpharm.com': '/source-icons/cnpharm.com.ico',
    'springer.com': '/source-icons/springer.com.png',
    'sciencedirect.com': '/source-icons/sciencedirect.com.ico',
    'ascopubs.org': '/source-icons/ascopubs.org.ico',
    'xiameneye.org.cn': '/source-icons/xiameneye.org.cn.ico',
    'shsyf.com': '/source-icons/shsyf.com.ico',
    'nih.gov': '/medical-sources/nih.png',
    'nhsa.gov.cn': '/medical-sources/nhsa.png',
    'nmpa.gov.cn': '/medical-sources/nmpa.png',
    'pingguolv.com': '/medical-sources/pingguolv.png',
    'himd.com': '/medical-sources/himd.png',
    'medlive.cn': '/medical-sources/medlive.png',
    'cndzys.com': '/medical-sources/cndzys.png',
    'xywy.com': '/medical-sources/xywy.png',
    'pharnexcloud.com': '/medical-sources/pharnexcloud.png',
    'alipayobjects.com': '/source-icons/alipayobjects.com.png',
    'render.alipay.com': '/source-icons/render.alipay.com.png',
    'alipay.com': '/source-icons/alipay.com.ico',
    'wanfangdata.com.cn': '/source-icons/wanfangdata.com.cn.png',
    'yxj.org.cn': '/source-icons/yxj.org.cn.ico',
    'mdpi.com': '/source-icons/mdpi.com.jpg',
    'nature.com': '/source-icons/nature.com.png',
    'doi.org': '/source-icons/doi.org.png',
    'jamanetwork.com': '/source-icons/jamanetwork.com.png',
};

// 各平台自家生态站点：排在首位时说明该模型主要吃自己的内容
const OWN_ECOSYSTEM = {
    豆包: ['xiaohe.cn', 'iesdouyin.com', 'toutiao.com'],
    元宝: ['qq.com'],
    通义千问: ['quark.cn', 'sm.cn'],
    DeepSeek: [],
    蚂蚁阿福: ['alipayobjects.com', 'render.alipay.com', 'alipay.com'],
};

const AI_META = [
    { ai: '豆包', logo: '/geo-platforms/doubao.png', color: '#4C8DFF' },
    { ai: '元宝', logo: '/geo-platforms/yuanbao.png', color: '#4C8DFF' },
    { ai: '通义千问', logo: '/geo-platforms/qwen.png', color: '#4C8DFF' },
    { ai: 'DeepSeek', logo: '/geo-platforms/deepseek.png', color: '#4C8DFF' },
    { ai: '蚂蚁阿福', logo: '/geo-platforms/afu.png', color: '#4C8DFF' },
];

/* ── 重疾处方药 ── */
const CRITICAL = {
    豆包: [
        { name: '小荷健康', domain: 'xiaohe.cn', n: 1682, pct: 69.0 },
        { name: 'NIH', domain: 'nih.gov', n: 121, pct: 5.0 },
        { name: '抖音', domain: 'iesdouyin.com', n: 102, pct: 4.2 },
        { name: '国家医疗保障局', domain: 'nhsa.gov.cn', n: 27, pct: 1.1 },
        { name: '今日头条', domain: 'toutiao.com', n: 27, pct: 1.1 },
        { name: '网易', domain: '163.com', n: 17, pct: 0.7 },
        { name: '中国医疗器械网', domain: 'cn-healthcare.com', n: 15, pct: 0.6 },
        { name: 'ASCO Publications', domain: 'ascopubs.org', n: 12, pct: 0.5 },
        { name: 'QQ News', domain: 'qq.com', n: 11, pct: 0.5 },
        { name: '阿斯利康投资（中国）', domain: 'astrazeneca.com.cn', n: 10, pct: 0.4 },
    ],
    元宝: [
        { name: 'QQ News', domain: 'qq.com', n: 367, pct: 19.8 },
        { name: '必需药', domain: 'himd.com', n: 140, pct: 7.5 },
        { name: '中国医药信息查询平台', domain: 'dayi.org.cn', n: 121, pct: 6.5 },
        { name: '医脉通', domain: 'medlive.cn', n: 63, pct: 3.4 },
        { name: '百度知道', domain: 'baidu.com', n: 50, pct: 2.7 },
        { name: '良医汇', domain: 'liangyihui.net', n: 46, pct: 2.5 },
        { name: '药融云 BYDRUG', domain: 'pharmcube.com', n: 44, pct: 2.4 },
        { name: '苹果绿养生网', domain: 'pingguolv.com', n: 42, pct: 2.3 },
        { name: '今日头条', domain: 'toutiao.com', n: 41, pct: 2.2 },
        { name: '摩熵医药', domain: 'pharnexcloud.com', n: 25, pct: 1.3 },
    ],
    通义千问: [
        { name: '夸克', domain: 'quark.cn', n: 883, pct: 60.0 },
        { name: '神马搜索', domain: 'sm.cn', n: 176, pct: 12.0 },
        { name: '搜狐网', domain: 'sohu.com', n: 36, pct: 2.4 },
        { name: '药融云 BYDRUG', domain: 'pharmcube.com', n: 30, pct: 2.0 },
        { name: 'NIH', domain: 'nih.gov', n: 23, pct: 1.6 },
        { name: '百度知道', domain: 'baidu.com', n: 20, pct: 1.4 },
        { name: '光明网', domain: 'gmw.cn', n: 18, pct: 1.2 },
        { name: '中华网', domain: 'china.com', n: 18, pct: 1.2 },
        { name: '摩熵医药', domain: 'pharnexcloud.com', n: 12, pct: 0.8 },
        { name: '广东省人民医院', domain: 'gdghospital.org.cn', n: 11, pct: 0.7 },
    ],
    DeepSeek: [
        { name: 'NIH', domain: 'nih.gov', n: 89, pct: 6.2 },
        { name: 'Springer', domain: 'springer.com', n: 84, pct: 5.9 },
        { name: '丁香园', domain: 'dxy.cn', n: 79, pct: 5.5 },
        { name: '摩熵医药', domain: 'pharnexcloud.com', n: 74, pct: 5.2 },
        { name: '中国医药信息查询平台', domain: 'dayi.org.cn', n: 34, pct: 2.4 },
        { name: '百度学术', domain: 'yiigle.com', n: 32, pct: 2.2 },
        { name: '中国生物医学文献服务系统', domain: 'sinomed.ac.cn', n: 30, pct: 2.1 },
        { name: 'ScienceDirect', domain: 'sciencedirect.com', n: 28, pct: 2.0 },
        { name: '国家药监局', domain: 'nmpa.gov.cn', n: 28, pct: 2.0 },
        { name: '中国医药创新促进会', domain: 'phirda.com', n: 24, pct: 1.7 },
    ],
    蚂蚁阿福: [
        { name: '蚂蚁阿福医学文献库', domain: 'alipayobjects.com', n: 926, pct: 45.8 },
        { name: 'NIH', domain: 'nih.gov', n: 312, pct: 15.4 },
        { name: '支付宝', domain: 'alipay.com', n: 262, pct: 12.9 },
        { name: '医脉通', domain: 'medlive.cn', n: 115, pct: 5.7 },
        { name: 'MDPI', domain: 'mdpi.com', n: 79, pct: 3.9 },
        { name: '万方数据', domain: 'wanfangdata.com.cn', n: 48, pct: 2.4 },
        { name: 'DOI基金会', domain: 'doi.org', n: 46, pct: 2.3 },
        { name: '医学界', domain: 'yxj.org.cn', n: 45, pct: 2.2 },
        { name: 'Springer', domain: 'springer.com', n: 28, pct: 1.4 },
        { name: 'ScienceDirect', domain: 'sciencedirect.com', n: 23, pct: 1.1 },
    ],
};

/* ── 一般处方药 ── */
const RX = {
    豆包: [
        { name: '小荷健康', domain: 'xiaohe.cn', n: 2847, pct: 81.3 },
        { name: '抖音', domain: 'iesdouyin.com', n: 322, pct: 9.2 },
        { name: '今日头条', domain: 'toutiao.com', n: 28, pct: 0.8 },
        { name: 'NIH', domain: 'nih.gov', n: 22, pct: 0.6 },
        { name: '复禾健康', domain: 'fh21.com', n: 17, pct: 0.5 },
        { name: '民福康', domain: 'mfk.com', n: 14, pct: 0.4 },
        { name: '新华网', domain: 'xinhuanet.com', n: 12, pct: 0.3 },
        { name: '博禾医生', domain: 'bohe.cn', n: 11, pct: 0.3 },
        { name: 'Sinqi', domain: 'sinqi.com', n: 11, pct: 0.3 },
        { name: '上海市第一妇婴保健院', domain: 'shsyf.com', n: 10, pct: 0.3 },
    ],
    元宝: [
        { name: 'QQ News', domain: 'qq.com', n: 436, pct: 18.9 },
        { name: '中国医药信息查询平台', domain: 'dayi.org.cn', n: 170, pct: 7.4 },
        { name: '民福康健康', domain: '39yst.com', n: 160, pct: 6.9 },
        { name: '博禾医生', domain: 'bohe.cn', n: 147, pct: 6.4 },
        { name: '复禾健康', domain: 'fh21.com.cn', n: 113, pct: 4.9 },
        { name: '百度知道', domain: 'baidu.com', n: 103, pct: 4.5 },
        { name: '99健康网', domain: '99.com.cn', n: 56, pct: 2.4 },
        { name: '民福康', domain: 'mfk.com', n: 53, pct: 2.3 },
        { name: '大众养生网', domain: 'cndzys.com', n: 51, pct: 2.2 },
        { name: '39健康网', domain: '39.net', n: 49, pct: 2.1 },
    ],
    通义千问: [
        { name: '夸克', domain: 'quark.cn', n: 561, pct: 40.0 },
        { name: '神马搜索', domain: 'sm.cn', n: 268, pct: 19.1 },
        { name: '搜狐网', domain: 'sohu.com', n: 48, pct: 3.4 },
        { name: '复禾健康', domain: 'fh21.com', n: 39, pct: 2.8 },
        { name: '寻医问药', domain: 'xywy.com', n: 27, pct: 1.9 },
        { name: '中华网', domain: 'china.com', n: 21, pct: 1.5 },
        { name: '河南省儿童医院', domain: 'zzsetyy.cn', n: 18, pct: 1.3 },
        { name: '今日头条', domain: 'toutiao.com', n: 17, pct: 1.2 },
        { name: '百度知道', domain: 'baidu.com', n: 16, pct: 1.1 },
        { name: '网易', domain: '163.com', n: 15, pct: 1.1 },
    ],
    DeepSeek: [
        { name: '中国医药信息查询平台', domain: 'dayi.org.cn', n: 353, pct: 23.0 },
        { name: '丁香园', domain: 'dxy.cn', n: 77, pct: 5.0 },
        { name: '厦门大学附属厦门眼科中心', domain: 'xiameneye.org.cn', n: 64, pct: 4.2 },
        { name: '默沙东诊疗手册', domain: 'msdmanuals.cn', n: 52, pct: 3.4 },
        { name: '摩熵医药', domain: 'pharnexcloud.com', n: 46, pct: 3.0 },
        { name: '中国生物医学文献服务系统', domain: 'sinomed.ac.cn', n: 32, pct: 2.1 },
        { name: 'Sinqi', domain: 'sinqi.com', n: 30, pct: 2.0 },
        { name: '中国食品药品网', domain: 'cnpharm.com', n: 28, pct: 1.8 },
        { name: '生命时报', domain: 'lifetimes.cn', n: 25, pct: 1.6 },
        { name: '百度学术', domain: 'yiigle.com', n: 21, pct: 1.4 },
    ],
    蚂蚁阿福: [
        { name: '蚂蚁阿福医学文献库', domain: 'alipayobjects.com', n: 638, pct: 36.6 },
        { name: 'NIH', domain: 'nih.gov', n: 374, pct: 21.4 },
        { name: '支付宝', domain: 'alipay.com', n: 148, pct: 8.5 },
        { name: '阿福智库', domain: 'render.alipay.com', n: 120, pct: 6.9 },
        { name: 'Springer', domain: 'springer.com', n: 90, pct: 5.2 },
        { name: '医学界', domain: 'yxj.org.cn', n: 43, pct: 2.5 },
        { name: 'ScienceDirect', domain: 'sciencedirect.com', n: 41, pct: 2.3 },
        { name: 'Nature', domain: 'nature.com', n: 39, pct: 2.2 },
        { name: '医脉通', domain: 'medlive.cn', n: 36, pct: 2.1 },
        { name: 'JAMA Network', domain: 'jamanetwork.com', n: 31, pct: 1.8 },
    ],
};

/* ── 非处方药 ── */
const OTC = {
    豆包: [
        { name: '小荷健康', domain: 'xiaohe.cn', n: 4279, pct: 96.7 },
        { name: '抖音', domain: 'iesdouyin.com', n: 86, pct: 1.9 },
        { name: '今日头条', domain: 'toutiao.com', n: 8, pct: 0.2 },
        { name: '丁香园', domain: 'dxy.cn', n: 5, pct: 0.1 },
        { name: '十大品牌网 CNPP', domain: 'cnpp.cn', n: 4, pct: 0.1 },
        { name: '淘宝网', domain: 'taobao.com', n: 3, pct: 0.1 },
        { name: '科普中国', domain: 'kepuchina.cn', n: 2, pct: 0.0 },
        { name: '咸宁新闻网', domain: 'xnnews.com.cn', n: 2, pct: 0.0 },
        { name: '百度学术', domain: 'yiigle.com', n: 2, pct: 0.0 },
        { name: '米内网', domain: 'menet.com.cn', n: 2, pct: 0.0 },
    ],
    元宝: [
        { name: 'QQ News', domain: 'qq.com', n: 366, pct: 16.6 },
        { name: '中国医药信息查询平台', domain: 'dayi.org.cn', n: 262, pct: 11.9 },
        { name: '民福康健康', domain: '39yst.com', n: 232, pct: 10.5 },
        { name: '博禾医生', domain: 'bohe.cn', n: 171, pct: 7.7 },
        { name: '百度知道', domain: 'baidu.com', n: 153, pct: 6.9 },
        { name: '苹果绿养生网', domain: 'pingguolv.com', n: 72, pct: 3.3 },
        { name: '复禾健康', domain: 'fh21.com.cn', n: 62, pct: 2.8 },
        { name: '39健康网', domain: '39.net', n: 56, pct: 2.5 },
        { name: '民福康', domain: 'mfk.com', n: 55, pct: 2.5 },
        { name: '复禾健康', domain: 'fh21.com', n: 46, pct: 2.1 },
    ],
    通义千问: [
        { name: '夸克', domain: 'quark.cn', n: 680, pct: 47.0 },
        { name: '神马搜索', domain: 'sm.cn', n: 350, pct: 24.2 },
        { name: '搜狐网', domain: 'sohu.com', n: 55, pct: 3.8 },
        { name: '今日头条', domain: 'toutiao.com', n: 27, pct: 1.9 },
        { name: '百度知道', domain: 'baidu.com', n: 23, pct: 1.6 },
        { name: '复禾健康', domain: 'fh21.com', n: 23, pct: 1.6 },
        { name: '39健康网', domain: '39.net', n: 18, pct: 1.2 },
        { name: '什么值得买', domain: 'smzdm.com', n: 16, pct: 1.1 },
        { name: 'NIH', domain: 'nih.gov', n: 12, pct: 0.8 },
        { name: '中国医药信息查询平台', domain: 'dayi.org.cn', n: 12, pct: 0.8 },
    ],
    DeepSeek: [
        { name: '中国医药信息查询平台', domain: 'dayi.org.cn', n: 435, pct: 30.1 },
        { name: '米内网', domain: 'menet.com.cn', n: 62, pct: 4.3 },
        { name: '丁香园', domain: 'dxy.cn', n: 35, pct: 2.4 },
        { name: '医药卫生报', domain: 'yywsb.com', n: 35, pct: 2.4 },
        { name: '生命时报', domain: 'lifetimes.cn', n: 35, pct: 2.4 },
        { name: '科普中国', domain: 'kepuchina.cn', n: 25, pct: 1.7 },
        { name: '国家药监局', domain: 'nmpa.gov.cn', n: 23, pct: 1.6 },
        { name: '默沙东诊疗手册', domain: 'msdmanuals.cn', n: 21, pct: 1.5 },
        { name: '人民网健康', domain: 'people.com.cn', n: 19, pct: 1.3 },
        { name: '大众健康报', domain: 'dzjkb.org.cn', n: 18, pct: 1.2 },
    ],
    蚂蚁阿福: [
        { name: '蚂蚁阿福医学文献库', domain: 'alipayobjects.com', n: 582, pct: 35.3 },
        { name: 'NIH', domain: 'nih.gov', n: 247, pct: 15.0 },
        { name: '阿福智库', domain: 'render.alipay.com', n: 171, pct: 10.4 },
        { name: '支付宝', domain: 'alipay.com', n: 117, pct: 7.1 },
        { name: '医脉通', domain: 'medlive.cn', n: 104, pct: 6.3 },
        { name: '百度学术', domain: 'yiigle.com', n: 71, pct: 4.3 },
        { name: '万方数据', domain: 'wanfangdata.com.cn', n: 65, pct: 3.9 },
        { name: '医学界', domain: 'yxj.org.cn', n: 58, pct: 3.5 },
        { name: 'ScienceDirect', domain: 'sciencedirect.com', n: 44, pct: 2.7 },
        { name: 'Springer', domain: 'springer.com', n: 31, pct: 1.9 },
    ],
};

/* ── 通用小组件 ── */

function AiLogo({ src, alt }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <span className="w-[34px] h-[34px] shrink-0 rounded-full border border-dashed border-white/25 bg-white/5 flex items-center justify-center text-[13px] font-bold text-white/70">
                {alt.slice(0, 1)}
            </span>
        );
    }
    return (
        <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="w-[34px] h-[34px] shrink-0 rounded-full object-contain"
        />
    );
}

function SourceIcon({ name, domain }) {
    const [failed, setFailed] = useState(false);
    const icon = ICONS[domain];

    if (!icon || failed) {
        return (
            <span className="w-[24px] h-[24px] shrink-0 rounded-[6px] bg-white/10 flex items-center justify-center text-[13px] text-white/70 leading-none">
                {name.slice(0, 1)}
            </span>
        );
    }
    return (
        <span className="w-[24px] h-[24px] shrink-0 rounded-[6px] bg-white overflow-hidden flex items-center justify-center">
            <img src={icon} alt="" onError={() => setFailed(true)} className="w-full h-full object-contain" />
        </span>
    );
}

function PlatformColumn({ meta, rows }) {
    const max = rows[0].pct || 1;
    const own = OWN_ECOSYSTEM[meta.ai] || [];

    return (
        <div className="flex-1 min-w-0 h-full rounded-[22px] border border-white/[0.08] bg-[#0B0D19]/45 px-3.5 py-4 flex flex-col relative overflow-hidden">
            <span
                className="absolute left-0 top-0 w-full h-[3px]"
                style={{ background: `linear-gradient(to right, ${meta.color}, transparent)` }}
            />

            {/* 列头 */}
            <div className="shrink-0 flex items-center gap-2.5 pb-3 border-b border-white/[0.08]">
                <AiLogo src={meta.logo} alt={meta.ai} />
                <span className="text-[21px] font-bold text-white leading-none whitespace-nowrap">
                    {meta.ai}
                </span>
                <span className="flex-1" />
                <span className="text-[13px] font-bold text-white/40 leading-none font-['Montserrat']">
                    TOP 10
                </span>
            </div>

            {/* Top 10 行 */}
            <div className="flex-1 min-h-0 mt-2 flex flex-col gap-[4px]">
                {rows.map((r, i) => {
                    const w = Math.max((r.pct / max) * 100, 1.5);
                    const isOwn = own.includes(r.domain);
                    return (
                        <div
                            key={`${r.domain}-${i}`}
                            className="flex-1 min-h-0 relative flex items-center gap-2 px-1.5 rounded-[9px] overflow-hidden"
                        >
                            {/* 占比底纹 */}
                            <span
                                className="absolute left-0 top-0 h-full rounded-[9px]"
                                style={{
                                    width: `${w}%`,
                                    backgroundColor: isOwn ? 'rgba(0,76,229,0.42)' : 'rgba(255,255,255,0.07)',
                                }}
                            />

                            <span
                                className={`relative w-[18px] shrink-0 text-[15px] font-bold font-['Montserrat'] leading-none text-right ${
                                    i === 0 ? 'text-white' : 'text-white/45'
                                }`}
                            >
                                {i + 1}
                            </span>

                            <span className="relative">
                                <SourceIcon name={r.name} domain={r.domain} />
                            </span>

                            <span className="relative flex-1 min-w-0 flex flex-col gap-[3px]">
                                <span className="text-[16px] text-white leading-none truncate">{r.name}</span>
                                <span className="text-[12px] text-white/45 leading-none truncate font-['Montserrat']">
                                    {r.domain}
                                </span>
                            </span>

                            <span className="relative shrink-0 text-[16px] font-bold text-white leading-none font-['Montserrat']">
                                {r.pct.toFixed(1)}%
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function ByPlatformLayout({ title, subtitle, data, note }) {
    return (
        <SlideLayout title={title} subtitle={subtitle}>
            <div className="w-full h-full flex flex-col gap-3 animate-fadeIn font-['MiSans'] pt-1">
                <div className="flex-1 min-h-0 flex gap-3">
                    {AI_META.map((meta) => (
                        <PlatformColumn key={meta.ai} meta={meta} rows={data[meta.ai]} />
                    ))}
                </div>

                <p className="shrink-0 text-[16px] text-white/50 leading-[24px]">{note}</p>
            </div>
        </SlideLayout>
    );
}

/* ============================================================
   页面一：重疾处方药
   ============================================================ */
export default function Page_RxOtc_Platform_Critical() {
    return (
        <ByPlatformLayout
            title="处方药（重疾）：引用源对比"
            subtitle="豆包、元宝、通义千问、蚂蚁阿福都先吃自家生态，只有 DeepSeek 全是第三方信源"
            data={CRITICAL}
            note="* 蓝色底纹为该模型自家生态站点（小荷健康 / 抖音 / 今日头条属字节，QQ News 属腾讯，夸克 / 神马属阿里，阿福医学文献库 / 阿福智库 / 支付宝属蚂蚁）"
        />
    );
}

Page_RxOtc_Platform_Critical.hideHeader = true;

/* ============================================================
   页面二：一般处方药
   ============================================================ */
export function Page_RxOtc_Platform_Rx() {
    return (
        <ByPlatformLayout
            title="处方药（一般）：引用源对比"
            subtitle="豆包超八成引用来自小荷健康，蚂蚁阿福过半来自自家文献库"
            data={RX}
            note="* 蓝色底纹为该模型自家生态站点。蚂蚁阿福榜内除自家站点外全部是 NIH、Springer、Nature、JAMA 等学术信源"
        />
    );
}

Page_RxOtc_Platform_Rx.hideHeader = true;

/* ============================================================
   页面三：非处方药
   ============================================================ */
export function Page_RxOtc_Platform_Otc() {
    return (
        <ByPlatformLayout
            title="非处方药：引用源对比"
            subtitle="豆包 96.7% 只来自小荷健康，元宝最分散，蚂蚁阿福照样只给学术文献"
            data={OTC}
            note="* 蓝色底纹为该模型自家生态站点。元宝榜内复禾健康有 fh21.com.cn 与 fh21.com 两个域名，按原始数据分列"
        />
    );
}

Page_RxOtc_Platform_Otc.hideHeader = true;
