import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const CARDS = [
  {
    no: '01',
    title: '产品信息',
    tag: '产品页',
    lead: '把锁在图片里的参数变成 AI 能读的文字档案。',
    points: [
      '主力产品补齐：品名、克重、保质期、配料、营养成分、卖点',
      '写法对标豪士：量化原料比例、写明工艺、「0 添加」等可摘取句子',
    ],
    effect: '用户问配料、克重时，AI 可直接从官网摘取权威答案。',
  },
  {
    no: '02',
    title: '售后与服务信息',
    tag: '服务问答',
    lead: '在购买入口之外，补齐保存、新鲜度、保质期等实用问答。',
    points: [
      '覆盖「开封后怎么存」「如何判断新鲜」「过期还能吃吗」',
      '做成独立服务说明或问答模块，便于 AI 整段引用',
    ],
    effect: '官网成为售后问题的权威来源，而不只是导购入口。',
  },
  {
    no: '03',
    title: '使用场景内容',
    tag: '场景页',
    lead: '补早餐搭配、通勤携带等场景化内容，进入推荐类提问。',
    points: [
      '为主力产品写「适合怎样吃 / 怎样带」的场景短文',
      '用生活场景切入，而不是只堆参数',
    ],
    effect: '品牌进入「推荐类」「场景类」问题，不只出现在事实核对里。',
  },
  {
    no: '04',
    title: 'FAQ / 知识科普',
    tag: '问答页',
    lead: '围绕高频问题建 FAQ 页，一问一答、直接给答案。',
    points: [
      '优先：短保是什么、保鲜工艺、开封储存、哪里能买到',
      '敏感议题声明也沉淀成可引用的问答，而不是散落各处',
    ],
    effect: '问答页是 AI 最偏爱引用的类型——问题即用户提问，答案可整段摘取。',
  },
  {
    no: '05',
    title: '内容持续运营',
    tag: '长尾内容',
    lead: '减少纯获奖 PR，转向用户故事与生活场景等长尾内容。',
    points: [
      '定期产出可被反复引用的用户故事、场景专题',
      '新闻区提高对消费者的信息价值，而不是只发活动稿',
    ],
    effect: '官网形成可持续被 AI 引用的内容资产，而不是一次性宣传。',
  },
];

function AdviceCard({ card }) {
  return (
    <div
      className="flex flex-col min-h-0 overflow-hidden h-full"
      style={{
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.10)',
        background: '#101425',
        boxShadow: '0 1px 2px rgba(0,0,0,0.35)',
      }}
    >
      <div
        className="flex items-center gap-2.5 shrink-0"
        style={{
          padding: '12px 18px',
          background: 'rgba(76,141,255,0.10)',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: '#4C8DFF',
            lineHeight: 1,
          }}
        >
          {card.no}
        </span>
        <h3
          style={{
            fontFamily: "'AlimamaShuHeiTi', sans-serif",
            fontSize: 30,
            lineHeight: '36px',
            color: '#FFFFFF',
          }}
        >
          {card.title}
        </h3>
        <span
          className="ml-auto shrink-0"
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 15,
            fontWeight: 600,
            color: '#4C8DFF',
            background: 'rgba(76,141,255,0.18)',
            padding: '5px 12px',
            borderRadius: 99,
            lineHeight: 1,
          }}
        >
          {card.tag}
        </span>
      </div>

      <div className="flex-1 flex flex-col min-h-0" style={{ padding: '14px 18px 14px' }}>
        <p
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 20,
            fontWeight: 600,
            lineHeight: '28px',
            color: '#FFFFFF',
            paddingBottom: 12,
            marginBottom: 12,
            borderBottom: '1px dashed rgba(255,255,255,0.18)',
          }}
        >
          {card.lead}
        </p>

        <div className="flex-1 min-h-0 flex flex-col" style={{ gap: 10, paddingBottom: 12 }}>
          {card.points.map((p) => (
            <div key={p} className="flex items-start gap-2.5">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 99,
                  background: '#4C8DFF',
                  marginTop: 10,
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: '26px',
                  color: 'rgba(255,255,255,0.78)',
                }}
              >
                {p}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: '12px 14px',
            borderRadius: 10,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
          }}
        >
          <div
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: '#4C8DFF',
              marginBottom: 6,
              lineHeight: 1,
            }}
          >
            预计效果
          </div>
          <p
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 17,
              fontWeight: 500,
              lineHeight: '24px',
              color: 'rgba(255,255,255,0.78)',
            }}
          >
            {card.effect}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page_Advice_Content() {
  return (
    <SlideLayout
      title="优化建议"
      subtitle={
        <>
          内容覆盖：<H2Em>五项未通过项</H2Em>的补齐方案
        </>
      }
    >
      <div className="w-full h-full flex flex-col min-h-0">
        <div
          className="flex items-center gap-6 shrink-0"
          style={{
            padding: '16px 24px',
            borderRadius: 14,
            background: 'rgba(76,141,255,0.12)',
            borderLeft: '4px solid #4C8DFF',
            marginBottom: 18,
          }}
        >
          <p
            className="flex-1"
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 24,
              lineHeight: '34px',
              color: '#FFFFFF',
              fontWeight: 500,
            }}
          >
            针对内容诊断中
            <strong style={{ fontWeight: 700, color: '#4C8DFF' }}>未通过的五项</strong>
            。内容优化是 GEO 收益最大的一块，适合持续投入。
          </p>
          <span
            className="shrink-0"
            style={{
              fontFamily: "'MiSans', sans-serif",
              fontSize: 18,
              fontWeight: 700,
              color: '#FFFFFF',
              background: '#4C8DFF',
              padding: '8px 16px',
              borderRadius: 99,
              lineHeight: 1,
            }}
          >
            持续投入 · 收益最大
          </span>
        </div>

        <div className="flex-1 flex flex-col min-h-0" style={{ gap: 16 }}>
          <div
            className="flex-1 min-h-0 grid"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          >
            {CARDS.slice(0, 3).map((c) => (
              <AdviceCard key={c.no} card={c} />
            ))}
          </div>
          <div
            className="flex-1 min-h-0 grid"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          >
            {CARDS.slice(3).map((c) => (
              <AdviceCard key={c.no} card={c} />
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
