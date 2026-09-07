import React, { useState } from 'react';
import SlideLayout from '../../components/WebsiteReportLayout';

/** 与诊断标准 / 内容覆盖诊断结果七项及权重一致（满分 50） */
const CHECKS = [
  { label: '品牌信息', max: 8 },
  { label: '产品信息', max: 10 },
  { label: '资质与信任', max: 6 },
  { label: '售后与服务', max: 7 },
  { label: '使用场景', max: 6 },
  { label: 'FAQ / 科普', max: 8 },
  { label: '内容运营', max: 5 },
];

function sumScore(earned) {
  return earned.reduce((a, b) => a + b, 0);
}

function passCount(earned) {
  return earned.filter((e, i) => e >= CHECKS[i].max).length;
}

function checkStatus(earned, max) {
  if (earned >= max) return 'pass';
  if (earned === 0) return 'fail';
  return 'partial';
}

/**
 * 标本：仅瑞幸
 * 优秀案例：百果园、一颗大番茄、RIO
 * 竞品：桃李、豪士、宾堡、盼盼
 * 桃李 = 内容覆盖诊断结果 33/50
 */
const ROWS = [
  {
    brand: '瑞幸咖啡',
    logo: '/brand-logos/luckin.png',
    initial: '瑞',
    earned: [8, 10, 6, 7, 6, 8, 4],
    specimen: true,
  },
  {
    brand: '一颗大番茄',
    logo: '/brand-logos/tomato.png',
    initial: '番',
    earned: [8, 8, 4, 5, 6, 5, 5],
    excellence: true,
  },
  {
    brand: 'RIO',
    logo: '/brand-logos/rio.png',
    initial: 'R',
    earned: [7, 7, 4, 5, 5, 6, 5],
    excellence: true,
  },
  {
    brand: '百果园',
    logo: '/brand-logos/pagoda.png',
    initial: '百',
    earned: [8, 6, 4, 7, 3, 5, 3],
    excellence: true,
  },
  {
    brand: '豪士',
    logo: '/brand-logos/haoshi.png',
    initial: '豪',
    // 品牌 / 产品 / 资质满分；总分 35（较前 +5）
    earned: [8, 10, 6, 4, 2, 1, 4],
  },
  {
    brand: '桃李面包',
    logo: '/brand-logos/client-fmcg-taoli.png',
    initial: '桃',
    earned: [8, 6, 6, 5, 2, 2, 4],
    highlight: true,
  },
  {
    brand: '宾堡',
    logo: '/brand-logos/bimbo.png',
    initial: '宾',
    earned: [6, 3, 2, 2, 1, 0, 2],
  },
  {
    brand: '盼盼',
    logo: '/brand-logos/panpan.png',
    initial: '盼',
    earned: [2, 2, 1, 1, 0, 0, 1],
  },
].map((row) => ({
  ...row,
  score: sumScore(row.earned),
  pass: `${passCount(row.earned)} / 7`,
}));

const STATUS_STYLE = {
  pass: { bg: 'rgba(34,197,94,0.20)', dot: '#22C55E', text: '#4ADE80' },
  partial: { bg: 'rgba(251,191,36,0.20)', dot: '#FB923C', text: '#FBBF24' },
  fail: { bg: 'rgba(239,68,68,0.18)', dot: '#EF4444', text: '#F87171' },
};

function LogoMark({ src, initial, size = 48 }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: size,
          height: size,
          borderRadius: 12,
          background: 'rgba(76,141,255,0.16)',
          color: '#4C8DFF',
          fontFamily: "'MiSans', sans-serif",
          fontWeight: 700,
          fontSize: size * 0.38,
        }}
      >
        {initial}
      </div>
    );
  }

  return (
    // 品牌 logo 多为白底设计，深色页上需垫一层浅底才看得清
    <span
      className="shrink-0 flex items-center justify-center overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: 12,
        background: 'rgba(255,255,255,0.92)',
        padding: Math.round(size * 0.1),
      }}
    >
      <img
        src={src}
        alt=""
        onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </span>
  );
}

function CheckChips({ earned }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 4,
        width: '100%',
      }}
    >
      {CHECKS.map((check, i) => {
        const e = earned[i];
        const st = STATUS_STYLE[checkStatus(e, check.max)];
        return (
          <div
            key={check.label}
            className="flex items-center gap-1.5 min-w-0"
            style={{
              padding: '4px 8px',
              borderRadius: 7,
              background: st.bg,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                background: st.dot,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                lineHeight: '16px',
                color: st.text,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                flex: 1,
                minWidth: 0,
              }}
            >
              {check.label}
            </span>
            <span
              className="shrink-0 tabular-nums"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: st.text,
                letterSpacing: '-0.02em',
              }}
            >
              {e}/{check.max}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function contentStatus(row) {
  if (row.specimen) {
    return { label: '标本网站', color: '#E7C86B', dot: '#D4AF37' };
  }
  if (row.excellence) {
    return { label: '优秀案例', color: '#4C8DFF', dot: '#4C8DFF' };
  }
  if (row.score === 0) {
    return { label: '内容几乎空白', color: '#F87171', dot: '#EF4444' };
  }
  if (row.score <= 20) {
    return { label: '内容覆盖不足', color: '#F87171', dot: '#EF4444' };
  }
  return { label: '内容覆盖一般', color: '#FBBF24', dot: '#FB923C' };
}

function SectionDivider({ label }) {
  return (
    <div
      className="flex items-center shrink-0"
      style={{ gap: 14, padding: '1px 0' }}
    >
      <div
        style={{
          flex: 1,
          height: 1.5,
          background: 'rgba(76,141,255,0.45)',
        }}
      />
      <span
        style={{
          fontFamily: "'MiSans', sans-serif",
          fontSize: 15,
          fontWeight: 600,
          color: '#4C8DFF',
          letterSpacing: '0.08em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <div
        style={{
          flex: 1,
          height: 1.5,
          background: 'rgba(76,141,255,0.45)',
        }}
      />
    </div>
  );
}

function BrandRow({ row }) {
  const status = contentStatus(row);
  const isGold = row.specimen;
  const isBlue = row.excellence;

  return (
    <div
      className="flex items-stretch min-h-0 overflow-hidden"
      style={{
        flex: 1,
        borderRadius: 14,
        background: isGold
          ? 'rgba(212,175,55,0.16)'
          : isBlue
            ? 'rgba(76,141,255,0.09)'
            : '#101425',
        border: isGold
          ? '2px solid #D4AF37'
          : isBlue
            ? '1.5px solid rgba(76,141,255,0.38)'
            : row.highlight
              ? '1.5px solid rgba(76,141,255,0.38)'
              : '1px solid rgba(255,255,255,0.10)',
        boxShadow: isGold
          ? '0 0 0 1px rgba(212,175,55,0.35), inset 0 0 0 1px rgba(212,175,55,0.12)'
          : undefined,
      }}
    >
      <div
        className="flex items-center gap-2.5 shrink-0"
        style={{ width: 240, padding: '0 16px' }}
      >
        <LogoMark src={row.logo} initial={row.initial} size={44} />
        <div className="min-w-0 flex flex-col justify-center">
          <div
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 20,
              fontWeight: 700,
              lineHeight: '26px',
              color: isGold
                ? '#E7C86B'
                : row.highlight || isBlue
                  ? '#4C8DFF'
                  : '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            {row.brand}
          </div>
          <div className="inline-flex items-center gap-2" style={{ marginTop: 4 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                background: status.dot,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                lineHeight: 1,
                color: status.color,
              }}
            >
              {status.label}
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center shrink-0"
        style={{ width: 110, padding: '0 4px' }}
      >
        <div
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.52)',
            marginBottom: 2,
            lineHeight: 1,
          }}
        >
          满分项
        </div>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}
        >
          {row.pass}
        </div>
      </div>

      <div
        className="flex flex-col justify-center shrink-0"
        style={{ width: 100, padding: '0 4px' }}
      >
        <div
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.52)',
            marginBottom: 2,
            lineHeight: 1,
          }}
        >
          得分
        </div>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 24,
            fontWeight: 800,
            color: row.highlight
              ? '#4C8DFF'
              : isGold
                ? '#E7C86B'
                : isBlue
                  ? '#4C8DFF'
                  : row.score > 0
                    ? '#FFFFFF'
                    : 'rgba(255,255,255,0.42)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          <span>{row.score}</span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.42)',
              marginLeft: 2,
            }}
          >
            /50
          </span>
        </div>
      </div>

      <div
        className="flex-1 flex flex-col justify-center min-w-0"
        style={{
          padding: '6px 12px 6px 14px',
          borderLeft: isGold
            ? '1px solid rgba(212,175,55,0.45)'
            : '1px solid rgba(255,255,255,0.10)',
        }}
      >
        <CheckChips earned={row.earned} />
      </div>
    </div>
  );
}

export default function Page_CompetitorContent() {
  const topRows = ROWS.filter((r) => r.specimen || r.excellence);
  const competitorRows = ROWS.filter((r) => !r.specimen && !r.excellence);

  return (
    <SlideLayout title="竞品对比">
      <div className="w-full h-full flex flex-col" style={{ gap: 8 }}>
        <div className="flex-1 flex flex-col min-h-0" style={{ gap: 6 }}>
          {topRows.map((row) => (
            <BrandRow key={row.brand} row={row} />
          ))}

          <SectionDivider label="以下为竞品" />

          {competitorRows.map((row) => (
            <BrandRow key={row.brand} row={row} />
          ))}
        </div>

        <div
          className="flex items-stretch overflow-hidden shrink-0"
          style={{
            borderRadius: 14,
            background: '#101425',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: 64,
              background: 'rgba(76,141,255,0.12)',
              borderRight: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span
              style={{
                fontFamily: "'AlimamaShuHeiTi', sans-serif",
                fontSize: 22,
                color: '#4C8DFF',
                letterSpacing: '0.12em',
                writingMode: 'vertical-rl',
                lineHeight: 1,
              }}
            >
              小结
            </span>
          </div>

          <div
            className="flex-1 flex flex-col justify-center min-w-0"
            style={{ padding: '10px 20px' }}
          >
            <div className="flex items-center gap-3" style={{ marginBottom: 6 }}>
              {[
                { label: '瑞幸标本', hint: '49/50' },
                { label: '优秀案例', hint: '番茄 41 · RIO 39 · 百果园 36' },
                { label: '桃李 ≈ 豪士', hint: '33 · 35' },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className="inline-flex items-baseline gap-2"
                  style={{
                    padding: '4px 10px',
                    borderRadius: 99,
                    background: 'rgba(76,141,255,0.12)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'MiSans', sans-serif",
                      fontSize: 16,
                      fontWeight: 700,
                      color: '#4C8DFF',
                      lineHeight: 1,
                    }}
                  >
                    {tag.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'MiSans', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.52)',
                      lineHeight: 1,
                    }}
                  >
                    {tag.hint}
                  </span>
                </div>
              ))}
            </div>
            <p
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontSize: 18,
                lineHeight: '28px',
                color: 'rgba(255,255,255,0.78)',
                fontWeight: 500,
              }}
            >
              标本仅瑞幸（49/50）；优秀案例为一颗大番茄、RIO、百果园。竞品中豪士 35、桃李 33 接近，宾堡更低，盼盼仅 7 分。桃李品牌与资质拿满分，产品与 FAQ 仍是主要缺口。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
