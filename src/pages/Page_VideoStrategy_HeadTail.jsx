import React from 'react';
import SlideLayout from '../components/SlideLayout';

const ACCENT = '#004CE5';

// 视频投放的三层决策：先定平台，再定预算分配，最后定内容结构。
// 每张卡底部配一条同高的分配示意条，三列视觉对齐。
const PILLARS = [
  {
    num: '01',
    field: '定平台',
    punch: '视频只押抖音',
    points: [
      '主流 AI 里只有豆包在大量引用抖音视频，其他平台的视频引用仍然很少',
      '视频预算集中在抖音，其他平台继续以文章类内容为主',
    ],
    bar: {
      items: [
        { label: '抖音 · 视频主投', grow: 70, on: true },
        { label: '其他平台', grow: 30, on: false },
      ],
      legend: '视频预算的平台分配',
    },
  },
  {
    num: '02',
    field: '定预算',
    punch: '不把预算全压在高粉丝账号',
    points: [
      '豆包引用抖音基本不看粉丝量，中小账号同样会被正常引用',
      '高粉账号按需保留做品牌背书，其余预算铺到更多条数、覆盖更多词条',
    ],
    bar: {
      items: [
        { label: '对口中小账号 · 铺量', grow: 70, on: true },
        { label: '高粉背书', grow: 30, on: false },
      ],
      legend: '抖音内部的账号分配',
    },
  },
  {
    num: '03',
    field: '定结构',
    punch: '核心信息压在头尾',
    points: [
      '豆包读抖音视频只读得进头尾，中段会被选择性省略',
      '要被 AI 读到的信息全部前置和收尾，中段只放演示过程',
    ],
    bar: {
      items: [
        { label: '头', grow: 26, on: true },
        { label: '中段 · 会被省略', grow: 45, on: false },
        { label: '尾', grow: 29, on: true },
      ],
      legend: '60 秒成片里豆包读得到的部分',
    },
  },
];

function AllocBar({ items, legend }) {
  return (
    <div className="shrink-0 mt-auto pt-5">
      <div className="flex items-stretch gap-1.5">
        {items.map((it) => (
          <div
            key={it.label}
            className="min-w-0 h-[46px] rounded-[8px] flex items-center justify-center px-1"
            style={{
              flexGrow: it.grow,
              flexBasis: 0,
              backgroundColor: it.on ? 'rgba(0,76,229,0.60)' : 'rgba(255,255,255,0.06)',
              border: it.on ? '1px solid rgba(76,141,255,0.7)' : '1px dashed rgba(255,255,255,0.16)',
            }}
          >
            <span className="truncate text-[19px] font-bold text-white">
              {it.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 text-[18px] font-bold text-white">{legend}</div>
    </div>
  );
}

export default function Page_VideoStrategy_HeadTail() {
  return (
    <SlideLayout title="视频投放策略">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">
        <div className="shrink-0 h-[104px] rounded-[16px] border border-[#4C8DFF]/30 bg-[#004CE5]/[0.12] px-7 flex items-center gap-6">
          <span
            className="shrink-0 px-3 py-1.5 rounded text-white text-[17px] font-bold tracking-wide"
            style={{ backgroundColor: ACCENT }}
          >
            前提
          </span>
          <p className="text-[28px] text-white font-bold leading-snug">
            视频这条线目前只有豆包在大量引用抖音
          </p>
          <span className="shrink-0 text-[26px] text-white font-bold">→</span>
          <p className="text-[28px] text-white font-bold leading-snug">
            所以我们把视频集中投抖音，并按豆包的引用规律来做
          </p>
        </div>

        <div className="flex-1 min-h-0 mt-5 grid grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="min-w-0 flex flex-col rounded-[24px] border border-white/[0.10] bg-[#0B0D19]/45 overflow-hidden"
            >
              <div className="shrink-0 h-[126px] px-7 border-b border-white/[0.08] bg-[#004CE5]/[0.10] flex items-center gap-4">
                <span
                  className="shrink-0 w-[56px] h-[56px] rounded-[12px] text-white text-[24px] font-bold flex items-center justify-center font-['Montserrat']"
                  style={{ backgroundColor: ACCENT }}
                >
                  {p.num}
                </span>
                <div className="min-w-0">
                  <div className="text-[18px] font-bold text-[#004CE5] tracking-[0.1em]">
                    {p.field}
                  </div>
                  <h2 className="mt-1.5 text-[29px] font-bold text-white leading-tight">
                    {p.punch}
                  </h2>
                </div>
              </div>

              <div className="flex-1 min-h-0 px-7 py-6 flex flex-col">
                <div className="flex-1 min-h-0 flex flex-col justify-start gap-8">
                  {p.points.map((text) => (
                    <div key={text} className="flex items-start gap-4">
                      <span className="mt-[15px] shrink-0 w-2.5 h-2.5 rounded-full bg-[#4C8DFF]" />
                      <p className="text-[30px] font-medium text-white leading-snug">{text}</p>
                    </div>
                  ))}
                </div>

                <AllocBar items={p.bar.items} legend={p.bar.legend} />
              </div>
            </div>
          ))}
        </div>

        <div className="shrink-0 h-[92px] mt-5 rounded-[16px] border border-white/[0.10] bg-white/[0.04] px-7 flex items-center gap-6">
          <span
            className="shrink-0 px-3 py-1.5 rounded text-white text-[17px] font-bold tracking-wide"
            style={{ backgroundColor: ACCENT }}
          >
            投放节奏
          </span>
          <p className="text-[27px] text-white font-bold leading-snug">
            视频与文章同排期、按月持续投；平台引用规律一变，投放平台与视频结构随之调整
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_VideoStrategy_HeadTail.hideHeader = true;
