import React from 'react';
import Frame from '../components/geoone/Frame';
import { GeoOneStage } from '../components/geoone/GeoOneApp';
import { C, Card } from '../components/geoone/ui';
import { LineChart, SentimentBar } from '../components/geoone/charts';
import geoSentiment from '../data/geoSentiment.json';

/* ══════════════ 数据：换正负面基本情况时只改这一段 ══════════════ */
/* 来源：GEO ONE /api/sentiments/stats · 项目 440 ToC 监测词；数值与日期都取自 geoSentiment.json */

const WIDTH = 1608;
const HEIGHT = 574.5;

const toc = geoSentiment['440']?.stats || {};
const tob = geoSentiment['441']?.stats || {};
const POSITIVE = toc.positive_rate ?? 93;
const POS_KEYWORDS = (toc.positive_keywords || []).join('、');
const NEG_KEYWORDS = (toc.negative_keywords || []).join('、');
const LINE_TICKS = ['100%', '80%', '60%', '40%', '20%'];
const DAILY = toc.daily_stats?.length ? toc.daily_stats : [{ date: '', positive_rate: POSITIVE }];
/** tick：0=100%，每格 20%；93% → (100-93)/20 = 0.35 */
const LINE_POINTS = DAILY.map((d, i) => ({
    x: (i + 0.5) / DAILY.length,
    tick: (100 - (d.positive_rate ?? POSITIVE)) / 20,
}));
const LINE_LABELS = DAILY.map((d) => {
    const [, m, day] = (d.date || '').split('-');
    return m ? `${Number(m)}月${Number(day)}日` : '';
});
const TOB_POS = tob.positive_rate ?? 85;
const TOB_NEG = tob.negative_percentage ?? 15;

export default function Page_GeoReport_Sentiment_Pre() {
    return (
        <Frame
            title="正负面分析"
            aspect={`${WIDTH}/${HEIGHT}`}
            footer={
                <div className="h-[26%] min-h-[145px] max-h-[190px] shrink-0 w-full">
                    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-5 py-3.5 lg:px-6 lg:py-4 flex flex-col h-full justify-center">
                        <h3 className="text-[21px] lg:text-[23px] xl:text-[24.5px] font-bold text-white flex items-center gap-2.5 shrink-0 mb-3">
                            <span className="w-1.5 h-4.5 bg-[#004CE5] rounded-full shadow-[0_0_8px_rgba(0,76,229,0.8)] shrink-0" />
                            基本情况概述
                        </h3>
                        <div className="pl-[14px] text-[15px] lg:text-[16px] xl:text-[17.5px] text-zinc-300 leading-relaxed font-normal flex flex-col gap-2.5">
                            <p>
                                C 端监测词正面回答率为 {POSITIVE}%，主流正向标签为：“{POS_KEYWORDS}”；B 端正面率 {TOB_POS}%，负面占比 {TOB_NEG}%，渠道侧事实错误与竞品导向更集中。
                            </p>
                            <p>
                                C 端负面占比 {(100 - POSITIVE).toFixed(0)}%，集中在“{NEG_KEYWORDS}”——药性与适应症写反、医保甲类/用法用量错配、以及「长期服用伤胃」类表述，需在品牌词与渠道词中定点纠偏。
                            </p>
                        </div>
                    </div>
                </div>
            }
        >
            <GeoOneStage width={WIDTH} height={HEIGHT} align="center">
                <div
                    style={{
                        position: 'absolute',
                        left: 36,
                        top: 28,
                        fontSize: 24,
                        fontWeight: 800,
                    }}
                >
                    正负面分析 · C端监测词
                </div>

                <Card
                    style={{
                        position: 'absolute',
                        left: 36,
                        top: 80,
                        width: 760,
                        height: 460,
                        padding: '24px 28px',
                    }}
                >
                    <div style={{ fontSize: 15, color: C.muted, marginBottom: 14 }}>
                        目标产品正面回答率随时间的变化趋势
                    </div>
                    <div style={{ fontSize: 14, color: C.muted }}>正面回答率</div>
                    <div style={{ fontSize: 34, fontWeight: 800, marginBottom: 18 }}>{POSITIVE}%</div>
                    <LineChart
                        width={700}
                        height={300}
                        ticks={LINE_TICKS}
                        points={LINE_POINTS}
                        xLabels={LINE_LABELS}
                    />
                </Card>

                <Card
                    style={{
                        position: 'absolute',
                        left: 816,
                        top: 80,
                        width: 756,
                        height: 460,
                        padding: '24px 32px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{ fontSize: 15, color: C.muted, marginBottom: 28 }}>
                        目标产品正负面回答分布
                    </div>

                    <div style={{ marginBottom: 22 }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: C.green, marginBottom: 8 }}>
                            {POSITIVE}% 正面
                        </div>
                        <div style={{ fontSize: 17, color: C.text }}>{POS_KEYWORDS}</div>
                    </div>

                    <div style={{ height: 1, background: C.border, margin: '8px 0 22px' }} />

                    <div style={{ marginBottom: 28 }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: C.red, marginBottom: 8 }}>
                            {(100 - POSITIVE).toFixed(0)}% 负面
                        </div>
                        <div style={{ fontSize: 17, color: C.text }}>{NEG_KEYWORDS}</div>
                    </div>

                    <div style={{ height: 1, background: C.border, margin: '4px 0 28px' }} />

                    <div style={{ marginTop: 'auto' }}>
                        <SentimentBar width={690} positive={POSITIVE} height={28} />
                    </div>
                </Card>
            </GeoOneStage>
        </Frame>
    );
}
