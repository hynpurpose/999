import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Tech_1_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-white mb-5">1、技术实力</h1>
                <QABanner
                    index={1}
                    text="技术自研核心能力：服务商 GEO 技术自主研发功底，含核心引擎、算法模型、监测系统等技术与自有"
                    className="mb-5"
                />
                <p className="mb-4 text-[1.05rem] leading-relaxed">
                    我司围绕 GEO 业务自主构建了一套 "任务调度引擎 + 多平台采集层 + 语义分析引擎 + 数据看板" 的端到端技术栈，所有核心模块均自研、源码可控，不依赖任何第三方 SaaS 平台。
                </p>
                <table className="w-full border-collapse border border-zinc-700 text-[0.95rem] mb-4">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-2.5 text-left border-r border-zinc-700 w-1/4">模块</th>
                            <th className="p-2.5 text-left">自研内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">任务调度引擎</td><td className="p-2.5">基于 Python 实现的轮询式任务编排系统，支持任务分级、并发控制、状态机管理、断点续跑、超时熔断、自动重试、异常告警</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">多平台采集层</td><td className="p-2.5">自研的 AI 平台适配框架，每个目标引擎一套独立适配器（Adapter Pattern），覆盖登录态保持、提问、答案抓取、引用解析、截图归档全流程</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">语义分析引擎</td><td className="p-2.5">基于大模型 API + 自研 Prompt Engineering 体系，实现品牌识别、商品提及判定、排名抽取、关键词归一化、引用文章品牌追溯</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">数据中台</td><td className="p-2.5">自研多阶段任务中间存储层 + 完整状态机，支持任意环节独立重跑、定时发布、增量计算</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">品牌 / 产品别名服务</td><td className="p-2.5">自研别名词典 + 增量学习机制，自动归一化「同一品牌不同写法」，支持按项目维度独立维护，提升品牌识别准确率</td></tr>
                        <tr><td className="p-2.5 border-r border-zinc-800 font-bold">任务审计与监控</td><td className="p-2.5">自研审计日志体系，记录全量任务执行轨迹（操作人 / 参数 / 时间 / 影响范围），异常事件实时告警</td></tr>
                    </tbody>
                </table>
                <p className="text-[1.05rem] leading-relaxed">
                    代码与技术资产 100% 自有，使用 Git 进行版本管理与 Code Review，无第三方代码授权风险。
                </p>
            </div>
        </div>
    );
}
