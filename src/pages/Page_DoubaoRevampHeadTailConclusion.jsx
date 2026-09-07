import React, { useLayoutEffect, useRef, useState } from 'react';
import SlideLayout from '../components/SlideLayout';
import data from '../data/doubaoVideoHeadTailConclusion.json';

const FONT_MAX = 15;
const FONT_MIN = 7;

const ACCENT = '#004CE5';

const TONE = {
  good: {
    solid: 'bg-[#6B9CFF]',
    soft: 'border-[#6B9CFF]/40 bg-[#6B9CFF]/[0.14]',
    text: 'text-[#8FB6FF]',
  },
  warn: {
    solid: 'bg-[#2F6EF5]',
    soft: 'border-[#2F6EF5]/40 bg-[#2F6EF5]/[0.14]',
    text: 'text-[#6C9BFF]',
  },
  bad: {
    solid: 'bg-[#004CE5]',
    soft: 'border-[#4C8DFF]/40 bg-[#004CE5]/[0.16]',
    text: 'text-[#4C8DFF]',
  },
};

// 逐字稿长度各条差异很大（数据换样本后也会变），字号按容器实测高度收缩到刚好放得下
function useFitFontSize(deps) {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(FONT_MAX);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    if (!box || !text) return;

    let size = FONT_MAX;
    text.style.fontSize = `${size}px`;
    while (size > FONT_MIN && text.scrollHeight > box.clientHeight) {
      size -= 0.5;
      text.style.fontSize = `${size}px`;
    }
    setFontSize(size);
  }, deps);

  return { boxRef, textRef, fontSize };
}

function CaseCard({ item }) {
  const tone = TONE[item.tone];
  const { boxRef, textRef, fontSize } = useFitFontSize([item.range]);

  return (
    <div className="flex flex-col min-h-0 gap-2">
      <div className={`shrink-0 rounded-[16px] text-white px-4 py-3 ${tone.solid}`}>
        <div className="flex items-center gap-2">
          <span className="text-[26px] font-bold leading-none">{item.range}</span>
          <span className="ml-auto px-2 py-0.5 rounded bg-white/20 text-[13px] font-bold">
            实例 {item.duration}
          </span>
        </div>
        <p className="mt-1.5 text-[18px] font-bold leading-snug">{item.rule}</p>
      </div>

      <div className={`shrink-0 rounded-[12px] border px-4 py-2 flex items-center gap-3 ${tone.soft}`}>
        <span className="text-[13px] font-bold text-white/50">口播被跳过</span>
        <span className={`font-['Montserrat'] text-[30px] font-bold leading-none ${tone.text}`}>
          {item.omitted_ratio}%
        </span>
        <span className="ml-auto text-[12px] text-white/40">
          口播 {item.script_chars} 字 / Summary {item.summary_chars} 字
        </span>
      </div>

      <div className="flex-1 min-h-0 rounded-[12px] border border-white/[0.08] bg-white/[0.04] px-4 py-3 flex flex-col overflow-hidden">
        <div className="shrink-0 text-[13px] font-bold tracking-wide text-white/40 mb-1.5">
          视频逐字稿（全文）
        </div>
        <div ref={boxRef} className="flex-1 min-h-0 overflow-hidden">
          <p ref={textRef} className="leading-[1.7]" style={{ fontSize: `${fontSize}px` }}>
            {item.segments.map((seg, i) =>
              seg.mark === 'omitted' ? (
                <span key={i} className="text-white/30">
                  {seg.text}
                </span>
              ) : (
                <span key={i} className="bg-emerald-400/20 text-emerald-200">
                  {seg.text}
                </span>
              )
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page_DoubaoRevampHeadTailConclusion() {
  return (
    <SlideLayout title="豆包改版变化2：读取视频只读头尾">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-3">
          {data.cases.map((item) => (
            <CaseCard key={item.range} item={item} />
          ))}
        </div>

        <div className="shrink-0 mt-3 rounded-[16px] border border-[#4C8DFF]/50 bg-[#004CE5]/[0.14] px-5 py-2.5 flex items-center gap-4">
          <span
            className="shrink-0 px-2.5 py-1 rounded text-white text-[15px] font-bold tracking-wide"
            style={{ backgroundColor: ACCENT }}
          >
            结论
          </span>
          <p className="text-[21px] text-white font-bold leading-snug">
            视频越长，中段丢得越多：
            <span className="text-[#4C8DFF]">1分钟内几乎全读</span>，
            <span className="text-[#4C8DFF]">1~4分钟只剩开头设问和结尾建议</span>，
            <span className="text-[#4C8DFF]">超过10分钟连中段实测全丢</span>
          </p>
          <span className="ml-auto shrink-0 inline-flex items-center gap-1.5 text-[13px] text-white/50">
            <span className="w-3.5 h-3.5 rounded-sm bg-emerald-400/25 border border-emerald-300/70" />
            绿色 = Summary 已读入
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_DoubaoRevampHeadTailConclusion.hideHeader = true;
