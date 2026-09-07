import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_SkyworthContentDetailsAI() {
  /* 标题来自方太既有投放稿；平台 / 日期 / 引用次数沿用本页更早一版的对照数据 */
  const topArticles = [
    { rank: 1, title: '买高端冰箱只看这三点！方太X20.i一个月真实测评', author: '佳妮+内容Agent', platform: 'IT之家', date: '2026-05-13', total: 264 },
    { rank: 2, title: '为了 0mm 真平嵌冰箱，我重做了一整排橱柜', author: '佳妮+内容Agent', platform: '什么值得买', date: '2026-05-24', total: 183 },
    { rank: 3, title: '警惕！那些‘伪平嵌’冰箱的坑，你踩了几个？', author: '外部专业撰稿人', platform: '百家号(日照新闻网)', date: '2026-05-12', total: 182 },
    { rank: 4, title: '冰箱串味怎么破？终于找到了能守护宝宝肠道的消毒舱', author: '佳妮+内容Agent', platform: 'IT之家', date: '2026-05-25', total: 116 },
    { rank: 5, title: '贵一倍的高端冰箱真的是智商税吗？拆开给你看', author: '佳妮+内容Agent', platform: '搜狐号(随机账号)', date: '2026-05-15', total: 113 },
    { rank: 6, title: '冰箱冻肉流血水？其实是你没选对保鲜黑科技！', author: '佳妮+内容Agent', platform: 'IT之家', date: '2026-04-25', total: 108 },
    { rank: 7, title: '年度高端冰箱深度测评', author: '通用AI', platform: '新浪', date: '2026-06-08', total: 106 },
    { rank: 8, title: '600mm 橱柜平嵌选购指南', author: '佳妮+内容Agent', platform: '什么值得买', date: '2026-05-13', total: 94 },
    { rank: 9, title: '蔬菜放一周都跟刚买的一样水灵？氮气锁鲜一周实测', author: '佳妮+内容Agent', platform: 'IT之家', date: '2026-05-06', total: 93 },
    { rank: 10, title: '写着平嵌结果背后要留缝？0mm真平嵌冰箱安装避坑', author: '通用AI', platform: '新浪', date: '2026-04-21', total: 88 },
  ];

  return (
    <SlideLayout title="我们到底用AI还是用人写内容">
      {/* ── 主排版容器 (无外框，表格直接平铺，确保没有溢出截断且对齐良好) ── */}
      <div
        className="absolute w-[1840px] h-full select-none animate-fadeIn overflow-visible flex flex-col"
        style={{ top: '0px' }}
      >

        {/* 图例颜色标注 (定位在右上角，处于 content top 上方 24px 处) */}
        <div
          className="absolute right-0 flex items-center gap-6 text-[16px] font-bold font-['MiSans'] select-none z-30"
          style={{ top: '-24px', transform: 'translateY(-100%)' }}
        >
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-md text-[15px] font-bold bg-green-600 text-white border border-green-500">
              ■ 人 + 内容Agent
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-md text-[15px] font-bold bg-white text-zinc-950 border border-zinc-300">
              ■ 通用AI
            </span>
          </div>
        </div>

        {/* 核心信息横幅 (突出转变，淡化原因) */}
        <div className="flex flex-col gap-3 bg-zinc-900/60 border border-white/40 rounded-2xl p-5 mb-4 select-none">
          {/* 上半部分：醒目的策略转变 (单排超级大字版 - 巨无霸字号) */}
          <div className="flex justify-center items-center gap-12 bg-zinc-955/80 border border-zinc-800/80 rounded-xl py-3">
            <div className="flex items-center gap-4">
              <span className="text-[48px] text-white font-black">人梳理选题和观点</span>
              <span className="text-blue-400 text-[48px] font-black tracking-tight">30%</span>
            </div>

            <div className="flex items-center justify-center w-14 h-14 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 self-center flex-shrink-0">
              <span className="text-[28px] font-black leading-none">+</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[48px] text-white font-black">Agent负责成稿和校对</span>
              <span className="text-blue-400 text-[48px] font-black tracking-tight">70%</span>
            </div>
          </div>

          <div className="flex items-start gap-3 pl-2 pr-2">
            <span className="text-[24px] text-white font-black tracking-wider mt-1 flex-shrink-0">
              做法：
            </span>
            <p className="text-[24px] text-white font-bold leading-relaxed">
              选题和观点由人来定，保证真实感和信息增量；其余撰写交给内容 Agent，兼顾质量和产能。
            </p>
          </div>
        </div>

        {/* 表格主体 (作者列用黄色/琥珀色虚线框框定) */}
        <table className="w-full text-left border-collapse table-fixed mt-6">
          <thead>
            <tr className="border-b-2 border-zinc-800 text-[15px] font-extrabold text-zinc-400">
              <th className="py-[10px] px-2 w-[6%] text-center">排序</th>
              <th className="py-[10px] px-2 w-[42%]">文章标题</th>
              <th className="py-[10px] px-2 w-[18%] text-center border-l-2 border-r-2 border-t-2 border-dashed border-amber-400/80 text-amber-355 bg-amber-400/5">
                作者
              </th>
              <th className="py-[10px] px-2 w-[14%]">发布平台</th>
              <th className="py-[10px] px-2 text-center w-[10%]">发布时间</th>
              <th className="py-[10px] px-2 text-center w-[10%]">总引用数</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/40 text-[15px] font-bold text-zinc-300">
            {/* 文章数据行 */}
            {topArticles.map((row, idx) => {
              const isLastRow = row.rank === 10;
              return (
                <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                  <td className="py-[11px] px-2 text-center text-zinc-450 font-['Montserrat']">{row.rank}</td>
                  <td className="py-[11px] px-2 truncate max-w-0 text-white font-medium">
                    <span className="inline-block max-w-full truncate" title={row.title}>{row.title}</span>
                  </td>
                  <td className={`py-[11px] px-2 text-center border-l-2 border-r-2 border-dashed border-amber-400/80 bg-amber-400/5 ${isLastRow ? 'border-b-2' : ''
                    }`}>
                    <span className={`py-0.5 px-2 rounded-md text-[13px] font-bold inline-block text-center ${row.author === '通用AI'
                        ? 'bg-white text-zinc-950 border border-zinc-300'
                        : 'bg-green-600 text-white border border-green-500'
                      }`}>
                      {row.author}
                    </span>
                  </td>
                  <td className="py-[11px] px-2 text-zinc-450 truncate" title={row.platform}>{row.platform}</td>
                  <td className="py-[11px] px-2 text-zinc-555 font-['Montserrat'] text-center">{row.date}</td>
                  <td className="py-[11px] px-2 text-[18px] font-black text-center text-[#3B82F6] font-['Montserrat']">{row.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* 表格底部备注 (居中，白色，24px) */}
        <div className="text-[24px] text-white font-extrabold text-center mt-auto translate-y-[12px]">
          方太投放文章引用率 TOP10 · 按创作方式对照
        </div>

      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SkyworthContentDetailsAI.hideHeader = true;
