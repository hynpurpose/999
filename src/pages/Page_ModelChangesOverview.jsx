import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * 近期国内主流模型 / 平台更新记录
 * 时间范围：2026.01 起；两排共 16 个可核验节点
 * highlight：本场讲解重点（对应后续单页展开的平台变化）
 */
const EVENTS = [
  // —— 第一排 ——
  {
    date: '2026.01',
    platform: '文心',
    logo: '/ai-logos/wenxin.png',
    title: '文心 5.0 正式发布',
    desc: '1/22：2.4T 原生全模态正式版上线',
  },
  {
    date: '2026.01',
    platform: 'Kimi',
    logo: '/ai-logos/kimi.png',
    title: 'K2.5 发布并开源',
    desc: '1/27：万亿 MoE，原生多模态 + Agent 集群',
  },
  {
    date: '2026.03',
    platform: '豆包',
    logo: '/ai-logos/doubao.png',
    title: '抖音电商站内闭环',
    desc: '对话内完成匹配到支付，无需跳转',
  },
  {
    date: '2026.04',
    platform: 'DeepSeek',
    logo: '/ai-logos/deepseek.png',
    title: 'V4 预览版发布并开源',
    desc: '4/24：1M 上下文成为标配，Agent 能力强化',
    highlight: true,
  },
  {
    date: '2026.04',
    platform: '小红书',
    logo: '/ai-logos/xhs.png',
    title: '成立 AI 一级部门 Dots',
    desc: '4/30：点点纳入核心 AI 体系',
  },
  {
    date: '2026.05',
    platform: '文心',
    logo: '/ai-logos/wenxin.png',
    title: '文心 5.1 正式发布',
    desc: '5/9：Search Arena 全球第四、国内第一',
    highlight: true,
  },
  {
    date: '2026.05',
    platform: '千问',
    logo: '/ai-logos/qwen.png',
    title: '与淘宝全面打通',
    desc: '5/11：对话内完成选品、对比与下单',
  },
  {
    date: '2026.06',
    platform: '千问',
    logo: '/ai-logos/qwen.png',
    title: '推出联网检索 Agent',
    desc: '6/30：智能改写、多轮检索、网页深度阅读',
    highlight: true,
  },
  // —— 第二排 ——
  {
    date: '2026.07',
    platform: '元宝',
    logo: '/ai-logos/yuanbao.png',
    title: 'Hy3 正式发布并接入元宝',
    desc: '7/6：Agent 搜索强化：检索、筛选、整合',
    highlight: true,
  },
  {
    date: '2026.07',
    platform: '千问',
    logo: '/ai-logos/qwen.png',
    title: '接入五大权威医学知识库',
    desc: '7/8：药监局全量说明书等，健康回答可溯源',
  },
  {
    date: '2026.07',
    platform: '元宝',
    logo: '/ai-logos/yuanbao.png',
    title: '接通京东全品类',
    desc: '7/15：京东 AI Agent 打通小程序，对话内可跳转下单',
  },
  {
    date: '2026.07',
    platform: 'Kimi',
    logo: '/ai-logos/kimi.png',
    title: 'K3 发布：开源第一',
    desc: '7/17：AA 智能指数全球第三，48 小时算力「熔断」限购',
  },
  {
    date: '2026.07',
    platform: '豆包',
    logo: '/ai-logos/doubao.png',
    title: '豆包改版',
    desc: '网页端信源重构后抖音占比走高；视频读取偏重头尾',
    highlight: true,
  },
  {
    date: '2026.07',
    platform: 'DeepSeek',
    logo: '/ai-logos/deepseek.png',
    title: 'V4-Flash 正式版',
    desc: '7/31：上线首周调用量登顶全球第一',
  },
  {
    date: '2026.08',
    platform: 'DeepSeek',
    logo: '/ai-logos/deepseek.png',
    title: '重启第二轮 500 亿融资',
    desc: '8/5：投前估值 5000 亿，8/10 完成首批签约',
  },
  {
    date: '2026.08',
    platform: '千问',
    logo: '/ai-logos/qwen.png',
    title: '接入苹果 Apple 智能',
    desc: '8/8：苹果官网确认，Siri 与写作工具可调用千问',
  },
];

const ROW1 = EVENTS.slice(0, 8);
const ROW2 = EVENTS.slice(8, 16);

function EventCard({ ev }) {
  return (
    <div
      className={`rounded-[16px] px-3.5 py-[18px] flex flex-col min-h-[214px] ${
        ev.highlight
          ? 'border border-[#4C8DFF]/60 bg-[#004CE5]/[0.16]'
          : 'border border-white/[0.08] bg-[#0B0D19]/45'
      }`}
    >
      <div className="shrink-0 flex items-center gap-2 min-h-[36px]">
        <img
          src={ev.logo}
          alt={ev.platform}
          className="w-9 h-9 rounded-lg object-cover shrink-0"
        />
        <span
          className={`text-[15px] font-bold tracking-wide leading-tight ${
            ev.highlight ? 'text-[#4C8DFF]' : 'text-white/45'
          }`}
        >
          {ev.platform}
        </span>
      </div>

      <p className="shrink-0 mt-3.5 h-[44px] text-[17px] font-bold text-white leading-[22px]">
        {ev.title}
      </p>

      <p
        className={`mt-3 h-[54px] text-[15px] leading-[18px] ${
          ev.highlight ? 'text-white/75' : 'text-white/45'
        }`}
      >
        {ev.desc}
      </p>
    </div>
  );
}

function TimelineRow({ events }) {
  return (
    <div className="relative shrink-0 px-1 mt-5">
      <div className="absolute left-[6%] right-[6%] top-[10px] h-[2px] bg-white/15 rounded-full" />
      <div className="grid grid-cols-8 gap-2.5 relative z-10">
        {events.map((ev, idx) => (
          <div key={`node-${ev.date}-${ev.title}-${idx}`} className="flex flex-col items-center gap-2">
            <div
              className={`w-[18px] h-[18px] rounded-full border-[3px] ${
                ev.highlight
                  ? 'bg-[#4C8DFF] border-[#4C8DFF] shadow-[0_0_0_5px_rgba(76,141,255,0.18)]'
                  : 'bg-[#0B0D19] border-white/25'
              }`}
            />
            <span
              className={`text-[15px] font-bold tracking-wide font-['Montserrat'] ${
                ev.highlight ? 'text-[#4C8DFF]' : 'text-white/40'
              }`}
            >
              {ev.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page_ModelChangesOverview() {
  return (
    <SlideLayout title="近期主流模型更新记录">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">

        <p className="shrink-0 text-[22px] text-white/55 leading-snug mb-4">
          2026 年 1 月起国内关键节点 · 蓝色标记为本场讲解重点
        </p>

        <div className="flex-1 min-h-0 flex flex-col justify-center gap-[72px]">
          {/* 第一排 */}
          <div className="flex flex-col shrink-0">
            <div className="grid grid-cols-8 gap-2.5">
              {ROW1.map((ev, idx) => (
                <EventCard key={`r1-${idx}`} ev={ev} />
              ))}
            </div>
            <TimelineRow events={ROW1} />
          </div>

          {/* 第二排 */}
          <div className="flex flex-col shrink-0">
            <div className="grid grid-cols-8 gap-2.5">
              {ROW2.map((ev, idx) => (
                <EventCard key={`r2-${idx}`} ev={ev} />
              ))}
            </div>
            <TimelineRow events={ROW2} />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_ModelChangesOverview.hideHeader = true;
