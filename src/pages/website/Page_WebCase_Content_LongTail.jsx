import React from 'react';
import SlideLayout from '../../components/SlideLayout';
import CaseShotBoard from '../../components/website/CaseShotBoard';

/* 原报告的「问题三 使用场景 + 问题四 FAQ + 问题五 内容运营 + 内容竞品对比」四页合并成一页。
   对应内容覆盖的第二个考察方向：长尾内容是否丰富，小计 8/19。 */

const SHOTS = [
  { src: '/web-case/content-issue-usecase.png', caption: '问题三：没有早餐搭配、通勤携带这类场景内容' },
  { src: '/web-case/content-issue-faq.png', caption: '问题四：没有独立 FAQ 页，短保怎么存全靠用户猜' },
  { src: '/web-case/content-issue-ops.png', caption: '问题五：新闻一直在更，但基本都是获奖 PR 稿' },
  { src: '/web-case/content-competitor.png', caption: '竞品对比：瑞幸 49、豪士 35，桃李 33' },
];

const NOTES = [
  {
    tag: '使用场景 2/6',
    title: '推荐类提问里，AI 找不到能引用的素材',
    desc: '「这款面包适合怎么搭早餐」这类问题官网一句都没写，产品停在参数层，进不了用户的生活场景。一颗大番茄直接按场景组织内容。',
  },
  {
    tag: 'FAQ / 知识科普 2/8',
    title: '扣分最多的一项，官网连问答页都没有',
    desc: '短保怎么保存、隔夜还能不能吃都是高频问题；瑞幸这一项拿满分 8/8，桃李连敏感议题的声明都散落各处，没沉淀成问答。',
  },
  {
    tag: '内容持续运营 4/5',
    title: '在更新，但更新的不是用户想看的东西',
    desc: '获奖和活动新闻对消费者几乎没有信息价值。RIO 拿用户故事和生活场景做长尾，这类内容才会被 AI 反复引用。',
  },
];

export default function Page_WebCase_Content_LongTail() {
  return (
    <SlideLayout
      title="内容覆盖诊断（下）：长尾内容有没有"
      subtitle="场景、FAQ、持续运营这一组只有 8/19，也是最容易在 AI 回答里被竞品替掉的部分"
    >
      <CaseShotBoard shots={SHOTS} notes={NOTES} />
    </SlideLayout>
  );
}

Page_WebCase_Content_LongTail.hideHeader = true;
