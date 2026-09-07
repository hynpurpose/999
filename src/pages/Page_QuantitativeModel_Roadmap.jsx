import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_QuantitativeModel_Roadmap() {
  return (
    <SlideLayout title="1.0 版本已上线">
      {/* Top Main Statement */}
      <div className="absolute top-[0px] left-0 w-full text-[36px] text-zinc-100 font-extrabold leading-normal max-w-[1550px] font-['MiSans']">
        同类品牌、同等预算下，我们服务的客户一旦在 AI 答案里占到第一位，<br />
        竞品很难撼动，除非愿意花 <span className="text-white font-black text-[40px] border-b-4 border-blue-500 pb-1">5-10 倍</span> 的钱去砸内容和投放。
      </div>

      <div className="absolute left-0 top-[160px] w-full h-[630px] flex flex-col gap-6 select-none font-['MiSans']">
        {/* 上：预算与效果对比 */}
        <div className="w-full h-[490px] rounded-3xl border border-[#004CE5]/40 bg-[#004CE5]/[0.06] p-10 flex flex-col justify-between shadow-[0_0_30px_rgba(0,76,229,0.12)]">
          <div>
            <div className="text-[34px] font-extrabold text-white font-['MiSans']">预算与效果对比</div>
          </div>

          {/* 柱状图展示区域 */}
          <div className="flex-1 flex flex-col justify-center gap-8 py-2">
            {/* 我方预算行 */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-full h-[110px] flex items-center p-3 relative overflow-hidden">
              <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-full h-full w-[35%] flex items-center px-10 text-[28px] font-extrabold text-white shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                我们的预算 (1×)
              </div>
              <div className="absolute right-12 text-[34px] font-black text-blue-400">
                第一名 (占首位)
              </div>
            </div>

            {/* 对手预算行 */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-full h-[110px] flex items-center p-3 relative overflow-hidden">
              <div className="bg-zinc-700/80 rounded-full h-full w-[80%] flex items-center px-10 text-[28px] font-extrabold text-zinc-300">
                对手的预算 (5-10×)
              </div>
              <div className="absolute right-12 text-[34px] font-black text-zinc-400">
                第三名
              </div>
            </div>
          </div>
        </div>

        {/* 下：排他原则 */}
        <div className="w-full h-[114px] rounded-3xl border border-white/20 bg-white/[0.03] px-10 flex items-center gap-8 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
          <div className="text-[28px] font-black text-white tracking-wider">排他原则</div>
          <div className="w-px h-8 bg-zinc-800" />
          <div className="text-[28px] font-bold text-zinc-300">
            同一细分类目，只服务一家。
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_QuantitativeModel_Roadmap.hideHeader = true;
