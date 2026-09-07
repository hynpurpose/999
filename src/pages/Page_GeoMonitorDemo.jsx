import React, { useRef, useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/* 视频占位框：优先加载 /public/videos/geo-monitor-demo.mp4，
 * 找不到时回退为纯播放键占位框。后续把视频丢进该路径即可。 */
const VIDEO_SRC = '/videos/geo-monitor-demo.mp4';

function VideoFrame({ radius = 24, showPlayHint = true, onPlayingChange }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const updatePlaying = (value) => {
    setPlaying(value);
    onPlayingChange?.(value);
  };

  return (
    <div
      className="relative w-full h-full bg-black overflow-hidden border border-white/20 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)]"
      style={{ borderRadius: radius }}
    >
      {!failed && (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          className="w-full h-full object-cover"
          controls={playing}
          playsInline
          onPlay={() => updatePlaying(true)}
          onPause={() => updatePlaying(false)}
          onEnded={() => updatePlaying(false)}
          onError={() => setFailed(true)}
        />
      )}

      {!failed && !playing && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group"
        >
          <div className="w-[128px] h-[128px] rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl transition-colors group-hover:bg-white/20">
            <svg className="w-14 h-14 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b0b0f]">
          {showPlayHint && (
            <div className="w-[96px] h-[96px] rounded-full bg-[#004CE5]/15 border border-[#004CE5]/50 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#5B8CFF] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Page_GeoMonitorDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <SlideLayout fullBleed>
      <div className="absolute w-[820px] h-[820px] rounded-full bg-[#004CE5]/[0.08] blur-[190px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <div
        className="absolute inset-0 flex flex-col items-center justify-between z-10 animate-fadeIn"
        style={{ paddingTop: '48px', paddingBottom: '28px' }}
      >
        <div className="relative" style={{ width: '1760px', height: '820px' }}>
          <VideoFrame radius={28} onPlayingChange={setPlaying} />

          {!playing && (
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[18px] font-bold text-white font-['MiSans'] tracking-wider">LIVE DEMO</span>
            </div>
          )}
        </div>

        <p className="text-[28px] text-white font-['MiSans'] font-medium tracking-wide">
          GEO ONE数据系统后台运行录屏演示
        </p>
      </div>
    </SlideLayout>
  );
}

Page_GeoMonitorDemo.hideHeader = true;
