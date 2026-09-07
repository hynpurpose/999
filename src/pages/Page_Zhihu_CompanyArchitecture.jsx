import React from 'react';

export default function Page_Zhihu_CompanyArchitecture() {
    // 基于指定逻辑层级定义的树状数据拓扑
    const orgTree = [
        {
            member: { name: '欧阳', role: '算法架构师' },
            children: [
                {
                    member: { name: '付海青', role: 'Agent开发专家' },
                    children: [
                        { member: { name: '王美晓', role: '全栈工程师' }, children: [] }
                    ]
                },
                {
                    member: { name: '沈龙生', role: '内容与数据洞察' },
                    children: [
                        { member: { name: '覃佳妮', role: '数据归因分析师' }, children: [] }
                    ]
                }
            ]
        },
        {
            member: { name: '任玉坤', role: '市场营销' },
            children: [
                { member: { name: '何玛丽', role: '运营服务' }, children: [] }
            ]
        }
    ];

    // 递归组件：确保所有人使用完全一致的“容器”
    const renderTreeNode = (node, isRoot = false) => {
        return (
            <div className="flex flex-col items-center relative w-full">
                {/* 连向该节点的竖线 */}
                {!isRoot && (
                    <div className="w-[2px] h-8 xl:h-12 bg-zinc-600"></div>
                )}

                {/* 统一人员卡片容器 (不区分级别，所有人都遵循这个样式) */}
                <div className="relative z-10 w-full max-w-[340px] px-2 flex justify-center">
                    <div className="group relative flex w-full items-center bg-[#111111]/90 backdrop-blur-3xl border-2 border-dashed border-zinc-600/60 rounded-full p-2 pr-4 xl:p-3 xl:pr-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#1a1a1a] hover:border-zinc-400 hover:shadow-[0_15px_50px_rgba(255,255,255,0.05)] cursor-default">
                        {/* 左侧头像区域 */}
                        <div className="w-14 h-14 xl:w-[60px] xl:h-[60px] rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center shrink-0 mr-3 xl:mr-4 relative overflow-hidden group-hover:bg-zinc-700 transition-colors duration-500">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-zinc-400">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        {/* 右侧文本区域 */}
                        <div className="flex flex-col flex-1 justify-center py-1 overflow-hidden">
                            <h3 className="text-[17px] xl:text-[19px] font-bold text-zinc-100 leading-snug break-words">
                                {node.member.role}
                            </h3>
                            <p className="text-[14px] xl:text-[15px] text-zinc-400 font-medium mt-1">
                                {node.member.name}
                            </p>
                        </div>
                    </div>
                </div>

                {/* 渲染下级子节点 */}
                {node.children && node.children.length > 0 && (
                    <div className="flex flex-col items-center w-full relative">
                        {/* 该节点向下引出的竖线 */}
                        <div className="w-[2px] h-8 xl:h-12 bg-zinc-600"></div>

                        {node.children.length === 1 ? (
                            // 单重下属：不绘制横向分叉直通
                            renderTreeNode(node.children[0], false)
                        ) : (
                            // 多重下属：横向结构树分叉
                            <div className="flex w-full justify-center relative">
                                {node.children.map((child, idx, arr) => (
                                    <div key={idx} className="flex-1 flex flex-col items-center relative px-2 xl:px-4">
                                        <div className={`absolute top-0 h-[2px] bg-zinc-600
                                            ${idx === 0 ? 'w-1/2 right-0' : ''}
                                            ${idx === arr.length - 1 ? 'w-1/2 left-0' : ''}
                                            ${idx !== 0 && idx !== arr.length - 1 ? 'w-full' : ''}
                                        `}></div>

                                        {/* 子节点自带属于自己的顶部下垂竖线和卡片 */}
                                        {renderTreeNode(child, false)}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="w-full h-full bg-black relative overflow-hidden font-sans flex flex-col text-white">

            {/* 背景底面 */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>

            {/* 内容区 - 统一树形视图 */}
            <div className="w-full h-full overflow-y-auto pb-24 flex flex-col">

                {/* 页面主标题作为图谱根系起点 */}
                <div className="relative z-20 w-full pt-12 xl:pt-16 shrink-0 flex flex-col items-center">
                    <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-2xl px-10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                        <h1 className="text-[30px] xl:text-[34px] font-black text-white tracking-widest leading-tight">
                            公司架构
                        </h1>
                    </div>
                    {/* H1 往下的长干线 */}
                    <div className="w-[2px] h-8 xl:h-12 bg-zinc-600 relative z-10"></div>
                </div>

                {/* 递归层级树主包裹 */}
                <div className="relative z-10 flex-1 w-full px-4 lg:px-8 mt-0 flex justify-center">
                    <div className="w-full max-w-[1400px] flex justify-center relative">
                        {orgTree.map((topNode, idx, arr) => (
                            <div key={idx} className="flex-1 flex flex-col items-center relative px-2 xl:px-6">
                                {/* 第一根横向分叉：算法架构师 和 市场营销 是首级的，平级连接 */}
                                <div className={`absolute top-0 h-[2px] bg-zinc-600
                                    ${idx === 0 ? 'w-1/2 right-0' : ''}
                                    ${idx === arr.length - 1 ? 'w-1/2 left-0' : ''}
                                    ${idx !== 0 && idx !== arr.length - 1 ? 'w-full' : ''}
                                `}></div>

                                {renderTreeNode(topNode, false)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
