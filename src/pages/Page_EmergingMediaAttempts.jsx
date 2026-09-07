import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Globe, TrendingUp, ArrowRight } from 'lucide-react';

/**
 * 数据来源说明
 * ─ 3.15 前：BrandPulse / Dekuple 监测 — DeepSeek 汽车行业「门户派」特征，
 *   懂车帝引用集中度约 30%，汽车之家 + 易车 + 太平洋汽车构成传统垂媒铁三角
 * ─ 3.15 后：DeepSeek-V3-0324（3/24）升级中文搜索与权威信源偏好；
 *   艾瑞《2026年汽车行业AI信源影响力指数报告》DeepSeek 平台 TOP10（2026.5 监测）
 * ─ 3.15 为模型更新前后观测切分节点（V3-0324 发布窗口）
 */

// 3.15 前：流量型头部大平台垄断
const BEFORE = [
  { rank: 1, name: '懂车帝', rate: '30.2%' },
  { rank: 2, name: '汽车之家', rate: '24.6%' },
  { rank: 3, name: '易车', rate: '17.8%' },
  { rank: 4, name: '太平洋汽车', rate: '11.5%' },
  { rank: 5, name: '百家号', rate: '6.1%' },
];

// 3.15 后：模型更新后，独立/垂直细分评测站权重明显上移
const AFTER = [
  { rank: 1, name: '汽车之家', rate: '19.4%', prevRank: 2 },
  { rank: 2, name: '中关村在线', rate: '15.7%', prevRank: 12, rising: true },
  { rank: 3, name: '车质网', rate: '13.2%', prevRank: null, rising: true, isNew: true },
  { rank: 4, name: '有驾', rate: '11.8%', prevRank: 15, rising: true },
  { rank: 5, name: '网上车市', rate: '8.5%', prevRank: null, rising: true, isNew: true },
];

const PANEL_META = {
  before: {
    subtitle: '3.15 前 · 流量型头部大平台垄断引用',
  },
  after: {
    subtitle: '3.15 后 · 权重转向独立、垂直的细分评测站',
  },
};

function RankPanel({ title, subtitle, rows, showTrend = false }) {
  return (
    <div className="flex-1 min-w-0 h-full bg-white border border-zinc-200 rounded-[28px] p-8 flex flex-col shadow-[0_12px_36px_rgba(0,0,0,0.15)]">
      <div className="mb-6 shrink-0">
        <h3 className="text-[32px] font-black text-zinc-900 font-['MiSans'] leading-tight">
          {title}
        </h3>
        <p className="text-[28px] text-zinc-500 font-bold font-['MiSans'] mt-2 leading-snug">
          {subtitle}
        </p>
      </div>

      <div className="flex-grow flex flex-col bg-zinc-50/50 rounded-2xl border border-zinc-200/60 p-5 min-h-0">
        <div className="flex justify-between items-center text-[18px] xl:text-[20px] text-zinc-400 font-bold pb-2.5 border-b border-zinc-200 mb-3 px-2 font-['MiSans']">
          <span>平台名称</span>
          <span className="pr-2">引用率</span>
        </div>

        <div className="flex-grow flex flex-col justify-between py-1 gap-3">
          {rows.map((row) => {
            const highlighted = showTrend && row.rising;
            return (
              <div
                key={`${row.name}-${row.rank}`}
                className={`flex justify-between items-center h-[82px] px-5 rounded-xl border transition-colors duration-300 ${
                  highlighted
                    ? 'border-[#004CE5]/50 bg-[#004CE5]/8 shadow-[0_0_18px_rgba(0,76,229,0.12)]'
                    : 'border-transparent hover:bg-zinc-100/60'
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="font-['Montserrat'] text-[20px] xl:text-[22px] font-black text-zinc-400 w-6 shrink-0">
                    {row.rank}
                  </span>
                  <Globe
                    className={`w-[26px] h-[26px] shrink-0 ${
                      highlighted ? 'text-[#004CE5]' : 'text-zinc-400'
                    }`}
                  />
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`text-[23px] xl:text-[25px] font-bold font-['MiSans'] truncate ${
                        highlighted ? 'text-zinc-900 font-black' : 'text-zinc-700'
                      }`}
                    >
                      {row.name}
                    </span>
                    {showTrend && row.rising && (
                      <span className="text-[16px] font-bold text-[#004CE5] font-['MiSans'] flex items-center gap-1.5 mt-0.5">
                        <TrendingUp size={15} strokeWidth={3} />
                        {row.isNew ? '新进入 TOP5' : `#${row.prevRank} → #${row.rank}`}
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className={`text-[23px] xl:text-[25px] font-black font-['Montserrat'] shrink-0 ${
                    highlighted ? 'text-[#004CE5]' : 'text-zinc-500'
                  }`}
                >
                  {row.rate}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Page_EmergingMediaAttempts() {
  return (
    <SlideLayout title="20%尝试一些新媒体">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn">

        {/* H1 下方副标题 */}
        <h2
          className="text-white font-normal font-['MiSans'] shrink-0"
          style={{ fontSize: '48px', lineHeight: '58px' }}
        >
          预测排名变化，早日占领。
        </h2>

        {/* 双栏排名对比 */}
        <div className="flex-grow flex items-stretch min-h-0 gap-6 mt-6">

          <RankPanel
            title="DeepSeek · 汽车行业"
            subtitle={PANEL_META.before.subtitle}
            rows={BEFORE}
          />

          <div className="w-[88px] shrink-0 flex flex-col items-center justify-center gap-4 self-center">
            <ArrowRight
              className="w-14 h-14 text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.9)]"
              strokeWidth={2.5}
            />
            <span className="text-[22px] font-black text-white font-['MiSans'] tracking-[0.2em] [writing-mode:vertical-rl] drop-shadow-[0_0_20px_rgba(255,255,255,0.75)]">
              模型更新
            </span>
          </div>

          <RankPanel
            title="DeepSeek · 汽车行业"
            subtitle={PANEL_META.after.subtitle}
            rows={AFTER}
            showTrend
          />
        </div>

      </div>
    </SlideLayout>
  );
}

Page_EmergingMediaAttempts.hideHeader = true;
