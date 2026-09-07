import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/* 三家都能帮客户联系上，但能谈的渠道性质不同：腾讯只能走官方商务，
   夸克更现实的是从内容合作方切入，百度本身就有共建与入驻的成熟流程。 */
const CHANNELS = [
    {
        name: '腾讯医典',
        logo: '/medical-platforms/tencent-yidian.png',
        channel: '官方商务对接',
        effort: '周期最长',
        text: '词条全部由医典自有医学团队生产、专家审核，不接受外部改写。只能通过腾讯健康的官方商务谈药械科普合作、补录药品词条。',
    },
    {
        name: '夸克健康',
        logo: '/medical-platforms/quark-health.png',
        channel: '合作机构牵线',
        effort: '看循证材料',
        text: '内容由权威机构与医生联合生产，还要做循证标注，门槛主要在材料上。更现实的做法是从它的内容合作方切入，我们帮你牵线，品牌把循证材料准备好。',
    },
    {
        name: '百度健康医典',
        logo: '/medical-platforms/baidu-jiankang.png',
        channel: '官方共建 / 入驻',
        effort: '最容易落地',
        text: '本身就是三甲医生与权威机构共建的体系，共建和入驻的流程相对成熟，是三家里最容易谈下来的一家，可以直接帮你对接百度健康。',
    },
];

/* 数据来源：GEO ONE 三九养胃舒颗粒项目（2026-08-07），140 场 AI 对话共产生 2358 次引用。
   平台归属按被引用文章的实际域名归集：小荷健康 xiaohe.cn、夸克健康 vt.quark.cn、
   百度健康 health.baidu.com 与 m.baidu.com/bh、腾讯医典 h5.baike.qq.com。 */
const CITATIONS = [
    { name: '小荷健康', share: '38.9%', ratio: 100, primary: true },
    { name: '夸克健康', share: '9.5%', ratio: 24.5 },
    { name: '百度健康医典', share: '2.0%', ratio: 5.1 },
    { name: '腾讯医典', share: '1.7%', ratio: 4.2 },
];

function LogoPlate({ src, alt }) {
    const [failed, setFailed] = useState(false);
    const fileName = src.split('/').pop();

    return (
        <div className="shrink-0 w-full h-[60px] rounded-[14px] bg-white flex items-center justify-center px-6">
            {failed ? (
                <span className="text-[14px] text-zinc-400 font-mono">{fileName}</span>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onError={() => setFailed(true)}
                    className="max-w-full object-contain"
                    style={{ maxHeight: '40px' }}
                />
            )}
        </div>
    );
}

function CitationRow({ item }) {
    return (
        <div className="flex items-center gap-6 h-[54px]">
            <span className="w-[210px] shrink-0 text-[26px] font-bold text-white leading-none whitespace-nowrap">
                {item.name}
            </span>
            <div className="flex-1 min-w-0 h-[16px] rounded-full bg-white/[0.06] overflow-hidden">
                <div
                    className={`h-full rounded-full ${item.primary ? 'bg-[#004CE5]' : 'bg-[#004CE5]/45'}`}
                    style={{ width: `${item.ratio}%` }}
                />
            </div>
            <span
                className={`w-[110px] shrink-0 text-right text-[28px] font-bold leading-none whitespace-nowrap ${
                    item.primary ? 'text-white' : 'text-[#004CE5]'
                }`}
            >
                {item.share}
            </span>
        </div>
    );
}

export default function Page_OtherPlatforms_Delivery() {
    return (
        <SlideLayout
            title="其他平台怎么投放"
            subtitle="我们都有对应的投放资源，但从真实引用数据看，现阶段先确认药品是否被收录即可"
        >
            <div className="w-full h-full flex flex-col gap-7 animate-fadeIn font-['MiSans'] pt-2">

                {/* ── 上：三家能谈的渠道各不相同 ── */}
                <div className="shrink-0 h-[322px] flex gap-7">
                    {CHANNELS.map((c) => (
                        <div
                            key={c.name}
                            className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.08] bg-white/[0.02] p-6 flex flex-col relative overflow-hidden"
                        >
                            <span className="absolute left-0 top-0 w-full h-[3px] bg-gradient-to-r from-[#004CE5] via-[#004CE5]/40 to-transparent" />

                            <LogoPlate src={c.logo} alt={c.name} />

                            <div className="shrink-0 mt-4 h-[40px] flex items-center gap-2">
                                <span className="h-[40px] px-4 rounded-[12px] bg-[#004CE5] text-[20px] font-bold text-white leading-[40px] whitespace-nowrap">
                                    {c.channel}
                                </span>
                                <span className="h-[40px] px-4 rounded-[12px] border border-white/20 text-[20px] text-white leading-[40px] whitespace-nowrap">
                                    {c.effort}
                                </span>
                            </div>

                            <p className="flex-1 min-h-0 mt-4 text-[22px] text-white leading-[34px]">
                                {c.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── 下：真实引用数据 + 现阶段做法 ── */}
                <div className="flex-1 min-h-0 flex gap-7">

                    {/* 数据 */}
                    <div className="flex-1 min-w-0 h-full rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 py-7 flex flex-col">
                        <div className="shrink-0 h-[34px] flex items-center gap-4">
                            <h3 className="text-[30px] font-bold text-white leading-[34px] whitespace-nowrap">
                                真实引用数据
                            </h3>
                            <span className="flex-1 h-px bg-white/[0.08]" />
                        </div>

                        <div className="flex-1 min-h-0 mt-5 flex flex-col justify-between">
                            <CitationRow item={CITATIONS[0]} />
                            <span className="h-px bg-white/[0.08]" />
                            {CITATIONS.slice(1).map((item) => (
                                <CitationRow key={item.name} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* 结论 */}
                    <div className="w-[620px] shrink-0 h-full rounded-[24px] border border-[#004CE5]/35 bg-[#004CE5]/[0.08] px-8 py-7 flex flex-col relative overflow-hidden">
                        <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#004CE5] to-transparent" />
                        <div className="pointer-events-none absolute -right-16 -top-20 w-[280px] h-[280px] rounded-full bg-[#004CE5]/15 blur-[60px]" />

                        <h3 className="shrink-0 text-[30px] font-bold text-white leading-[34px] relative">
                            现阶段只做一件事
                        </h3>

                        <p className="shrink-0 mt-5 text-[24px] text-white leading-[36px] relative">
                            另外三家合计只占 <span className="font-bold text-[#004CE5]">13.2%</span>
                            ，被引用的量远不如小荷健康，现阶段
                            <span className="font-bold">先确认药品是否被收录</span>就行。
                        </p>

                        <div className="flex-1 min-h-0 mt-6 flex flex-col justify-end gap-3 relative">
                            <div className="shrink-0 rounded-[16px] border border-[#004CE5]/25 bg-[#0B0D19]/45 px-6 h-[64px] flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0" />
                                <span className="text-[22px] text-white leading-none whitespace-nowrap">
                                    已收录：核对信息是否准确、完整
                                </span>
                            </div>
                            <div className="shrink-0 rounded-[16px] border border-[#004CE5]/25 bg-[#0B0D19]/45 px-6 h-[64px] flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0" />
                                <span className="text-[22px] text-white leading-none whitespace-nowrap">
                                    未收录：走共建渠道把词条补上
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_OtherPlatforms_Delivery.hideHeader = true;
