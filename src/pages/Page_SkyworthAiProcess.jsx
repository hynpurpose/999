import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthAiProcess() {
  return (
    <SlideLayout
      title={
        <div className="flex items-center gap-6">
          <span className="w-[72px] h-[72px] rounded-full bg-zinc-800 text-white font-['Montserrat'] text-[42px] font-bold flex items-center justify-center shrink-0">1</span>
          <span>穷举与拆解大问题</span>
        </div>
      }
    >
      {/* ── 主流程泳道图区域 (高度拉伸至 705px, 底部抵住 content bottom) ── */}
      <div 
        className="absolute w-[1840px] select-none animate-fadeIn"
        style={{ top: '90px', height: '705px' }}
      >
        {/* ==================== SVG 流程导向箭头 ==================== */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <defs>
            {/* Right Arrow Marker */}
            <marker id="arrowRight" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#52525B" />
            </marker>
            {/* Left Arrow Marker */}
            <marker id="arrowLeft" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#52525B" />
            </marker>
          </defs>

          {/* Arrow 1: User Question -> AI Model Step 1 */}
          <path
            d="M 460 110 H 530"
            fill="none"
            stroke="#52525B"
            strokeWidth="2.5"
            markerEnd="url(#arrowRight)"
            className="opacity-80"
          />

          {/* Arrow 2: AI Model Queries -> Search Tool */}
          <path
            d="M 960 265 H 1370"
            fill="none"
            stroke="#52525B"
            strokeWidth="2.5"
            markerEnd="url(#arrowRight)"
            className="opacity-80"
          />

          {/* Arrow 3: Search Tool -> AI Model Step 2 (Point to y=480 center of shifted Step 2) */}
          <path
            d="M 1380 340 C 1250 340, 1150 480, 1070 480"
            fill="none"
            stroke="#52525B"
            strokeWidth="2.5"
            markerEnd="url(#arrowLeft)"
            className="opacity-80"
          />

          {/* Arrow 5: AI Model Output -> User Answer (Point to y=642 center of shifted Bottom Card) */}
          <path
            d="M 540 642 H 470"
            fill="none"
            stroke="#52525B"
            strokeWidth="2.5"
            markerEnd="url(#arrowLeft)"
            className="opacity-80"
          />
        </svg>

        {/* ==================== 泳道分割线 (与时间轴线对齐) ==================== */}
        <div className="absolute left-[540px] top-[-40px] bottom-[0px] w-[1px] bg-zinc-800" />
        <div className="absolute left-[1380px] top-[-40px] bottom-[0px] w-[1px] bg-zinc-800" />

        {/* ==================== 泳道一：用户 (USER) ==================== */}
        <div className="absolute left-[0px] w-[500px] h-full">
          {/* Swimlane Title (Moved up 40px) */}
          <span className="absolute left-[80px] top-[-40px] text-[28px] font-black text-white font-['MiSans']">
            用户
          </span>

          {/* Vertical timeline line & Green active bar */}
          <div className="absolute left-[40px] top-[-40px] bottom-[0px] w-[2px] bg-zinc-800" />
          <div className="absolute left-[39px] top-[40px] h-[140px] w-[4px] bg-emerald-500 rounded-full" />
          <div className="absolute left-[39px] top-[580px] h-[125px] w-[4px] bg-emerald-500 rounded-full" />

          {/* User Top Card (Question) */}
          <div 
            className="absolute bg-[#0D0D10] border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col justify-center"
            style={{ left: '80px', top: '40px', width: '380px', height: '140px' }}
          >
            <p className="text-[22px] text-zinc-200 leading-relaxed font-sans font-medium">
              预算1万左右，想买一台适合客厅的高颜值电视，画质和音响都要好的，有推荐吗？
            </p>
          </div>

          {/* User Bottom Card (Answer - touches bottom) */}
          <div 
            className="absolute bg-[#0D0D10] border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col justify-center"
            style={{ left: '80px', top: '580px', width: '380px', height: '125px' }}
          >
            <p className="text-[22px] text-zinc-300 leading-relaxed font-sans">
              结合您的需求，推荐以下品牌和产品：...... <span className="text-zinc-550 font-mono">(具体推荐内容)</span>
            </p>
          </div>
        </div>

        {/* ==================== 泳道二：AI模型 ==================== */}
        <div className="absolute left-[500px] w-[840px] h-full">
          {/* Swimlane Title (Moved up 40px) */}
          <span className="absolute left-[80px] top-[-40px] text-[28px] font-black text-white font-['MiSans']">
            AI模型（豆包、Deepseek...）
          </span>

          {/* Vertical timeline line & Purple active bar */}
          <div className="absolute left-[39px] top-[30px] bottom-[0px] w-[4px] bg-violet-500 rounded-full" />

          {/* Step 1: Query Expansion */}
          <div 
            className="absolute flex items-start"
            style={{ left: '80px', top: '30px', width: '680px' }}
          >
            {/* Purple Icon */}
            <div className="w-10 h-10 rounded-lg bg-violet-950/45 border border-violet-850 flex items-center justify-center mr-4 shrink-0 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L12 12L18 18" />
                <path d="M6 12H12" />
                <path d="M18 12H12" />
              </svg>
            </div>
            <div>
              <h4 className="text-[24px] font-bold text-white font-['MiSans']">第一步，查询扩展</h4>
              <p className="text-[22px] text-zinc-400 mt-1 font-sans">拆分用户问题，生成多个具体搜索问题</p>
            </div>
          </div>

          {/* Step 1: Sub-card (Generated Queries) */}
          <div 
            className="absolute bg-[#0D0D10]/90 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col justify-center"
            style={{ left: '80px', top: '140px', width: '380px', height: '250px' }}
          >
            <ul className="flex flex-col gap-2.5 text-[22px] text-zinc-300 font-['MiSans'] font-medium">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
                <span>1万预算电视推荐</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
                <span>高颜值电视推荐</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
                <span>适合客厅装修的电视</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
                <span>画质音响好的电视</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
                <span>壁纸电视推荐</span>
              </li>
            </ul>
          </div>

          {/* Step 2: Initial Retrieval (Shifted down by 30px, top: 440px) */}
          <div 
            className="absolute flex items-start"
            style={{ left: '80px', top: '440px', width: '680px' }}
          >
            {/* Purple Icon */}
            <div className="w-10 h-10 rounded-lg bg-violet-950/45 border border-violet-850 flex items-center justify-center mr-4 shrink-0 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div>
              <h4 className="text-[24px] font-bold text-white font-['MiSans']">第二步，初始检索</h4>
              <p className="text-[22px] text-zinc-400 mt-1 font-sans leading-relaxed">
                围绕拆分出的问题，检索相关信息，判断信息的可信度和适用性
              </p>
            </div>
          </div>

          {/* Step 3: Synthesis & Output (Shifted down by 30px, top: 580px) */}
          <div 
            className="absolute flex items-start"
            style={{ left: '80px', top: '580px', width: '680px' }}
          >
            {/* Purple Icon */}
            <div className="w-10 h-10 rounded-lg bg-violet-950/45 border border-violet-850 flex items-center justify-center mr-4 shrink-0 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div>
              <h4 className="text-[24px] font-bold text-white font-['MiSans']">第三步，综合输出</h4>
              <p className="text-[22px] text-zinc-400 mt-1 font-sans leading-relaxed">
                整理检索信息，生成最终答案，推荐具体品牌和产品
              </p>
            </div>
          </div>
        </div>

        {/* ==================== 泳道三：搜索工具 ==================== */}
        <div className="absolute left-[1340px] w-[500px] h-full">
          {/* Swimlane Title (Moved up 40px) */}
          <span className="absolute left-[80px] top-[-40px] text-[28px] font-black text-white font-['MiSans']">
            搜索工具（百度、Bing...）
          </span>

          {/* Vertical timeline line & Blue active bar */}
          <div className="absolute left-[39px] top-[250px] h-[150px] w-[4px] bg-sky-500 rounded-full" />

          {/* Search Card */}
          <div 
            className="absolute flex flex-col justify-center"
            style={{ left: '80px', top: '260px', width: '380px' }}
          >
            {/* Blue Search Icon */}
            <div className="w-12 h-12 rounded-full bg-sky-950/45 border border-sky-800 flex items-center justify-center mb-3 shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <path d="M11 6a5 5 0 0 1 5 5" />
              </svg>
            </div>
            <h4 className="text-[24px] font-bold text-white font-['MiSans']">在检索系统中搜索</h4>
            <p className="text-[22px] text-zinc-400 mt-1 font-sans">相关信息</p>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SkyworthAiProcess.hideHeader = true;
