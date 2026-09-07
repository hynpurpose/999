import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Tech_2_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <QABanner
                    index={2}
                    text="平台适配能力：可覆盖的 AI 平台数量、新平台接入速度；以及算法迭代响应效率，保障多维度优化兼容性"
                    className="mb-4"
                />
                <p className="mb-1.5 text-[1.05rem] leading-relaxed">（1）覆盖的 AI 平台数量</p>
                <p className="mb-3 text-[1rem] leading-relaxed text-zinc-400">已适配 6 大主流生成式AI平台（DeepSeek、豆包、文心、腾讯元宝、通义千问、Kimi），覆盖国内绝大多数用户活跃平台。</p>

                <p className="mb-1.5 text-[1.05rem] leading-relaxed">（2）新平台接入速度</p>
                <p className="mb-3 text-[1rem] leading-relaxed text-zinc-400">我司采用适配器模式架构，平台层与业务层完全解耦，新平台接入仅需实现一个适配器，单平台接入工期 3–5 个工作日（含登录态调试、答案抓取、引用解析、回归测试）。</p>

                <p className="mb-1.5 text-[1.05rem] leading-relaxed">（3）算法迭代响应效率</p>
                <p className="mb-3 text-[1rem] leading-relaxed text-zinc-400">当目标 AI 平台前端升级（如页面结构变更、协议变更）时，依托模块化设计与监控告警，24 小时内可完成定位 + 修复 + 灰度上线。</p>

                <p className="mb-1.5 text-[1.05rem] leading-relaxed">（4）多维度优化兼容性保障</p>
                <p className="mb-1.5 text-[1rem] leading-relaxed text-zinc-400">我司通过模块化架构 + 多目标指标体系，确保 GEO 服务在四个维度上稳定兼容：</p>
                <ul className="text-[1rem] leading-relaxed list-disc pl-6 space-y-1 text-zinc-400 mb-5">
                    <li>平台维度：统一适配器接口，一套优化策略可复用到 5+ 个 AI 平台；</li>
                    <li>内容维度：同时优化文本、图表、引用文章、知识库等多种内容形式；</li>
                    <li>目标维度：覆盖提及率 / 提及位次 / Top3 占位 / 引用文章提及 / 平台覆盖度 / 关键词覆盖度 6 大指标，客户可按业务阶段灵活切换优化重心；</li>
                    <li>算法版本维度：异常实时告警 + 24 小时内适配修复 + SaaS 模式让所有客户即时受益。</li>
                </ul>

                <QABanner
                    index={3}
                    text="技术人员实力：技术人员占比，是否有算法工程师"
                    className="mb-3"
                />
                <p className="mb-2 text-[1rem] leading-relaxed text-zinc-400">我司核心团队由全栈工程师、数据工程师、AI 算法工程师、运维工程师构成，技术人员占比 ≥ 80%。其中：</p>
                <ul className="text-[1rem] leading-relaxed list-disc pl-6 space-y-1 text-zinc-400">
                    <li>算法工程师：负责 Prompt Engineering、语义识别准确率优化、品牌别名学习机制；</li>
                    <li>数据工程师：负责采集流水线、ETL、看板与归因模型；</li>
                    <li>全栈工程师：负责调度引擎、平台适配层、前端看板；</li>
                    <li>运维工程师：负责数据库、监控告警、安全合规。</li>
                </ul>
            </div>
        </div>
    );
}
