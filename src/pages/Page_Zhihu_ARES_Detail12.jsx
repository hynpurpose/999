import React from 'react';

export default function Page_Zhihu_ARES_Detail12() {
    // ----------------------
    // 1. Zoomed-In Architecture Node Data
    // ----------------------
    const phases = [
        {
            id: 'phase1',
            hubX: 400, hubY: 350,
            step: "Step 1. 查询扩展",
            title: "意图拆解监测模块",
            iconId: "search",
            target: "识别用户极其模糊的原始输入，与 AI 后台最终拆解出的执行指令之间的「语义增量」。",

            methods: [
                {
                    x: 200, y: 120,
                    iconId: 'terminal',
                    name: "日志探测 API",
                    detail: "通过底层接口反向抓取截获 AI 后端的 search_queries 元数据序列及其行为轨迹。"
                },
                {
                    x: 600, y: 120,
                    iconId: 'command',
                    name: "提示词劫持验证",
                    detail: "在测试提问体中强力注入限定思考指令，诱因逼迫其先行脱出分阶段提问规划。"
                }
            ],

            output: {
                label: "意图规律模板",
                detail: "通过多重解构，绝对定型该类目下 AI 必定会自动补全的核⼼维度（如：“价格体系”、“极速响应度”等）。"
            }
        },
        {
            id: 'phase2',
            hubX: 1200, hubY: 350,
            step: "Step 2. 初始检索",
            title: "候选池镜像审计模块",
            iconId: "database",
            target: "精准量化各大主流 AI 底层爬虫的站点数据信任边界与入库的绝对门槛。",

            methods: [
                {
                    x: 1000, y: 120,
                    iconId: 'refresh',
                    name: "高并发截留采样",
                    detail: "在 AI 搜寻极短毫秒内，调动底层搜索引擎 API 同频固化获取该词条下前 Top100 网页镜像池。"
                },
                {
                    x: 1400, y: 120,
                    iconId: 'git-merge',
                    name: "绝对交集比照法",
                    detail: "将“引擎抓出的 100 名原材料”与被 AI 最终确认引用的源链进行绝对映射穿透交叉比对。"
                }
            ],

            output: {
                label: "过滤权重底牌线",
                detail: "探测定位权重基准。看清 AI 是只死脑筋选用全球 Top 20，还是存在破格录取低排位小站的机制漏洞。"
            }
        }
    ];

    // ----------------------
    // 2. Exact Architecture SVG Render Library
    // ----------------------
    const getIcon = (id, strokeParams) => {
        const icons = {
            'search': <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
            'database': <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>,
            'terminal': <><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></>,
            'command': <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />,
            'refresh': <><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></>,
            'git-merge': <><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 21V9a9 9 0 0 0 9 9" /></>,
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
                                        <span className="font-black text-[32px] xl:text-[34px] tracking-widest text-zinc-100 mb-6">{phase.title}</span>

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
