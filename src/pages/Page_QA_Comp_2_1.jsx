import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Comp_2_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <QABanner
                    index={2}
                    text="数据安全保障：客户数据加密、保密协议、数据防泄露等安全管控措施；能够提交合规证明材料"
                    className="mb-3"
                />
                <p className="mb-3 text-[0.9rem] leading-relaxed text-zinc-400">
                    我司将客户数据安全视为 GEO 服务交付的生命线，围绕 "采集合规、传输加密、存储隔离、访问可控、全程审计、生命周期管理" 六个维度构建端到端防护体系，并辅以制度与应急预案，确保客户数据在全链路中"可用不可见、可控不可漏"。
                </p>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（1）数据分级分类</p>
                <table className="w-full border-collapse border border-zinc-700 text-[0.8rem] mb-3">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-1.5 text-left border-r border-zinc-700">等级</th>
                            <th className="p-1.5 text-left border-r border-zinc-700">数据类型</th>
                            <th className="p-1.5 text-left border-r border-zinc-700">典型内容</th>
                            <th className="p-1.5 text-left">防护强度</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold text-rose-300">L4 机密</td><td className="p-1.5 border-r border-zinc-800">客户业务数据、AI平台账号凭证</td><td className="p-1.5 border-r border-zinc-800">品牌策略、未公开产品、Cookie...</td><td className="p-1.5">加密存储 + 双人复核 + 审计</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold text-amber-300">L3 敏感</td><td className="p-1.5 border-r border-zinc-800">采集结果、交付报表</td><td className="p-1.5 border-r border-zinc-800">AI 对话原文、引用链接、品牌情感</td><td className="p-1.5">加密传输 + 项目级隔离</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold text-blue-300">L2 内部</td><td className="p-1.5 border-r border-zinc-800">关键词统计、任务日志</td><td className="p-1.5 border-r border-zinc-800">keyword_stats、task_logs</td><td className="p-1.5">内网访问 + 权限管控</td></tr>
                        <tr><td className="p-1.5 border-r border-zinc-800 font-bold text-emerald-300">L1 公开</td><td className="p-1.5 border-r border-zinc-800">平台公开内容、行业资料</td><td className="p-1.5 border-r border-zinc-800">公开 URL、公开知识库</td><td className="p-1.5">常规管控</td></tr>
                    </tbody>
                </table>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（2）数据采集合规</p>
                <ul className="text-[0.8rem] leading-relaxed list-disc pl-5 space-y-1 text-zinc-400 mb-3">
                    <li><strong className="text-zinc-200">不采集 C 端个人信息：</strong>以"词条 × AI 平台"为最小粒度向公开生成式引擎提问，全流程不涉及任何 PII、设备信息、行为画像。</li>
                    <li><strong className="text-zinc-200">采集对象去标识化：</strong>引用链接仅保留公开 URL 与文章标题，正文经摘要化与结构化处理后入库。</li>
                    <li><strong className="text-zinc-200">频控与白名单：</strong>采集模块内置请求频控与平台白名单机制，符合《网络安全法》要求。</li>
                    <li><strong className="text-zinc-200">平台账号合法授权：</strong>账号均由账号方书面授权，访问范围限定平台服务条款允许的公开内容。</li>
                </ul>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（3）传输加密实施标准</p>
                <table className="w-full border-collapse border border-zinc-700 text-[0.8rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-1.5 text-left border-r border-zinc-700 w-1/3">链路界限</th>
                            <th className="p-1.5 text-left">执行加密方式</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">浏览器 ↔ AI 平台</td><td className="p-1.5">强制 HTTPS / TLS 1.2+，禁止明文降级</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">应用 ↔ 大模型 API（DashScope 等）</td><td className="p-1.5">HTTPS + Bearer Token 鉴权</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">应用 ↔ MySQL</td><td className="p-1.5">内网通信，支持开启 SSL 双向认证</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">截图 / 附件 ↔ 阿里云 OSS</td><td className="p-1.5">HTTPS + STS 临时凭证（最短有效期）</td></tr>
                        <tr><td className="p-1.5 border-r border-zinc-800 font-bold">报表 / 看板 ↔ 客户</td><td className="p-1.5">HTTPS 站点 + 强制登录鉴权</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
