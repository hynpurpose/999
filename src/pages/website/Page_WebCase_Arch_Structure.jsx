import React from 'react';
import SlideLayout from '../../components/SlideLayout';
import CaseShotBoard from '../../components/website/CaseShotBoard';

/* 原报告的「网站架构诊断结果 + 问题一 结构清晰度 + 问题二 标题层级」三页合并成一页。
   对应架构的第一个考察方向：页面结构是否清晰、可被读取，小计 15/22。 */

const SHOTS = [
  { src: '/web-case/arch-result.png', caption: '架构总分 22/50，六项里有两项直接是 0 分' },
  { src: '/web-case/arch-issue-structure.png', caption: '问题一：keywords 为空、摘要陈旧，AI 判断不出页面主题' },
  { src: '/web-case/arch-issue-heading.png', caption: '问题二：首页三个 H1 并列，标题层级被当成排版用' },
];

const SUMMARY = {
  title: '这一组 15/22：能读，但读得费劲',
  desc: '元信息和标题层级都是改模板就能解决的事，不用重做网站，成本低、见效快。',
};

const NOTES = [
  {
    tag: '结构清晰度 5/8',
    title: 'title、description、keywords 是给 AI 的主题卡片',
    desc: '桃李有元信息，但 keywords 为空、摘要还是旧版口径。华为把 description 和 og 都填齐，AI 一眼就知道这页在讲什么。',
  },
  {
    tag: '标题层级 3/7',
    title: '一页只能有一个 H1，分块要交给 H2',
    desc: '桃李把「公司介绍」「产品展示」「新闻资讯」都写成 H1，机器分不出主次；华为是单一 H1 加 H2 分块，层级本身就在说明结构。',
  },
  {
    tag: '图片文字说明 7/7',
    title: '六项里唯一拿满分的一项',
    desc: '关键图片都带文字说明，AI 能读懂图里是什么。说明这些事并不是做不到，只是另外几项一直没人管。',
  },
];

export default function Page_WebCase_Arch_Structure() {
  return (
    <SlideLayout
      title="网站架构诊断（上）：AI 读不读得懂"
      subtitle="架构总分 22/50，其中「页面结构清不清晰」这一组拿了 15/22"
    >
      <CaseShotBoard shots={SHOTS} summary={SUMMARY} notes={NOTES} />
    </SlideLayout>
  );
}

Page_WebCase_Arch_Structure.hideHeader = true;
