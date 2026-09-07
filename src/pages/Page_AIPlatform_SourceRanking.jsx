import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const ICONS = {
    'xiaohe.cn': '/source-icons/xiaohe.cn.png',
    'iesdouyin.com': '/source-icons/iesdouyin.com.ico',
    'toutiao.com': '/source-icons/toutiao.com.png',
    'qq.com': '/source-icons/qq.com.png',
    'baidu.com': '/source-icons/baidu.com.png',
    'quark.cn': '/source-icons/quark.cn.png',
    'sm.cn': '/source-icons/sm.cn.png',
    'sohu.com': '/source-icons/sohu.com.png',
    '163.com': '/source-icons/163.com.png',
    'ifeng.com': '/source-icons/ifeng.com.png',
    'china.com': '/source-icons/china.com.ico',
    'gmw.cn': '/source-icons/gmw.cn.png',
    'xinhuanet.com': '/source-icons/xinhuanet.com.png',
    'smzdm.com': '/source-icons/smzdm.com.png',
    'docin.com': '/source-icons/docin.com.png',
    'dayi.org.cn': '/source-icons/dayi.org.cn.png',
    'dxy.cn': '/source-icons/dxy.cn.png',
    'bohe.cn': '/source-icons/bohe.cn.png',
    'fh21.com': '/source-icons/fh21.com.png',
    'fh21.com.cn': '/source-icons/fh21.com.png',
    'mfk.com': '/source-icons/mfk.com.png',
    '39yst.com': '/source-icons/39yst.com.png',
    '39.net': '/source-icons/39.net.png',
    '99.com.cn': '/source-icons/99.com.cn.png',
    '120ask.com': '/source-icons/120ask.com.png',
    'youlai.cn': '/source-icons/youlai.cn.png',
    'chunyuyisheng.com': '/source-icons/chunyuyisheng.com.png',
    'liangyihui.net': '/source-icons/liangyihui.net.ico',
    'cn-healthcare.com': '/source-icons/cn-healthcare.com.png',
    'pharmcube.com': '/source-icons/pharmcube.com.png',
    'menet.com.cn': '/source-icons/menet.com.cn.png',
    'msdmanuals.cn': '/source-icons/msdmanuals.cn.png',
    'sinomed.ac.cn': '/source-icons/sinomed.ac.cn.png',
    'cnki.net': '/source-icons/cnki.net.png',
    'wanfangdata.com.cn': '/source-icons/wanfangdata.com.cn.png',
    'yiigle.com': '/source-icons/yiigle.com.png',
    'kepuchina.cn': '/source-icons/kepuchina.cn.png',
    'cnpharm.com': '/source-icons/cnpharm.com.ico',
    'springer.com': '/source-icons/springer.com.png',
    'sciencedirect.com': '/source-icons/sciencedirect.com.ico',
    'ascopubs.org': '/source-icons/ascopubs.org.ico',
    'dovepress.com': '/source-icons/dovepress.com.png',
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
    'yxj.org.cn': '/source-icons/yxj.org.cn.ico',
    'sjuku.top': '/source-icons/sjuku.top.png',
    'hnysfww.com': '/source-icons/hnysfww.com.png',
    'mdpi.com': '/source-icons/mdpi.com.jpg',
    'nature.com': '/source-icons/nature.com.png',
    'medlineplus.gov': '/source-icons/medlineplus.gov.png',
    'doi.org': '/source-icons/doi.org.png',
    'chictr.org.cn': '/source-icons/chictr.org.cn.png',
    'uptodate.com': '/source-icons/uptodate.com.png',
    'zhangqiaokeyan.com': '/source-icons/zhangqiaokeyan.com.ico',
    'ovid.com': '/source-icons/ovid.com.png',
    'www.nhs.uk': '/source-icons/nhs.uk.png',
    'nhs.uk': '/source-icons/nhs.uk.png',
    'sinqi.com': '/source-icons/sinqi.com.png',
    'lifetimes.cn': '/source-icons/lifetimes.cn.svg',
    'yywsb.com': '/source-icons/yywsb.com.png',
    'zzsetyy.cn': '/source-icons/zzsetyy.cn.svg',
};

const PLATFORMS = [
    {
        ai: '豆包',
        aiLogo: '/geo-platforms/doubao.png',
        sources: [
            { name: '小荷健康', domain: 'xiaohe.cn', pct: 85.0 },
            { name: '抖音', domain: 'iesdouyin.com', pct: 4.9 },
            { name: 'NIH', domain: 'nih.gov', pct: 1.4 },
            { name: '今日头条', domain: 'toutiao.com', pct: 0.6 },
            { name: '国家医疗保障局', domain: 'nhsa.gov.cn', pct: 0.3 },
            { name: '复禾健康', domain: 'fh21.com', pct: 0.2 },
            { name: '新华网', domain: 'xinhuanet.com', pct: 0.2 },
            { name: '丁香园', domain: 'dxy.cn', pct: 0.2 },
            { name: '网易', domain: '163.com', pct: 0.2 },
            { name: '民福康', domain: 'mfk.com', pct: 0.2 },
            { name: '博禾医生', domain: 'bohe.cn', pct: 0.2 },
            { name: 'QQ News', domain: 'qq.com', pct: 0.2 },
            { name: '搜狐网', domain: 'sohu.com', pct: 0.1 },
            { name: '中国医疗器械网', domain: 'cn-healthcare.com', pct: 0.1 },
            { name: '百度学术', domain: 'yiigle.com', pct: 0.1 },
            { name: '中国医药信息查询平台', domain: 'dayi.org.cn', pct: 0.1 },
            { name: '豆丁网', domain: 'docin.com', pct: 0.1 },
            { name: 'ASCO Publications', domain: 'ascopubs.org', pct: 0.1 },
            { name: 'Sinqi', domain: 'sinqi.com', pct: 0.1 },
            { name: 'shsyf.com', domain: 'shsyf.com', pct: 0.1 },
        ],
    },
    {
        ai: 'DeepSeek',
        aiLogo: '/geo-platforms/deepseek.png',
        sources: [
            { name: '中国医药信息查询平台', domain: 'dayi.org.cn', pct: 18.7 },
            { name: '丁香园', domain: 'dxy.cn', pct: 4.3 },
            { name: '摩熵医药', domain: 'pharnexcloud.com', pct: 3.0 },
            { name: 'NIH', domain: 'nih.gov', pct: 2.5 },
            { name: 'Springer', domain: 'springer.com', pct: 2.0 },
            { name: '默沙东诊疗手册', domain: 'msdmanuals.cn', pct: 1.9 },
            { name: '中国生物医学文献服务系统', domain: 'sinomed.ac.cn', pct: 1.6 },
            { name: '生命时报', domain: 'lifetimes.cn', pct: 1.5 },
            { name: '厦门眼科中心', domain: 'xiameneye.org.cn', pct: 1.5 },
            { name: '国家药监局', domain: 'nmpa.gov.cn', pct: 1.5 },
            { name: '米内网', domain: 'menet.com.cn', pct: 1.4 },
            { name: '医药卫生报', domain: 'yywsb.com', pct: 1.3 },
            { name: '中国食品药品网', domain: 'cnpharm.com', pct: 1.3 },
            { name: '百度学术', domain: 'yiigle.com', pct: 1.2 },
            { name: 'CNKI', domain: 'cnki.net', pct: 1.2 },
            { name: '科普中国', domain: 'kepuchina.cn', pct: 1.0 },
            { name: '万方数据', domain: 'wanfangdata.com.cn', pct: 1.0 },
            { name: '光明网', domain: 'gmw.cn', pct: 0.7 },
            { name: 'ScienceDirect', domain: 'sciencedirect.com', pct: 0.7 },
            { name: 'Sinqi', domain: 'sinqi.com', pct: 0.7 },
        ],
    },
    {
        ai: '通义千问',
        aiLogo: '/geo-platforms/qwen.png',
        sources: [
            { name: '夸克', domain: 'quark.cn', pct: 49.2 },
            { name: '神马搜索', domain: 'sm.cn', pct: 18.4 },
            { name: '搜狐网', domain: 'sohu.com', pct: 3.2 },
            { name: '复禾健康', domain: 'fh21.com', pct: 1.5 },
            { name: '百度知道', domain: 'baidu.com', pct: 1.4 },
            { name: '今日头条', domain: 'toutiao.com', pct: 1.2 },
            { name: 'NIH', domain: 'nih.gov', pct: 1.1 },
            { name: '药融云 BYDRUG', domain: 'pharmcube.com', pct: 1.0 },
            { name: '中华网', domain: 'china.com', pct: 1.0 },
            { name: '光明网', domain: 'gmw.cn', pct: 0.9 },
            { name: '39健康网', domain: '39.net', pct: 0.7 },
            { name: '寻医问药', domain: 'xywy.com', pct: 0.7 },
            { name: '网易', domain: '163.com', pct: 0.6 },
            { name: '摩熵医药', domain: 'pharnexcloud.com', pct: 0.6 },
            { name: '中国医药信息查询平台', domain: 'dayi.org.cn', pct: 0.6 },
            { name: '什么值得买', domain: 'smzdm.com', pct: 0.6 },
            { name: '凤凰网', domain: 'ifeng.com', pct: 0.5 },
            { name: '河南省儿童医院', domain: 'zzsetyy.cn', pct: 0.4 },
            { name: '春雨医生', domain: 'chunyuyisheng.com', pct: 0.4 },
            { name: '小荷健康', domain: 'xiaohe.cn', pct: 0.4 },
        ],
    },
    {
        ai: '元宝',
        aiLogo: '/geo-platforms/yuanbao.png',
        sources: [
            { name: 'QQ News', domain: 'qq.com', pct: 18.3 },
            { name: '中国医药信息查询平台', domain: 'dayi.org.cn', pct: 8.7 },
            { name: '民福康', domain: '39yst.com', pct: 8.4 },
            { name: '博禾医生', domain: 'bohe.cn', pct: 5.4 },
            { name: '百度知道', domain: 'baidu.com', pct: 4.8 },
            { name: '复禾健康', domain: 'fh21.com', pct: 4.4 },
            { name: '苹果绿养生网', domain: 'pingguolv.com', pct: 2.2 },
            { name: '必需药', domain: 'himd.com', pct: 2.2 },
            { name: '今日头条', domain: 'toutiao.com', pct: 1.7 },
            { name: '39健康网', domain: '39.net', pct: 1.7 },
            { name: '医脉通', domain: 'medlive.cn', pct: 1.3 },
            { name: '大众养生网', domain: 'cndzys.com', pct: 1.2 },
            { name: '有来医生', domain: 'youlai.cn', pct: 1.1 },
            { name: '99健康网', domain: '99.com.cn', pct: 0.9 },
            { name: '药融云 BYDRUG', domain: 'pharmcube.com', pct: 0.8 },
            { name: '良医汇', domain: 'liangyihui.net', pct: 0.7 },
            { name: '快速问医生', domain: '120ask.com', pct: 0.6 },
            { name: '网易', domain: '163.com', pct: 0.6 },
            { name: 'Dovepress', domain: 'dovepress.com', pct: 0.5 },
            { name: '搜狐网', domain: 'sohu.com', pct: 0.5 },
        ],
    },
    {
        ai: '蚂蚁阿福',
        aiLogo: '/geo-platforms/afu.png',
        /* 按蚂蚁阿福会话逐条汇总。citations/stats 的 platform_id 不生效，不能直接用。 */
        sources: [
            { name: '蚂蚁阿福医学文献库', domain: 'alipayobjects.com', pct: 40.2 },
            { name: 'NIH', domain: 'nih.gov', pct: 15.8 },
            { name: '阿福智库', domain: 'render.alipay.com', pct: 15.3 },
            { name: '万方数据', domain: 'wanfangdata.com.cn', pct: 4.1 },
            { name: 'ScienceDirect', domain: 'sciencedirect.com', pct: 3.4 },
            { name: 'Springer', domain: 'springer.com', pct: 3.3 },
            { name: '医脉通', domain: 'medlive.cn', pct: 2.9 },
            { name: '医学界', domain: 'yxj.org.cn', pct: 2.2 },
            { name: '中华医学期刊网', domain: 'sjuku.top', pct: 1.6 },
            { name: '百度学术', domain: 'yiigle.com', pct: 1.4 },
            { name: '湖南药事服务网', domain: 'hnysfww.com', pct: 1.2 },
            { name: 'MDPI', domain: 'mdpi.com', pct: 1.1 },
            { name: 'Nature', domain: 'nature.com', pct: 0.8 },
            { name: 'MedlinePlus', domain: 'medlineplus.gov', pct: 0.8 },
            { name: 'DOI基金会', domain: 'doi.org', pct: 0.7 },
            { name: '中国临床试验注册中心', domain: 'chictr.org.cn', pct: 0.6 },
            { name: 'UpToDate', domain: 'uptodate.com', pct: 0.6 },
            { name: '掌桥科研', domain: 'zhangqiaokeyan.com', pct: 0.6 },
            { name: 'Ovid', domain: 'ovid.com', pct: 0.4 },
            { name: 'NHS', domain: 'www.nhs.uk', pct: 0.4 },
        ],
    },
];

function AiLogo({ src, alt }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div className="w-[40px] h-[40px] rounded-full border border-dashed border-white/25 bg-white/5 flex items-center justify-center shrink-0">
                <span className="text-[10px] text-zinc-500 font-bold">LOGO</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="w-[40px] h-[40px] rounded-full object-contain shrink-0"
        />
    );
}

function SourceIcon({ name, domain }) {
    const [failed, setFailed] = useState(false);
    const icon = ICONS[domain];

    if (!icon || failed) {
        return (
            <span className="w-[24px] h-[24px] rounded-[6px] bg-white/10 shrink-0 flex items-center justify-center text-[13px] text-white/70 leading-none">
                {name.slice(0, 1)}
            </span>
        );
    }

    return (
        <span className="w-[24px] h-[24px] rounded-[6px] bg-white shrink-0 overflow-hidden flex items-center justify-center">
            <img
                src={icon}
                alt=""
                onError={() => setFailed(true)}
                className="w-full h-full object-contain"
            />
        </span>
    );
}

export default function Page_AIPlatform_SourceRanking() {
    return (
        <SlideLayout
            title="各AI平台引用源排行"
            subtitle="豆包、通义千问、元宝的头部信源都出自自家生态，DeepSeek没有自有内容池，更依赖第三方专业库"
        >
            <div className="w-full h-full flex gap-[16px] animate-fadeIn font-['MiSans']">
                {PLATFORMS.map((p) => {
                    const rows = p.sources.length > 0
                        ? p.sources
                        : Array.from({ length: 20 }, () => ({ name: '', domain: '', pct: null }));

                    return (
                    <div
                        key={p.ai}
                        className="flex-1 min-w-0 relative flex flex-col rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 overflow-hidden px-4 py-4"
                    >
                        <span className="absolute left-0 top-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#004CE5] to-transparent" />

                        {/* 平台头部 */}
                        <div className="shrink-0 flex items-center gap-2.5 pb-3 mb-2.5 border-b border-white/[0.08]">
                            <AiLogo src={p.aiLogo} alt={p.ai} />
                            <span className="flex-1 min-w-0 text-[26px] font-bold text-white leading-none truncate">
                                {p.ai}
                            </span>
                            <span className="shrink-0 text-[14px] text-white/40 leading-none font-['Montserrat'] font-bold tracking-wider">
                                TOP 20
                            </span>
                        </div>

                        {/* 排行 */}
                        <div className="flex-1 min-h-0 flex flex-col gap-[3px]">
                            {rows.map((s, i) => (
                                <div
                                    key={s.domain ? `${s.name}-${s.domain}` : `empty-${i}`}
                                    className={`flex-1 min-h-0 rounded-[8px] flex items-center pl-1.5 pr-2 ${
                                        i % 2 === 0 ? 'bg-white/[0.04]' : ''
                                    }`}
                                >
                                    <span
                                        className="w-[26px] shrink-0 text-center text-white/35 font-bold leading-none font-['Montserrat']"
                                        style={{ fontSize: '16px' }}
                                    >
                                        {i + 1}
                                    </span>

                                    {s.name ? (
                                        <span className="shrink-0 pl-1 pr-2">
                                            <SourceIcon name={s.name} domain={s.domain} />
                                        </span>
                                    ) : (
                                        <span className="w-[24px] h-[24px] shrink-0 ml-1 mr-2 rounded-[6px] bg-white/[0.04]" />
                                    )}

                                    <span className="flex-1 min-w-0 text-[17px] text-white leading-none truncate">
                                        {s.name}
                                    </span>

                                    <span className="shrink-0 pl-1.5 text-[17px] font-bold text-white leading-none font-['Montserrat']">
                                        {typeof s.pct === 'number' ? `${s.pct.toFixed(1)}%` : ''}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    );
                })}
            </div>
        </SlideLayout>
    );
}

Page_AIPlatform_SourceRanking.hideHeader = true;
