import React from 'react';

export default function Page_Zhihu_ARES_Detail34() {
    // ----------------------
    // 1. Zoomed-In Architecture Node Data
    // ----------------------
    const phases = [
        {
            id: 'phase3',
            hubX: 400, hubY: 350,
            step: "Step 3. 语义打分因子逆向模块（重排阶段）",
            title: "反推重排偏好加权值",
            iconId: "activity",
            target: "反推 AI 重排算法的内容偏好加权值。",

            methods: [
                {
                    x: 200, y: 120,
                    iconId: 'layers',
                    name: "对照组扫描",
                    detail: "对“入选网页”与“未入选网页”进行全量内容抓取。"
                },
                {
                    x: 600, y: 120,
                    iconId: 'bar-chart',
                    name: "特征权重回归",
                    detail: "通过 NLP 算法分析入选网页的共同特征（如：Markdown 表格占比、特定行业词密度）。"
                }
            ],

            output: {
                label: "AI评分权重表",
                detail: "还原 AI 的评分权重表。例如：在当前品类下，拥有表格的网页被选中的概率是纯文本网页的 3.5 倍。"
            }
        },
        {
            id: 'phase4',
            hubX: 1200, hubY: 350,
            step: "Step 4. 提取锚点回溯模块（注入阶段）",
            title: "锁定信息抓取物理规则",
            iconId: "target",
            target: "锁定 AI 抓取信息的物理规则（从哪剪、剪多长）。",

            methods: [
                {
                    x: 1000, y: 120,
                    iconId: 'map-pin',
                    name: "坐标回溯",
                    detail: "将 AI 答案中的文本段落通过模糊匹配，定位到原始 HTML 中的物理坐标。"
                },
                {
                    x: 1400, y: 120,
                    iconId: 'git-commit',
                    name: "路径分析",
                    detail: "记录该切片在网页中的 DOM 路径（是 H2 下的首段，还是 <table> 里的单元格）。"
                }
            ],

            output: {
                label: "内容提取规则",
                detail: "制定内容布局的黄金切片标准。例如：识别出 AI 偏好提取长度在 300 字符以内、且紧跟在结论性标题后的文本块。"
            }
        }
    ];

    // ----------------------
    // 2. Exact Architecture SVG Render Library
    // ----------------------
    const getIcon = (id, strokeParams) => {
        const icons = {
            'activity': <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
            'layers': <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
            'bar-chart': <><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></>,
            'target': <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
            'map-pin': <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
            'git-commit': <><circle cx="12" cy="12" r="3" /><line x1="3" y1="12" x2="9" y2="12" /><line x1="15" y1="12" x2="21" y2="12" /></>,
        };
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeParams || "1.5"} strokeLinecap="round" strokeLinejoin="round" className="opacity-90 w-full h-full p-[6px]">
                {icons[id]}
            </svg>
        );
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden font-sans text-white">

            {/* Header mapped strictly to alignment rules */}
            <div className="relative z-20 w-full px-8 lg:px-16 pt-6 sm:pt-10 shrink-0 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-widest opacity-95">
                    GEO 对抗系统核心拆解
                </h1>
            </div>

            {/* Strict SVG-Based Neural Architecture Projection Canvas */}
            <div className="flex-1 w-full relative z-10 flex items-center justify-center min-h-[600px] overflow-hidden">
                <div className="relative w-full max-w-[1600px] aspect-[2] scale-[0.80] sm:scale-90 lg:scale-[0.98] origin-center translate-y-[4%]">

                    {/* SVG Connector Under-layer matching Architecture visually */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 800" preserveAspectRatio="none">
                        <defs>
                            <marker id="arrowHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.2)" />
                            </marker>
                        </defs>

                        {/* 1. Global Connecting Spine */}
                        <path d="M 400 350 L 1200 350" stroke="rgba(255,255,255,0.15)" strokeWidth="4" fill="none" markerEnd="url(#arrowHead)" />

                        {/* 2. Branch Connections for Phase 1 */}
                        {/* Curves UP to Methods */}
                        <path d={`M 400 350 C 400 230, 200 230, 200 120`} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                        <path d={`M 400 350 C 400 230, 600 230, 600 120`} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />

                        {/* 3. Branch Connections for Phase 2 */}
                        {/* Curves UP to Methods */}
                        <path d={`M 1200 350 C 1200 230, 1000 230, 1000 120`} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                        <path d={`M 1200 350 C 1200 230, 1400 230, 1400 120`} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
                    </svg>

                    {/* HTML Floating Nodes Projection Overlay */}
                    {phases.map((phase) => (
                        <React.Fragment key={phase.id}>

                            {/* ---------------- PRIMARY HUB NODE & STACKED CONTENT ---------------- */}
                            <div className="absolute z-20" style={{ left: `${(phase.hubX / 1600) * 100}%`, top: `${(phase.hubY / 800) * 100}%`, transform: 'translate(-50%, -50%)' }}>
                                {/* Big Heavy Primary Circle identical to architecture primary node style */}
                                <div className="w-[88px] h-[88px] bg-[#0c0c0c] rounded-full border-[2px] border-zinc-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center relative">
                                    <div className="w-10 h-10 text-white">
                                        {getIcon(phase.iconId, "2")}
                                    </div>

                                    {/* Detailed Text Hub projecting down centrally */}
                                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 flex flex-col w-[700px] items-center z-30 pt-[24px]">
                                        <span className="font-mono text-zinc-400 text-[19px] uppercase tracking-widest mb-1">{phase.step}</span>
                                        <span className="font-black text-[32px] xl:text-[34px] tracking-widest text-zinc-100 mb-6 whitespace-nowrap">{phase.title}</span>

                                        <div className="w-full flex gap-4 h-[190px]">
                                            {/* Target Information Left Card */}
                                            <div className="flex-1 p-[20px] bg-black/90 backdrop-blur-md border-[2px] border-zinc-700/60 rounded-[20px] shadow-2xl text-[18px] xl:text-[19px] text-zinc-300 font-medium leading-relaxed flex flex-col">
                                                <div className="text-zinc-200 font-bold mb-2 tracking-widest text-[19px]">【目的】</div>
                                                <span className="opacity-90">{phase.target}</span>
                                            </div>
                                            {/* Merged Output Information Right Card */}
                                            <div className="flex-1 p-[20px] bg-blue-900/15 backdrop-blur-md border-[2px] border-blue-500/70 rounded-[20px] shadow-[0_0_20px_rgba(59,130,246,0.15)] text-[18px] xl:text-[19px] text-blue-100 font-medium leading-relaxed relative flex flex-col overflow-hidden">
                                                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
                                                <div className="flex items-center gap-2 mb-2 relative z-10">
                                                    <span className="text-blue-400 font-bold tracking-widest text-[20px] xl:text-[21px]">【产出：{phase.output.label}】</span>
                                                </div>
                                                <span className="relative z-10 opacity-90">{phase.output.detail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ---------------- SECONDARY METHOD NODES (UP) ---------------- */}
                            {phase.methods.map((method, idx) => (
                                <div key={idx} className="absolute z-10" style={{ left: `${(method.x / 1600) * 100}%`, top: `${(method.y / 800) * 100}%`, transform: 'translate(-50%, -50%)' }}>
                                    <div className="flex flex-col border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[20px] p-5 w-[360px] h-[190px] xl:h-[200px] shadow-[0_10px_35px_rgba(0,0,0,0.9)] cursor-default transition-all duration-300 hover:border-zinc-500">
                                        <div className="flex items-center gap-4 mb-3">
                                            {/* Micro-node styling */}
                                            <div className="w-11 h-11 bg-black rounded-full border border-zinc-600 flex items-center justify-center shrink-0 text-zinc-300">
                                                {getIcon(method.iconId)}
                                            </div>
                                            <span className="font-bold text-[22px] xl:text-[24px] tracking-widest text-zinc-100">{method.name}</span>
                                        </div>
                                        <p className="text-[18px] xl:text-[20px] text-zinc-400 leading-relaxed font-medium">
                                            {method.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

        </div>
    );
}
