import React from 'react';
import SlideLayout from '../components/SlideLayout';

const PRIMARY = {
  step: '01',
  title: '品牌信息输入',
  color: '#7F22FE',
  img: '/capabilities/content-agent-module-brand-input.png',
};

const MODULES = [
  { step: '02', title: '设定目标用户', color: '#1ED9A1', img: '/capabilities/content-agent-module-target-user.png' },
  { step: '03', title: '生成文章大纲', color: '#0084D1', img: '/capabilities/content-agent-module-outline.png' },
  { step: '04', title: '产出完整内容', color: '#E17100', img: '/capabilities/content-agent-module-full-content.png' },
  { step: '05', title: '人工校验', color: '#EC0040', img: '/capabilities/content-agent-module-human-review.png' },
];

function ModuleImage({ src, alt, large = false }) {
  return (
    <div className={`flex-1 w-full min-h-0 flex items-center justify-center bg-black relative overflow-hidden ${large ? 'p-2' : 'p-1.5'}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling.style.display = 'flex';
        }}
      />
      <div className="hidden absolute inset-0 bg-black flex-col items-center justify-center p-4 text-center z-10">
        <div className={`rounded-full border border-white/20 flex items-center justify-center text-white mb-1 ${large ? 'w-10 h-10 mb-2' : 'w-6 h-6'}`}>
          📊
        </div>
        <span className={`text-white font-bold font-mono break-all px-2 ${large ? 'text-[12px] leading-normal px-4' : 'text-[10px]'}`}>
          待替换: {src}
        </span>
      </div>
    </div>
  );
}

function StepBadge({ step, large = false }) {
  return (
    <span
      className={`shrink-0 font-['Fira_Code','Courier_New',monospace] font-bold text-[#6366f1] bg-[#6366f1]/10 border border-[#6366f1]/25 rounded-md ${large ? 'text-[14px] px-2.5 py-1' : 'text-[12px] px-2 py-0.5'}`}
    >
      {step}
    </span>
  );
}

function ModuleCard({ step, title, color, img, large = false }) {
  return (
    <div
      className={`bg-white border border-[#6366f1]/20 flex flex-col justify-start items-stretch overflow-hidden shadow-[0_8px_30px_rgba(99,102,241,0.08)] ${large ? 'rounded-[20px]' : 'rounded-[16px]'}`}
    >
      <div
        className={`flex items-center gap-2.5 shrink-0 border-b border-[#6366f1]/15 ${large ? 'px-8 h-[88px] gap-3 bg-gradient-to-r from-[#f6f7fb] to-[#eef1f6]' : 'px-5 h-[68px] bg-[#f4f6fa]'}`}
      >
        <StepBadge step={step} large={large} />
        <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
        <div className={`font-black text-black font-['MiSans'] tracking-wide ${large ? 'text-[32px]' : 'text-[26px]'}`}>
          {title}
        </div>
      </div>
      <ModuleImage src={img} alt={title} large={large} />
    </div>
  );
}

export default function Page_ContentAgentModules() {
  return (
    <SlideLayout title="内容撰写Agent功能介绍" subtitle="CONTENT AGENT">
      <div className="absolute w-[520px] h-[520px] rounded-full bg-indigo-600/6 blur-[150px] -right-40 top-0 pointer-events-none" />
      <div className="absolute w-[480px] h-[480px] rounded-full bg-violet-900/5 blur-[130px] left-32 bottom-16 pointer-events-none" />

      <div className="w-full h-full pb-5 box-border flex flex-col gap-3 relative z-10 select-none min-h-0">
        <div className="shrink-0 flex items-center gap-3 px-1">
          <span className="text-[18px] font-bold text-white font-['MiSans'] tracking-[0.12em] uppercase">
            五步核心能力
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-[1.05fr_1fr] gap-3 items-stretch">
          <ModuleCard {...PRIMARY} large />

          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full min-h-0">
            {MODULES.map((m) => (
              <ModuleCard key={m.step} {...m} />
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_ContentAgentModules.hideHeader = true;
