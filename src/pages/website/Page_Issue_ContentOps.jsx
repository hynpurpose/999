import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

/** 桃李现状图：public/issue-compare/contentops-taoli.png */
const TAOLI_IMAGE = '/issue-compare/contentops-taoli.png';
/** RIO 示范图：public/issue-compare/rio-story.png */
const RIO_IMAGE = '/issue-compare/rio-story.png';

export default function Page_Issue_ContentOps() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题五：<H2Em>内容持续运营</H2Em></>}>
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
            桃李官网的内容多为获奖、活动类新闻，对消费者信息价值低——缺少像用户故事、生活场景这样可持续运营、能被 AI 反复引用的长尾内容。
          </p>
        </div>

        <div
          className="flex-1 min-h-0 grid"
          style={{ gridTemplateColumns: '0.9fr 1.35fr', gap: 24 }}
        >
          {/* 桃李：整块图片位 */}
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
              className="flex items-center justify-between shrink-0"
              style={{
                padding: '14px 22px',
                background: 'rgba(239,68,68,0.14)',
                borderBottom: '1.5px solid rgba(239,68,68,0.35)',
              }}
            >
              <div className="flex items-baseline gap-3 min-w-0">
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
                  }}
                >
                  运营内容PR稿居多
                </span>
              </div>
            </div>

            <div
              className="flex-1 min-h-0 overflow-hidden"
              style={{ background: 'rgba(239,68,68,0.10)' }}
            >
              <img
                src={TAOLI_IMAGE}
                alt="桃李内容运营现状截图"
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

          {/* RIO：整块图片位 */}
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
                  优秀示例：RIO
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
                用户故事 · 生活场景
              </span>
            </div>

            <div
              className="flex-1 min-h-0 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <img
                src={RIO_IMAGE}
                alt="RIO 用户故事内容运营示例"
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
