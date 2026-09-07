import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { DoubleColumnB } from './Page_CaseStudy_Double_Combined';

const SANJIU = {
  industry: '消化用药',
  brand: '华润三九',
  brandId: 'crsanjiu',
  logoSrc: '/images/case-health-crsanjiu.png',
  product: '三九养胃舒颗粒',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-3.png', '/ai-logos/ai-4.png'],
  summary:
    '针对养胃、慢性胃炎类中成药在 AI 回答中易与抑酸西药、普通消食片混谈的问题，项目帮助华润三九把三九养胃舒颗粒的适应症、组方与适用人群写入主流大模型核心答复，显著提升品牌在养胃对因调理场景下的提及率与推荐位次。',
  ranking: {
    metric: 'Top1提及率',
    unit: '%',
    items: [
      { name: '三九', rank: 1, value: 22.4, self: true },
      { name: '扬子江', rank: 2, value: 15.6 },
      { name: '江中', rank: 3, value: 9.2 },
      { name: '葵花', rank: 4, value: 6.1 },
      { name: '同仁堂', rank: 5, value: 3.8 },
      { name: '其他', rank: 6, value: 1.9 },
    ],
  },
};

const ASTRAZENECA = {
  industry: '跨国药企',
  brand: '阿斯利康',
  brandId: 'astrazeneca',
  logoSrc: '/images/client-health-astrazeneca.png',
  product: '英飞凡® / 英卓凡®',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-5.png'],
  summary:
    '面对肿瘤创新药在 AI 端被竞品适应症话术分流的情况，项目协助阿斯利康完成肝癌双免等核心诊疗问法的内容布局，英飞凡®、英卓凡®在一线治疗推荐中的提及深度与位次明显提升，为后续品种在 AI 渠道的持续占领打下基础。',
  ranking: {
    metric: 'Top1提及率',
    unit: '%',
    items: [
      { name: '阿斯利康', rank: 1, value: 32.1, self: true },
      { name: '罗氏', rank: 2, value: 17.4 },
      { name: '默沙东', rank: 3, value: 11.8 },
      { name: '施贵宝', rank: 4, value: 7.6 },
      { name: '辉瑞', rank: 5, value: 4.5 },
      { name: '其他', rank: 6, value: 2.8 },
    ],
  },
};

const SANJIU_OVERVIEW = [
  { label: '提及率', value: '40.6%', before: '36.8%' },
  { label: 'Top 1 提及率', value: '22.4%', before: '13.7%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.4' },
];

const ASTRAZENECA_OVERVIEW = [
  { label: '提及率', value: '65.2%', before: '30.4%' },
  { label: 'Top 1 提及率', value: '32.1%', before: '12.1%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.5' },
];

export default function Page_CaseStudy_Double_Combined_Health_Sanjiu() {
  return (
    <SlideLayout title="服务案例">
      <div className="w-full h-full flex flex-col justify-start relative z-10 select-none">
        <div className="w-full flex-grow flex gap-6 items-stretch min-h-0 mb-0">
          <DoubleColumnB data={SANJIU} overview={SANJIU_OVERVIEW} />
          <DoubleColumnB data={ASTRAZENECA} overview={ASTRAZENECA_OVERVIEW} />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_CaseStudy_Double_Combined_Health_Sanjiu.hideHeader = true;
