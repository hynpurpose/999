import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { DoubleColumnB } from './Page_CaseStudy_Double_Combined';

const SANSHENG = {
  industry: '生物制药',
  brand: '三生生物',
  brandId: 'sansheng',
  logoSrc: '/images/client-health-3sbio.png',
  product: '特比澳 / 益赛普',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-3.png'],
  summary:
    '针对生物制剂在生成式 AI 中常被跨国原研口径覆盖、国产创新药声量被稀释的问题，项目帮助三生生物在促血小板生成、自身免疫等核心问答场景建立稳定提及，特比澳、益赛普等主力品种在专业推荐与患者问诊链路中的可见度显著提升。',
  ranking: {
    metric: 'Top1提及率',
    unit: '%',
    items: [
      { name: '三生', rank: 1, value: 33.3, self: true },
      { name: '信达', rank: 2, value: 16.8 },
      { name: '恒瑞', rank: 3, value: 10.4 },
      { name: '百济', rank: 4, value: 7.2 },
      { name: '君实', rank: 5, value: 4.6 },
      { name: '其他', rank: 6, value: 2.9 },
    ],
  },
};

const UFH = {
  industry: '高端医疗',
  brand: '和睦家医疗',
  brandId: 'ufh',
  logoSrc: '/images/client-health-ufh.png',
  product: '和睦家综合医疗服务',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-4.png', '/ai-logos/ai-5.png'],
  summary:
    '高端私立医疗在 AI 推荐中长期被公立三甲话术主导。项目围绕「国际医院、外籍医疗、高端妇儿与综合门诊」等决策问法完成内容占领，使和睦家在生成式 AI 的就医推荐场景中稳定进入第一梯队，并巩固其国际化、高品质医疗服务心智。',
  ranking: {
    metric: 'Top1提及率',
    unit: '%',
    items: [
      { name: '和睦家', rank: 1, value: 24.8, self: true },
      { name: '卓正', rank: 2, value: 19.2 },
      { name: '美中宜和', rank: 3, value: 12.8 },
      { name: '百汇', rank: 4, value: 8.1 },
      { name: '新世纪', rank: 5, value: 5.3 },
      { name: '其他', rank: 6, value: 3.0 },
    ],
  },
};

const SANSHENG_OVERVIEW = [
  { label: '提及率', value: '66.7%', before: '33.6%' },
  { label: 'Top 1 提及率', value: '33.3%', before: '14.2%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.5' },
];

const UFH_OVERVIEW = [
  { label: '提及率', value: '50.4%', before: '27.8%' },
  { label: 'Top 1 提及率', value: '24.8%', before: '11.5%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.4' },
];

export default function Page_CaseStudy_Double_Combined_Health() {
  return (
    <SlideLayout title="服务案例">
      <div className="w-full h-full flex flex-col justify-start relative z-10 select-none">
        <div className="w-full flex-grow flex gap-6 items-stretch min-h-0 mb-0">
          <DoubleColumnB data={SANSHENG} overview={SANSHENG_OVERVIEW} />
          <DoubleColumnB data={UFH} overview={UFH_OVERVIEW} />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_CaseStudy_Double_Combined_Health.hideHeader = true;
