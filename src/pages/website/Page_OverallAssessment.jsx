import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const SCORE = 55;
const PASS_LINE = 60;
const WARN = '#FBBF24';
const PASS = '#4ADE80';
const FAIL = '#F87171';
const ACCENT = '#4C8DFF';

/** 网站架构 22 + 内容覆盖 33 = 55 */
const COLUMNS = [
  {
    mark: '01',
    title: '网站架构',
    earned: 22,
    max: 50,
    items: [
      {
        name: '抓取权限与安全',
        earned: 7,
        max: 10,
        note: 'AI 可正常抓取，但未写清放行与屏蔽边界',
      },
      {
        name: '结构清晰度',
        earned: 5,
        max: 8,
        note: '有元信息，但首页 3 个 H1、标题摘要陈旧',
      },
      {
        name: '图片文字说明',
        earned: 7,
        max: 7,
        note: '关键图片具备文字说明，AI 可理解图片含义',
      },
      {
        name: '标题层级规范',
        earned: 3,
        max: 7,
        note: '有层级，但 H1/H2/H3 存在跳级',
      },
      {
        name: '网站地图 sitemap',
        earned: 0,
        max: 10,
        note: '无 sitemap，robots.txt 也未声明位置',
      },
      {
        name: '结构化数据',
        earned: 0,
        max: 8,
        note: '全站无 Schema，AI 只能从正文猜测',
      },
    ],
  },
  {
    mark: '02',
    title: '内容覆盖',
    earned: 33,
    max: 50,
    items: [
      {
        name: '品牌信息',
        earned: 8,
        max: 8,
        note: '企业介绍扎实，含基地、子公司、零售终端等',
      },
      {
        name: '资质与信任信息',
        earned: 6,
        max: 6,
        note: '国标、认证、专利有覆盖（多散落新闻稿）',
      },
      {
        name: '产品信息',
        earned: 6,
        max: 10,
        note: '有产品名与图，配料 / 克重等压在图里',
      },
      {
        name: '售后与服务信息',
        earned: 5,
        max: 7,
        note: '有购买入口，缺保存、新鲜度等实用问答',
      },
      {
        name: '内容持续运营',
        earned: 4,
        max: 5,
        note: '有新闻更新，但多为获奖 PR',
      },
      {
        name: '使用场景内容',
        earned: 2,
        max: 6,
        note: '几乎无早餐搭配等场景化内容',
      },
      {
        name: 'FAQ / 知识科普',
        earned: 2,
        max: 8,
        note: '无问答页；声明未沉淀成可用 FAQ',
      },
    ],
  },
];

function scoreColor(earned, max) {
  if (earned >= max) return PASS;
  if (earned === 0) return FAIL;
  return WARN;
}

function ScoreBanner() {
  return (
    <div
      className="w-full flex items-center gap-10 shrink-0"
      style={{
        padding: '22px 32px',
        borderRadius: 18,
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
            lineHeight: 0.88,
            color: WARN,
            letterSpacing: '-0.04em',
          }}
        >
          {SCORE}
        </span>
        <span
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 22,
            fontWeight: 600,
            color: WARN,
            paddingBottom: 8,
            opacity: 0.85,
          }}
        >
          / 100
        </span>
      </div>

      <div
        className="shrink-0"
        style={{ width: 1, height: 64, background: 'rgba(255,255,255,0.14)' }}
      />

      <div className="flex-1 min-w-0" style={{ paddingTop: 4 }}>
        <div
          className="relative w-full"
          style={{
            height: 12,
            borderRadius: 99,
            background: 'rgba(255,255,255,0.08)',
          }}
        >
          <div
            style={{
              width: `${SCORE}%`,
              height: '100%',
              borderRadius: 99,
              background: `linear-gradient(90deg, #FDBA74 0%, ${WARN} 100%)`,
            }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${PASS_LINE}%` }}
          >
            <div
              style={{
                width: 2,
                height: 28,
                marginLeft: -1,
                borderRadius: 2,
                background: ACCENT,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 32,
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                fontFamily: "'MiSans', sans-serif",
                fontSize: 14,
                color: ACCENT,
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              及格线 {PASS_LINE}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreFraction({ earned, max, size = 22 }) {
  const color = scoreColor(earned, max);
  return (
    <span
      className="shrink-0 tabular-nums"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }}
    >
      <span style={{ color }}>{earned}</span>
      <span style={{ color: 'rgba(255,255,255,0.42)', fontWeight: 600 }}>/{max}</span>
    </span>
  );
}

function ScoreCells({ earned, max }) {
  const color = scoreColor(earned, max);
  const size = max >= 10 ? 10 : 12;

  return (
    <div
      className="shrink-0 flex items-center"
      style={{ gap: 5 }}
      aria-hidden
    >
      {Array.from({ length: max }, (_, i) => {
        const filled = i >= max - earned;
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

function ScoreItem({ item, isLast }) {
  const color = scoreColor(item.earned, item.max);

  return (
    <div
      className="flex items-center gap-4"
      style={{
        flex: '1 1 0',
        minHeight: 0,
        padding: '0 4px 0 0',
        borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <span
        className="shrink-0"
        style={{
          width: 4,
          height: 28,
          borderRadius: 99,
          background: color,
          opacity: 0.9,
        }}
      />
      <div style={{ width: 70, flexShrink: 0 }}>
        <ScoreFraction earned={item.earned} max={item.max} size={22} />
      </div>
      <div className="min-w-0 flex-1">
        <div
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            lineHeight: '26px',
            color: '#FFFFFF',
          }}
        >
          {item.name}
        </div>
        <p
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 15,
            lineHeight: '22px',
            color: 'rgba(255,255,255,0.52)',
            fontWeight: 400,
          }}
        >
          {item.note}
        </p>
      </div>
      <ScoreCells earned={item.earned} max={item.max} />
    </div>
  );
}

export default function Page_OverallAssessment() {
  return (
    <SlideLayout
      title="诊断结论"
      subtitle={
        <>
          <H2Em>不及格</H2Em>，存在较大提升空间。
        </>
      }
    >
      <div className="w-full h-full flex flex-col min-h-0">
        <ScoreBanner />

        <div className="flex-1 flex gap-6 min-h-0">
          {COLUMNS.map((col) => (
            <div
              key={col.mark}
              className="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden"
              style={{
                borderRadius: 18,
                background: '#101425',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.35)',
              }}
            >
              <div
                className="flex items-center gap-3 shrink-0"
                style={{
                  padding: '16px 22px',
                  background: 'rgba(76,141,255,0.09)',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: ACCENT,
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  {col.mark}
                </span>
                <h3
                  style={{
                    fontFamily: "'AlimamaShuHeiTi', sans-serif",
                    fontSize: 30,
                    lineHeight: '38px',
                    color: '#FFFFFF',
                  }}
                >
                  {col.title}
                </h3>
                <div className="ml-auto shrink-0">
                  <ScoreFraction earned={col.earned} max={col.max} size={26} />
                </div>
              </div>

              <div
                className="flex-1 flex flex-col min-h-0"
                style={{ padding: '6px 20px 10px 18px' }}
              >
                {col.items.map((item, i) => (
                  <ScoreItem
                    key={item.name}
                    item={item}
                    isLast={i === col.items.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
