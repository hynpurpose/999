import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Data_1_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-white mb-4">2、实战效果与数据</h1>
                <QABanner
                    index={1}
                    text="核心效果指标：评估意图占位、内容修正等核心优化成果，验证 GEO 实际业务价值；同时对考核标准的有效性、稳定性，有明确且高标准的承诺"
                    className="mb-4"
                />
                <p className="mb-3 text-[0.95rem] leading-relaxed">
                    我司基于自研的 GEO 监测体系，建立了一套简洁、可复核、行业通用的效果指标，所有指标均可量化、可追溯、可承诺：
                </p>
                <table className="w-full border-collapse border border-zinc-700 text-[0.85rem] mb-4">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-2 text-left border-r border-zinc-700 w-[15%]">指标</th>
                            <th className="p-2 text-left border-r border-zinc-700 w-[30%]">定义</th>
                            <th className="p-2 text-left border-r border-zinc-700 w-[25%]">计算方式</th>
                            <th className="p-2 text-left w-[30%]">默认承诺</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-2 border-r border-zinc-800 font-bold">提及率</td><td className="p-2 border-r border-zinc-800">在目标词条下，AI 答案中是否出现目标品牌的比例</td><td className="p-2 border-r border-zinc-800">提及次数 ÷ 总查询次数</td><td className="p-2">阶段性提升，对标行业基线 +30% 以上</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-2 border-r border-zinc-800 font-bold">提及位次</td><td className="p-2 border-r border-zinc-800">目标品牌在 AI 答案品牌列表中的排名位置（第 1、第 2、第 3…）</td><td className="p-2 border-r border-zinc-800">取每次提及的具体位次</td><td className="p-2">持续向前推进，Top3 占比逐月提升</td></tr>
                        <tr><td className="p-2 border-r border-zinc-800 font-bold">首位提及率</td><td className="p-2 border-r border-zinc-800">目标品牌排在第 1 位的次数 / 总提及次数</td><td className="p-2 border-r border-zinc-800">首位次数 ÷ 总查询次数</td><td className="p-2">持续提升，重点词条优先冲首位</td></tr>
                    </tbody>
                </table>

                <p className="mb-2 text-[0.95rem] leading-relaxed">（1）指标体系的核心特征</p>
                <ul className="text-[0.85rem] leading-relaxed list-disc pl-5 space-y-1 text-zinc-400 mb-4">
                    <li>二维度衡量：「提及率」反映品牌有没有被提到（广度），「提及位次」反映品牌被提得是不是靠前（深度），两个维度组合形成完整的 GEO 效果画像；</li>
                    <li>多平台对比：所有指标均按 AI 平台维度独立统计（DeepSeek / 豆包 / 千问 / 百度 AI / 元宝），客户可清晰看到每个平台的 GEO 表现差异；</li>
                    <li>多时间维度：日 / 周 / 月维度自动汇总；</li>
                    <li>多角色视图：项目维度（横向品牌竞品对比）、词条维度（深入到每个查询）、品牌维度（追踪自身品牌成长）。</li>
                </ul>

                <p className="mb-2 text-[0.95rem] leading-relaxed">（2）考核标准的有效性与稳定性承诺</p>
                <ul className="text-[0.85rem] leading-relaxed list-disc pl-5 space-y-1 text-zinc-400">
                    <li>所有指标基于项目维度独立统计，统计口径合同前书面确认、数据可复核；</li>
                    <li>定期出具复盘报告；</li>
                    <li>数据采集使用真实 AI 平台抓取（非模拟数据），所有原始证据（提问截图、答案文本、引用链接）均留存可查；</li>
                    <li>提供复测机制：交付前自动对识别结果做二次确认，支持「全量重检」「未提及重检」等多种模式，保障数据真实性。</li>
                </ul>
            </div>
        </div>
    );
}
