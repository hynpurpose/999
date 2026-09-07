import React from 'react';
import SlideLayout from '../../components/SlideLayout';
import CaseShotBoard from '../../components/website/CaseShotBoard';

/* 原报告的「问题三 抓取权限 + 问题四 sitemap + 问题五 结构化数据 + 架构竞品对比」四页合并成一页。
   对应架构的第二个考察方向：是否为 AI 抓取做好配置，小计 7/28。 */

const SHOTS = [
  { src: '/web-case/arch-issue-robots.png', caption: '问题三：robots.txt 只有一条空 Disallow，等于全站放行' },
  { src: '/web-case/arch-issue-sitemap.png', caption: '问题四：没有 sitemap，robots.txt 里也没声明位置' },
  { src: '/web-case/arch-issue-schema.png', caption: '问题五：全站无结构化数据，校验工具读不到任何信息' },
  { src: '/web-case/arch-competitor.png', caption: '竞品对比：华为 48、瑞幸 43，桃李 22' },
];

const NOTES = [
  {
    tag: '抓取权限与安全 7/10',
    title: '能抓，但没写清放行什么、屏蔽什么',
    desc: '瑞幸的 robots.txt 明确 Allow 产品页和 FAQ、Disallow 接口路径和验证码页；桃李只有一条空 Disallow，既没引导抓取，也把接口一起敞开了。',
  },
  {
    tag: 'sitemap 0/10 · 结构化数据 0/8',
    title: '这两项归零，是全场扣分最狠的地方',
    desc: '没有页面清单，AI 只能顺着链接一层层摸，产品页和新闻页容易漏；没有结构化数据，产品参数只能靠正文猜。两项加起来 18 分。',
  },
  {
    tag: '同维度横向比',
    title: '桃李 22 分，和豪士接近，离标本差一半',
    desc: '标本是华为 48/50 和瑞幸 43/50；竞品里桃李与豪士接近（22 与 20），宾堡更低，盼盼整站抓不到直接 0 分。桃李六项只有图片说明满分。',
  },
];

export default function Page_WebCase_Arch_Crawl() {
  return (
    <SlideLayout
      title="网站架构诊断（下）：有没有为 AI 做配置"
      subtitle="这一组只拿了 7/28——robots 没写边界，sitemap 和结构化数据都是空的"
    >
      <CaseShotBoard shots={SHOTS} notes={NOTES} />
    </SlideLayout>
  );
}

Page_WebCase_Arch_Crawl.hideHeader = true;
