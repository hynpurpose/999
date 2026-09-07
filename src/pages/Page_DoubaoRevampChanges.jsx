import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';
import shift from '../data/doubaoCitationShift.json';

const ACCENT = '#004CE5';

const [monthBefore, monthAfter] = shift.months;
const BREAKPOINT = shift.breakpoint;
const topsJune = shift.article_tops?.['6月'] || [];
const topsJuly = shift.article_tops?.['7月'] || [];

/** 稳定本地图标，避免接口签名图 / Google favicon 失效 */
const LOCAL_ICON_BY_DOMAIN = {
  'iesdouyin.com': '/favicons/douyin.svg',
  'douyin.com': '/favicons/douyin.svg',
  'smzdm.com': '/favicons/smzdm.png',
  'toutiao.com': '/favicons/toutiao.png',
  'sohu.com': '/favicons/sohu.png',
  '163.com': '/favicons/163.png',
  'sina.cn': '/favicons/sina.png',
  'sina.com.cn': '/favicons/sina.png',
  'bjnews.com.cn': '/favicons/bjnews.png',
  'cet.com.cn': '/favicons/cet.svg',
  'bjd.com.cn': '/favicons/bjd.svg',
  'dzng.com': '/favicons/dzng.svg',
};

const LOCAL_ICON_BY_NAME = {
  抖音: '/favicons/douyin.svg',
  什么值得买社区频道: '/favicons/smzdm.png',
  什么值得买: '/favicons/smzdm.png',
  今日头条: '/favicons/toutiao.png',
  搜狐网: '/favicons/sohu.png',
  网易: '/favicons/163.png',
  新浪新闻: '/favicons/sina.png',
  新京报: '/favicons/bjnews.png',
  中国经济新闻网: '/favicons/cet.svg',
  北京日报: '/favicons/bjd.svg',
  Dzng: '/favicons/dzng.svg',
  大众日报: '/favicons/dzng.svg',
};

const fmtPct = (v) => {
  const n = Number(v);
  if (!Number.isFinite(n)) return '-';
  return `${Number.isInteger(n) ? n : n.toFixed(1)}%`;
};

const fmtDelta = (v) => {
  const n = Number(v);
  if (!Number.isFinite(n)) return '-';
  const sign = n > 0 ? '+' : '';
  return `${sign}${Number.isInteger(n) ? n : n.toFixed(1)}%`;
};

function RankBadge({ rank }) {
  if (rank <= 3) {
    const bg = rank === 1 ? '#FFD100' : rank === 2 ? '#E4E4E7' : '#FFC085';
    const fg = rank === 1 ? '#18181B' : rank === 2 ? '#52525B' : '#78350F';
    return (
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center text-[13px] font-black shrink-0 font-['Montserrat']"
        style={{ backgroundColor: bg, color: fg }}
      >
        {rank}
      </span>
    );
  }
  return (
    <span className="w-6 h-6 flex items-center justify-center text-[14px] font-bold text-white/40 shrink-0 font-['Montserrat']">
      {rank}
    </span>
  );
}

function PlatformIcon({ name, domain, logoUrl, size = 22 }) {
  const local =
    LOCAL_ICON_BY_NAME[name] ||
    LOCAL_ICON_BY_DOMAIN[domain] ||
    (domain ? LOCAL_ICON_BY_DOMAIN[domain.replace(/^www\./, '')] : null);

  const isDouyin =
    name === '抖音' || domain === 'iesdouyin.com' || domain === 'douyin.com';

  // 本地优先；抖音 / 易失效域名不再走远程签名图
  const candidates = [
    local,
    isDouyin || domain === 'cet.com.cn' || domain === 'bjd.com.cn' || domain === 'dzng.com'
      ? null
      : logoUrl || null,
  ].filter(Boolean);

  const [idx, setIdx] = useState(0);
  const src = idx < candidates.length ? candidates[idx] : null;
  const initial = (name || domain || '?').trim().charAt(0);

  if (!src) {
    return (
      <span
        className="inline-flex items-center justify-center rounded bg-white/10 shrink-0 text-[12px] font-bold text-white/70"
        style={{ width: size, height: size }}
      >
        {initial}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center justify-center rounded bg-white shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt=""
        className="object-contain"
        style={{ width: size - 2, height: size - 2 }}
        draggable={false}
        onError={() => setIdx((i) => i + 1)}
      />
    </span>
  );
}

function ArticleList({ label, articles, highlight }) {
  return (
    <div className="flex-1 min-w-0 min-h-0 flex flex-col">
      <div className="shrink-0 flex items-center gap-2 mb-2 px-0.5">
        <span
          className={`text-[18px] font-bold tracking-wide ${
            highlight ? 'text-[#4C8DFF]' : 'text-white/80'
          }`}
        >
          {label} · 引用来源 Top10
        </span>
      </div>
      <div
        className={`flex-1 min-h-0 rounded-[12px] border overflow-hidden flex flex-col ${
          highlight ? 'border-[#4C8DFF]/35 bg-[#004CE5]/[0.10]' : 'border-white/[0.08] bg-white/[0.03]'
        }`}
      >
        {/* 列名 */}
        <div className="shrink-0 flex items-center gap-2.5 px-3 py-1.5 border-b border-white/[0.08] bg-white/[0.04]">
          <span className="w-6 shrink-0 text-center text-[12px] font-bold text-white/40">#</span>
          <span className="w-[22px] shrink-0" />
          <span className="flex-1 min-w-0 text-[12px] font-bold tracking-wide text-white/40">
            文章标题 / 平台
          </span>
          <span className="shrink-0 w-10 text-right text-[12px] font-bold tracking-wide text-white/40">
            引用
          </span>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden flex flex-col px-3 py-1">
          {articles.map((a) => (
            <div
              key={`${a.rank}-${a.link_url || a.title}`}
              className="flex items-center gap-2.5 py-[5px] border-b border-white/[0.06] last:border-none min-h-0"
            >
              <RankBadge rank={a.rank} />
              <PlatformIcon
                name={a.platform_name}
                domain={a.domain}
                logoUrl={a.logo_url}
              />
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-bold text-white truncate leading-snug">
                  {a.title || '(无标题)'}
                </p>
                <p className="text-[12px] text-white/45 truncate leading-tight mt-0.5">
                  {a.platform_name || a.domain}
                </p>
              </div>
              <span
                className={`shrink-0 w-10 text-right text-[18px] font-bold font-['Montserrat'] tabular-nums ${
                  highlight ? 'text-[#4C8DFF]' : 'text-white/85'
                }`}
              >
                {a.total_citations}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page_DoubaoRevampChanges() {
  return (
    <SlideLayout title="豆包改版变化1：大幅增多了对抖音的引用">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">

        <div className="shrink-0 mb-3 rounded-[16px] border border-[#4C8DFF]/30 bg-[#004CE5]/[0.12] px-6 py-3 flex items-start gap-4">
          <span
            className="shrink-0 mt-0.5 px-2.5 py-1 rounded text-white text-[14px] font-bold tracking-wide"
            style={{ backgroundColor: ACCENT }}
          >
            变化 01
          </span>
          <div className="min-w-0">
            <p className="text-[20px] text-white font-bold leading-snug">
              豆包自 <span className="text-[#4C8DFF]">{BREAKPOINT?.replace(/-/g, '.')}</span> 起
              把答案来源整体切向抖音视频；来源结构不是缓慢迁移，而是在单日之内完成切换，此后稳定维持高位
            </p>
          </div>
        </div>

        <div className="flex-1 min-h-0 rounded-[24px] px-5 py-4 flex flex-col border border-[#4C8DFF]/40 bg-[#0B0D19]/45">
          <div className="shrink-0 flex items-stretch gap-3 mb-3">
            {[
              { m: monthBefore, isAfter: false },
              { m: monthAfter, isAfter: true },
            ].map(({ m, isAfter }, i) => (
              <React.Fragment key={m.label}>
                {i === 1 && (
                  <div className="shrink-0 flex flex-col items-center justify-center px-1">
                    <span className="text-[28px] font-black text-white/45 leading-none">›››</span>
                    <span
                      className="mt-1.5 px-2 py-0.5 rounded text-[15px] font-bold text-white whitespace-nowrap font-['Montserrat']"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {fmtDelta(monthAfter.douyin_share - monthBefore.douyin_share)}
                    </span>
                  </div>
                )}
                <div
                  className={`flex-1 rounded-[12px] px-5 py-2.5 border ${
                    isAfter
                      ? 'bg-[#004CE5]/[0.16] border-[#4C8DFF]/30'
                      : 'bg-white/[0.04] border-white/[0.08]'
                  }`}
                >
                  <p
                    className={`text-[15px] font-bold tracking-wide mb-0.5 ${
                      isAfter ? 'text-[#4C8DFF]' : 'text-white/70'
                    }`}
                  >
                    2026年{m.label}
                  </p>
                  <div className="flex items-end gap-2.5">
                    <span
                      className={`text-[44px] font-bold leading-none tracking-[-0.02em] font-['Montserrat'] ${
                        isAfter ? 'text-[#4C8DFF]' : 'text-white'
                      }`}
                    >
                      {fmtPct(m.douyin_share)}
                    </span>
                    <span className="text-[14px] text-white/50 pb-1 leading-tight">
                      抖音引用 {m.douyin_citations} 条
                      <br />
                      总引用 {m.total_citations} 条
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="flex-1 min-h-0 flex gap-4">
            <ArticleList label="6月" articles={topsJune} />
            <ArticleList label="7月" articles={topsJuly} highlight />
          </div>
        </div>

        <p className="shrink-0 mt-2 text-[14px] text-white/45">
          数据来源：GEO ONE · 慕思智能床 + 慕思AI床垫 + 慕思床垫合计 · 平台「
          {shift.meta.platform_name}」；引用条数加总后重算占比；下方为各月豆包引用文章 Top10
        </p>
      </div>
    </SlideLayout>
  );
}

Page_DoubaoRevampChanges.hideHeader = true;
