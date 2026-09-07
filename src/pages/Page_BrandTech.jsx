import React from 'react';

export default function Page_BrandTech() {
    return (
        <div className="w-full h-full flex flex-col relative bg-black overflow-hidden text-white font-sans px-20 pt-2 pb-2">
            <div className="w-full mb-5 relative z-10 flex flex-col items-start shrink-0">
                <h1
                    className="text-[56px] font-black text-white tracking-tight"
                    style={{ lineHeight: '1.15' }}
                >
                    品牌核心<br />竞争优势
                </h1>
            </div>

            <div className="flex-1 w-full relative z-10 grid grid-cols-3 gap-6 items-stretch min-h-0">

                <div className="bg-[#111] border border-white/10 rounded-[1.75rem] p-8 flex flex-col relative min-h-0 overflow-hidden">
                    <div className="text-6xl text-white tracking-tighter mb-5 font-['AlimamaShuHeiTi'] shrink-0">01</div>
                    <h3 className="text-[32px] font-bold text-white mb-4 tracking-wide leading-snug shrink-0">
                        999 品牌打底<br />胃肠品类零售领先
                    </h3>
                    <p className="text-white text-[22px] leading-[1.65] flex-1 min-h-0 text-pretty">
                        「三九」与「999」商标本就源于 1985 年的三九胃泰，胃肠是这个品牌的起家品类。集团长期位居中国非处方药生产企业榜首；2025 年零售药店终端中成药胃药 TOP20 中，集团有 4 个独家品种上榜，养胃舒颗粒排名第 3。这份国民度，是养胃舒在货架和搜索结果里被选中的底层资产。
                    </p>
                    <div className="absolute bottom-7 right-7 text-white/30">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#0033aa] to-[#001144] border border-blue-400/20 rounded-[1.75rem] p-8 flex flex-col relative min-h-0 overflow-hidden">
                    <div className="text-6xl text-white tracking-tighter mb-5 font-['AlimamaShuHeiTi'] shrink-0">02</div>
                    <h3 className="text-[32px] font-bold text-white mb-4 tracking-wide leading-snug shrink-0">
                        一病两药<br />证型分工清楚
                    </h3>
                    <p className="text-white text-[22px] leading-[1.65] flex-1 min-h-0 text-pretty">
                        温胃舒管胃寒、养胃舒管胃阴不足，同厂生产、寒热相对，在国内胃药里是少见的辨证分型组合。这意味着养胃舒天生带着一个清晰的「谁适合、谁不适合」的说法——比泛泛讲「养胃」更具体，也更容易被 AI 拆成结构化答案去引用。
                    </p>
                    <div className="absolute bottom-7 right-7 text-white/30">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#004CE5] to-[#002288] border border-blue-400/30 rounded-[1.75rem] p-8 flex flex-col relative min-h-0 overflow-hidden">
                    <div className="text-6xl text-white tracking-tighter mb-5 font-['AlimamaShuHeiTi'] shrink-0">03</div>
                    <h3 className="text-[32px] font-bold text-white mb-4 tracking-wide leading-snug shrink-0">
                        疾病场景明确<br />可及性高
                    </h3>
                    <p className="text-white text-[22px] leading-[1.65] flex-1 min-h-0 text-pretty">
                        用户在搜索框里输入的往往是病名——「慢性胃炎吃什么药」。养胃舒的适应症里直接写着慢性胃炎，AI 检索时能一次对上，不需要再绕一层解释。它又是甲类 OTC，药店可自行购买，医保乙类还能报销。AI 给完建议，用户当天就能拿到药，中间没有断点。
                    </p>
                    <div className="absolute bottom-7 right-7 text-white/30">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" /></svg>
                    </div>
                </div>

            </div>
        </div>
    );
}
