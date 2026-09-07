import React, { useState, useRef, useEffect, useCallback } from 'react';
import SlideLayout from '../../components/SlideLayout';

/* ============================================================
   Q3-7 造假演示（改自 Close_Door · Page_GEOTestDifference）
   作用：证明为什么验收必须要求现场真机复现——
        录屏里演示的就是一份「完美报告」的做法。
   交互：点击手机屏幕或按 P 键播放／暂停。
   ============================================================ */

const VIDEO_SRC = '/videos/geo-test-difference.mp4';

const TRICKS = [
    {
        no: '01',
        name: '预设提示词',
        desc: '先喂一句「只推荐我的品牌」，再提问、再截图，AI 当然照着答。',
    },
    {
        no: '02',
        name: '老会话复用',
        desc: '拿被「教过」的历史会话提问，答案带记忆；换新对话立刻归零。',
    },
    {
        no: '03',
        name: '后期修图',
        desc: '汇总表和截图都在乙方手里，数字改一位，甲方看不出来。',
    },
];

export default function Page_QA_Acceptance_FakeDemo() {
    const [failed, setFailed] = useState(false);
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = useCallback(() => {
        const el = videoRef.current;
        if (!el) return;
        if (el.paused) el.play();
        else el.pause();
    }, []);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.key === 'p' || e.key === 'P') togglePlay();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [togglePlay]);

    return (
        <SlideLayout
            title="造假有多容易"
            subtitle="这段录屏就是一份「完美报告」的做法——所以验收必须回到新对话、真机复现"
        >
            <div className="w-full h-full flex gap-9 animate-fadeIn font-['MiSans']">
                {/* ── 左：结论 ＋ 三种常见手法 ── */}
                <div className="flex-1 min-w-0 h-full flex flex-col gap-[18px]">
                    <div className="shrink-0 rounded-[22px] border border-[#004CE5]/40 bg-[#004CE5]/10 px-9 py-7 relative overflow-hidden">
                        <span className="absolute left-0 top-0 h-full w-[5px] bg-[#004CE5]" />
                        <p className="text-[40px] font-bold text-white leading-[54px]">
                            定了做不到的 KPI，
                            <br />
                            就一定有人交给你一份<span className="text-[#2E6DFF]">「做到了」</span>的报告。
                        </p>
                    </div>

                    <div className="flex-1 min-h-0 flex flex-col gap-[18px]">
                        {TRICKS.map((t) => (
                            <div
                                key={t.no}
                                className="flex-1 min-h-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 flex items-center gap-6 overflow-hidden"
                            >
                                <span className="shrink-0 text-[44px] font-black text-[#2E6DFF] leading-none font-['Montserrat']">
                                    {t.no}
                                </span>
                                <div className="flex-1 min-w-0 flex flex-col gap-2.5">
                                    <span className="text-[28px] font-bold text-white leading-none">{t.name}</span>
                                    <p className="text-[22px] text-white leading-[32px] text-justify">{t.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="shrink-0 rounded-[20px] border border-white/[0.08] bg-[#0B0D19]/45 px-8 py-5 flex items-center gap-5">
                        <span className="shrink-0 px-3.5 py-2 rounded-[8px] bg-[#004CE5] text-[20px] font-bold text-white leading-none whitespace-nowrap">
                            所以
                        </span>
                        <p className="flex-1 min-w-0 text-[23px] text-white leading-[33px]">
                            验收只信两样：
                            <span className="font-bold">第三方系统的原始日志</span>，和
                            <span className="font-bold">现场真机的新对话复现</span>。
                        </p>
                    </div>
                </div>

                {/* ── 右：手机录屏 ── */}
                <div className="w-[400px] shrink-0 h-full flex flex-col items-center gap-3 overflow-hidden">
                    <span className="shrink-0 px-4 py-2 rounded-[8px] bg-[#004CE5] text-[20px] font-bold text-white leading-none">
                        造假演示
                    </span>

                    <div className="flex-1 min-h-0 self-stretch flex items-center justify-center">
                        <div className="h-full max-w-full min-w-0 aspect-[9/19.5] border-[8px] border-white/[0.14] bg-black rounded-[46px] shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden relative">
                            {/* 挖孔 */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />

                            <div className="absolute inset-0 z-10 w-full h-full bg-black cursor-pointer" onClick={togglePlay}>
                                {!failed ? (
                                    <>
                                        <video
                                            ref={videoRef}
                                            src={VIDEO_SRC}
                                            className="w-full h-full object-cover"
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                            onError={() => setFailed(true)}
                                            onPlay={() => setPlaying(true)}
                                            onPause={() => setPlaying(false)}
                                        />
                                        {!playing && (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/45">
                                                <div className="w-[76px] h-[76px] rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-md">
                                                    <span className="text-white text-[34px] pl-1.5">▶</span>
                                                </div>
                                                <span className="text-[20px] font-bold text-white leading-none">
                                                    点击播放 · 或按 P 键
                                                </span>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-black">
                                        <div className="w-[76px] h-[76px] rounded-full bg-[#004CE5]/20 border border-[#004CE5]/50 flex items-center justify-center">
                                            <span className="text-[#2E6DFF] text-[34px] pl-1.5">▶</span>
                                        </div>
                                        <span className="text-[22px] font-bold text-white leading-none">造假演示录屏</span>
                                        <span className="text-[18px] font-bold text-white leading-none">
                                            视频文件未就绪
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

Page_QA_Acceptance_FakeDemo.hideHeader = true;
