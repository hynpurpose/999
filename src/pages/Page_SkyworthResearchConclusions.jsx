import React from 'react';
import SlideLayout from '../components/SlideLayout';

const CHAPTERS = [
  {
    num: '1.',
    title: '壁纸电视 VS 常规电视',
    lead: '要不要买壁纸电视',
    points: [
      '买：85% 看重家居美学、极致薄贴墙',
      '不买：63% 接受不了高价低配',
      '顾虑：溢价、安装、音画妥协',
    ],
  },
  {
    num: '2.',
    title: '创维壁纸电视 VS 竞品壁纸电视',
    lead: '为什么买创维，不买别的品牌',
    points: [
      '创维：美学和音画都兼顾，产品线最全',
      '对照海信、TCL、长虹、三星、LG 的人群和优劣势',
    ],
  },
  {
    num: '3.',
    title: '创维五款壁纸电视的区别',
    lead: '买创维选哪一款',
    points: [
      'A 系列 · 线上高配置：A7H Pro / A8H / A10H',
      'Q 系列 · 线下高体验：Q7H / Q8H',
    ],
  },
];

export default function Page_SkyworthResearchConclusions() {
  const rings = [48, 168, 288, 408, 528];

  return (
    <SlideLayout title="品牌调研报告内容大纲">
      <div className="absolute top-[5px] left-0 w-full text-[22px] text-white font-bold font-['MiSans'] leading-relaxed select-none">
        报告按三层决策拆开：先选品类，再选品牌，最后选型号。
      </div>

      <div
        className="absolute w-[1640px] flex items-center justify-between select-none animate-fadeIn overflow-visible"
        style={{ top: '56px', left: '100px', height: '680px' }}
      >
        <div className="relative w-[620px] h-[680px] bg-gray-50 rounded-l-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] p-14 pr-16 flex flex-col justify-between border-r border-zinc-200 z-10 pl-10">
          <div className="absolute right-0 top-0 bottom-0 w-[40px] bg-gradient-to-l from-black/12 to-transparent pointer-events-none" />

          <div className="text-[18px] text-zinc-950 font-bold tracking-wider font-sans">
            5 July 2026
          </div>

          <div className="my-auto space-y-4">
            <h2 className="text-[64px] font-black text-zinc-950 font-sans leading-none tracking-wide">
              创维电视
            </h2>
            <h2 className="text-[42px] font-black text-zinc-950 font-sans leading-snug">
              品牌调研报告
            </h2>
          </div>

          <div className="text-[18px] text-zinc-950 font-bold font-sans">
            GEO 索引未来项目组
          </div>
        </div>

        {rings.map((y, idx) => (
          <div
            key={idx}
            className="absolute w-[18px] h-[48px] rounded-full border-[3px] border-zinc-300 bg-gradient-to-r from-zinc-400 via-zinc-150 to-zinc-400 shadow-md z-30"
            style={{ left: '611px', top: `${y}px` }}
          />
        ))}

        <div className="relative w-[1020px] h-[680px] bg-white rounded-r-3xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] px-16 py-10 pl-20 flex flex-col justify-between">
          <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-gradient-to-r from-black/12 to-transparent pointer-events-none" />

          <div className="flex-grow flex flex-col h-full justify-between">
            {CHAPTERS.map((item, idx) => (
              <div
                key={item.num}
                className={`flex-1 flex items-start py-5 pr-2 gap-5 ${
                  idx < CHAPTERS.length - 1 ? 'border-b border-zinc-200' : ''
                }`}
              >
                <span className="font-['Montserrat'] text-[42px] font-black text-[#004CE5] shrink-0 leading-none">
                  {item.num}
                </span>
                <div className="flex flex-col gap-2 min-w-0 pt-1">
                  <h3 className="text-[28px] font-black text-zinc-950 font-sans leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[20px] text-zinc-950 font-bold font-['MiSans'] leading-snug">
                    {item.lead}
                  </p>
                  <ul className="flex flex-col gap-1 mt-0.5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-[19px] text-zinc-950 font-normal font-['MiSans'] leading-[30px] pl-4 relative"
                      >
                        <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-zinc-950" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_SkyworthResearchConclusions.hideHeader = true;
