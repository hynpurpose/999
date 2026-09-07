import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const PLATFORMS = [
    {
        ai: '豆包',
        aiLogo: '/geo-platforms/doubao.png',
        site: '小荷健康',
        siteLogo: '/medical-platforms/xiaohe-health.png',
        intro: '字节的健康内容都收在这里，豆包的医学知识库就是它。',
    },
    {
        ai: '元宝',
        aiLogo: '/geo-platforms/yuanbao.png',
        site: '腾讯医典',
        siteLogo: '/medical-platforms/tencent-yidian.png',
        intro: '腾讯自建的医学词条库，元宝的医疗回答从这里取内容。',
    },
    {
        ai: '千问',
        aiLogo: '/geo-platforms/qwen.png',
        site: '夸克健康',
        siteLogo: '/medical-platforms/quark-health.png',
        intro: '阿里的医学知识与循证体系，千问的医疗答案以它为依据。',
    },
    {
        ai: '文心',
        aiLogo: '/geo-platforms/wenxin.png',
        site: '百度健康医典',
        siteLogo: '/medical-platforms/baidu-jiankang.png',
        intro: '百度医疗内容的主体，文心的医疗回答大多出自这套体系。',
    },
    {
        ai: '蚂蚁阿福',
        aiLogo: '/geo-platforms/afu.png',
        site: '蚂蚁阿福医学文献库',
        siteLogo: '/medical-platforms/afu-medlib.png',
        intro: '蚂蚁沉淀的医学文献与专业资料，阿福的医疗回答从这里检索。',
    },
];

function AiLogo({ src, alt }) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div className="w-[56px] h-[56px] rounded-full border border-dashed border-white/25 bg-white/5 flex items-center justify-center shrink-0">
                <span className="text-[12px] text-white font-bold">LOGO</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="w-[56px] h-[56px] rounded-full object-contain shrink-0"
        />
    );
}

function LogoPlate({ src, alt }) {
    const [failed, setFailed] = useState(false);
    const fileName = src.split('/').pop();

    return (
        <div className="w-[460px] h-[112px] shrink-0 rounded-[20px] bg-white flex items-center justify-start px-10">
            {failed ? (
                <div className="w-full h-full my-3 rounded-xl border border-dashed border-zinc-300 flex flex-col items-center justify-center gap-1">
                    <span className="text-[14px] text-zinc-400 tracking-widest font-bold">图片位</span>
                    <span className="text-[13px] text-zinc-400 font-mono">{fileName}</span>
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setFailed(true)}
                    className="h-[72px] w-auto max-w-full object-contain object-left"
                />
            )}
        </div>
    );
}

export default function Page_MedPlatform_AIMapping() {
    return (
        <SlideLayout
            title="各AI模型对应的医疗信息平台"
            subtitle="五家大模型各自绑定了一个自建医疗内容平台，医疗回答优先依据这些平台"
        >
            <div className="w-full h-full flex flex-col gap-[20px] animate-fadeIn font-['MiSans']">
                {PLATFORMS.map((p, i) => (
                    <div
                        key={p.ai}
                        className="flex-1 min-h-0 relative flex items-center rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 overflow-hidden"
                    >
                        {/* 左侧强调条 */}
                        <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#004CE5] to-transparent" />

                        {/* 序号 */}
                        <span
                            className="w-[120px] shrink-0 text-center text-white font-black leading-none select-none font-['Montserrat']"
                            style={{ fontSize: '58px' }}
                        >
                            {String(i + 1).padStart(2, '0')}
                        </span>

                        {/* AI 模型 */}
                        <div className="w-[270px] shrink-0 flex items-center gap-4 pr-6">
                            <AiLogo src={p.aiLogo} alt={p.ai} />
                            <span className="text-[36px] font-bold text-white leading-none whitespace-nowrap">
                                {p.ai}
                            </span>
                        </div>

                        {/* 指向 */}
                        <div className="w-[96px] shrink-0 flex items-center">
                            <span className="flex-1 h-px bg-gradient-to-r from-[#004CE5]/10 to-[#004CE5]/70" />
                            <span className="w-2 h-2 rounded-full bg-[#004CE5] shrink-0" />
                        </div>

                        {/* 平台 logo */}
                        <LogoPlate src={p.siteLogo} alt={p.site} />

                        {/* 平台名 + 一句话 */}
                        <div className="flex-1 min-w-0 pl-10 pr-8 flex flex-col gap-3">
                            <div className="flex items-center gap-4">
                                <h3 className="text-[36px] font-bold text-white leading-none">
                                    {p.site}
                                </h3>
                                <span className="w-9 h-[3px] rounded-full bg-[#004CE5] shrink-0" />
                            </div>
                            <p className="text-[24px] text-white leading-[34px]">{p.intro}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SlideLayout>
    );
}

Page_MedPlatform_AIMapping.hideHeader = true;
