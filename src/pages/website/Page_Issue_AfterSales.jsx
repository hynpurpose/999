import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const MISSING = [
  '官网只有天猫 / 京东购买入口，没有服务问答',
  '「开封后怎么保存」「如何判断新鲜」等实用问题空白',
  '用户高频售后问题，官网无法作为权威答案源',
];

/** 优秀示例图：public/issue-compare/aftersales-example.png */
const EXAMPLE_IMAGE = '/issue-compare/aftersales-example.png';

export default function Page_Issue_AfterSales() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题二：<H2Em>售后与服务信息</H2Em></>}>
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
            官网只有购买入口，但「开封后怎么保存」「如何判断新鲜」「保质期到了还能吃吗」这类实用问答一概没有——这些都是用户会问、且官网最该权威作答的问题。
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
                售后服务信息缺失
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

          {/* 优秀示例：整块图片位 */}
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
                  优秀示例：百果园
                </span>
                <span
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}
                >
                  放心买 · 随心退
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
                售后服务页
              </span>
            </div>

            <div
              className="flex-1 min-h-0 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <img
                src={`${EXAMPLE_IMAGE}?v=2`}
                alt="百果园放心买随心退示例"
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
