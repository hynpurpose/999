import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Misc_1_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center gap-24">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-5">5、成本与性价比</h1>
                    <QABanner
                        index={1}
                        text="定价透明度：核查报价体系、收费模式、有无隐形消费，保障年框合作定价公允透明"
                        className="mb-5"
                    />
                    <p className="text-[1.05rem] leading-relaxed">
                        相关内容在前面方案和附件部分已经详细说明。
                    </p>
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-white mb-5">6、战略匹配度</h1>
                    <QABanner
                        index={1}
                        text="战略成长性：核查服务商技术迭代规划、与知乎 AI 战略契合度、长期合作稳定性"
                        className="mb-5"
                    />
                    <p className="text-[1.05rem] leading-relaxed">
                        相关内容在前面方案和附件部分已经详细说明。
                    </p>
                </div>
            </div>
        </div>
    );
}
