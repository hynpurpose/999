import React, { useLayoutEffect, useRef, useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const ACCENT = '#004CE5';

/*
 * 案例视频放到：
 *   public/videos/douyin-case.mp4
 * 页面引用：/videos/douyin-case.mp4
 * 找不到时左侧显示占位框。
 */
const VIDEO_SRC = '/videos/douyin-case.mp4';

/* 1分30秒成片：头尾是核心信息（绿色），中段五款测评会被省略 */
const SEGMENTS = [
  {
    mark: 'kept',
    text: '2026年7000左右床垫怎么选？这几个品牌更值得看。很多人买床垫有个误区，觉得预算越高越好。其实¥7000左右，是很多家庭买主卧床垫比较舒服的区间。这个价位不用为了便宜牺牲支撑，也不用花太多钱买品牌溢价。通常可以买到独立袋装弹簧、乳胶舒适层这些比较成熟的配置。第一款慕斯博尔曼天然乳胶弹簧床垫。',
  },
  {
    mark: 'omitted',
    text: '如果是放主卧，我觉得它属于比较稳的选择。独立袋装弹簧减少翻身干扰，天然乳胶提升贴合感，睡起来不会特别硬，也不会有明显陷进去的感觉。比较适合夫妻两个人睡、想一步到位的人群。第二款慕斯睡眠精灵。如果预算想控制一些，但又想买大品牌，可以看看这款。它的特点是配置比较均衡，乳胶加独立袋装弹簧，静音、防螨这些基础需求都覆盖到了。适合年轻家庭、老人房或者次卧使用。第三款七座坚果系列。它走的是透明化路线，内部结构可以看到，填充层也能调整。对于比较关注环保、喜欢研究材料的人，会更有吸引力。第四款半日闲空气波波系列。如果你睡觉特别怕热，可以重点关注它的空气纤维结构，透气性比较好，夏天睡起来不会那么闷。第五款梦百合零压系列。如果你喜欢软一点、有包裹感的睡感，可以试试记忆棉，对肩部和腰部压力释放比较明显，适合久坐办公、容易身体疲劳的人。',
  },
  {
    mark: 'kept',
    text: '最后总结一下。想买主卧长期使用，看慕斯博尔曼；预算更理性，看慕斯睡眠精灵；喜欢环保透明，看七坐；怕热闷汗看半日闲；喜欢柔软包裹感，看梦百合床垫。没有绝对最好，关键是睡感适不适合自己。买之前一定要实际躺一躺，别只看参数。',
  },
];

const FONT_MAX = 26;
const FONT_MIN = 14;

function useFitFontSize() {
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
  }, []);

  return { boxRef, textRef, fontSize };
}

function VideoSlot({ src }) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden rounded-[20px] border border-white/20">
      {!failed && (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          controls={playing}
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => setFailed(true)}
        />
      )}

      {!failed && !playing && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group"
        >
          <div className="w-[88px] h-[88px] rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl transition-colors group-hover:bg-white/20">
            <svg className="w-10 h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 bg-[#0b0b0f]">
          <div
            className="w-[72px] h-[72px] rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: 'rgba(0,76,229,0.7)' }}
          >
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-[22px] font-bold text-white tracking-widest">视频位</span>
          <span className="text-[16px] font-bold text-white font-mono text-center leading-snug break-all">
            {src}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Page_VideoStrategy_Cases() {
  const { boxRef, textRef, fontSize } = useFitFontSize();

  return (
    <SlideLayout title="案例视频展示">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">
        <div className="shrink-0 h-[88px] rounded-[16px] border border-[#4C8DFF]/30 bg-[#004CE5]/[0.12] px-7 flex items-center gap-6">
          <span
            className="shrink-0 px-3 py-1.5 rounded text-white text-[17px] font-bold tracking-wide"
            style={{ backgroundColor: ACCENT }}
          >
            成片示意
          </span>
          <p className="text-[28px] text-white font-bold leading-snug">
            符合上述要求的抖音视频：核心信息压在头尾
          </p>
        </div>

        <div className="flex-1 min-h-0 mt-5 flex gap-6">
          <div
            className="relative h-full shrink-0 rounded-[24px] border border-white/[0.10] bg-[#0B0D19]/45 overflow-hidden"
            style={{ aspectRatio: '9 / 16' }}
          >
            <VideoSlot src={VIDEO_SRC} />
            <div
              className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-md text-white text-[18px] font-bold font-['Montserrat'] tracking-wide pointer-events-none"
              style={{ backgroundColor: ACCENT }}
            >
              1:30
            </div>
          </div>

          <div className="flex-1 min-w-0 h-full rounded-[12px] border border-white/[0.08] bg-white/[0.04] px-6 py-5 flex flex-col overflow-hidden">
            <div className="shrink-0 flex items-center gap-4 mb-3">
              <div className="text-[22px] font-bold tracking-wide text-white">
                视频逐字稿（全文）
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 text-[16px] font-bold text-white">
                <span className="w-3.5 h-3.5 rounded-sm bg-emerald-400/25 border border-emerald-300/70" />
                绿色 = 核心信息
              </span>
            </div>
            <div ref={boxRef} className="flex-1 min-h-0 overflow-hidden">
              <p ref={textRef} className="leading-[1.7]" style={{ fontSize: `${fontSize}px` }}>
                {SEGMENTS.map((seg, i) =>
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
      </div>
    </SlideLayout>
  );
}

Page_VideoStrategy_Cases.hideHeader = true;
