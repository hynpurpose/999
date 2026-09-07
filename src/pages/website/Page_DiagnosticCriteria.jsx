import React, { useState } from 'react';
import SlideLayout from '../../components/WebsiteReportLayout';

const BORDER = '1px solid rgba(255,255,255,0.12)';
const HEADER_BG = 'rgba(255,255,255,0.06)';
const ACCENT = '#4C8DFF';
const CARD_BORDER = '1px solid rgba(255,255,255,0.10)';

const COLS = [
  { key: 'dim', label: '维度', width: 210 },
  { key: 'dir', label: '考察方向', width: 200 },
  { key: 'metric', label: '具体指标', width: 168 },
  { key: 'desc', label: '说明', width: 'auto' },
  { key: 'score', label: '权重', width: 76 },
];

const DIMENSIONS = [
  {
    no: '01',
    title: '网站架构',
    subtitle: 'AI 能否读懂网站',
    maxScore: 50,
    directions: [
      {
        label: '页面结构是否清晰、可被读取',
        metrics: [
          {
            name: '结构清晰度',
            score: 8,
            desc: 'title、description、keywords、og 等是否写全，让 AI 一眼知道这页讲什么。',
          },
          {
            name: '标题层级规范',
            score: 7,
            desc: '是否一页一个 H1、再用 H2 分块；多个 H1 并列会让机器分不清主次。',
          },
          {
            name: '图片文字说明',
            score: 7,
            desc: '关键图片是否有 alt 等文字说明，避免信息只锁在图里、AI 读不到。',
          },
        ],
      },
      {
        label: '是否为 AI 抓取做好相应的配置',
        metrics: [
          {
            name: '抓取权限与安全',
            score: 10,
            desc: 'robots.txt 是否写清放行与屏蔽边界，而不是只有空的 Disallow。',
          },
          {
            name: '网站地图 sitemap',
            score: 10,
            desc: '是否提供页面清单，并在 robots.txt 中声明位置，避免深层页被漏抓。',
          },
          {
            name: '结构化数据',
            score: 8,
            desc: '是否有标准化说明书（如产品参数），供 AI / 搜索引擎直接读取。',
          },
        ],
      },
    ],
  },
  {
    no: '02',
    title: '内容覆盖',
    subtitle: 'AI 能否读到有用信息',
    maxScore: 50,
    directions: [
      {
        label: '基础信息是否齐全',
        metrics: [
          {
            name: '品牌信息',
            score: 8,
            desc: '企业介绍、基地、子公司、零售终端等事实是否齐全、可被核实。',
          },
          {
            name: '产品信息',
            score: 10,
            desc: '配料、克重、保质期等是否以文字呈现，而不是整页压在图片里。',
          },
          {
            name: '资质与信任信息',
            score: 6,
            desc: '国标、认证、专利等是否便于提取，而不是只散落在新闻稿中。',
          },
          {
            name: '售后与服务信息',
            score: 7,
            desc: '保存、新鲜度、保质期等实用问答是否覆盖，而不只是购买入口。',
          },
        ],
      },
      {
        label: '长尾内容是否丰富',
        metrics: [
          {
            name: '使用场景内容',
            score: 6,
            desc: '是否有早餐搭配等场景化内容，便于进入推荐类、场景类提问。',
          },
          {
            name: 'FAQ / 知识科普',
            score: 8,
            desc: '短保、保鲜、保存方式等高频问题是否沉淀成可用的问答页。',
          },
          {
            name: '内容持续运营',
            score: 5,
            desc: '是否有用户故事等可持续运营的长尾内容，而不只是获奖 PR 稿。',
          },
        ],
      },
    ],
  },
];

const TOOLS = [
  {
    name: 'Chrome DevTools',
    logo: '/tool-logos/chrome-devtools.png',
    initial: 'C',
    usage: '查看源码结构、标题层级、图片 alt、页面元信息是否完整可读',
  },
  {
    name: 'Schema Markup Validator',
    logo: '/tool-logos/schema-validator.png',
    initial: 'S',
    usage: '校验结构化数据是否存在、字段是否规范，供 AI / 搜索引擎直接读取',
  },
  {
    name: 'Google Search Console',
    logo: '/tool-logos/google-search-console.png',
    initial: 'G',
    usage: '核对 sitemap 提交与索引覆盖，辅助判断页面是否被发现、抓取',
  },
];

const COMPETITORS = [
  { name: '豪士', logo: '/brand-logos/haoshi.png', initial: '豪' },
  { name: '宾堡', logo: '/brand-logos/bimbo.png', initial: '宾' },
  { name: '盼盼', logo: '/brand-logos/panpan.png', initial: '盼' },
];

const EXCELLENCE_TECH = [
  { name: '瑞幸', logo: '/brand-logos/luckin.png', initial: '瑞' },
  { name: '华为', logo: '/brand-logos/huawei.png', initial: '华' },
];

const EXCELLENCE_CONTENT = [
  { name: '瑞幸', logo: '/brand-logos/luckin.png', initial: '瑞' },
  { name: '百果园', logo: '/brand-logos/pagoda.png', initial: '百' },
  { name: '一颗大番茄', logo: '/brand-logos/tomato.png', initial: '番' },
  { name: 'RIO', logo: '/brand-logos/rio.png', initial: 'R' },
];

const cellPad = {
  padding: '6px 12px',
  verticalAlign: 'middle',
};

const textBase = {
  fontFamily: "'MiSans', sans-serif",
  fontSize: 18,
  lineHeight: '26px',
  color: '#FFFFFF',
};

function LogoMark({ src, initial, size = 72 }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: size,
          height: size,
          borderRadius: 14,
          background: 'rgba(76,141,255,0.16)',
          color: ACCENT,
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
    // 品牌 / 工具 logo 多为白底设计，深色页上需垫一层浅底才看得清
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

function DimensionCell({ dim, isLast }) {
  return (
    <td
      rowSpan={dim.directions.reduce((n, d) => n + d.metrics.length, 0)}
      style={{
        ...cellPad,
        borderBottom: isLast ? 'none' : BORDER,
        borderRight: BORDER,
        background: '#000000',
        width: COLS[0].width,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 28,
              lineHeight: '32px',
              color: ACCENT,
              letterSpacing: '-0.02em',
            }}
          >
            {dim.no}
          </span>
          <span
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontWeight: 700,
              fontSize: 26,
              lineHeight: '32px',
              color: ACCENT,
            }}
          >
            {dim.title}
          </span>
        </div>
        <span
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: '24px',
            color: 'rgba(76,141,255,0.80)',
          }}
        >
          {dim.subtitle}
        </span>
        <span
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: '22px',
            color: ACCENT,
          }}
        >
          满分 {dim.maxScore}
        </span>
      </div>
    </td>
  );
}

function DirectionCell({ label, rowSpan, isLastDim }) {
  return (
    <td
      rowSpan={rowSpan}
      style={{
        ...cellPad,
        borderBottom: isLastDim ? 'none' : BORDER,
        borderRight: BORDER,
        width: COLS[1].width,
      }}
    >
      <span style={{ ...textBase, fontWeight: 600, fontSize: 17, lineHeight: '24px' }}>
        {label}
      </span>
    </td>
  );
}

function CriteriaTable() {
  return (
    <table
      style={{
        width: '100%',
        height: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        tableLayout: 'fixed',
        border: BORDER,
        borderRadius: 12,
        overflow: 'hidden',
        background: '#000000',
      }}
    >
      <colgroup>
        {COLS.map((c) => (
          <col key={c.key} style={{ width: c.width }} />
        ))}
      </colgroup>
      <thead>
        <tr style={{ height: 40 }}>
          {COLS.map((c, i) => (
            <th
              key={c.key}
              style={{
                ...cellPad,
                background: HEADER_BG,
                borderBottom: BORDER,
                borderRight: i < COLS.length - 1 ? BORDER : 'none',
                textAlign: c.key === 'score' ? 'center' : 'left',
                fontFamily: "'MiSans', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                lineHeight: '24px',
                color: '#FFFFFF',
              }}
            >
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {DIMENSIONS.map((dim, dimIdx) => {
          const isLastDim = dimIdx === DIMENSIONS.length - 1;
          const rows = [];
          let dimRendered = false;

          dim.directions.forEach((dir, dirIdx) => {
            const isLastDir = dirIdx === dim.directions.length - 1;

            dir.metrics.forEach((metric, metricIdx) => {
              const isFirstInDir = metricIdx === 0;
              const isLastRow = isLastDim && isLastDir && metricIdx === dir.metrics.length - 1;
              const rowBorder = isLastRow ? 'none' : BORDER;

              rows.push(
                <tr key={`${dim.no}-${dirIdx}-${metricIdx}`}>
                  {!dimRendered && <DimensionCell dim={dim} isLast={isLastDim} />}
                  {isFirstInDir && (
                    <DirectionCell
                      label={dir.label}
                      rowSpan={dir.metrics.length}
                      isLastDim={isLastDim && isLastDir}
                    />
                  )}
                  <td
                    style={{
                      ...cellPad,
                      borderBottom: rowBorder,
                      borderRight: BORDER,
                      width: COLS[2].width,
                    }}
                  >
                    <span style={{ ...textBase, fontWeight: 600 }}>{metric.name}</span>
                  </td>
                  <td
                    style={{
                      ...cellPad,
                      borderBottom: rowBorder,
                      borderRight: BORDER,
                    }}
                  >
                    <span
                      style={{
                        ...textBase,
                        fontWeight: 400,
                        color: 'rgba(255,255,255,0.78)',
                        fontSize: 17,
                        lineHeight: '24px',
                      }}
                    >
                      {metric.desc}
                    </span>
                  </td>
                  <td
                    style={{
                      ...cellPad,
                      borderBottom: rowBorder,
                      textAlign: 'center',
                      width: COLS[4].width,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: 20,
                        lineHeight: '24px',
                        color: ACCENT,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {metric.score}
                    </span>
                    <span
                      style={{
                        fontFamily: "'MiSans', sans-serif",
                        fontWeight: 600,
                        fontSize: 14,
                        color: ACCENT,
                        marginLeft: 1,
                      }}
                    >
                      分
                    </span>
                  </td>
                </tr>,
              );

              dimRendered = true;
            });
          });

          return rows;
        })}
      </tbody>
    </table>
  );
}

function BrandChip({ brand, logoSize = 58 }) {
  return (
    <div
      className="flex items-center gap-2.5"
      style={{
        padding: '8px 12px',
        borderRadius: 12,
        border: CARD_BORDER,
        background: '#101425',
      }}
    >
      <LogoMark src={brand.logo} initial={brand.initial} size={logoSize} />
      <span
        style={{
          fontFamily: "'MiSans', sans-serif",
          fontWeight: 600,
          fontSize: 16,
          lineHeight: '22px',
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
        }}
      >
        {brand.name}
      </span>
    </div>
  );
}

function ScopePanel() {
  return (
    <div className="flex flex-col h-full min-h-0" style={{ gap: 12 }}>
      {/* 工具 */}
      <div
        className="flex flex-col shrink-0"
        style={{
          padding: '12px 14px',
          borderRadius: 14,
          border: CARD_BORDER,
          background: '#101425',
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            lineHeight: '24px',
            color: '#FFFFFF',
          }}
        >
          检测技术与工具
        </div>
        <div className="flex flex-col" style={{ gap: 8 }}>
          {TOOLS.map((tool) => (
            <div key={tool.name} className="flex items-center gap-3">
              <LogoMark src={tool.logo} initial={tool.initial} size={64} />
              <div className="min-w-0 flex-1">
                <div
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    lineHeight: '20px',
                    color: '#FFFFFF',
                    marginBottom: 2,
                  }}
                >
                  {tool.name}
                </div>
                <p
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: '17px',
                    color: 'rgba(255,255,255,0.66)',
                  }}
                >
                  {tool.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 品牌 */}
      <div
        className="flex flex-col min-h-0"
        style={{
          flex: 1,
          padding: '12px 14px',
          borderRadius: 14,
          border: CARD_BORDER,
          background: '#101425',
          gap: 10,
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            lineHeight: '24px',
            color: '#FFFFFF',
          }}
        >
          对比品牌网站
        </div>

        <div className="flex flex-col gap-1.5">
          <span
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              color: ACCENT,
            }}
          >
            对比竞品
          </span>
          <div className="flex flex-wrap gap-2">
            {COMPETITORS.map((b) => (
              <BrandChip key={`竞品-${b.name}`} brand={b} logoSize={58} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              color: ACCENT,
            }}
          >
            优秀案例（网站架构）
          </span>
          <div className="flex flex-wrap gap-2">
            {EXCELLENCE_TECH.map((b) => (
              <BrandChip key={`技术-${b.name}`} brand={b} logoSize={58} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontWeight: 600,
              fontSize: 18,
              color: ACCENT,
            }}
          >
            优秀案例（内容覆盖）
          </span>
          <div className="flex flex-wrap gap-2">
            {EXCELLENCE_CONTENT.map((b) => (
              <BrandChip key={`内容-${b.name}`} brand={b} logoSize={58} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page_DiagnosticCriteria() {
  return (
    <SlideLayout title="诊断标准">
      <div
        className="w-full h-full"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 520px',
          gap: 20,
          minHeight: 0,
        }}
      >
        <div className="min-h-0 min-w-0 h-full">
          <CriteriaTable />
        </div>
        <div className="min-h-0 h-full">
          <ScopePanel />
        </div>
      </div>
    </SlideLayout>
  );
}
