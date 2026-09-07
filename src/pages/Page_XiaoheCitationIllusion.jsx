import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const ACCENT = '#004CE5';
const SHOT_SRC = '/medical-platforms/doubao-citation-sources.png';

/* 两侧引用源清单出自 GEO ONE 真实抓取：项目「近视控制：美欧品® 硫酸阿托品滴眼液」/
   2026-08-08 / 词条「近视控制滴眼液有哪些品牌」，
   豆包 conv=302114（30 条，10 个站点，小荷健康 13 条）、DeepSeek conv=301528（8 条，无小荷健康）。 */
const ENTRY = '近视控制滴眼液有哪些品牌';

/* 两张卡共用行高，条数差才能直接看成卡片高度差 */
const ROW_H = 40;

const SITE_ICON = {
  小荷健康: '/source-icons/xiaohe-mark.png',
  抖音: '/source-icons/iesdouyin.com.ico',
  今日头条: '/source-icons/toutiao.com.png',
  博禾医生: '/source-icons/bohe.cn.png',
  复禾健康: '/source-icons/fh21.com.png',
  民福康: '/source-icons/mfk.com.png',
  搜狐网: '/source-icons/sohu.com.png',
  中国医药信息查询平台: '/source-icons/dayi.org.cn.png',
  中国食品药品网: '/source-icons/cnpharm.com.ico',
  丁香园: '/source-icons/dxy.cn.png',
};

const DOUBAO_SOURCES = [
  { site: '小荷健康', title: '美欧品 硫酸阿托品滴眼液 0.01%' },
  { site: '小荷健康', title: '瑞眸明 消旋山莨菪碱滴眼液' },
  { site: '小荷健康', title: '山禾药业 托吡卡胺滴眼液' },
  { site: '小荷健康', title: '珍视明 四味珍层冰硼滴眼液' },
  { site: '小荷健康', title: '目秀 夏天无滴眼液' },
  { site: '小荷健康', title: '欣万禾 地巴唑滴眼液' },
  { site: '小荷健康', title: '河南省人民医院 泌尿外科' },
  { site: '小荷健康', title: '郑州卓峰 托吡卡胺滴眼液' },
  { site: '小荷健康', title: '北京儿童医院保定医院 眼科' },
  { site: '小荷健康', title: '托吡卡胺滴眼液 0.25%' },
  { site: '小荷健康', title: '唐山市人民医院 眼科' },
  { site: '小荷健康', title: '李雯婷 医生介绍' },
  { site: '小荷健康', title: '符爱存 医生介绍' },
  { site: '抖音', title: '国内首个 0.01% 阿托品滴眼液上市' },
  { site: '抖音', title: '儿童「近视神药」阿托品火爆！兴齐眼药年赚近 7 亿元' },
  { site: '抖音', title: '儿童低浓度阿托品滴眼液使用风险与调节力影响分析' },
  { site: '抖音', title: '国内首个延缓儿童近视滴眼液获批' },
  { site: '抖音', title: '近视神药的应用共识 #阿托品 #近视防控' },
  { site: '今日头条', title: '儿童近视赛道又迎厂商布局，齐鲁制药产品上市申请获受理' },
  { site: '博禾医生', title: '眼睛近视用什么药最好 - 专家文章' },
  { site: '民福康', title: '治近视眼的眼药水有哪些' },
  { site: '复禾健康', title: '治近视眼药水有哪些' },
  { site: '复禾健康', title: '近视什么眼药水好 - 用药指南' },
  { site: '博禾医生', title: '什么眼药水可以治疗近视眼 - 专家文章' },
  { site: '复禾健康', title: '治近视的眼药水有哪些 - 用药指南' },
  { site: 'Sinqi', title: '兴齐眼药领跑儿童近视防控赛道' },
  { site: '今日头条', title: '延缓近视进展，低浓度阿托品为何让多家药企抢滩布局' },
  { site: '大智慧', title: '专注眼科用药市场，低阿放量驱动未来高质量发展' },
  { site: '搜狐网', title: '兴齐刚建完阿托品护城河，恒瑞、齐鲁、兆科就杀到了门口' },
  { site: '手机新浪网', title: '兴齐眼药低浓度硫酸阿托品开启儿童近视个性化防控新时代' },
];

const DEEPSEEK_SOURCES = [
  { site: '中国食品药品网', title: '兴齐眼药领跑儿童近视防控赛道' },
  { site: 'Sinqi', title: '从「单一浓度」到「阶梯浓度」——兴齐眼药低浓度硫酸阿托品' },
  { site: '丁香园', title: '丁香园用药助手 - 实用临床诊疗工具' },
  { site: '广东众生药业', title: '众生药业 - 中药为基，创新引领的制药企业' },
  { site: '广东省中医药局', title: '「近视神药」获批上市？家长购买前先做好「功课」' },
  { site: 'Sinqi', title: '兴齐® 美欧品® 硫酸阿托品滴眼液' },
  { site: '温医大附属眼视光医院', title: '近视防控进入「精调」时代：阿托品可选浓度，镜片重构光线' },
  { site: '中国医药信息查询平台', title: '冰珍清目滴眼液的功效与作用' },
];

function LogoPlate({ src, alt, size = 26 }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <span
      style={{ width: size, height: size }}
      className="shrink-0 rounded-[7px] bg-white overflow-hidden flex items-center justify-center"
    >
      <img src={src} alt={alt} onError={() => setFailed(true)} className="w-full h-full object-contain" />
    </span>
  );
}

/* 站点小图标：没有 logo 就退化成首字母圆形头像，接近真实引用源面板里的 favicon */
function SiteFavicon({ site, size = 16 }) {
  const [failed, setFailed] = useState(false);
  const src = SITE_ICON[site];
  const box = { width: size, height: size };

  if (!src || failed) {
    return (
      <span style={box} className="shrink-0 rounded-full bg-[#E8EAED] flex items-center justify-center">
        <span style={{ fontSize: Math.round(size * 0.6), color: '#5F6368' }} className="font-bold leading-none">
          {(site || '·').slice(0, 1)}
        </span>
      </span>
    );
  }

  return (
    <span style={box} className="shrink-0 rounded-full bg-white overflow-hidden flex items-center justify-center">
      <img src={src} alt={site} onError={() => setFailed(true)} className="w-full h-full object-contain" />
    </span>
  );
}

function ShotCard({ title, src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-[720px] shrink-0 rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 py-7 flex flex-col">
      <h3 className="shrink-0 text-[32px] font-bold text-white leading-none whitespace-nowrap">{title}</h3>

      <div className="flex-1 min-h-0 mt-7 rounded-[18px] overflow-hidden border border-white/[0.08] bg-white relative">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0B0D19]/45 border border-dashed border-white/20">
            <span className="text-[22px] font-bold tracking-widest text-white">请放入截图</span>
            <span className="text-[15px] font-mono text-white">public{src}</span>
          </div>
        ) : (
          <img src={src} alt={alt} onError={() => setFailed(true)} className="w-full h-full object-contain object-top" />
        )}
      </div>
    </div>
  );
}

/* 白底卡片是「AI 平台引用源面板」的仿真界面，卡内文字沿用截图里的深灰/黑，
   否则纯白文字在白底上不可见；卡外一律纯白。 */
function SourceRow({ item, index }) {
  return (
    <div
      style={{ height: ROW_H }}
      className="shrink-0 px-3.5 flex flex-col justify-center gap-[6px]"
    >
      <div className="flex items-center gap-2">
        <SiteFavicon site={item.site} />
        <span className="min-w-0 truncate text-[11px] leading-none" style={{ color: '#80868B' }}>
          {item.site}
        </span>
        <span className="flex-1" />
        <span
          className="shrink-0 w-[17px] h-[15px] rounded-[4px] flex items-center justify-center text-[10px] font-['Montserrat'] leading-none"
          style={{ background: '#F1F3F4', color: '#9AA0A6' }}
        >
          {index}
        </span>
      </div>
      <p className="truncate text-[13px] font-bold leading-none" style={{ color: '#202124' }}>
        {item.title}
      </p>
    </div>
  );
}

function SourceCard({ platform, logo, sources, note, accent, columns = 1, width, fullHeight }) {
  const perCol = Math.ceil(sources.length / columns);
  const cols = Array.from({ length: columns }, (_, i) => sources.slice(i * perCol, (i + 1) * perCol));

  return (
    <div className={`shrink-0 flex flex-col ${fullHeight ? 'h-full' : ''}`} style={{ width }}>
      <div className="shrink-0 h-[34px] flex items-center gap-3">
        <LogoPlate src={logo} alt={platform} />
        <span className="text-[26px] font-bold text-white leading-none whitespace-nowrap">{platform}</span>
        <span className="w-px h-[18px] bg-white/15" />
        <span
          className="text-[32px] font-black leading-none font-['Montserrat'] tracking-tight"
          style={{ color: accent ? '#4C8DFF' : '#FFFFFF' }}
        >
          {sources.length}
        </span>
        <span className="text-[19px] text-white leading-none whitespace-nowrap">条 · {note}</span>
        <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
      </div>

      <div
        className={`${fullHeight ? 'flex-1 min-h-0' : ''} mt-3 py-2 rounded-[18px] border border-white/[0.08] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden flex`}
        style={{ fontFamily: '-apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif' }}
      >
        {cols.map((col, ci) => (
          <div
            key={ci}
            className={`flex-1 min-w-0 flex flex-col divide-y divide-[#E8EAED] ${ci > 0 ? 'border-l border-[#E8EAED]' : ''}`}
          >
            {col.map((item, ri) => (
              <SourceRow key={`${item.title}-${ri}`} item={item} index={ci * perCol + ri + 1} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page_XiaoheCitationIllusion() {
  return (
    <SlideLayout title="小荷健康平台高引用率的假象">
      <div className="w-full h-full flex flex-col select-none animate-fadeIn font-['MiSans']">
        <h2 className="shrink-0 mb-7 text-[36px] font-bold text-white leading-none">
          小荷健康的高引用率，来自豆包<span className="text-[#4C8DFF]">超大的引用池</span>
          ——同一词条，豆包抓 30 条，DeepSeek 只抓 8 条
        </h2>

        <div className="flex-1 min-h-0 flex gap-7">
          <ShotCard title="豆包引用源分布" src={SHOT_SRC} alt="豆包引用源分布" />

          <div className="flex-1 min-w-0 flex flex-col">
            <div className="shrink-0 h-[34px] flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
              <span className="text-[22px] font-bold text-white leading-none whitespace-nowrap">
                同一词条「{ENTRY}」
              </span>
              <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
            </div>

            <div className="flex-1 min-h-0 mt-4 flex gap-6 items-stretch">
              <SourceCard
                platform="豆包"
                logo="/geo-platforms/doubao.png"
                sources={DOUBAO_SOURCES}
                note="小荷健康 13 条"
                accent
                columns={2}
                width={656}
                fullHeight
              />

              <SourceCard
                platform="DeepSeek"
                logo="/geo-platforms/deepseek.png"
                sources={DEEPSEEK_SOURCES}
                note="无小荷健康"
                width={412}
                fullHeight
              />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_XiaoheCitationIllusion.hideHeader = true;
