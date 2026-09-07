import React from 'react';

const PAIN_POINTS = [
    {
        no: '01',
        title: ['同门兄弟先打架', '「999 的养胃药」AI 先想到三九胃泰颗粒'],
        body: '用户问「999 有什么养胃药」，AI 的答案大多落在三九胃泰颗粒——C 端提及率 17.1% 对养胃舒 0.7%。还有平台把三九胃泰写成养胃舒的商品名，两个不同的药被当成一个。',
    },
    {
        no: '02',
        title: ['用户说的是症状', '说明书写的是证型'],
        body: '搜索框里问的是胃胀、反酸、胃疼；说明书能说的只有「滋阴养胃，用于慢性胃炎，胃脘灼热、隐隐作痛」。两套语言对不上，AI 很难把养胃舒放进候选清单。',
    },
    {
        no: '03',
        title: ['说明书没写的', 'AI 却当成事实讲'],
        body: '已监测到 16 条负面回答：把滋阴养胃的药性说成温补温燥、胃热灼痛者禁用，把国家医保乙类误称甲类，甚至否认药品目录里有这个药。',
    },
];

export default function Page_IndustryPainPoints() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header (Centered) */}
            <div className="w-full flex flex-col items-center justify-center text-center pt-10 pb-6 relative z-10 shrink-0">
                <h1 className="text-4xl lg:text-[40px] font-black text-white tracking-widest mb-4">胃药OTC赛道及GEO难点解析</h1>
                <p className="text-white text-lg lg:text-[22px] xl:text-[24px] font-bold leading-relaxed max-w-[1280px] tracking-wide">
                    结合慢性胃炎中成药赛道的特点，以及自我诊疗类产品在 AI 搜索里的信息结构，<br />
                    养胃舒颗粒在 GEO 里最先要解决的是这三个难点：
                </p>
            </div>

            {/* Content Container with 3-card grid */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-10 relative z-10 flex flex-col justify-center min-h-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 max-h-[620px]">

                    {PAIN_POINTS.map((item) => (
                        <div
                            key={item.no}
                            className="bg-zinc-900/60 border border-white/5 rounded-[2rem] p-8 flex flex-col relative overflow-hidden shadow-2xl hover:border-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-1 bg-white/60 mb-5 shrink-0"></div>
                            {/* 固定两行高度，保证三张卡的正文起始位置对齐 */}
                            <h3 className="text-[22px] lg:text-[24px] xl:text-[26px] font-bold text-white leading-snug tracking-wide min-h-[2.75em] shrink-0 z-10">
                                {item.title[0]}<br />
                                {item.title[1]}
                            </h3>
                            <p className="text-white text-[16px] lg:text-[18px] leading-[1.65] mt-4 z-10">
                                {item.body}
                            </p>
                            <div className="text-[100px] lg:text-[120px] font-black text-white/5 absolute bottom-2 right-6 pointer-events-none select-none leading-none">
                                {item.no}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
