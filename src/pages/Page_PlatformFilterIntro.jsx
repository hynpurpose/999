import React, { useState } from 'react';

const SITE_ICON = {
    '中国医药信息查询平台': '/source-icons/dayi.org.cn.png',
    '厦门大学附属厦门眼科中心': '/source-icons/xiameneye.org.cn.ico',
    '摩熵医药': '/medical-sources/pharnexcloud.png',
    '丁香园': '/source-icons/dxy.cn.png',
    '中国生物医学文献服务系统': '/source-icons/sinomed.ac.cn.png',
    '生命时报': '/source-icons/lifetimes.cn.svg',
    '苏州大学理想眼科医院': '/source-icons/lxeye.org.cn.ico',
    '博士伦公司': '/source-icons/bausch.com.cn.ico',
    '兴齐眼药': '/source-icons/sinqi.com.png',
    '小荷健康': '/source-icons/xiaohe.cn.png',
    '抖音': '/favicons/douyin.svg',
    '今日头条': '/source-icons/toutiao.com.png',
    '民福康': '/source-icons/mfk.com.png',
    '家庭医生在线': '/medical-sources/familydoctor.png',
    '淘宝网': '/source-icons/taobao.com.png',
    '复禾健康': '/source-icons/fh21.com.png',
    'NIH': '/medical-sources/nih.png',
    'QQ新闻': '/source-icons/qq.com.png',
    '博禾医生': '/source-icons/bohe.cn.png',
    '民福康健康': '/source-icons/39yst.com.png',
    '39健康网': '/source-icons/39.net.png',
    '大众养生网': '/medical-sources/cndzys.png',
    '99健康网': '/source-icons/99.com.cn.png',
    '百度知道': '/source-icons/baidu.com.png',
    '寻医问药': '/medical-sources/xywy.png',
    '夸克': '/source-icons/quark.cn.png',
    '神马搜索': '/source-icons/sm.cn.png',
    '搜狐网': '/source-icons/sohu.com.png',
    '中华网': '/source-icons/china.com.ico',
    '中国网': '/source-icons/china.com.cn.png',
    '蚂蚁阿福医学文献库': '/source-icons/alipayobjects.com.png',
    '阿福智库': '/source-icons/render.alipay.com.png',
    'Springer': '/source-icons/springer.com.png',
    '中华医学期刊网': '/source-icons/sjuku.top.png',
    'ScienceDirect': '/source-icons/sciencedirect.com.ico',
    'Nature': '/source-icons/nature.com.png',
    '医学界': '/source-icons/yxj.org.cn.ico',
    'UpToDate': '/source-icons/uptodate.com.png',
    'NHS': '/source-icons/nhs.uk.png',
};

const ICON_SIZE = 20;

function SiteFavicon({ name }) {
    const [failed, setFailed] = useState(false);
    const src = SITE_ICON[name];
    const box = { width: ICON_SIZE, height: ICON_SIZE };

    if (!src || failed) {
        return (
            <span
                style={box}
                className="shrink-0 rounded-[5px] bg-white/15 flex items-center justify-center"
            >
                <span className="text-white font-bold leading-none" style={{ fontSize: 11 }}>
                    {(name || '·').slice(0, 1)}
                </span>
            </span>
        );
    }

    return (
        <span
            style={box}
            className="shrink-0 rounded-[5px] bg-white overflow-hidden flex items-center justify-center"
        >
            <img
                src={src}
                alt=""
                onError={() => setFailed(true)}
                className="w-full h-full object-contain"
            />
        </span>
    );
}

function AiLogo({ src, alt }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <span className="w-8 h-8 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                <span className="text-white font-bold leading-none text-[14px]">{alt.slice(0, 1)}</span>
            </span>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="w-8 h-8 object-contain rounded-full shrink-0"
        />
    );
}

export default function Page_PlatformFilterIntro() {
    // 数据源：GEO ONE 项目 453「干眼：兹润® 环孢素滴眼液」2026-08-04 全量会话引用，按站点名合并域名后取 Top 10
    const platformData = [
        {
            "id": "deepseek",
            "name": "DeepSeek",
            "logo": "/geo-platforms/deepseek.png",
            "color": "from-[#004CE5]/10",
            "borderColor": "border-[#004CE5]/20",
            "data": [
                { "rank": 1, "site": "中国医药信息查询平台", "count": 113 },
                { "rank": 2, "site": "厦门大学附属厦门眼科中心", "count": 34 },
                { "rank": 3, "site": "摩熵医药", "count": 33 },
                { "rank": 4, "site": "丁香园", "count": 19 },
                { "rank": 5, "site": "中国生物医学文献服务系统", "count": 16 },
                { "rank": 6, "site": "生命时报", "count": 9 },
                { "rank": 7, "site": "苏州大学理想眼科医院", "count": 9 },
                { "rank": 8, "site": "博士伦公司", "count": 8 },
                { "rank": 9, "site": "兴齐眼药", "count": 7 },
                { "rank": 10, "site": "中国医学科学院整形外科医院", "count": 7 }
            ]
        },
        {
            "id": "doubao",
            "name": "豆包",
            "logo": "/geo-platforms/doubao.png",
            "color": "from-[#004CE5]/10",
            "borderColor": "border-[#004CE5]/20",
            "data": [
                { "rank": 1, "site": "小荷健康", "count": 756 },
                { "rank": 2, "site": "抖音", "count": 142 },
                { "rank": 3, "site": "今日头条", "count": 5 },
                { "rank": 4, "site": "民福康", "count": 4 },
                { "rank": 5, "site": "家庭医生在线", "count": 4 },
                { "rank": 6, "site": "淘宝网", "count": 4 },
                { "rank": 7, "site": "中国医药信息查询平台", "count": 3 },
                { "rank": 8, "site": "复禾健康", "count": 3 },
                { "rank": 9, "site": "NIH", "count": 3 },
                { "rank": 10, "site": "丁香园", "count": 2 }
            ]
        },
        {
            "id": "yuanbao",
            "name": "元宝",
            "logo": "/geo-platforms/yuanbao.png",
            "color": "from-[#004CE5]/10",
            "borderColor": "border-[#004CE5]/20",
            "data": [
                { "rank": 1, "site": "QQ新闻", "count": 122 },
                { "rank": 2, "site": "博禾医生", "count": 72 },
                { "rank": 3, "site": "复禾健康", "count": 61 },
                { "rank": 4, "site": "中国医药信息查询平台", "count": 55 },
                { "rank": 5, "site": "民福康健康", "count": 53 },
                { "rank": 6, "site": "39健康网", "count": 38 },
                { "rank": 7, "site": "大众养生网", "count": 33 },
                { "rank": 8, "site": "99健康网", "count": 31 },
                { "rank": 9, "site": "百度知道", "count": 23 },
                { "rank": 10, "site": "寻医问药", "count": 21 }
            ]
        },
        {
            "id": "tongyi",
            "name": "通义千问",
            "logo": "/geo-platforms/qwen.png",
            "color": "from-[#004CE5]/10",
            "borderColor": "border-[#004CE5]/20",
            "data": [
                { "rank": 1, "site": "夸克", "count": 148 },
                { "rank": 2, "site": "神马搜索", "count": 106 },
                { "rank": 3, "site": "搜狐网", "count": 21 },
                { "rank": 4, "site": "中华网", "count": 20 },
                { "rank": 5, "site": "摩熵医药", "count": 15 },
                { "rank": 6, "site": "厦门大学附属厦门眼科中心", "count": 8 },
                { "rank": 7, "site": "复禾健康", "count": 8 },
                { "rank": 8, "site": "39健康网", "count": 8 },
                { "rank": 9, "site": "中国网", "count": 7 },
                { "rank": 10, "site": "中国医药信息查询平台", "count": 7 }
            ]
        },
        {
            "id": "afu",
            "name": "蚂蚁阿福",
            "logo": "/geo-platforms/afu.png",
            "color": "from-[#004CE5]/10",
            "borderColor": "border-[#004CE5]/20",
            "data": [
                { "rank": 1, "site": "蚂蚁阿福医学文献库", "count": 243 },
                { "rank": 2, "site": "NIH", "count": 115 },
                { "rank": 3, "site": "阿福智库", "count": 63 },
                { "rank": 4, "site": "Springer", "count": 29 },
                { "rank": 5, "site": "中华医学期刊网", "count": 18 },
                { "rank": 6, "site": "ScienceDirect", "count": 13 },
                { "rank": 7, "site": "Nature", "count": 9 },
                { "rank": 8, "site": "医学界", "count": 9 },
                { "rank": 9, "site": "UpToDate", "count": 7 },
                { "rank": 10, "site": "NHS", "count": 6 }
            ]
        }
    ];

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none"></div>

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">投放平台筛选</h1>
                <p className="text-white text-[1.1rem] font-medium tracking-wide">
                    通过解构五大主流 AI 平台的信源特征与竞品数据，量化推导三大核心阵地
                </p>
            </div>

            <div className="flex-1 w-full max-w-[1700px] mx-auto flex flex-col items-center px-6 lg:px-10 pb-8 z-10 min-h-0">
                <div className="w-full flex justify-center gap-6 mb-6 shrink-0">
                    <div className="flex flex-col items-center gap-2 bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-4 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-white text-[0.9rem] tracking-widest font-medium uppercase">维度一：普适性与共性</span>
                        <h3 className="text-xl font-bold text-white tracking-widest">A 组：共性白名单</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-4 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-white text-[0.9rem] tracking-widest font-medium uppercase">维度一：差异化特征</span>
                        <h3 className="text-xl font-bold text-white tracking-widest">B 组：平台特异性</h3>
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-4 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-white/20"></div>
                        <span className="text-white text-[0.9rem] tracking-widest font-medium uppercase">维度二：行业收录偏好</span>
                        <h3 className="text-xl font-bold text-white tracking-widest">C 组：高命中高频阵地</h3>
                    </div>
                </div>

                <div className="w-full flex-1 grid grid-cols-5 gap-3 min-h-0">
                    {platformData.map((platform, idx) => (
                        <div key={idx} className={`flex flex-col bg-white/[0.02] backdrop-blur-md border ${platform.borderColor} rounded-xl overflow-hidden shadow-lg h-full`}>
                            <div className={`px-3 py-2.5 bg-gradient-to-r ${platform.color} to-transparent border-b ${platform.borderColor} flex items-center gap-2.5 shrink-0`}>
                                <AiLogo src={platform.logo} alt={platform.name} />
                                <h2 className="text-[20px] font-bold text-white tracking-widest leading-none">{platform.name}</h2>
                            </div>

                            <div className="flex items-center px-2.5 py-2 border-b border-white/5 bg-white/[0.01] shrink-0">
                                <span className="w-6 text-center text-[14px] text-white font-bold shrink-0">#</span>
                                <span className="w-5 shrink-0 ml-1" />
                                <span className="flex-1 ml-1.5 text-[14px] text-white font-bold">网站名称</span>
                                <span className="text-[14px] text-white font-bold text-right w-11 shrink-0">引用</span>
                            </div>

                            <div className="flex flex-col flex-1 justify-around px-2 pt-1 pb-2 overflow-hidden">
                                {platform.data.map((item, i) => (
                                    <div key={i} className="flex items-center gap-1.5 py-0.5 px-1 rounded hover:bg-white/5 transition-colors">
                                        <span className="font-mono text-[15px] w-6 text-center shrink-0 text-white font-bold leading-none">{item.rank}</span>
                                        <SiteFavicon name={item.site} />
                                        <span className="text-white text-[15px] font-bold flex-1 min-w-0 truncate leading-none">{item.site}</span>
                                        <span className="text-white font-mono text-[15px] font-bold text-right w-11 shrink-0 leading-none">{item.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
