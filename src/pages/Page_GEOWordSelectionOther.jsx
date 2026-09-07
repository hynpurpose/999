import React, { useState } from 'react';
import { Image as ImageIcon, Search } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

const SEARCH_QUERY = '推荐几款好看的电视';

function BaiduSearchBox() {
  return (
    <div className="w-[420px] bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-zinc-200/80 flex items-center overflow-hidden shrink-0">
      <div className="flex items-center gap-2 pl-5 pr-3 py-3 flex-1 min-w-0">
        <span className="text-[#2932E1] font-black text-[18px] font-['MiSans'] shrink-0">百度</span>
        <span className="text-zinc-800 text-[20px] font-medium font-['MiSans'] truncate">{SEARCH_QUERY}</span>
      </div>
      <div className="h-full px-6 py-3.5 bg-[#3385FF] text-white text-[18px] font-bold font-['MiSans'] shrink-0 flex items-center">
        百度一下
      </div>
    </div>
  );
}

function XiaohongshuSearchBox() {
  return (
    <div className="w-[340px] bg-white rounded-full shadow-[0_8px_28px_rgba(0,0,0,0.3)] border border-[#FE2C55]/25 flex items-center overflow-hidden shrink-0">
      <div className="flex items-center gap-2 pl-4 pr-2 py-2.5 flex-1 min-w-0">
        <Search className="w-[18px] h-[18px] text-[#FE2C55] shrink-0" strokeWidth={2.5} />
        <span className="text-zinc-700 text-[17px] font-medium font-['MiSans'] truncate">{SEARCH_QUERY}</span>
      </div>
      <div className="w-9 h-9 mr-1.5 rounded-full bg-[#FE2C55] flex items-center justify-center shrink-0">
        <Search className="w-4 h-4 text-white" strokeWidth={2.5} />
      </div>
    </div>
  );
}

function SearchIndexDashboard() {
  const BAIDU_DATA = [
    { keyword: '电视机哪个品牌好', level: '高', volume: '27.3w' },
    { keyword: '现在电视机哪个品牌比较好', level: '高', volume: '23.1w' },
    { keyword: '大屏幕电视机哪个品牌好', level: '高', volume: '20.1w' },
    { keyword: '电视机品牌质量排行榜前十名', level: '高', volume: '13.1w' },
    { keyword: '电视机什么牌子的好质量好又好用', level: '中', volume: '4.8w' },
    { keyword: '电视品牌', level: '高', volume: '2.4w' },
    { keyword: 'chiq是什么牌子的电视', level: '高', volume: '1.5w' },
    { keyword: '十大名牌电视质量排名', level: '高', volume: '1.4w' },
    { keyword: '电视机牌子排名前十名', level: '高', volume: '1.3w' },
    { keyword: '电视机品牌哪个好', level: '中', volume: '8.2k' },
  ];

  const XIAOHONGSHU_DATA = [
    { keyword: '电视机推荐2026', tag: '泛需种草', volume: '18.5w' },
    { keyword: '电视选购攻略', tag: '购买决策', volume: '14.2w' },
    { keyword: '家装电视尺寸怎么选', tag: '场景搭配', volume: '11.8w' },
    { keyword: '壁挂电视隐藏线避坑', tag: '家装指南', volume: '9.6w' },
    { keyword: '适合打游戏的电视', tag: '人群细分', volume: '8.4w' },
    { keyword: '创维电视测评', tag: '品牌对比', volume: '7.2w' },
    { keyword: '客厅背景墙电视搭配', tag: '美观设计', volume: '5.8w' },
    { keyword: '75寸电视性价比之王', tag: '购买决策', volume: '4.5w' },
    { keyword: '护眼防蓝光电视推荐', tag: '健康护眼', volume: '3.9w' },
    { keyword: '电视能当显示器吗', tag: '功能科普', volume: '2.5w' },
  ];

  const getBaiduBadge = (level) => {
    if (level === '高') {
      return (
        <span className="px-2 py-0.5 rounded text-[11px] xl:text-[12px] font-bold bg-red-500/10 text-red-400 border border-red-500/20">
          高
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded text-[11px] xl:text-[12px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
        中
      </span>
    );
  };

  const getXhsBadge = (tag) => {
    const colors = {
      '泛需种草': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      '购买决策': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      '场景搭配': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      '家装指南': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      '人群细分': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      '品牌对比': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      '美观设计': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      '健康护眼': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
      '功能科普': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    };
    return (
      <span className={`px-2 py-0.5 rounded text-[11px] xl:text-[12px] font-bold border ${colors[tag] || 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'}`}>
        {tag}
      </span>
    );
  };

  return (
    <div className="w-full h-full flex gap-5 p-4 text-white font-sans bg-black/45 rounded-xl border border-zinc-800/80">
      {/* 百度营销 */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-[#3385FF] flex items-center justify-center text-white font-extrabold text-[12px] shadow-md shadow-blue-500/20">百</div>
          <span className="text-[17px] xl:text-[18px] font-bold text-white tracking-wide">百度营销数据概览</span>
        </div>
        <div className="text-[13px] xl:text-[14px] font-bold text-zinc-500 mb-2 pl-0.5">高频搜索词 (Top 10)</div>
        
        <div className="flex-grow min-h-0 flex flex-col justify-between border border-zinc-800/60 bg-zinc-950/50 rounded-xl p-3">
          <div className="flex text-zinc-500 text-[12px] font-bold border-b border-zinc-800/80 pb-1.5 px-1 mb-1.5 shrink-0">
            <span className="w-[60%] text-left">搜索词</span>
            <span className="w-[22%] text-center">竞争度</span>
            <span className="w-[18%] text-right">月均搜索</span>
          </div>
          <div className="flex-1 flex flex-col justify-between text-[13px] xl:text-[14px] min-h-0">
            {BAIDU_DATA.map((item, idx) => (
              <div key={idx} className="flex items-center hover:bg-white/[0.03] rounded py-0.5 px-1 transition-all duration-150">
                <span className="w-[60%] truncate text-zinc-200 pr-2">
                  <span className="font-mono text-zinc-600 font-semibold mr-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{idx + 1}.</span>
                  {item.keyword}
                </span>
                <span className="w-[22%] text-center flex items-center justify-center">{getBaiduBadge(item.level)}</span>
                <span className="w-[18%] text-right font-bold text-zinc-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.volume}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 小红书 */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-[#FE2C55] flex items-center justify-center text-white font-extrabold text-[12px] shadow-md shadow-red-500/20">书</div>
          <span className="text-[17px] xl:text-[18px] font-bold text-white tracking-wide">小红书数据概览</span>
        </div>
        <div className="text-[13px] xl:text-[14px] font-bold text-zinc-500 mb-2 pl-0.5">高频长尾搜索词 (Top 10)</div>

        <div className="flex-grow min-h-0 flex flex-col justify-between border border-zinc-800/60 bg-zinc-950/50 rounded-xl p-3">
          <div className="flex text-zinc-500 text-[12px] font-bold border-b border-zinc-800/80 pb-1.5 px-1 mb-1.5 shrink-0">
            <span className="w-[60%] text-left">搜索词</span>
            <span className="w-[22%] text-center">需求分类</span>
            <span className="w-[18%] text-right">预估热度</span>
          </div>
          <div className="flex-1 flex flex-col justify-between text-[13px] xl:text-[14px] min-h-0">
            {XIAOHONGSHU_DATA.map((item, idx) => (
              <div key={idx} className="flex items-center hover:bg-white/[0.03] rounded py-0.5 px-1 transition-all duration-150">
                <span className="w-[60%] truncate text-zinc-200 pr-2">
                  <span className="font-mono text-zinc-600 font-semibold mr-1.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{idx + 1}.</span>
                  {item.keyword}
                </span>
                <span className="w-[22%] text-center flex items-center justify-center">{getXhsBadge(item.tag)}</span>
                <span className="w-[18%] text-right font-bold text-zinc-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.volume}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AiSearchTransitionBadge() {
  return (
    <div className="shrink-0 flex flex-col items-center justify-center gap-4 z-30 px-1 translate-y-[56px]">
      <span className="text-[24px] font-black text-white font-['MiSans'] leading-none whitespace-nowrap px-5 py-3 rounded-full bg-[#004CE5] border-2 border-[#2E6BFF] shadow-[0_0_32px_rgba(46,107,255,0.65),0_4px_24px_rgba(0,0,0,0.5)]">
        AI搜索形式变了
      </span>
      <svg width="100" height="28" viewBox="0 0 100 28" fill="none" aria-hidden="true" className="drop-shadow-[0_0_12px_rgba(46,107,255,0.8)]">
        <path d="M0 14H76" stroke="#2E6BFF" strokeWidth="5" strokeLinecap="round" />
        <path d="M66 5L88 14L66 23" stroke="#2E6BFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Page_GEOWordSelectionOther() {
  const [phoneImgFailed, setPhoneImgFailed] = useState(false);
  const phoneImagePath = "/images/geo-word-selection-other-phone.png";

  return (
    <SlideLayout
      title="市场上其他做法"
      subtitle="关键词是怎么来的，也就是我们怎么判断这些词最接近真实用户在 AI 平台上的提问。"
    >
      {/* Background glowing effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[160px] -right-48 -top-48 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[140px] left-24 bottom-24 pointer-events-none" />

      {/* Main Container：左右双栏 */}
      <div className="w-full h-full flex items-stretch justify-between relative z-10 select-none">

        {/* 左侧：百度营销/小红书聚光月均搜索指数 */}
        <div className="w-[780px] h-full bg-[#09090b]/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)] shrink-0">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </div>
              <span className="text-[28px] font-black text-white leading-tight">百度营销/小红书聚光月均搜索指数</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow min-h-0 p-6 pb-4 bg-zinc-950 flex flex-col">
            <div className="flex-grow bg-transparent rounded-xl relative overflow-hidden flex items-stretch justify-stretch h-[620px]">
              <SearchIndexDashboard />
            </div>
          </div>

          {/* 卡片内数据来源：与右侧结论平齐 */}
          <div className="shrink-0 px-6 pb-5 pt-1 border-t border-zinc-900/80 bg-zinc-950 text-center">
            <span className="text-white text-[22px] font-sans font-bold font-['MiSans']">
              数据来源：百度广告、小红书聚光搜索指数
            </span>
          </div>
        </div>

        {/* 右侧：手机端真实搜索截图 */}
        <div className="w-[1020px] h-full bg-[#09090b]/90 border border-zinc-800 rounded-[28px] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.4)] shrink-0">
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900 bg-zinc-950 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#004CE5] flex items-center justify-center shadow-lg shadow-[#004CE5]/20">
                <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="text-white">
                  <path d="M22 78L78 22" stroke="currentColor" strokeWidth="10" strokeLinecap="square" />
                  <path d="M48 22H78V52" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M52 78H22V48" stroke="currentColor" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </div>
              <span className="text-[28px] font-black text-white leading-tight">AI 平台真实用户提问</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
              <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
            </div>
          </div>

          {/* Card Body */}
          <div className="flex-grow min-h-0 p-6 pb-4 bg-zinc-950 flex items-center justify-center gap-5 overflow-visible">
            {/* 传统搜索框示意：与手机同高，上下居中 */}
            <div className="flex flex-col items-center justify-center gap-8 shrink-0 w-[420px] h-[620px]">
              <div className="flex flex-col items-center gap-2">
                <span className="text-zinc-500 text-[15px] font-bold font-['MiSans'] tracking-wide">百度搜索</span>
                <BaiduSearchBox />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-zinc-500 text-[15px] font-bold font-['MiSans'] tracking-wide">小红书搜索</span>
                <XiaohongshuSearchBox />
              </div>
            </div>

            {/* 搜索框 → 手机：过渡标识 */}
            <AiSearchTransitionBadge />

            <div className="relative w-[304px] h-[620px] border-[8px] border-zinc-800 bg-zinc-950 rounded-[56px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden shrink-0">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-zinc-900 border border-zinc-800/80 ml-auto mr-4" />
              </div>

              {/* Screen Content */}
              <div className="absolute inset-0 z-10 w-full h-full bg-zinc-900 flex items-center justify-center p-1">
                {!phoneImgFailed ? (
                  <img
                    src={phoneImagePath}
                    alt="手机端真实搜索截图"
                    className="w-full h-full object-cover rounded-[46px]"
                    onError={() => setPhoneImgFailed(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-center p-6 gap-2">
                    <ImageIcon className="w-16 h-16 text-zinc-600 opacity-60" />
                    <span className="text-zinc-550 font-bold text-lg font-['MiSans']">
                      [ 手机端真实搜索截图 ]
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 卡片内结论：与百度搜索框居中对齐 */}
          <div className="shrink-0 px-6 pb-5 pt-1 border-t border-zinc-900/80 bg-zinc-950 flex items-center gap-5">
            <div className="flex-1 min-w-0 flex justify-center">
              <div className="w-[420px] text-center">
                <span className="text-white text-[22px] font-sans font-bold font-['MiSans']">
                  搜索逻辑变了，数据也变了
                </span>
              </div>
            </div>
            <div className="shrink-0 w-[200px]" aria-hidden="true" />
            <div className="w-[304px] shrink-0" aria-hidden="true" />
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}

Page_GEOWordSelectionOther.hideHeader = true;
