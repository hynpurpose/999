import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SOURCES = [
  { name: '京东', tag: '电商评价', glyph: '京', color: '#E1251B' },
  { name: '淘宝', tag: '电商评价', glyph: '淘', color: '#FF5000' },
  { name: '小红书', tag: '种草笔记', glyph: '书', color: '#FE2C55' },
  { name: 'B 站', tag: '测评视频', glyph: 'B', color: '#00AEEC' },
  { name: '抖音', tag: '短视频口碑', glyph: '抖', color: '#25F4EE', gradient: 'linear-gradient(135deg,#25F4EE,#FE2C55)' },
  { name: '知乎', tag: '深度讨论', glyph: '知', color: '#0084FF' },
];

const OUTPUTS = [
  { label: '购买理由', color: '#34D399', bg: 'rgba(52,211,153,0.10)', ring: 'rgba(52,211,153,0.40)' },
  { label: '核心顾虑', color: '#FBBF24', bg: 'rgba(251,191,36,0.10)', ring: 'rgba(251,191,36,0.40)' },
  { label: '真实吐槽', color: '#FB7185', bg: 'rgba(251,113,133,0.10)', ring: 'rgba(251,113,133,0.40)' },
  { label: '高频使用场景', color: '#5B8CFF', bg: 'rgba(91,140,255,0.10)', ring: 'rgba(91,140,255,0.40)' },
];

function FlowKeyframes() {
  return (
    <style>{`
      @keyframes brBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
    `}</style>
  );
}

function BrandBadge({ source, size = 38 }) {
  return (
    <span
      className="flex items-center justify-center rounded-[11px] shrink-0 font-black font-['MiSans'] text-white leading-none"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.5,
        background: source.gradient || source.color,
        boxShadow: `0 0 16px ${source.color}55`,
      }}
    >
      {source.glyph}
    </span>
  );
}

function LiveDot({ color = '#34D399', size = 10 }) {
  return (
    <span
      className="inline-block rounded-full shrink-0"
      style={{ width: size, height: size, background: color, boxShadow: `0 0 12px ${color}`, animation: 'brBlink 1.5s ease-in-out infinite' }}
    />
  );
}

function StepBadge({ n, color }) {
  return (
    <span
      className="flex items-center justify-center rounded-xl font-black font-['MiSans'] text-[22px] text-white shrink-0"
      style={{ width: 44, height: 44, background: color, boxShadow: `0 0 22px ${color}66` }}
    >
      {n}
    </span>
  );
}

export default function Page_UserCommentHow() {
  return (
    <SlideLayout title="用户评论分析系统怎么运作">
      <FlowKeyframes />
      <h2
        className="absolute top-0 left-0 text-white font-normal font-['MiSans']"
        style={{ fontSize: '40px', lineHeight: '52px', maxWidth: '1840px' }}
      >
        通过「大众真评」分析大量真实用户评论，找到消费者真正的购买理由、顾虑和吐槽，再反向指导内容。
      </h2>

      <div
        className="absolute left-0 w-full flex items-stretch select-none animate-fadeIn"
        style={{ top: '74px', height: '560px' }}
      >
        {/* 左：数据源 */}
        <div className="w-[440px] shrink-0 h-full flex flex-col justify-center gap-3">
          <span className="text-[#8DB0FF] font-['MiSans'] font-bold text-[20px] tracking-wide mb-1">数据来源 · 持续采集</span>
          {SOURCES.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between rounded-xl border border-[#5B8CFF]/30 bg-[#5B8CFF]/[0.08] px-5 py-3"
            >
              <div className="flex items-center gap-4 min-w-0">
                <BrandBadge source={s} />
                <span className="text-white font-bold font-['MiSans'] text-[22px]">{s.name}</span>
              </div>
              <span className="text-[#8DB0FF] font-['MiSans'] text-[16px]">{s.tag}</span>
            </div>
          ))}
        </div>

        <div className="relative shrink-0" style={{ width: 96 }}>
          <svg className="w-full h-full" viewBox="0 0 96 560" preserveAspectRatio="none" fill="none">
            {[95, 175, 255, 335, 415, 495].map((y, i) => (
              <path
                key={i}
                d={`M0 ${y} C 48 ${y}, 48 280, 96 280`}
                stroke="#5B8CFF"
                strokeWidth="2.5"
                strokeOpacity="0.5"
                strokeDasharray="8 8"
              />
            ))}
          </svg>
        </div>

        {/* 中：Agent 引擎 */}
        <div className="flex-1 h-full flex items-center justify-center px-2">
          <div className="relative w-full h-[440px] rounded-[30px] border border-[#2E6BFF]/50 bg-gradient-to-b from-[#0B2E80]/40 to-[#004CE5]/[0.06] shadow-[0_0_60px_-10px_rgba(0,76,229,0.5)] flex flex-col overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#5B8CFF] via-[#A78BFA] to-[#34D399]" />
            <div className="flex items-center gap-3 px-8 pt-7 pb-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2E6BFF] to-[#0B2E80] border border-blue-300/40 shadow-[0_0_24px_rgba(0,76,229,0.6)]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-white font-black font-['MiSans'] text-[28px] leading-tight">大众真评 Agent</span>
                <span className="text-blue-200/80 font-['MiSans'] text-[16px]">采集与分析引擎</span>
              </div>
              <span className="ml-auto flex items-center gap-2">
                <LiveDot color="#34D399" />
                <span className="text-emerald-300 font-['MiSans'] text-[16px]">RUNNING</span>
              </span>
            </div>

            <div className="flex-1 px-8 pb-8 flex flex-col justify-center gap-4">
              {[
                { n: 1, color: '#5B8CFF', t: '采集清洗', d: '增量抓取、去重、结构化入库' },
                { n: 2, color: '#A78BFA', t: 'AI 分析', d: '情感 / 意图识别与语义聚类' },
                { n: 3, color: '#F472B6', t: '净化去噪', d: '剔除水军、广告、无关与极端个例' },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-4 rounded-2xl border px-5 py-3.5" style={{ borderColor: `${s.color}44`, background: `${s.color}12` }}>
                  <StepBadge n={s.n} color={s.color} />
                  <div className="flex flex-col">
                    <span className="text-white font-bold font-['MiSans'] text-[22px] leading-tight">{s.t}</span>
                    <span className="text-zinc-400 font-['MiSans'] text-[16px]">{s.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative shrink-0" style={{ width: 96 }}>
          <svg className="w-full h-full" viewBox="0 0 96 560" preserveAspectRatio="none" fill="none">
            {[105, 215, 325, 435].map((y, i) => (
              <path
                key={i}
                d={`M0 280 C 48 280, 48 ${y}, 96 ${y}`}
                stroke={OUTPUTS[i].color}
                strokeWidth="2.5"
                strokeOpacity="0.6"
                strokeDasharray="8 8"
              />
            ))}
          </svg>
        </div>

        {/* 右：四类结论 */}
        <div className="w-[360px] shrink-0 h-full flex flex-col justify-center gap-3">
          <span className="text-emerald-300 font-['MiSans'] font-bold text-[20px] tracking-wide mb-1">自动提炼 · 四类洞察</span>
          {OUTPUTS.map((o) => (
            <div
              key={o.label}
              className="rounded-2xl border px-6 py-4"
              style={{ borderColor: o.ring, background: o.bg }}
            >
              <div className="flex items-center gap-3">
                <span className="inline-block rounded-full" style={{ width: 14, height: 14, background: o.color }} />
                <span className="font-black font-['MiSans'] text-[24px]" style={{ color: o.color }}>{o.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底：反向指导 GEO */}
      <div
        className="absolute left-0 w-full border-t border-zinc-800 pt-5 select-none"
        style={{ top: '668px' }}
      >
        <p className="text-[24px] text-zinc-300 font-['MiSans'] leading-relaxed">
          再把这些消费者真实反馈，反向用于 GEO 的
          <span className="text-white font-bold"> 卖点选择、内容方向和文章表达</span>。
        </p>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentHow.hideHeader = true;
