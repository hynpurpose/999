import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_CompanyIntro() {
  // Programmatic generation of 3D sweeping dotted mesh wave covering the full page background (Replicating the reference image)
  const renderFullPageWave = () => {
    const paths = [];
    const lines = 80;
    for (let i = 0; i < lines; i++) {
      const t = i / lines;
      
      // Sweep from bottom-center/left towards top-right across the 1920x1080 canvas
      const xStart = 450 + t * 700;
      const yStart = 1080;
      
      const xEnd = 1100 + t * 850;
      const yEnd = -100;
      
      // Control points for a sweeping, twisting 3D curtain wave
      const cp1x = 650 + Math.sin(t * Math.PI) * 450 + t * 250;
      const cp1y = 700 - t * 150;
      
      const cp2x = 1050 - Math.cos(t * Math.PI) * 550 + t * 150;
      const cp2y = 350 + t * 150;
      
      const pathData = `M ${xStart} ${yStart} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${xEnd} ${yEnd}`;
      
      // Subtle glowing opacity that peaks in the center of the wave (进一步拉高明暗对比，峰值提升至 72% 以增强光影对比)
      const opacity = (0.02 + Math.sin(t * Math.PI) * 0.70).toFixed(3);
      
      paths.push(
        <path
          key={i}
          d={pathData}
          fill="none"
          stroke="white"
          strokeWidth="1.1" // 稍微加粗，与参考图片一致
          strokeOpacity={opacity}
          strokeDasharray="1.5 5"
        />
      );
    }
    return paths;
  };

  return (
    <SlideLayout title="GEO索引未来是国内头部GEO服务商">
      {/* ── 背景纯色光晕 (改为纯白色柔光以实现纯单色高档光影，彻底剔除蓝色) ── */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-white/[0.03] blur-[200px] right-[-100px] bottom-[-200px] pointer-events-none z-0" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-white/[0.05] blur-[160px] right-[250px] top-[100px] pointer-events-none z-0" />

      {/* ── 全屏背景 3D 矢量波线底纹 (铺满全屏，呈对角扭曲流线，致敬参考图) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ width: '1920px', height: '1080px', left: '-40px', top: '-225px' }}>
        <svg 
          width="1920" 
          height="1080" 
          viewBox="0 0 1920 1080" 
          fill="none" 
          className="w-full h-full"
        >
          {renderFullPageWave()}
        </svg>
      </div>

      {/* ── 主排版容器 (无右侧线框阻隔，文字浮于底纹之上，起于 top: 90px) ── */}
      <div 
        className="absolute w-[1840px] select-none animate-fadeIn flex flex-col justify-start z-10 pl-0"
        style={{ top: '150px', height: '705px' }}
      >
        
        {/* ==================== 左侧/中偏左：超大字号文字内容 (宽 1100px，字号 38px) ==================== */}
        <div className="w-[1100px] flex flex-col justify-start gap-12 mt-6">
          <p className="text-white text-[38px] font-normal leading-[62px] font-['MiSans'] text-justify">
            <span className="text-white font-black">「GEO索引未来」</span>是国内头部GEO服务商，专注服务医疗、出海等高门槛行业的中大品牌客户，并已积累多个行业的实战经验。
          </p>
          
          <p className="text-white text-[38px] font-normal leading-[62px] font-['MiSans'] text-justify">
            是少有同时具备 <span className="text-white font-bold">GEO数据监测</span>、<span className="text-white font-bold">量化竞争模型</span>、<span className="text-white font-bold">内容优化Agent</span> 以及 <span className="text-white font-bold">用户评论分析系统</span> 的全栈自研能力的团队。
          </p>
        </div>

      </div>

      {/* ── 左下角小品牌签标 (使用绝对定位、细体与长横线 em-dash) ── */}
      <div className="absolute bottom-[20px] left-0 z-20">
        <span className="font-['Montserrat'] text-[18px] font-light text-zinc-400 tracking-[0.25em] uppercase select-none">
          — GEOINDEXFUTURE
        </span>
      </div>
    </SlideLayout>
  );
}

// Disable header navigation bar
Page_CompanyIntro.hideHeader = true;
