import React from 'react';
import SlideLayout from '../../components/SlideLayout';
import CaseShotBoard from '../../components/website/CaseShotBoard';

/* 原报告的「诊断标准 / 诊断结论 / 桌面端 / 移动端」四页合并成一页。
   数值均取自桃李面包官网诊断报告（2026-07-17 实测），勿改。 */

const SHOTS = [
  { src: '/web-case/criteria.png', caption: '评分标准：架构 50 分 + 内容 50 分，拆成 13 项指标' },
  { src: '/web-case/assessment.png', caption: '打分结论：55 分不及格，架构 22、内容 33' },
  { src: '/web-case/psi-desktop.png', caption: '桌面端实测：性能 23 分，导航链接 AI 抓不到' },
  { src: '/web-case/psi-mobile.png', caption: '移动端实测：性能 77 分，但速度指数要 23 秒' },
];

const NOTES = [
  {
    tag: '第一步 · 定标准',
    title: '先说清楚什么算「AI 读得懂」',
    desc: '架构 50 分看 AI 能不能读到，内容 50 分看读到的有没有用；13 项指标各带权重，及格线 60 分。',
  },
  {
    tag: '第二步 · 逐项打分',
    title: '每一项扣分都要有截图和原文当证据',
    desc: '不给主观评价：翻页面源码、拉 robots.txt 原文、跑结构化数据校验，再和竞品同维度并排，每一分都落在具体页面上。',
  },
  {
    tag: '第三步 · 工具实测',
    title: 'SEO 拿 83 分，也不代表 GEO 及格',
    desc: '桌面和移动分开跑，性能 23 与 77 差了三倍多。但 PageSpeed 的 SEO 83 分根本不考察 sitemap 和结构化数据——这两项在桃李官网都是 0。',
  },
];

export default function Page_WebCase_Overview() {
  return (
    <SlideLayout
      title="官网诊断怎么做：以桃李面包为例"
      subtitle="定标准、逐项打分、双端实测——一次完整的官网 GEO 体检，最后是 55 分不及格"
    >
      <CaseShotBoard shots={SHOTS} notes={NOTES} />
    </SlideLayout>
  );
}

Page_WebCase_Overview.hideHeader = true;
