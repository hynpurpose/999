import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { FileSearch, Database, UserRound, PenLine, Bot } from 'lucide-react';

/**
 * 写文章的整体逻辑（单页讲清整条生产线）
 *   输入：AI 高引用规律 + 品牌资料库 + 目标用户设定
 *   人：定选题、写观点（30%）
 *   Agent：按结构蓝图成稿、校对（70%）
 * 讲清这一套逻辑后，后面五类文章示意均按此产出，不再逐类重复拆解。
 */

const ZONE = { reason: 'h-[148px]', stage: 'h-[430px]', footer: 'h-[106px]' };

const Em = ({ children }) => <span className="text-white font-bold">{children}</span>;

const Reason = ({ children }) => (
  <div className={`${ZONE.reason} shrink-0 flex items-center border-l-[3px] border-[#004CE5] pl-8`}>
    <p className="text-[30px] text-white font-bold leading-[1.55] max-w-[1560px]">{children}</p>
  </div>
);

const Footer = ({ label, children }) => (
  <div
    className={`${ZONE.footer} shrink-0 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-8 flex items-center gap-6`}
  >
    <span className="shrink-0 text-[19px] font-black text-black bg-white rounded px-3.5 py-1.5 tracking-widest">
      {label}
    </span>
    <p className="text-[26px] text-white font-bold leading-snug">{children}</p>
  </div>
);

const StageArrow = ({ caption }) => (
  <div className={`shrink-0 self-center flex flex-col items-center gap-3 ${caption ? 'w-[190px] px-3' : 'w-[80px]'}`}>
    <svg width="72" height="22" viewBox="0 0 72 22" fill="none">
      <path d="M2 11H62" stroke="#004CE5" strokeWidth="3" strokeLinecap="round" />
      <path d="M54 3L64 11L54 19" stroke="#004CE5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    {/* caption 用 \n 显式断行，避免自动换行把词或单字甩到下一行 */}
    {caption && (
      <span className="w-full text-center text-[19px] text-white font-bold leading-snug whitespace-pre-line">
        {caption}
      </span>
    )}
  </div>
);

/** 左侧三个输入：AI 找规律 + 品牌信息 + 用户设定 */
const INPUTS = [
  {
    Icon: FileSearch,
    title: 'AI 高引用规律',
    desc: '拆解目标词条下被引用最多的文章，提取已被验证的结构法则',
  },
  {
    Icon: Database,
    title: '品牌资料库',
    desc: '卖点 · 标准口径 · 禁用词，全部内容共用同一信息底座',
  },
  {
    Icon: UserRound,
    title: '目标用户设定',
    desc: '写给谁 · 什么场景 · 关心什么，决定内容替谁说话',
  },
];

export default function Page_ContentWritingLogic() {
  return (
    <SlideLayout
      title="我们怎么写出一篇文章"
      subtitle="AI 找规律，人定观点，Agent 成稿——五类文章共用同一套生产逻辑"
    >
      <div className="absolute w-[560px] h-[560px] rounded-full bg-[#004CE5]/[0.06] blur-[160px] -right-40 top-10 pointer-events-none" />

      <div className="w-full h-full flex flex-col gap-7 select-none relative z-10 font-['MiSans']">
        <Reason>
          写一篇能被 AI 引用的文章，不靠灵感，靠一条固定流水线：
          <Em>先由 AI 整理引用文章的规律，结合品牌信息和用户设定，再由人写观点、Agent 辅助成稿</Em>。
        </Reason>

        {/* 主视觉：三个输入 → 人写观点 → Agent 成稿 */}
        <div className={`${ZONE.stage} shrink-0 flex items-stretch`}>
          {/* 第一步：三个输入并列 */}
          <div className="w-[560px] shrink-0 flex flex-col gap-4">
            {INPUTS.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex-1 min-h-0 rounded-3xl border border-white/10 bg-white/[0.03] px-8 flex items-center gap-6"
              >
                <div className="w-[62px] h-[62px] rounded-2xl border border-[#004CE5]/30 bg-[#004CE5]/[0.10] flex items-center justify-center shrink-0">
                  <Icon size={30} strokeWidth={1.6} className="text-[#7FA9FF]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[26px] font-black text-white leading-tight">{title}</div>
                  <div className="mt-1.5 text-[18px] text-white font-bold leading-snug">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <StageArrow caption={'汇成这篇文章的\n结构蓝图'} />

          {/* 第二步：人写观点 */}
          <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] px-10 py-8 flex flex-col min-h-0">
            <div className="flex items-center justify-between shrink-0">
              <div className="w-[62px] h-[62px] rounded-2xl border border-white/15 bg-white/[0.06] flex items-center justify-center">
                <PenLine size={30} strokeWidth={1.6} className="text-white" />
              </div>
              <span className="font-['Montserrat'] text-[52px] font-black text-white leading-none">30%</span>
            </div>
            <div className="mt-6 text-[34px] font-black text-white leading-tight">人写观点</div>
            <div className="mt-4 flex-1 min-h-0 flex flex-col gap-3 justify-start">
              {['定选题与核心观点', '保证真实感与信息增量', '把关专业判断'].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white/60 shrink-0" />
                  <span className="text-[21px] text-white font-bold leading-snug">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <StageArrow caption={'观点交给\nAgent 展开'} />

          {/* 第三步：Agent 辅助成稿 */}
          <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] px-10 py-8 flex flex-col min-h-0">
            <div className="flex items-center justify-between shrink-0">
              <div className="w-[62px] h-[62px] rounded-2xl border border-white/15 bg-white/[0.06] flex items-center justify-center">
                <Bot size={30} strokeWidth={1.6} className="text-white" />
              </div>
              <span className="font-['Montserrat'] text-[52px] font-black text-white leading-none">70%</span>
            </div>
            <div className="mt-6 text-[34px] font-black text-white leading-tight">Agent 辅助成稿</div>
            <div className="mt-4 flex-1 min-h-0 flex flex-col gap-3 justify-start">
              {['按结构蓝图展开成稿', '数据核对 · 术语统一', '合规校对 · 关键句可摘抄'].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white/60 shrink-0" />
                  <span className="text-[21px] text-white font-bold leading-snug">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer label="产出">
          同一套逻辑套不同的文章类型，就得到
          <Em>新药上市 / 指南共识 / 临床研究 / 方案解读 / 知识科普</Em>
          五类稿件。
        </Footer>
      </div>
    </SlideLayout>
  );
}

Page_ContentWritingLogic.hideHeader = true;
