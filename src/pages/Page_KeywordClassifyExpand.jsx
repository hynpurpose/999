import React from 'react';
import BitableView from '../components/BitableView';
import BitableWindow from '../components/BitableWindow';

/* ─────────────────────────────────────────────────────────────
 * 二、词条分类及扩展（养胃舒颗粒 · 飞书多维表）
 * 35 条按 18/17 拆 2 页。
 * ───────────────────────────────────────────────────────────── */

const COLUMNS = [
    { key: 'keyword', label: '词条生成', width: 396, type: 'text' },
    { key: 'c1', label: '词条分类1', width: 308, type: 'select' },
    { key: 'c2', label: '词条分类2', width: 464, type: 'select' },
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

const ROWS = [
    { keyword: '养胃药品牌排行榜', c1: A.general, c2: B.rank },
    { keyword: '养胃药品牌推荐', c1: A.general, c2: B.reco },
    { keyword: '效果好的养胃药推荐', c1: A.general, c2: B.quality },
    { keyword: '性价比高的养胃药推荐', c1: A.general, c2: B.value },
    { keyword: '口碑好的养胃药推荐', c1: A.general, c2: B.word },
    { keyword: '养胃药有哪些', c1: A.general, c2: B.reco },
    { keyword: '慢性胃炎调理用的中成药推荐', c1: A.scene, c2: B.motive },
    { keyword: '适合熬夜加班胃不好人群的养胃药推荐', c1: A.scene, c2: B.motive },
    { keyword: '适合轻中度长期调理的养胃药推荐', c1: A.scene, c2: B.motive },
    { keyword: '医保能报销的养胃药推荐', c1: A.scene, c2: B.motive },
    { keyword: '老胃病常备的养胃药推荐', c1: A.scene, c2: B.motive },
    { keyword: '大品牌正规药企的养胃药推荐', c1: A.scene, c2: B.motive },
    { keyword: '慢性胃炎调理吃什么养胃药好', c1: A.scene, c2: B.motive },
    { keyword: '适合三餐不规律上班族的养胃药推荐', c1: A.scene, c2: B.persona },
    { keyword: '经常喝酒应酬人群的养胃药推荐', c1: A.scene, c2: B.persona },
    { keyword: '适合中老年人的养胃药推荐', c1: A.scene, c2: B.persona },
    { keyword: '家庭常备的养胃药推荐', c1: A.scene, c2: B.persona },
    { keyword: '药店就能买到的养胃药推荐', c1: A.scene, c2: B.persona },
];

export default function Page_KeywordClassifyExpand() {
    return (
        <BitableWindow>
            <BitableView
                tableName="二、词条分类及扩展"
                viewName="全部词条"
                notice="你调整了行高"
                columns={COLUMNS}
                rows={ROWS}
                startIndex={1}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}

const ROWS_2 = [
    { keyword: '胃口差口干时吃的养胃药推荐', c1: A.scene, c2: B.persona },
    { keyword: '适合轻中度胃部不适的养胃药推荐', c1: A.scene, c2: B.persona },
    { keyword: '胃部灼热隐隐作痛吃的中成药推荐', c1: A.scene, c2: B.selling },
    { keyword: '纯中药配方的养胃药推荐', c1: A.scene, c2: B.selling },
    { keyword: '服用方便的养胃药推荐', c1: A.scene, c2: B.selling },
    { keyword: '低糖型的养胃药推荐', c1: A.scene, c2: B.selling },
    { keyword: '慢性胃炎反复发作调理用的中成药推荐', c1: A.scene, c2: B.pain },
    { keyword: '适合胃热口干人群的养胃药推荐', c1: A.scene, c2: B.pain },
    { keyword: '慢性胃炎吃什么中成药', c1: A.expand, c2: B.synonym },
    { keyword: '胃热灼痛吃什么中成药', c1: A.expand, c2: B.synonym },
    { keyword: '胃部隐隐作痛调理的中成药推荐', c1: A.expand, c2: B.synonym },
    { keyword: '老胃病调理用的中成药推荐', c1: A.expand, c2: B.synonym },
    { keyword: '养胃中成药品牌排行榜', c1: A.expand, c2: B.synonym },
    { keyword: '养胃中成药有哪些', c1: A.expand, c2: B.synonym },
    { keyword: '效果好的养胃中成药推荐', c1: A.expand, c2: B.synonym },
    { keyword: '轻中度胃部不适调理的中成药推荐', c1: A.expand, c2: B.synonym },
    { keyword: '滋阴养胃的中成药推荐', c1: A.expand, c2: B.synonym },
];

export function Page_KeywordClassifyExpand2() {
    return (
        <BitableWindow>
            <BitableView
                tableName="二、词条分类及扩展"
                viewName="全部词条"
                notice="你调整了行高"
                columns={COLUMNS}
                rows={ROWS_2}
                startIndex={19}
                rowHeight={33.6}
            />
        </BitableWindow>
    );
}
