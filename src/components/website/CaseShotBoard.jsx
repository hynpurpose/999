import React from 'react';

/* 桃李官网诊断案例的合并页共用版式：
   左侧是原报告页面的缩略图（每张配一句「这页在证明什么」），
   右侧是把这一组页面讲清楚的文字栏。
   缩略图素材由 scripts/shot-web-case.mjs 生成到 public/web-case/。 */

function ShotCard({ index, src, caption }) {
  return (
    <div className="min-w-0 min-h-0 flex flex-col">
      <div className="flex-1 min-h-0 rounded-[14px] overflow-hidden border border-white/[0.14] bg-black shadow-[0_12px_36px_rgba(0,0,0,0.45)]">
        <img src={src} alt={caption} className="w-full h-full object-contain" />
      </div>
      <div className="shrink-0 mt-2.5 flex items-baseline gap-2.5">
        <span className="shrink-0 text-[20px] font-bold text-[#4C8DFF] leading-[28px] font-['Montserrat']">
          {index}
        </span>
        <span className="text-[20px] text-white leading-[28px]">{caption}</span>
      </div>
    </div>
  );
}

function SummaryCell({ title, desc }) {
  return (
    <div className="min-w-0 min-h-0 rounded-[18px] border border-[#4C8DFF]/40 bg-[#4C8DFF]/[0.08] px-7 py-6 flex flex-col justify-center">
      <p className="text-[29px] font-bold text-[#4C8DFF] leading-[40px]">{title}</p>
      <p className="mt-4 text-[22px] text-white leading-[34px]">{desc}</p>
    </div>
  );
}

function NoteCard({ tag, title, desc }) {
  return (
    <div className="flex-1 min-h-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-7 py-5 flex flex-col justify-center">
      <span className="self-start rounded-full bg-[#004CE5]/20 border border-[#4C8DFF]/40 px-4 py-1 text-[18px] font-bold text-[#4C8DFF] leading-none whitespace-nowrap">
        {tag}
      </span>
      <p className="mt-3.5 text-[27px] font-bold text-white leading-[36px]">{title}</p>
      <p className="mt-2.5 text-[20px] text-white leading-[30px]">{desc}</p>
    </div>
  );
}

export default function CaseShotBoard({ shots, summary, notes }) {
  return (
    <div className="w-full h-full flex gap-6 animate-fadeIn font-['MiSans']">
      <div className="flex-1 min-w-0 h-full grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-4">
        {shots.map((shot, i) => (
          <ShotCard
            key={shot.src}
            index={String(i + 1).padStart(2, '0')}
            src={shot.src}
            caption={shot.caption}
          />
        ))}
        {summary && <SummaryCell title={summary.title} desc={summary.desc} />}
      </div>

      <div className="w-[600px] shrink-0 h-full flex flex-col gap-4">
        {notes.map((note) => (
          <NoteCard key={note.tag} tag={note.tag} title={note.title} desc={note.desc} />
        ))}
      </div>
    </div>
  );
}
