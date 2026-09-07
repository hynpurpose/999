import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 一、词条穷举及清洗（养胃舒颗粒 · 飞书多维表）
 * 本表 56 条按 14/14/14/14 拆 4 页。
 * ───────────────────────────────────────────────────────────── */

const COLUMNS = [
    { key: 'type', label: '类型', width: 190, type: 'select' },
    { key: 'name', label: '名称', width: 235, type: 'text' },
    { key: 'desc', label: '名称解释', width: 250, type: 'text' },
    { key: 'keyword', label: '词条生成', width: 260, type: 'text' },
    { key: 'flag', label: '词条清洗打标', width: 140, type: 'select' },
    { key: 'flagNote', label: '清洗打标说明', width: 333, type: 'text' },
];

const T = {
    fixed: { tag: 'neutral', text: '0.固定' },
    indMotive: { tag: 'blue', text: '1.行业-购买动机' },
    indScene: { tag: 'orange', text: '1.行业-场景画像' },
    indSelling: { tag: 'cyan', text: '1.行业-核心卖点' },
    indPain: { tag: 'yellow', text: '1.行业-核心痛点' },
    prodMotive: { tag: 'teal', text: '2.产品-购买动机' },
    prodScene: { tag: 'red', text: '2.产品-场景画像' },
    prodSelling: { tag: 'purple', text: '2.产品-核心卖点' },
    prodPain: { tag: 'green', text: '2.产品-核心痛点' },
    search: { tag: 'carmine', text: '3.搜索' },
    social: { tag: 'lime', text: '3.社媒' },
};

const F = {
    dup: { tag: 'grass', text: '重复' },
    noIntent: { tag: 'slate', text: '非购买意图' },
    offTarget: { tag: 'violet', text: '跟目标产品不符' },
    pain: { tag: 'blue', text: '产品痛点' },
    lowIntent: { tag: 'teal', text: '搜索意图低' },
    common: { tag: 'carmine', text: '品类共性' },
};

/* 反复出现的长文案抽出来，保证各页口径完全一致 */
const D = {
    basic: '最基本最常见的核心问法',
    chronicGastritis: '慢性胃炎患病人数庞大，确诊后除对症治疗外，普遍存在中成药调理需求；行业 GEO 优先场景含「慢性胃炎吃什么中成药」。',
    mildLongTerm: '企业资料将养胃舒定位为偏滋阴养胃、适合轻中度慢性胃部不适的调理；对外须避免「可长期随便吃」绝对化。',
    nourishYin: '说明书功能主治：滋阴养胃。用于慢性胃炎，胃脘灼热，隐隐作痛。',
    baidu: '来源于百度搜索数据（辅助参考，AI 拟制待替换）',
    xhs: '来源于小红书搜索数据（辅助参考，AI 拟制待替换）',
};

const N = {
    westernMed: '该问法答案空间以奥美拉唑、达喜、吗丁啉等对症西药为主；本品为滋阴养胃调理型中成药，难以进入该入口主流推荐。',
    broadStomach: '主词偏「胃药」宽口径，答案空间易落抑酸/促动力西药；本品为滋阴养胃调理型中成药，接不住该入口主流决策。',
    bareDrug: '裸问「吃什么药」易落四联/抑酸方案；本品为调理型中成药，接不住该宽口径。',
};

const ROWS = [
    { type: T.fixed, name: '口碑', desc: D.basic, keyword: '口碑好的养胃药推荐' },
    { type: T.fixed, name: '品牌排行榜', desc: D.basic, keyword: '养胃药品牌排行榜' },
    { type: T.fixed, name: '品牌推荐', desc: D.basic, keyword: '养胃药品牌推荐' },
    { type: T.fixed, name: '性价比', desc: D.basic, keyword: '性价比高的养胃药推荐' },
    { type: T.fixed, name: '效果', desc: D.basic, keyword: '效果好的养胃药推荐' },
    { type: T.fixed, name: '通义清单位', desc: '消费者清点养胃调理用药选择的基本问法', keyword: '养胃药有哪些' },
    { type: T.fixed, name: '品牌排行榜', desc: D.basic, keyword: '胃药品牌排行榜', flag: F.offTarget, flagNote: N.westernMed },
    { type: T.fixed, name: '品牌推荐', desc: D.basic, keyword: '胃药品牌推荐', flag: F.offTarget, flagNote: N.westernMed },
    { type: T.fixed, name: '效果', desc: D.basic, keyword: '效果好的胃药推荐', flag: F.offTarget, flagNote: N.westernMed },
    { type: T.indMotive, name: '慢性胃炎患病人群大、确诊后需要调理', desc: D.chronicGastritis, keyword: '慢性胃炎调理吃什么养胃药好' },
    { type: T.indMotive, name: '慢性胃炎患病人群大、确诊后需要调理', desc: D.chronicGastritis, keyword: '慢性胃炎调理用的中成药推荐' },
    { type: T.indMotive, name: '胃病年轻化，熬夜加班与饮食不规律', desc: '年轻上班族因熬夜、外卖导致胃部不适常态化，带动预防性、调理性用药增长。', keyword: '适合熬夜加班胃不好人群的养胃药推荐' },
    { type: T.indMotive, name: '慢性胃炎患病人群大、确诊后需要调理', desc: '慢性胃炎患病人数庞大，确诊后除对症治疗外，普遍存在中成药调理需求。', keyword: '慢性胃炎吃什么药好', flag: F.offTarget, flagNote: '裸问「吃什么药」答案易落四联疗法、抑酸西药；本品为滋阴养胃调理型中成药，接不住该宽口径主流决策。' },
    { type: T.indScene, name: '三餐不规律的上班族', desc: '不定时进食、外卖依赖是行业常见胃不适诱因与购药场景。', keyword: '适合三餐不规律上班族的养胃药推荐' },
];

export default function Page_KeywordExhaustClean() {
    return (
        <BitableWindow>
            <BitableView
                tableName="一、词条穷举及清洗"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS}
                startIndex={1}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}

const ROWS_2 = [
    { type: T.indScene, name: '中老年慢性胃炎人群', desc: '中老年慢性胃炎患病率高，是养胃中成药核心客群。', keyword: '适合中老年人的养胃药推荐' },
    { type: T.indScene, name: '喝酒应酬人群', desc: '应酬饮酒后胃部不适是养胃类中成药常见消费场景之一。', keyword: '经常喝酒应酬人群的养胃药推荐' },
    { type: T.indSelling, name: '中成药调理相对温和的品类认知', desc: '消费者对长期抑酸存在顾虑时，常转向中成药/中药组方调理，是品类层卖点。', keyword: '纯中药配方的养胃药推荐' },
    { type: T.indPain, name: '中成药证型繁多消费者不会选', desc: '养胃中成药按证型分型，普通消费者易买错证型。', keyword: '适合胃热口干人群的养胃药推荐' },
    { type: T.indPain, name: '慢性胃炎易反复', desc: '慢性胃炎病程长、易反复，患者需要可对证的调理方案而非仅短期抑酸。', keyword: '慢性胃炎反复发作调理用的中成药推荐' },
    { type: T.prodMotive, name: '999 / 华润三九品牌背书', desc: '华润三九胃药产品线认知度高，降低消费者在繁多证型中的选择成本。', keyword: '大品牌正规药企的养胃药推荐' },
    { type: T.prodMotive, name: 'OTC 甲类 + 医保乙类', desc: '本品为 OTC 甲类、国家医保乙类，直接影响药店可及与报销决策。', keyword: '医保能报销的养胃药推荐' },
    { type: T.prodMotive, name: '老胃病反复对证调理', desc: '说明书适应症含慢性胃炎；本品承接灼热隐痛方向的反复调理需求。', keyword: '老胃病常备的养胃药推荐' },
    { type: T.prodMotive, name: '轻中度 + 调理型产品定位', desc: D.mildLongTerm, keyword: '适合轻中度长期调理的养胃药推荐' },
    { type: T.prodMotive, name: '说明书锚定慢性胃炎', desc: '功能主治明确用于慢性胃炎。', keyword: '慢性胃炎调理用的养胃药推荐', flag: F.dup, flagNote: '与行业段「慢性胃炎调理用的中成药推荐」及「慢性胃炎调理吃什么养胃药好」意图重叠。' },
    { type: T.prodMotive, name: '轻中度 + 调理型产品定位', desc: D.mildLongTerm, keyword: '能长期吃的温和养胃药推荐', flag: F.offTarget, flagNote: '说明书要求服药三天症状未改善应停药就诊；「能长期吃/温和」易滑向可长期随便吃，本品无法承接该绝对化调理承诺向问法。' },
    { type: T.prodScene, name: '家庭常备备药', desc: 'OTC 属性支持家庭药箱常备；本品定位日常调理而非急救止痛。', keyword: '家庭常备的养胃药推荐' },
    { type: T.prodScene, name: '胃口差伴口干（滋阴方向伴随）', desc: '滋阴养胃组方逻辑下，口干、纳差可作为对证相关伴随表现理解，非说明书主治外扩。', keyword: '胃口差口干时吃的养胃药推荐' },
    { type: T.prodScene, name: '药店自选购买', desc: 'OTC 甲类可在药店直接购买，是本品主要购药路径。', keyword: '药店就能买到的养胃药推荐' },
];

export function Page_KeywordExhaustClean2() {
    return (
        <BitableWindow>
            <BitableView
                tableName="一、词条穷举及清洗"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_2}
                startIndex={15}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}

const ROWS_3 = [
    { type: T.prodScene, name: '轻中度胃部不适养护', desc: '知识库明确本品优先进入轻中度胃部不适、反复不适养护场景，而非所有胃病。', keyword: '适合轻中度胃部不适的养胃药推荐' },
    { type: T.prodScene, name: '饭后胃胀消化不良', desc: '饭后胀满是常见主诉。', keyword: '饭后胃胀没胃口吃什么养胃药', flag: F.offTarget, flagNote: '说明书未将胃胀、消化不良列为功能主治，知识库仅允许作慢性胃炎伴随症状弱关联，不能作为主治投放入口。' },
    { type: T.prodSelling, name: '低糖型规格可选', desc: '有低糖型规格（辅料仍含蔗糖，糖尿病患者须医师指导），为真实品规差异。', keyword: '低糖型的养胃药推荐' },
    { type: T.prodSelling, name: '滋阴养胃，对证胃脘灼热、隐隐作痛', desc: D.nourishYin, keyword: '胃部灼热隐隐作痛吃的中成药推荐' },
    { type: T.prodSelling, name: '颗粒剂开水冲服', desc: '剂型为颗粒，用法为开水冲服，便于日常调理携带与服用。', keyword: '服用方便的养胃药推荐' },
    { type: T.prodSelling, name: '安全性口语诉求', desc: '消费者常以「副作用小」作为选药口语。', keyword: '副作用小的养胃药推荐', flag: F.offTarget, flagNote: '说明书载明不良反应尚不明确，无法承接「副作用小」这类安全承诺向选药意图；该表述易滑向无副作用承诺。' },
    { type: T.prodSelling, name: '滋阴养胃，对证胃脘灼热、隐隐作痛', desc: D.nourishYin, keyword: '胃部灼热隐隐作痛吃的养胃药推荐', flag: F.dup, flagNote: '与「胃部灼热隐隐作痛吃的中成药推荐」搜索意图一致，中成药口径已覆盖该切面。' },
    { type: T.prodPain, name: '反酸烧心不对症', desc: '说明书未将反酸、烧心列为功能主治。', keyword: '治反酸烧心的养胃药推荐', flag: F.pain, flagNote: '产品不足：功能主治不含反酸烧心，抑酸西药更对症。' },
    { type: T.prodPain, name: '胃寒人群不适用', desc: '脾胃虚寒、胃脘凉痛对应姊妹产品温胃舒，非本品证型。', keyword: '适合胃寒怕凉人群的养胃药推荐', flag: F.pain, flagNote: '产品不足：本品对证灼热隐痛/气阴两虚方向，脾胃虚寒凉痛接不住。' },
    { type: T.prodPain, name: '调理型接不住快速起效预期', desc: '本品为调理型；说明书提示服药三天未改善应停药就诊。', keyword: '见效快的养胃药推荐', flag: F.pain, flagNote: '产品不足：调理型定位，接不住「见效快/快速止痛」预期。' },
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '1. 胃药哪个牌子好', flag: F.offTarget, flagNote: N.broadStomach },
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '2. 慢性胃炎吃什么药好', flag: F.offTarget, flagNote: N.bareDrug },
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '3. 胃不好吃什么药', flag: F.offTarget, flagNote: N.broadStomach },
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '4. 养胃舒颗粒的功效与作用', flag: F.noIntent, flagNote: '单品说明书/百科查询，非品类购买决策。' },
];

export function Page_KeywordExhaustClean3() {
    return (
        <BitableWindow>
            <BitableView
                tableName="一、词条穷举及清洗"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_3}
                startIndex={29}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}

const ROWS_4 = [
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '5. 胃胀气吃什么药', flag: F.offTarget, flagNote: '说明书未将胃胀列为功能主治，知识库仅允许弱关联，不能作主治入口。' },
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '6. 胃隐隐作痛是怎么回事', flag: F.noIntent, flagNote: '病因自查向，无品牌购买决策。' },
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '7. 养胃中成药有哪些', flag: F.dup, flagNote: '与子表 2 扩展「养胃中成药有哪些」及清单位意图重叠，搜索段作参考即可。' },
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '8. 胃药排行榜前十名', flag: F.offTarget, flagNote: N.broadStomach },
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '9. 养胃舒颗粒和温胃舒颗粒的区别', flag: F.noIntent, flagNote: '同门证型对比属产品教育/监测方向，非品类选购决策。' },
    { type: T.search, name: '百度搜索 Top10', desc: D.baidu, keyword: '10. 怎么养胃最有效', flag: F.noIntent, flagNote: '养生方法向，无具体品牌购买决策。' },
    { type: T.social, name: '小红书话题 Top', desc: D.xhs, keyword: '1. 养胃日常', flag: F.noIntent, flagNote: '生活方式分享，无具体选药决策。' },
    { type: T.social, name: '小红书话题 Top', desc: D.xhs, keyword: '2. 老胃病自救指南', flag: F.noIntent, flagNote: '经验合集向，非品牌购买决策。' },
    { type: T.social, name: '小红书话题 Top', desc: D.xhs, keyword: '3. 胃药推荐', flag: F.offTarget, flagNote: N.broadStomach },
    { type: T.social, name: '小红书话题 Top', desc: D.xhs, keyword: '4. 慢性胃炎调理经验分享', flag: F.noIntent, flagNote: '病友经验分享，无明确品牌购买决策。' },
    { type: T.social, name: '小红书话题 Top', desc: D.xhs, keyword: '5. 熬夜党怎么养胃', flag: F.noIntent, flagNote: '养生方法向；选药意图已由场景保留词覆盖。' },
    { type: T.social, name: '小红书话题 Top', desc: D.xhs, keyword: '6. 喝酒后胃难受怎么办', flag: F.noIntent, flagNote: '应急处置/养生向，非品类选购决策。' },
    { type: T.social, name: '小红书话题 Top', desc: D.xhs, keyword: '7. 养胃食谱', flag: F.noIntent, flagNote: '食疗向，与药品购买决策不符。' },
    { type: T.social, name: '小红书话题 Top', desc: D.xhs, keyword: '8. 胃镜检查经历', flag: F.noIntent, flagNote: '检查经历分享，无选药决策。' },
];

export function Page_KeywordExhaustClean4() {
    return (
        <BitableWindow>
            <BitableView
                tableName="一、词条穷举及清洗"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_4}
                startIndex={43}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}
