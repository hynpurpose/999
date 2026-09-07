import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const PLATFORMS = [
    {
        name: '腾讯医典',
        logo: '/medical-platforms/tencent-yidian.png',
        status: '未收录',
        included: false,
        note: '搜索药品名无对应词条',
        src: '/medical-platforms/tencent-yidian-brand.png',
    },
    {
        name: '夸克健康',
        logo: '/medical-platforms/quark-health.png',
        status: '已收录',
        included: true,
        note: '',
        src: '/medical-platforms/quark-health-brand.png',
        url: 'https://p.quark.cn/0387f345/index?uc_biz_str=OPT%3ABACK_BTN_STYLE%400%7COPT%3AIMMERSIVE%401&uc_param_str=dnntnwvepffrbijbprsvchgputdemennosstodcaaapcgidsdieinipixsnxkp&query=VdB%2BLV7w7lHHEp%2Fo7ZfF0Oga%2FnyaZuRD5LBtIgfRtHjgBpWE%2FRLecJNIC6UkqFnE&url=VdB%2BLV7w7lHHEp%2Fo7ZfF0D%2FGcYWgqmiNaiq3f%2BIRmtc7JNIsl94koHTR8eHMsTLKqSzqsi2k7F6y7WIkOLMefhnpQ7q5dPlWkvktuO0Z2WYw8RyT6exVqm8aXjG9CjHm&token=917919073364&version=v1.5&skip_cache=0&chid=1786589388181-7781722259011649-8185148446653535&highlight=%E5%85%BB%E8%83%83%E8%88%92%E8%83%B6%E5%9B%8A%0A%0A%23+%E4%B8%BB%E8%A6%81%E6%88%90%E5%88%86%0A%0A%E5%85%9A%E5%8F%82%E3%80%81%E9%99%88%E7%9A%AE%E3%80%81%E9%BB%84%E7%B2%BE%EF%BC%88%E8%92%B8%EF%BC%89%E3%80%81%E5%B1%B1%E8%8D%AF%E3%80%81%E7%8E%84%E5%8F%82%E3%80%81%E4%B9%8C%E6%A2%85%E3%80%81%E5%B1%B1%E6%A5%82%EF%BC%88%E7%82%92%EF%BC%89%E3%80%81%E5%8C%97%E6%B2%99%E5%8F%82%E3%80%81%E5%B9%B2%E5%A7%9C%E3%80%81%E8%8F%9F%E4%B8%9D%E5%AD%90%E3%80%81%E7%99%BD%E6%9C%AF%EF%BC%88%E7%82%92%EF%BC%89%E3%80%82&_iteration_version=0.0.39',
    },
    {
        name: '百度健康医典',
        logo: '/medical-platforms/baidu-jiankang.png',
        status: '已收录',
        included: true,
        note: '',
        src: '/medical-platforms/baidu-jiankang-brand.png',
        url: 'https://m.baidu.com/bh/m/detail/ar_6877785596918519949?frsrcid=rec',
    },
];

const ZIRUN_PLATFORMS = [
    {
        name: '腾讯医典',
        logo: '/medical-platforms/tencent-yidian.png',
        status: '已收录',
        included: true,
        note: '',
        src: '/medical-platforms/tencent-yidian-brand-zirun.png',
        url: 'https://h5.baike.qq.com/mobile/drug_combine.html?id=dg347219032cnfan&searchid=d37fd4d560887ae6826bf73a6150c6dc&VNK=63da7147',
    },
    {
        name: '夸克健康',
        logo: '/medical-platforms/quark-health.png',
        status: '已收录',
        included: true,
        note: '',
        src: '/medical-platforms/quark-health-brand-zirun.png',
        url: 'https://p.quark.cn/0387f345/index?uc_biz_str=OPT%3ABACK_BTN_STYLE%400%7COPT%3AIMMERSIVE%401&uc_param_str=dnntnwvepffrbijbprsvchgputdemennosstodcaaapcgidsdieinipixsnxkp&query=VdB%2BLV7w7lHHEp%2Fo7ZfF0IbLpnekiQ1XyCx7Y5Rbkbm9boxQGJ6px3na%2BKtQNasI&url=VdB%2BLV7w7lHHEp%2Fo7ZfF0D%2FGcYWgqmiNaiq3f%2BIRmtc7JNIsl94koHTR8eHMsTLKUmG0YVCpSd%2B7NdY2i6i92iieWU1ogBWa93Tmoi2NrCw4DV1HhS38hQ1FMj%2FpViA3&token=917918141603&version=v1.5&skip_cache=0&chid=1786589890419-01858741091670535-8353426425258738&highlight=%E6%9C%AC%E5%93%81%E5%8F%AF%E4%BF%83%E8%BF%9B%E5%B9%B2%E7%9C%BC%E7%97%87%E6%82%A3%E8%80%85%E7%9A%84%E6%B3%AA%E6%B6%B2%E5%88%86%E6%B3%8C%EF%BC%8C%E9%80%82%E7%94%A8%E4%BA%8E%E4%B8%8E%E8%A7%92%E7%BB%93%E8%86%9C%E5%B9%B2%E7%87%A5%E7%97%87%E7%9B%B8%E5%85%B3%E7%9A%84%E7%9C%BC%E9%83%A8%E7%82%8E%E7%97%87%E6%89%80%E5%AF%BC%E8%87%B4%E7%9A%84%E6%B3%AA%E6%B6%B2%E7%94%9F%E6%88%90%E5%87%8F%E5%B0%91%E7%9A%84%E6%82%A3%E8%80%85%E3%80%82%0A%0A&_iteration_version=0.0.39',
    },
    {
        name: '百度健康医典',
        logo: '/medical-platforms/baidu-jiankang.png',
        status: '已收录',
        included: true,
        note: '',
        src: '/medical-platforms/baidu-jiankang-brand-zirun.png',
        url: 'https://health.baidu.com/m/detail/ar_6502416192577765250',
    },
];

function LogoPlate({ src, alt }) {
    const [failed, setFailed] = useState(false);
    const fileName = src.split('/').pop();

    return (
        <div className="shrink-0 w-[240px] h-[52px] rounded-[12px] bg-white flex items-center justify-center px-4">
            {failed ? (
                <span className="text-[13px] text-zinc-400 font-mono">{fileName}</span>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setFailed(true)}
                    className="max-w-full object-contain"
                    style={{ maxHeight: '34px' }}
                />
            )}
        </div>
    );
}

function ShotFrame({ src, alt, href }) {
    const [failed, setFailed] = useState(false);
    const fileName = src.split('/').pop();
    const Wrap = href ? 'a' : 'div';
    const wrapProps = href
        ? {
              href,
              target: '_blank',
              rel: 'noopener noreferrer',
              onClick: (e) => e.stopPropagation(),
          }
        : {};

    return (
        <Wrap
            {...wrapProps}
            className="flex-1 min-h-0 w-full flex items-stretch justify-center relative pointer-events-auto"
        >
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[86%] rounded-full bg-[#004CE5]/[0.12] blur-[48px]" />

            {failed ? (
                <div
                    className="relative h-full rounded-[24px] border border-dashed border-white/20 flex flex-col items-center justify-center gap-3 bg-[#0B0D19]/45"
                    style={{ aspectRatio: '1320 / 2262' }}
                >
                    <span className="text-[22px] font-bold text-white tracking-widest">图片位</span>
                    <span className="text-[16px] text-white font-mono">{fileName}</span>
                </div>
            ) : (
                <div className="relative h-full rounded-[24px] p-[1px] bg-gradient-to-b from-white/25 via-white/10 to-[#004CE5]/40 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                    <img
                        src={src}
                        alt={alt}
                        onError={() => setFailed(true)}
                        className="h-full w-auto max-w-full object-contain rounded-[23px] bg-white"
                    />
                </div>
            )}
        </Wrap>
    );
}

function BrandStatusLayout({ title, subtitle, platforms }) {
    return (
        <SlideLayout title={title} subtitle={subtitle}>
            <div className="w-full h-full flex gap-7 animate-fadeIn font-['MiSans'] pt-2">
                {platforms.map((p) => (
                    <div
                        key={p.name}
                        className={`flex-1 min-w-0 h-full rounded-[24px] border p-5 flex flex-col relative overflow-hidden ${
                            p.included
                                ? 'border-[#004CE5]/35 bg-[#004CE5]/[0.07]'
                                : 'border-white/[0.08] bg-white/[0.02]'
                        }`}
                    >
                        <span
                            className={`absolute left-0 top-0 w-full h-[3px] bg-gradient-to-r ${
                                p.included
                                    ? 'from-[#004CE5] via-[#004CE5]/40 to-transparent'
                                    : 'from-white/30 via-white/10 to-transparent'
                            }`}
                        />

                        <div className="shrink-0 mb-5 h-[52px] flex items-center justify-center gap-4">
                            <LogoPlate src={p.logo} alt={p.name} />
                            <span
                                className={`h-[40px] px-4 rounded-[10px] text-[22px] font-bold leading-[40px] whitespace-nowrap ${
                                    p.included
                                        ? 'bg-[#004CE5] text-white'
                                        : 'border border-white/20 text-white'
                                }`}
                            >
                                {p.status}
                            </span>
                        </div>

                        <ShotFrame src={p.src} alt={p.name} href={p.url} />

                        {/* 备注 / 收录链接：三栏等高，保证图片底边对齐 */}
                        <div className="shrink-0 mt-auto pt-5 h-[34px] flex items-center justify-center">
                            {p.url ? (
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-[24px] leading-[34px] text-[#4C8DFF] underline underline-offset-4 pointer-events-auto"
                                >
                                    收录链接
                                </a>
                            ) : p.note ? (
                                <span className="text-[18px] text-white leading-[28px] whitespace-nowrap">
                                    {p.note}
                                </span>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </SlideLayout>
    );
}

export default function Page_OtherPlatforms_BrandStatus() {
    return (
        <BrandStatusLayout
            title="目标药品在其他平台的收录情况"
            subtitle="三九养胃舒：腾讯医典目前未收录，夸克健康与百度健康医典均已收录"
            platforms={PLATFORMS}
        />
    );
}

Page_OtherPlatforms_BrandStatus.hideHeader = true;

export function Page_OtherPlatforms_BrandStatus_Zirun() {
    return (
        <BrandStatusLayout
            title="目标药品在其他平台的收录情况"
            subtitle="兹润环孢素滴眼液：腾讯医典、夸克健康、百度健康医典均已收录"
            platforms={ZIRUN_PLATFORMS}
        />
    );
}

Page_OtherPlatforms_BrandStatus_Zirun.hideHeader = true;
