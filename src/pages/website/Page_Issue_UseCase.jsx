import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const MISSING = [
  '没有「早餐怎么吃」「通勤怎么带」等场景内容',
  '推荐类、场景类提问里，AI 找不到可引用的素材',
  '产品停留在参数层，进不了用户生活场景',
];

/** 一颗大示范图：public/issue-compare/yikeda-usecase.png */
const YIKEDA_IMAGE = '/issue-compare/yikeda-usecase.png';

export default function Page_Issue_UseCase() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题三：<H2Em>使用场景内容</H2Em></>}>
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
            桃李官网没有使用场景内容——例如「这款面包适合怎样的早餐搭配」。这类内容能让品牌进入推荐类、场景类提问；桃李几乎是空白。
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
                场景内容缺失
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

          {/* 一颗大：整块图片位 */}
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
                  优秀示例：一颗大番茄
                </span>
                <span
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}
                >
                  按生活场景组织内容
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
                妙用指南 · 减脂轻食
              </span>
            </div>

            <div
              className="flex-1 min-h-0 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <img
                src={YIKEDA_IMAGE}
                alt="一颗大使用场景内容示例"
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
