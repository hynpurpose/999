import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_TeamEndorsement() {
  const medicalLogos = [
    { src: '/medical-platforms/xiaohe-health.png', label: '小荷健康' },
    { src: '/medical-platforms/tencent-yidian.png', label: '腾讯医典' },
    { src: '/medical-platforms/quark-health.png', label: '夸克健康' },
    { src: '/medical-platforms/baidu-jiankang.png', label: '百度健康医典' },
    { src: '/medical-platforms/haodf.png', label: '好大夫在线' },
    { src: '/medical-platforms/dxy-doctor.png', label: '丁香医生' },
    { src: '/medical-platforms/baidu-duxingxuan.png', label: '百度度星选' },
    { src: '/medical-platforms/dayi.png', label: '中国医药信息查询平台' },
  ];

  const orgLogos = [
    { src: '/Back/endorsement-tp-1.png', label: '艾瑞咨询' },
    { src: '/Back/endorsement-tp-2.png', label: '尼尔森' },
    { src: '/Back/endorsement-tp-3.png', label: '易观分析' },
    { src: '/Back/endorsement-tp-4.png', label: '数说故事' },
    { src: '/Back/endorsement-tp-5.png', label: 'QuestMobile' },
    { src: '/Back/endorsement-tp-6.png', label: 'Kantar 凯度' },
    { src: '/Back/endorsement-inst-1.png', label: '中国广告协会' },
    { src: '/Back/endorsement-inst-2.png', label: '中国信通院' },
    { src: '/Back/endorsement-inst-3.png', label: 'CAA 中国高校联合' },
    { src: '/Back/endorsement-inst-4.png', label: '人工智能产业联盟' },
    { src: '/Back/endorsement-inst-5.png', label: '北京智源 BAAI' },
    { src: '/Back/endorsement-inst-6.png', label: '甲子光年' },
  ];

  const LogoSlot = ({ src, label, width = '100%', height = '100%', fontSize = 18 }) => {
    const [hasError, setHasError] = React.useState(false);

    return (
      <div
        className="bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center relative overflow-hidden group hover:border-zinc-300 transition-colors shadow-sm"
        style={{ width, height }}
      >
        {!hasError ? (
          <img
            src={src}
            alt={label}
            className="max-w-[80%] max-h-[75%] object-contain transition-all duration-300 opacity-90 group-hover:opacity-100"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-2 text-center">
            <span
              className="text-zinc-800 font-medium font-['MiSans'] tracking-wide"
              style={{ fontSize }}
            >
              {label}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <SlideLayout title="团队背书">
      <div className="absolute top-[5px] left-0 w-full text-[36px] text-zinc-400 font-medium font-['MiSans'] leading-relaxed">
        给钱就能曝光的合作，<span className="text-white font-bold">我们不合作</span>。我们只跟<span className="text-white font-bold">真正独立、专业</span>的第三方机构，以及医药行业权威平台合作。
      </div>

      <div
        className="absolute left-0 w-full flex items-stretch gap-6 animate-fadeIn"
        style={{ top: '80px', height: '620px' }}
      >
        {/* 第1列：医药行业独家资源 */}
        <div className="flex-[1.15] min-w-0 flex flex-col border border-blue-500/80 rounded-2xl overflow-hidden bg-zinc-950/40 backdrop-blur-md">
          <div className="h-[64px] shrink-0 flex items-center px-6 border-b border-blue-500/80 bg-blue-950/30">
            <span
              className="text-white font-bold tracking-wide font-['AlimamaShuHeiTi']"
              style={{ fontSize: '30px' }}
            >
              医药行业独家资源
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center px-5 py-5 min-h-0">
            <div className="grid grid-cols-2 grid-rows-4 gap-3 w-full h-full">
              {medicalLogos.map((logo, idx) => (
                <LogoSlot
                  key={idx}
                  src={logo.src}
                  label={logo.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 第2列：第三方专业机构 */}
        <div className="flex-[0.95] min-w-0 flex flex-col border border-white/15 rounded-2xl overflow-hidden bg-zinc-950/30 backdrop-blur-md">
          <div className="h-[64px] shrink-0 flex items-center px-6 border-b border-white/10 bg-white/[0.04]">
            <span
              className="text-zinc-300 font-bold tracking-wide font-['AlimamaShuHeiTi']"
              style={{ fontSize: '26px' }}
            >
              第三方专业机构
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center px-4 py-4 min-h-0">
            <div className="grid grid-cols-2 gap-2.5 w-full h-full">
              {orgLogos.map((logo, idx) => (
                <LogoSlot
                  key={idx}
                  src={logo.src}
                  label={logo.label}
                  fontSize={14}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 第3列：其他水榜 */}
        <div className="w-[340px] shrink-0 flex flex-col border border-red-900/60 rounded-2xl overflow-hidden bg-red-950/5 backdrop-blur-md relative">
          <div className="h-[64px] flex items-center px-6 border-b border-red-900/60 bg-red-950/20">
            <span
              className="text-red-400 font-bold tracking-wide font-['AlimamaShuHeiTi']"
              style={{ fontSize: '28px' }}
            >
              其他水榜
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center p-7 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none pointer-events-none">
              <span className="font-sans font-bold text-[380px] leading-none text-red-500">✕</span>
            </div>

            <div className="z-10 flex flex-col items-center justify-center relative py-10 px-5 bg-red-950/10 border border-red-900/30 rounded-xl w-full">
              <span className="text-zinc-400 line-through decoration-red-500 decoration-2 text-[20px] font-medium font-['MiSans'] mb-6 text-center">
                给钱就能曝光的合作
              </span>
              <div className="border-2 border-red-500 text-red-500 font-bold font-['AlimamaShuHeiTi'] text-[28px] px-5 py-2 rounded-lg rotate-[-8deg] uppercase tracking-widest shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                我们不合作
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
