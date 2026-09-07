import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Data_2_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <QABanner
                    index={2}
                    text="数据监测可视性：核查数据看板、实时监测、回溯归因、效果核验的可视性，杜绝数据黑箱"
                    className="mb-3"
                />
                <p className="mb-3 text-[0.9rem] leading-relaxed">
                    我司提供 「数据看板 + 全量原始数据 + 任务审计日志」 三层可视化体系，确保每一个指标都可下钻到原始证据，每一次任务都可复核。
                </p>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（1）数据看板：围绕核心指标 「提及率 × 提及位次」 构建多维度可视化看板</p>
                <table className="w-full border-collapse border border-zinc-700 text-[0.8rem] mb-4">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-1.5 text-left border-r border-zinc-700 w-1/4">视图维度</th>
                            <th className="p-1.5 text-left">看板内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">项目总览</td><td className="p-1.5">提及率趋势、提及位次分布、首位提及率、Top3 提及率、行业影响力排名、被重点引用文章等，一屏掌握项目整体表现</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">平台对比</td><td className="p-1.5">跨 AI 平台横向对比（DeepSeek / 豆包 / 千问 / 百度 AI / 元宝 …）—— 清晰看到每个平台的 GEO 表现差异</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">品牌对比</td><td className="p-1.5">目标品牌 vs 主要竞品 在提及率、提及位次上的对比，识别竞品优劣势</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">词条详情</td><td className="p-1.5">下钻到每一个查询词，可查看 AI 答案原文、品牌提及位置、排名、引用文章列表</td></tr>
                        <tr><td className="p-1.5 border-r border-zinc-800 font-bold">趋势分析</td><td className="p-1.5">日 / 周 / 月维度趋势图，优化效果一目了然</td></tr>
                    </tbody>
                </table>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（2）全量原始数据（可下载、可查证）</p>
                <table className="w-full border-collapse border border-zinc-700 text-[0.8rem] mb-4">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-1.5 text-left border-r border-zinc-700 w-[20%]">证据类型</th>
                            <th className="p-1.5 text-left border-r border-zinc-700 w-[50%]">内容</th>
                            <th className="p-1.5 text-left w-[30%]">用途</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">AI 答案原文</td><td className="p-1.5 border-r border-zinc-800">每一次 AI 提问的完整回答文本</td><td className="p-1.5">复核品牌识别是否准确</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">提问截图</td><td className="p-1.5 border-r border-zinc-800">每一次提问的屏幕截图（永久存储于对象存储）</td><td className="p-1.5">还原 AI 平台当时的真实页面状态</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">引用文章</td><td className="p-1.5 border-r border-zinc-800">AI 答案引用的每一篇信源文章 URL + 标题 + 正文</td><td className="p-1.5">追溯品牌内容种草渗透情况</td></tr>
                        <tr><td className="p-1.5 border-r border-zinc-800 font-bold">品牌识别依据</td><td className="p-1.5 border-r border-zinc-800">每一次品牌识别的判定理由（命中的关键词、上下文片段）</td><td className="p-1.5">判断识别是否合理</td></tr>
                    </tbody>
                </table>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <p className="mb-1.5 text-[0.95rem] leading-relaxed">（3）任务审计日志</p>
                        <p className="mb-1 text-[0.8rem] leading-relaxed text-zinc-400">所有数据操作均全程留痕、可追溯：</p>
                        <ul className="text-[0.8rem] leading-relaxed list-disc pl-5 space-y-0.5 text-zinc-400">
                            <li>任务执行人 / 起止时间 / 输入参数 / 影响范围</li>
                            <li>异常告警记录 / 重试记录</li>
                            <li>数据修订记录（任何对历史数据的修改都有审计痕迹，修改人、修改时间、修改前后值清晰可查）</li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-1.5 text-[0.95rem] leading-relaxed">（4）核心承诺：杜绝数据黑箱</p>
                        <ul className="text-[0.8rem] leading-relaxed list-disc pl-5 space-y-0.5 text-zinc-400">
                            <li>指标可下钻：看板上的每一个数字（如提及率 35%），都可点击下钻到具体的提问、答案、截图证据；</li>
                            <li>数据可自助查询：客户可申请只读账号，自助查询任意时段、任意词条、任意平台的原始数据；</li>
                            <li>接受第三方审计：接受甲方指定的第三方审计机构对数据真实性进行抽样核查；</li>
                            <li>复测机制兜底：交付前自动生成「复测用例集」，对识别结果做二次确认（支持「全量重检」「未提及重检」等模式），确保交付数据准确率。</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
