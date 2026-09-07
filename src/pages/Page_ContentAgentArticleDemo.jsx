import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * 内容撰写 Agent 演示产出的成稿示意（第三部分「内容撰写Agent」使用）
 * 该部分页眉由 SlideLayout 提供，与第五部分「GEO实操要点 · 内容策略」的
 * Page_ContentStrategyDemo3 / Demo4 互不影响。
 */
function ArticleDemo({ src, alt }) {
    const [failed, setFailed] = useState(false);

    return (
        <SlideLayout title="高质量文章示意" contentTop={280}>
            <div className="w-full h-full animate-fadeIn">
                <div className="w-full h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
                    <div className="w-full h-[36px] bg-black/40 border-b border-white/10 flex items-center px-4 shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                    </div>
                    <div className="flex-1 min-h-0 bg-white relative">
                        {failed ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0B0D19]/45">
                                <span className="text-[22px] font-bold tracking-widest text-white">请放入截图</span>
                                <span className="text-[15px] font-mono text-white">public{src}</span>
                            </div>
                        ) : (
                            <img
                                src={src}
                                alt={alt}
                                onError={() => setFailed(true)}
                                className="w-full h-full object-cover object-top"
                            />
                        )}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

export function Page_ContentAgentArticleDemo1() {
    return <ArticleDemo src="/charts/geo-content-agent-article-demo1.png" alt="高质量文章示意 1" />;
}
Page_ContentAgentArticleDemo1.hideHeader = true;

export function Page_ContentAgentArticleDemo2() {
    return <ArticleDemo src="/charts/geo-content-agent-article-demo2.png" alt="高质量文章示意 2" />;
}
Page_ContentAgentArticleDemo2.hideHeader = true;
