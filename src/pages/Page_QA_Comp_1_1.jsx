import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Comp_1_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-white mb-4">4、合规与安全</h1>
                <QABanner
                    index={1}
                    text="资质合规操作：经营资质、AI 监管合规性、优化手段合规性，严禁黑帽违规操作"
                    className="mb-4"
                />
                <p className="mb-3 text-[0.95rem] leading-relaxed text-zinc-400">
                    我司严守经营资质合规、AI 监管合规、优化手段合规三条底线，严禁任何黑帽手段，确保 GEO 业务长期、健康、可审计运营。
                </p>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（1）经营资质合规</p>
                <ul className="mb-3 text-[0.9rem] leading-relaxed list-disc pl-6 space-y-0.5 text-zinc-400">
                    <li>持有合法 营业执照 与 ICP 备案；</li>
                    <li>经营范围合法合规，不涉及任何禁止性业务；</li>
                    <li>财务、税务、社保等合规手续齐全，接受甲方对资质的审查与核验。</li>
                </ul>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（2）AI 监管合规</p>
                <table className="w-full border-collapse border border-zinc-700 mb-3 text-[0.8rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-1.5 text-left border-r border-zinc-700 w-1/3">法规 / 规范</th>
                            <th className="p-1.5 text-left">我司合规措施</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800">
                            <td className="p-1.5 border-r border-zinc-800 font-bold">《生成式人工智能服务管理暂行办法》</td>
                            <td className="p-1.5">不向 AI 平台输入违法违规内容；不诱导生成虚假信息；尊重大模型服务商的使用条款</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                            <td className="p-1.5 border-r border-zinc-800 font-bold">《互联网信息服务算法推荐管理规定》</td>
                            <td className="p-1.5">不利用算法漏洞操纵 AI 输出；不进行虚假流量、虚假评价等行为</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                            <td className="p-1.5 border-r border-zinc-800 font-bold">《个人信息保护法》</td>
                            <td className="p-1.5">业务全流程不采集 C 端个人信息，从源头规避风险</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                            <td className="p-1.5 border-r border-zinc-800 font-bold">《数据安全法》</td>
                            <td className="p-1.5">数据采集、存储、使用、传输全流程符合法规要求</td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                            <td className="p-1.5 border-r border-zinc-800 font-bold">《网络安全法》</td>
                            <td className="p-1.5">采集行为遵守频控、Robots 协议、平台服务条款，避免对目标平台造成负担</td>
                        </tr>
                        <tr>
                            <td className="p-1.5 border-r border-zinc-800 font-bold">知乎等平台社区公约 / 服务协议</td>
                            <td className="p-1.5">严格遵守内容平台的发布规范、UGC 真实性要求、商业内容标识规范</td>
                        </tr>
                    </tbody>
                </table>

                <p className="mb-1 text-[0.95rem] leading-relaxed">（3）优化手段合规（白帽 GEO）</p>
                <p className="text-[0.9rem] leading-relaxed text-zinc-400">
                    我司坚定走 "白帽 GEO" 路线，所有优化手段均建立在真实、合规、可持续的基础上，规范列表与上述 AI 监管执行动作相同。
                </p>
            </div>
        </div>
    );
}
