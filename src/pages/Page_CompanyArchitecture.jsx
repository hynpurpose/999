import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_CompanyArchitecture() {
  return (
    <SlideLayout title="团队组织架构">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div 
        className="absolute w-full flex flex-col justify-start select-none z-10"
        style={{ top: '-30px', height: '825px' }}
      >
        
        {/* ==================== LEVEL 1: ROOT NODE (既明科技) ==================== */}
        <div className="flex flex-col items-center relative">
          <div className="bg-[#0f172a]/95 border-2 border-zinc-700 rounded-xl px-16 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <h2 className="text-[34px] font-black text-white tracking-widest" style={{ fontFamily: 'AlimamaShuHeiTi' }}>
              既明科技
            </h2>
          </div>
          {/* Central trunk line down from root */}
          <div className="w-0.5 h-6 bg-zinc-600" />
        </div>

        {/* ==================== DOUBLE-T BRANCHING TREE ==================== */}
        <div className="relative w-full">
          
          {/* ==================== ROW 1: GEO 索引未来 (HIGHLIGHTED) & Agent 电商 ==================== */}
          <div className="relative w-full pb-6">
            {/* Horizontal bar for Row 1 */}
            <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-zinc-600" />
            
            {/* Vertical drops into Row 1 headers */}
            <div className="absolute top-0 left-[25%] w-0.5 h-4 bg-zinc-600 -translate-x-1/2" />
            <div className="absolute top-0 left-[75%] w-0.5 h-4 bg-zinc-600 -translate-x-1/2" />
            
            {/* CENTRAL TRUNK LINE: Stretches dynamically to the absolute bottom of Row 1 container, eliminating any gap */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-zinc-600 -translate-x-1/2" />

            <div className="grid grid-cols-2 gap-16 w-full pt-4 px-12">
              
              {/* Column 1.1: GEO 索引未来 (Blue Highlights) */}
              <div className="flex flex-col items-center w-full">
                {/* Dept Header */}
                <div className="bg-[#004CE5]/10 border-2 border-[#004CE5] rounded-xl py-2.5 px-8 shadow-[0_0_20px_rgba(0,76,229,0.25)] flex items-center justify-center min-w-[240px]">
                  <h3 className="text-[26px] font-black text-white tracking-wide">GEO 索引未来</h3>
                </div>
                <div className="w-0.5 h-4 bg-zinc-700" />

                {/* Sub-branch grid (3 sub-columns) */}
                <div className="relative w-full pt-4">
                  <div className="absolute top-0 left-[16.6%] right-[16.6%] h-0.5 bg-zinc-700" />
                  <div className="absolute top-0 left-[16.6%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />
                  <div className="absolute top-0 left-[50%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />
                  <div className="absolute top-0 left-[83.3%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />

                  <div className="grid grid-cols-3 gap-4 w-full">
                    {/* Sub-col 1: Management */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        负责人
                      </div>
                      <div className="w-0.5 h-5 bg-zinc-700" />
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        项目统筹
                      </div>
                    </div>

                    {/* Sub-col 2: Tech & Analytics */}
                    <div className="flex flex-col items-center">
                      {/* Algorithms */}
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        算法研究组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-850 bg-zinc-950/60 rounded-md py-1.5 px-3 text-[18px] text-zinc-300 text-center w-full">
                        算法架构师
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-850 bg-zinc-950/60 rounded-md py-1.5 px-3 text-[18px] text-zinc-300 text-center w-full">
                        AI大模型研究员
                      </div>
                      
                      <div className="w-0.5 h-5 bg-zinc-700" />

                      {/* Analytics */}
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        数据监测组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-850 bg-zinc-950/60 rounded-md py-1.5 px-3 text-[18px] text-zinc-300 text-center w-full">
                        数据分析与洞察专家
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-850 bg-zinc-950/60 rounded-md py-1.5 px-3 text-[18px] text-zinc-300 text-center w-full">
                        GEO优化技术专家
                      </div>
                    </div>

                    {/* Sub-col 3: Content */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        内容与策略组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-850 bg-zinc-950/60 rounded-md py-1.5 px-3 text-[18px] text-zinc-300 text-center w-full">
                        品牌与内容策略师
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-850 bg-zinc-950/60 rounded-md py-1.5 px-3 text-[18px] text-zinc-300 text-center w-full">
                        内容编辑专员
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-850 bg-zinc-950/60 rounded-md py-1.5 px-3 text-[18px] text-zinc-300 text-center w-full">
                        评测与外部撰稿人团队
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 1.2: Agent 电商 */}
              <div className="flex flex-col items-center w-full">
                {/* Dept Header */}
                <div className="bg-zinc-900/60 border border-zinc-700 rounded-xl py-2 px-8 flex items-center justify-center min-w-[240px]">
                  <h3 className="text-[26px] font-bold text-zinc-300 tracking-wide">Agent 电商</h3>
                </div>
                <div className="w-0.5 h-4 bg-zinc-700" />

                {/* Sub-branch grid (3 sub-columns) */}
                <div className="relative w-full pt-4">
                  <div className="absolute top-0 left-[16.6%] right-[16.6%] h-0.5 bg-zinc-700" />
                  <div className="absolute top-0 left-[16.6%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />
                  <div className="absolute top-0 left-[50%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />
                  <div className="absolute top-0 left-[83.3%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />

                  <div className="grid grid-cols-3 gap-4 w-full">
                    {/* Sub-col 1 */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2.5 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        AI电商运营专家
                      </div>
                    </div>

                    {/* Sub-col 2 */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        Agent开发组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        AI Agent 开发专家
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        大模型全栈工程师
                      </div>
                    </div>

                    {/* Sub-col 3 */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        电商智能组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        电商提示词工程师
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        智能客服内容运营
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ==================== ROW 2: 市场部 & 行政部 ==================== */}
          <div className="relative w-full">
            {/* Horizontal bar for Row 2 */}
            <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-zinc-600" />
            
            {/* Vertical drops into Row 2 headers */}
            <div className="absolute top-0 left-[25%] w-0.5 h-4 bg-zinc-600 -translate-x-1/2" />
            <div className="absolute top-0 left-[75%] w-0.5 h-4 bg-zinc-600 -translate-x-1/2" />

            <div className="grid grid-cols-2 gap-16 w-full pt-4 px-12">
              
              {/* Column 2.1: 市场部 */}
              <div className="flex flex-col items-center w-full">
                {/* Dept Header */}
                <div className="bg-zinc-900/60 border border-zinc-700 rounded-xl py-2 px-8 flex items-center justify-center min-w-[240px]">
                  <h3 className="text-[26px] font-bold text-zinc-300 tracking-wide">市场部</h3>
                </div>
                <div className="w-0.5 h-4 bg-zinc-700" />

                {/* Sub-branch grid (3 sub-columns) */}
                <div className="relative w-full pt-4">
                  <div className="absolute top-0 left-[16.6%] right-[16.6%] h-0.5 bg-zinc-700" />
                  <div className="absolute top-0 left-[16.6%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />
                  <div className="absolute top-0 left-[50%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />
                  <div className="absolute top-0 left-[83.3%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />

                  <div className="grid grid-cols-3 gap-4 w-full">
                    {/* Sub-col 1 */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2.5 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        市场开发组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        市场拓展部
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        业务拓展经理
                      </div>
                    </div>

                    {/* Sub-col 2 */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2.5 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        媒介策划组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        广告媒介策划
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        视觉与内容设计
                      </div>
                    </div>

                    {/* Sub-col 3 */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        客户成功经理
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2.2: 行政部 */}
              <div className="flex flex-col items-center w-full">
                {/* Dept Header */}
                <div className="bg-zinc-900/60 border border-zinc-700 rounded-xl py-2 px-8 flex items-center justify-center min-w-[240px]">
                  <h3 className="text-[26px] font-bold text-zinc-300 tracking-wide">行政部</h3>
                </div>
                <div className="w-0.5 h-4 bg-zinc-700" />

                {/* Sub-branch grid (3 sub-columns) */}
                <div className="relative w-full pt-4">
                  <div className="absolute top-0 left-[16.6%] right-[16.6%] h-0.5 bg-zinc-700" />
                  <div className="absolute top-0 left-[16.6%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />
                  <div className="absolute top-0 left-[50%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />
                  <div className="absolute top-0 left-[83.3%] w-0.5 h-4 bg-zinc-700 -translate-x-1/2" />

                  <div className="grid grid-cols-3 gap-4 w-full">
                    {/* Sub-col 1 */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2.5 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        人力资源组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        人力资源规划
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        行政与员工关系
                      </div>
                    </div>

                    {/* Sub-col 2 */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2.5 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        财务管理组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        财务核算与税务
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-800" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        资产与收支管理
                      </div>
                    </div>

                    {/* Sub-col 3 */}
                    <div className="flex flex-col items-center">
                      <div className="border border-zinc-800 bg-zinc-900/40 rounded-lg py-2.5 px-3 text-[20px] font-bold text-zinc-300 text-center w-full shadow-md">
                        法务合规组
                      </div>
                      <div className="w-0.5 h-3 bg-zinc-700" />
                      <div className="border border-zinc-900 bg-zinc-950/40 rounded-md py-1.5 px-3 text-[18px] text-zinc-400 text-center w-full">
                        法务合规与合同管理
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </SlideLayout>
  );
}

Page_CompanyArchitecture.hideHeader = true;
