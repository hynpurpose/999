import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_HumanAiRatioApproach() {
  const cols = 10;
  const rows = 10;
  const cellSize = 70; // enlarged so grid height is 700px, touching top and bottom of content area
  const gridWidth = cols * cellSize; // 700px
  const gridHeight = rows * cellSize; // 700px

  // Generate 100 cells for the 70% Human + 30% AI visualization
  const cells = [];

  // Center for Teal (Human) gradient (columns 0 to 6)
  const cxTeal = 3;
  const cyTeal = 4.5;
  const maxDTeal = Math.sqrt(cxTeal * cxTeal + cyTeal * cyTeal); // 5.4
  const colorCenterTeal = [13, 148, 136]; // Teal 600
  const colorEdgeTeal = [12, 45, 43];     // Dark slate teal

  // Center for Blue (AI) gradient (columns 7 to 9)
  const cxBlue = 8.5;
  const cyBlue = 4.5;
  const maxDBlue = 4.5;
  const colorCenterBlue = [59, 130, 246]; // Blue 500
  const colorEdgeBlue = [24, 38, 85];      // Dark slate blue

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * cellSize;
      const y = r * cellSize;

      let fill = '';
      let rx = 35; // Center cells are round circles (cellSize 70 / 2)

      if (c >= 7) {
        // Rightmost 3 columns (30% of cells) are Blue gradient representing "30% AI"
        const dc = Math.sqrt(Math.pow(c - cxBlue, 2) + Math.pow(r - cyBlue, 2));
        const factor = Math.min(dc / maxDBlue, 1.0);

        rx = 35 - 29 * Math.pow(factor, 0.8);

        const red = Math.round(colorCenterBlue[0] + factor * (colorEdgeBlue[0] - colorCenterBlue[0]));
        const green = Math.round(colorCenterBlue[1] + factor * (colorEdgeBlue[1] - colorCenterBlue[1]));
        const blue = Math.round(colorCenterBlue[2] + factor * (colorEdgeBlue[2] - colorCenterBlue[2]));
        fill = `rgb(${red}, ${green}, ${blue})`;
      } else {
        // Leftmost 7 columns (70% of cells) are Teal gradient representing "70% Human"
        const dc = Math.sqrt(Math.pow(c - cxTeal, 2) + Math.pow(r - cyTeal, 2));
        const factor = Math.min(dc / maxDTeal, 1.0);

        rx = 35 - 29 * Math.pow(factor, 0.8);

        const red = Math.round(colorCenterTeal[0] + factor * (colorEdgeTeal[0] - colorCenterTeal[0]));
        const green = Math.round(colorCenterTeal[1] + factor * (colorEdgeTeal[1] - colorCenterTeal[1]));
        const blue = Math.round(colorCenterTeal[2] + factor * (colorEdgeTeal[2] - colorCenterTeal[2]));
        fill = `rgb(${red}, ${green}, ${blue})`;
      }

      cells.push({
        id: `${r}-${c}`,
        x,
        y,
        rx,
        fill
      });
    }
  }

  // Y-coordinates of connecting lines (centered vertically inside rows)
  // Line 1: connects row 3 (index 3) center: 3 * 70 + 35 = 245px
  // Line 2: connects row 7 (index 7) center: 7 * 70 + 35 = 525px
  const line1Y = 245;
  const line2Y = 525;

  return (
    <SlideLayout title="我们的策略">
      {/* ── 主排版容器 (高度拉伸至 705px，底部抵满 content bottom) ── */}
      <div
        className="absolute w-[1840px] select-none animate-fadeIn"
        style={{ top: '90px', height: '705px' }}
      >

        {/* ==================== Left Column: 10x10 Content Ratio Grid (700px x 700px, touching top and bottom) ==================== */}
        <div className="absolute left-0 top-[2px] w-[700px] h-[700px]">
          <svg className="w-full h-full" viewBox="0 0 700 700" fill="none">
            {/* Grid cells */}
            {cells.map(cell => (
              <rect
                key={cell.id}
                x={cell.x}
                y={cell.y}
                width={cellSize}
                height={cellSize}
                rx={cell.rx}
                ry={cell.rx}
                fill={cell.fill}
              />
            ))}

            {/* Gapless Grid overlay lines */}
            {Array.from({ length: rows + 1 }).map((_, r) => (
              <line
                key={`h-${r}`}
                x1={0}
                y1={r * cellSize}
                x2={gridWidth}
                y2={r * cellSize}
                stroke="#000000"
                strokeWidth="1.2"
              />
            ))}
            {Array.from({ length: cols + 1 }).map((_, c) => (
              <line
                key={`v-${c}`}
                x1={c * cellSize}
                y1={0}
                x2={c * cellSize}
                y2={gridHeight}
                stroke="#000000"
                strokeWidth="1.2"
              />
            ))}
          </svg>

          {/* Giant text overlay over the bottom-left of the grid (In Chinese) */}
          <div className="absolute left-[35px] bottom-[50px] flex flex-col pointer-events-none select-none">
            <span className="text-[150px] font-black text-white font-['Montserrat'] leading-[0.85] tracking-tight">
              70%
            </span>
            <span className="text-[42px] font-black text-teal-400 font-['MiSans'] tracking-wider mt-3">
              人工创作
            </span>
          </div>
        </div>

        {/* ==================== SVG Connector Lines (Extending to the text columns) ==================== */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
          {/* Connector Line 1: Teal (From col 6 row 3 center to right text block) */}
          <line
            x1={455}
            y1={line1Y}
            x2={745}
            y2={line1Y}
            stroke="rgba(20, 184, 166, 0.5)"
            strokeWidth="2"
          />
          <circle cx={455} cy={line1Y} r="4" fill="#14B8A6" />
          <circle cx={745} cy={line1Y} r="3" fill="#14B8A6" />

          {/* Connector Line 2: Blue (From col 8 row 7 center to right text block) */}
          <line
            x1={595}
            y1={line2Y}
            x2={745}
            y2={line2Y}
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="2"
          />
          <circle cx={595} cy={line2Y} r="4" fill="#3B82F6" />
          <circle cx={745} cy={line2Y} r="3" fill="#3B82F6" />
        </svg>

        {/* ==================== Right Column: Simplified Stacking Text Blocks (left: 770px) ==================== */}

        {/* Main Title Header */}
        <div className="absolute left-[770px] top-[40px] w-[1070px]">
          <h3 className="text-[56px] font-black text-white font-['MiSans'] leading-none">
            70% 由人来写，30% 用 AI 辅助
          </h3>
        </div>

        {/* Block 1: 70% Human (Aligned vertically with Line 1Y) */}
        <div
          className="absolute left-[770px] w-[1070px] flex flex-col gap-2 font-['MiSans']"
          style={{ top: `${line1Y - 60}px` }}
        >
          <h4 className="text-[32px] font-black text-teal-400 leading-none">
            70% 人工负责
          </h4>
          <p className="text-[28px] text-zinc-300 leading-relaxed font-medium mt-3">
            主导文章的<strong className="text-white">判断、表达、结构和观点</strong>，确保内容有灵魂、有观点、有增量，人读了觉得有收获，AI 也更愿意用。
          </p>
        </div>

        {/* Block 2: 30% AI (Aligned vertically with Line 2Y) */}
        <div
          className="absolute left-[770px] w-[1070px] flex flex-col gap-2 font-['MiSans']"
          style={{ top: `${line2Y - 60}px` }}
        >
          <h4 className="text-[32px] font-black text-blue-400 leading-none">
            30% AI 辅助
          </h4>
          <p className="text-[28px] text-zinc-300 leading-relaxed font-medium mt-3">
            主要负责<strong className="text-white">品牌信息库、产品参数、基础语料</strong>这些部分，为技术数据的准确性把关，保障基础内容不出错。
          </p>
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_HumanAiRatioApproach.hideHeader = true;
