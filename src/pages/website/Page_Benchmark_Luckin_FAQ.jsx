import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const CATEGORIES = [
  '健康饮食类',
  '场景选择类',
  '口味口感类',
  '特殊人群类',
  '定制选项类',
  '产品对比类',
  '品牌故事类',
  '性价比/口碑类',
];

const FAQ_IMAGE = '/issue-compare/luckin-faq.png';

export default function Page_Benchmark_Luckin_FAQ() {
  return (
    <SlideLayout title="标杆案例说明" subtitle={<>亮点三：<H2Em>FAQ 直接按 AI 问答场景分类</H2Em></>}>
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
            栏目按<strong style={{ fontWeight: 700, color: '#4ADE80' }}>用户会问 AI 的场景</strong>来分：健康饮食、场景选择、特殊人群、产品对比……问题就是原话，答案直接给数字。
          </p>
        </div>

        <div
          className="flex-1 min-h-0 grid"
          style={{ gridTemplateColumns: '0.85fr 1.35fr', gap: 24 }}
        >
          <div
            className="flex flex-col min-h-0 overflow-hidden"
            style={{
              borderRadius: 18,
              border: '1px solid rgba(255,255,255,0.10)',
              background: '#101425',
            }}
          >
            <div
              style={{
                padding: '12px 22px',
                background: 'rgba(76,141,255,0.12)',
                borderBottom: '1px solid rgba(76,141,255,0.20)',
              }}
            >
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#4C8DFF',
                }}
              >
                八大问答场景
              </span>
            </div>

            <div
              className="flex-1 flex flex-col"
              style={{ padding: '20px 22px', gap: 14 }}
            >
              <div
                className="flex flex-wrap"
                style={{ gap: 10 }}
              >
                {CATEGORIES.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontFamily: "'MiSans', sans-serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: '#FFFFFF',
                      background: 'rgba(255,255,255,0.06)',
                      padding: '8px 14px',
                      borderRadius: 99,
                      lineHeight: 1,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: 'auto',
                  padding: '16px 18px',
                  borderRadius: 12,
                  background: 'rgba(34,197,94,0.12)',
                  borderLeft: '3px solid #22C55E',
                }}
              >
                <div
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#4ADE80',
                    marginBottom: 8,
                  }}
                >
                  问答长这样
                </div>
                <p
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: '30px',
                    color: '#FFFFFF',
                    marginBottom: 6,
                  }}
                >
                  「哪款饮品热量最低？」
                </p>
                <p
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: '28px',
                    color: 'rgba(255,255,255,0.78)',
                  }}
                >
                  标准美式约 11kcal · 加浓美式约 14kcal · 茉莉花香拿铁约 76kcal
                </p>
              </div>
            </div>
          </div>

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
                瑞幸 FAQ 页
              </span>
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 18,
                  color: 'rgba(255,255,255,0.52)',
                }}
              >
                lkcoffee.com/faq
              </span>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <img
                src={`${FAQ_IMAGE}?v=2`}
                alt="瑞幸咖啡 FAQ 页截图"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
