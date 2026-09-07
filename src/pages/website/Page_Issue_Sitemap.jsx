import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const MISSING = [
  { label: '无 sitemap 文件', text: '站内没有页面清单，AI 只能靠链接一层层摸索' },
  { label: 'robots.txt 未声明', text: '门口的「告示牌」也没标出地图在哪' },
  { label: '深层页易漏', text: '产品页、新闻页等深层内容容易抓不全' },
];

/** 优秀示例图：public/issue-compare/sitemap-huawei.png */
const HUAWEI_IMAGE = '/issue-compare/sitemap-huawei.png';

export default function Page_Issue_Sitemap() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题四：<H2Em>网站地图 sitemap缺失</H2Em></>}>
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
            sitemap 相当于一份「页面清单」，主动告诉 AI 站内有哪些页面。桃李没有这份清单，AI 只能自己摸索，深层页面容易被漏掉。
          </p>
        </div>

        <div
          className="flex-1 min-h-0 grid"
          style={{ gridTemplateColumns: '0.9fr 1.35fr', gap: 24 }}
        >
          {/* 桃李现状 */}
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
                没有网站地图
              </span>
            </div>

            <div
              className="flex-1 flex flex-col justify-center"
              style={{ padding: '32px 28px' }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 56,
                  fontWeight: 800,
                  color: '#F87171',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                0
              </div>
              <div
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: 28,
                }}
              >
                无可供 AI 读取的页面清单
              </div>

              <div className="flex flex-col" style={{ gap: 18 }}>
                {MISSING.map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontFamily: "'MiSans', sans-serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: '#F87171',
                        marginBottom: 6,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.label}
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

          {/* 优秀示例：华为 */}
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
                  优秀示例：华为
                </span>
                <span
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}
                >
                  完整、可导航的网站地图
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
                consumer.huawei.com/cn/sitemap
              </span>
            </div>

            <div
              className="flex-1 min-h-0 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <img
                src={`${HUAWEI_IMAGE}?v=1`}
                alt="华为网站地图示例"
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
