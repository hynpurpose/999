import React from 'react';
import SlideLayout, { H2Em, IssueNote, CompareCard } from '../../components/WebsiteReportLayout';

const MONO = "'JetBrains Mono', 'Consolas', 'Menlo', monospace";

const LINE_COLOR = { plain: '#FFFFFF', allow: '#4ADE80', deny: '#F87171' };

const TAOLI_LINES = [
  { n: 1, text: 'User-agent: *', tone: 'plain', note: '对所有爬虫生效' },
  { n: 2, text: '', tone: 'plain' },
  { n: 3, text: 'Disallow:', tone: 'deny', note: '后面为空，等于全站放行' },
];

const LUCKIN_LINES = [
  { n: 1, text: 'User-agent: *', tone: 'plain', note: '对所有爬虫生效' },
  { n: 2, text: 'Allow: /products', tone: 'allow', note: '放行产品页' },
  { n: 3, text: 'Allow: /products/', tone: 'allow', note: '放行产品所有子页' },
  { n: 4, text: 'Allow: /faq', tone: 'allow', note: '放行 FAQ 页' },
  { n: 5, text: 'Allow: /faq/', tone: 'allow', note: '放行 FAQ 所有子页' },
  { n: 6, text: 'Disallow: /*api/', tone: 'deny', note: '屏蔽接口路径' },
  { n: 7, text: 'Disallow: /verifycode', tone: 'deny', note: '屏蔽验证码页' },
];

function RobotsWindow({ tab, url, lines }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#0C1122' }}>
      {/* 浏览器窗口条 */}
      <div
        className="flex items-center shrink-0"
        style={{ padding: '12px 20px', gap: 14, borderBottom: '1px solid rgba(255,255,255,0.14)' }}
      >
        <div className="flex items-center" style={{ gap: 7 }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
            <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <span
          style={{
            fontFamily: "'MiSans', sans-serif",
            fontSize: 20,
            fontWeight: 600,
            color: '#FFFFFF',
          }}
        >
          {tab}
        </span>
      </div>

      {/* 地址栏 */}
      <div className="shrink-0" style={{ padding: '14px 20px 0' }}>
        <div
          className="flex items-center"
          style={{
            gap: 12,
            padding: '10px 16px',
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.22)',
            background: 'rgba(255,255,255,0.05)',
          }}
        >
          <span
            className="flex items-center justify-center shrink-0"
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: '1.5px solid #FFFFFF',
              fontFamily: MONO,
              fontSize: 13,
              fontWeight: 700,
              color: '#FFFFFF',
            }}
          >
            i
          </span>
          <span style={{ fontFamily: MONO, fontSize: 20, color: '#FFFFFF' }}>{url}</span>
        </div>
      </div>

      {/* robots.txt 正文 */}
      <div className="flex-1 min-h-0 flex flex-col justify-center" style={{ padding: '20px 20px 24px' }}>
        {lines.map((line) => (
          <div key={line.n} className="flex items-baseline" style={{ gap: 18, padding: '7px 0' }}>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 18,
                color: '#FFFFFF',
                width: 24,
                textAlign: 'right',
                flexShrink: 0,
              }}
            >
              {line.n}
            </span>
            <span
              style={{
                fontFamily: MONO,
                fontSize: 24,
                fontWeight: line.tone === 'plain' ? 500 : 700,
                color: LINE_COLOR[line.tone],
                flex: 1,
                minWidth: 0,
              }}
            >
              {line.text}
            </span>
            {line.note && (
              <span
                style={{
                  fontFamily: "'MiSans', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: LINE_COLOR[line.tone],
                  flexShrink: 0,
                }}
              >
                {line.note}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page_Issue_ImageAlt() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题三：<H2Em>抓取权限与安全漏洞</H2Em></>}>
      <div className="w-full h-full flex flex-col">
        <IssueNote>
          robots.txt 是抓取权限的「门口告示」。对比瑞幸与桃李原文可见：桃李只有空的 Disallow，
          <span style={{ fontWeight: 800 }}>没有写清放行什么、屏蔽什么</span>。
        </IssueNote>

        <div className="flex-1 min-h-0 grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <CompareCard tone="bad" title="桃李" subtitle="空白规则，没有抓取边界">
            <RobotsWindow
              tab="tolybread.cn/robots.txt"
              url="https://www.tolybread.cn/robots.txt"
              lines={TAOLI_LINES}
            />
          </CompareCard>
          <CompareCard tone="good" title="正确示例：瑞幸" subtitle="刻意写清放行与屏蔽">
            <RobotsWindow
              tab="lkcoffee.com/robots.txt"
              url="https://www.lkcoffee.com/robots.txt"
              lines={LUCKIN_LINES}
            />
          </CompareCard>
        </div>
      </div>
    </SlideLayout>
  );
}
