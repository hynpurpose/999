import React from 'react';
import SlideLayout from '../WebsiteReportLayout';
import {
  ScoreGauge,
  StatusMark,
  severityColor,
  ACCENT,
  FAIL,
  WARN,
  PASS,
} from './ProcessPsiUI';

const GEO = { score: 55, max: 100, passLine: 60 };
const GSC_LOGO = '/tool-logos/google-search-console.png';

export const GEO_GAPS = [
  { name: '网站地图 sitemap', score: '0/10', severity: 'fail' },
  { name: '结构化数据 Schema', score: '0/8', severity: 'fail' },
  { name: '标题层级规范', score: '3/7', severity: 'warn' },
  { name: '结构清晰度', score: '5/8', severity: 'warn' },
  { name: '抓取权限与安全', score: '7/10', severity: 'warn' },
  { name: '产品信息', score: '6/10', severity: 'warn' },
  { name: '售后与服务信息', score: '5/7', severity: 'warn' },
  { name: '使用场景内容', score: '2/6', severity: 'fail' },
  { name: 'FAQ / 知识科普', score: '2/8', severity: 'fail' },
];

function Block({
  title,
  hint,
  accent = ACCENT,
  children,
  className = '',
  bodyPad = '12px 16px 14px',
  fill = true,
}) {
  return (
    <div
      className={`flex flex-col min-h-0 ${className}`}
      style={{
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.10)',
        background: '#101425',
        boxShadow: '0 1px 3px rgba(0,0,0,0.35)',
      }}
    >
      <div
        style={{
          padding: '10px 16px 9px 14px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(76,141,255,0.07)',
          borderLeft: `4px solid ${accent}`,
        }}
      >
        <h3
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: '28px',
            margin: 0,
          }}
        >
          {title}
        </h3>
        {hint && (
          <p
            style={{
              margin: '4px 0 0',
              fontFamily: "'MiSans', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.52)',
              lineHeight: '22px',
            }}
          >
            {hint}
          </p>
        )}
      </div>
      <div
        className={fill ? 'flex-1 min-h-0 flex flex-col' : 'flex flex-col'}
        style={{ padding: bodyPad }}
      >
        {children}
      </div>
    </div>
  );
}

function IssueLine({ severity = 'fail', title, detail }) {
  return (
    <div
      className="flex items-start gap-2"
      style={{
        padding: '5px 0',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <StatusMark severity={severity} size={11} />
      <div className="min-w-0 flex-1 flex items-baseline justify-between gap-2">
        <span
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: severityColor(severity),
            lineHeight: '22px',
          }}
        >
          {title}
        </span>
        {detail && (
          <span
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.42)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {detail}
          </span>
        )}
      </div>
    </div>
  );
}

function ColHead({ children, score, tone }) {
  return (
    <div className="flex items-baseline justify-between gap-2" style={{ marginBottom: 4 }}>
      <span
        style={{
          fontFamily: "'MiSans', sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: 'rgba(255,255,255,0.78)',
        }}
      >
        {children}
      </span>
      {score != null && (
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 20,
            fontWeight: 800,
            color: tone,
            letterSpacing: '-0.02em',
          }}
        >
          {score}
        </span>
      )}
    </div>
  );
}

function metricTone(status) {
  if (status === 'pass') return PASS;
  if (status === 'warn') return WARN;
  return FAIL;
}

function metricBg(status) {
  if (status === 'pass') return { bg: 'rgba(74,222,128,0.10)', border: 'rgba(74,222,128,0.26)' };
  if (status === 'warn') return { bg: 'rgba(251,191,36,0.10)', border: 'rgba(251,191,36,0.28)' };
  return { bg: 'rgba(248,113,113,0.10)', border: 'rgba(248,113,113,0.22)' };
}

/**
 * 诊断过程单页（桌面 / 移动共用布局）
 */
export default function ProcessLabPage({
  pageTitle,
  meta,
  categories,
  metrics,
  metricsHint,
  perfInsights,
  a11yFindings,
  bpFindings,
  seoFindings,
  seoNote,
  perfScore,
  a11yScore,
  bpScore,
  seoScore,
}) {
  const perfTop = perfInsights.slice(0, 6);
  const a11yTop = a11yFindings.slice(0, 4);
  const bpTop = bpFindings.slice(0, 3);
  const seoMain = seoFindings[0];

  return (
    <SlideLayout title={pageTitle} contentTop={220}>
      <div className="w-full h-full flex flex-col" style={{ gap: 10 }}>
        <div
          className="flex items-center gap-3 shrink-0"
          style={{
            padding: '10px 16px',
            borderRadius: 12,
            background: '#101425',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          <img
            src={GSC_LOGO}
            alt=""
            style={{ width: 36, height: 36, objectFit: 'contain', flexShrink: 0 }}
          />
          <div className="min-w-0 flex-1">
            <div
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: '24px',
              }}
            >
              检测工具：Google Search Console · PageSpeed Insights
            </div>
            <div
              style={{
                fontFamily: "'MiSans', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.52)',
                lineHeight: '20px',
                marginTop: 2,
              }}
            >
              {meta.formFactorLabel}实验室报告 · {meta.url} · {meta.capturedAt} · Lighthouse{' '}
              {meta.lighthouse}
              {meta.device ? ` · ${meta.device}` : ''}
            </div>
          </div>
        </div>

        <div
          className="grid shrink-0 items-start"
          style={{ gridTemplateColumns: '1.15fr 0.85fr', gap: 12 }}
        >
          <Block
            title="一、官网技术体检得分"
            hint="四维工具分 + GEO 专项分（架构 22 + 内容 33，及格线 60）。"
            bodyPad="12px 14px 14px"
            fill={false}
          >
            <div className="flex items-end justify-around">
              {categories.map((c) => (
                <ScoreGauge key={c.key} score={c.score} size={84} label={c.label} />
              ))}
              <ScoreGauge score={GEO.score} size={84} label="GEO 诊断" />
            </div>
          </Block>

          <Block
            title="二、打开速度与稳定性"
            hint={metricsHint}
            accent={FAIL}
            bodyPad="8px 10px 8px"
            fill={false}
          >
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {metrics.map((m) => {
                const tone = metricTone(m.status);
                const box = metricBg(m.status);
                return (
                  <div
                    key={m.key}
                    className="flex items-center gap-2"
                    style={{
                      padding: '5px 8px',
                      borderRadius: 8,
                      background: box.bg,
                      border: `1px solid ${box.border}`,
                    }}
                  >
                    <StatusMark severity={m.status} size={9} />
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        color: tone,
                        width: 26,
                        flexShrink: 0,
                      }}
                    >
                      {m.short}
                    </span>
                    <span
                      style={{
                        fontFamily: "'MiSans', sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.66)',
                        flex: 1,
                        minWidth: 0,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {m.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 800,
                        fontSize: 17,
                        color: tone,
                        letterSpacing: '-0.02em',
                        flexShrink: 0,
                      }}
                    >
                      {m.display}
                    </span>
                  </div>
                );
              })}
            </div>
          </Block>
        </div>

        <Block
          title="三、主要问题一览"
          hint="左两列来自 PageSpeed；右列为 GEO 报告已理出的缺口。冲突处以 GEO 口径为准。"
          className="flex-1 min-h-0"
          bodyPad="8px 14px 10px"
        >
          <div
            className="flex-1 min-h-0 grid"
            style={{ gridTemplateColumns: '1.15fr 1fr 1.05fr', gap: 16 }}
          >
            <div className="min-h-0 flex flex-col">
              <ColHead score={perfScore} tone={perfScore < 50 ? FAIL : WARN}>
                性能瓶颈
              </ColHead>
              {perfTop.map((item) => (
                <IssueLine
                  key={item.title}
                  severity={item.severity}
                  title={item.title}
                  detail={item.detail}
                />
              ))}
              <div style={{ height: 8 }} />
              <ColHead score={seoScore} tone={WARN}>
                搜索抓取
              </ColHead>
              <IssueLine severity="fail" title={seoMain.title} />
              {seoNote && (
                <p
                  style={{
                    margin: '4px 0 0',
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 13,
                    lineHeight: '18px',
                    color: 'rgba(255,255,255,0.42)',
                  }}
                >
                  {seoNote}
                </p>
              )}
            </div>

            <div className="min-h-0 flex flex-col">
              <ColHead score={a11yScore} tone={WARN}>
                无障碍
              </ColHead>
              {a11yTop.map((f) => (
                <IssueLine key={f.title} severity="fail" title={f.title} />
              ))}
              <div style={{ height: 8 }} />
              <ColHead score={bpScore} tone={WARN}>
                技术规范
              </ColHead>
              {bpTop.map((f) => (
                <IssueLine
                  key={f.title}
                  severity={f.severity}
                  title={f.title}
                  detail={f.detail || undefined}
                />
              ))}
            </div>

            <div
              className="min-h-0 flex flex-col"
              style={{
                padding: '8px 10px',
                borderRadius: 12,
                background: 'rgba(76,141,255,0.09)',
                border: '1px solid rgba(76,141,255,0.24)',
              }}
            >
              <ColHead score={`${GEO.score}/${GEO.max}`} tone={WARN}>
                GEO 诊断
              </ColHead>
              <p
                style={{
                  margin: '0 0 4px',
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 13,
                  lineHeight: '18px',
                  color: 'rgba(255,255,255,0.52)',
                }}
              >
                架构 22/50 · 内容 33/50 · 未拿满分项
              </p>
              {GEO_GAPS.map((g) => (
                <IssueLine
                  key={g.name}
                  severity={g.severity}
                  title={g.name}
                  detail={g.score}
                />
              ))}
            </div>
          </div>
        </Block>
      </div>
    </SlideLayout>
  );
}
