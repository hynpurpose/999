import React from 'react';
import SlideLayout from '../components/SlideLayout';

const EMP = 'font-bold underline decoration-[#004CE5] decoration-2 underline-offset-8';

function PageSubtitle() {
  return (
    <div className="absolute top-[5px] left-0 w-full text-[22px] text-white font-medium font-['MiSans'] leading-relaxed">
      海量评论经 <span className={EMP}>AI 逐条分析</span>，提纯为<span className={EMP}>结构化口碑数据</span>。
    </div>
  );
}

const SHOTS = [
  { src: '/user-comment/overview.png', label: '数据总览', color: '#004CE5' },
  { src: '/user-comment/compare.png', label: '商品横向对比', color: '#1ED9A1' },
  { src: '/user-comment/sentiment.png', label: '好评 / 差评分布', color: '#7F22FE' },
  { src: '/user-comment/voices.png', label: '用户之声 VOC', color: '#E17100' },
  { src: '/user-comment/dimensions.png', label: '卖点维度', color: '#EC0040' },
  { src: '/user-comment/fake.png', label: '刷评识别', color: '#0084D1' },
];

function CommentCard({ step, label, src, color }) {
  return (
    <div
      className="bg-white border border-zinc-200 flex flex-col justify-start items-stretch overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-xl"
      style={{ width: 576, height: 360 }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 h-[62px] bg-[#f4f6fa] border-b border-zinc-200/80 shrink-0">
        {/* StepBadge */}
        <span
          className="shrink-0 font-mono font-bold text-zinc-550 bg-zinc-200/60 border border-zinc-300 rounded px-2 py-0.5 text-[12px]"
        >
          {step}
        </span>
        {/* Dot */}
        <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
        {/* Title */}
        <div className="font-extrabold text-black font-['MiSans'] tracking-wide text-[22px]">
          {label}
        </div>
      </div>
      {/* Image Content */}
      <div className="flex-1 w-full min-h-0 bg-black flex items-center justify-center p-1.5 relative overflow-hidden">
        <img
          src={src}
          alt={label}
          className="w-full h-full object-contain"
          draggable={false}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling.style.display = 'flex';
          }}
        />
        <div className="hidden absolute inset-0 bg-black flex-col items-center justify-center p-4 text-center z-10">
          <div className="rounded-full border border-white/20 w-6 h-6 flex items-center justify-center text-white/40 mb-1">
            📊
          </div>
          <span className="text-white/45 font-mono text-[10px] break-all px-2">
            待替换: {src}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Page_UserCommentArchitecture() {
  return (
    <SlideLayout title="用户评论分析系统架构">
      <PageSubtitle />

      <div className="absolute left-0 top-[76px] w-full h-[720px] flex items-center justify-center font-['MiSans'] select-none">
        <div className="grid grid-cols-3 gap-6">
          {SHOTS.map((m, idx) => (
            <CommentCard
              key={m.src}
              step={String(idx + 1).padStart(2, '0')}
              label={m.label}
              src={m.src}
              color={m.color}
            />
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

Page_UserCommentArchitecture.hideHeader = true;
