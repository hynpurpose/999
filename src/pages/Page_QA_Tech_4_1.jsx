import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Tech_4_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <QABanner
                    index={4}
                    text="语义精度：用户意图识别、语义解析、内容结构化输出的准确率，衡量 GEO 优化精准度；"
                    className="mb-5"
                />
                <p className="mb-3 text-[1.05rem] leading-relaxed">我司在 GEO 关键的语义环节均建立了可量化的准确率指标与持续优化机制：</p>
                <table className="w-full border-collapse border border-zinc-700 mb-5 text-[0.95rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-2.5 text-left border-r border-zinc-700 w-1/4">环节</th>
                            <th className="p-2.5 text-left border-r border-zinc-700">技术实现</th>
                            <th className="p-2.5 text-left">准确率水平</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">用户意图识别</td><td className="p-2.5 border-r border-zinc-800">大模型意图分类 + 自研词条扩展词典</td><td className="p-2.5">100%</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">品牌提及识别</td><td className="p-2.5 border-r border-zinc-800">大模型抽取 + 别名词典归一化 + 复合词拆解</td><td className="p-2.5">≥ 96%</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">商品 / 排名抽取</td><td className="p-2.5 border-r border-zinc-800">结构化 Prompt + 后处理校验 + 有序 / 无序列表识别</td><td className="p-2.5">≥ 95%</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">引用文章品牌追溯</td><td className="p-2.5 border-r border-zinc-800">全文抓取 + 段落级品牌识别 + 上下文消歧</td><td className="p-2.5">≥ 95%</td></tr>
                        <tr><td className="p-2.5 border-r border-zinc-800 font-bold">关键词提取</td><td className="p-2.5 border-r border-zinc-800">大模型抽取 + 同义词归一 + 增量统计</td><td className="p-2.5">≥ 99%</td></tr>
                    </tbody>
                </table>
                <p className="mb-2 text-[1.05rem] leading-relaxed">持续优化机制：</p>
                <ul className="text-[1rem] leading-relaxed list-disc pl-6 space-y-1.5 text-zinc-400">
                    <li>复测闭环：每个项目交付前自动生成「复测用例集」，对识别结果进行二次确认，支持「全量重检」「未提及重检」等多种模式；</li>
                    <li>别名增量学习：识别错误案例自动入库别名词典，下次执行自动命中；</li>
                    <li>多模型校验：关键判定支持双模型交叉验证，降低单模型幻觉风险。</li>
                </ul>
            </div>
        </div>
    );
}
