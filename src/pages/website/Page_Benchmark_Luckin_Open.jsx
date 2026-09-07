import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const POINTS = [
  {
    no: '01',
    title: '正文在 HTML 里，不靠前端「再画一遍」',
    text: '产品名、热量、问答答案都以文字写在源码中。AI 打开页面就能读到，不必等脚本跑完。',
  },
  {
    no: '02',
    title: '门口不挡、内容可进',
    text: 'robots.txt 对 /products、/faq 明确 Allow；无登录墙、无验证码拦路，国内 AI 搜索与助手都能正常访问。',
  },
  {
    no: '03',
    title: '内容形态天然适合被引用',
    text: '「问题 + 带数字的答案」结构，正好对应用户向 AI 提问的方式——被转述时几乎不用改写。',
  },
];

export default function Page_Benchmark_Luckin_Open() {
  return (
    <SlideLayout title="标杆案例说明" subtitle={<>亮点四：<H2Em>内容对 AI 完全开放</H2Em></>}>
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
            有了产品事实和 FAQ，还要<strong style={{ fontWeight: 700, color: '#4ADE80' }}>保证 AI 真的读得到</strong>。瑞幸把关键内容做成可直接抓取的文字页，对国内 AI 搜索与助手场景同样适用。
          </p>
        </div>

        <div className="flex-1 min-h-0 flex flex-col" style={{ gap: 18 }}>
          {POINTS.map((p) => (
            <div
              key={p.no}
              className="flex-1 min-h-0 flex items-stretch overflow-hidden"
              style={{
                borderRadius: 18,
                border: '1px solid rgba(255,255,255,0.10)',
                background: '#101425',
                boxShadow: '0 1px 2px rgba(0,0,0,0.35)',
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 100,
                  background: 'rgba(34,197,94,0.14)',
                  borderRight: '1px solid rgba(34,197,94,0.30)',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    color: '#4ADE80',
                    lineHeight: 1,
                  }}
                >
                  {p.no}
                </span>
              </div>
              <div
                className="flex-1 flex flex-col justify-center min-w-0"
                style={{ padding: '20px 28px' }}
              >
                <h3
                  style={{
                    fontFamily: "'AlimamaShuHeiTi', sans-serif",
                    fontSize: 30,
                    lineHeight: '38px',
                    color: '#FFFFFF',
                    marginBottom: 10,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'MiSans', sans-serif",
                    fontSize: 22,
                    fontWeight: 500,
                    lineHeight: '32px',
                    color: 'rgba(255,255,255,0.78)',
                  }}
                >
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
