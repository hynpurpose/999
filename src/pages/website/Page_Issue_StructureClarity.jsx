import React from 'react';
import SlideLayout, { H2Em, IssueNote, CompareCard } from '../../components/WebsiteReportLayout';

/** 桃李头部标签截图：public/issue-compare/structure-taoli.png */
const TAOLI_IMAGE = '/issue-compare/structure-taoli.png';
/** 华为头部标签截图：public/issue-compare/structure-huawei.png */
const HUAWEI_IMAGE = '/issue-compare/structure-huawei.png';

export default function Page_Issue_StructureClarity() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题一：<H2Em>页面结构不清晰</H2Em></>}>
      <div className="w-full h-full flex flex-col">
        <IssueNote>
          页面头部的 title、description、keywords 以及 og 标签，是给 AI / 搜索引擎的「主题卡片」。信息写全，机器一眼知道这页讲什么；写空或写得很笼统，很难被准确理解。
        </IssueNote>

        <div className="flex-1 min-h-0 grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <CompareCard
            tone="bad"
            title="桃李"
            subtitle="keywords 为空，标题笼统"
            tag="AI 难判断页面主题"
            image={TAOLI_IMAGE}
            alt="桃李面包页面头部标签截图"
          />
          <CompareCard
            tone="good"
            title="正确示例：华为"
            subtitle="description / keywords / og 齐全"
            tag="主题与卖点一目了然"
            image={HUAWEI_IMAGE}
            alt="华为页面头部标签截图"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
