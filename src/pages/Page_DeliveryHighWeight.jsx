import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { Globe, AlertTriangle } from 'lucide-react';

export default function Page_DeliveryHighWeight() {
  const leftTable = [
    { rank: 1, name: "抖音", rate: "23.1%", color: "#FF0050", badgeBg: "bg-[#FFC502]" },
    { rank: 2, name: "什么值得买社区", rate: "20.0%", color: "#E02424", badgeBg: "bg-[#D8DCE3]" },
    { rank: 3, name: "今日头条", rate: "14.5%", color: "#F04141", badgeBg: "bg-[#F1B584]" },
    { rank: 4, name: "IT之家", rate: "5.4%", color: "#3B82F6", isCustomIcon: true },
    { rank: 5, name: "搜狐网", rate: "4.7%", color: "#FF9900" }
  ];

  return (
    <SlideLayout title="50%投在精准高权重信源——什么是不准的？">
      {/* ── 背景设计 ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* ── 主排版区 (高度 795px) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn flex flex-col justify-between z-10 pl-0"
        style={{ top: '0px', height: '795px' }}
      >
        {/* ==================== 三栏主体布局 (高度为 690px) ==================== */}
        <div className="w-full flex gap-6 items-stretch h-[690px] relative">

          {/* ==================== 1. 左栏：豆包引用来源 (440px，白底黑字，高内聚排版) ==================== */}
          <div className="w-[440px] h-full bg-white border border-zinc-200 rounded-[24px] p-6 flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative overflow-hidden group hover:border-blue-500/20 transition-colors">
            <div className="mb-5 shrink-0">
              <h3 className="text-[24px] font-black text-zinc-900 font-['MiSans'] tracking-wide">
                豆包引用来源
              </h3>
            </div>

            {/* 表格容器 */}
            <div className="flex-grow flex flex-col bg-zinc-50/50 rounded-2xl border border-zinc-200/60 p-4">
              <div className="flex justify-between items-center text-[16px] xl:text-[18px] text-zinc-400 font-bold pb-2.5 border-b border-zinc-200 mb-3 px-2">
                <span>平台名称</span>
                <span className="pr-2">引用率</span>
              </div>

              <div className="flex-grow flex flex-col justify-start gap-3 py-1.5">
                {leftTable.map((row, idx) => {
                  const isDouyin = row.name === "抖音";
                  return (
                    <div
                      key={idx}
                      className={`flex justify-between items-center h-[80px] px-4 rounded-xl border transition-all duration-300 ${isDouyin
                          ? "border-[#FF0050]/40 bg-[#FF0050]/5 shadow-[0_0_20px_rgba(255,0,80,0.06)]"
                          : "border-transparent hover:bg-zinc-100/60"
                        }`}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        {/* 排名 */}
                        <span className="font-['Montserrat'] text-[18px] xl:text-[20px] font-black text-zinc-400 w-5">
                          {row.rank}
                        </span>
                        {/* 图标 */}
                        {row.isCustomIcon ? (
                          <span className="w-[32px] h-[32px] bg-[#E02424] rounded-md flex items-center justify-center text-[12px] font-black text-white shrink-0 font-mono">
                            IT
                          </span>
                        ) : (
                          <Globe className={`w-[28px] h-[28px] shrink-0 ${isDouyin ? 'text-[#FF0050]' : 'text-zinc-400'}`} />
                        )}
                        {/* 名字 */}
                        <span className={`text-[20px] xl:text-[22px] font-bold font-['MiSans'] truncate ${isDouyin ? "text-zinc-900 font-black" : "text-zinc-700"}`}>
                          {row.name}
                        </span>
                      </div>
                      {/* 百分比 */}
                      <span className={`text-[20px] xl:text-[22px] font-black font-['Montserrat'] ${isDouyin ? "text-[#FF0050]" : "text-zinc-500 font-semibold"}`}>
                        {row.rate}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ==================== 2. 右侧：图片展示区 (1376px) ==================== */}
          <div className="w-[1376px] h-full rounded-[24px] overflow-hidden relative group">
            <img
              src="/charts/doubao_high_weight_analysis.png"
              alt="豆包引用与内容拆解"
              className="w-full h-full object-contain opacity-95 transition-opacity duration-500 group-hover:opacity-100"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            {/* 当图片加载失败时的占位 UI */}
            <div className="hidden flex-col items-center justify-center w-full h-full text-zinc-400 p-8 text-center animate-fadeIn bg-[#0B0D19]/45 border border-white/[0.06] rounded-[24px]">
              <div className="w-20 h-20 mb-6 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#0052FF]">
                <AlertTriangle size={40} />
              </div>
              <span className="text-[24px] font-black text-white tracking-widest uppercase">机制验证与拆解图表</span>
              <span className="text-[18px] mt-3 text-zinc-500 font-semibold max-w-[600px] leading-relaxed">
                请在 <code className="text-zinc-300 font-mono">public/charts/</code> 目录中放入图片 <code className="text-blue-400 font-mono">doubao_high_weight_analysis.png</code>。
                <br />
                该图应整合：1. 豆包对话模拟与真假信源列表验证；2. 引用的高粉丝账号拆解；3. 视频只解析字幕结论。
              </span>
            </div>
          </div>

        </div>

        {/* ==================== 原因总结横向 Banner (放置在主体卡片正下方，高度 76px) ==================== */}
        <div className="w-full h-[76px] bg-[#0052FF]/5 border border-[#0052FF]/20 rounded-[20px] px-8 flex items-center justify-between shrink-0 hover:border-[#0052FF]/40 transition-all duration-300 shadow-[0_0_25px_rgba(0,82,255,0.05)] mt-4">
          <div className="flex items-center gap-4">
            <div className="w-7 h-7 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/30 flex items-center justify-center shrink-0">
              <AlertTriangle size={15} className="text-[#0052FF]" />
            </div>
            <span className="text-[20px] xl:text-[22px] font-black text-white font-['MiSans'] leading-none">
              可能原因：AI不会耗费大量Token去读取视频，更像是字节内部的政治任务（倾斜自家抖音链接）
            </span>
          </div>
          <span className="text-[12px] text-zinc-500 font-bold font-['Montserrat'] tracking-widest leading-none">
            GEO INSIGHTS
          </span>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_DeliveryHighWeight.hideHeader = true;
