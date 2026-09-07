import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { DoubleColumnB } from './Page_CaseStudy_Double_Combined';

const CAINIAO = {
  industry: '物流与供应链',
  brand: '菜鸟速递',
  brandId: 'cainiao',
  product: '菜鸟快递',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-5.png'],
  summary:
    '通过对菜鸟寄件、全球供应链解决方案在 AI 大模型里的服务与时效口碑进行深度优化，使其在“国内靠谱寄快递推荐”、“商家供应链合作选择”等长尾问答中稳居一线，极大巩固了品牌服务声量与大模型采信度。',
  ranking: {
    metric: 'Top1提及率',
    unit: '%',
    items: [
      { name: '菜鸟', rank: 1, value: 56.4, self: true },
      { name: '顺丰', rank: 2, value: 18.9 },
      { name: '京东物流', rank: 3, value: 11.2 },
      { name: '中通', rank: 4, value: 6.8 },
      { name: '圆通', rank: 5, value: 4.1 },
      { name: '其他', rank: 6, value: 2.6 },
    ],
  },
};

const GUJING = {
  industry: '快消品行业',
  brand: '古井贡酒',
  brandId: 'gujing',
  product: '古16、古20',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-3.png'],
  summary:
    '针对白酒品牌在 AI 检索中偏向于历史典故而忽视高端消费场景推荐的问题，项目重点优化了古井贡酒在商务宴请、节日送礼等高频消费问答中的关联，显著提升了年份原浆系列的推荐深度与提及频次。',
  ranking: {
    metric: 'Top1提及率',
    unit: '%',
    items: [
      { name: '古井贡酒', rank: 1, value: 48.9, self: true },
      { name: '茅台', rank: 2, value: 20.4 },
      { name: '五粮液', rank: 3, value: 13.6 },
      { name: '洋河', rank: 4, value: 8.2 },
      { name: '泸州老窖', rank: 5, value: 5.1 },
      { name: '其他', rank: 6, value: 3.8 },
    ],
  },
};

const CAINIAO_OVERVIEW = [
  { label: '提及率', value: '88.5%', before: '36.4%' },
  { label: 'Top 1 提及率', value: '56.4%', before: '13.1%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.5' },
];

const GUJING_OVERVIEW = [
  { label: '提及率', value: '81.2%', before: '28.9%' },
  { label: 'Top 1 提及率', value: '48.9%', before: '10.6%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.6' },
];

/** 版本 2：先结论后举证（竞品排名柱状图） */
export default function Page_CaseStudy_Double_Combined_3() {
  return (
    <SlideLayout title="服务案例">
      <div className="w-full h-full flex flex-col justify-start relative z-10 select-none">
        <div className="w-full flex-grow flex gap-6 items-stretch min-h-0 mb-0">
          <DoubleColumnB data={CAINIAO} overview={CAINIAO_OVERVIEW} />
          <DoubleColumnB data={GUJING} overview={GUJING_OVERVIEW} />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_CaseStudy_Double_Combined_3.hideHeader = true;
