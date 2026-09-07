import React from 'react';
import SlideLayout from '../components/SlideLayout';

const ACCENT = '#004CE5';

const PILLARS = [
  {
    num: '01',
    title: '加大视频投放量',
    why: '豆包的引用重心已转向抖音视频，视频储备不足会直接损失被引用的机会',
    points: [
      {
        label: '上调排期',
        text: '视频排期按月上调，与文章类内容同等投入',
      },
      {
        label: '补齐词条',
        text: '重点品类词、对比词逐个配备视频，不留空白',
      },
      {
        label: '多号复投',
        text: '优先高权重账号发布，优质素材多号复投',
      },
    ],
  },
  {
    num: '02',
    title: '优化视频结构',
    why: '既然豆包只读得进头尾、且偏好短片，创作动作就要跟着改',
    points: [
      {
        label: '长片拆条',
        text: '主力成片压到 60 秒内，长测评拆条发布',
      },
      {
        label: '开头前置',
        text: '前 5 秒直接口播品牌与品类词，去掉铺垫',
      },
      {
        label: '结尾复述',
        text: '最后 10 秒口播小结，品牌与卖点再念一遍',
      },
    ],
  },
];

function PointRow({ item }) {
  return (
    <div className="flex-1 min-h-0 rounded-[16px] border border-white/[0.08] bg-white/[0.04] px-5 flex items-center gap-5">
      <span
        className="shrink-0 w-[142px] py-2.5 rounded-[10px] text-white text-[21px] font-bold text-center"
        style={{ backgroundColor: ACCENT }}
      >
        {item.label}
      </span>
      <p className="text-[27px] font-bold text-white/90 leading-snug whitespace-nowrap">
        {item.text}
      </p>
    </div>
  );
}

export default function Page_DoubaoRevampResponse() {
  return (
    <SlideLayout title="豆包改版后我们的应对方案">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">
        <div className="shrink-0 mb-5 rounded-[16px] border border-[#4C8DFF]/30 bg-[#004CE5]/[0.12] px-7 py-4 flex items-center gap-5">
          <span
            className="shrink-0 px-3 py-1.5 rounded text-white text-[17px] font-bold tracking-wide"
            style={{ backgroundColor: ACCENT }}
          >
            应对方向
          </span>
          <p className="text-[27px] text-white font-bold leading-snug">
            两条主线同时推进：
            <span className="text-[#4C8DFF]">投放上把视频量提起来</span>，
            <span className="text-[#4C8DFF]">创作上按豆包只读头尾的规律改结构</span>
          </p>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 flex flex-col min-h-0 overflow-hidden"
            >
              <div className="shrink-0 px-6 py-4 border-b border-white/[0.08] bg-[#004CE5]/[0.10] flex items-center gap-4">
                <span
                  className="shrink-0 w-14 h-14 rounded-[12px] text-white text-[24px] font-bold flex items-center justify-center font-['Montserrat']"
                  style={{ backgroundColor: ACCENT }}
                >
                  {p.num}
                </span>
                <div className="min-w-0">
                  <h2 className="text-[34px] font-bold text-white leading-none">{p.title}</h2>
                  <p className="mt-2 text-[18px] text-white/50 leading-snug">{p.why}</p>
                </div>
              </div>

              <div className="flex-1 min-h-0 px-6 py-5 flex flex-col gap-4">
                {p.points.map((item) => (
                  <PointRow key={item.label} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

Page_DoubaoRevampResponse.hideHeader = true;
