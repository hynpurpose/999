import React from 'react';

export default function Page_Zhihu_ARES_Architecture() {
    // ----------------------
    // 1. Core Data Models (Progressive Pipeline Layout)
    // ----------------------
    const nodes = [
        // Primary Phases (Horizontal Spine at Y=400)
        { id: 'p1', x: 200, y: 400, label: '意图拆解监测', desc: 'Step 1. 查询扩展', type: 'primary', iconId: 'search' },
        { id: 'p2', x: 600, y: 400, label: '候选池镜像审计', desc: 'Step 2. 初始检索', type: 'primary', iconId: 'database' },
        { id: 'p3', x: 1000, y: 400, label: '语义重排逆推', desc: 'Step 3. 交叉打分', type: 'primary', iconId: 'bar-chart' },
        { id: 'p4', x: 1400, y: 400, label: '提取锚点回溯', desc: 'Step 4. 知识注入', type: 'primary', iconId: 'target' },

        // Secondary / Tools for P1 (Top Layer)
        { id: 's1a', x: 100, y: 150, label: '日志探测', desc: 'API 查询元数据', type: 'secondary', iconId: 'terminal' },
        { id: 's1b', x: 300, y: 150, label: '提示词劫持', desc: '强制脱出执行计划', type: 'secondary', iconId: 'command' },
        // Output for P1 (Bottom Layer)
        { id: 's1c', x: 200, y: 650, label: '意图维度模板', desc: '定型必选内容标准', type: 'output', iconId: 'star' },

        // Secondary / Tools for P2
        { id: 's2a', x: 500, y: 150, label: '并发同步采样', desc: '主引擎 Top100 留底', type: 'secondary', iconId: 'refresh' },
        { id: 's2b', x: 700, y: 150, label: '交集比照映射', desc: '比对源路入围切片', type: 'secondary', iconId: 'git-merge' },
        { id: 's2c', x: 600, y: 650, label: '站点过滤权重线', desc: '测出最低准入破格门槛', type: 'output', iconId: 'filter' },

        // Secondary / Tools for P3
        { id: 's3a', x: 900, y: 150, label: '对照组全量对比', desc: '淘汰与入选明细扫描', type: 'secondary', iconId: 'layers' },
        { id: 's3b', x: 1100, y: 150, label: '特征权重归因', desc: 'NLP 解析特征得分比例', type: 'secondary', iconId: 'hash' },
        { id: 's3c', x: 1000, y: 650, label: '算法评分权重表', desc: '破解核心要素加分倍率', type: 'output', iconId: 'award' },

        // Secondary / Tools for P4
        { id: 's4a', x: 1300, y: 150, label: '坐标级反向溯源', desc: '通过分片回溯至源码', type: 'secondary', iconId: 'map-pin' },
        { id: 's4b', x: 1500, y: 150, label: 'DOM逻辑追踪', desc: '逆推切片的 DOM 限定', type: 'secondary', iconId: 'eye' },
        { id: 's4c', x: 1400, y: 650, label: '黄金切片站位论', desc: '梳理极易被吸收的高权占位', type: 'output', iconId: 'sun' },
    ];

    const links = [
        // Main Sequential Spine
        { from: 'p1', to: 'p2', spine: true },
        { from: 'p2', to: 'p3', spine: true },
        { from: 'p3', to: 'p4', spine: true },

        // Branching UP to tools
        { from: 'p1', to: 's1a', upCurve: true },
        { from: 'p1', to: 's1b', upCurve: true },
        { from: 'p2', to: 's2a', upCurve: true },
        { from: 'p2', to: 's2b', upCurve: true },
        { from: 'p3', to: 's3a', upCurve: true },
        { from: 'p3', to: 's3b', upCurve: true },
        { from: 'p4', to: 's4a', upCurve: true },
        { from: 'p4', to: 's4b', upCurve: true },

        // Branching DOWN to outputs
        { from: 'p1', to: 's1c', dashed: true, color: 'rgba(59, 130, 246, 0.6)' },
        { from: 'p2', to: 's2c', dashed: true, color: 'rgba(59, 130, 246, 0.6)' },
        { from: 'p3', to: 's3c', dashed: true, color: 'rgba(59, 130, 246, 0.6)' },
        { from: 'p4', to: 's4c', dashed: true, color: 'rgba(59, 130, 246, 0.6)' },
    ];

    // ----------------------
    // 2. SVG Icon Library
    // ----------------------
    const getIcon = (id) => {
        const icons = {
            'search': <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
            'database': <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>,
            'bar-chart': <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>,
            'target': <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
            'terminal': <><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></>,
            'command': <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />,
            'star': <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
            'refresh': <><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></>,
            'git-merge': <><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 21V9a9 9 0 0 0 9 9" /></>,
            'filter': <><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></>,
            'layers': <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 12 12 17 22 12" /><polyline points="2 17 12 22 22 17" /></>,
            'hash': <><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" /></>,
            'award': <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>,
            'map-pin': <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
            'eye': <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
            'sun': <><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></>
        };
        return (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                {icons[id]}
            </svg>
        );
    };

    // ----------------------
    // 3. Render Helpers
    // ----------------------
    const nodeMap = nodes.reduce((acc, n) => ({ ...acc, [n.id]: n }), {});

    const renderNodeStyle = (type) => {
        if (type === 'primary') return "w-[88px] h-[88px] bg-[#0c0c0c] rounded-full border-[2px] border-zinc-500 text-white hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.05)]";
        if (type === 'secondary') return "w-[68px] h-[68px] bg-black rounded-full border border-zinc-700 text-zinc-400 hover:border-white hover:text-white";
        // output (The only element with blue accent)
        return "w-[72px] h-[72px] bg-black rounded-full border-[2.5px] border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] border-dashed";
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden font-sans">
            {/* Header Layout aligned with Page_Zhihu_AIInternetData */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-6 sm:pt-10 shrink-0 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-widest mb-4 opacity-95">
                    GEO 对抗系统架构说明
                </h1>
            </div>

            {/* Pipeline Architecture Canvas */}
            <div className="flex-1 w-full relative z-10 flex items-center justify-center min-h-[600px] overflow-hidden">
                {/* 16:8 aspect ratio ensures extreme responsive breadth so text never bumps */}
                <div className="relative w-full max-w-[1600px] aspect-[2] scale-[0.80] sm:scale-95 lg:scale-100">

                    {/* SVG Connector Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 800" preserveAspectRatio="none">
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.25)" />
                            </marker>
                        </defs>
                        {links.map((link, idx) => {
                            const from = nodeMap[link.from];
                            const to = nodeMap[link.to];
                            let pathData = '';

                            if (link.spine) {
                                pathData = `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
                            } else if (link.upCurve) {
                                // Branching curve up
                                const cx = from.x;
                                const cy = (from.y + to.y) / 2;
                                pathData = `M ${from.x} ${from.y} C ${cx} ${cy}, ${to.x} ${cy}, ${to.x} ${to.y}`;
                            } else {
                                // Straight downward
                                pathData = `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
                            }

                            return (
                                <path
                                    key={idx}
                                    d={pathData}
                                    stroke={link.color || "rgba(255,255,255,0.2"}
                                    strokeWidth={link.spine ? "4" : "1.5"}
                                    fill="none"
                                    strokeDasharray={link.dashed ? "6, 6" : "none"}
                                    markerEnd={link.spine ? "url(#arrow)" : "none"}
                                />
                            );
                        })}
                    </svg>

                    {/* HTML Nodes Mapping */}
                    {nodes.map(node => {
                        // Intelligent Layout Rules: Never overlap curves
                        let labelPosClass = "";
                        if (node.type === 'secondary') {
                            // Top row tools: text placed directly above the nodes
                            labelPosClass = "absolute bottom-[100%] mb-4";
                        } else if (node.type === 'primary') {
                            // Mid pipeline steps: text placed directly below, slicing the line to output elegantly with a solid backdrop
                            labelPosClass = "absolute top-[100%] mt-4 bg-[#0a0a0a]/90 backdrop-blur-md px-4 py-2 border border-white/5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.8)]";
                        } else if (node.type === 'output') {
                            // Bottom row outputs: text placed directly below
                            labelPosClass = "absolute top-[100%] mt-5";
                        }

                        return (
                            <div
                                key={node.id}
                                className="absolute flex flex-col items-center justify-center cursor-default"
                                style={{
                                    left: `${(node.x / 1600) * 100}%`,
                                    top: `${(node.y / 800) * 100}%`,
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: node.type === 'primary' ? 20 : 10
                                }}
                            >
                                {/* Visual Circle Node */}
                                <div className={`${renderNodeStyle(node.type)} flex items-center justify-center relative z-10`}>
                                    {getIcon(node.iconId)}
                                </div>

                                {/* Structural Text Labels */}
                                <div className={`flex flex-col items-center text-center w-max z-20 ${labelPosClass}`}>
                                    <span className={`font-bold whitespace-nowrap text-[22px] xl:text-[24px] tracking-widest ${node.type === 'output' ? 'text-blue-200' : 'text-zinc-100'}`}>
                                        {node.label}
                                    </span>
                                    {node.type === 'primary' && node.desc && (
                                        <span className="mt-1.5 whitespace-nowrap text-[18px] xl:text-[19px] text-zinc-400 font-mono tracking-widest">
                                            {node.desc}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
