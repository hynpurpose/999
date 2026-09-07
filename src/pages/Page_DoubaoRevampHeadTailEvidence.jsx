import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const ACCENT = '#004CE5';
const IMAGE_SRC = '/doubao-revamp/summary-vs-transcript.png';

export default function Page_DoubaoRevampHeadTailEvidence() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <SlideLayout title="豆包改版变化2：读取视频只读头尾">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">
        <div className="shrink-0 mb-4 rounded-[16px] border border-[#4C8DFF]/30 bg-[#004CE5]/[0.12] px-6 py-3.5 flex items-start gap-4">
          <span
            className="shrink-0 mt-0.5 px-2.5 py-1 rounded text-white text-[14px] font-bold tracking-wide"
            style={{ backgroundColor: ACCENT }}
          >
            实测对照
          </span>
          <p className="text-[22px] text-white font-bold leading-snug">
            我们拉取了几百个视频，把豆包提取的
            <span className="text-[#4C8DFF]"> Summary </span>
            和视频
            <span className="text-[#4C8DFF]"> 逐字稿 </span>
            逐条做了对比
          </p>
        </div>

        <div className="flex-1 min-h-0 rounded-[16px] border border-white/[0.12] bg-white overflow-hidden flex flex-col items-center justify-center">
          {imgOk ? (
            <img
              src={IMAGE_SRC}
              alt="Summary 与逐字稿对照"
              className="w-full h-full object-contain"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2.5">
              <span className="px-2.5 py-1 rounded bg-zinc-200 text-zinc-700 text-[14px] font-bold tracking-wide">
                图片位
              </span>
              <p className="text-[18px] font-bold text-zinc-700">待补充对照截图</p>
              <p className="text-[14px] text-zinc-400">
                public/doubao-revamp/summary-vs-transcript.png
              </p>
            </div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
}

Page_DoubaoRevampHeadTailEvidence.hideHeader = true;
