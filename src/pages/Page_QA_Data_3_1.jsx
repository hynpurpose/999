import React from 'react';
import QABanner from '../components/QABanner';

export default function Page_QA_Data_3_1() {
    return (
        <div className="w-full h-full bg-[#050505] text-zinc-300 font-sans p-16 overflow-hidden flex flex-col">
            <div className="w-full max-w-[1500px] mx-auto flex-1 flex flex-col justify-center gap-12">
                <div>
                    <QABanner
                        index={3}
                        text="实战能力：行业标杆案例的多样性、客户续约口碑、服务规模，验证行业适配性与实操经验；实战能力数据，500 强企业案例，100万年框客户"
                        className="mb-5"
                    />
                    <p className="text-[1.05rem] leading-relaxed">
                        500 强、100w 以上合作客户：古今贡酒、方太、皇家宠物食品、百度。客户口碑很好，续约率目前为止 100%。
                    </p>
                </div>

                <div>
                    <QABanner
                        index={4}
                        text="效果保障 SLA：效果承诺、未达标解决方式、售后兜底等履约保障条款，降低合作风险"
                        className="mb-5"
                    />
                    <p className="text-[1.05rem] leading-relaxed">
                    通过明确效果目标、验收标准、未达标补救流程及售后支持机制，建立完整的履约保障体系。若项目在约定周期内未达目标，乙方将优先进行复盘、补救与策略加固；在完成约定补救措施后仍未达标的，可依据合同约定启动相应退款或补偿机制，以降低甲方合作风险，提升合作确定性。
                    </p>
                </div>
            </div>
        </div>
    );
}
