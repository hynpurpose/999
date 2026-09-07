// ══════════════════════════════════════════════════════════════════════
//  医疗行业 GEO 全景指南
//  由三个方案合并而成：
//    一、公司介绍          ← Slide_Skyworth
//    二、医药行业核心门槛    ← Slide_Medical
//    三、GEO行业认知信息差   ← Slide_Medical（原「平台算法变化」章）
//    四、三九养胃舒方案      ← Slide_999
//    五、Q&A + Thank You   ← 官网诊断 / 预算验收 / 尾页
//
//  层级：part（一/二/三…） > chapter（01./02.…） > section > page
//  part 本身不生成幻灯片，仅为章节提供归属与编号；章节编号在每个 part 内独立从 01 起。
// ══════════════════════════════════════════════════════════════════════

// ─────────────── 一、公司介绍（来自 Slide_Skyworth）───────────────
import Page_CompanyIntro from '../pages/Page_CompanyIntro';
import Page_ServiceClients from '../pages/Page_ServiceClients';
import Page_ServiceClients_Sanjiu from '../pages/Page_ServiceClients_Sanjiu';
import Page_CaseStudy_Double_Combined, {
  Page_CaseStudy_Double_Combined_B,
} from '../pages/Page_CaseStudy_Double_Combined';
import Page_CaseStudy_Double_Combined_Health from '../pages/Page_CaseStudy_Double_Combined_Health';
import Page_CaseStudy_Double_Combined_Health_2 from '../pages/Page_CaseStudy_Double_Combined_Health_2';
import Page_CaseStudy_Double_Combined_Health_Sanjiu from '../pages/Page_CaseStudy_Double_Combined_Health_Sanjiu';
import Page_CaseStudy_Double_Combined_2 from '../pages/Page_CaseStudy_Double_Combined_2';
import Page_CaseStudy_Double_Combined_3 from '../pages/Page_CaseStudy_Double_Combined_3';
import Page_TeamEndorsement from '../pages/Page_TeamEndorsement';
import Page_CompanyArchitecture from '../pages/Page_CompanyArchitecture';
import Page_TeamIntro from '../pages/Page_TeamIntro';
import Page_ServiceIntro from '../pages/Page_ServiceIntro';
import Page_Pricing from '../pages/Page_Pricing';
import Page_CoreCapabilities from '../pages/Page_CoreCapabilities';
import Page_GeoMonitorIntro from '../pages/Page_GeoMonitorIntro';
import Page_GeoMonitorModules from '../pages/Page_GeoMonitorModules';
import Page_GeoOneDemo from '../pages/Page_GeoOneDemo';
import Page_GeoMonitor from '../pages/Page_GeoMonitor';
import Page_GeoMonitorDemo from '../pages/Page_GeoMonitorDemo';
import Page_QuantitativeModel from '../pages/Page_QuantitativeModel';
import Page_QuantitativeModel_WhatCanDo from '../pages/Page_QuantitativeModel_WhatCanDo';
import Page_QuantitativeModel_Why from '../pages/Page_QuantitativeModel_Why';
import Page_QuantitativeModelArchitecture from '../pages/Page_QuantitativeModelArchitecture';
import Page_QuantitativeModel_Pic1 from '../pages/Page_QuantitativeModel_Pic1';
import Page_QuantitativeModel_Pic2 from '../pages/Page_QuantitativeModel_Pic2';
import Page_QuantitativeModel_Pic3 from '../pages/Page_QuantitativeModel_Pic3';
import Page_QuantitativeModel_Pic4 from '../pages/Page_QuantitativeModel_Pic4';
import Page_QuantitativeModel_Pic5 from '../pages/Page_QuantitativeModel_Pic5';
import Page_QuantitativeModel_Pic6 from '../pages/Page_QuantitativeModel_Pic6';
import Page_QuantitativeModel_Pic7 from '../pages/Page_QuantitativeModel_Pic7';
import Page_ContentAgentIntro from '../pages/Page_ContentAgentIntro';
import Page_ContentAgentStep_BrandKB, {
  Page_ContentAgentStep_TargetUser,
  Page_ContentAgentStep_CitationPattern,
} from '../pages/Page_ContentAgentSteps';
import Page_ContentAgentModules from '../pages/Page_ContentAgentModules';
import Page_ContentAgentDemo from '../pages/Page_ContentAgentDemo';
import Page_UserCommentAnalysis from '../pages/Page_UserCommentAnalysis';
import Page_UserCommentProblem from '../pages/Page_UserCommentProblem';
import Page_UserCommentHow from '../pages/Page_UserCommentHow';
import Page_UserCommentArchitecture from '../pages/Page_UserCommentArchitecture';
import Page_UserCommentDemo from '../pages/Page_UserCommentDemo';
import Page_SkyworthResearchConclusions from '../pages/Page_SkyworthResearchConclusions';
import Page_ServiceStandard from '../pages/Page_ServiceStandard';

// ─────────── 二、医药行业核心门槛（来自 Slide_Medical）───────────
import Page_AIPlatform_SourceRanking from '../pages/Page_AIPlatform_SourceRanking';
import Page_MedPlatform_AIMapping from '../pages/Page_MedPlatform_AIMapping';
import Page_Xiaohe_Overview, { Page_Xiaohe_Cooperation } from '../pages/Page_MedPlatform_Xiaohe';
import Page_Xiaohe_CitationTypes from '../pages/Page_Xiaohe_CitationTypes';
import Page_Xiaohe_BrandStatus, { Page_Xiaohe_BrandStatus_Zirun } from '../pages/Page_Xiaohe_BrandStatus';
import Page_Xiaohe_MaterialScience from '../pages/Page_Xiaohe_MaterialScience';
import Page_OtherPlatforms from '../pages/Page_OtherPlatforms';
import Page_OtherPlatforms_BrandStatus, { Page_OtherPlatforms_BrandStatus_Zirun } from '../pages/Page_OtherPlatforms_BrandStatus';
import Page_OtherPlatforms_Delivery from '../pages/Page_OtherPlatforms_Delivery';
import Page_MedSource_Overview from '../pages/Page_MedSource_Overview';
import Page_MedSource_DoctorQA from '../pages/Page_MedSource_DoctorQA';
import Page_MedSource_DoctorQA_Citation from '../pages/Page_MedSource_DoctorQA_Citation';
import Page_MedSource_DoctorQA_Bohe from '../pages/Page_MedSource_DoctorQA_Bohe';
import Page_MedSource_DrugDB_Citation, {
  Page_MedSource_HealthPortal_Citation,
  Page_MedSource_Official_Citation,
  Page_MedSource_Academic_Citation,
} from '../pages/Page_MedSource_Citations';
import Page_RxOtc_Overview, { Page_RxOtc_Diff } from '../pages/Page_RxOtc_Compare';
import Page_RxOtc_Platform_Critical, {
  Page_RxOtc_Platform_Rx,
  Page_RxOtc_Platform_Otc,
} from '../pages/Page_RxOtc_ByPlatform';
import Page_MedSource_DrugDB from '../pages/Page_MedSource_DrugDB';
import Page_MedSource_DrugDB_Dayi from '../pages/Page_MedSource_DrugDB_Dayi';
import Page_MedSource_DrugDB_Pharnex from '../pages/Page_MedSource_DrugDB_Pharnex';
import Page_MedSource_HealthPortal from '../pages/Page_MedSource_HealthPortal';
import Page_MedSource_HealthPortal_Mfk from '../pages/Page_MedSource_HealthPortal_Mfk';
import Page_MedSource_Official from '../pages/Page_MedSource_Official';
import Page_MedSource_Official_NMPA from '../pages/Page_MedSource_Official_NMPA';
import Page_MedSource_Academic from '../pages/Page_MedSource_Academic';
import Page_MedSource_Academic_DXY from '../pages/Page_MedSource_Academic_DXY';
import Page_DeliveryResources_Hard, {
  Page_DeliveryResources_Detail_A,
  Page_DeliveryResources_Detail_B,
  Page_DeliveryResources_Detail_C,
  Page_DeliveryResources_Detail_D,
  Page_DeliveryResources_Common,
  Page_DeliveryResources_Video,
} from '../pages/Page_DeliveryResources';
import Page_ContentExpertise_Accuracy, {
  Page_ContentExpertise_Compliance,
  Page_ContentExpertise_Syndrome,
  Page_ContentExpertise_Review,
} from '../pages/Page_ContentExpertise';
import Page_AdLaw_Framework, {
  Page_AdLaw_Ceiling,
  Page_AdLaw_RedLines,
  Page_AdLaw_WhatIsAd,
  Page_AdLaw_Watershed,
  Page_AdLaw_Playbook,
  Page_AdLaw_Conclusion,
} from '../pages/Page_AdLawCompliance';

// ─────── 三、GEO行业认知信息差（来自 Slide_Medical 平台算法变化章）───────
import Page_ModelVersionChanges from '../pages/Page_ModelVersionChanges';
import Page_AiPlatformUserScale from '../pages/Page_AiPlatformUserScale';
import Page_ModelChangesOverview from '../pages/Page_ModelChangesOverview';
import Page_DoubaoRevampChanges from '../pages/Page_DoubaoRevampChanges';
import Page_DoubaoRevampHeadTail from '../pages/Page_DoubaoRevampHeadTail';
import Page_DoubaoRevampHeadTailEvidence from '../pages/Page_DoubaoRevampHeadTailEvidence';
import Page_DoubaoRevampHeadTailConclusion from '../pages/Page_DoubaoRevampHeadTailConclusion';
import Page_XiaoheCitationIllusion from '../pages/Page_XiaoheCitationIllusion';
import Page_DoubaoRevampResponse from '../pages/Page_DoubaoRevampResponse';
import Page_VideoStrategy_HeadTail from '../pages/Page_VideoStrategy_HeadTail';
import Page_VideoStrategy_Cases from '../pages/Page_VideoStrategy_Cases';
import Page_PlatformChange_Qwen from '../pages/Page_PlatformChange_Qwen';
import Page_PlatformChange_Yuanbao from '../pages/Page_PlatformChange_Yuanbao';
import Page_PlatformChange_Baidu from '../pages/Page_PlatformChange_Baidu';
import Page_PlatformChange_DeepSeek from '../pages/Page_PlatformChange_DeepSeek';
import Page_PlatformChange_Kimi from '../pages/Page_PlatformChange_Kimi';
import Page_PlatformChange_Afu from '../pages/Page_PlatformChange_Afu';
import Page_GEOWordSelectionOther from '../pages/Page_GEOWordSelectionOther';
import Page_SkyworthShadowAlgorithm from '../pages/Page_SkyworthShadowAlgorithm';
import Page_SkyworthAiProcess from '../pages/Page_SkyworthAiProcess';
import Page_SkyworthSearchEngineModel from '../pages/Page_SkyworthSearchEngineModel';
import Page_SkyworthCrossCompare from '../pages/Page_SkyworthCrossCompare';
import Page_SkyworthContentDetailsAI from '../pages/Page_SkyworthContentDetailsAI';
import Page_HumanAiRatioApproach from '../pages/Page_HumanAiRatioApproach';
import Page_ArticleLifespan from '../pages/Page_ArticleLifespan';
import Page_ContentWritingLogic from '../pages/Page_ContentWritingLogic';
import Page_ContentTypesOverview, {
  Page_ContentTypeDeconstruct_Launch,
  Page_ContentTypeDeconstruct_Guide,
  Page_ContentTypeDeconstruct_Clinical,
  Page_ContentTypeDeconstruct_Regimen,
  Page_ContentTypeDeconstruct_Edu,
  Page_ContentTypeDemo_Launch,
  Page_ContentTypeDemo_Guide,
  Page_ContentTypeDemo_Clinical,
  Page_ContentTypeDemo_Regimen,
  Page_ContentTypeDemo_Edu,
} from '../pages/Page_ContentTypeShowcase';
import Page_DeliveryLongTerm from '../pages/Page_DeliveryLongTerm';
import Page_DeliveryHighWeight from '../pages/Page_DeliveryHighWeight';
import Page_PotentialVerticalCommunity from '../pages/Page_PotentialVerticalCommunity';
import Page_EmergingMediaAttempts from '../pages/Page_EmergingMediaAttempts';

// ─────────── 四、三九养胃舒方案（来自 Slide_999）───────────
import Page_BrandInfo from '../pages/Page_BrandInfo';
import Page_BrandProduct_Yangweishu from '../pages/Page_BrandProduct_Yangweishu';
import Page_BrandProducts from '../pages/Page_BrandProducts';
import Page_BrandTech from '../pages/Page_BrandTech';
import Page_BrandChannel from '../pages/Page_BrandChannel';
import Page_BrandCompetitors from '../pages/Page_BrandCompetitors';
import Page_IndustryPainPoints from '../pages/Page_IndustryPainPoints';
import Page_PainPoint1_WordCloud from '../pages/Page_PainPoint1_WordCloud';
import Page_PainPoint3_Service from '../pages/Page_PainPoint3_Service';
import Page_PainPoint4_SalesModel from '../pages/Page_PainPoint4_SalesModel';
import Page_PainPoint4_SalesModel_Solution from '../pages/Page_PainPoint4_SalesModel_Solution';
import Page_KeywordGroupingBasis from '../pages/Page_KeywordGroupingBasis';
import Page_KeywordGroupingConclusion from '../pages/Page_KeywordGroupingConclusion';
import PB_DataImportAnalysis from '../Pages_Before/Page_DataImportAnalysis';
import Page_KeywordGenerationLogic from '../pages/Page_KeywordGenerationLogic';
import Page_KeywordTaggingLogic from '../pages/Page_KeywordTaggingLogic';
import Page_KeywordExpansionLogic from '../pages/Page_KeywordExpansionLogic';
import Page_KeywordExhaustClean, {
  Page_KeywordExhaustClean2,
  Page_KeywordExhaustClean3,
  Page_KeywordExhaustClean4,
} from '../pages/Page_KeywordExhaustClean';
import Page_KeywordClassifyExpand, {
  Page_KeywordClassifyExpand2,
} from '../pages/Page_KeywordClassifyExpand';
import Page_KeywordConfirmPrompt, {
  Page_KeywordConfirmPrompt2,
  Page_KeywordConfirmPrompt3,
  Page_KeywordConfirmPrompt4,
} from '../pages/Page_KeywordConfirmPrompt';
import Page_GeoReport_BasicInfo1 from '../pages/Page_GeoReport_BasicInfo1';
import Page_GeoReport_BasicInfo2 from '../pages/Page_GeoReport_BasicInfo2';
import Page_GeoReport_Dashboard from '../pages/Page_GeoReport_Dashboard';
import Page_GeoReport_Dashboard2 from '../pages/Page_GeoReport_Dashboard2';
import Page_GeoReport_Entries from '../pages/Page_GeoReport_Entries';
import Page_GeoReport_Entries_Analysis from '../pages/Page_GeoReport_Entries_Analysis';
import Page_GeoReport_Competitors_Analysis from '../pages/Page_GeoReport_Competitors_Analysis';
import Page_GeoReport_Sources from '../pages/Page_GeoReport_Sources';
import Page_GeoReport_Sources2 from '../pages/Page_GeoReport_Sources2';
import Page_GeoReport_Dashboard_ToB from '../pages/Page_GeoReport_Dashboard_ToB';
import Page_GeoReport_Dashboard2_ToB from '../pages/Page_GeoReport_Dashboard2_ToB';
import Page_GeoReport_Entries_ToB from '../pages/Page_GeoReport_Entries_ToB';
import Page_GeoReport_Entries_Analysis_ToB from '../pages/Page_GeoReport_Entries_Analysis_ToB';
import Page_GeoReport_Competitors_Analysis_ToB from '../pages/Page_GeoReport_Competitors_Analysis_ToB';
import Page_GeoReport_Sources_ToB from '../pages/Page_GeoReport_Sources_ToB';
import Page_GeoReport_Sources2_ToB from '../pages/Page_GeoReport_Sources2_ToB';
import Page_GeoReport_Sentiment_Pre from '../pages/Page_GeoReport_Sentiment_Pre';
import Page_GeoReport_Sentiment, { Page_GeoReport_Sentiment_Compare } from '../pages/Page_GeoReport_Sentiment';
import Page_GeoReport_MentionWhy from '../pages/Page_GeoReport_MentionWhy';
import PB_GeoKpiAcceptance from '../Pages_Before/Page_GeoKpiAcceptance';
import PB_GeoWorkAcceptance from '../Pages_Before/Page_GeoWorkAcceptance';
import PB_GeoValueAddedServices from '../Pages_Before/Page_GeoValueAddedServices';
import Page_ContentStrategyBacktrack from '../pages/Page_ContentStrategyBacktrack';
import Page_ContentStrategyDetails from '../pages/Page_ContentStrategyDetails';
import Page_ContentStrategyDemo2 from '../pages/Page_ContentStrategyDemo2';
import Page_ContentStrategyDemo3 from '../pages/Page_ContentStrategyDemo3';
import Page_ContentStrategyDemo4 from '../pages/Page_ContentStrategyDemo4';
import { Page_ContentAgentArticleDemo1, Page_ContentAgentArticleDemo2 } from '../pages/Page_ContentAgentArticleDemo';
import Page_PlatformFilterIntro from '../pages/Page_PlatformFilterIntro';
import Page_PlatformFilterLogic from '../pages/Page_PlatformFilterLogic';
import Page_PlatformFilterLogicB from '../pages/Page_PlatformFilterLogicB';
import Page_PlatformFilterLogicC from '../pages/Page_PlatformFilterLogicC';
import Page_PlatformFilterConclusion from '../pages/Page_PlatformFilterConclusion';
import Page_DeliveryStrategy_Combo from '../pages/Page_DeliveryStrategy_Combo';
import Page_SourceStrategy_Overview from '../pages/Page_SourceStrategy_Overview';
import Page_GeoOptImplementation from '../pages/Page_GeoOptImplementation';
import Page_NegativeInfoSearch from '../pages/Page_NegativeInfoSearch';
import Page_NegativeInfoHandling from '../pages/Page_NegativeInfoHandling';

// ─────────── 五、Q&A ───────────
// Q1「官网对 GEO 建设是否重要」：先讲国内外差异（官网不是国内主战场，只是及格线），
// 再用桃李面包官网诊断报告当案例，说明「怎么把官网做到及格线」。
// 原报告 15 页已压成 5 页：每页放原页面缩略图 + 一句话说明这页在证明什么，
// 原始单页仍保留在 pages/website/ 下，需要逐页翻的时候可以再挂回来。
import Page_Web_IndustryCitationRate from '../pages/website/Page_Web_IndustryCitationRate';
import Page_WebCase_Overview from '../pages/website/Page_WebCase_Overview';
import Page_WebCase_Arch_Structure from '../pages/website/Page_WebCase_Arch_Structure';
import Page_WebCase_Arch_Crawl from '../pages/website/Page_WebCase_Arch_Crawl';
import Page_WebCase_Content_Basic from '../pages/website/Page_WebCase_Content_Basic';
import Page_WebCase_Content_LongTail from '../pages/website/Page_WebCase_Content_LongTail';
import Page_Web_Advice_Combo from '../pages/website/Page_Advice_Combo';

// Q2 预算和项目规划 / Q3 标书和验收
import Page_QA_Budget_Allocation from '../pages/qa/Page_QA_Budget_Allocation';
import Page_QA_Bid_Threshold from '../pages/qa/Page_QA_Bid_Threshold';
import Page_QA_Bid_Sample, {
  Page_QA_Bid_Sample2,
  Page_QA_Bid_Sample3,
  Page_QA_Bid_Sample4,
  Page_QA_Bid_Sample5,
  Page_QA_Bid_Sample6,
  Page_QA_Bid_Sample7,
} from '../pages/qa/Page_QA_Bid_Sample';
import Page_QA_Acceptance_Framework from '../pages/qa/Page_QA_Acceptance_Framework';
import Page_QA_Acceptance_Verify from '../pages/qa/Page_QA_Acceptance_Verify';
import Page_QA_Acceptance_FakeDemo from '../pages/qa/Page_QA_Acceptance_FakeDemo';
import Page_SkyworthThankYou from '../pages/Page_SkyworthThankYou';

export const slideConfig = [
  // ─────────────────────── 封面 & 总目录 ───────────────────────
  {
    type: 'cover',
    title: '封面',
    backgroundImage: '/proposal-cover/proposal-cover-company.png',
    brand: 'GEO索引未来',
    subtitle: '医疗行业\nGEO全景指南',
    date: 'August 2026',
  },

  {
    type: 'toc',
    title: '目录',
    backgroundImage: '',
    menuText: 'MENU',
    brandLabel: 'GEOINDEXFUTURE // 2026',
    serviceGuide: 'GEO SERVICE GUIDE',
  },

  // ══════════════════════════════════════════════════════════
  // ——— 一、公司介绍 ———
  // ══════════════════════════════════════════════════════════
  {
    type: 'part',
    id: 'company',
    title: '公司介绍',
    tocTitle: 'GEO索引未来公司介绍',
    subtitle: 'COMPANY',
    cover: {
      backgroundImage: '/proposal-cover/proposal-cover-new.jpg',
      brand: 'GEO索引未来',
      subtitle: 'GEO索引未来\n公司介绍',
      date: 'August 2026',
    },
    toc: { menuText: 'MENU', brandLabel: 'GEOINDEXFUTURE // 2026', serviceGuide: 'GEO SERVICE GUIDE' },
  },

  { type: 'chapter', title: '公司简介', subtitle: 'COMPANY PROFILE', backgroundImage: '' },
  { type: 'section', title: '公司概览' },
  { type: 'page', title: '「GEO 索引未来」整体介绍', component: Page_CompanyIntro, hideHeader: true },

  { type: 'section', title: '服务客户' },
  { type: 'page', title: '服务客户', component: Page_ServiceClients, hideHeader: true },
  { type: 'page', title: '服务客户', component: Page_ServiceClients_Sanjiu, hideHeader: true },

  { type: 'section', title: '案例展示' },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_Health, hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_Health_2, hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_Health_Sanjiu, hideHeader: true },
  { type: 'page', title: '服务案例', variants: [Page_CaseStudy_Double_Combined_B, Page_CaseStudy_Double_Combined], hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_2, hideHeader: true },
  { type: 'page', title: '服务案例', component: Page_CaseStudy_Double_Combined_3, hideHeader: true },

  { type: 'section', title: '团队背书' },
  { type: 'page', title: '团队背书', component: Page_TeamEndorsement, hideHeader: true },

  { type: 'section', title: '组织架构' },
  { type: 'page', title: '团队组织架构', component: Page_CompanyArchitecture, hideHeader: true },

  { type: 'section', title: '核心成员' },
  { type: 'page', title: '核心成员', component: Page_TeamIntro, hideHeader: true },

  { type: 'chapter', title: '服务介绍', subtitle: 'SERVICE INTRO', backgroundImage: '' },
  { type: 'section', title: '服务内容' },
  { type: 'page', title: '服务内容', component: Page_ServiceIntro, hideHeader: true },
  { type: 'section', title: '报价' },
  { type: 'page', title: '报价', component: Page_Pricing, hideHeader: true },

  { type: 'chapter', title: '核心能力', subtitle: 'CORE CAPABILITIES', backgroundImage: '' },
  { type: 'section', title: '总览' },
  { type: 'page', title: '核心能力', component: Page_CoreCapabilities, hideHeader: true },

  { type: 'section', title: 'GEO ONE数据监测系统' },
  { type: 'page', title: 'GEO ONE 数据监测系统介绍', component: Page_GeoMonitorIntro, hideHeader: true },
  { type: 'page', title: 'GEO ONE数据系统功能介绍', component: Page_GeoMonitorModules, hideHeader: true },
  { type: 'page', title: 'Geo One数据系统演示', component: Page_GeoOneDemo, hideHeader: true },
  { type: 'page', title: 'GEO ONE 数据监测系统', component: Page_GeoMonitor, hideHeader: true },
  { type: 'page', title: 'GEO ONE数据系统后台运行录屏演示', component: Page_GeoMonitorDemo, hideHeader: true },

  { type: 'section', title: '内容撰写Agent' },
  { type: 'page', title: '内容撰写Agent介绍', component: Page_ContentAgentIntro, hideHeader: true },
  { type: 'page', title: '构建品牌资料库', component: Page_ContentAgentStep_BrandKB, hideHeader: true },
  { type: 'page', title: '目标用户设定', component: Page_ContentAgentStep_TargetUser, hideHeader: true },
  {
    type: 'page',
    title: 'AI高引用规律总结',
    component: Page_ContentAgentStep_CitationPattern,
    hideHeader: true,
  },
  { type: 'page', title: '内容撰写Agent功能介绍', component: Page_ContentAgentModules, hideHeader: true },
  { type: 'page', title: '内容撰写Agent演示', component: Page_ContentAgentDemo, hideHeader: true },
  // 内容撰写 Agent 演示后的成稿示意（独立图片，不复用排行榜那两张）
  { type: 'page', title: '高质量文章示意', component: Page_ContentAgentArticleDemo1, hideHeader: true },
  { type: 'page', title: '高质量文章示意', component: Page_ContentAgentArticleDemo2, hideHeader: true },

  { type: 'section', title: '用户评论分析系统' },
  { type: 'page', title: '用户评论分析系统', component: Page_UserCommentAnalysis, hideHeader: true },
  { type: 'page', title: '用户评论分析系统解决什么问题', component: Page_UserCommentProblem, hideHeader: true },
  { type: 'page', title: '用户评论分析系统怎么运作', component: Page_UserCommentHow, hideHeader: true },
  { type: 'page', title: '用户评论分析系统架构', component: Page_UserCommentArchitecture, hideHeader: true },
  { type: 'page', title: '用户真评系统演示', component: Page_UserCommentDemo, hideHeader: true },
  { type: 'page', title: '品牌调研报告内容大纲', component: Page_SkyworthResearchConclusions, hideHeader: true },

  { type: 'section', title: '量化竞争模型' },
  { type: 'page', title: '量化竞争模型(Alpha模型)', component: Page_QuantitativeModel, hideHeader: true },
  { type: 'page', title: '量化模型可以做什么', component: Page_QuantitativeModel_WhatCanDo, hideHeader: true },
  {
    type: 'page',
    title: '量化模型1.0做到了什么',
    component: Page_QuantitativeModel_Why,
    hideHeader: true,
  },
  { type: 'page', title: 'Alpha模型运作逻辑', component: Page_QuantitativeModelArchitecture, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 1', component: Page_QuantitativeModel_Pic1, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 2', component: Page_QuantitativeModel_Pic2, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 3', component: Page_QuantitativeModel_Pic3, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 4', component: Page_QuantitativeModel_Pic4, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 5', component: Page_QuantitativeModel_Pic5, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 6', component: Page_QuantitativeModel_Pic6, hideHeader: true },
  { type: 'page', title: 'Alpha模型运作逻辑 7', component: Page_QuantitativeModel_Pic7, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // ——— 二、医药行业核心门槛 ———
  // ══════════════════════════════════════════════════════════
  {
    type: 'part',
    id: 'medical',
    title: '医药行业核心门槛',
    subtitle: 'PHARMA BARRIERS',
    cover: {
      backgroundImage: '/proposal-cover/proposal-cover-company.png',
      brand: 'GEO索引未来',
      subtitle: '医药行业\n核心门槛',
      date: 'August 2026',
    },
    toc: { menuText: 'MENU', brandLabel: 'GEOINDEXFUTURE // 2026', serviceGuide: 'GEO SERVICE GUIDE' },
  },

  { type: 'chapter', title: '医药行业\n引用源分析', subtitle: 'PHARMA CITATION SOURCES', backgroundImage: '' },

  { type: 'section', title: '主流AI平台专项信源' },
  { type: 'page', title: '各AI平台引用源排行', component: Page_AIPlatform_SourceRanking, hideHeader: true },
  { type: 'page', title: '各AI模型分别对应的医疗信息平台', component: Page_MedPlatform_AIMapping, hideHeader: true },
  {
    type: 'page',
    title: '小荷健康',
    components: [Page_Xiaohe_Overview, Page_Xiaohe_CitationTypes, Page_Xiaohe_BrandStatus, Page_Xiaohe_BrandStatus_Zirun, Page_Xiaohe_Cooperation, Page_Xiaohe_MaterialScience],
    hideHeader: true,
  },
  { type: 'page', title: '其他平台介绍', component: Page_OtherPlatforms, hideHeader: true },
  {
    type: 'page',
    title: '其他平台药品收录情况',
    components: [Page_OtherPlatforms_BrandStatus, Page_OtherPlatforms_BrandStatus_Zirun],
    hideHeader: true,
  },
  { type: 'page', title: '其他平台怎么投放', component: Page_OtherPlatforms_Delivery, hideHeader: true },

  { type: 'section', title: '行业通用信源' },
  { type: 'page', title: '五类通用信源总览', component: Page_MedSource_Overview, hideHeader: true },
  { type: 'page', title: '01 药品百科及数据库', component: Page_MedSource_DrugDB, hideHeader: true },
  { type: 'page', title: 'AI 具体是怎么引用的：药品百科', component: Page_MedSource_DrugDB_Citation, hideHeader: true },
  { type: 'page', title: '示例：中国医药信息查询平台', component: Page_MedSource_DrugDB_Dayi, hideHeader: true },
  { type: 'page', title: '示例：摩熵医药', component: Page_MedSource_DrugDB_Pharnex, hideHeader: true },
  { type: 'page', title: '02 综合医疗健康平台', component: Page_MedSource_HealthPortal, hideHeader: true },
  { type: 'page', title: 'AI 具体是怎么引用的：综合平台', component: Page_MedSource_HealthPortal_Citation, hideHeader: true },
  { type: 'page', title: '综合医疗健康平台示例：民福康', component: Page_MedSource_HealthPortal_Mfk, hideHeader: true },
  { type: 'page', title: '03 专业学术内容', component: Page_MedSource_Academic, hideHeader: true },
  { type: 'page', title: 'AI 具体是怎么引用的：学术内容', component: Page_MedSource_Academic_Citation, hideHeader: true },
  { type: 'page', title: '专业学术内容示例：丁香园', component: Page_MedSource_Academic_DXY, hideHeader: true },
  { type: 'page', title: '04 医生问答及科普', component: Page_MedSource_DoctorQA, hideHeader: true },
  { type: 'page', title: 'AI 具体是怎么引用的', component: Page_MedSource_DoctorQA_Citation, hideHeader: true },
  { type: 'page', title: '医生问答及科普类示例：博禾医生', component: Page_MedSource_DoctorQA_Bohe, hideHeader: true },
  { type: 'page', title: '05 官方及权威机构', component: Page_MedSource_Official, hideHeader: true },
  { type: 'page', title: 'AI 具体是怎么引用的：官方机构', component: Page_MedSource_Official_Citation, hideHeader: true },
  { type: 'page', title: '官方及权威机构示例：国家药监局', component: Page_MedSource_Official_NMPA, hideHeader: true },

  { type: 'section', title: '处方药与非处方药引用差异' },
  { type: 'page', title: '三类药品引用源总览', component: Page_RxOtc_Overview, hideHeader: true },
  { type: 'page', title: '处方药（重疾）：各AI平台引用源', component: Page_RxOtc_Platform_Critical, hideHeader: true },
  { type: 'page', title: '处方药（一般）：各AI平台引用源', component: Page_RxOtc_Platform_Rx, hideHeader: true },
  { type: 'page', title: '非处方药：各AI平台引用源', component: Page_RxOtc_Platform_Otc, hideHeader: true },
  { type: 'page', title: '两个核心差异', component: Page_RxOtc_Diff, hideHeader: true },

  { type: 'chapter', title: '投放资源', subtitle: 'DELIVERY RESOURCES', backgroundImage: '' },
  { type: 'section', title: '可投放资源盘点' },
  { type: 'page', title: '独家稀缺资源', component: Page_DeliveryResources_Hard, hideHeader: true },
  { type: 'page', title: '通用类平台资源', component: Page_DeliveryResources_Common, hideHeader: true },
  { type: 'page', title: '通用投放资源明细：AI 独家 / 药品百科', component: Page_DeliveryResources_Detail_A, hideHeader: true },
  { type: 'page', title: '通用投放资源明细：综合健康 / 专业学术', component: Page_DeliveryResources_Detail_B, hideHeader: true },
  { type: 'page', title: '通用投放资源明细：医生问答 / 官方权威', component: Page_DeliveryResources_Detail_C, hideHeader: true },
  { type: 'page', title: '通用投放资源明细：自媒体及短视频', component: Page_DeliveryResources_Detail_D, hideHeader: true },
  { type: 'page', title: '投放资源完整列表', component: Page_DeliveryResources_Video, hideHeader: true },

  { type: 'chapter', title: '内容创作专业性', subtitle: 'CONTENT EXPERTISE', backgroundImage: '' },

  { type: 'section', title: '内容本身的专业性' },
  { type: 'page', title: '医药稿件的内容专业性（药名与剂量核对）', component: Page_ContentExpertise_Accuracy, hideHeader: true },
  { type: 'page', title: '医药稿件的内容专业性（广告法红线）', component: Page_ContentExpertise_Compliance, hideHeader: true },
  { type: 'page', title: '医药稿件的内容专业性（中成药证型）', component: Page_ContentExpertise_Syndrome, hideHeader: true },

  { type: 'section', title: '机构与医生审核' },
  { type: 'page', title: '专业机构与医生的审核要求', component: Page_ContentExpertise_Review, hideHeader: true },

  // 广告法：先讲三层监管与硬红线，再讲「什么算广告」这个决定灰色地带的钥匙，
  // 最后落到 2026 年 2 月达人路径关闭后，还能跑的打法与我们的内容原则
  { type: 'chapter', title: '广告法及\n行业潜规则洞悉', subtitle: 'AD LAW & INDUSTRY PRACTICE', backgroundImage: '' },

  { type: 'section', title: '法律边界' },
  { type: 'page', title: '医药广告的监管是三层叠加', component: Page_AdLaw_Framework, hideHeader: true },
  { type: 'page', title: '说明书既是底线，也是天花板', component: Page_AdLaw_Ceiling, hideHeader: true },
  { type: 'page', title: '六条没有裁量空间的红线', component: Page_AdLaw_RedLines, hideHeader: true },

  { type: 'section', title: '什么算广告' },
  { type: 'page', title: '灰色地带都从「什么算广告」长出来', component: Page_AdLaw_WhatIsAd, hideHeader: true },

  { type: 'section', title: '市场潜规则' },
  { type: 'page', title: '2026年2月1日：一条分水岭', component: Page_AdLaw_Watershed, hideHeader: true },
  { type: 'page', title: '达人路径关闭后，还在跑的六条路', component: Page_AdLaw_Playbook, hideHeader: true },
  { type: 'page', title: '已经失效的老玩法，与我们的做法', component: Page_AdLaw_Conclusion, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // ——— 三、GEO行业认知信息差 ———
  // ══════════════════════════════════════════════════════════
  {
    type: 'part',
    id: 'insight',
    title: 'GEO行业认知信息差',
    subtitle: 'INDUSTRY INSIGHT',
    cover: {
      backgroundImage: '/proposal-cover/proposal-cover-company.png',
      brand: 'GEO索引未来',
      subtitle: 'GEO行业\n认知信息差',
      date: 'August 2026',
    },
    toc: { menuText: 'MENU', brandLabel: 'GEOINDEXFUTURE // 2026', serviceGuide: 'GEO SERVICE GUIDE' },
  },

  { type: 'chapter', title: '各AI平台\n现状和发展方向', subtitle: 'AI PLATFORM STATUS & TRENDS', backgroundImage: '' },

  { type: 'section', title: '近期主流AI模型更迭' },
  { type: 'page', title: '各AI平台用户量', component: Page_AiPlatformUserScale, hideHeader: true },
  { type: 'page', title: '主流AI模型版本变更', component: Page_ModelVersionChanges, hideHeader: true },
  { type: 'page', title: '近期主流模型更新记录', component: Page_ModelChangesOverview, hideHeader: true },

  { type: 'section', title: '豆包改版' },
  { type: 'page', title: '豆包改版变化1：大幅增多了对抖音的引用', component: Page_DoubaoRevampChanges, hideHeader: true },
  { type: 'page', title: '豆包改版变化2：读取视频只读头尾', component: Page_DoubaoRevampHeadTail, hideHeader: true },
  { type: 'page', title: '豆包改版变化2：Summary 与逐字稿对照', component: Page_DoubaoRevampHeadTailEvidence, hideHeader: true },
  { type: 'page', title: '豆包改版变化2：三档时长实测结论', component: Page_DoubaoRevampHeadTailConclusion, hideHeader: true },
  { type: 'page', title: '小荷健康平台高引用率的假象', component: Page_XiaoheCitationIllusion, hideHeader: true },
  { type: 'page', title: '豆包改版后我们的应对方案', component: Page_DoubaoRevampResponse, hideHeader: true },
  { type: 'page', title: '视频投放策略', component: Page_VideoStrategy_HeadTail, hideHeader: true },
  { type: 'page', title: '案例视频展示', component: Page_VideoStrategy_Cases, hideHeader: true },

  { type: 'section', title: '其他平台重要变化' },
  { type: 'page', title: '千问：从关键词检索到检索 Agent', component: Page_PlatformChange_Qwen, hideHeader: true },
  { type: 'page', title: 'DeepSeek：内容开始拼证据密度', component: Page_PlatformChange_DeepSeek, hideHeader: true },
  { type: 'page', title: '元宝：进了微信生态，还要被 Agent 选中', component: Page_PlatformChange_Yuanbao, hideHeader: true },
  { type: 'page', title: '百度：搜索正在变成 AI 的检索基础设施', component: Page_PlatformChange_Baidu, hideHeader: true },
  { type: 'page', title: 'Kimi：一个问题被拆成上百路并行检索', component: Page_PlatformChange_Kimi, hideHeader: true },
  { type: 'page', title: '蚂蚁阿福：医疗问答的第一入口，位置买不到', component: Page_PlatformChange_Afu, hideHeader: true },

  { type: 'chapter', title: '关键词策略', subtitle: 'KEYWORD STRATEGY', backgroundImage: '' },
  { type: 'section', title: '这些词是怎么选出来的' },
  { type: 'page', title: '市场上其他做法', component: Page_GEOWordSelectionOther, hideHeader: true },
  { type: 'page', title: '影子算法', component: Page_SkyworthShadowAlgorithm, hideHeader: true },
  { type: 'page', title: 'AI 如何处理用户问题', component: Page_SkyworthAiProcess, hideHeader: true },
  { type: 'page', title: '模拟搜索引擎', component: Page_SkyworthSearchEngineModel, hideHeader: true },
  { type: 'page', title: '交叉对比锁定高频优化词', component: Page_SkyworthCrossCompare, hideHeader: true },

  { type: 'chapter', title: '内容策略', subtitle: 'CONTENT STRATEGY', backgroundImage: '' },
  { type: 'section', title: '我们到底用AI还是用人写内容' },
  { type: 'page', title: '我们到底用AI还是用人工写内容', variants: [Page_SkyworthContentDetailsAI, Page_HumanAiRatioApproach], hideHeader: true },
  { type: 'page', title: '30%人+70%Agent写的好处和坏处', component: Page_ArticleLifespan, hideHeader: true },

  // 写文章的整体逻辑：AI 整理引用规律 + 品牌信息 + 用户设定 → 人写观点 → Agent 辅助成稿
  { type: 'section', title: '我们怎么写一篇文章' },
  { type: 'page', title: '写文章的整体逻辑', component: Page_ContentWritingLogic, hideHeader: true },

  // 依上述逻辑产出的五类例文（本章走 SlideLayout 页眉，截图与第四部分共用）
  { type: 'section', title: '不同类型文章展示' },
  { type: 'page', title: '同一套逻辑，产出五类文章', component: Page_ContentTypesOverview, hideHeader: true },
  { type: 'page', title: '新药上市类写法拆解', component: Page_ContentTypeDeconstruct_Launch, hideHeader: true },
  { type: 'page', title: '新药上市类成稿示意', component: Page_ContentTypeDemo_Launch, hideHeader: true },
  { type: 'page', title: '指南共识类写法拆解', component: Page_ContentTypeDeconstruct_Guide, hideHeader: true },
  { type: 'page', title: '指南共识类成稿示意', component: Page_ContentTypeDemo_Guide, hideHeader: true },
  { type: 'page', title: '临床研究类写法拆解', component: Page_ContentTypeDeconstruct_Clinical, hideHeader: true },
  { type: 'page', title: '临床研究类成稿示意', component: Page_ContentTypeDemo_Clinical, hideHeader: true },
  { type: 'page', title: '方案解读类写法拆解', component: Page_ContentTypeDeconstruct_Regimen, hideHeader: true },
  { type: 'page', title: '方案解读类成稿示意', component: Page_ContentTypeDemo_Regimen, hideHeader: true },
  { type: 'page', title: '知识科普类写法拆解', component: Page_ContentTypeDeconstruct_Edu, hideHeader: true },
  { type: 'page', title: '知识科普类成稿示意', component: Page_ContentTypeDemo_Edu, hideHeader: true },

  { type: 'chapter', title: '投放策略', subtitle: 'DELIVERY STRATEGY', backgroundImage: '' },
  { type: 'section', title: '投放原则' },
  { type: 'page', title: '长期投放', component: Page_DeliveryLongTerm, hideHeader: true },
  { type: 'section', title: '精准高权重账号' },
  { type: 'page', title: '精准高权重账号', component: Page_DeliveryHighWeight, hideHeader: true },
  { type: 'section', title: '有潜力的垂直社区' },
  { type: 'page', title: '有潜力的垂直社区', component: Page_PotentialVerticalCommunity, hideHeader: true },
  { type: 'section', title: '新兴媒体尝试' },
  { type: 'page', title: '新兴媒体尝试', component: Page_EmergingMediaAttempts, hideHeader: true },

  // ══════════════════════════════════════════════════════════
  // ——— 四、三九养胃舒方案 ———
  // 页面来自 Slide_999，使用该项目自带的顶部导航样式（nav: 'legacy'）
  // ══════════════════════════════════════════════════════════
  {
    type: 'part',
    id: 'sanjiu',
    title: '三九养胃舒方案',
    subtitle: 'SANJIU CASE',
    nav: 'legacy',
    cover: {
      backgroundImage: '/proposal-cover/proposal-cover-new.png',
      brand: 'GEO索引未来',
      subtitle: '三九养胃舒\nGEO规划方案',
      date: 'August 2026',
      layout: 'fullscreen',
    },
    toc: { menuText: 'MENU', brandLabel: 'GEOINDEXFUTURE // 2026', serviceGuide: 'GEO SERVICE GUIDE' },
  },

  { type: 'chapter', title: '品牌调研', subtitle: 'BRAND RESEARCH', backgroundImage: '/' },

  { type: 'section', title: '项目品牌与行业信息' },
  { type: 'page', title: '企业与品牌基础信息', component: Page_BrandInfo },
  { type: 'page', title: '聚焦产品养胃舒颗粒信息调研', component: Page_BrandProduct_Yangweishu },
  { type: 'page', title: '胃肠品类布局与三九胃泰家族', component: Page_BrandProducts },
  { type: 'page', title: '品牌核心竞争优势', component: Page_BrandTech },
  { type: 'page', title: '商业模式与消费者触达体系', component: Page_BrandChannel },
  { type: 'page', title: '竞品对比', component: Page_BrandCompetitors },

  { type: 'section', title: '行业特点' },
  { type: 'page', title: '胃药OTC赛道及GEO难点解析', component: Page_IndustryPainPoints },
  { type: 'page', title: '同门兄弟先打架，「999的养胃药」AI先想到三九胃泰', component: Page_PainPoint3_Service },
  { type: 'page', title: '用户说的是症状，说明书写的是证型', component: Page_PainPoint1_WordCloud },
  { type: 'page', title: '说明书没写的，AI却当成事实讲', components: [Page_PainPoint4_SalesModel, Page_PainPoint4_SalesModel_Solution] },

  { type: 'chapter', title: '词条策略', subtitle: 'KEYWORD STRATEGY', backgroundImage: '/' },

  { type: 'section', title: '词条策略' },
  { type: 'page', title: '词条分组依据', component: Page_KeywordGroupingBasis },
  { type: 'page', title: '词条分组结论', component: Page_KeywordGroupingConclusion },

  { type: 'section', title: '词条推导及确定过程' },
  { type: 'page', title: '数据导入分析', component: PB_DataImportAnalysis },
  { type: 'page', title: '词条生成逻辑', component: Page_KeywordGenerationLogic },
  { type: 'page', title: '词条打标逻辑', component: Page_KeywordTaggingLogic },
  { type: 'page', title: '词条拓展逻辑', component: Page_KeywordExpansionLogic },
  { type: 'page', title: '词条穷举及清洗', components: [Page_KeywordExhaustClean, Page_KeywordExhaustClean2, Page_KeywordExhaustClean3, Page_KeywordExhaustClean4] },
  { type: 'page', title: '词条分类及拓展', components: [Page_KeywordClassifyExpand, Page_KeywordClassifyExpand2] },
  { type: 'page', title: '词条确定', components: [Page_KeywordConfirmPrompt, Page_KeywordConfirmPrompt2, Page_KeywordConfirmPrompt3, Page_KeywordConfirmPrompt4] },

  { type: 'chapter', title: 'GEO体检报告', subtitle: 'GEO HEALTH CHECK', backgroundImage: '/proposal-chapters/proposal-chapter-cover-02.jpg' },

  { type: 'section', title: '数据分析报告说明' },
  { type: 'page', title: '报告说明', components: [Page_GeoReport_BasicInfo1, Page_GeoReport_BasicInfo2] },

  { type: 'section', title: '词条数据 · C端' },
  { type: 'page', title: '数据总览', components: [Page_GeoReport_Dashboard, Page_GeoReport_Dashboard2] },
  { type: 'page', title: '词条表现', components: [Page_GeoReport_Entries, Page_GeoReport_Entries_Analysis] },
  { type: 'page', title: '竞品对比', component: Page_GeoReport_Competitors_Analysis },
  { type: 'page', title: '引用源分析', components: [Page_GeoReport_Sources, Page_GeoReport_Sources2] },

  { type: 'section', title: '词条数据 · B端' },
  { type: 'page', title: '数据总览', components: [Page_GeoReport_Dashboard_ToB, Page_GeoReport_Dashboard2_ToB] },
  { type: 'page', title: '词条表现', components: [Page_GeoReport_Entries_ToB, Page_GeoReport_Entries_Analysis_ToB] },
  { type: 'page', title: '竞品对比', component: Page_GeoReport_Competitors_Analysis_ToB },
  { type: 'page', title: '引用源分析', components: [Page_GeoReport_Sources_ToB, Page_GeoReport_Sources2_ToB] },

  { type: 'section', title: '正负面分析' },
  { type: 'page', title: '品牌正负面', components: [Page_GeoReport_Sentiment_Pre, Page_GeoReport_Sentiment, Page_GeoReport_Sentiment_Compare] },

  { type: 'section', title: '提及率偏低的原因' },
  { type: 'page', title: '三九养胃舒颗粒提及率低的原因', component: Page_GeoReport_MentionWhy },

  { type: 'chapter', title: 'KPI及验收标准', subtitle: 'KPI & ACCEPTANCE CRITERIA', backgroundImage: '/proposal-chapters/proposal-chapter-cover-04.jpg' },

  { type: 'section', title: 'KPI及验收标准' },
  { type: 'page', title: '品牌现状与KPI', component: PB_GeoKpiAcceptance },
  { type: 'page', title: '工作内容与预期效果', component: PB_GeoWorkAcceptance },
  { type: 'page', title: '增值服务', component: PB_GeoValueAddedServices },

  { type: 'chapter', title: 'GEO\n实操要点', subtitle: 'GEO EXECUTION ESSENTIALS', backgroundImage: '/proposal-chapters/proposal-chapter-cover-03.jpg' },

  { type: 'section', title: '内容策略' },
  {
    type: 'page',
    title: '内容策略',
    components: [
      Page_ContentStrategyBacktrack,
      Page_ContentStrategyDetails,
      // 五类文章的拆解与例文已在第三部分讲过，这里只补排行榜类
      Page_ContentStrategyDemo2,
      Page_ContentStrategyDemo3,
      Page_ContentStrategyDemo4,
    ],
  },

  { type: 'section', title: '投放策略' },
  { type: 'page', title: '筛选逻辑总览', component: Page_PlatformFilterIntro },
  { type: 'page', title: '筛选过程', components: [Page_PlatformFilterLogic, Page_PlatformFilterLogicB, Page_PlatformFilterLogicC] },
  { type: 'page', title: '筛选结论', component: Page_PlatformFilterConclusion },
  { type: 'page', title: '按权分发', component: Page_DeliveryStrategy_Combo },
  { type: 'page', title: '面对不同信源怎么做', component: Page_SourceStrategy_Overview },

  { type: 'section', title: '错误价格、负面信息怎么处理' },
  { type: 'page', title: '如何查找负面信息', component: Page_NegativeInfoSearch },
  { type: 'page', title: '处理负面及错误信息', component: Page_NegativeInfoHandling },

  // ══════════════════════════════════════════════════════════
  // ——— 五、Q&A ———
  // Q1 官网对 GEO 建设是否重要（已排）
  // Q2 预算和项目该如何规划、Q3 标书和验收（初版已排）
  // ══════════════════════════════════════════════════════════
  {
    type: 'part',
    id: 'qa',
    title: 'Q&A',
    subtitle: 'Q & A',
    cover: {
      backgroundImage: '/proposal-cover/proposal-cover-new.jpg',
      brand: 'GEO索引未来',
      subtitle: 'Q&A',
      date: 'August 2026',
    },
    toc: { menuText: 'MENU', brandLabel: 'GEOINDEXFUTURE // 2026', serviceGuide: 'GEO SERVICE GUIDE' },
  },

  {
    type: 'chapter',
    title: '官网对GEO建设\n是否重要',
    subtitle: 'Q1 · OFFICIAL WEBSITE & GEO',
    backgroundImage: '',
  },

  { type: 'section', title: '国内外差异' },
  { type: 'page', title: '官网在国内不是主战场', component: Page_Web_IndustryCitationRate, hideHeader: true },

  // 桃李面包官网诊断案例：原报告 15 页压成 5 页，缩略图 + 一句话讲清每页在证明什么
  { type: 'section', title: '官网 GEO 优化案例' },
  { type: 'page', title: '官网诊断怎么做', component: Page_WebCase_Overview, hideHeader: true },

  { type: 'page', title: '网站架构诊断（上）', component: Page_WebCase_Arch_Structure, hideHeader: true },
  { type: 'page', title: '网站架构诊断（下）', component: Page_WebCase_Arch_Crawl, hideHeader: true },

  { type: 'page', title: '内容覆盖诊断（上）', component: Page_WebCase_Content_Basic, hideHeader: true },
  { type: 'page', title: '内容覆盖诊断（下）', component: Page_WebCase_Content_LongTail, hideHeader: true },

  // 架构建议 + 内容建议 + 瑞幸标杆三页压成一页：左中两栏是十项清单，右栏用瑞幸截图当参照
  { type: 'page', title: '优化建议与标杆参照', component: Page_Web_Advice_Combo, hideHeader: true },

  // ——— Q2 预算和项目该如何规划 ———
  // 单页讲完：以单个重点产品（胃泰·养胃舒颗粒）300 万元/年为例，分成三笔钱
  //   基础建设 60 万（药品库收录 + 官网与渠道信息）／
  //   GEO 核心工作 150 万（分析、策略、内容、竞品跟踪）／
  //   投放与渠道 90 万（专业信源、高权重账号、长期投放）
  {
    type: 'chapter',
    title: '预算和项目\n该如何规划',
    subtitle: 'Q2 · BUDGET & PLANNING',
    backgroundImage: '',
  },
  { type: 'section', title: '预算规划' },
  { type: 'page', title: '单品 300 万，分成三笔钱', component: Page_QA_Budget_Allocation, hideHeader: true },

  // ——— Q3 标书和验收 ———
  // 招标：一页讲完「别定做不到的 KPI + 四道当场能验的门槛（含低价数学惩罚）」；标书示意按页翻阅全文
  // 验收：按词类分类分阶段验收 + 罚则，数据靠第三方系统与真机人工双重验真（附造假演示）
  {
    type: 'chapter',
    title: '标书和验收',
    subtitle: 'Q3 · BIDDING & ACCEPTANCE',
    backgroundImage: '',
  },
  { type: 'section', title: '招标门槛' },
  { type: 'page', title: '标书怎么写', component: Page_QA_Bid_Threshold, hideHeader: true },
  {
    type: 'page',
    title: '标书示意',
    components: [
      Page_QA_Bid_Sample,
      Page_QA_Bid_Sample2,
      Page_QA_Bid_Sample3,
      Page_QA_Bid_Sample4,
      Page_QA_Bid_Sample5,
      Page_QA_Bid_Sample6,
      Page_QA_Bid_Sample7,
    ],
    hideHeader: true,
  },
  { type: 'section', title: '验收设计' },
  { type: 'page', title: '验收怎么设计', component: Page_QA_Acceptance_Framework, hideHeader: true },
  { type: 'page', title: '数据怎么验真', component: Page_QA_Acceptance_Verify, hideHeader: true },
  { type: 'page', title: '造假有多容易', component: Page_QA_Acceptance_FakeDemo, hideHeader: true },

  { type: 'section', title: 'Thank You' },
  { type: 'page', title: 'Thank You', component: Page_SkyworthThankYou, hideHeader: true },
];
