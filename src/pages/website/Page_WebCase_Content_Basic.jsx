import React from 'react';
import SlideLayout from '../../components/SlideLayout';
import CaseShotBoard from '../../components/website/CaseShotBoard';

/* 原报告的「内容覆盖诊断结果 + 问题一 产品信息 + 问题二 售后服务」三页合并成一页。
   对应内容覆盖的第一个考察方向：基础信息是否齐全，小计 25/31。 */

const SHOTS = [
  { src: '/web-case/content-result.png', caption: '内容总分 33/50，品牌信息 8/8，产品信息只有 6/10' },
  { src: '/web-case/content-issue-product.png', caption: '问题一：产品页正文几乎为零，配料克重全锁在图片里' },
  { src: '/web-case/content-issue-aftersales.png', caption: '问题二：只有购买入口，没有保存与保质期的问答' },
];

const SUMMARY = {
  title: '这一组 25/31：品牌够了，产品不够',
  desc: '差距不在内容不存在，而在能不能被读成文字——参数压在图里，AI 就等于看不见。',
};

const NOTES = [
  {
    tag: '品牌 8/8 · 资质 6/6',
    title: '「桃李是谁」这件事，官网答得很好',
    desc: '企业介绍、生产基地、子公司、零售终端写得扎实，国标、认证、专利也都有覆盖。这部分已经够用，不需要再投预算。',
  },
  {
    tag: '产品信息 6/10',
    title: '有产品名和图，正文里查不到配料和克重',
    desc: '豪士把卖点和配比都写成文字，AI 直接就能引用；桃李的产品页翻下来只剩标题、发布时间和浏览次数，保质期、营养成分全在图片里。',
  },
  {
    tag: '售后与服务 5/7',
    title: '开封怎么保存、怎么判断新鲜，官网没有答案',
    desc: '官网只有天猫、京东的购买入口，用户最常拿去问 AI 的这几个问题一个都没答，AI 只能去引用第三方。百果园把售后单独做成了页面。',
  },
];

export default function Page_WebCase_Content_Basic() {
  return (
    <SlideLayout
      title="内容覆盖诊断（上）：读到的内容有没有用"
      subtitle="内容总分 33/50，基础信息这一组 25/31——品牌讲得清楚，产品讲不清楚"
    >
      <CaseShotBoard shots={SHOTS} summary={SUMMARY} notes={NOTES} />
    </SlideLayout>
  );
}

Page_WebCase_Content_Basic.hideHeader = true;
