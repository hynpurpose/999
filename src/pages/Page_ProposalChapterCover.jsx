import React from 'react';

export default function Page_ProposalChapterCover({
    bgImage,
    title,
    subtitle,
    brandLabel,
    navNumber = 1,
    groupChapters = [],
}) {
    const chapterNum = String(navNumber).padStart(2, '0');

    return (
        <div className="w-full h-full relative overflow-hidden bg-black">

            {/* ── 背景图 ── */}
            {bgImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
            )}

            {/* ── 右上角：Logo 图片位 ── */}
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

            {/* ── 左侧中偏上：章节大标题 ── */}
            {title && (
                <h1
                    className="absolute text-white font-black"
                    style={{
                        fontFamily: "'AlimamaShuHeiTi', sans-serif",
                        fontSize: '172px',
                        lineHeight: '1.1',
                        letterSpacing: '0.02em',
                        // 顶对齐：两行标题时首行位置 = 1080 - 500(原 bottom) - 2×189.2(行高) = 201.6px
                        top: '201.6px',
                        left: '66px',
                        maxWidth: '1400px',
                        whiteSpace: 'pre-line',
                    }}
                >
                    {title}
                </h1>
            )}

            {/* ── 左下角：章节列表 ── */}
            <div
                className="absolute flex flex-col gap-[10px]"
                style={{ bottom: '90px', left: '96px' }}
            >
                {groupChapters.map((ch, i) => {
                    const isActive = ch.navNumber === navNumber;
                    const num = String(ch.navNumber ?? (i + 1)).padStart(2, '0');
                    return (
                        <div
                            key={i}
                            className="flex items-center gap-[2px]"
                            style={{ fontSize: '32px', lineHeight: '1.4' }}
                        >
                            <span
                                className="shrink-0"
                                style={{
                                    color: isActive ? 'rgb(0, 76, 229)' : 'rgba(255,255,255,0.45)',
                                    fontWeight: isActive ? '500' : '400',
                                    letterSpacing: '0.02em',
                                    display: 'inline-block',
                                    width: '60px',
                                }}
                            >
                                {num}.
                            </span>
                            <span
                                style={{
                                    color: isActive ? 'rgb(0, 76, 229)' : 'rgba(255,255,255,0.45)',
                                    fontWeight: isActive ? '500' : '400',
                                    letterSpacing: '0.02em',
                                }}
                            >
                                {ch.title.replace(/\n/g, '')}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* ── 右下角：大章节编号 + 英文标签 ── */}
            <div
                className="absolute flex flex-col items-end"
                style={{ right: '45px', bottom: '74px' }}
            >
                <span
                    className="text-white leading-none"
                    style={{
                        fontFamily: "'Roboto', 'AlimamaShuHeiTi', sans-serif",
                        fontSize: '428px',
                        lineHeight: '0.85',
                        letterSpacing: '-0.02em',
                        fontWeight: 300,
                    }}
                >
                    {chapterNum}
                </span>
                {subtitle && (
                    <span
                        className="text-white uppercase"
                        style={{
                            fontSize: '34px',
                            marginTop: '42px',
                            fontFamily: "'MiSans', sans-serif",
                            letterSpacing: 0,
                            fontWeight: 300,
                            marginRight: '79px',
                        }}
                    >
                        {subtitle}
                    </span>
                )}
            </div>
        </div>
    );
}
