import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const COMPARISONS = [
  {
    brand: '桃李',
    tone: 'bad',
    caption: '正文几乎为零，信息锁在图片里',
    detail: '仅有产品名、时间、浏览次数',
    src: '/issue-compare/taoli-product.png?v=3',
    href: 'https://www.tolybread.cn/article/600.html',
  },
  {
    brand: '豪士',
    tone: 'good',
    caption: '卖点与参数以文字呈现',
    detail: '标题、卖点、配比说明均可被 AI 读取',
    src: '/issue-compare/haoshi-product.png?v=3',
    href: 'https://www.haoshifood.com/product1',
  },
];

export default function Page_Issue_ProductInfo() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题一：<H2Em>产品信息缺失</H2Em></>}>
      <div className="w-full h-full flex flex-col">
        {/* 问题说明 */}
        <div
          style={{
            padding: '18px 28px',
            borderRadius: 16,
            background: 'rgba(239,68,68,0.12)',
            borderLeft: '4px solid #EF4444',
            marginBottom: 24,
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
            产品详情页正文几乎为零。除了产品名、发布时间和浏览次数，没有配料、克重、保质期、营养成分——信息全压在一张图片里，而图片里的文字 AI 读不到。
          </p>
        </div>

        {/* 可视化对比 */}
        <div
          className="flex-1 min-h-0 grid"
          style={{ gridTemplateColumns: '1fr 1fr', gap: 28 }}
        >
          {COMPARISONS.map((item) => {
            const accent = item.tone === 'good' ? '#4ADE80' : '#F87171';
            const bg =
              item.tone === 'good'
                ? 'rgba(34,197,94,0.14)'
                : 'rgba(239,68,68,0.14)';
            return (
              <div
                key={item.brand}
                className="flex flex-col min-h-0 overflow-hidden"
                style={{
                  borderRadius: 18,
                  border: `2.5px solid ${accent}`,
                  background: '#101425',
                  boxShadow: `0 0 0 1px ${
                    item.tone === 'good'
                      ? 'rgba(34,197,94,0.28)'
                      : 'rgba(239,68,68,0.28)'
                  }`,
                }}
              >
                <div
                  className="flex items-center justify-between shrink-0"
                  style={{
                    padding: '14px 22px',
                    background: bg,
                    borderBottom: `1.5px solid ${
                      item.tone === 'good'
                        ? 'rgba(34,197,94,0.38)'
                        : 'rgba(239,68,68,0.35)'
                    }`,
                  }}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      style={{
                        fontFamily: "'MiSans', sans-serif",
                        fontSize: 28,
                        fontWeight: 700,
                        color: accent,
                        lineHeight: 1,
                      }}
                    >
                      {item.brand}
                    </span>
                    <span
                      style={{
                        fontFamily: "'MiSans', sans-serif",
                        fontSize: 22,
                        fontWeight: 600,
                        color: '#FFFFFF',
                        lineHeight: 1,
                      }}
                    >
                      {item.caption}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'MiSans', sans-serif",
                      fontSize: 18,
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.52)',
                    }}
                  >
                    {item.detail}
                  </span>
                </div>

                <div
                  className="flex-1 min-h-0 relative overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <img
                    src={item.src}
                    alt={`${item.brand}产品页截图`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}
