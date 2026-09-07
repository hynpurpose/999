import React, { useState } from 'react';
import SlideLayout from '../../components/WebsiteReportLayout';

/** 与诊断标准 / 网站架构诊断结果六项及权重一致（满分 50） */
const CHECKS = [
  { label: '结构清晰度', max: 8 },
  { label: '标题层级规范', max: 7 },
  { label: '图片文字说明', max: 7 },
  { label: '抓取权限与安全', max: 10 },
  { label: '网站地图', max: 10 },
  { label: '结构化数据', max: 8 },
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
 * earned 与权重一一对应，得分满分 50。
 * 华为 / 瑞幸：原百分制约 95、85 → 换算 48、43
 * 桃李 = 架构诊断结果 22/50
 */
const ROWS = [
  {
    brand: '华为',
    logo: '/brand-logos/huawei.png',
    initial: '华',
    crawlable: true,
    earned: [8, 7, 7, 10, 10, 6],
    specimen: true,
  },
  {
    brand: '瑞幸咖啡',
    logo: '/brand-logos/luckin.png',
    initial: '瑞',
    crawlable: true,
    // 满分项 3：结构清晰度、图片文字说明、抓取权限与安全
    earned: [8, 5, 7, 10, 6, 7],
    excellence: true,
  },
  {
    brand: '桃李面包',
    logo: '/brand-logos/client-fmcg-taoli.png',
    initial: '桃',
    crawlable: true,
    earned: [5, 3, 7, 7, 0, 0],
    highlight: true,
  },
  {
    brand: '豪士',
    logo: '/brand-logos/haoshi.png',
    initial: '豪',
    crawlable: true,
    earned: [4, 3, 4, 6, 0, 3],
  },
  {
    brand: '宾堡',
    logo: '/brand-logos/bimbo.png',
    initial: '宾',
    crawlable: true,
    earned: [2, 1, 3, 5, 0, 0],
  },
  {
    brand: '盼盼',
    logo: '/brand-logos/panpan.png',
    initial: '盼',
    crawlable: false,
    earned: [0, 0, 0, 0, 0, 0],
  },
].map((row) => ({
  ...row,
  score: sumScore(row.earned),
  pass: `${passCount(row.earned)} / 6`,
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
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 6,
        width: '100%',
      }}
    >
      {CHECKS.map((check, i) => {
        const e = earned[i];
        const st = STATUS_STYLE[checkStatus(e, check.max)];
        return (
          <div
            key={check.label}
            className="flex items-center gap-2 min-w-0"
            style={{
              padding: '5px 10px',
              borderRadius: 8,
              background: st.bg,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                background: st.dot,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                lineHeight: '20px',
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
                fontSize: 13,
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

function BrandRow({ row }) {
  const isSpecimen = row.specimen;
  const isExcellence = row.excellence;
  const statusColor = isSpecimen
    ? '#E7C86B'
    : isExcellence
      ? '#4C8DFF'
      : row.crawlable
        ? '#4ADE80'
        : '#F87171';
  const statusDot = isSpecimen
    ? '#D4AF37'
    : isExcellence
      ? '#4C8DFF'
      : row.crawlable
        ? '#22C55E'
        : '#EF4444';
  const statusLabel = isSpecimen
    ? '标本网站'
    : isExcellence
      ? '优秀案例'
      : row.crawlable
        ? '能被 AI 抓取'
        : '无法被 AI 抓取';

  return (
    <div
      className="flex items-stretch min-h-0 overflow-hidden"
      style={{
        flex: 1,
        borderRadius: 16,
        background: isSpecimen
          ? 'rgba(212,175,55,0.16)'
          : isExcellence
            ? 'rgba(76,141,255,0.09)'
            : '#101425',
        border: isSpecimen
          ? '2px solid #D4AF37'
          : isExcellence || row.highlight
            ? '1.5px solid rgba(76,141,255,0.38)'
            : '1px solid rgba(255,255,255,0.10)',
        boxShadow: isSpecimen
          ? '0 0 0 1px rgba(212,175,55,0.35), inset 0 0 0 1px rgba(212,175,55,0.12)'
          : undefined,
      }}
    >
      <div
        className="flex items-center gap-3 shrink-0"
        style={{ width: 260, padding: '0 20px' }}
      >
        <LogoMark src={row.logo} initial={row.initial} size={52} />
        <div className="min-w-0 flex flex-col justify-center">
          <div
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 24,
              fontWeight: 700,
              lineHeight: '32px',
              color: isSpecimen
                ? '#E7C86B'
                : isExcellence || row.highlight
                  ? '#4C8DFF'
                  : '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            {row.brand}
          </div>
          <div className="inline-flex items-center gap-2" style={{ marginTop: 6 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                background: statusDot,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                lineHeight: 1,
                color: statusColor,
              }}
            >
              {statusLabel}
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center shrink-0"
        style={{ width: 130, padding: '0 6px' }}
      >
        <div
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 16,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.52)',
            marginBottom: 4,
            lineHeight: 1,
          }}
        >
          满分项
        </div>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26,
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
        style={{ width: 110, padding: '0 6px' }}
      >
        <div
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 16,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.52)',
            marginBottom: 4,
            lineHeight: 1,
          }}
        >
          得分
        </div>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 28,
            fontWeight: 800,
            color: row.highlight
              ? '#4C8DFF'
              : row.specimen
                ? '#E7C86B'
                : row.excellence
                  ? '#4C8DFF'
                  : row.crawlable
                    ? '#FFFFFF'
                    : 'rgba(255,255,255,0.42)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          <span>{row.score}</span>
          <span
            style={{
              fontSize: 16,
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
          padding: '8px 16px 8px 18px',
          borderLeft: row.specimen
            ? '1px solid rgba(212,175,55,0.45)'
            : '1px solid rgba(255,255,255,0.10)',
        }}
      >
        <CheckChips earned={row.earned} />
      </div>
    </div>
  );
}

export default function Page_CompetitorCrawl() {
  const topRows = ROWS.filter((r) => r.specimen || r.excellence);
  const competitorRows = ROWS.filter((r) => !r.specimen && !r.excellence);

  return (
    <SlideLayout title="竞品对比">
      <div className="w-full h-full flex flex-col" style={{ gap: 10 }}>
        <div className="flex-1 flex flex-col min-h-0" style={{ gap: 8 }}>
          {topRows.map((row) => (
            <BrandRow key={row.brand} row={row} />
          ))}

          <div
            className="flex items-center shrink-0"
            style={{ gap: 18, padding: '2px 0' }}
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
                fontSize: 16,
                fontWeight: 600,
                color: '#4C8DFF',
                letterSpacing: '0.08em',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              以下为竞品
            </span>
            <div
              style={{
                flex: 1,
                height: 1.5,
                background: 'rgba(76,141,255,0.45)',
              }}
            />
          </div>

          {competitorRows.map((row) => (
            <BrandRow key={row.brand} row={row} />
          ))}
        </div>

        <div
          className="flex items-stretch overflow-hidden shrink-0"
          style={{
            borderRadius: 16,
            background: '#101425',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          <div
            className="flex items-center justify-center shrink-0"
            style={{
              width: 72,
              background: 'rgba(76,141,255,0.12)',
              borderRight: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span
              style={{
                fontFamily: "'AlimamaShuHeiTi', sans-serif",
                fontSize: 24,
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
            style={{ padding: '14px 24px' }}
          >
            <div className="flex items-center gap-3" style={{ marginBottom: 8 }}>
              {[
                { label: '华为标本', hint: '48/50' },
                { label: '瑞幸优秀案例', hint: '43/50' },
                { label: '桃李 ≈ 豪士', hint: '22 · 20' },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className="inline-flex items-baseline gap-2"
                  style={{
                    padding: '5px 12px',
                    borderRadius: 99,
                    background: 'rgba(76,141,255,0.12)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'MiSans', sans-serif",
                      fontSize: 18,
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
                      fontSize: 15,
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
                fontSize: 22,
                lineHeight: '32px',
                color: 'rgba(255,255,255,0.78)',
                fontWeight: 500,
              }}
            >
              标本为华为（48/50），瑞幸为优秀案例（43/50）；竞品里桃李与豪士接近（22 / 20），宾堡更低，盼盼无法被 AI 抓取。桃李仅图片说明拿满分，sitemap 与结构化数据仍为空白。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
