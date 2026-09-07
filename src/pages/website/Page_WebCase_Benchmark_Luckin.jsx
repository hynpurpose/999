import React from 'react';
import SlideLayout from '../../components/SlideLayout';
import CaseShotBoard from '../../components/website/CaseShotBoard';

/* 原报告的「标杆案例：瑞幸咖啡」总览页 + 亮点一~四四张说明页，合并成一页。
   总览页的结论收进右侧文字栏，四个亮点页作为缩略图证据。数值取自原报告，勿改。 */

const SHOTS = [
  { src: '/web-case/luckin-robots.png', caption: '亮点一：robots 只点名放行 /products 和 /faq，接口全屏蔽' },
  { src: '/web-case/luckin-products.png', caption: '亮点二：产品页写明咖啡因 118.4mg、热量 179kcal' },
  { src: '/web-case/luckin-faq.png', caption: '亮点三：FAQ 按八类问答场景分，答案直接给数字' },
  { src: '/web-case/luckin-open.png', caption: '亮点四：正文写在 HTML 里，没有登录墙，AI 打开就能读' },
];

const NOTES = [
  {
    tag: '为什么挑瑞幸',
    title: '产品页和 FAQ 是按「喂给 AI」的思路做的',
    desc: 'robots.txt 只点名放行这两条路径，接口和验证码页一律屏蔽。这不是顺手做出来的，是刻意留给爬虫的内容入口。',
  },
  {
    tag: '内容覆盖 49/50',
    title: '靠的就是「产品事实」和「问答」两类内容',
    desc: '每款产品把咖啡因毫克数、热量写到测量条件，连大杯、冰、默认浓度都标出来；FAQ 的问题就是用户问 AI 的原话，答案直接给数字，转述时不用改写。',
  },
  {
    tag: '启示',
    title: '不用等技术改造做满，先把这两类内容做出来',
    desc: '瑞幸的技术配置其实也不完善，sitemap 这项只拿到 6/10；但内容层到位，AI 引用照样跟得上——产品事实和 FAQ 是投入产出最高的两件事。',
  },
];

export default function Page_WebCase_Benchmark_Luckin() {
  return (
    <SlideLayout
      title="标杆案例：瑞幸把官网写给 AI 看"
      subtitle="内容覆盖 49/50，是实测过的国内官网里最高的一个——靠的就是产品页和 FAQ"
    >
      <CaseShotBoard shots={SHOTS} notes={NOTES} />
    </SlideLayout>
  );
}

Page_WebCase_Benchmark_Luckin.hideHeader = true;
