import React from 'react';

const FAIL = '#F87171';
const WARN = '#FBBF24';
const INFO = 'rgba(255,255,255,0.52)';
const PASS = '#4ADE80';
const ACCENT = '#4C8DFF';

export function severityColor(severity) {
  if (severity === 'fail') return FAIL;
  if (severity === 'warn') return WARN;
  if (severity === 'pass') return PASS;
  return INFO;
}

/** Lighthouse 风格半环分 */
export function ScoreGauge({ score, size = 120, label }) {
  const stroke = size >= 100 ? 10 : 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, score));
  const offset = c * (1 - clamped / 100);
  const tone =
    clamped >= 90 ? PASS : clamped >= 50 ? WARN : FAIL;

  return (
    <div className="flex flex-col items-center" style={{ width: size + 8 }}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          style={{ transform: 'rotate(-90deg)', display: 'block' }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={tone}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'none' }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: size * 0.28,
              color: tone,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {score}
          </span>
        </div>
      </div>
      {label && (
        <div
          style={{
            marginTop: size >= 100 ? 10 : 6,
            fontFamily: "'MiSans', sans-serif",
            fontSize: size >= 100 ? 18 : size >= 80 ? 14 : 12,
            fontWeight: 600,
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
}

export function StatusMark({ severity = 'fail', size = 14 }) {
  const color = severityColor(severity);
  if (severity === 'pass') {
    return (
      <span
        className="shrink-0"
        style={{
          width: size,
          height: size,
          borderRadius: 99,
          background: color,
          marginTop: 3,
        }}
      />
    );
  }
  if (severity === 'info') {
    return (
      <span
        className="shrink-0"
        style={{
          width: size,
          height: size,
          borderRadius: 99,
          border: `2px solid ${color}`,
          marginTop: 4,
        }}
      />
    );
  }
  if (severity === 'warn') {
    return (
      <span
        className="shrink-0"
        style={{
          width: size,
          height: size,
          background: color,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          marginTop: 3,
        }}
      />
    );
  }
  return (
    <span
      className="shrink-0"
      style={{
        width: size,
        height: size,
        background: color,
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        marginTop: 3,
      }}
    />
  );
}

export function FindingRow({ severity = 'fail', title, detail, sample, compact }) {
  return (
    <div
      className="flex flex-col"
      style={{
        padding: compact ? '8px 14px' : '12px 16px',
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.10)',
        background: '#101425',
        gap: compact ? 4 : 6,
      }}
    >
      <div className="flex items-start gap-2.5">
        <StatusMark severity={severity} />
        <div className="min-w-0 flex-1">
          <div
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: compact ? 17 : 20,
              fontWeight: 700,
              color: severityColor(severity),
              lineHeight: compact ? '24px' : '28px',
            }}
          >
            {title}
          </div>
          {detail && (
            <p
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontSize: compact ? 14 : 16,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.78)',
                lineHeight: compact ? '20px' : '24px',
                marginTop: 2,
              }}
            >
              {detail}
            </p>
          )}
          {sample && (
            <code
              style={{
                display: 'block',
                marginTop: compact ? 4 : 8,
                padding: compact ? '6px 10px' : '8px 12px',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.06)',
                fontFamily: "'Montserrat', 'MiSans', monospace",
                fontSize: 12,
                color: 'rgba(255,255,255,0.66)',
                lineHeight: '16px',
                wordBreak: 'break-all',
              }}
            >
              {sample}
            </code>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProcessNote({ children }) {
  return (
    <p
      style={{
        fontFamily: "'MiSans', sans-serif",
        fontSize: 16,
        fontWeight: 500,
        lineHeight: '24px',
        color: 'rgba(255,255,255,0.52)',
      }}
    >
      {children}
    </p>
  );
}

export function MetaChip({ children }) {
  return (
    <span
      style={{
        fontFamily: "'MiSans', sans-serif",
        fontSize: 15,
        fontWeight: 600,
        color: ACCENT,
        background: 'rgba(76,141,255,0.16)',
        padding: '6px 12px',
        borderRadius: 99,
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  );
}

export { ACCENT, FAIL, WARN, PASS, INFO };
