import React from 'react';
import { parsedConfig } from '../config/parseConfig';

/**
 * 目录页，两种形态：
 *  - 分目录（传 partId）：「目录」+ 部分名，01./02. 仍在原底部位置，章节与部分名左对齐
 *  - 总目录（不传 partId）：一、二、… 大层级列表
 */
export default function TOCSlide({ bgImage, title, menuText, brandLabel, serviceGuide, partId, group }) {
  const parts = parsedConfig.parts || [];
  const isMaster = !partId;
  const currentPart = parts.find((p) => p.id === partId);
  const chapters =
    currentPart?.chapters ||
    parsedConfig.chapters.filter((c) => c.group === (group || partId));

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-black">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      <div className="absolute z-10" style={{ top: '39px', right: '40px' }}>
        <img
          src="/logo.png"
          alt="Brand Logo"
          style={{ height: '28px', width: 'auto', display: 'block' }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {isMaster ? (
        <>
          <div className="absolute z-10" style={{ top: '233px', left: '130px' }}>
            <h1
              className="text-white font-black"
              style={{ fontSize: '78px', letterSpacing: '0.05em', fontFamily: "'AlimamaShuHeiTi', sans-serif" }}
            >
              {title}
            </h1>
          </div>
          <MasterList parts={parts} />
        </>
      ) : (
        <PartTOC title={title} part={currentPart} chapters={chapters} />
      )}

      <div
        className="absolute z-10 flex flex-col items-end"
        style={{ right: '114px', top: '76%', transform: 'translateY(-50%)' }}
      >
        <span
          className="text-white font-black leading-none select-none"
          style={{ fontSize: '261px', letterSpacing: '0', fontFamily: "'Roboto', sans-serif" }}
        >
          {menuText}
        </span>
        <span
          className="text-white font-light"
          style={{ fontSize: '28px', letterSpacing: '0.12em', marginTop: '36px', marginRight: '10px' }}
        >
          {serviceGuide}
        </span>
      </div>
    </div>
  );
}

/* 分目录：「目录」留在页面顶部当页眉，部分名与章节列表作为一组沉在底部 */
function PartTOC({ title, part, chapters }) {
  const numeral = part?.numeral || '';
  const partName = part?.tocTitle || part?.title || '';
  const partLabel = numeral ? `${numeral}、${partName}` : partName;

  return (
    <>
      <div className="absolute z-10" style={{ top: '233px', left: '130px' }}>
        <h1
          className="text-white font-black"
          style={{ fontSize: '78px', letterSpacing: '0.05em', fontFamily: "'AlimamaShuHeiTi', sans-serif", lineHeight: 1 }}
        >
          {title}
        </h1>
      </div>

      <div className="absolute z-10" style={{ left: '130px', bottom: '100px', width: '1000px' }}>
        <span
          style={{
            fontSize: '72px',
            letterSpacing: '0.03em',
            fontFamily: "'AlimamaShuHeiTi', sans-serif",
            lineHeight: 1.15,
            color: '#ffffff',
            display: 'block',
            whiteSpace: 'nowrap',
          }}
        >
          {partLabel}
        </span>
        <div style={{ marginTop: '44px' }}>
          <ChapterList chapters={chapters} />
        </div>
      </div>
    </>
  );
}

function listMetrics(chapters) {
  const isLargeList = chapters.length > 5;
  return {
    numSize: isLargeList ? 54 : 70,
    textSize: isLargeList ? 52 : 68,
    numWidth: isLargeList ? 100 : 130,
    rowGap: isLargeList ? 10 : 0,
  };
}

function ChapterList({ chapters = [] }) {
  const m = listMetrics(chapters);

  return (
    <div className="flex flex-col" style={{ gap: m.rowGap }}>
      {chapters.map((chapter, i) => (
        <div key={i} className="flex items-baseline" style={{ lineHeight: 1.3 }}>
          <span
            className="shrink-0"
            style={{
              color: '#004CE5',
              fontSize: `${m.numSize}px`,
              fontFamily: "'MiSans', sans-serif",
              fontWeight: 200,
              display: 'inline-block',
              width: `${m.numWidth}px`,
            }}
          >
            {String(chapter.navNumber ?? i + 1).padStart(2, '0')}.
          </span>
          <span
            className="text-white"
            style={{
              fontSize: `${m.textSize}px`,
              letterSpacing: '0px',
              fontFamily: "'MiSans', sans-serif",
              fontWeight: 200,
            }}
          >
            {chapter.title.replace(/\n/g, '')}
          </span>
        </div>
      ))}
    </div>
  );
}

function MasterList({ parts = [] }) {
  return (
    <div
      className="absolute z-10 flex flex-col"
      style={{ bottom: '100px', left: '132px' }}
    >
      {parts.map((part, i) => (
        <div key={part.id || i} className="flex items-baseline" style={{ lineHeight: '1.3' }}>
          <span
            className="text-[#004CE5] shrink-0"
            style={{
              fontSize: '70px',
              fontFamily: "'MiSans', sans-serif",
              fontWeight: 200,
              display: 'inline-block',
              width: '130px',
            }}
          >
            {part.numeral}、
          </span>
          <span
            className="text-white"
            style={{ fontSize: '68px', letterSpacing: '0px', fontFamily: "'MiSans', sans-serif", fontWeight: 200 }}
          >
            {part.title}
          </span>
        </div>
      ))}
    </div>
  );
}
