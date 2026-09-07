import React from 'react';
import ProcessLabPage from '../../components/website/ProcessLabPage';
import {
  PSI_MOBILE_META,
  PSI_MOBILE_CATEGORIES,
  PSI_MOBILE_METRICS,
  PSI_MOBILE_PERF_INSIGHTS,
  PSI_MOBILE_A11Y_FINDINGS,
  PSI_MOBILE_BP_FINDINGS,
  PSI_MOBILE_SEO_FINDINGS,
} from '../../data/psiMobile20260717';

export default function Page_Process_Mobile() {
  return (
    <ProcessLabPage
      pageTitle="诊断过程（移动端）"
      meta={PSI_MOBILE_META}
      categories={PSI_MOBILE_CATEGORIES}
      metrics={PSI_MOBILE_METRICS}
      metricsHint="FCP / LCP / TBT 表现较好；速度指数偏慢，布局偏移需改进。"
      perfInsights={PSI_MOBILE_PERF_INSIGHTS}
      a11yFindings={PSI_MOBILE_A11Y_FINDINGS}
      bpFindings={PSI_MOBILE_BP_FINDINGS}
      seoFindings={PSI_MOBILE_SEO_FINDINGS}
      seoNote="无法抓取的链接 + 图片缺 alt；SEO 83 不覆盖 sitemap / Schema"
      perfScore={77}
      a11yScore={65}
      bpScore={69}
      seoScore={83}
    />
  );
}
