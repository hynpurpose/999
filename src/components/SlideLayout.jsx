import React, { useState, useEffect, useContext } from 'react';
import { SlideContext } from './SlideContext';
import { parsedConfig } from '../config/parseConfig';

export default function SlideLayout({
  title,
  subtitle,
  children,
  brandLabel = "GEOINDEXFUTURE // 2026",
  className = "",
  contentClassName = "",
  showGuidesDefault = false,
  fullBleed = false,
  hideHeaderLeft = false,
  contentTop
}) {
  const [showGuides, setShowGuides] = useState(showGuidesDefault);
  const context = useContext(SlideContext);

  // Allow toggling guidelines by pressing 'g' or 'G' key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'g' || e.key === 'G') {
        setShowGuides(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const hasNav = context && context.chapterIndex !== undefined && context.chapterIndex !== null;
  const chapter = hasNav ? parsedConfig.chapters[context.chapterIndex] : null;
  const sections = chapter ? chapter.sections : [];

  return (
    <div className={`w-full h-full relative overflow-hidden bg-black text-white font-sans ${className}`}>

      {/* ── 顶部导航栏 ── */}
      {hasNav && chapter && !hideHeaderLeft && (
        <div 
          className="absolute z-20 flex items-center gap-[30px] select-none"
          style={{ top: '36px', left: '40px' }}
        >
          <span 
            className="text-white font-bold"
            style={{ 
              fontSize: '24px', 
              fontFamily: "'MiSans', sans-serif",
              letterSpacing: '0.02em'
            }}
          >
            {String(chapter.navNumber ?? (context.chapterIndex + 1)).padStart(2, '0')} {chapter.title.replace(/\n/g, '')}
          </span>
          {sections.length > 0 && <div className="w-[2px] h-[28px] bg-white/40 rounded-full" />}
          <div className="flex items-center gap-[12px]">
            {sections.map((sec, idx) => {
              const isActive = idx === context.sectionIndex;
              return (
                <span
                  key={idx}
                  className="font-medium transition-all duration-300"
                  style={{
                    fontSize: '20px',
                    fontFamily: "'MiSans', sans-serif",
                    color: isActive ? '#000000' : 'rgba(255, 255, 255, 0.4)',
                    border: isActive ? '1px solid #FFFFFF' : '1px solid transparent',
                    padding: '0 12px',
                    borderRadius: '6px',
                    backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '28px'
                  }}
                >
                  {idx + 1}. {sec.title}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* ── 顶部右侧：Logo 图片位 ── */}
      <div 
        className="absolute z-20"
        style={{ top: '39px', right: '40px' }}
      >
        <img 
          src="/logo.png" 
          alt="Brand Logo" 
          style={{ height: '28px', width: 'auto', display: 'block' }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* ── 顶部左侧：标题区域 (H1) ── */}
      {!fullBleed && (
        <div 
          className="absolute z-20 flex flex-col justify-start"
          style={{ top: '112px', left: '40px', width: '1840px' }}
        >
          {title && (
            <h1 
              data-slide-title
              style={{
                fontFamily: "'AlimamaShuHeiTi', sans-serif",
                fontWeight: '700',
                fontSize: '86px',
                lineHeight: '96px',
                color: '#FFFFFF',
                letterSpacing: '0.02em'
              }}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              data-slide-subtitle
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontWeight: 700,
                fontSize: '36px',
                lineHeight: '48px',
                color: '#FFFFFF',
                marginTop: '8px',
                letterSpacing: '0.02em',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* ── 核心内容排版安全区 ── */}
      {fullBleed ? (
        // 整页模式：左右对齐 40px margin line（1840px 宽），
        // 底部延伸至 content bottom（1020px）下方 24px 处。
        <div
          className={`absolute z-10 ${contentClassName}`}
          style={{ top: '72px', left: '40px', width: '1840px', bottom: '36px' }}
        >
          {children}
        </div>
      ) : (
        <div 
          className={`absolute z-10 ${contentClassName}`}
          style={{ 
            top: contentTop ?? (subtitle ? '280px' : '225px'), 
            left: '40px', 
            width: '1840px', 
            // 避让底部字幕区（content bottom 1020px）
            height: contentTop ? `${1020 - contentTop}px` : (subtitle ? '740px' : '795px'),
          }}
        >
          {children}
        </div>
      )}

      {/* ── 底部字幕避让区占位说明 (仅在显示辅助线时可见) ── */}
      {showGuides && (
        <div 
          className="absolute z-25 flex items-center justify-center border-t border-dashed border-red-500/50 bg-red-950/10 pointer-events-none"
          style={{ 
            bottom: 0, 
            left: 0, 
            width: '1920px', 
            height: '60px' 
          }}
        >
          <span className="text-red-400/60 font-bold tracking-wider text-lg font-['MiSans']">
            [ 避让字幕区域，请勿排版任何文字内容 ]
          </span>
        </div>
      )}

      {/* ── 辅助参考线 (Guidelines Overlay) ── */}
      {showGuides && (
        <div className="absolute inset-0 z-30 pointer-events-none select-none">
          {/* Top Line (Line 1 in Figma) */}
          <div className="absolute w-full border-t-2 border-dashed border-blue-500/40" style={{ top: '80px' }}>
            <span className="absolute left-4 -top-3 text-[10px] text-blue-400/80 font-mono">Top Guide (80px)</span>
          </div>

          {/* Middle Line (Line 3 in Figma) */}
          <div className="absolute w-full border-t-2 border-dashed border-blue-500/40" style={{ top: '225px' }}>
            <span className="absolute left-4 -top-3 text-[10px] text-blue-400/80 font-mono">Content Top (225px)</span>
          </div>

          {/* Bottom Line (Line 2 in Figma) */}
          <div className="absolute w-full border-t-2 border-dashed border-blue-500/40" style={{ bottom: '60px' }}>
            <span className="absolute left-4 -top-3 text-[10px] text-blue-400/80 font-mono">Content Bottom (1020px)</span>
          </div>

          {/* Left Margin Boundary Line */}
          <div className="absolute h-full border-l-2 border-dashed border-blue-500/40" style={{ left: '40px' }}>
            <span className="absolute top-4 left-2 text-[10px] text-blue-400/80 font-mono">Left Margin (40px)</span>
          </div>

          {/* Right Margin Boundary Line */}
          <div className="absolute h-full border-l-2 border-dashed border-blue-500/40" style={{ right: '40px' }}>
            <span className="absolute top-4 -left-28 text-[10px] text-blue-400/80 font-mono">Right Margin (1880px)</span>
          </div>

          {/* Center Vertical Axis (Line 5 in Figma) */}
          <div className="absolute h-full border-l border-dashed border-zinc-700/30" style={{ left: '50%' }}>
            <span className="absolute top-1/2 left-2 text-[10px] text-zinc-500/60 font-mono">X Center (960px)</span>
          </div>

          {/* Center Horizontal Axis */}
          <div className="absolute w-full border-t border-dashed border-zinc-700/30" style={{ top: '50%' }}>
            <span className="absolute left-1/2 -top-4 text-[10px] text-zinc-500/60 font-mono">Y Center (540px)</span>
          </div>
        </div>
      )}

    </div>
  );
}
