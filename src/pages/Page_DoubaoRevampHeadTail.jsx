import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const IMAGE_SRC = '/doubao-revamp/high-weight-analysis.png';

export default function Page_DoubaoRevampHeadTail() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <SlideLayout title="豆包改版变化2：读取视频只读头尾">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">
        <div className="flex-1 min-h-0 flex items-center justify-start">
          {imgOk ? (
            <img
              src={IMAGE_SRC}
              alt="豆包高权重账号引用实测分析"
              className="max-w-full max-h-full object-contain rounded-[16px]"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2.5 w-full h-full rounded-[16px] border border-dashed border-white/25 bg-[#0B0D19]/45">
              <span className="px-2.5 py-1 rounded bg-white/10 text-white/70 text-[14px] font-bold tracking-wide">
                图片位
              </span>
              <p className="text-[18px] font-bold text-white/80">图片未找到</p>
              <p className="text-[14px] text-white/40">
                public/doubao-revamp/high-weight-analysis.png
              </p>
            </div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
}

Page_DoubaoRevampHeadTail.hideHeader = true;
