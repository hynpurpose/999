import React from 'react';

const patientWords = [
    { text: '胃里烧得慌吃什么药', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '慢性胃炎吃什么中成药', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-100', opacity: 'opacity-100' },
    { text: '养胃舒和温胃舒哪个好', size: 'text-[1.7rem]', weight: 'font-bold', color: 'text-[#004CE5]', opacity: 'opacity-95' },
    { text: '一饿就隐隐疼', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '养胃舒能治胃胀吗', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '胃反酸能吃养胃舒吗', size: 'text-[1.5rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '三九胃泰和养胃舒区别', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-[#004CE5]/80', opacity: 'opacity-90' },
    { text: '要吃多久', size: 'text-[1.4rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '有副作用吗', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '饭前吃还是饭后吃', size: 'text-[1.3rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '吃了三天没用怎么办', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '多少钱一盒', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '孕妇能吃吗', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '糖尿病能吃吗', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '颗粒和胶囊哪个好', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-[#004CE5]/70', opacity: 'opacity-80' },
    { text: '烧心', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '老胃病', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '胃阴虚是什么意思', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-95' },
    { text: '一盒能吃几天', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '萎缩性胃炎能吃吗', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-[#004CE5]/90', opacity: 'opacity-90' },
    { text: '幽门螺杆菌吃什么', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '养胃真的有用吗', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '是处方药吗', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '医保能报吗', size: 'text-[1.3rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-85' },
];

const hcpWords = [
    { text: '滋阴养胃', size: 'text-[1.9rem]', weight: 'font-black', color: 'text-white', opacity: 'opacity-100' },
    { text: '慢性胃炎', size: 'text-[1.7rem]', weight: 'font-black', color: 'text-zinc-100', opacity: 'opacity-100' },
    { text: '胃阴不足证', size: 'text-[1.7rem]', weight: 'font-bold', color: 'text-[#004CE5]', opacity: 'opacity-95' },
    { text: '胃脘灼热', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-100' },
    { text: '胃脘隐隐作痛', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '辨证分型', size: 'text-[1.5rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-90' },
    { text: '一次 1～2 袋 一日 2 次', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '开水冲服', size: 'text-[1.4rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '服药 3 天无改善需就医', size: 'text-[1.4rem]', weight: 'font-bold', color: 'text-[#004CE5]/80', opacity: 'opacity-90' },
    { text: '寒热属性相反', size: 'text-[1.3rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '孕妇慎用', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-300', opacity: 'opacity-85' },
    { text: '糖尿病需医师指导', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '儿童需成人监护', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '湿热胃痛证需医师指导', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-[#004CE5]/70', opacity: 'opacity-80' },
    { text: '辅料含蔗糖', size: 'text-[1.3rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '11 味组方', size: 'text-[1.6rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: 'OTC 甲类', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-90' },
    { text: '北沙参 玄参 黄精 养阴益胃', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-zinc-300', opacity: 'opacity-95' },
    { text: '党参 白术 山药 健脾益气', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-400', opacity: 'opacity-85' },
    { text: '寒温并用 阴阳并调', size: 'text-[1.4rem]', weight: 'font-semibold', color: 'text-[#004CE5]/90', opacity: 'opacity-90' },
    { text: '医保乙类', size: 'text-[1.3rem]', weight: 'font-medium', color: 'text-zinc-300', opacity: 'opacity-80' },
    { text: '不良反应尚不明确', size: 'text-[1.5rem]', weight: 'font-bold', color: 'text-white', opacity: 'opacity-95' },
    { text: '性状改变禁止使用', size: 'text-[1.2rem]', weight: 'font-normal', color: 'text-zinc-500', opacity: 'opacity-80' },
    { text: '药物相互作用咨询医师', size: 'text-[1.3rem]', weight: 'font-semibold', color: 'text-zinc-200', opacity: 'opacity-85' },
];

export default function Page_PainPoint1_WordCloud() {
    const getScaledSize = (sizeStr) => {
        const match = sizeStr.match(/text-\[(\d+(\.\d+)?)rem\]/);
        if (match) {
            const val = parseFloat(match[1]);
            const scaledVal = Math.max(val * 0.92, 0.90);
            return `${scaledVal.toFixed(2)}rem`;
        }
        return '1rem';
    };

    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            {/* Header Section */}
            <div className="w-full px-12 sm:px-16 pt-4 pb-2 relative z-10 shrink-0 text-left">
                <div className="inline-block border border-white/20 bg-white/5 rounded-full px-4 py-1 mb-2">
                    <span className="text-white text-sm tracking-widest font-bold mr-2">困境</span>
                    <span className="text-[#004CE5] font-black text-base">02</span>
                </div>
                <h1 className="text-[32px] xl:text-[36px] font-bold text-white tracking-wider">
                    用户说的是症状，说明书写的是证型
                </h1>
            </div>

            {/* Content Container */}
            <div className="flex-1 w-full px-12 sm:px-16 pb-3 relative z-10 flex flex-col justify-between min-h-0">
                <p className="text-white text-xl lg:text-[24px] xl:text-[26px] font-bold leading-relaxed tracking-wide mb-4 shrink-0">
                    用户说「胃里烧得慌」，说明书写「胃脘灼热、胃阴不足」。中间隔着辨证这一层，翻译权就交给了 AI。
                </p>

                {/* Main Content: Word Clouds */}
                <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0 pb-4 items-stretch">

                    {/* Left Cloud: Consumer */}
                    <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#004CE5]/40"></div>

                        <div className="flex items-center gap-4 mb-4 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-[#004CE5]/10 flex items-center justify-center border border-[#004CE5]/30">
                                <span className="text-[#004CE5] font-black text-sm">用户</span>
                            </div>
                            <div>
                                <h3 className="text-lg xl:text-xl font-bold text-white tracking-wider">用户问的是：「我这算什么毛病、该吃哪一个」</h3>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-3">
                            {patientWords.map((word, idx) => (
                                <span
                                    key={idx}
                                    style={{ fontSize: getScaledSize(word.size) }}
                                    className={`${word.weight} ${word.color} ${word.opacity} hover:scale-110 hover:text-white hover:opacity-100 transition-all duration-300 cursor-default inline-block`}
                                >
                                    {word.text}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* VS Divider */}
                    <div className="hidden lg:flex flex-col items-center justify-center shrink-0 w-12 relative">
                        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent absolute"></div>
                        <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center z-10 shadow-2xl">
                            <span className="text-lg text-zinc-400 italic font-bold">VS</span>
                        </div>
                    </div>

                    {/* Right Cloud: Label & Pharmacist */}
                    <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>

                        <div className="flex items-center gap-4 mb-4 shrink-0">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/20">
                                <span className="text-white font-black text-sm">药师</span>
                            </div>
                            <div>
                                <h3 className="text-lg xl:text-xl font-bold text-white tracking-wider">说明书与药师讲的是：证型、适应证、用药边界</h3>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-wrap justify-center content-center items-center gap-x-4 gap-y-3">
                            {hcpWords.map((word, idx) => (
                                <span
                                    key={idx}
                                    style={{ fontSize: getScaledSize(word.size) }}
                                    className={`${word.weight} ${word.color} ${word.opacity} hover:scale-110 hover:text-white hover:opacity-100 transition-all duration-300 cursor-default inline-block`}
                                >
                                    {word.text}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Solution Section */}
                <div className="shrink-0 bg-gradient-to-r from-[#004CE5]/10 via-black to-[#0a0a0a] border border-[#004CE5]/30 rounded-2xl p-5 shadow-[0_0_20px_rgba(0,76,229,0.15)] relative overflow-hidden flex items-center gap-4">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#004CE5] shadow-[0_0_10px_rgba(0,76,229,0.5)]"></div>
                    <div className="bg-[#004CE5]/10 border border-[#004CE5]/30 px-4 py-1.5 rounded-lg text-[#004CE5] text-base xl:text-lg font-black tracking-widest shrink-0 uppercase">
                        解法
                    </div>
                    <p className="text-white text-lg lg:text-[20px] font-bold leading-relaxed flex-1">
                        把日常说法和说明书用语一条条对应起来，并挂上用法用量与就医提示，让 AI 顺着口语也能指回养胃舒。
                    </p>
                </div>
            </div>
        </div>
    );
}
