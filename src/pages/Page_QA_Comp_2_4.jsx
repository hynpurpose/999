import React from 'react';

export default function Page_QA_Comp_2_4() {
    const cards = [
        {
            title: '存储加密与隔离',
            items: [
                '环境物理隔离：测试库/预发库/生产库 实例切换，杜绝污染',
                '多租户隔离：业务表以 project_id 为隔离键，应用层强制注入',
                '凭据/密钥不入代码库：纳入 .gitignore，部署经 Vault 脱模下发',
                '磁盘与备份加密：云盘加密 + 备份 AES-256 加密落盘',
            ],
        },
        {
            title: '访问控制与最小权限',
            items: [
                '数据库账号最小化：业务账号仅授予 DML，禁用 DROP 等高危操作',
                '服务器访问：公网零暴露，仅开放 SSH 密钥登录内网跳转',
                '客户数据访问：遵循"知必所需"，原始数据导出走工单与双人复核',
            ],
        },
        {
            title: '数据防泄露（DLP）与防篡改',
            items: [
                '任务全留痕：每一次流转写入日志，可追溯可回溯，杜绝黑箱',
                '状态机与乐观锁：核心表防重复入库与并发污写',
                '异常实时告警：高压预兆即刻邮件分发至总负责人',
            ],
        },
    ];

    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <p className="mb-3 text-[1rem] leading-relaxed">（4）系统安全防护：存储加密、访问控制、数据防泄露三重防线</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    {cards.map((c, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-950/60 p-4 shadow-[0_0_24px_rgba(0,76,229,0.05)] hover:border-[#004CE5]/40 transition-colors"
                        >
                            <div className="mb-2.5 pb-2 border-b border-zinc-800">
                                <span className="text-white font-semibold text-[0.95rem]">{c.title}</span>
                            </div>
                            <ul className="text-[0.78rem] leading-relaxed list-disc pl-5 space-y-1 text-zinc-400">
                                {c.items.map((it, j) => <li key={j}>{it}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（5）制度与合规承诺</p>
                <ul className="text-[0.8rem] leading-relaxed list-disc pl-5 space-y-1 text-zinc-400 mb-3">
                    <li><strong>法律资质：</strong>持有合法营业执照与 ICP 备案，不涉及任何禁止性暗面产业。</li>
                    <li><strong>保密协议（NDA）：</strong>签署规范双向保密；对内严签全员连带责任协议；对外包云厂商全签署背靠背保密条款。</li>
                    <li><strong>核心履约金线：</strong>客户始发数据坚决不出境，绝不跨越租户投喂其他模型池，兜底担责并迎接合法驻点审计。</li>
                </ul>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（6）应急响应</p>
                <ul className="text-[0.8rem] leading-relaxed list-disc pl-5 space-y-1 text-zinc-400 mb-4">
                    <li><strong>事件分级网络：</strong>严格依照预规案划清 P0–P3 灾难响应界限等级。</li>
                    <li><strong>第一性止损线：</strong>阻断流血通道隔离集群先于故障究责排查，最快阈值内合法知会客户不设遮掩。</li>
                    <li><strong>闭合归因溯源：</strong>出具完档无损的事件复盘与流水分段切片报告交办。</li>
                </ul>

                <p className="mb-1.5 text-[0.95rem] leading-relaxed">（7）数据生命周期管理</p>
                <table className="w-full border-collapse border border-zinc-700 text-[0.8rem]">
                    <thead>
                        <tr className="bg-zinc-900 border-b border-zinc-700">
                            <th className="p-1.5 text-left border-r border-zinc-700 w-[15%]">阶段</th>
                            <th className="p-1.5 text-left">安全措施</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">① 接入前</td><td className="p-1.5 text-zinc-400">签署保密协议（NDA），书面约定数据范围、用途、保留期限与处置方式；完成标记分级。</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">② 采集中</td><td className="p-1.5 text-zinc-400">任务通过状态机流式统一调度，每一步操作写入审计日志，全程可追溯。</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">③ 使用中</td><td className="p-1.5 text-zinc-400">按 project_id 多租户隔离，中间表作业完成后按时归档。</td></tr>
                        <tr className="border-b border-zinc-800"><td className="p-1.5 border-r border-zinc-800 font-bold">④ 归档</td><td className="p-1.5 text-zinc-400">MySQL 增量备份支持 PITR；备份文件加密访问强需双人验证复查。</td></tr>
                        <tr><td className="p-1.5 border-r border-zinc-800 font-bold">⑤ 合作终止处置</td><td className="p-1.5 text-zinc-400">定向返还客户端导出数据、或入死库隔离封存、或作不可逆的匿名化处理彻底归零隐私。</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
