import React from 'react';
import SlideLayout from '../components/SlideLayout';

function SectionHeading({ index, title, note }) {
    return (
        <div className="shrink-0 h-[40px] flex items-center gap-4">
            <span className="text-[20px] font-bold text-[#004CE5] leading-[40px]">{index}</span>
            <h3 className="text-[30px] font-bold text-white leading-[40px] whitespace-nowrap">{title}</h3>
            {note && (
                <>
                    <span className="w-px h-[22px] bg-white/15" />
                    <span className="text-[22px] text-white leading-[40px] whitespace-nowrap">{note}</span>
                </>
            )}
            <span className="flex-1 h-px bg-white/[0.08]" />
        </div>
    );
}

/* ═══════════════ 第一页：内容本身的专业性 ═══════════════ */

/* ── 三页「普通编辑 vs 专业编辑」对照，各讲一个维度：逐项核对、广告法红线、中成药证型 ──
   左栏只讲这一维度上两类编辑的核心区别，右栏用真实稿件里会出现的句子做对照：
   普通编辑写的看着「对」，但要么无法核对、要么直接违规；专业编辑写的每一句都有
   成分、数字、界限和出处。 */
const COMPARE_PAIRS = [
    {
        key: 'verify',
        tag: '药名与剂量核对',
        subtitle: '普通编辑照着别的科普抄，专业编辑回说明书核到每一个数字',
        note: '例：复方氨酚烷胺片，同样写「一次吃几片」和儿童用量',
        diff: {
            title: '普通编辑错在哪',
            items: [
                { quote: '「每次 2 片、一日 3 次」', why: '数字凭印象写，没回说明书核过' },
                { quote: '「儿童用量减半」', why: '说明书里没有这个算法，减半仍超量' },
                { quote: '「按说明书服用」', why: '把核对的活推给读者，等于没写' },
            ],
            good: '核到每片的成分含量与每日上限，写明禁用年龄和儿童专用剂型。',
        },
        bad: {
            title: '感冒药一次吃几片？家庭用药常识',
            text: '复方氨酚烷胺片每次 2 片、一日 3 次，饭后服用。儿童用量减半即可，也可以换成小儿感冒药，按说明书服用。',
            tags: ['剂量凭印象写', '「减半」无依据', '未核对说明书'],
        },
        good: {
            title: '复方氨酚烷胺片怎么吃：成分含量与儿童禁用界限',
            text: '本品每片含对乙酰氨基酚 250mg、盐酸金刚烷胺 100mg，成人一次 1 片、一日 2 次。儿童剂量不能按成人减半推算，1 岁以下禁用，1 岁以上须选儿童专用剂型。',
            tags: ['成分含量逐项核对', '否定减半推算', '年龄界限明确'],
        },
    },
    {
        key: 'compliance',
        tag: '广告法红线',
        subtitle: '「无副作用」「有效率 95%」这类话，普通编辑随手就写，专业编辑一眼就删',
        note: '例：同一款中成药感冒药，同样写它的安全性',
        diff: {
            title: '触到了哪几条红线',
            items: [
                { quote: '「天然安全、无毒副作用」', why: '《广告法》16 条：不得对功效、安全性作保证' },
                { quote: '「有效率达 95% 以上」', why: '《广告法》16 条：不得说明治愈率或有效率' },
                { quote: '「比同类西药更温和」', why: '《广告法》16 条：不得与其他药品比较功效' },
            ],
            good: '适应症与用法只照核准说明书写，主动写明不良反应，不下任何断言。',
        },
        bad: {
            title: '家中常备这款感冒药，安全又放心',
            text: '本品为纯中药制剂，天然安全、无毒副作用，有效率达 95% 以上，感冒初期服用可迅速根治，比同类西药更温和。',
            tags: ['「无毒副作用」违禁', '标注有效率违规', '与同类药比较'],
        },
        good: {
            title: '服用前必读：这款感冒药的禁忌与不良反应',
            text: '本品适应症与用法用量均以国家药监局核准的说明书为准。说明书载明的不良反应包括恶心、皮疹，肝肾功能不全者慎用；中药制剂并不等于没有风险。',
            tags: ['照说明书不扩大', '主动写不良反应', '不做安全性断言'],
        },
    },
    {
        key: 'syndrome',
        tag: '中成药证型',
        subtitle: '中成药说明书写的是证型，普通编辑按病名写，专业编辑按证型写',
        note: '例：感冒清热颗粒，同样写「感冒能不能喝」',
        diff: {
            title: '普通编辑错在哪',
            items: [
                { quote: '「感冒了可以喝」', why: '本品治的是风寒感冒，不分证型就推荐' },
                { quote: '「咽喉肿痛也能缓解」', why: '咽喉肿痛属风热，正是本品不适用的情况' },
                { quote: '「中成药比较温和」', why: '把天然当安全，不提用错证的后果' },
            ],
            good: '照功能主治限定证型，把「风寒」译成鼻流清涕、咳嗽咽干这类可自查的症状。',
        },
        bad: {
            title: '感冒了喝点中成药，温和又管用',
            text: '感冒了可以喝感冒清热颗粒，中成药比较温和。感冒初期喝上两袋，发热、咽喉肿痛、咳嗽都能一起缓解。',
            tags: ['把证型当症状', '不分风寒风热', '按病名不按证'],
        },
        good: {
            title: '风寒还是风热：中成药感冒药要对证才有效',
            text: '感冒清热颗粒的功能主治写的是「风寒感冒」，症见头痛发热、鼻流清涕、咳嗽咽干。若属风热感冒（咽喉肿痛、痰黄黏稠），服用本品不但无效，还可能加重症状。',
            tags: ['照写功能主治', '给出可自查症状', '说明用错的后果'],
        },
    },
];

const FILLER_LEAD =
    '换季期间门诊量明显上升，不少人会自行到药店购买复方感冒药服用。但在实际服用过程中，很多人对具体怎么吃并不清楚，也很少去仔细看包装里的那张说明书，凭印象和经验用药的情况相当普遍。';
const FILLER_TAIL =
    '除上述内容外，还需要结合个人体质与既往病史综合判断，具体情况建议咨询医师或药师后再做决定，不要盲目跟风他人的用药经验。';

/* 打码的正文：模拟截图里未被标注的段落 */
function MaskedPara({ text, clamp = 3, grow = false }) {
    return (
        <p
            className={`${grow ? 'flex-1' : 'shrink-0'} min-h-0 overflow-hidden text-[19px] leading-[32px] text-zinc-500 blur-[3.5px] select-none`}
            style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: clamp }}
        >
            {text}
        </p>
    );
}

function Ellipsis() {
    return <span className="block shrink-0 text-[20px] leading-[26px] text-zinc-400 tracking-[0.3em]">……</span>;
}

/* 浏览器窗口外壳，制造「网页截图」观感 */
function ShotFrame({ url, children }) {
    return (
        <div className="flex-1 min-h-0 rounded-[14px] bg-white overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
            <div className="shrink-0 h-[44px] bg-[#EDEFF2] border-b border-black/10 flex items-center px-5 gap-4">
                <div className="shrink-0 flex gap-2">
                    {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                        <span key={c} className="w-[12px] h-[12px] rounded-full" style={{ background: c }} />
                    ))}
                </div>
                <div className="flex-1 min-w-0 h-[28px] rounded-[6px] bg-white border border-black/10 flex items-center px-3">
                    <span className="text-[15px] text-zinc-500 font-mono leading-none whitespace-nowrap overflow-hidden">
                        {url}
                    </span>
                </div>
            </div>
            <div className="flex-1 min-h-0 px-7 py-5 flex flex-col gap-3">{children}</div>
        </div>
    );
}

function ShotHeadline({ title, meta }) {
    return (
        <div className="shrink-0">
            <p className="text-[24px] font-bold text-zinc-900 leading-[34px]">{title}</p>
            <p className="mt-1.5 text-[15px] text-zinc-400 leading-[22px]">{meta}</p>
            <span className="block mt-3 h-px bg-zinc-200" />
        </div>
    );
}

/* 被标注出来的目标段落 */
function Highlight({ tone, children }) {
    const isBad = tone === 'bad';
    return (
        <div
            className="shrink-0 rounded-[10px] px-5 py-3 border-2 border-dashed bg-[#F0F0F0]"
            style={{ borderColor: isBad ? '#E5484D' : '#1FA971' }}
        >
            <p className="text-[21px] leading-[36px] text-zinc-900">{children}</p>
        </div>
    );
}

function AccuracySlide({ pair }) {
    return (
        <SlideLayout title={`医药稿件的内容专业性（${pair.tag}）`} subtitle={pair.subtitle}>
            <div className="w-full h-full flex gap-11 animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 左栏：普通编辑写的那几句话，各错在哪 ── */}
                <div className="w-[440px] shrink-0 h-full flex flex-col">
                    <SectionHeading index="一、" title={pair.diff.title} />

                    <div className="flex-1 min-h-0 mt-6 flex flex-col gap-4">
                        {pair.diff.items.map((item, i) => (
                            <div
                                key={item.quote}
                                className="flex-1 min-h-0 rounded-[18px] border border-[#E5484D]/35 bg-[#E5484D]/[0.07] px-6 flex flex-col justify-center gap-2.5"
                            >
                                <div className="shrink-0 flex items-center gap-3.5">
                                    <span className="shrink-0 text-[17px] font-bold text-[#FF8A8E] font-['Montserrat'] leading-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-[23px] font-bold text-white leading-[32px] whitespace-nowrap">
                                        {item.quote}
                                    </span>
                                </div>
                                <p className="text-[20px] text-white leading-[30px]">{item.why}</p>
                            </div>
                        ))}
                    </div>

                    <div className="shrink-0 mt-5 rounded-[18px] border border-[#1FA971]/45 bg-[#1FA971]/[0.10] px-6 py-5 flex flex-col gap-2.5">
                        <span className="w-fit h-[30px] px-2.5 rounded-[7px] bg-[#1FA971]/25 border border-[#1FA971]/55 text-[17px] font-bold text-white leading-[28px]">
                            专业编辑
                        </span>
                        <p className="text-[20px] font-bold text-white leading-[30px]">{pair.diff.good}</p>
                    </div>
                </div>

                {/* ── 右栏：两种写法的实际稿件对照 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col">
                    <SectionHeading index="二、" title="同一款药，两种写法" note={pair.note} />

                    <div className="flex-1 min-h-0 mt-6 flex items-stretch">

                        {/* 普通编辑写法 */}
                        <div className="flex-1 min-w-0 h-full rounded-[20px] border border-[#E5484D]/35 bg-[#E5484D]/[0.06] p-5 flex flex-col">
                            <div className="shrink-0 h-[34px] flex items-center gap-3 mb-4">
                                <span className="h-[34px] px-3.5 rounded-[8px] bg-[#E5484D]/20 border border-[#E5484D]/40 text-[19px] font-bold text-[#FF8A8E] leading-[32px] whitespace-nowrap">
                                    普通编辑写法
                                </span>
                                <span className="flex-1 h-px bg-[#E5484D]/20" />
                            </div>

                            <ShotFrame url="https://www.bohe.cn">
                                <ShotHeadline title={pair.bad.title} meta="博禾医生" />
                                <MaskedPara text={FILLER_LEAD} clamp={3} />
                                <Ellipsis />
                                <Highlight tone="bad">{pair.bad.text}</Highlight>
                                <Ellipsis />
                                <MaskedPara text={FILLER_TAIL} clamp={3} grow />
                            </ShotFrame>

                            <div className="shrink-0 mt-4 flex flex-wrap gap-2.5">
                                {pair.bad.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="h-[38px] px-3.5 rounded-[10px] border border-[#E5484D]/30 bg-[#0B0D19]/40 text-[18px] text-[#FF8A8E] leading-[36px] whitespace-nowrap"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* VS */}
                        <div className="w-[96px] shrink-0 h-full flex flex-col items-center justify-center gap-5">
                            <span className="flex-1 w-px bg-gradient-to-b from-transparent to-white/15" />
                            <span className="shrink-0 w-[64px] h-[64px] rounded-full border border-white/20 bg-white/[0.06] flex items-center justify-center text-[26px] font-black text-white font-['Montserrat'] tracking-wide leading-none">
                                VS
                            </span>
                            <span className="flex-1 w-px bg-gradient-to-t from-transparent to-white/15" />
                        </div>

                        {/* 专业编辑写法 */}
                        <div className="flex-1 min-w-0 h-full rounded-[20px] border border-[#1FA971]/40 bg-[#1FA971]/[0.08] p-5 flex flex-col relative overflow-hidden">
                            <div className="pointer-events-none absolute -right-16 -top-24 w-[300px] h-[300px] rounded-full bg-[#1FA971]/20 blur-[70px]" />

                            <div className="shrink-0 h-[34px] flex items-center gap-3 mb-4 relative">
                                <span className="h-[34px] px-3.5 rounded-[8px] bg-[#1FA971]/25 border border-[#1FA971]/50 text-[19px] font-bold text-white leading-[32px] whitespace-nowrap">
                                    专业编辑写法
                                </span>
                                <span className="flex-1 h-px bg-[#1FA971]/25" />
                            </div>

                            <ShotFrame url="https://www.bohe.cn">
                                <ShotHeadline title={pair.good.title} meta="博禾医生" />
                                <MaskedPara text={FILLER_LEAD} clamp={3} />
                                <Ellipsis />
                                <Highlight tone="good">{pair.good.text}</Highlight>
                                <Ellipsis />
                                <MaskedPara text={FILLER_TAIL} clamp={3} grow />
                            </ShotFrame>

                            <div className="shrink-0 mt-4 flex flex-wrap gap-2.5 relative">
                                {pair.good.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="h-[38px] px-3.5 rounded-[10px] border border-[#1FA971]/40 bg-[#0B0D19]/40 text-[18px] text-white leading-[36px] whitespace-nowrap"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

function makeAccuracyPage(pair) {
    const Page = () => <AccuracySlide pair={pair} />;
    Page.hideHeader = true;
    return Page;
}

/* 三页连播：药名与剂量核对 → 广告法红线 → 中成药证型 */
const Page_ContentExpertise_Accuracy = makeAccuracyPage(COMPARE_PAIRS[0]);
export const Page_ContentExpertise_Compliance = makeAccuracyPage(COMPARE_PAIRS[1]);
export const Page_ContentExpertise_Syndrome = makeAccuracyPage(COMPARE_PAIRS[2]);
export default Page_ContentExpertise_Accuracy;

/* ═══════════════ 第二页：机构与医生的审核要求 ═══════════════ */

const REVIEW_FLOW = [
    { t: '合规预审', d: '我方按平台标准自审' },
    { t: '医学编辑初审', d: '平台医学团队核事实' },
    { t: '认证医生复核', d: '署名前逐句把关' },
    { t: '平台合规终审', d: '广告法与平台规范' },
    { t: '发布收录', d: '挂医生名进入信源池' },
];

const RED_LINES = [
    { t: '绝对化用语', d: '「最有效」「根治」「无副作用」，出现一处整篇退回' },
    { t: '超出说明书范围', d: '适应症、用法用量只能照说明书写，不能自行扩大' },
    { t: '结论没有出处', d: '每条医学结论都要写明指南或文献，没有就会被删改' },
    { t: '向大众推荐处方药', d: '只能写疾病与就医常识，不能指名推荐具体药品' },
];

export function Page_ContentExpertise_Review() {
    return (
        <SlideLayout
            title="专业机构与医生的审核要求"
            subtitle="医疗平台的稿件要过医学编辑与认证医生的多重审核，吃透各平台的标准与流程本身就是门槛"
        >
            <div className="w-full h-full flex flex-col animate-fadeIn font-['MiSans'] pt-[36px]">

                {/* ── 审核链路 ── */}
                <SectionHeading index="一、" title="一篇稿件上线前要过谁的手" note="每个平台的标准与流程各不相同" />

                <div className="shrink-0 mt-6 flex items-stretch">
                    {REVIEW_FLOW.map((step, i) => (
                        <React.Fragment key={step.t}>
                            <div className="flex-1 min-w-0 h-[168px] rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-6 py-6 flex flex-col">
                                <span className="h-[18px] text-[18px] font-bold text-[#004CE5] font-['Montserrat'] leading-[18px]">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="mt-[20px] h-[32px] text-[25px] font-bold text-white leading-[32px] whitespace-nowrap">
                                    {step.t}
                                </span>
                                <span className="mt-[10px] h-[28px] text-[19px] text-white/75 leading-[28px] whitespace-nowrap">
                                    {step.d}
                                </span>
                            </div>
                            {i < REVIEW_FLOW.length - 1 && (
                                <div className="w-9 shrink-0 flex items-center justify-center">
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                                        <path d="M1 6h14M11 1.5 16.5 6 11 10.5" stroke="#004CE5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* ── 下半部分 ── */}
                <div className="flex-1 min-h-0 mt-10 flex gap-12">

                    {/* 左：审核红线 */}
                    <div className="flex-1 min-w-0 h-full flex flex-col">
                        <SectionHeading index="二、" title="医生审核紧盯的四条红线" note="犯一条就退稿" />
                        <div className="flex-1 min-h-0 mt-6 grid grid-cols-2 grid-rows-2 gap-5">
                            {RED_LINES.map((item, i) => (
                                <div
                                    key={item.t}
                                    className="min-h-0 rounded-[20px] border border-[#E5484D]/50 bg-[#E5484D]/[0.12] px-6 py-5 flex flex-col justify-center relative overflow-hidden"
                                >
                                    <span className="absolute left-0 top-0 h-full w-[4px] bg-[#E5484D]" />
                                    <span className="pointer-events-none absolute -right-12 -top-16 w-[160px] h-[160px] rounded-full bg-[#E5484D]/25 blur-[42px]" />

                                    <div className="relative flex items-center gap-3.5">
                                        <span
                                            className="shrink-0 w-[48px] h-[48px] rounded-[12px] bg-[#E5484D] flex items-center justify-center text-[20px] font-black text-white font-['Montserrat'] leading-none"
                                            style={{ boxShadow: '0 0 22px rgba(229, 72, 77, 0.55)' }}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="flex-1 min-w-0 text-[26px] font-black text-white leading-[34px] whitespace-nowrap">
                                            {item.t}
                                        </span>
                                        <span className="shrink-0 h-[28px] px-2.5 rounded-[6px] bg-[#E5484D] text-[15px] font-black text-white leading-[28px] tracking-wide">
                                            禁止
                                        </span>
                                    </div>
                                    <p className="relative mt-3 ml-[62px] text-[22px] font-bold text-white leading-[32px]">
                                        {item.d}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 右：为什么必须懂流程 */}
                    <div className="w-[720px] shrink-0 h-full flex flex-col">
                        <SectionHeading index="三、" title="为什么必须懂流程" />

                        <div className="flex-1 min-h-0 mt-6 flex flex-col gap-4">
                            <div className="flex-1 min-h-0 rounded-[20px] border border-white/[0.08] bg-white/[0.02] px-7 flex items-center gap-6">
                                <span className="shrink-0 h-[34px] px-3 rounded-[8px] border border-white/15 text-[18px] text-white/60 leading-[32px] whitespace-nowrap">
                                    不了解要求
                                </span>
                                <span className="text-[22px] text-white/70 leading-[34px]">
                                    反复退稿、返工按周计，医生不愿署名
                                </span>
                            </div>
                            <div className="flex-1 min-h-0 rounded-[20px] border border-[#004CE5]/40 bg-[#004CE5]/[0.10] px-7 flex items-center gap-6 relative overflow-hidden">
                                <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#004CE5] to-transparent" />
                                <span className="shrink-0 h-[34px] px-3 rounded-[8px] bg-[#004CE5]/25 border border-[#004CE5]/50 text-[18px] font-bold text-white leading-[32px] whitespace-nowrap">
                                    按医审标准预审
                                </span>
                                <span className="text-[22px] text-white leading-[34px]">
                                    成稿即符合平台规范，医生放心署名
                                </span>
                            </div>
                        </div>

                        <div className="shrink-0 mt-6 pt-5 border-t border-white/[0.08] flex gap-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004CE5] shrink-0 mt-[13px]" />
                            <p className="text-[22px] text-white leading-[34px]">
                                各平台的审核要求已沉淀为我们的内部撰写规范，由专人对接平台编辑与署名医生。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_ContentExpertise_Review.hideHeader = true;
