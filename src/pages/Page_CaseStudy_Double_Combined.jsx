import React from 'react';
import { Calendar, Package, ListFilter, ChevronDown, Crosshair } from 'lucide-react';
import SlideLayout from '../components/SlideLayout';

const FOTILE = {
  industry: '大家电行业',
  brand: '方太',
  brandId: 'fotile',
  product: '方太智能油烟机',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-3.png'],
  summary:
    '在品牌此前未系统布局「高端智能油烟机」AI 场景的情况下，项目帮助方太完成了在生成式 AI 中对厨房排烟、智能控烟核心问题的整体占领，并为后续在 AI 渠道中的持续流量获取打下了稳定基础。',
  ranking: {
    metric: 'Top1提及率',
    unit: '%',
    items: [
      { name: '方太', rank: 1, value: 61.8, self: true },
      { name: '老板', rank: 2, value: 18.4 },
      { name: '华帝', rank: 3, value: 9.7 },
      { name: '美的', rank: 4, value: 5.2 },
      { name: '海尔', rank: 5, value: 3.1 },
      { name: '其他', rank: 6, value: 1.8 },
    ],
  },
};

const SKYWORTH = {
  industry: '家电行业',
  brand: '创维',
  brandId: 'skyworth',
  logoSrc: '/images/client-home-skyworth.png',
  product: '创维电视',
  platforms: ['/ai-logos/ai-1.png', '/ai-logos/ai-2.png', '/ai-logos/ai-4.png', '/ai-logos/ai-5.png'],
  summary:
    '针对创维电视在 AI 检索端声量不足的问题，项目协助品牌快速切入主流大模型核心答复场景。创维在核心品类词下的提及率及推荐位次明显提升，竞品对比中占据首位。',
  ranking: {
    metric: '提及率',
    unit: '%',
    items: [
      { name: '创维', rank: 1, value: 76.0, self: true },
      { name: 'TCL', rank: 2, value: 61.4 },
      { name: '海信', rank: 3, value: 52.4 },
      { name: '长虹', rank: 4, value: 28.1 },
      { name: '雷鸟', rank: 5, value: 26.1 },
    ],
  },
};

const FOTILE_OVERVIEW = [
  { label: '提及率', value: '92.6%', before: '38.1%' },
  { label: 'Top 1 提及率', value: '61.8%', before: '12.4%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.5' },
];

const SKYWORTH_OVERVIEW = [
  { label: '提及率', value: '76.0%', before: '52.4%' },
  { label: 'Top 1 提及率', value: '25.0%', before: '18.7%' },
  { label: '竞品排名', value: 'NO.1', before: 'NO.3' },
];

function SectionTitle({ children, size = 22 }) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <span className="w-2.5 h-2.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)]" />
      <span className="font-black tracking-wider text-zinc-200 font-['MiSans']" style={{ fontSize: `${size}px` }}>
        {children}
      </span>
    </div>
  );
}

function FilterPill({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2.5 bg-white border border-[#E5E6EB] rounded-[10px] pl-3.5 pr-1.5 py-1.5 leading-none">
      <Icon size={16} className="text-[#4E5563] shrink-0" strokeWidth={2.2} />
      <span className="text-[15px] font-semibold text-[#1F2329]">{label}</span>
      <span className="flex items-center gap-1.5 bg-[#F2F3F5] rounded-[7px] px-2.5 py-1.5">
        <span className="text-[14px] font-semibold text-[#1F2329]">{value}</span>
        <ChevronDown size={14} className="text-[#8A9099]" strokeWidth={2.4} />
      </span>
    </div>
  );
}

/** 原版：整块白底总览面板（结论与截图混在一起） */
function OverviewPanel({ product, metrics }) {
  return (
    <div className="flex-1 bg-[#F7F8FA] rounded-[1rem] px-6 py-5 flex flex-col min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <span className="text-[21px] font-black text-[#141619] leading-none shrink-0">总览</span>
      <div className="flex items-center gap-2.5 mt-4 shrink-0">
        <FilterPill icon={Calendar} label="日期" value="最近30天" />
        <FilterPill icon={Package} label="平台" value="全部" />
        <FilterPill icon={ListFilter} label="词条" value="全部" />
        <div className="flex items-center gap-2 bg-[#F0F4FF] rounded-[10px] px-3.5 py-2.5 leading-none">
          <Crosshair size={16} className="text-[#004CE5] shrink-0" strokeWidth={2.2} />
          <span className="text-[15px] font-bold text-[#004CE5]">目标产品</span>
          <span className="w-px h-[14px] bg-[#C9D4EE]" />
          <span className="text-[15px] font-bold text-[#1F2329]">{product}</span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-5 mt-5 min-h-[128px] items-stretch">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="h-full bg-white border border-[#E9EAEE] rounded-[14px] px-6 py-5 flex flex-col justify-between min-h-[128px] min-w-0 shadow-[0_2px_8px_rgba(31,35,41,0.04)]"
          >
            <span className="text-[18px] font-bold text-[#1F2329] leading-none flex items-center gap-1.5 whitespace-nowrap shrink-0">
              {m.label}
              <span className="w-[16px] h-[16px] rounded-full border-[1.5px] border-[#B4B9C2] text-[#B4B9C2] text-[10px] font-bold flex items-center justify-center leading-none">?</span>
            </span>
            <span className="text-[46px] font-black text-[#141619] leading-none tracking-tight shrink-0">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DoubleColumn({ data, overview }) {
  return (
    <div className="flex-1 bg-[#101010] border border-white/10 rounded-[1.5rem] flex flex-col overflow-hidden relative shadow-[-10px_0_30px_rgba(0,0,0,0.2)] p-8 sm:p-10 group hover:border-white/20 transition-all duration-500">
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#004CE5]/5 blur-[80px] -right-24 -top-24 pointer-events-none" />

      <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6 shrink-0">
        <div className="flex flex-col gap-2">
          <span className="inline-block text-[20px] font-bold tracking-widest text-[#004CE5] bg-[#004CE5]/10 px-4 py-2 rounded-full border border-[#004CE5]/20 max-w-fit font-sans leading-none -mt-4 mb-4">
            {data.industry}
          </span>
          <div className="w-[240px] h-[90px] flex items-center justify-start mt-1">
            <img
              src={`/cases/brand-logos/logo-${data.brandId}.png`}
              alt={`${data.brand} Logo`}
              className="max-w-full max-h-full object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-start ml-6 mr-auto pl-8 border-l border-white/5 pt-6">
          <span className="text-[15px] text-zinc-500 font-semibold tracking-widest uppercase font-sans">优化平台</span>
          <div className="flex items-center gap-3 mt-1.5">
            {data.platforms.map((logo, idx) => (
              <img key={idx} src={logo} alt="platform" className="w-auto h-11 object-contain brightness-95" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 mb-6 min-h-0">
        <SectionTitle size={24}>优化数据指标</SectionTitle>
        <OverviewPanel product={data.product} metrics={overview} />
      </div>

      <div className="shrink-0 flex flex-col justify-end min-h-[192px]">
        <div className="mb-4">
          <SectionTitle size={24}>项目背景与总结</SectionTitle>
        </div>
        <div className="flex-1 flex flex-col justify-start">
          {Array.isArray(data.summary) ? (
            <div className="flex flex-col gap-2">
              {data.summary.map((line, i) => (
                <p key={i} className="text-zinc-300 leading-relaxed text-[22px] font-medium text-justify">
                  {line}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-zinc-300 leading-relaxed text-[22px] font-medium h-auto text-justify">
              {data.summary}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/** 变体 B：结论指标区，仅展示优化后结果 */
function ConclusionMetrics({ metrics }) {
  return (
    <div className="w-full min-h-[198px] grid grid-cols-3 gap-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="relative min-h-[198px] rounded-[1.25rem] border border-white/[0.06] bg-[#0A0A0A] px-6 py-7 flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-[#004CE5]/12 blur-[48px] pointer-events-none" />
          <div className="relative z-10 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.9)] shrink-0" />
            <span className="text-[18px] font-bold text-white font-['MiSans'] tracking-wide leading-none">
              {m.label}
            </span>
          </div>
          <span className="relative z-10 text-[56px] font-black text-white font-['Montserrat'] leading-none tracking-tight tabular-nums">
            {m.value}
          </span>
        </div>
      ))}
    </div>
  );
}

/** 优化后竞品排名柱状图：按真实占比高度，目标品牌白柱高亮 */
function RankingBarChart({ ranking, brandId = 'rank' }) {
  const items = ranking?.items || [];
  const metric = ranking?.metric || '份额';
  const unit = ranking?.unit || '%';

  const wrapRef = React.useRef(null);
  const H = 236;
  const [W, setW] = React.useState(640);

  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const sync = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setW(Math.max(320, Math.round((width / height) * H)));
      }
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pad = { t: 36, r: 4, b: 42 };
  const plotL = 36;
  const innerW = W - plotL - pad.r;
  const innerH = H - pad.t - pad.b;
  const n = Math.max(items.length, 1);
  const slotW = innerW / n;
  const barW = Math.min(52, slotW * 0.48);
  const startX = plotL + (slotW - barW) / 2;

  const maxVal = Math.max(...items.map((d) => d.value), 1) * 1.18;
  const yAt = (v) => pad.t + (1 - v / maxVal) * innerH;
  const baseY = pad.t + innerH;
  const selfGrad = `${brandId}-self`;
  const peerGrad = `${brandId}-peer`;
  const gridVals = [0, 0.25, 0.5, 0.75, 1].map((t) => maxVal * t);

  return (
    <div className="h-[300px] shrink-0 rounded-2xl overflow-hidden border border-white/[0.07] bg-[#070707] flex flex-col">
      <div className="flex items-end justify-between px-5 pt-3.5 pb-1 shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="text-[15px] text-zinc-200 font-['MiSans'] font-semibold tracking-wide">
            竞品排名 · 优化后
          </span>
          <span className="text-[13px] text-white font-['MiSans']">
            {metric}
          </span>
        </div>
        <div className="flex items-center gap-3.5 text-[12px] font-['MiSans'] text-white">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-[2px] bg-white" />
            目标品牌
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-[2px] bg-white/25" />
            竞品
          </span>
        </div>
      </div>

      <div ref={wrapRef} className="flex-1 min-h-0 px-5 pb-1.5">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id={selfGrad} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4D4D8" stopOpacity="0.92" />
            </linearGradient>
            <linearGradient id={peerGrad} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {gridVals.map((v, i) => {
            const y = yAt(v);
            return (
              <g key={i}>
                <line
                  x1={plotL}
                  x2={W - pad.r}
                  y1={y}
                  y2={y}
                  stroke="rgba(255,255,255,0.045)"
                  strokeWidth="1"
                />
                <text
                  x={0}
                  y={y + 3.5}
                  textAnchor="start"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontFamily="Montserrat, sans-serif"
                >
                  {Math.round(v)}{unit}
                </text>
              </g>
            );
          })}

          <line
            x1={plotL}
            x2={W - pad.r}
            y1={baseY}
            y2={baseY}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />

          {items.map((item, i) => {
            const x = startX + i * slotW;
            const y = yAt(item.value);
            const h = Math.max(baseY - y, 2);
            const isSelf = !!item.self;
            const valueLabel = `${item.value.toFixed(1)}${unit}`;

            return (
              <g key={item.name}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={h}
                  rx="0"
                  fill={isSelf ? `url(#${selfGrad})` : `url(#${peerGrad})`}
                />

                <text
                  x={x + barW / 2}
                  y={y - 8}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize={isSelf ? 15 : 13}
                  fontWeight="700"
                  fontFamily="Montserrat, sans-serif"
                >
                  {valueLabel}
                </text>

                <text
                  x={x + barW / 2}
                  y={H - 14}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize={isSelf ? 14 : 13}
                  fontWeight={isSelf ? 700 : 500}
                  fontFamily="MiSans, sans-serif"
                >
                  {item.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/** 变体 B 单列布局（供后续案例页复用） */
export function DoubleColumnB({ data, overview }) {
  return (
    <div className="flex-1 min-w-0 bg-[#101010] border border-white/10 rounded-[1.5rem] flex flex-col overflow-hidden relative px-8 pt-8 pb-8 gap-4 group hover:border-white/20 transition-all duration-500">
      <div className="absolute w-[280px] h-[280px] rounded-full bg-[#004CE5]/5 blur-[80px] -right-20 -top-20 pointer-events-none" />

      <div className="flex items-start justify-between gap-4 shrink-0 h-[52px]">
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 text-[15px] font-bold tracking-wide text-white bg-[#004CE5] px-3 py-1.5 rounded-full leading-none">
            {data.industry}
          </span>
          <div className="h-[36px] max-w-[180px] flex items-center">
            <img
              src={data.logoSrc || `/cases/brand-logos/logo-${data.brandId}.png`}
              alt={`${data.brand} Logo`}
              className="max-w-full max-h-full object-contain brightness-0 invert opacity-85"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span className="hidden text-[26px] font-black text-white font-['MiSans'] leading-none">
              {data.brand}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5 shrink-0 -translate-y-[16px]">
          <span className="text-[16px] text-zinc-400 font-['MiSans']">
            优化平台 · {data.platforms.length}个
          </span>
          <div className="flex items-center gap-2 h-8">
            {data.platforms.map((logo, idx) => (
              <img key={idx} src={logo} alt="platform" className="h-8 w-auto object-contain" />
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 w-full">
        <ConclusionMetrics metrics={overview} />
      </div>

      <div className="w-full h-px bg-white/10 shrink-0" />

      <div className="w-full flex flex-col gap-4 flex-1 min-h-0">
        <RankingBarChart ranking={data.ranking} brandId={data.brandId} />
        <p className="text-white text-[22px] leading-[34px] font-['MiSans'] text-justify shrink-0">
          {Array.isArray(data.summary) ? data.summary.join('') : data.summary}
        </p>
      </div>
    </div>
  );
}

/** 变体 A：原版 */
export default function Page_CaseStudy_Double_Combined() {
  return (
    <SlideLayout title="服务案例">
      <div className="w-full h-full flex flex-col justify-start relative z-10 select-none">
        <div className="w-full flex-grow flex gap-6 items-stretch min-h-0 mb-0">
          <DoubleColumn data={FOTILE} overview={FOTILE_OVERVIEW} />
          <DoubleColumn data={SKYWORTH} overview={SKYWORTH_OVERVIEW} />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_CaseStudy_Double_Combined.hideHeader = true;

/** 变体 B：先结论后举证 */
export function Page_CaseStudy_Double_Combined_B() {
  return (
    <SlideLayout title="服务案例">
      <div className="w-full h-full flex flex-col justify-start relative z-10 select-none">
        <div className="w-full flex-grow flex gap-6 items-stretch min-h-0 mb-0">
          <DoubleColumnB data={FOTILE} overview={FOTILE_OVERVIEW} />
          <DoubleColumnB data={SKYWORTH} overview={SKYWORTH_OVERVIEW} />
        </div>
      </div>
    </SlideLayout>
  );
}

Page_CaseStudy_Double_Combined_B.hideHeader = true;
