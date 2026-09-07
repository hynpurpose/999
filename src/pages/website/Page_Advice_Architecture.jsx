import React from 'react';
import SlideLayout, { H2Em } from '../../components/WebsiteReportLayout';

const CARDS = [
  {
    no: '01',
    title: '结构清晰度',
    tag: 'TDK / OG',
    lead: '把每页的 title、description、keywords、og 补成完整「主题卡片」。',
    points: [
      '标题写清页面主题，避免「文章详情」这类笼统写法',
      'description / keywords / og 写全，让 AI 一眼就知道这页讲什么',
    ],
    effect: '机器无需通读全文，即可准确判断页面主题与卖点。',
  },
  {
    no: '02',
    title: '标题层级规范',
    tag: 'H1 / H2',
    lead: '一页只保留一个 H1，模块标题统一降为 H2。',
    points: [
      '首页「公司介绍 / 产品展示 / 新闻资讯」改为 H2',
      '全站检查并消除 H1 并列、层级跳级',
    ],
    effect: 'AI 能分清页面主次，不再把多个栏目都当成整页主题。',
  },
  {
    no: '03',
    title: '抓取权限与安全',
    tag: 'robots.txt',
    lead: '重写 robots.txt，明确放行内容入口、屏蔽无关路径。',
    points: [
      '参考瑞幸：Allow 产品页 / FAQ，Disallow 接口与验证码',
      '避免只有空的 Disallow，把抓取边界写清楚',
    ],
    effect: '爬虫知道该抓什么、不该碰什么，引用边界更清晰。',
  },
  {
    no: '04',
    title: '网站地图 sitemap',
    tag: 'sitemap.xml',
    lead: '生成 sitemap.xml，并在 robots.txt 中声明位置。',
    points: [
      '覆盖产品、新闻等全站关键页面',
      'robots.txt 增加 Sitemap 声明行，指明地址',
    ],
    effect: 'AI 不再靠首页链接摸索，深层页与新页可被及时发现。',
  },
  {
    no: '05',
    title: '结构化数据',
    tag: 'Schema',
    lead: '用机器可读标注告诉 AI「这段内容是什么」。',
    points: [
      '首页补企业信息；产品页补配料、营养成分等参数',
      'FAQ 用问答标注，新闻用文章标注',
    ],
    effect: '关键事实可被直接读取，无需从正文猜测，引用更准确。',
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
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: '0.04em',
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

export default function Page_Advice_Architecture() {
  return (
    <SlideLayout
      title="优化建议"
      subtitle={
        <>
          网站架构：<H2Em>五项未通过项</H2Em>的修复方案
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
            针对架构诊断中
            <strong style={{ fontWeight: 700, color: '#4C8DFF' }}>未通过的五项</strong>
            。架构修复是一次性工作，建议技术团队排期完成。
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
            一次性 · 技术团队
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
