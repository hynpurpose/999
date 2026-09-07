import React from 'react';
import SlideLayout from '../components/SlideLayout';

/* ── 通用小组件 ── */

function StepBadge({ children }) {
  return (
    <span
      className="self-start text-white font-bold rounded-full"
      style={{ fontSize: '17px', background: '#004CE5', padding: '4px 16px', letterSpacing: '2px', marginBottom: '14px' }}
    >
      {children}
    </span>
  );
}

function Node({ left, focus, step, title, sub, note, children }) {
  return (
    <div
      className="absolute flex flex-col"
      style={{
        left, top: 0, width: '340px', height: '560px',
        background: 'rgba(24, 24, 27, 0.6)',
        border: `1.5px solid ${focus ? '#2E6BFF' : '#3A3A42'}`,
        borderRadius: '20px',
        boxShadow: focus ? '0 0 60px rgba(0, 76, 229, 0.22), inset 0 0 40px rgba(0, 76, 229, 0.05)' : 'none',
        padding: '28px 26px 24px',
      }}
    >
      <StepBadge>{step}</StepBadge>
      <h3 className="text-white font-bold" style={{ fontSize: '30px', lineHeight: '38px', marginBottom: '6px' }}>{title}</h3>
      <div style={{ fontSize: '18px', lineHeight: '26px', color: '#71717A', marginBottom: '18px' }}>{sub}</div>
      <div className="flex-1 relative">{children}</div>
      <div style={{ marginTop: '16px', fontSize: '16px', lineHeight: '24px', color: '#A1A1AA' }}>{note}</div>
    </div>
  );
}

function Pipe({ left, label, under }) {
  return (
    <div className="absolute" style={{ left, top: '235px', width: '152px', height: '4px', background: '#004CE5', borderRadius: '2px' }}>
      <div
        className="absolute"
        style={{
          right: '-2px', top: '50%', transform: 'translateY(-50%)',
          borderLeft: '14px solid #004CE5', borderTop: '9px solid transparent', borderBottom: '9px solid transparent',
        }}
      />
      <div
        className="absolute text-center font-bold"
        style={{ bottom: '18px', width: '152px', left: '50%', transform: 'translateX(-50%)', fontSize: '16px', lineHeight: '22px', color: '#6D9BFF' }}
      >
        {label}
      </div>
      <div
        className="absolute text-center"
        style={{ top: '16px', width: '152px', left: '50%', transform: 'translateX(-50%)', fontSize: '14px', lineHeight: '19px', color: '#71717A' }}
      >
        {under}
      </div>
    </div>
  );
}

function MoneyPipe({ left }) {
  return (
    <div className="absolute" style={{ left, top: '360px', width: '152px', height: '4px', background: '#1F8A5B', borderRadius: '2px' }}>
      <div
        className="absolute"
        style={{
          left: '-2px', top: '50%', transform: 'translateY(-50%)',
          borderRight: '14px solid #1F8A5B', borderTop: '9px solid transparent', borderBottom: '9px solid transparent',
        }}
      />
      <div
        className="absolute text-center font-bold"
        style={{ top: '16px', width: '152px', left: '50%', transform: 'translateX(-50%)', fontSize: '15px', color: '#34D399' }}
      >
        $ 付费购买
      </div>
    </div>
  );
}

function Entry({ icon, name, tag }) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ border: '1.5px solid #2E6BFF', background: 'rgba(0,76,229,0.12)', borderRadius: '10px', padding: '8px 6px', gap: '3px' }}
    >
      <span style={{ fontSize: '20px', lineHeight: 1 }}>{icon}</span>
      <span className="font-bold" style={{ fontSize: '15px', color: '#E3ECFF' }}>{name}</span>
      <span style={{ fontSize: '12px', color: '#6D9BFF' }}>{tag}</span>
    </div>
  );
}

function VolBar({ label, val, width, dim }) {
  return (
    <div className="flex flex-col" style={{ gap: '5px' }}>
      <div className="flex justify-between items-baseline">
        <span style={{ fontSize: '15px', color: dim ? '#8E8E99' : '#E4E4E7', fontWeight: dim ? 400 : 500 }}>{label}</span>
        <span className="font-bold" style={{ fontSize: '14px', color: dim ? '#71717A' : '#6D9BFF', fontWeight: dim ? 400 : 700 }}>{val}</span>
      </div>
      <div style={{ height: '18px', background: '#1D1D22', borderRadius: '4px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%', width, borderRadius: '4px',
            background: dim ? '#33333B' : 'linear-gradient(to right, #0038AB, #2E6BFF)',
          }}
        />
      </div>
    </div>
  );
}

function PickRow({ win, text, tag }) {
  return (
    <div
      className="flex justify-between items-center"
      style={{
        border: `1.5px solid ${win ? '#2E6BFF' : '#27272A'}`,
        background: win ? 'rgba(0, 76, 229, 0.12)' : 'transparent',
        borderRadius: '10px', padding: '10px 14px', fontSize: '16px', color: '#C9C9D1', gap: '8px',
      }}
    >
      <span>{text}</span>
      <span className="shrink-0" style={{ fontSize: '14px', color: win ? '#6D9BFF' : '#71717A', fontWeight: win ? 700 : 400 }}>{tag}</span>
    </div>
  );
}

export default function Page_SkyworthCrossCompare() {
  return (
    <SlideLayout
      title={
        <div className="flex flex-col gap-2">
          {/* H1 Main Title: 标准超大字号 86px */}
          <div className="flex items-center gap-6">
            <span className="w-[96px] h-[96px] rounded-full bg-teal-900/60 text-teal-300 border border-teal-850 text-[54px] font-bold font-['Montserrat'] flex items-center justify-center shrink-0">
              3
            </span>
            <span className="text-[86px] font-extrabold text-white tracking-wider font-['AlimamaShuHeiTi'] leading-none">
              清洗词条
            </span>
          </div>
          {/* Subtitle: 调整小标题字号到 48px，并与主标题完美对齐 pl-[120px]，设为白色 */}
          <div className="text-[48px] text-white font-normal font-['MiSans'] tracking-normal pl-[120px] mt-1 leading-none select-none">
            AI提问数据从哪来？一条买来的数据链
          </div>
        </div>
      }
    >
      {/* 主要排版区向下偏移至 top: 90px，给超大标题留出呼吸空间 */}
      <div className="absolute select-none" style={{ top: '90px', left: 0, width: '1840px', height: '560px' }}>

        {/* ── 节点 1：用户的日常工具 ── */}
        <Node
          left="0px"
          focus
          step="第 1 环 · 数据入口"
          title="用户的日常工具"
          sub="数百万真实用户，边用 AI 边被记录"
          note={<>安装时点下的「同意」，授权了这些工具<strong className="text-white font-bold">读取网页内容 / 键盘输入</strong>——对话就此被记录</>}
        >
          <div className="grid grid-cols-2" style={{ gap: '8px', marginBottom: '14px' }}>
            <Entry icon="🛡️" name="免费 VPN" tag="浏览器插件" />
            <Entry icon="⛔" name="广告拦截器" tag="浏览器插件" />
            <Entry icon="⌨️" name="输入法" tag="键盘应用" />
            <Entry icon="✨" name="AI 助手侧边栏" tag="浏览器插件" />
          </div>
          {/* 浏览器窗口示意 */}
          <div style={{ background: '#131316', border: '1px solid #303036', borderRadius: '12px', overflow: 'hidden' }}>
            <div className="flex items-center" style={{ height: '30px', background: '#1C1C21', padding: '0 10px', gap: '6px', borderBottom: '1px solid #2A2A30' }}>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#3F3F46' }} />
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#3F3F46' }} />
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#3F3F46' }} />
              <span className="flex-1 flex items-center" style={{ height: '18px', background: '#26262C', borderRadius: '5px', fontSize: '12px', color: '#8E8E99', padding: '0 9px' }}>chatgpt.com</span>
            </div>
            <div className="flex flex-col" style={{ padding: '10px 12px', gap: '7px' }}>
              <span className="self-end" style={{ maxWidth: '90%', fontSize: '14px', lineHeight: '20px', padding: '6px 11px', borderRadius: '9px 9px 3px 9px', background: '#004CE5', color: '#FFF' }}>好看的电视推荐？</span>
              <span className="self-start" style={{ maxWidth: '90%', fontSize: '14px', lineHeight: '20px', padding: '6px 11px', borderRadius: '9px 9px 9px 3px', background: '#232329', color: '#C9C9D1' }}>推荐这几款壁纸电视：……</span>
            </div>
          </div>
        </Node>

        <Pipe left="344px" label="抓取对话上传" under={<>提问 + 回答<br />+ 时间戳</>} />

        {/* ── 节点 2：数据商 ── */}
        <Node
          left="500px"
          step="第 2 环 · 收数据的"
          title="数据商"
          sub="Datos、BiScience 这类点击流数据公司"
          note={<>从成百上千个插件回收对话，清洗后<strong className="text-white font-bold">按月出售给任何买家</strong></>}
        >
          <div className="h-full flex flex-col items-center justify-center" style={{ gap: '12px' }}>
            <div className="relative" style={{ width: '210px', height: '96px' }}>
              <div className="absolute flex items-center justify-center" style={{ top: 0, left: 0, right: 0, height: '30px', background: 'rgba(46,107,255,0.14)', border: '1.5px solid #2E6BFF', borderRadius: '8px 8px 3px 3px', fontSize: '14px', color: '#B9C6EE' }}>汇集海量原始对话</div>
              <div className="absolute flex items-center justify-center" style={{ top: '34px', left: '36px', right: '36px', height: '26px', background: 'rgba(46,107,255,0.2)', border: '1.5px solid #2E6BFF', borderRadius: '3px', fontSize: '13px', color: '#C3CDEF' }}>去除个人身份信息</div>
              <div className="absolute flex items-center justify-center" style={{ top: '64px', left: '66px', right: '66px', height: '28px', background: 'rgba(46,107,255,0.3)', border: '1.5px solid #2E6BFF', borderRadius: '3px 3px 8px 8px', fontSize: '13px', color: '#DCE4FA' }}>匿名化</div>
            </div>
            <div className="flex items-center" style={{ border: '1.5px dashed #34D399', borderRadius: '10px', padding: '8px 16px', fontSize: '15px', color: '#B9F3D8', gap: '8px' }}>📦 打包成数据商品</div>
          </div>
        </Node>

        <Pipe left="844px" label="授权出售" under={<>每月数千万条<br />真实对话</>} />
        <MoneyPipe left="844px" />

        {/* ── 节点 3：Profound ── */}
        <Node
          left="1000px"
          step="第 3 环 · 买数据的"
          title="Profound"
          sub="自己不采集，花钱买数据、建模还原全人群"
          note={<>统计建模校正人群偏差 → <strong className="text-white font-bold">每类问题被问了多少次</strong>，每周更新</>}
        >
          <div className="h-full flex flex-col justify-center" style={{ gap: '18px' }}>
            <VolBar label="好看的电视" val="8,200 次/月" width="96%" />
            <VolBar label="画质好的电视" val="5,100 次/月" width="62%" />
            <VolBar label="设计外观好的电视" val="310 次/月" width="12%" dim />
            <VolBar label="防蓝光电视" val="190 次/月" width="8%" dim />
          </div>
        </Node>

        <Pipe left="1344px" label="购买数据" under={<>真实提问量<br />逐条可查</>} />
        <MoneyPipe left="1344px" />

        {/* ── 节点 4：我们 ── */}
        <Node
          left="1500px"
          focus
          step="第 4 环 · 也是买数据的"
          title="我们的选词"
          sub="直接购买这份数据——和 Profound 向数据商买数据，是同一条链上的同一种买法"
          note={<>哪个词用户真的在问、问得多，<strong className="text-white font-bold">数据说了算</strong>，不靠拍脑袋</>}
        >
          <div className="h-full flex flex-col justify-center" style={{ gap: '12px' }}>
            <PickRow win text="✓ 好看的电视推荐" tag="量大 · 优先做" />
            <PickRow text="设计外观好的电视" tag="被上面覆盖" />
            <PickRow text="✗ 安装方便的电视" tag="痛点词 · 不做" />
          </div>
        </Node>
      </div>

      {/* ── 底部总结条 ── */}
      {/* 紧贴 content bottom 底部线排列 (bottom: 0px) */}
      <div
        className="absolute select-none"
        style={{ left: 0, right: 0, bottom: '0px', borderLeft: '6px solid #004CE5', padding: '6px 0 6px 28px', fontSize: '25px', lineHeight: '38px', color: '#D4D4D8' }}
      >
        <strong className="text-white font-bold">一句话：</strong>AI 提问量不是猜的——几百万真实用户的 VPN、广告拦截器、输入法把对话记下来，数据商洗干净打包出售，Profound 花钱买回来数一数，<span className="font-bold" style={{ color: '#6D9BFF' }}>我们再把这份数据买过来，替客户挑出真正值得做的词。</span>
      </div>
    </SlideLayout>
  );
}

// Disable slide header/navigation bar for this presentation page
Page_SkyworthCrossCompare.hideHeader = true;
