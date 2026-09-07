import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const HIGHLIGHTS = [
  { label: '可引用数字', text: '咖啡因毫克数、热量 kcal，写到测量条件' },
  { label: '可引用卖点', text: '「全球卖出 20 亿杯」「瑞幸首创」等可直接被 AI 转述' },
  { label: '分类清晰', text: '拿铁 / 美式 / 果蔬茶等栏目，便于按品类检索' },
];

const PRODUCT_IMAGE = '/issue-compare/luckin-products.png';

export default function Page_Benchmark_Luckin_Products() {
  return (
    <SlideLayout title="标杆案例说明" subtitle={<>亮点二：<H2Em>产品页是一座「事实库」</H2Em></>}>
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
            每款产品不只是一张图——<strong style={{ fontWeight: 700, color: '#4ADE80' }}>咖啡因、热量、卖点句都以文字写在页面上</strong>，AI 能直接读、直接引用。这正是桃李产品页目前最缺的一层。
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
                事实库长什么样
              </span>
            </div>
            <div
              className="flex-1 flex flex-col justify-center"
              style={{ padding: '24px 26px', gap: 26 }}
            >
              {HIGHLIGHTS.map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontFamily: "'MiSans', sans-serif",
                      fontSize: 24,
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: 8,
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

              <div
                style={{
                  marginTop: 4,
                  padding: '14px 16px',
                  borderRadius: 12,
                  background: 'rgba(34,197,94,0.12)',
                  borderLeft: '3px solid #22C55E',
                }}
              >
                <p
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 18,
                    fontWeight: 600,
                    lineHeight: '28px',
                    color: '#4ADE80',
                  }}
                >
                  例：生椰拿铁 · 咖啡因 118.4mg · 热量 179kcal（大杯 / 冰 / 默认浓度）
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
                瑞幸产品页
              </span>
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 18,
                  color: 'rgba(255,255,255,0.52)',
                }}
              >
                lkcoffee.com/products
              </span>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <img
                src={`${PRODUCT_IMAGE}?v=2`}
                alt="瑞幸咖啡产品页截图"
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
