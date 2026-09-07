import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 三、词条确定及关联提示词（养胃舒颗粒 · 飞书多维表）
 * 一页 9 行左右铺满；35 条按 9/9/9/8 拆 4 页。
 * ───────────────────────────────────────────────────────────── */

const COLUMNS = [
    { key: 'keyword', label: '词条生成', width: 300, type: 'text' },
    { key: 'c1', label: '词条分类1', width: 99, type: 'none' },
    { key: 'c2', label: '词条分类2', width: 133, type: 'select' },
    { key: 'order', label: '词条排序', width: 88, type: 'none' },
    { key: 'orderNote', label: '排序说明', width: 148, type: 'text' },
    { key: 'prompts', label: '关联提示词', width: 640, type: 'text' },
];

const A = {
    general: { tag: 'neutral', text: '通用' },
    scene: { tag: 'blue', text: '场景' },
    expand: { tag: 'orange', text: '扩展' },
};

const B = {
    rank: { tag: 'neutral', text: '品牌排行榜' },
    reco: { tag: 'blue', text: '品牌推荐' },
    quality: { tag: 'orange', text: '质量' },
    value: { tag: 'cyan', text: '性价比' },
    word: { tag: 'yellow', text: '口碑' },
    motive: { tag: 'teal', text: '购买动机' },
    persona: { tag: 'red', text: '场景画像' },
    selling: { tag: 'purple', text: '卖点' },
    pain: { tag: 'green', text: '痛点' },
    synonym: { tag: 'lime', text: '通义名称替换' },
};

const O1 = { tag: 'neutral', text: '①' };
const O2 = { tag: 'blue', text: '②' };

const NOTE = {
    basic: '最基本问法',
    persona: '产品核心人群定位',
    edge: '产品核心竞争力',
    pain: '产品核心痛点',
    extra: '搜索/社媒补充',
};

const ROWS = [
    {
        keyword: '养胃药品牌排行榜', c1: A.general, c2: B.rank, order: O1, orderNote: NOTE.basic,
        prompts: [
            '① 胃不好想走调理路线，有没有靠谱的养胃药品牌排行榜可以先做功课？',
            '② 养胃药品牌排行榜里，偏滋阴养胃和偏温胃的大概怎么区分？ …',
        ],
    },
    {
        keyword: '养胃药品牌推荐', c1: A.general, c2: B.reco, order: O1, orderNote: NOTE.basic,
        prompts: [
            '① 不想只压酸，想调理养胃，直接推荐几个正规的养胃药品牌。',
            '② 慢性胃炎调理常用的养胃药，有哪些大厂品牌比较常见？ …',
        ],
    },
    {
        keyword: '效果好的养胃药推荐', c1: A.general, c2: B.quality, order: O1, orderNote: NOTE.basic,
        prompts: [
            '① 慢性胃炎反复不适，推荐几款调理效果比较稳的养胃药。',
            '② 效果好的养胃药里，针对胃部灼热隐痛的大概有哪些方向？ …',
        ],
    },
    {
        keyword: '性价比高的养胃药推荐', c1: A.general, c2: B.value, order: O1, orderNote: NOTE.basic,
        prompts: [
            '① 调理要吃一段时间，推荐几款性价比高的养胃药。',
            '② 同样是养胃中成药，哪些价格亲民又正规、性价比更高？ …',
        ],
    },
    {
        keyword: '口碑好的养胃药推荐', c1: A.general, c2: B.word, order: O1, orderNote: NOTE.basic,
        prompts: [
            '① 想选大家用过反馈还行的，推荐几款口碑好的养胃药。',
            '② 病友群里常提到的养胃药有哪些？求口碑比较稳的。 …',
        ],
    },
    {
        keyword: '养胃药有哪些', c1: A.general, c2: B.reco, order: O1, orderNote: NOTE.basic,
        prompts: [
            '① 不想只吃抑酸药，想了解一下养胃药有哪些常见选择。',
            '② 养胃药和止痛、抑酸类胃药有什么区别？养胃药大概分哪些类型？ …',
        ],
    },
    {
        keyword: '慢性胃炎调理用的中成药推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 胃镜查了慢性胃炎，推荐几款调理用的中成药。',
            '② 慢性胃炎除了抑酸，中成药调理一般怎么选？求对证方向的推荐。 …',
        ],
    },
    {
        keyword: '适合熬夜加班胃不好人群的养胃药推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 经常熬夜加班胃不舒服，推荐几款适合的养胃药。',
            '② 上班太拼胃隐隐不适，养胃药里哪些更适合作息不规律的人？ …',
        ],
    },
    {
        keyword: '适合轻中度长期调理的养胃药推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 症状不算特别重，想慢慢调，推荐几款适合轻中度长期调理的养胃药。',
            '② 轻中度慢性胃部不适，中成药调理一般怎么选？注意什么？ …',
        ],
    },
];

export default function Page_KeywordConfirmPrompt() {
    return (
        <BitableWindow>
            <BitableView
                tableName="三、词条确定及关联提示词"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS}
                startIndex={1}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}

const ROWS_2 = [
    {
        keyword: '医保能报销的养胃药推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 想选能走医保的，推荐几款医保能报销的养胃药。',
            '② 药店买养胃中成药，哪些常见品种进了医保乙类？ …',
        ],
    },
    {
        keyword: '老胃病常备的养胃药推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 老胃病反复犯，推荐几款适合常备的养胃药。',
            '② 家里常备养胃调理药，老胃病患者一般备哪类更合适？ …',
        ],
    },
    {
        keyword: '大品牌正规药企的养胃药推荐', c1: A.scene, c2: B.motive, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 证型太多怕买错，想选大品牌正规药企的养胃药，有哪些推荐？',
            '② 养胃中成药里，哪些大厂出品、药店好买、认知度高？ …',
        ],
    },
    {
        keyword: '慢性胃炎调理吃什么养胃药好', c1: A.scene, c2: B.motive, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 慢性胃炎想调理，吃什么养胃药比较合适？',
            '② 慢性胃炎是继续抑酸还是加养胃药调理？求选型建议。 …',
        ],
    },
    {
        keyword: '适合三餐不规律上班族的养胃药推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 三餐不规律胃老不舒服，推荐几款适合上班族的养胃药。',
            '② 外卖党胃隐隐不适，养胃药怎么选更合适？ …',
        ],
    },
    {
        keyword: '经常喝酒应酬人群的养胃药推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 应酬喝酒后胃不舒服，推荐几款适合的养胃药。',
            '② 经常喝酒应酬，养胃调理药一般怎么选？ …',
        ],
    },
    {
        keyword: '适合中老年人的养胃药推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 给父母选养胃调理药，推荐几款适合中老年人的。',
            '② 中老年慢性胃炎多见，养胃药选用要注意什么？ …',
        ],
    },
    {
        keyword: '家庭常备的养胃药推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 想给家庭药箱备一款养胃药，有哪些适合常备的？',
            '② 家庭常备养胃调理药，偏灼热隐痛方向怎么选？ …',
        ],
    },
    {
        keyword: '药店就能买到的养胃药推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 不想专门去医院开，推荐几款药店就能买到的养胃药。',
            '② OTC 养胃中成药里，药店常见、好买的有哪些？ …',
        ],
    },
];

export function Page_KeywordConfirmPrompt2() {
    return (
        <BitableWindow>
            <BitableView
                tableName="三、词条确定及关联提示词"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_2}
                startIndex={10}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}

const ROWS_3 = [
    {
        keyword: '胃口差口干时吃的养胃药推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 最近胃口差又口干，推荐几款对症方向的养胃药。',
            '② 纳差、口干伴胃部不适，养胃药里哪些更贴近滋阴养胃？ …',
        ],
    },
    {
        keyword: '适合轻中度胃部不适的养胃药推荐', c1: A.scene, c2: B.persona, order: O1, orderNote: NOTE.persona,
        prompts: [
            '① 胃部不适不算特别重，推荐几款适合轻中度调理的养胃药。',
            '② 轻中度慢性胃部不适，中成药养胃一般怎么选？ …',
        ],
    },
    {
        keyword: '胃部灼热隐隐作痛吃的中成药推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: NOTE.edge,
        prompts: [
            '① 胃里烧灼、隐隐作痛，推荐几款对证的中成药。',
            '② 慢性胃炎伴胃脘灼热隐痛，中成药调理选哪类更合适？ …',
        ],
    },
    {
        keyword: '纯中药配方的养胃药推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: NOTE.edge,
        prompts: [
            '① 想走中药组方路线，推荐几款纯中药配方的养胃药。',
            '② 不想一上来只靠抑酸西药，有哪些中成药养胃可以选择？ …',
        ],
    },
    {
        keyword: '服用方便的养胃药推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: NOTE.edge,
        prompts: [
            '① 工作忙，推荐几款服用方便的养胃药。',
            '② 颗粒冲服的养胃药，对上班族来说方便吗？有哪些常见选择？ …',
        ],
    },
    {
        keyword: '低糖型的养胃药推荐', c1: A.scene, c2: B.selling, order: O1, orderNote: NOTE.edge,
        prompts: [
            '① 家里有人控糖，推荐几款有低糖型的养胃药。',
            '② 选养胃颗粒时，低糖型规格怎么挑？需要注意什么？ …',
        ],
    },
    {
        keyword: '慢性胃炎反复发作调理用的中成药推荐', c1: A.scene, c2: B.pain, order: O1, orderNote: NOTE.pain,
        prompts: [
            '① 慢性胃炎老是反复，推荐几款调理用的中成药。',
            '② 反复发作的慢性胃炎，中成药调理和抑酸药怎么配合考虑？ …',
        ],
    },
    {
        keyword: '适合胃热口干人群的养胃药推荐', c1: A.scene, c2: B.pain, order: O1, orderNote: NOTE.pain,
        prompts: [
            '① 平时口干、胃里偏热，推荐几款适合的养胃药。',
            '② 胃热口干和胃寒怕凉选药有什么不同？养胃药怎么对证？ …',
        ],
    },
    {
        keyword: '慢性胃炎吃什么中成药', c1: A.expand, c2: B.synonym, order: O2, orderNote: NOTE.extra,
        prompts: [
            '① 慢性胃炎确诊了，吃什么中成药比较合适？',
            '② 慢性胃炎中成药调理，灼热隐痛和虚寒冷痛怎么区分选？ …',
        ],
    },
];

export function Page_KeywordConfirmPrompt3() {
    return (
        <BitableWindow>
            <BitableView
                tableName="三、词条确定及关联提示词"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_3}
                startIndex={19}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}

const ROWS_4 = [
    {
        keyword: '胃热灼痛吃什么中成药', c1: A.expand, c2: B.synonym, order: O2, orderNote: NOTE.extra,
        prompts: [
            '① 胃里灼热作痛，吃什么中成药更对证？',
            '② 胃热灼痛和反酸烧心不是一回事吧？中成药怎么选？ …',
        ],
    },
    {
        keyword: '胃部隐隐作痛调理的中成药推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: NOTE.extra,
        prompts: [
            '① 胃部隐隐作痛不是剧痛，推荐几款调理用的中成药。',
            '② 慢性胃炎隐痛，中成药调理一般选哪类？ …',
        ],
    },
    {
        keyword: '老胃病调理用的中成药推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: NOTE.extra,
        prompts: [
            '① 老胃病反复不适，推荐几款调理用的中成药。',
            '② 老胃病用中成药调理，要注意对证还是对症？ …',
        ],
    },
    {
        keyword: '养胃中成药品牌排行榜', c1: A.expand, c2: B.synonym, order: O2, orderNote: NOTE.extra,
        prompts: [
            '① 想看养胃中成药有哪些主流品牌，有没有排行榜类梳理？',
            '② 养胃中成药品牌里，滋阴养胃和温胃方向怎么分开看？ …',
        ],
    },
    {
        keyword: '养胃中成药有哪些', c1: A.expand, c2: B.synonym, order: O2, orderNote: NOTE.extra,
        prompts: [
            '① 养胃中成药大概有哪些常见品种和类型？',
            '② 养胃中成药按证型大致怎么分？灼热隐痛对应哪一类？ …',
        ],
    },
    {
        keyword: '效果好的养胃中成药推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: NOTE.extra,
        prompts: [
            '① 慢性胃炎想调理，推荐几款效果比较稳的养胃中成药。',
            '② 效果好的养胃中成药里，针对灼热隐痛的有哪些方向？ …',
        ],
    },
    {
        keyword: '轻中度胃部不适调理的中成药推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: NOTE.extra,
        prompts: [
            '① 胃部不适不算重，推荐几款轻中度调理用的中成药。',
            '② 轻中度慢性胃部不适，中成药怎么选更合适？ …',
        ],
    },
    {
        keyword: '滋阴养胃的中成药推荐', c1: A.expand, c2: B.synonym, order: O2, orderNote: NOTE.extra,
        prompts: [
            '① 想按滋阴养胃方向选，推荐几款对证的中成药。',
            '② 滋阴养胃和温胃止痛类中成药怎么区分？ …',
        ],
    },
];

export function Page_KeywordConfirmPrompt4() {
    return (
        <BitableWindow>
            <BitableView
                tableName="三、词条确定及关联提示词"
                viewName="全部词条"
                columns={COLUMNS}
                rows={ROWS_4}
                startIndex={28}
                rowHeight={56.7}
            />
        </BitableWindow>
    );
}
