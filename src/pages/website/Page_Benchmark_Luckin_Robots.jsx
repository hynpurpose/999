import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const LINES = [
  { text: 'User-agent: *', tone: 'muted', note: '对所有爬虫生效' },
  { text: 'Allow: /products', tone: 'allow', note: '放行产品页' },
  { text: 'Allow: /products/', tone: 'allow', note: null },
  { text: 'Allow: /faq', tone: 'allow', note: '放行 FAQ 页' },
  { text: 'Allow: /faq/', tone: 'allow', note: null },
  { text: 'Disallow: /*api/', tone: 'deny', note: '屏蔽接口路径' },
  { text: 'Disallow: /verifycode', tone: 'deny', note: '屏蔽验证码页' },
];

const HOW_TO = [
  {
    label: 'Allow',
    meaning: '明确允许抓取',
    text: '告诉爬虫：这两条路径可以进。瑞幸只点名放行了产品页和 FAQ——正是喂给 AI 的内容入口。',
  },
  {
    label: 'Disallow',
    meaning: '明确禁止抓取',
    text: '把接口、验证码等无关路径挡在外面，避免爬虫浪费配额、也减少噪音。',
  },
  {
    label: 'User-agent: *',
    meaning: '对所有爬虫一视同仁',
    text: '不区分搜索引擎还是 AI 助手；规则统一，意图清晰。',
  },
];

export default function Page_Benchmark_Luckin_Robots() {
  return (
    <SlideLayout title="标杆案例说明" subtitle={<>亮点一：<H2Em>robots.txt 是刻意设计的</H2Em></>}>
      <div className="w-full h-full flex flex-col">
        <div
          style={{
            padding: '16px 28px',
            borderRadius: 16,
            background: 'rgba(34,197,94,0.12)',
            borderLeft: '4px solid #22C55E',
            marginBottom: 20,
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 26,
              lineHeight: '38px',
              color: '#FFFFFF',
              fontWeight: 500,
            }}
          >
            robots.txt 是网站门口的「告示牌」。瑞幸没有写一堆空泛规则，而是<strong style={{ fontWeight: 700, color: '#4ADE80' }}>只点名放行产品页与 FAQ</strong>——这两个页面，就是做给 AI 看的。
          </p>
        </div>

        <div
          className="flex-1 min-h-0 grid"
          style={{ gridTemplateColumns: '1.05fr 1fr', gap: 24 }}
        >
          {/* 文件原文 */}
          <div
            className="flex flex-col min-h-0 overflow-hidden"
            style={{
              borderRadius: 18,
              border: '2.5px solid #4ADE80',
              background: '#101425',
              boxShadow: '0 0 0 1px rgba(34,197,94,0.28)',
            }}
          >
            <div
              className="flex items-center justify-between shrink-0"
              style={{
                padding: '12px 22px',
                background: 'rgba(34,197,94,0.14)',
                borderBottom: '1.5px solid rgba(34,197,94,0.38)',
              }}
            >
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#4ADE80',
                }}
              >
                文件原文
              </span>
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 18,
                  color: 'rgba(255,255,255,0.52)',
                }}
              >
                lkcoffee.com/robots.txt
              </span>
            </div>

            <div
              className="flex-1 min-h-0 flex flex-col justify-center"
              style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.05)' }}
            >
              <div className="flex flex-col" style={{ gap: 10 }}>
                {LINES.map((line) => {
                  const color =
                    line.tone === 'allow'
                      ? '#4ADE80'
                      : line.tone === 'deny'
                        ? '#F87171'
                        : '#94A3B8';
                  return (
                    <div key={line.text} className="flex items-center gap-4">
                      <code
                        style={{
                          fontFamily: "'Montserrat', 'MiSans', monospace",
                          fontSize: 22,
                          fontWeight: 600,
                          color,
                          lineHeight: 1.35,
                          flex: 1,
                          minWidth: 0,
                        }}
                      >
                        {line.text}
                      </code>
                      {line.note ? (
                        <span
                          style={{
                            fontFamily: "'MiSans', sans-serif",
                            fontSize: 18,
                            fontWeight: 600,
                            color:
                              line.tone === 'allow'
                                ? '#86EFAC'
                                : line.tone === 'deny'
                                  ? '#FCA5A5'
                                  : '#CBD5E1',
                            flexShrink: 0,
                          }}
                        >
                          {line.note}
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 怎么看 */}
          <div
            className="flex flex-col min-h-0 overflow-hidden"
            style={{
              borderRadius: 18,
              border: '1px solid rgba(255,255,255,0.10)',
              background: '#101425',
              boxShadow: '0 1px 2px rgba(0,0,0,0.35)',
            }}
          >
            <div
              style={{
                padding: '12px 22px',
                background: 'rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}
              >
                怎么看这份文件
              </span>
            </div>

            <div
              className="flex-1 flex flex-col justify-center"
              style={{ padding: '22px 26px', gap: 22 }}
            >
              {HOW_TO.map((item) => (
                <div key={item.label}>
                  <div className="flex items-baseline gap-3" style={{ marginBottom: 8 }}>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 20,
                        fontWeight: 700,
                        color: '#4C8DFF',
                        lineHeight: 1,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'MiSans', sans-serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: '#FFFFFF',
                      }}
                    >
                      {item.meaning}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'MiSans', sans-serif",
                      fontSize: 20,
                      fontWeight: 500,
                      lineHeight: '30px',
                      color: 'rgba(255,255,255,0.66)',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
