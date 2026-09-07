import React from 'react';
import ProcessLabPage from '../../components/website/ProcessLabPage';
import {
  PSI_META,
  PSI_CATEGORIES,
  PSI_METRICS,
  PSI_PERF_INSIGHTS,
  PSI_A11Y_FINDINGS,
  PSI_BP_FINDINGS,
  PSI_SEO_FINDINGS,
} from '../../data/psiDesktop20260717';

export default function Page_Process_Overview() {
  return (
    <ProcessLabPage
      pageTitle="诊断过程（桌面端）"
      meta={PSI_META}
      categories={PSI_CATEGORIES}
      metrics={PSI_METRICS}
      metricsHint="打开首页要等多久、会不会抖——五项均为红标。"
      perfInsights={PSI_PERF_INSIGHTS}
      a11yFindings={PSI_A11Y_FINDINGS}
      bpFindings={PSI_BP_FINDINGS}
      seoFindings={PSI_SEO_FINDINGS}
      seoNote="导航 javascript:void(0)；SEO 83 不覆盖 sitemap / Schema"
      perfScore={23}
      a11yScore={65}
      bpScore={54}
      seoScore={83}
    />
  );
}
