import { CitationCaseLayout } from './Page_MedSource_Citations';

/* 案例出自 GEO ONE 真实数据：元宝 2026-08-07 抓取，词条「家庭常备的养胃药推荐」，
   该场回答共 21 条引用，其中 6 条来自博禾医生；右侧原文为排序第 5 条的被引页面。 */
export default function Page_MedSource_DoctorQA_Citation() {
    return (
        <CitationCaseLayout
            title="AI 具体是怎么引用的"
            subtitle="以博禾医生为例：一场真实回答里，医生署名的科普页被原样转述成了用药清单"
            shots={[
                {
                    index: '01',
                    title: 'AI 的回答',
                    logo: '/geo-platforms/yuanbao.png',
                    logoAlt: '元宝',
                    meta: '元宝 · 词条「家庭常备的养胃药推荐」',
                    src: '/medical-sources/bohe-case-ai-answer.png',
                    alt: '元宝关于家庭常备养胃药的回答',
                    /* 截图里已经框好了「四、中成药」那一段，这里只借它定箭头的起点 */
                    mark: { x: 1.0, y: 73.0, w: 96, h: 26.2, silent: true },
                },
                {
                    index: '02',
                    title: '它引用的原文',
                    logo: '/medical-sources/bohe.png',
                    logoAlt: '博禾医生',
                    meta: '《治疗慢性胃炎的中成药》',
                    src: '/medical-sources/bohe-case-source.png',
                    alt: '博禾医生《治疗慢性胃炎的中成药》文章页',
                    /* 落在原文第一个小标题「一、香砂养胃丸」上，同样只作锚点 */
                    mark: { x: 14.0, y: 28.8, w: 11.2, h: 4.3, silent: true },
                },
            ]}
            sourceLogo="/medical-sources/bohe.png"
            sourceLogoAlt="博禾医生"
            sourceNote="21 条 · 6 条博禾"
            sources={[
                { site: '医药信息查询', title: '慢性非萎缩性胃炎吃什么药好？' },
                { site: '医药信息查询', title: '胃窦炎吃什么药？' },
                { site: '医药信息查询', title: '反胃酸吃什么药好？' },
                { site: '今日头条', title: '家庭保「胃」战，备哪些「子弹」？' },
                { site: '博禾医生', title: '治疗慢性胃炎的中成药', highlight: true },
                { site: '食品药品网', title: '五种常用胃黏膜保护药服用有讲究' },
                { site: 'jkkpb', title: '家庭用药指南 让你远离「胃」险' },
                { site: '民福康', title: '什么是治胃病最好的中成药' },
                { site: '腾讯新闻', title: '10种胃黏膜保护剂药品的正确使用' },
                { site: '百度知道', title: '养胃的什么药又好又便宜' },
                { site: '35健康', title: '慢性胃炎哪种中成药能缓解症状' },
                { site: '博禾医生', title: '胃粘膜损伤吃什么药' },
                { site: '博禾医生', title: 'OTC标志的胃药是什么意思' },
                { site: '博禾医生', title: '治疗胃病最好的中成药' },
                { site: '博禾医生', title: '不伤肾的治胃酸的药有哪些' },
                { site: '39健康网', title: '上班族胃不舒服常备什么胃药比较方便？' },
                { site: '博禾医生', title: '治疗胃炎中成药有哪种' },
                { site: '民福康', title: '哪种胃黏膜保护剂好' },
                { site: '第一三共', title: '胃痛の対策' },
                { site: '百度知道', title: '香砂养胃丸哪个品牌的质量好' },
                { site: '北京科技报', title: '消化科常备药物！家庭药箱配置清单' },
            ]}
            statNum="4"
            statLabel="个中成药全部出自这一篇"
            conclusion={
                <>
                    AI 列出的中成药<span className="font-bold text-[#5B8DEF]">原封不动照搬了这一篇</span>
                    ——它不是在自己判断该推荐什么，而是在转述这些页面写了什么。
                </>
            }
        />
    );
}

Page_MedSource_DoctorQA_Citation.hideHeader = true;
