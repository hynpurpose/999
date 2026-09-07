import React from 'react';
import SlideLayout from '../../components/WebsiteReportLayout';

const PASS = '#4ADE80';
const FAIL = '#F87171';
const WARN = '#FBBF24';
const ACCENT = '#4C8DFF';
const DIVIDER = '1px solid rgba(255,255,255,0.10)';

/** 与综合评估页「网站架构」得分一致，合计 22/50 */
const ROWS = [
  {
    title: '页面结构是否清晰、可被读取',
    items: [
      {
        label: '结构清晰度',
        earned: 5,
        max: 8,
        desc: '有元信息，但首页 3 个 H1、标题摘要陈旧且口径矛盾。',
      },
      {
        label: '标题层级规范',
        earned: 3,
        max: 7,
        desc: '有层级，但 H1/H2/H3 存在跳级，更像排版而非标明结构。',
      },
      {
        label: '图片文字说明',
        earned: 7,
        max: 7,
        desc: '关键图片具备文字说明，AI 可理解图片含义。',
      },
    ],
  },
  {
    title: '是否为AI抓取做好相应的配置',
    items: [
      {
        label: '抓取权限与安全',
        earned: 7,
        max: 10,
        desc: 'AI 可正常抓取，但没有写清放行什么、屏蔽什么，存在安全漏洞。',
      },
      {
        label: '网站地图 sitemap',
        earned: 0,
        max: 10,
        desc: '无 sitemap，robots.txt 也未声明其位置。',
      },
      {
        label: '结构化数据',
        earned: 0,
        max: 8,
        desc: '全站无结构化数据，AI 只能从正文猜测。',
      },
    ],
  },
];

const TOTAL_EARNED = 22;
const TOTAL_MAX = 50;

function scoreColor(earned, max) {
  if (earned >= max) return PASS;
  if (earned === 0) return FAIL;
  return WARN;
}

function ScoreDots({ earned, max }) {
  const color = scoreColor(earned, max);
  const size = max >= 10 ? 12 : 14;

  return (
    <div className="flex items-center" style={{ gap: 5 }} aria-hidden>
      {Array.from({ length: max }, (_, i) => {
        const filled = i < earned;
        return (
          <span
            key={i}
            style={{
              width: size,
              height: size,
              borderRadius: 99,
              background: filled ? color : 'rgba(255,255,255,0.10)',
              boxShadow: filled ? 'none' : 'inset 0 0 0 1px rgba(255,255,255,0.14)',
            }}
          />
        );
      })}
    </div>
  );
}

function CheckCell({ item, isLast }) {
  const { label, earned, max, desc } = item;
  const color = scoreColor(earned, max);
  const full = earned >= max;
  const zero = earned === 0;

  return (
    <div
      className="flex flex-col min-w-0 h-full"
      style={{
        padding: '28px 22px 18px',
        borderRight: isLast ? 'none' : DIVIDER,
        background: full
          ? 'rgba(34,197,94,0.14)'
          : zero
            ? 'rgba(239,68,68,0.14)'
            : 'rgba(251,191,36,0.14)',
      }}
    >
      <div
        className="flex items-baseline justify-between gap-3"
        style={{ marginBottom: 10 }}
      >
        <div
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 24,
            fontWeight: 700,
            lineHeight: '30px',
            color: '#FFFFFF',
            letterSpacing: '-0.01em',
          }}
        >
          {label}
        </div>
        <span
          className="shrink-0 tabular-nums"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color }}>{earned}</span>
          <span style={{ color: 'rgba(255,255,255,0.42)', fontWeight: 600 }}>/{max}</span>
        </span>
      </div>

      <p
        style={{
          fontFamily: "'MiSans', sans-serif",
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '28px',
          color: 'rgba(255,255,255,0.66)',
        }}
      >
        {desc}
      </p>

      <div style={{ marginTop: 'auto', paddingTop: 16 }}>
        <ScoreDots earned={earned} max={max} />
      </div>
    </div>
  );
}

function ResultTable({ row, index }) {
  const rowEarned = row.items.reduce((s, it) => s + it.earned, 0);
  const rowMax = row.items.reduce((s, it) => s + it.max, 0);

  return (
    <div
      className="flex-1 flex flex-col min-h-0 overflow-hidden"
      style={{
        borderRadius: 18,
        border: '1px solid rgba(255,255,255,0.10)',
        background: '#101425',
        boxShadow: '0 1px 2px rgba(0,0,0,0.35)',
      }}
    >
      <div
        className="flex items-center gap-3 shrink-0"
        style={{
          padding: '12px 22px',
          background: 'rgba(76,141,255,0.10)',
          borderBottom: DIVIDER,
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: ACCENT,
            lineHeight: 1,
          }}
        >
          {index + 1}
        </span>
        <h3
          style={{
            fontFamily: "'AlimamaShuHeiTi', sans-serif",
            fontSize: 30,
            lineHeight: '38px',
            color: '#FFFFFF',
          }}
        >
          {row.title}
        </h3>
        <span
          className="ml-auto shrink-0 tabular-nums"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: ACCENT }}>{rowEarned}</span>
          <span style={{ color: 'rgba(255,255,255,0.42)', fontWeight: 600 }}>/{rowMax}</span>
        </span>
      </div>

      <div
        className="flex-1 min-h-0"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${row.items.length}, 1fr)`,
        }}
      >
        {row.items.map((item, ii) => (
          <CheckCell
            key={item.label}
            item={item}
            isLast={ii === row.items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function Page_ArchitectureResult() {
  return (
    <SlideLayout title="网站架构诊断结果">
      <div className="w-full h-full flex flex-col">
        <div
          className="flex items-center gap-10 shrink-0"
          style={{
            padding: '28px 36px',
            borderRadius: 16,
            background: '#101425',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.35)',
            marginBottom: 20,
          }}
        >
          <div className="flex items-end gap-2 shrink-0">
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: 80,
                lineHeight: 0.9,
                color: WARN,
                letterSpacing: '-0.04em',
              }}
            >
              {TOTAL_EARNED}
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: 30,
                color: 'rgba(255,255,255,0.42)',
                paddingBottom: 6,
              }}
            >
              /{TOTAL_MAX}
            </span>
          </div>
          <div
            className="shrink-0"
            style={{ width: 1, height: 64, background: 'rgba(255,255,255,0.14)' }}
          />
          <p
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 32,
              lineHeight: '46px',
              color: '#FFFFFF',
              fontWeight: 500,
            }}
          >
            桃李官网目前可被 AI 正常读取，但在几个重要的配置项以及结构上，存在一些问题。
          </p>
        </div>

        <div className="flex-1 flex flex-col min-h-0" style={{ gap: 20 }}>
          <ResultTable row={ROWS[0]} index={0} />
          <ResultTable row={ROWS[1]} index={1} />
        </div>
      </div>
    </SlideLayout>
  );
}
