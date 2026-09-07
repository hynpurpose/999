import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/* 四类通用信源各配一页「AI 具体是怎么引用的」，案例均出自 GEO ONE 真实抓取数据。
   版式与医生问答类的博禾案例页（Page_MedSource_DoctorQA_Citation）保持一致。 */

/* 标注色：在白底截图上圈重点，用红色而不是幻灯片的蓝，避免和截图里自带的蓝色 UI 混淆 */
const FLOW_COLOR = '#FF3B30';

function useElementSize(ref) {
    const [size, setSize] = useState(null);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
        update();

        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, [ref]);

    return size;
}

function LogoPlate({ src, alt }) {
    const [failed, setFailed] = useState(false);

    if (failed) return null;

    return (
        <span className="w-[26px] h-[26px] shrink-0 rounded-[7px] bg-white overflow-hidden flex items-center justify-center">
            <img
                src={src}
                alt={alt}
                onError={() => setFailed(true)}
                className="w-full h-full object-contain"
            />
        </span>
    );
}

/* mark 用截图原图的百分比坐标描述要圈的那块内容（{x, y, w, h}）。
   图片是 object-contain object-top，所以先按 contain 算出图在框里的实际位置，再把百分比换算过去。
   mark.silent 只做箭头的锚点、不画红框，用于截图里已经自带标注的页面。 */
function ShotFrame({ src, alt, mark, markRef, onGeometry }) {
    const [failed, setFailed] = useState(false);
    const [nat, setNat] = useState(null);
    const frameRef = useRef(null);
    const size = useElementSize(frameRef);

    let box = null;
    if (mark && nat && size) {
        const scale = Math.min(size.w / nat.w, size.h / nat.h);
        const dw = nat.w * scale;
        const dh = nat.h * scale;
        const ox = (size.w - dw) / 2;
        box = {
            left: ox + (mark.x / 100) * dw,
            top: (mark.y / 100) * dh,
            width: (mark.w / 100) * dw,
            height: (mark.h / 100) * dh,
        };
    }

    const boxKey = box ? `${box.left}|${box.top}|${box.width}|${box.height}` : '';
    useEffect(() => {
        if (boxKey && onGeometry) onGeometry();
    }, [boxKey, onGeometry]);

    if (failed) {
        return (
            <div className="flex-1 min-h-0 w-full rounded-[18px] border border-dashed border-white/20 bg-[#0B0D19]/45 flex flex-col items-center justify-center gap-3">
                <span className="text-[22px] font-bold text-white tracking-widest">图片位</span>
                <span className="text-[15px] text-white/50 font-mono">{src}</span>
            </div>
        );
    }

    return (
        <div
            ref={frameRef}
            className="relative flex-1 min-h-0 w-full rounded-[18px] overflow-hidden bg-white border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
        >
            <img
                src={src}
                alt={alt}
                onError={() => setFailed(true)}
                onLoad={(e) => setNat({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
                className="w-full h-full object-contain object-top"
            />

            {box && (
                <span
                    ref={markRef}
                    className="absolute pointer-events-none"
                    style={{
                        left: box.left,
                        top: box.top,
                        width: box.width,
                        height: box.height,
                        ...(mark.silent
                            ? null
                            : {
                                  border: `3px solid ${FLOW_COLOR}`,
                                  borderRadius: Math.min(14, box.height / 2),
                                  background: 'rgba(255, 59, 48, 0.07)',
                                  boxShadow: '0 0 0 2px rgba(255, 59, 48, 0.14)',
                              }),
                    }}
                />
            )}
        </div>
    );
}

function ShotColumn({ shot, markRef, onGeometry }) {
    return (
        <div className="flex-1 min-w-0 h-full flex flex-col">
            <div className="shrink-0 h-[34px] flex items-center gap-3">
                <span className="text-[18px] font-bold text-[#004CE5] font-['Montserrat'] leading-none">
                    {shot.index}
                </span>
                <span className="text-[26px] font-bold text-white leading-none whitespace-nowrap">
                    {shot.title}
                </span>
                <span className="w-px h-[18px] bg-white/15" />
                <LogoPlate src={shot.logo} alt={shot.logoAlt} />
                <span className="min-w-0 text-[19px] text-white/90 leading-none truncate">
                    {shot.meta}
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
            </div>

            <div className="flex-1 min-h-0 mt-3 flex">
                <ShotFrame
                    src={shot.src}
                    alt={shot.alt}
                    mark={shot.mark}
                    markRef={markRef}
                    onGeometry={onGeometry}
                />
            </div>
        </div>
    );
}

/* 引用源列表里的站点 favicon，键同时覆盖列表里的简称与 sourceLogoAlt 的全称 */
const SITE_ICON = {
    '医药信息查询': '/source-icons/dayi.org.cn.png',
    '中国医药信息查询平台': '/source-icons/dayi.org.cn.png',
    '民福康': '/source-icons/mfk.com.png',
    '博禾医生': '/source-icons/bohe.cn.png',
    '复禾健康': '/source-icons/fh21.com.png',
    '丁香园': '/source-icons/dxy.cn.png',
    '摩熵医药': '/source-icons/pharmcube.com.png',
    '中国生物医学': '/source-icons/sinomed.ac.cn.png',
    '大众养生网': '/medical-sources/cndzys.png',
    '35健康': '/medical-sources/35jk.png',
    '39健康网': '/source-icons/39.net.png',
    '腾讯新闻': '/source-icons/qq.com.png',
    '腾讯医典': '/medical-platforms/tencent-yidian.png',
    '今日头条': '/source-icons/toutiao.com.png',
    '百度知道': '/source-icons/baidu.com.png',
    '食品药品网': '/source-icons/cnpharm.com.ico',
    '生命时报': '/source-icons/lifetimes.cn.svg',
    '智慧芽': '/medical-sources/zhihuiya.png',
    '药监局': '/medical-sources/nmpa.png',
    '国家药监局': '/medical-sources/nmpa.png',
};

/* 站点小图标：有 logo 用 logo，否则退化成首字母圆形头像，接近真实引用源列表里的 favicon */
function SiteFavicon({ src, name, size }) {
    const [failed, setFailed] = useState(false);
    const box = { width: size, height: size };

    if (!src || failed) {
        return (
            <span
                style={box}
                className="shrink-0 rounded-full bg-[#E8EAED] flex items-center justify-center"
            >
                <span
                    style={{ fontSize: Math.round(size * 0.58), color: '#5F6368' }}
                    className="font-bold leading-none"
                >
                    {(name || '·').slice(0, 1)}
                </span>
            </span>
        );
    }

    return (
        <span
            style={box}
            className="shrink-0 rounded-full bg-white overflow-hidden flex items-center justify-center"
        >
            <img
                src={src}
                alt={name}
                onError={() => setFailed(true)}
                className="w-full h-full object-contain"
            />
        </span>
    );
}

/* 中间这一列是「AI 平台引用源面板」的仿真截图，与左右两张真实截图一样是白底浅色 UI，
   因此内部文字用截图里的深灰/黑，不套用幻灯片正文的纯白规则。 */
function SourceList({ sources, logo, logoAlt, note, markRef, flow }) {
    const compact = sources.length > 13;
    const hasSite = sources.some((s) => s.site);

    return (
        <div className={`${compact || hasSite ? 'w-[460px]' : 'w-[400px]'} shrink-0 h-full flex flex-col`}>
            <div className="shrink-0 h-[34px] flex items-center gap-3">
                <span className="text-[26px] font-bold text-white leading-none whitespace-nowrap">引用源</span>
                <span className="w-px h-[18px] bg-white/15" />
                {logo && <LogoPlate src={logo} alt={logoAlt} />}
                <span className="text-[19px] text-white leading-none whitespace-nowrap">
                    {note || `${sources.length} 条`}
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
            </div>

            {/* 字体不用幻灯片的 MiSans，改系统字体栈，观感才接近浏览器里截下来的界面 */}
            <div
                className="flex-1 min-h-0 mt-3 rounded-[18px] border border-white/[0.08] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col"
                style={{ fontFamily: '-apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif' }}
            >
                <div className="flex-1 min-h-0 flex flex-col divide-y divide-[#E8EAED]">
                    {sources.map((s, i) => {
                        const site = s.site || logoAlt;
                        const icon = SITE_ICON[site] || (s.site ? null : logo);

                        const num = (
                            <span
                                className={`shrink-0 rounded-[5px] flex items-center justify-center font-['Montserrat'] leading-none ${
                                    compact ? 'w-[15px] h-[15px] text-[10px]' : 'w-[17px] h-[17px] text-[11px]'
                                }`}
                                style={{ background: '#F1F3F4', color: '#9AA0A6' }}
                            >
                                {i + 1}
                            </span>
                        );

                        return (
                            <div
                                key={`${s.title}-${i}`}
                                className={`relative flex-1 min-h-0 px-4 flex ${
                                    compact ? 'items-center gap-2.5' : 'flex-col justify-center gap-[6px]'
                                }`}
                            >
                                {/* 被引的那条：用蓝框直接框出来，不占布局也不改行内排版 */}
                                {s.highlight && (
                                    <span
                                        ref={markRef}
                                        className="absolute inset-x-[6px] inset-y-[2px] rounded-[8px] pointer-events-none"
                                        style={
                                            flow
                                                ? {
                                                      border: `3px solid ${FLOW_COLOR}`,
                                                      background: 'rgba(255, 59, 48, 0.07)',
                                                      boxShadow: '0 0 0 2px rgba(255, 59, 48, 0.14)',
                                                  }
                                                : { border: '2px solid #004CE5' }
                                        }
                                    />
                                )}

                                {compact ? (
                                    <>
                                        <SiteFavicon src={icon} name={site} size={15} />
                                        <span
                                            className="shrink-0 w-[76px] truncate text-[11px] leading-none"
                                            style={{ color: '#80868B' }}
                                        >
                                            {site}
                                        </span>
                                        <span
                                            className="flex-1 min-w-0 truncate text-[13px] font-bold leading-none"
                                            style={{ color: '#202124' }}
                                        >
                                            {s.title}
                                        </span>
                                        {num}
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-2">
                                            <SiteFavicon src={icon} name={site} size={16} />
                                            <span
                                                className="min-w-0 truncate text-[11px] leading-none"
                                                style={{ color: '#80868B' }}
                                            >
                                                {site}
                                            </span>
                                            <span className="flex-1" />
                                            {num}
                                        </div>
                                        <p
                                            className="text-[15px] font-bold leading-none truncate"
                                            style={{ color: '#202124' }}
                                        >
                                            {s.title}
                                        </p>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

/* 箭头尺寸写死成布局像素：SVG 的 marker 默认按 strokeWidth 缩放，
   描边那一层会被放大成远大于箭身的白三角，所以箭头改成手画的实心多边形 */
const ARROW_LEN = 24;
const ARROW_HALF = 12;

/* 两列之间只有几十像素的横向空隙，纵向落差却有几百像素，平滑曲线会拧成一团麻花。
   这里改走「横向出发 → 竖直穿过列间空隙 → 横向进入目标」的圆角折线，
   箭头始终水平指向右边那块内容，指向关系一眼可辨。
   箭身停在箭头根部之前，避免线头从三角形里穿出来。 */
function flowShape(from, to) {
    const stopX = to.x - ARROW_LEN * 0.7;
    const head = `M ${to.x} ${to.y} L ${to.x - ARROW_LEN} ${to.y - ARROW_HALF} L ${to.x - ARROW_LEN} ${to.y + ARROW_HALF} Z`;

    const dx = stopX - from.x;
    const dy = to.y - from.y;

    if (Math.abs(dy) < 6 || dx < 24) {
        return { body: `M ${from.x} ${from.y} L ${stopX} ${to.y}`, head };
    }

    const midX = from.x + dx / 2;
    const dir = dy > 0 ? 1 : -1;
    const r = Math.max(6, Math.min(16, dx / 2 - 2, Math.abs(dy) / 2));

    return {
        body: [
            `M ${from.x} ${from.y}`,
            `L ${midX - r} ${from.y}`,
            `Q ${midX} ${from.y} ${midX} ${from.y + dir * r}`,
            `L ${midX} ${to.y - dir * r}`,
            `Q ${midX} ${to.y} ${midX + r} ${to.y}`,
            `L ${stopX} ${to.y}`,
        ].join(' '),
        head,
    };
}

export function CitationCaseLayout({ title, subtitle, shots, sources, sourceLogo, sourceLogoAlt, sourceNote, statNum, statLabel, conclusion }) {
    /* 三处标注都给全了才画「回答段落 → 引用条目 → 原文段落」的箭头 */
    const flow = Boolean(shots[0].mark && shots[1].mark && sources?.some((s) => s.highlight));

    const rowRef = useRef(null);
    const answerMarkRef = useRef(null);
    const sourceMarkRef = useRef(null);
    const originMarkRef = useRef(null);

    const [tick, setTick] = useState(0);
    const bump = useCallback(() => setTick((t) => t + 1), []);
    const [geo, setGeo] = useState(null);

    useEffect(() => {
        window.addEventListener('resize', bump);
        return () => window.removeEventListener('resize', bump);
    }, [bump]);

    useLayoutEffect(() => {
        if (!flow) return;

        const row = rowRef.current;
        const nodes = [answerMarkRef.current, sourceMarkRef.current, originMarkRef.current];
        if (!row || nodes.some((n) => !n)) return;

        const base = row.getBoundingClientRect();
        if (!base.width) return;

        /* 幻灯片整体是 CSS transform 缩放的，getBoundingClientRect 拿到的是缩放后的值，
           这里统一折回布局像素，好让 SVG 的 viewBox 和排版坐标一一对应 */
        const k = row.offsetWidth / base.width;
        const rel = (el) => {
            const r = el.getBoundingClientRect();
            return {
                left: (r.left - base.left) * k,
                right: (r.right - base.left) * k,
                cy: (r.top + r.height / 2 - base.top) * k,
            };
        };

        setGeo({
            w: row.offsetWidth,
            h: row.offsetHeight,
            answer: rel(nodes[0]),
            source: rel(nodes[1]),
            origin: rel(nodes[2]),
        });
    }, [flow, tick]);

    return (
        <SlideLayout title={title} subtitle={subtitle}>
            <div className="w-full h-full flex flex-col animate-fadeIn font-['MiSans']">

                {/* ── 截图（中间可插入本场引用源列表）；画箭头时列间空隙留宽些，竖直那段才有地方走 ── */}
                <div
                    ref={rowRef}
                    className={`flex-1 min-h-0 flex items-stretch relative ${
                        sources ? (flow ? 'gap-[52px]' : 'gap-6') : 'gap-[72px]'
                    }`}
                >

                    {!sources && (
                        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none">
                            <span className="flex-1 w-px bg-gradient-to-b from-transparent to-white/15" />
                            <span className="my-3 px-4 h-[40px] rounded-full border border-[#004CE5]/40 bg-[#004CE5]/[0.12] flex items-center justify-center">
                                <span className="text-[20px] font-bold text-[#5B8DEF] leading-none whitespace-nowrap">引用</span>
                            </span>
                            <span className="flex-1 w-px bg-gradient-to-t from-transparent to-white/15" />
                        </div>
                    )}

                    <ShotColumn shot={shots[0]} markRef={answerMarkRef} onGeometry={bump} />
                    {sources && (
                        <SourceList
                            sources={sources}
                            logo={sourceLogo}
                            logoAlt={sourceLogoAlt}
                            note={sourceNote}
                            markRef={sourceMarkRef}
                            flow={flow}
                        />
                    )}
                    <ShotColumn shot={shots[1]} markRef={originMarkRef} onGeometry={bump} />

                    {geo && (
                        <svg
                            className="absolute inset-0 z-20 pointer-events-none"
                            width="100%"
                            height="100%"
                            viewBox={`0 0 ${geo.w} ${geo.h}`}
                        >
                            {[
                                flowShape(
                                    { x: geo.answer.right + 6, y: geo.answer.cy },
                                    { x: geo.source.left - 8, y: geo.source.cy },
                                ),
                                flowShape(
                                    { x: geo.source.right + 6, y: geo.source.cy },
                                    { x: geo.origin.left - 8, y: geo.origin.cy },
                                ),
                            ].map(({ body, head }, i) => (
                                <g key={i}>
                                    {/* 白色描边打底，箭头压在白底截图上也看得清 */}
                                    <path d={body} fill="none" stroke="#FFFFFF" strokeWidth={10} strokeLinecap="round" opacity={0.95} />
                                    <path
                                        d={head}
                                        fill="#FFFFFF"
                                        stroke="#FFFFFF"
                                        strokeWidth={7}
                                        strokeLinejoin="round"
                                        opacity={0.95}
                                    />

                                    <path d={body} fill="none" stroke={FLOW_COLOR} strokeWidth={4.5} strokeLinecap="round" />
                                    <path d={head} fill={FLOW_COLOR} />
                                </g>
                            ))}
                        </svg>
                    )}
                </div>

                {/* ── 底部结论 ── */}
                <div className="shrink-0 mt-3 h-[60px] rounded-[16px] border border-[#004CE5]/30 bg-[#004CE5]/[0.08] px-7 flex items-center gap-6">
                    <span className="shrink-0 text-[22px] font-bold text-white leading-none whitespace-nowrap">
                        <span className="text-[28px] text-[#5B8DEF] font-['Montserrat']">{statNum}</span>
                        <span className="ml-1.5">{statLabel}</span>
                    </span>

                    <span className="w-px h-[30px] bg-white/15 shrink-0" />

                    <p className="flex-1 min-w-0 text-[22px] text-white leading-none whitespace-nowrap">
                        {conclusion}
                    </p>
                </div>
            </div>
        </SlideLayout>
    );
}

/* ── 药品百科及数据库：中国医药信息查询平台 ── */
export default function Page_MedSource_DrugDB_Citation() {
    return (
        <CitationCaseLayout
            title="AI 具体是怎么引用的"
            subtitle="以中国医药信息查询平台为例：回答的12条引用，全部来自这一个站点"
            shots={[
                {
                    index: '01',
                    title: 'AI 的回答',
                    logo: '/geo-platforms/deepseek.png',
                    logoAlt: 'DeepSeek',
                    meta: 'DeepSeek · 词条「缓解胃胀的药有哪些」',
                    src: '/medical-sources/dayi-case-ai-answer.png',
                    alt: 'DeepSeek 关于缓解胃胀药物的回答',
                    /* 表格第一行「胃动力不足 → 多潘立酮」 */
                    mark: { x: 2.4, y: 48.2, w: 93.5, h: 11.6 },
                },
                {
                    index: '02',
                    title: '它引用的原文',
                    logo: '/medical-sources/dayi.png',
                    logoAlt: '中国医药信息查询平台',
                    meta: '《胃胀吃什么药？》',
                    src: '/medical-sources/dayi-case-source.png',
                    alt: '中国医药信息查询平台《胃胀吃什么药？》问答页',
                    /* 正文第 1 条「促胃动力药……如多潘立酮等」，就是左边那一行的出处 */
                    mark: { x: 12.3, y: 60.8, w: 77.2, h: 8.4 },
                },
            ]}
            sourceLogo="/medical-sources/dayi.png"
            sourceLogoAlt="中国医药信息查询平台"
            sourceNote="12 条 · 全部来自该站"
            sources={[
                { title: '怎么治疗胃胀嗳气' },
                { title: '胃胀吃什么药？', highlight: true },
                { title: '胃腹胀满吃什么药效果最好' },
                { title: '治疗胃胀气的药？' },
                { title: '胃胀气吃什么药见效快' },
                { title: '胃疼胃胀吃什么药最好？' },
                { title: '胃肠胀气吃什么药？' },
                { title: '经常胃痛胃胀的治疗方法' },
                { title: '为什么会胃胀想吐' },
                { title: '消化酶片' },
                { title: '胃胀气吃什么药效果好？' },
                { title: '胃胀气吃啥药？' },
            ]}
            statNum="12"
            statLabel="条引用全部来自医药信息查询平台"
            conclusion={
                <>
                    从促胃动力药到抑酸药，回答里的每一类推荐都对应着
                    <span className="font-bold text-[#5B8DEF]">协和等三甲主任医师署名的问答页</span>。
                </>
            }
        />
    );
}

Page_MedSource_DrugDB_Citation.hideHeader = true;

/* ── 综合医疗健康平台：民福康 ── */
export function Page_MedSource_HealthPortal_Citation() {
    return (
        <CitationCaseLayout
            title="AI 具体是怎么引用的"
            subtitle="以民福康为例：AI 的湿疹用药框架，和这篇医生回答的结构一一对应"
            shots={[
                {
                    index: '01',
                    title: 'AI 的回答',
                    logo: '/geo-platforms/yuanbao.png',
                    logoAlt: '元宝',
                    meta: '元宝 · 词条「成人湿疹常用药膏有哪些」',
                    src: '/medical-sources/mfk-case-ai-answer.png',
                    alt: '元宝关于成人湿疹常用药膏的回答',
                    /* 「一、外用糖皮质激素」下的弱效／中效／强效三行分级 */
                    mark: { x: 1.4, y: 23.8, w: 84, h: 12.2 },
                },
                {
                    index: '02',
                    title: '它引用的原文',
                    logo: '/medical-sources/mfk.png',
                    logoAlt: '民福康',
                    meta: '《湿疹用什么药膏好》',
                    src: '/medical-sources/mfk-case-source.png',
                    alt: '民福康《湿疹用什么药膏好》问答页',
                    /* 医生回答开头「弱效适用于婴幼儿……强效适用于肥厚性皮损」，正是左边那三行的出处 */
                    mark: { x: 4.9, y: 75.3, w: 91, h: 7.2 },
                },
            ]}
            sourceLogo="/medical-sources/mfk.png"
            sourceLogoAlt="民福康"
            sourceNote="19 条 · 7 条民福康"
            sources={[
                { site: '医药信息查询', title: '湿疹吃什么药？' },
                { site: '民福康', title: '哪款药膏对皮肤湿疹最有效' },
                { site: '腾讯新闻', title: '换季湿疹反复，用药怕激素？分级使用是关键' },
                { site: '腾讯医典', title: '湿疹' },
                { site: '博禾医生', title: '湿疹外用药的两个正确选择' },
                { site: '妙手医生', title: '湿疹用药的注意事项' },
                { site: '民福康', title: '成人湿疹的用药问' },
                { site: '民福康', title: '慢性湿疹擦什么药膏能好' },
                { site: '博禾医生', title: '湿疹常用药物及注意事项' },
                { site: '博禾医生', title: '大人湿疹用什么药膏' },
                { site: '民福康', title: '湿疹用什么药比较合适' },
                { site: '大众养生网', title: '湿疹能治好吗？药物治疗有副作用吗？' },
                { site: '民福康', title: '成人湿疹如何治疗' },
                { site: '民福康', title: '湿疹用什么药膏好', highlight: true },
                { site: '民福康', title: '治湿疹最好的药外用药' },
                { site: '民福康', title: '大人湿疹用什么药' },
                { site: 'Everyday Health', title: 'Do You Need a Topical Steroid to Help Control Eczema?' },
                { site: '复禾健康', title: '成年人湿疹怎么治' },
                { site: '百度知道', title: '国药准字的湿疹药膏有哪些' },
            ]}
            statNum="7"
            statLabel="条引用来自民福康"
            conclusion={
                <>
                    从激素分级、他克莫司到莫匹罗星，AI 的分类清单和这篇
                    <span className="font-bold text-[#5B8DEF]">主任医师署名回答</span>逐条对应。
                </>
            }
        />
    );
}

Page_MedSource_HealthPortal_Citation.hideHeader = true;

/* ── 官方及权威机构：国家药监局 ── */
export function Page_MedSource_Official_Citation() {
    return (
        <CitationCaseLayout
            title="AI 具体是怎么引用的"
            subtitle="以国家药监局为例：回答里的每一款获批新药，都以药监局公告为凭据"
            shots={[
                {
                    index: '01',
                    title: 'AI 的回答',
                    logo: '/geo-platforms/deepseek.png',
                    logoAlt: 'DeepSeek',
                    meta: 'DeepSeek · 词条「肺癌靶向药品牌有哪些」',
                    src: '/medical-sources/nmpa-case-ai-answer.png',
                    alt: 'DeepSeek 关于肺癌靶向药品牌的回答',
                    /* 表格里的 EGFR 整行：药物举例与「第三代药物常作为一线首选」的说明 */
                    mark: { x: 2.5, y: 45.0, w: 93, h: 16.2 },
                },
                {
                    index: '02',
                    title: '它引用的原文',
                    logo: '/medical-sources/nmpa.png',
                    logoAlt: '国家药监局',
                    meta: '《国家药监局批准马来酸美凡厄替尼片上市》',
                    src: '/medical-sources/nmpa-case-source.png',
                    alt: '国家药监局批准马来酸美凡厄替尼片上市公告',
                    /* 公告正文：适用于 EGFR 外显子21（L858R）突变 NSCLC 成人患者的一线治疗 */
                    mark: { x: 2.0, y: 59.3, w: 96, h: 8.8 },
                },
            ]}
            sourceLogo="/medical-sources/nmpa.png"
            sourceLogoAlt="国家药监局"
            sourceNote="12 条 · 5 条药监局"
            sources={[
                { site: '妙手医生', title: 'EGFR 20号外显子插入突变为什么难治，靶向药有哪些？' },
                { site: '中国医大', title: '肺癌的标靶治疗' },
                { site: '药监局', title: '国家药监局批准马来酸美凡厄替尼片上市', highlight: true },
                { site: '药监局', title: '国家药监局批准康特替尼颗粒上市' },
                { site: '智慧芽', title: '50款肺癌已上市的靶向、免疫药物信息大全（2024）' },
                { site: '中国医大', title: 'Philosophy - China Medical University Hospital' },
                { site: '生命时报', title: '肺癌靶向药，三代谁更强' },
                { site: '药监局', title: '国家药监局批准地罗阿克片上市' },
                { site: '医药企管协会', title: '全球vs中国：非小细胞肺癌靶向药分析' },
                { site: '药监局', title: 'Zorifertinib Hydrochloride Tablets Approved for Marketing' },
                { site: '药监局', title: 'Envonalkib Citrate Capsules Approved for Marketing' },
                { site: '癌症药物网', title: 'EGFR ex20ins突变难治原因解析' },
            ]}
            statNum="5"
            statLabel="条引用来自药监局官网"
            conclusion={
                <>
                    「美凡厄替尼用于 EGFR L858R 突变患者」这句话的出处就是这份
                    <span className="font-bold text-[#5B8DEF]">上市批准公告</span>——官方信源一出现就是定性依据。
                </>
            }
        />
    );
}

Page_MedSource_Official_Citation.hideHeader = true;

/* ── 专业学术内容：丁香园用药助手 ── */
export function Page_MedSource_Academic_Citation() {
    return (
        <CitationCaseLayout
            title="AI 具体是怎么引用的"
            subtitle="以丁香园用药助手为例：AI 把专家共识和临床指南整批抓进了引用列表"
            shots={[
                {
                    index: '01',
                    title: 'AI 的回答',
                    logo: '/geo-platforms/deepseek.png',
                    logoAlt: 'DeepSeek',
                    meta: 'DeepSeek · 词条「适合干燥综合征患者的眼睛干涩眼药水推荐」',
                    src: '/medical-sources/dxy-case-ai-answer.png',
                    alt: 'DeepSeek 关于干燥综合征眼药水的回答',
                    /* 「核心药物：0.05%环孢素滴眼液」及其「国内外指南推荐的干眼抗炎一线用药」 */
                    mark: { x: 3.8, y: 75.6, w: 93, h: 7.6 },
                },
                {
                    index: '02',
                    title: '它引用的原文',
                    logo: '/medical-sources/dxy-doctor.png',
                    logoAlt: '丁香园',
                    meta: '《原发性干燥综合征多学科诊疗专家共识（2024版）》',
                    src: '/medical-sources/dxy-case-source.png',
                    alt: '丁香园用药助手收录的干燥综合征专家共识页',
                    /* 「指南推荐」这句话的出处：这份 2024 版多学科诊疗专家共识本身 */
                    mark: { x: 11.2, y: 12.9, w: 60, h: 4.3 },
                },
            ]}
            sourceLogo="/medical-sources/dxy-doctor.png"
            sourceLogoAlt="丁香园"
            sourceNote="12 条 · 4 条用药助手"
            sources={[
                { site: '摩熵医药', title: '同为抗炎，机制大不同！张弘教授谈0.05%环孢素滴眼液（Ⅱ）与利非司特' },
                { site: '亿胜生物', title: '亿胜' },
                { site: '丁香园', title: '原发性干燥综合征多学科诊疗专家共识（2024版）', highlight: true },
                { site: '中国医药导报', title: '环孢素滴眼液联合地夸磷索钠滴眼液治疗干燥综合征相关干眼' },
                { site: '食品药品网', title: '得了干燥综合征该怎么办？' },
                { site: '丁香园', title: '干眼症' },
                { site: '台大医院', title: '干燥症的药物治疗' },
                { site: '河南科协', title: '世界干燥日：口干眼干别硬扛' },
                { site: '丁香园', title: '干燥综合征中医证候专家共识' },
                { site: '中国生物医学', title: '优化强脉冲光技术联合氟米龙滴眼液治疗干燥综合征相关干眼' },
                { site: '丁香园', title: '《2024英国风湿病学会指南：干燥综合征管理》解读' },
                { site: '医药信息查询', title: '干眼症可以用环孢素滴眼液Ⅱ吗' },
            ]}
            statNum="4"
            statLabel="条引用来自用药助手"
            conclusion={
                <>
                    被引的全部是<span className="font-bold text-[#5B8DEF]">专家共识、指南解读和临床决策条目</span>
                    ——发共识、进指南库，就是进入这类引用池的路径。
                </>
            }
        />
    );
}

Page_MedSource_Academic_Citation.hideHeader = true;
