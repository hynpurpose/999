import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * 主流 AI 模型版本变更（豆包 / DeepSeek / 千问 / 元宝 / 蚂蚁阿福）
 * 只记模型与产品版本节点，口径为各家官方发布，截至 2026.08
 */

const PLATFORMS = [
  {
    name: '豆包',
    vendor: '字节跳动',
    logo: '/ai-logos/doubao.png',
    current: '豆包 2.1 Pro',
    currentNote: 'Doubao-Seed-2.1',
    timeline: [
      { date: '2025.01', text: '豆包 1.5 Pro 发布，转向 MoE 架构' },
      { date: '2026.02', text: '豆包 2.0 发布，一次四款模型' },
      { date: '2026.04', text: '2.0 Lite 升级为全模态理解模型' },
      { date: '2026.06', text: '豆包 2.1 Pro / Turbo 发布，Agent 能力质变' },
    ],
    takeaway: 'Seed-Evolving 每月迭代 2～4 次，五家里换代最频繁。',
  },
  {
    name: 'DeepSeek',
    vendor: '深度求索',
    logo: '/ai-logos/deepseek.png',
    current: 'DeepSeek-V4-Pro',
    currentNote: '0813 正式版',
    timeline: [
      { date: '2025.09', text: 'V3.2-Exp 引入稀疏注意力，API 降价过半' },
      { date: '2025.12', text: 'V3.2 正式版，思考推理融入并强化 Agent' },
      { date: '2026.04', text: 'V4 预览版发布并开源，1M 上下文成标配' },
      { date: '2026.08', text: 'V4-Pro 正式版上线 App、网页与 API' },
    ],
    takeaway: '1M 上下文成为标配，一次能读完更长的原文。',
  },
  {
    name: '千问',
    vendor: '阿里巴巴',
    logo: '/ai-logos/qwen.png',
    current: 'Qwen3.8-Max',
    currentNote: '2.4T 参数 · 1M 上下文',
    timeline: [
      { date: '2026.01', text: 'Qwen3-Max-Thinking 发布，参数超万亿' },
      { date: '2026.05', text: 'Qwen3.7-Max 发布并连续迭代' },
      { date: '2026.07', text: 'Qwen3.8-Max-Preview 开放，2.4T 参数' },
      { date: '2026.08', text: 'Qwen3.8-Max 上线千问 App，全量免费' },
    ],
    takeaway: '约三个月一代，最新旗舰已对全量用户免费开放。',
  },
  {
    name: '元宝',
    vendor: '腾讯混元',
    logo: '/ai-logos/yuanbao.png',
    current: '混元 Hy3',
    currentNote: '295B MoE · 256K 上下文',
    timeline: [
      { date: '2025.03', text: '元宝上线快思考模型混元 Turbo S' },
      { date: '2025.11', text: '混元 HY 2.0 发布，分快慢思考两版' },
      { date: '2026.04', text: 'Hy3 preview 发布并开源，295B MoE' },
      { date: '2026.07', text: 'Hy3 正式版发布，元宝上线免费 Agent' },
    ],
    takeaway: '旧版模型 6 月全部下线，元宝主模型已切到 Hy3。',
  },
  {
    name: '蚂蚁阿福',
    vendor: '蚂蚁健康',
    logo: '/geo-platforms/afu.png',
    current: '蚂蚁医疗多模态大模型',
    currentNote: '五家中唯一医疗垂类',
    timeline: [
      { date: '2025.12', text: 'AQ 升级为「蚂蚁阿福」，App 改版' },
      { date: '2026.02', text: '上线长辈模式，支持十几种方言' },
      { date: '2026.06', text: '发起「科学减重 1 亿斤」行动' },
      { date: '2026.07', text: '上线 AI 拍饮食，健康档案加厚' },
    ],
    takeaway: '版本节奏跟的是产品功能，而不是模型参数。',
  },
];

function LogoBadge({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <span className="w-[40px] h-[40px] shrink-0 rounded-[10px] bg-white/15 flex items-center justify-center text-[17px] font-bold text-white">
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
    <span className="w-[40px] h-[40px] shrink-0 rounded-[10px] bg-white overflow-hidden flex items-center justify-center">
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        className="w-full h-full object-contain"
      />
    </span>
  );
}

function PlatformCard({ p }) {
  return (
    <div className="h-full min-w-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-5 py-6 flex flex-col">
      {/* 头部 */}
      <div className="shrink-0 h-[50px] flex items-center gap-2.5">
        <LogoBadge src={p.logo} name={p.name} />
        <div className="min-w-0">
          <p className="text-[26px] font-bold text-white leading-none whitespace-nowrap">{p.name}</p>
          <p className="mt-2 text-[16px] text-white leading-none whitespace-nowrap">{p.vendor}</p>
        </div>
      </div>

      {/* 当前主力版本 */}
      <div className="shrink-0 h-[122px] mt-5 rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-4 py-4 flex flex-col">
        <p className="text-[15px] font-bold text-[#4C8DFF] leading-none tracking-wide">当前主力版本</p>
        <p className="mt-3 text-[23px] font-bold text-white leading-tight">{p.current}</p>
        <p className="mt-2 text-[16px] text-white leading-none">{p.currentNote}</p>
      </div>

      {/* 版本变更时间线 */}
      <div className="flex-1 min-h-0 mt-6 relative pl-1">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15" />
        <div className="h-full flex flex-col justify-between">
          {p.timeline.map((item, idx) => (
            <div key={`${p.name}-${item.date}`} className="relative flex items-start gap-3">
              <span
                className={`relative z-10 mt-1.5 w-[15px] h-[15px] rounded-full border-[3px] shrink-0 ${
                  idx === p.timeline.length - 1
                    ? 'bg-white border-white'
                    : 'bg-[#0B0D19] border-white/40'
                }`}
              />
              <div className="min-w-0">
                <p className="text-[16px] font-bold tracking-wide leading-none font-['Montserrat'] text-white">
                  {item.date}
                </p>
                <p className="mt-2 text-[17px] text-white leading-[24px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 这一栏的小结 */}
      <div className="shrink-0 h-[116px] mt-6 rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-4 py-4 flex flex-col">
        <p className="text-[15px] font-bold text-[#4C8DFF] leading-none tracking-wide">怎么看</p>
        <p className="mt-2.5 text-[18px] text-white leading-[26px]">{p.takeaway}</p>
      </div>
    </div>
  );
}

export default function Page_ModelVersionChanges() {
  return (
    <SlideLayout title="主流AI模型版本变更" subtitle="半年之内，五家的主力模型全部换了一代">
      <div className="w-full h-full grid grid-cols-5 gap-4 select-none animate-fadeIn font-['MiSans']">
        {PLATFORMS.map((p) => (
          <PlatformCard key={p.name} p={p} />
        ))}
      </div>
    </SlideLayout>
  );
}

Page_ModelVersionChanges.hideHeader = true;
