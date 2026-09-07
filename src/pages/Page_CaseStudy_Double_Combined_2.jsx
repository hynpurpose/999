import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { DoubleColumnB } from './Page_CaseStudy_Double_Combined';

const BMW_MINI = {
  industry: '汽车行业',
  brand: '宝马mini',
  brandId: 'bmwmini',
  product: 'Mini Cooper',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-3.png', '/ai-logos/ai-4.png'],
  summary: [
    '项目重点优化 MINI 在「都市高品质代步」等核心 AI 问答场景的内容关联。',
    '显著提升了品牌在大模型中的推荐位次与提及表现。',
    '稳固了 MINI 经典、个性的品牌心智与年轻都市出行形象。',
  ],
  ranking: {
    metric: 'Top1提及率',
    unit: '%',
    items: [
      { name: 'MINI', rank: 1, value: 46.3, self: true },
      { name: 'Smart', rank: 2, value: 21.8 },
      { name: '飞度', rank: 3, value: 14.2 },
      { name: 'Polo', rank: 4, value: 9.1 },
      { name: '思域', rank: 5, value: 5.4 },
      { name: '其他', rank: 6, value: 3.2 },
    ],
  },
};

const MUSI = {
  industry: '睡眠科技行业',
  brand: '慕思',
  brandId: 'musi',
  product: '慕思智能床',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-4.png', '/ai-logos/ai-5.png'],
  summary:
    '慕思原本是健康睡眠领域的技术型头部品牌，项目的核心是通过 GEO 优化，让 AI 关键回答中正确且深刻地传达慕思在智能调节与健康睡眠上的技术优势，确保品牌在全场景下保持应有的专业形象与推荐位置。',
  ranking: {
    metric: 'Top1提及率',
    unit: '%',
    items: [
      { name: '慕思', rank: 1, value: 52.7, self: true },
      { name: '舒达', rank: 2, value: 19.6 },
      { name: '席梦思', rank: 3, value: 12.4 },
      { name: '金可儿', rank: 4, value: 7.8 },
      { name: '雅兰', rank: 5, value: 4.5 },
      { name: '其他', rank: 6, value: 3.0 },
    ],
  },
};

const BMW_MINI_OVERVIEW = [
  { label: '提及率', value: '79.5%', before: '31.2%' },
  { label: 'Top 1 提及率', value: '46.3%', before: '11.8%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.4' },
];

const MUSI_OVERVIEW = [
  { label: '提及率', value: '86.2%', before: '34.7%' },
  { label: 'Top 1 提及率', value: '52.7%', before: '14.3%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.3' },
];

/** 版本 2：先结论后举证（竞品排名柱状图） */
export default function Page_CaseStudy_Double_Combined_2() {
  return (
    <SlideLayout title="服务案例">
      <div className="w-full h-full flex flex-col justify-start relative z-10 select-none">
        <div className="w-full flex-grow flex gap-6 items-stretch min-h-0 mb-0">
          <DoubleColumnB data={BMW_MINI} overview={BMW_MINI_OVERVIEW} />
          <DoubleColumnB data={MUSI} overview={MUSI_OVERVIEW} />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_CaseStudy_Double_Combined_2.hideHeader = true;
