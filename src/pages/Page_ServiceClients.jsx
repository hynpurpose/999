import React from 'react';
import SlideLayout from '../components/SlideLayout';

export default function Page_ServiceClients() {
  const clientGroups = [
    {
      category: '大健康与医疗',
      logos: [
        { src: '/images/client-health-diqiao.png', label: '迪巧' },
        { src: '/images/client-health-xingqi.png', label: '兴齐眼药' },
        { src: '/images/client-health-ufh.png', label: '和睦家医疗' },
        { src: '/images/client-health-astrazeneca.png', label: '阿斯利康' },
        { src: '/images/client-health-jdhealth.png', label: '京东健康' },
        { src: '/images/client-health-byhealth.png', label: '汤臣倍健' }
      ],
      extraLogos: [
        { src: '/images/client-health-3sbio.png', label: '三生生物' },
        { src: '/images/client-health-zirun.png', label: '兹润' },
        { src: '/images/client-health-aierbode.png', label: '爱博诺德' },
        { src: '/images/client-health-alcon.png', label: '爱尔康' },
        { src: '/images/client-health-taiji.png', label: '太极药业' }
      ]
    },
    {
      category: '家居家电',
      logos: [
        { src: '/brand-logos/skyworth.png', label: '创维' },
        { src: '/images/client-home-mus.png', label: '慕思' },
        { src: '/images/client-home-fotile.png', label: '方太厨具' },
        { src: '/images/client-home-daikin.png', label: '大金空调' }
      ]
    },
    {
      category: '快消/零售',
      logos: [
        { src: '/images/client-fmcg-gujing.png', label: '古井贡酒' },
        { src: '/images/client-fmcg-jingjiu.png', label: '中国劲酒' },
        { src: '/images/client-fmcg-taoli.png', label: '桃李面包' }
      ]
    },
    {
      category: '3C数码/AI智能',
      logos: [
        { src: '/images/client-3c-oppo.png', label: 'OPPO' },
        { src: '/images/client-3c-edifier.png', label: '漫步者' },
        { src: '/images/client-3c-qingxian.png', label: '清闲' }
      ]
    },
    {
      category: '宠物',
      logos: [
        { src: '/images/client-pet-royalcanin.png', label: '皇家宠物' },
        { src: '/images/client-pet-simu.png', label: '思慕宠物' }
      ]
    },
    {
      category: '互联网/SAAS',
      logos: [
        { src: '/images/client-saas-cainiao.png', label: '菜鸟' },
        { src: '/images/client-saas-kingdee.png', label: '金蝶' },
        { src: '/images/client-saas-fadada.png', label: '法大大' }
      ]
    },
    {
      category: '教育/金融',
      logos: [
        { src: '/images/client-edufin-meten.png', label: '美联英语' },
        { src: '/images/client-edufin-immersivetranslate.png', label: '沉浸式翻译' },
        { src: '/images/client-edufin-pingan.png', label: '平安银行' }
      ]
    },
    {
      category: '房地产/汽车',
      logos: [
        { src: '/images/client-estate-shenye.png', label: '深业集团' },
        { src: '/images/client-estate-bmwmini.png', label: '宝马mini' }
      ]
    }
  ];

  const partnerLogos = [
    { src: '/images/partner-baidu.png', label: '百度营销' },
    { src: '/images/partner-jdmall.png', label: '京东mall' },
    { src: '/images/partner-havas.png', label: '哈瓦斯' },
    { src: '/images/partner-langzhi.png', label: '朗知传媒' }
  ];

  // Helper component to render a logo slot with fallback placeholder styling
  const LogoSlot = ({ src, label, width = '150px', height = '64px', unifyColor = false }) => {
    const [hasError, setHasError] = React.useState(false);

    return (
      <div
        className="bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center relative overflow-hidden group hover:border-zinc-300 transition-colors"
        style={{ width, height }}
      >
        {!hasError ? (
          <img
            src={src}
            alt={label}
            className={`max-w-[80%] max-h-[75%] object-contain transition-all duration-300 ${unifyColor ? 'brightness-0 invert opacity-60 group-hover:opacity-100' : 'opacity-90 group-hover:opacity-100'
              }`}
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-[14px] text-zinc-650 font-mono font-bold tracking-wide">
              {label}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <SlideLayout title="服务客户">
      <div className="w-full h-full flex items-center justify-between animate-fadeIn">
        {/* Left Side: Client and Partner Blocks */}
        <div className="flex-1 flex flex-col gap-5 pr-8 justify-center h-full">

          {/* Top Block: Head Clients (8 industry groups, up to 5 slots per group) */}
          <div className="flex flex-col gap-4">

            {/* Prominent Highlight Banner (sole heading, above logos) */}
            <div className="self-start flex items-baseline gap-3">
              <span
                className="text-blue-300 font-extrabold tracking-wide font-['AlimamaShuHeiTi']"
                style={{ fontSize: '38px', lineHeight: '44px' }}
              >
                直接做过GEO的头部品牌
              </span>
              <span
                className="text-white font-extrabold font-['AlimamaShuHeiTi']"
                style={{ fontSize: '30px', lineHeight: '38px' }}
              >
                （不拿其他logo充数）
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {clientGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-6">
                  {/* Category Label */}
                  <span
                    className="text-zinc-400 font-medium font-['MiSans'] leading-tight shrink-0"
                    style={{ fontSize: '22px', width: '176px' }}
                  >
                    {group.category}
                  </span>
                  {/* Logos (trailing ellipsis only on the last group) */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-3">
                      {group.logos.map((logo, logoIdx) => (
                        <LogoSlot
                          key={logoIdx}
                          src={logo.src}
                          label={logo.label}
                          width="152px"
                          height="62px"
                          unifyColor={false}
                        />
                      ))}
                      {groupIdx === clientGroups.length - 1 && (
                        <div
                          className="bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center"
                          style={{ width: '152px', height: '62px' }}
                        >
                          <span
                            className="text-zinc-500 font-extrabold leading-none tracking-[0.15em]"
                            style={{ fontSize: '30px' }}
                          >
                            ···
                          </span>
                        </div>
                      )}
                    </div>
                    {group.extraLogos?.length > 0 && (
                      <div className="flex items-center gap-3">
                        {group.extraLogos.map((logo, logoIdx) => (
                          <LogoSlot
                            key={logoIdx}
                            src={logo.src}
                            label={logo.label}
                            width="152px"
                            height="62px"
                            unifyColor={false}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Block: Partners */}
          <div className="flex flex-col gap-3">
            <h3
              className="text-white font-extrabold tracking-wide font-['AlimamaShuHeiTi'] border-b border-zinc-800/85 pb-1.5"
              style={{ fontSize: '30px', lineHeight: '38px' }}
            >
              合作方
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {partnerLogos.map((logo, i) => (
                <LogoSlot
                  key={i}
                  src={logo.src}
                  label={logo.label}
                  width="180px"
                  height="66px"
                  unifyColor={false}
                />
              ))}
              {/* Text Card */}
              <div
                className="rounded-xl flex items-center justify-center bg-zinc-800/60 ring-1 ring-white/10 px-6"
                style={{ height: '66px' }}
              >
                <span className="text-[20px] text-zinc-200 font-semibold font-['MiSans'] whitespace-nowrap">
                  广告公司、咨询公司
                  <span className="text-zinc-500 tracking-[0.15em] pl-1.5">···</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Framed Title & Image Container */}
        <div
          className="absolute flex flex-col rounded-3xl overflow-hidden bg-zinc-900 ring-1 ring-white/10 shadow-2xl shadow-black/60"
          style={{ top: '-80px', right: '0', width: '600px', height: '875px' }}
        >
          {/* Header with Title + Note */}
          <div className="flex flex-col gap-3 px-8 py-6 border-b border-white/10">
            <span
              className="text-white font-bold tracking-wide font-['AlimamaShuHeiTi'] text-center"
              style={{ fontSize: '42px' }}
            >
              2个百万客户
            </span>
            <span className="text-white font-bold font-['MiSans'] text-[24px] leading-snug text-center">
              据不完全统计，近半年来预算到百万的真实GEO项目不超过5个，<span className="underline decoration-white/70 decoration-2 underline-offset-4">我们拿到2个</span>。
            </span>
          </div>

          {/* Image Area */}
          <div className="flex-1 overflow-hidden flex items-center justify-center bg-black">
            <img
              src="/images/service_clients.png"
              alt="Service Clients"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

// Disable header navigation bar
Page_ServiceClients.hideHeader = true;
