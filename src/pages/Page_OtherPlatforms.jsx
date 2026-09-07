import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const PLATFORMS = [
    {
        name: '腾讯医典',
        logo: '/medical-platforms/tencent-yidian.png',
        intro: '腾讯自建的医学内容库，联合三甲医生与专业机构生产，经医学团队审核后入库；覆盖疾病、症状、药品、检查等结构化词条，元宝的医疗回答取自这里。',
        src: '/medical-platforms/tencent-yidian-page.png',
    },
    {
        name: '夸克健康',
        logo: '/medical-platforms/quark-health.png',
        intro: '阿里夸克搜索建设的健康内容体系，联合权威机构与医生生产并做循证标注；以疾病、用药、检查等知识库为主，千问的医疗答案以此为依据。',
        src: '/medical-platforms/quark-health-page.png',
    },
    {
        name: '百度健康医典',
        logo: '/medical-platforms/baidu-jiankang.png',
        intro: '百度医疗内容的主体，由三甲医生与权威机构共建、专家审核后入库；覆盖疾病、症状、药品、就医指南等词条与科普，文心的医疗回答多出自这里。',
        src: '/medical-platforms/baidu-jiankang-page.png',
    },
    {
        name: '蚂蚁阿福医学文献库',
        logo: '/medical-platforms/afu-medlib.png',
        intro: '蚂蚁沉淀的医学文献与专业资料库，联合权威机构与临床专家整理并做来源标注；以指南、文献、用药资料为主，阿福的医疗回答从这里检索。',
        src: '/medical-platforms/afu-medlib-page.png',
    },
];

function LogoPlate({ src, alt }) {
    const [failed, setFailed] = useState(false);
    const fileName = src.split('/').pop();

    return (
        <div className="shrink-0 h-[40px] rounded-[10px] bg-white flex items-center justify-center px-4">
            {failed ? (
                <span className="text-[13px] text-zinc-400 font-mono">{fileName}</span>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setFailed(true)}
                    className="max-w-[200px] object-contain"
                    style={{ maxHeight: '26px' }}
                />
            )}
        </div>
    );
}

function ShotFrame({ src, alt }) {
    const [failed, setFailed] = useState(false);
    const fileName = src.split('/').pop();

    return (
        <div className="flex-1 min-h-0 w-full relative rounded-[16px] overflow-hidden border border-white/[0.08] bg-[#0B0D19]/45">
            {failed ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-white/20 rounded-[16px]">
                    <span className="text-[22px] font-bold text-white tracking-widest">图片位</span>
                    <span className="text-[16px] text-white/40 font-mono">{fileName}</span>
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setFailed(true)}
                    className="absolute inset-0 w-full h-full object-cover object-top bg-white"
                />
            )}
        </div>
    );
}

export default function Page_OtherPlatforms() {
    return (
        <SlideLayout
            title="其他平台介绍"
            subtitle="与小荷健康类似，另外四家AI平台各自绑定了自家的医疗内容平台"
        >
            <div className="w-full h-full flex gap-5 animate-fadeIn font-['MiSans'] pt-2">
                {PLATFORMS.map((p) => (
                    <div
                        key={p.name}
                        className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.08] bg-white/[0.02] px-4 pt-4 pb-4 flex flex-col relative overflow-hidden"
                    >
                        <span className="absolute left-0 top-0 w-full h-[3px] bg-gradient-to-r from-[#004CE5] via-[#004CE5]/40 to-transparent" />

                        <LogoPlate src={p.logo} alt={p.name} />

                        <p className="shrink-0 mt-3 mb-3 text-[20px] text-white leading-[30px]">
                            {p.intro}
                        </p>

                        <ShotFrame src={p.src} alt={p.name} />
                    </div>
                ))}
            </div>
        </SlideLayout>
    );
}

Page_OtherPlatforms.hideHeader = true;
