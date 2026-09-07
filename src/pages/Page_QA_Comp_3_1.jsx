import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Comp_3_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center">
                <QABanner
                    index={3}
                    text="伦理口碑风控：优化手段合规性、品牌声誉保护、长期生态合规，杜绝短期逐利行为"
                    className="mb-5"
                />
                <div className="flex gap-4">
                    <div className="flex-1">
                        <p className="mb-2 text-[1.05rem] leading-relaxed">（1）优化手段伦理底线</p>
                        <table className="w-full border-collapse border border-zinc-700 text-[0.95rem]">
                            <thead>
                                <tr className="bg-zinc-900 border-b border-zinc-700">
                                    <th className="p-2.5 text-left border-r border-zinc-700 w-1/4">红线</th>
                                    <th className="p-2.5 text-left">严苛承诺声明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">不造假</td><td className="p-2.5 text-zinc-400">不伪造伪功效语伪评价背书</td></tr>
                                <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">不诋毁</td><td className="p-2.5 text-zinc-400">不靠踩线攻击竞品抢夺排位</td></tr>
                                <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">不操纵</td><td className="p-2.5 text-zinc-400">不利用黑产漏洞干预大盘输出</td></tr>
                                <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">不欺骗</td><td className="p-2.5 text-zinc-400">绝不伪装成分党中立人坑蒙拐骗</td></tr>
                                <tr><td className="p-2.5 border-r border-zinc-800 font-bold">不侵权</td><td className="p-2.5 text-zinc-400">不洗不搬不抄斩断第三方内容权责纠纷</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex-1">
                        <p className="mb-2 text-[1.05rem] leading-relaxed">（3）长期生态合规誓言</p>
                        <table className="w-full border-collapse border border-zinc-700 text-[0.95rem]">
                            <thead>
                                <tr className="bg-zinc-900 border-b border-zinc-700">
                                    <th className="p-2.5 text-left border-r border-zinc-700 w-1/4">角色域</th>
                                    <th className="p-2.5 text-left">共赢守护期许</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">对客户方</td><td className="p-2.5 text-zinc-400">不许放空头支票不拉越界清单</td></tr>
                                <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">对 AI 平台</td><td className="p-2.5 text-zinc-400">遵守官方TOS，禁止恶意对抗，共建共荣</td></tr>
                                <tr className="border-b border-zinc-800"><td className="p-2.5 border-r border-zinc-800 font-bold">对内容界</td><td className="p-2.5 text-zinc-400">捍卫 UGC，捍卫真实，不注黑水</td></tr>
                                <tr><td className="p-2.5 border-r border-zinc-800 font-bold">对行业</td><td className="p-2.5 text-zinc-400">抵制并击碎暗箱内卷倾轧</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-zinc-400">（2）品牌保护机制涵盖事前审查、事中落库监控、事后 24 小时应急封堵断崖式公关响应，构筑最后一道城墙；（4）并在首签期做长线对齐，防止合作异化崩损品牌根基！</p>
            </div>
        </div>
    );
}
