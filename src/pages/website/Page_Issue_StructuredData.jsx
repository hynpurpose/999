import React from 'react';
import SlideLayout, { H2Em, IssueNote, CompareCard } from '../../components/WebsiteReportLayout';

/** 桃李结构化数据检测截图：public/issue-compare/schema-taoli.png */
const TAOLI_IMAGE = '/issue-compare/schema-taoli.png';
/** 华为结构化数据检测截图：public/issue-compare/schema-huawei.png */
const HUAWEI_IMAGE = '/issue-compare/schema-huawei.png';

export default function Page_Issue_StructuredData() {
  return (
    <SlideLayout title="诊断问题说明" subtitle={<>问题五：<H2Em>结构化数据缺失</H2Em></>}>
      <div className="w-full h-full flex flex-col">
        <IssueNote>
          这个项目查的是：官网有没有给 AI / 搜索引擎准备「标准化说明书」。有结构化数据，机器能直接读出产品参数；没有，就几乎抓不到有效信息。
        </IssueNote>

        <div className="flex-1 min-h-0 grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <CompareCard
            tone="bad"
            title="桃李"
            subtitle="检测不到任何有效信息"
            image={TAOLI_IMAGE}
            alt="桃李面包结构化数据检测结果截图"
          />
          <CompareCard
            tone="good"
            title="正确示例：华为"
            subtitle="可以检测到产品详细参数"
            image={HUAWEI_IMAGE}
            alt="华为结构化数据检测结果截图"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
