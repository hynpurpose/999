import React from 'react';
import SlideLayout from '../../components/SlideLayout';

/* 原来的「网站架构优化建议 / 内容覆盖优化建议 / 标杆案例：瑞幸咖啡」三页合并成一页。
   左中两栏是十项落地清单（每项压成一句做法），右栏用瑞幸的四张截图当「做到位是什么样」的参照。
   数值取自桃李面包官网诊断报告与瑞幸实测，勿改。 */

const ARCH = [
  {
    no: '01',
    title: '结构清晰度',
    tag: 'TDK / OG',
    desc: 'title / description / keywords / og 补全，标题写清页面主题，不写「文章详情」。',
  },
  {
    no: '02',
    title: '标题层级',
    tag: 'H1 / H2',
    desc: '一页只留一个 H1，「公司介绍 / 产品展示 / 新闻资讯」等栏目标题统一降为 H2。',
  },
  {
    no: '03',
    title: '抓取权限',
    tag: 'robots.txt',
    desc: '放行产品页与 FAQ，屏蔽接口和验证码，把抓取边界写清楚而不是留一行空 Disallow。',
  },
  {
    no: '04',
    title: '网站地图',
    tag: 'sitemap.xml',
    desc: '生成覆盖产品、新闻的全站 sitemap，并在 robots.txt 里声明地址。',
  },
  {
    no: '05',
    title: '结构化数据',
    tag: 'Schema',
    desc: '首页标企业信息，产品页标配料与营养成分，FAQ 标问答、新闻标文章。',
  },
];

const CONTENT = [
  {
    no: '01',
    title: '产品信息',
    tag: '产品页',
    desc: '把锁在图片里的品名、克重、保质期、配料、营养成分写成文字，量化到可摘取的句子。',
  },
  {
    no: '02',
    title: '售后与服务',
    tag: '服务问答',
    desc: '补「开封后怎么存」「如何判断新鲜」「过期还能吃吗」，做成能整段引用的说明。',
  },
  {
    no: '03',
    title: '使用场景',
    tag: '场景页',
    desc: '为主力产品写早餐搭配、通勤携带这类场景短文，才进得去推荐类提问。',
  },
  {
    no: '04',
    title: 'FAQ / 科普',
    tag: '问答页',
    desc: '高频问题一问一答直接给答案——问答页是 AI 最偏爱引用的内容类型。',
  },
  {
    no: '05',
    title: '持续运营',
    tag: '长尾内容',
    desc: '少发获奖 PR，多做用户故事与场景专题，攒下能被反复引用的内容资产。',
  },
];

const SHOTS = [
  { src: '/web-case/luckin-robots.png', caption: 'robots 只放行 /products 与 /faq' },
  { src: '/web-case/luckin-products.png', caption: '产品页写明咖啡因 118.4mg' },
  { src: '/web-case/luckin-faq.png', caption: 'FAQ 按八类场景，答案给数字' },
  { src: '/web-case/luckin-open.png', caption: '正文写在 HTML 里，无登录墙' },
];

function ColumnHeader({ title, badge }) {
  return (
    <div className="shrink-0 flex items-center gap-4 rounded-[14px] bg-[#4C8DFF]/[0.12] border-l-[4px] border-[#4C8DFF] px-5 py-3">
      <span className="text-[30px] font-bold text-white leading-[40px] font-['AlimamaShuHeiTi'] whitespace-nowrap">
        {title}
      </span>
      <span className="ml-auto shrink-0 rounded-full bg-[#4C8DFF] px-4 py-1.5 text-[17px] font-bold text-white leading-none whitespace-nowrap">
        {badge}
      </span>
    </div>
  );
}

function AdviceRow({ item }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col justify-center rounded-[14px] border border-white/[0.10] bg-[#101425] px-5 py-3">
      <div className="flex items-baseline gap-2.5">
        <span className="shrink-0 text-[19px] font-bold text-[#4C8DFF] leading-none font-['Montserrat']">
          {item.no}
        </span>
        <span className="text-[27px] text-white leading-[34px] font-['AlimamaShuHeiTi'] whitespace-nowrap">
          {item.title}
        </span>
        <span className="ml-auto shrink-0 rounded-full bg-[#4C8DFF]/20 px-3 py-1 text-[15px] font-bold text-[#4C8DFF] leading-none font-['Montserrat'] whitespace-nowrap">
          {item.tag}
        </span>
      </div>
      <p className="mt-2 text-[19px] font-medium text-white leading-[27px]">{item.desc}</p>
    </div>
  );
}

function AdviceColumn({ title, badge, items }) {
  return (
    <div className="flex-1 min-w-0 h-full flex flex-col gap-3">
      <ColumnHeader title={title} badge={badge} />
      <div className="flex-1 min-h-0 flex flex-col gap-2.5">
        {items.map((item) => (
          <AdviceRow key={item.no} item={item} />
        ))}
      </div>
    </div>
  );
}

function ShotCard({ index, src, caption }) {
  return (
    <div className="min-w-0 min-h-0 flex flex-col">
      <div className="flex-1 min-h-0 rounded-[12px] overflow-hidden border border-white/[0.14] bg-black shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
        <img src={src} alt={caption} className="w-full h-full object-contain" />
      </div>
      <div className="shrink-0 mt-2 flex items-baseline gap-2">
        <span className="shrink-0 text-[17px] font-bold text-[#4C8DFF] leading-[24px] font-['Montserrat']">
          {index}
        </span>
        <span className="text-[17px] text-white leading-[24px]">{caption}</span>
      </div>
    </div>
  );
}

export default function Page_Advice_Combo() {
  return (
    <SlideLayout
      title="优化建议：架构修一次，内容一直做"
      subtitle="针对诊断未通过的十项：架构一次性修完，内容持续补齐——右边是做到位之后的样子"
    >
      <div className="w-full h-full flex gap-5 animate-fadeIn font-['MiSans']">
        <AdviceColumn title="网站架构" badge="一次性 · 技术团队" items={ARCH} />
        <AdviceColumn title="内容覆盖" badge="持续投入 · 收益最大" items={CONTENT} />

        <div className="w-[620px] shrink-0 h-full flex flex-col gap-3">
          <ColumnHeader title="标杆参照 · 瑞幸" badge="内容覆盖 49/50" />

          <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-x-3.5 gap-y-3">
            {SHOTS.map((shot, i) => (
              <ShotCard
                key={shot.src}
                index={String(i + 1).padStart(2, '0')}
                src={shot.src}
                caption={shot.caption}
              />
            ))}
          </div>

          <div className="shrink-0 rounded-[16px] border border-[#4C8DFF]/40 bg-[#4C8DFF]/[0.08] px-6 py-5">
            <p className="text-[24px] font-bold text-[#4C8DFF] leading-[32px]">
              产品事实和 FAQ 是投入产出最高的两件事
            </p>
            <p className="mt-2.5 text-[19px] text-white leading-[28px]">
              瑞幸的技术配置也没做满，sitemap 这项只拿 6/10；但这两类内容到位，AI 引用照样跟得上——不必等架构改造完再动内容。
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

Page_Advice_Combo.hideHeader = true;
