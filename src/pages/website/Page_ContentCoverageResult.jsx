import React from 'react';
import SlideLayout from '../../components/WebsiteReportLayout';

const PASS = '#4ADE80';
const FAIL = '#F87171';
const WARN = '#FBBF24';
const ACCENT = '#4C8DFF';
const DIVIDER = '1px solid rgba(255,255,255,0.10)';

/** 与综合评估页「内容覆盖」得分一致，合计 33/50 */
const ROWS = [
  {
    title: '基础信息是否齐全',
    items: [
      {
        label: '品牌信息',
        earned: 8,
        max: 8,
        desc: '企业介绍扎实，含基地、子公司、零售终端等硬事实。',
      },
      {
        label: '产品信息',
        earned: 6,
        max: 10,
        desc: '有产品名与图，配料 / 克重 / 保质期等压在图里，AI 难读。',
      },
      {
        label: '资质与信任信息',
        earned: 6,
        max: 6,
        desc: '国标、认证、专利有覆盖，但多散落新闻稿，无独立页。',
      },
      {
        label: '售后与服务信息',
        earned: 5,
        max: 7,
        desc: '有购买入口，缺保存、新鲜度、保质期等实用问答。',
      },
    ],
  },
  {
    title: '长尾内容是否丰富',
    items: [
      {
        label: '使用场景内容',
        earned: 2,
        max: 6,
        desc: '几乎无早餐搭配等场景化内容，难被推荐类提问引用。',
      },
      {
        label: 'FAQ / 知识科普',
        earned: 2,
        max: 8,
        desc: '无问答页；敏感议题声明未沉淀成可用 FAQ。',
      },
      {
        label: '内容持续运营',
        earned: 4,
        max: 5,
        desc: '有新闻更新，但多为获奖 PR，对消费者信息价值偏低。',
      },
    ],
  },
];

const TOTAL_EARNED = 33;
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
            fontSize: 22,
            fontWeight: 700,
            lineHeight: '28px',
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
            fontSize: 22,
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
          fontSize: 17,
          fontWeight: 500,
          lineHeight: '26px',
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

export default function Page_ContentCoverageResult() {
  return (
    <SlideLayout title="内容覆盖诊断结果">
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
            桃李官网只告诉了 AI「桃李是谁」，答不出「桃李的产品怎么样」——品牌层面的基础信息合格，但消费者最常拿去问 AI 的产品、健康、场景类内容几乎是空白。
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
