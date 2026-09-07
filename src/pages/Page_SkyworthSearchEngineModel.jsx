import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthSearchEngineModel() {
  const tableData = [
    {
      model: "ChatGPT",
      source: "Bing",
      degree: "较明确",
      isHighlighted: true
    },
    {
      model: "Google Gemini",
      source: "Google Search",
      degree: "明确",
      isHighlighted: true
    },
    {
      model: "Perplexity",
      source: "Perplexity 自有搜索索引",
      degree: "明确",
      isHighlighted: true
    },
    {
      model: "DeepSeek",
      source: "官方已上线联网搜索，但未见官方明确公开具体外部搜索引擎名称",
      degree: "只能确认有联网搜索，不能确认具体引擎",
      isHighlighted: false
    },
    {
      model: "豆包",
      source: "官方可确认有 AI 搜索/联网检索，但未见官方明确公开具体外部搜索引擎名称",
      degree: "只能确认有联网检索，不能确认具体引擎",
      isHighlighted: false
    },
    {
      model: "腾讯元宝",
      source: "可确认整合腾讯生态内容源；未见官方明确公开统一外部搜索引擎名称",
      degree: "能确认内容源类型，不能完全确认统一搜索引擎品牌",
      isHighlighted: false
    },
    {
      model: "阿里通义千问",
      source: "阿里云自家的联网搜索 / UnifiedSearch (IQS) 体系",
      degree: "较明确",
      isHighlighted: true
    },
    {
      model: "百度文心",
      source: "百度搜索",
      degree: "明确",
      isHighlighted: true
    }
  ];

  return (
    <SlideLayout
      title={
        <div className="flex items-center gap-6">
          <span className="w-[72px] h-[72px] rounded-full bg-blue-900/60 text-blue-300 border border-blue-800 text-[42px] font-bold font-['Montserrat'] flex items-center justify-center shrink-0">
            2
          </span>
          <span>模拟搜索引擎</span>
        </div>
      }
    >
      {/* ── 顶部核心机理说明面板 ── */}
      <div className="absolute top-[0px] left-0 w-full bg-[#09090b]/60 border border-zinc-900 rounded-2xl p-6 select-none z-10">
        <p className="text-[22px] leading-relaxed text-zinc-300 font-sans">
          <strong className="text-blue-400 font-extrabold text-[24px] font-['MiSans'] mr-2">核心机理：</strong>
          AI 模型同样依赖搜索引擎，但它们不经过网页，而是<strong className="text-white font-bold">直接调用底层 Search API</strong>，从而实现远超人类的检索抓取速度。但由于各大AI公司的技术与商业战略不同，其接入的底层搜索引擎也会不一样且部分不向公众披露细节。
        </p>
      </div>

      {/* ── 搜索来源对比表 (抵到最底部 bottom, 高度 580px) ── */}
      <div 
        className="absolute w-full select-none animate-fadeIn z-10"
        style={{ top: '155px', height: '640px' }}
      >
        <div className="w-full h-full bg-[#09090b]/80 border border-zinc-800 rounded-[24px] overflow-hidden shadow-2xl flex flex-col p-6">
          <table className="w-full h-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800/80 text-left">
                <th className="pb-4 pl-4 text-[24px] font-black text-white font-['MiSans'] w-[240px]">模型 / 产品</th>
                <th className="pb-4 text-[24px] font-black text-white font-['MiSans'] w-[940px]">公开可确认的搜索来源</th>
                <th className="pb-4 text-[24px] font-black text-white font-['MiSans'] w-[540px]">能确认的程度</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr 
                  key={index}
                  className={`border-b border-zinc-900/65 hover:bg-zinc-900/20 transition-all duration-150`}
                >
                  <td className="py-2.5 pl-4 text-[22px] font-bold text-white font-['MiSans']">
                    {row.model}
                  </td>
                  <td className="py-2.5 text-[20px] text-zinc-300 font-sans font-medium pr-12 leading-relaxed">
                    {row.source}
                  </td>
                  <td className="py-2.5 text-[20px] font-sans">
                    {row.isHighlighted ? (
                      <span className="text-blue-400 font-bold text-[22px]">{row.degree}</span>
                    ) : (
                      <span className="text-zinc-500 font-medium">{row.degree}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthSearchEngineModel.hideHeader = true;
