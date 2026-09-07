import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const MISSING = [
  '没有独立 FAQ / 知识科普页，用户高频问题无处可答',
  '短保、保鲜、保存方式等实用科普未沉淀成文字',
  '敏感议题声明散落各处，未整理成可被 AI 引用的问答',
];

/** 瑞幸 FAQ 示范图：public/issue-compare/luckin-faq.png */
const LUCKIN_IMAGE = '/issue-compare/luckin-faq.png';

export default function Page_Issue_FAQ() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题四：<H2Em>FAQ / 知识科普</H2Em></>}>
      <div className="w-full h-full flex flex-col">
        <div
          style={{
            padding: '18px 28px',
            borderRadius: 16,
            background: 'rgba(239,68,68,0.12)',
            borderLeft: '4px solid #EF4444',
            marginBottom: 22,
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 28,
              lineHeight: '40px',
              color: '#FFFFFF',
              fontWeight: 500,
            }}
          >
            桃李官网没有 FAQ / 知识科普——例如「短保面包怎么保存」「隔夜还能吃吗」。这类问答能承接用户高频提问，并被 AI 直接引用；桃李几乎是空白。
          </p>
        </div>

        <div
          className="flex-1 min-h-0 grid"
          style={{ gridTemplateColumns: '0.9fr 1.35fr', gap: 24 }}
        >
          {/* 桃李：点明缺失 */}
          <div
            className="flex flex-col min-h-0 overflow-hidden"
            style={{
              borderRadius: 18,
              border: '2.5px solid #F87171',
              background: '#101425',
              boxShadow: '0 0 0 1px rgba(239,68,68,0.28)',
            }}
          >
            <div
              style={{
                padding: '14px 22px',
                background: 'rgba(239,68,68,0.14)',
                borderBottom: '1.5px solid rgba(239,68,68,0.35)',
              }}
            >
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#F87171',
                }}
              >
                桃李现状
              </span>
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginLeft: 12,
                }}
              >
                FAQ / 科普缺失
              </span>
            </div>
            <div
              className="flex-1 flex flex-col justify-center"
              style={{ padding: '28px 28px 32px' }}
            >
              <div
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 48,
                  fontWeight: 700,
                  color: 'rgba(248,113,113,0.30)',
                  lineHeight: 1,
                  marginBottom: 28,
                }}
              >
                空白
              </div>
              <div className="flex flex-col gap-4">
                {MISSING.map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 99,
                        background: '#EF4444',
                        marginTop: 12,
                        flexShrink: 0,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "'MiSans', sans-serif",
                        fontSize: 24,
                        lineHeight: '34px',
                        color: 'rgba(255,255,255,0.78)',
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 瑞幸：整块图片位 */}
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
                padding: '14px 22px',
                background: 'rgba(34,197,94,0.14)',
                borderBottom: '1.5px solid rgba(34,197,94,0.38)',
              }}
            >
              <div className="flex items-baseline gap-3 min-w-0">
                <span
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#4ADE80',
                  }}
                >
                  优秀示例：瑞幸咖啡
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 18,
                  color: 'rgba(255,255,255,0.52)',
                  flexShrink: 0,
                }}
              >
                健康饮食 · 场景选择
              </span>
            </div>

            <div
              className="flex-1 min-h-0 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <img
                src={LUCKIN_IMAGE}
                alt="瑞幸咖啡 FAQ 知识科普示例"
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
