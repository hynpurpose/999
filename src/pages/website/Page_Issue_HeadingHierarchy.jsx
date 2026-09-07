import React from 'react';
import SlideLayout, { H2Em, IssueNote, CompareCard } from '../../components/WebsiteReportLayout';

/** 桃李首页标题层级截图（含 h1 标注）：public/issue-compare/heading-taoli.png */
const TAOLI_IMAGE = '/issue-compare/heading-taoli.png';
/** 华为标题层级截图（含 h1 / h2 标注）：public/issue-compare/heading-huawei.png */
const HUAWEI_IMAGE = '/issue-compare/heading-huawei.png';

export default function Page_Issue_HeadingHierarchy() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题二：<H2Em>标题层级不规范</H2Em></>}>
      <div className="w-full h-full flex flex-col">
        <IssueNote>
          标题层级是给 AI / 搜索引擎看的「目录大纲」。规范做法是一页一个 H1、再用 H2 分块；桃李首页却把「公司介绍」「产品展示」「新闻资讯」都写成了 H1，机器很难判断页面主次。
        </IssueNote>

        <div className="flex-1 min-h-0 grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <CompareCard
            tone="bad"
            title="桃李"
            subtitle="多个 H1 并列，层级混乱"
            image={TAOLI_IMAGE}
            alt="桃李面包首页多个 H1 的 DOM 截图"
          />
          <CompareCard
            tone="good"
            title="正确示例：华为"
            subtitle="单一 H1 + H2，层级清晰"
            image={HUAWEI_IMAGE}
            alt="华为页面 H1 与 H2 层级的 DOM 截图"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
