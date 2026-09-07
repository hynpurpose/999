import React from 'react';

/* ══════════════ 数据：换明细列表时只改这一段 ══════════════ */
/* 来源：投放平台量化分析_三九养胃舒颗粒-ToC① Excel · 引用文章Top100分析 · 2026-08-04 */

const BRAND = '华润三九';
const BRAND_FULL = '华润三九';
/** 提到自家品牌的独立文章总数（Excel 小节标题口径） */
const BRAND_ARTICLE_TOTAL = 294;

/** 综合 Top 100（按总引用次数排序） */
const LEFT_ROWS = [
    {
        "cites": 11,
        "category": "知识科普",
        "platform": "生命时报",
        "title": "每种胃病，对症调效果好",
        "hit": false,
        "url": "https://www.lifetimes.cn/article/470zon28Yww"
    },
    {
        "cites": 10,
        "category": "排行榜",
        "platform": "搜狐网",
        "title": "常年胃痛胃胀反复难愈?三款经典中成药,帮你慢慢养好脾胃本源",
        "hit": false,
        "url": "https://www.sohu.com/a/1023580872_121948383"
    },
    {
        "cites": 10,
        "category": "知识科普",
        "platform": "许昌市中心医院",
        "title": "健康科普 +",
        "hit": false,
        "url": "http://xcszxyy.cn/jiankangkepu/kepuwenzhang/2024-03-19/1469.html"
    },
    {
        "cites": 8,
        "category": "知识科普",
        "platform": "博禾医生",
        "title": "治疗胃炎中成药有哪种",
        "hit": true,
        "url": "https://www.bohe.cn/article/view/qkg1vgnu6kmmw61.html"
    },
    {
        "cites": 6,
        "category": "知识科普",
        "platform": "中国医药信息查询平台",
        "title": "胃纳差吃什么中成药",
        "hit": false,
        "url": "https://m.dayi.org.cn/qa/358608.html"
    },
    {
        "cites": 6,
        "category": "知识科普",
        "platform": "神马搜索",
        "title": "健养胃药物有哪些",
        "hit": true,
        "url": "https://page.sm.cn/blm/midpage-317/index?h=m.cndzys.com&id=14_1adb5d124af34767970d6c1516557844"
    },
    {
        "cites": 5,
        "category": "行业资讯",
        "platform": "中国医药保健品进出口商会",
        "title": "三十载，匠心铸经典：江中牌健胃消食片第二十一年蝉联中成药消化类第一名",
        "hit": false,
        "url": "https://www.cnma.org.cn/nd.jsp?id=2935"
    },
    {
        "cites": 5,
        "category": "行业资讯",
        "platform": "广州白云山陈李济药厂有限公司",
        "title": "喜报｜陈李济胃疡宁丸入选《慢性胃炎中西医协同诊疗共识意见》",
        "hit": false,
        "url": "https://gzclj.com.cn/wap/index.php?ac=article&at=read&did=2696"
    },
    {
        "cites": 5,
        "category": "单品介绍",
        "platform": "中国医药信息查询平台",
        "title": "蒲元和胃胶囊",
        "hit": false,
        "url": "https://m.dayi.org.cn/drug/1023408?from=sm"
    },
    {
        "cites": 5,
        "category": "行业资讯",
        "platform": "丁香园生物医药科技网",
        "title": "猴头健胃灵片治疗慢性胃炎、消化性溃疡临床应用专家共识",
        "hit": false,
        "url": "https://drugs.dxy.cn/pc/clinicalGuidelines/yziEKEROmDiDZpd0FSp3BSQ"
    },
    {
        "cites": 5,
        "category": "知识科普",
        "platform": "神马搜索",
        "title": "养胃药有哪些中成药？",
        "hit": true,
        "url": "https://page.sm.cn/blm/midpage-317/index?h=v1.medical.sm.cn&id=18_67cedd3d1567552e951aaa20bdb35844"
    },
    {
        "cites": 5,
        "category": "知识科普",
        "platform": "中国医药信息查询平台",
        "title": "养胃舒颗粒怎么样",
        "hit": false,
        "url": "https://m.dayi.org.cn/qa/43013.html"
    }
];

/** 提到自家品牌的引用文章明细（正文提及，按被引用次数排序） */
const RIGHT_ROWS = [
    {
        "cites": 8,
        "category": "知识科普",
        "platform": "博禾医生",
        "title": "治疗胃炎中成药有哪种",
        "hit": true,
        "url": "https://www.bohe.cn/article/view/qkg1vgnu6kmmw61.html"
    },
    {
        "cites": 6,
        "category": "知识科普",
        "platform": "神马搜索",
        "title": "健养胃药物有哪些",
        "hit": true,
        "url": "https://page.sm.cn/blm/midpage-317/index?h=m.cndzys.com&id=14_1adb5d124af34767970d6c1516557844"
    },
    {
        "cites": 5,
        "category": "知识科普",
        "platform": "神马搜索",
        "title": "养胃药有哪些中成药？",
        "hit": true,
        "url": "https://page.sm.cn/blm/midpage-317/index?h=v1.medical.sm.cn&id=18_67cedd3d1567552e951aaa20bdb35844"
    },
    {
        "cites": 4,
        "category": "排行榜",
        "platform": "米内网",
        "title": "34个中成药燃爆百亿市场!扬子江独家产品重夺TOP1,健民新药猛涨147%,华润三九大爆发",
        "hit": true,
        "url": "https://www.menet.com.cn/info/202605/2026052709060565_150696.shtml"
    },
    {
        "cites": 4,
        "category": "知识科普",
        "platform": "神马搜索",
        "title": "养胃药有哪些呢？",
        "hit": true,
        "url": "https://page.sm.cn/blm/midpage-317/index?h=m.ilwys.cn&id=16_271a334af147fe9352d5cf3f38ecf90e"
    },
    {
        "cites": 4,
        "category": "行业资讯",
        "platform": "摩熵医药",
        "title": "重磅！快胃片治疗慢性浅表性胃炎临床应用专家共识发布_摩熵医药",
        "hit": true,
        "url": "https://www.pharnexcloud.com/zixun/lcyj_27995"
    },
    {
        "cites": 4,
        "category": "知识科普",
        "platform": "QQ新闻",
        "title": "中成药治疗慢性胃炎",
        "hit": true,
        "url": "http://mp.weixin.qq.com/s?__biz=MzA5MTA1MjgxMA==&mid=2652337585&idx=8&sn=a690ccb4d905b4b029acbf7e402a7754"
    },
    {
        "cites": 4,
        "category": "知识科普",
        "platform": "广西中医药大学第一附属医院",
        "title": "慢性胃炎巧选中成药",
        "hit": true,
        "url": "https://www.gxzyy.com.cn/zykp/2012/9aANrlbv.html"
    },
    {
        "cites": 4,
        "category": "知识科普",
        "platform": "博禾医生",
        "title": "治疗慢性胃炎的中成药",
        "hit": true,
        "url": "https://www.bohe.cn/article/view/5dkhwawjek2f10k.html"
    },
    {
        "cites": 4,
        "category": "知识科普",
        "platform": "复禾健康",
        "title": "治疗胃痛的中成药合理使用需要注意什么",
        "hit": true,
        "url": "https://www.fh21.com.cn/article/view/7w6ykhwgkruo8f2.html"
    },
    {
        "cites": 3,
        "category": "排行榜",
        "platform": "39健康网",
        "title": "关注肠胃健康:几款知名养胃产品哪家好,养胃颗粒、生脉饮、养胃产品,养胃产品公司口碑推荐榜",
        "hit": true,
        "url": "https://zl.39.net/a/260309/p5wg72i.html"
    },
    {
        "cites": 3,
        "category": "行业资讯",
        "platform": "智慧芽",
        "title": "独家中成药燃爆胃药市场！扬子江超11亿领先，太极集团再涨148%，华润称霸药店",
        "hit": true,
        "url": "https://synapse.zhihuiya.com/news-detail/a5f15a5b-9b50-399b-90ad-7e771feec9ac"
    }
];

const FONT =
    '"PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", system-ui, sans-serif';

const THEMES = {
    blue: {
        titleBg: '#EAF2F9',
        titleText: '#1E4E7A',
        accent: '#3A7DB2',
        headBg: '#2F6FA8',
        border: '#B7CBE0',
        zebra: '#F3F8FC',
        link: '#1D6FBF',
    },
    brown: {
        titleBg: '#F8EEE6',
        titleText: '#6B2E2E',
        accent: '#8B3A3A',
        headBg: '#8B3A3A',
        border: '#E0C8B8',
        zebra: '#FBF6F2',
        link: '#8B3A3A',
    },
};

const COLS = '0.7fr 0.75fr 0.85fr 2.2fr 0.85fr 1.8fr';

function DetailTable({ themeKey, title, hitLabel, rows, hitAsCheck }) {
    const t = THEMES[themeKey];

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                background: '#fff',
                fontFamily: FONT,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                WebkitFontSmoothing: 'antialiased',
                color: '#1a1a1a',
            }}
        >
            <div
                style={{
                    background: t.titleBg,
                    color: t.titleText,
                    fontSize: 13,
                    fontWeight: 700,
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    flexShrink: 0,
                    borderBottom: `1px solid ${t.border}`,
                    lineHeight: 1.35,
                }}
            >
                <span style={{ width: 3, height: 14, background: t.accent, borderRadius: 1, flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: COLS,
                    background: t.headBg,
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 700,
                    height: 36,
                    flexShrink: 0,
                }}
            >
                {['引用', '类别', '平台', '文章标题', hitLabel, '链接'].map((h, i) => (
                    <div
                        key={h}
                        style={{
                            ...cellCenter,
                            borderRight: i < 5 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                            fontSize: 12,
                        }}
                    >
                        {h}
                    </div>
                ))}
            </div>

            <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                {rows.map((r, i) => (
                    <div
                        key={`${r.url}-${i}`}
                        style={{
                            flex: 1,
                            minHeight: 0,
                            display: 'grid',
                            gridTemplateColumns: COLS,
                            background: i % 2 === 0 ? t.zebra : '#fff',
                            borderBottom: `1px solid ${t.border}`,
                            fontSize: 12.5,
                        }}
                    >
                        <div style={cellCenter}>{r.cites}</div>
                        <div style={cellCenter}>{r.category}</div>
                        <div style={{ ...cellLeft, fontWeight: 600 }} title={r.platform}>{r.platform}</div>
                        <div style={cellLeft} title={r.title}>{r.title}</div>
                        <div style={cellCenter}>
                            {hitAsCheck ? (r.hit ? '✓' : '—') : (r.hit ? '是' : '否')}
                        </div>
                        <div style={{ ...cellLeft, color: t.link }} title={r.url}>{r.url}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const cellCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 6px',
    borderRight: '1px solid #d8e2ec',
    boxSizing: 'border-box',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
};

const cellLeft = {
    ...cellCenter,
    justifyContent: 'flex-start',
};

export default function Page_ContentStrategyDetails() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white">
            <div className="h-[20px] shrink-0 pointer-events-none" />

            <div className="w-full flex-col items-center justify-center text-center pt-2 pb-6 shrink-0">
                <h1 className="text-4xl font-bold text-white tracking-widest mb-3">大模型高频引用文章明细</h1>
                <p className="inline-block text-[#004CE5] text-[1.1rem] font-bold tracking-widest bg-[#004CE5]/10 px-6 py-2 rounded-full border border-[#004CE5]/30 shadow-[0_0_20px_rgba(0,76,229,0.15)]">
                    溯源反推：大模型引用偏好内容分析与溯源统计明细
                </p>
            </div>

            <div className="flex-1 w-full mx-auto px-4 pb-4 z-10 flex min-h-0">
                <div className="w-full h-full grid grid-cols-2 gap-6 items-stretch min-h-0">
                    <div className="flex flex-col gap-3 w-full h-full min-h-0">
                        <div className="flex items-center gap-2 px-2 shrink-0">
                            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]" />
                            <h3 className="text-xl font-black text-white tracking-wide">综合 Top 100 引用文章明细</h3>
                        </div>
                        <div className="flex-1 min-h-0 w-full relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <DetailTable
                                themeKey="blue"
                                title="综合 Top 100 引用文章明细（按总引用次数排序）"
                                hitLabel={`是否命中${BRAND}`}
                                rows={LEFT_ROWS}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full h-full min-h-0">
                        <div className="flex items-center gap-2 px-2 shrink-0">
                            <div className="w-1.5 h-6 bg-[#004CE5] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,76,229,0.5)]" />
                            <h3 className="text-xl font-black text-white tracking-wide">
                                提到{BRAND}的引用文章 Top 100 明细
                            </h3>
                        </div>
                        <div className="flex-1 min-h-0 w-full relative bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <DetailTable
                                themeKey="brown"
                                title={`提到${BRAND_FULL}的引用文章 Top 100（正文提及，共涉及 ${BRAND_ARTICLE_TOTAL} 篇）`}
                                hitLabel="正文提及"
                                rows={RIGHT_ROWS}
                                hitAsCheck
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
