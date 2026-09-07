import React from 'react';

/**
 * 官网诊断章节（来自桃李面包官网诊断报告）沿用全册的深色 SlideLayout，
 * 这里只补一个 H2 强调色，替代原报告浅色主题里的蓝字。
 */
export { default } from './SlideLayout';

export function H2Em({ children }) {
  return <span style={{ color: '#4C8DFF' }}>{children}</span>;
}

const TONE = {
  bad: { line: '#F87171', soft: 'rgba(239,68,68,0.14)', ring: 'rgba(239,68,68,0.28)' },
  good: { line: '#4ADE80', soft: 'rgba(34,197,94,0.14)', ring: 'rgba(34,197,94,0.28)' },
};

/** 问题页顶部的红色导语条 */
export function IssueNote({ children }) {
  return (
    <div
      style={{
        padding: '18px 28px',
        borderRadius: 16,
        background: 'rgba(239,68,68,0.12)',
        borderLeft: '4px solid #EF4444',
        marginBottom: 22,
        flexShrink: 0,
      }}
    >
      <p
        style={{
          fontFamily: "'MiSans', sans-serif",
          fontSize: 28,
          lineHeight: '40px',
          color: '#FFFFFF',
          fontWeight: 500,
        }}
      >
        {children}
      </p>
    </div>
  );
}

/**
 * 「桃李现状 / 正确示例」左右对照卡片。
 * 传 image 走截图位，传 children 则自行渲染卡片内容。
 */
export function CompareCard({
  tone = 'bad',
  title,
  subtitle,
  tag,
  image,
  alt,
  bodyStyle,
  children,
}) {
  const c = TONE[tone];
  return (
    <div
      className="flex flex-col min-h-0 overflow-hidden"
      style={{
        borderRadius: 18,
        border: `2.5px solid ${c.line}`,
        background: '#101425',
        boxShadow: `0 0 0 1px ${c.ring}`,
      }}
    >
      <div
        className="flex items-center justify-between shrink-0"
        style={{
          padding: '14px 22px',
          background: c.soft,
          borderBottom: `1.5px solid ${c.line}`,
        }}
      >
        <div className="flex items-baseline gap-3 min-w-0">
          <span
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 26,
              fontWeight: 700,
              color: c.line,
              flexShrink: 0,
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontSize: 22,
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
        {tag && (
          <span
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 18,
              fontWeight: 600,
              color: '#FFFFFF',
              flexShrink: 0,
              marginLeft: 16,
            }}
          >
            {tag}
          </span>
        )}
      </div>

      <div
        className="flex-1 min-h-0 overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)', ...bodyStyle }}
      >
        {image ? (
          <img
            src={`${image}?v=1`}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
