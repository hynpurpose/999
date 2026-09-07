import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

const IMAGE_SRC = '/medical-platforms/xiaohe-material-science.png';

function ImageSlot() {
    const [failed, setFailed] = useState(false);

    return (
        <div className="w-full h-full rounded-[24px] border border-white/[0.08] bg-[#0B0D19]/45 overflow-hidden flex items-center justify-center relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[70%] rounded-full bg-[#004CE5]/[0.12] blur-[60px]" />

            {failed ? (
                <div className="relative m-6 w-[calc(100%-48px)] h-[calc(100%-48px)] rounded-[20px] border border-dashed border-white/25 flex flex-col items-center justify-center gap-4">
                    <span className="text-[28px] font-bold text-white tracking-widest">图片位</span>
                    <span className="text-[20px] font-bold text-white font-mono">{IMAGE_SRC}</span>
                </div>
            ) : (
                <img
                    src={IMAGE_SRC}
                    alt="小荷健康品牌材料科学性要求"
                    onError={() => setFailed(true)}
                    className="relative max-w-full max-h-full object-contain"
                />
            )}
        </div>
    );
}

export default function Page_Xiaohe_MaterialScience() {
    return (
        <SlideLayout title="小荷健康品牌材料科学性要求">
            <div className="w-full h-full animate-fadeIn font-['MiSans'] pt-2">
                <ImageSlot />
            </div>
        </SlideLayout>
    );
}

Page_Xiaohe_MaterialScience.hideHeader = true;
