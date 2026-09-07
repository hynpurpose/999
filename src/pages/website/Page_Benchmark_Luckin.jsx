import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const CARDS = [
  {
    no: '01',
    title: 'robots.txt 是刻意设计的',
    desc: '明确放行产品页与 FAQ 页、只屏蔽接口路径——这两个页面就是做给 AI 爬虫看的。',
    quote: 'Allow: /products · Allow: /faq',
  },
  {
    no: '02',
    title: '产品页是一座「事实库」',
    desc: '每款产品标注咖啡因毫克数与热量，严谨到写明测量条件，还配上可直接引用的卖点句。',
    quote: '生椰拿铁：咖啡因 118.4mg · 热量 179kcal（大杯 / 冰 / 默认浓度）',
  },
  {
    no: '03',
    title: 'FAQ 直接按 AI 问答场景分类',
    desc: '栏目分健康饮食、场景选择、特殊人群、产品对比等类；问题就是用户会问 AI 的原话，答案直接给数字。',
    quote: '「哪款饮品热量最低？」——标准美式约 11kcal',
  },
  {
    no: '04',
    title: '内容对 AI 完全开放',
    desc: '关键正文写在 HTML 里，不靠前端再渲染；robots 放行产品页与 FAQ，国内 AI 搜索与助手都能直接读到。',
    quote: '服务端可读文字 · 无登录墙 · /products · /faq 明确放行',
  },
];

function CaseCard({ card }) {
  return (
    <div
      className="flex flex-col min-h-0 overflow-hidden"
      style={{
        borderRadius: 18,
        border: '1px solid rgba(255,255,255,0.10)',
        background: '#101425',
        boxShadow: '0 1px 2px rgba(0,0,0,0.35)',
      }}
    >
      <div className="flex-1 flex flex-col min-h-0" style={{ padding: '22px 26px 20px' }}>
        <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: '#4ADE80',
              lineHeight: 1,
            }}
          >
            {card.no}
          </span>
          <h3
            style={{
              fontFamily: "'AlimamaShuHeiTi', sans-serif",
              fontSize: 30,
              lineHeight: '38px',
              color: '#FFFFFF',
            }}
          >
            {card.title}
          </h3>
        </div>

        <div className="flex-1 min-h-0 flex items-center" style={{ paddingBottom: 14 }}>
          <p
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 21,
              fontWeight: 500,
              lineHeight: '31px',
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            {card.desc}
          </p>
        </div>

        <div
          style={{
            padding: '12px 16px',
            borderRadius: 10,
            background: 'rgba(34,197,94,0.12)',
            borderLeft: '3px solid #22C55E',
          }}
        >
          <p
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 19,
              fontWeight: 600,
              lineHeight: '28px',
              color: '#4ADE80',
            }}
          >
            {card.quote}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page_Benchmark_Luckin() {
  return (
    <SlideLayout title="标杆案例" subtitle={<>瑞幸咖啡：<H2Em>明确按 GEO 思路做官网内容</H2Em></>}>
      <div className="w-full h-full flex flex-col">
        {/* 结论 */}
        <div
          className="flex items-center gap-6"
          style={{
            padding: '18px 28px',
            borderRadius: 16,
            background: 'rgba(34,197,94,0.12)',
            borderLeft: '4px solid #22C55E',
            marginBottom: 24,
            flexShrink: 0,
          }}
        >
          <p
            className="flex-1"
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 26,
              lineHeight: '38px',
              color: '#FFFFFF',
              fontWeight: 500,
            }}
          >
            在我们实测的国内公司中，瑞幸的<strong style={{ fontWeight: 700, color: '#4ADE80' }}>内容层做得最对</strong>——产品页和 FAQ 明显是按「喂给 AI」的思路设计的。
          </p>
          <span
            className="shrink-0"
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 20,
              fontWeight: 700,
              color: '#062611',
              background: '#4ADE80',
              padding: '10px 18px',
              borderRadius: 99,
              lineHeight: 1,
            }}
          >
            lkcoffee.com
          </span>
        </div>

        {/* 四个亮点 */}
        <div
          className="flex-1 min-h-0 grid"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 20 }}
        >
          {CARDS.map((c) => (
            <CaseCard key={c.no} card={c} />
          ))}
        </div>

        {/* 对桃李的启示 */}
        <div
          className="flex items-center gap-4 shrink-0"
          style={{
            marginTop: 24,
            padding: '18px 28px',
            borderRadius: 16,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          <span
            className="shrink-0"
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 20,
              fontWeight: 700,
              color: '#26200A',
              background: '#FACC15',
              padding: '9px 16px',
              borderRadius: 99,
              lineHeight: 1,
            }}
          >
            对桃李的启示
          </span>
          <p
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 24,
              lineHeight: '35px',
              color: '#FAFAFA',
              fontWeight: 500,
            }}
          >
            瑞幸的技术配置其实并不完善，但它证明了：不必等技术优化全部做满，先把<strong style={{ fontWeight: 700, color: '#FACC15' }}>「产品事实 + FAQ」</strong>两类内容做出来，就是有效的 GEO 动作。
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
