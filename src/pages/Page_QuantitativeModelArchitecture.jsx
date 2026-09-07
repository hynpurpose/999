import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_QuantitativeModelArchitecture() {
  const factors = [
    '内容结构因子', '平台权重因子', '引用偏好因子',
    '竞品提及因子', '时效热度因子', '语义匹配因子',
  ];

  return (
    <SlideLayout title="Alpha 模型运作逻辑">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        借鉴股票<span className="text-white font-bold">量化交易</span>：不靠拍脑袋，用<span className="text-white font-bold">因子模型</span>预测并追求跑赢竞品的<span className="text-white font-bold">超额提及率（Alpha）</span>。
      </div>

      <div className="absolute left-0 top-[50px] w-full h-[740px] border border-[#004CE5]/40 rounded-3xl bg-[#08080b]/50 p-8 shadow-[0_0_30px_rgba(0,76,229,0.15)] select-none font-['MiSans'] flex items-stretch gap-5">
        <div className="absolute -top-4 right-8 bg-black px-4 py-1 flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#004CE5] shadow-[0_0_10px_#004CE5]" />
          <span className="text-[24px] font-bold text-white tracking-wider">因子模型</span>
        </div>

        {/* 左：Alpha 因子库 */}
        <div className="w-[520px] shrink-0 flex flex-col">
          <div className="text-[20px] font-bold text-zinc-300 mb-4 flex items-center gap-2.5"><span className="w-1.5 h-5 bg-zinc-500 rounded-full" />Alpha 因子库</div>
          <div className="flex-1 grid grid-cols-2 gap-3.5">
            {factors.map((f) => (
              <div key={f} className="bg-[#111115] border border-white/10 rounded-xl flex items-center justify-center px-4 text-center">
                <span className="text-[22px] font-bold text-zinc-100">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 箭头 */}
        <div className="flex items-center shrink-0"><svg className="w-8 h-8 text-[#004CE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg></div>

        {/* 中：模型打分核心 */}
        <div className="w-[340px] shrink-0 flex flex-col">
          <div className="text-[20px] font-bold text-blue-400 mb-4 flex items-center gap-2.5"><span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />模型打分</div>
          <div className="flex-1 rounded-2xl bg-gradient-to-b from-[#003bb3] to-[#001430] border border-[#60A5FA]/40 shadow-[0_0_40px_rgba(0,76,229,0.3)] p-6 flex flex-col justify-between">
            <div className="text-center">
              <div className="text-[15px] font-bold text-blue-200/70 tracking-[0.25em]">SCORING CORE</div>
              <div className="text-[76px] font-black text-white leading-none mt-2 font-['Montserrat']">92<span className="text-[26px] text-blue-200/80 font-bold ml-1">分</span></div>
              <div className="text-[17px] text-blue-100/80 mt-1">当前选题综合潜力评分</div>
            </div>
            <div className="flex flex-col gap-3">
              {[['内容适配', '94'], ['平台匹配', '90'], ['竞争空位', '92']].map(([k, v]) => (
                <div key={k}>
                  <div className="flex justify-between text-[17px] mb-1">
                    <span className="text-blue-100/80 font-bold">{k}</span>
                    <span className="text-white font-black font-['Montserrat']">{v}</span>
                  </div>
                  <div className="h-2.5 w-full bg-black/30 rounded-full overflow-hidden">
                    <div className="h-full bg-[#7DB0FF] rounded-full" style={{ width: `${v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 箭头 */}
        <div className="flex items-center shrink-0"><svg className="w-8 h-8 text-[#004CE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg></div>

        {/* 右：超额提及率曲线 */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="text-[20px] font-bold text-zinc-300 mb-4 flex items-center gap-2.5"><span className="w-1.5 h-5 bg-[#004CE5] rounded-full" />超额提及率（Alpha）</div>
          <div className="flex-1 bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col">
            {/* 图例 */}
            <div className="flex items-center gap-6 mb-2 shrink-0">
              <div className="flex items-center gap-2"><span className="w-6 h-1.5 rounded-full bg-[#60A5FA]" /><span className="text-[16px] text-white font-bold">创维（模型驱动）</span></div>
              <div className="flex items-center gap-2"><span className="w-6 h-1.5 rounded-full bg-zinc-500" /><span className="text-[16px] text-zinc-400 font-bold">竞品（经验驱动）</span></div>
            </div>
            <svg viewBox="0 0 480 300" className="w-full flex-1" preserveAspectRatio="none">
              <defs>
                <linearGradient id="alphaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* 网格 */}
              {[30, 85, 140, 195, 250].map((y) => (
                <line key={y} x1="50" y1={y} x2="460" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              ))}
              {/* y 轴刻度 */}
              {[['30', '80%'], ['140', '40%'], ['250', '0%']].map(([y, t]) => (
                <text key={y} x="40" y={Number(y) + 5} fill="#71717a" fontSize="13" textAnchor="end" fontFamily="Montserrat">{t}</text>
              ))}
              {/* Alpha 区域填充 */}
              <path d="M50,158 130,140 210,122 290,107 370,94 450,83 L450,151 370,153 290,153 210,155 130,158 50,162 Z" fill="url(#alphaFill)" />
              {/* 创维线 */}
              <polyline points="50,158 130,140 210,122 290,107 370,94 450,83" fill="none" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* 竞品线 */}
              <polyline points="50,162 130,158 210,155 290,153 370,153 450,151" fill="none" stroke="#71717a" strokeWidth="3" strokeDasharray="6 5" strokeLinecap="round" strokeLinejoin="round" />
              {/* 端点 */}
              <circle cx="450" cy="83" r="6" fill="#60A5FA" />
              <circle cx="450" cy="151" r="5" fill="#71717a" />
            </svg>
            <div className="shrink-0 mt-2 text-center text-[16px] text-zinc-400">
              两条曲线的<span className="text-[#60A5FA] font-bold">差距即 Alpha</span> —— 模型驱动带来的超额提及率增长
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModelArchitecture.hideHeader = true;
