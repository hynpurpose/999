import React from 'react';

export default function QABanner({ index, text, className = '' }) {
    return (
        <div
            className={`flex items-stretch gap-4 p-4 rounded-xl bg-gradient-to-r from-[#004CE5]/15 via-[#004CE5]/5 to-transparent border border-[#004CE5]/25 backdrop-blur-md shadow-[0_0_20px_rgba(0,76,229,0.08)] ${className}`}
        >
            <div className="shrink-0 flex items-center justify-center px-3 min-w-[3.25rem] rounded-lg bg-[#004CE5] shadow-[0_0_18px_rgba(0,76,229,0.45)]">
                <span className="text-white font-bold text-xl leading-none tracking-tight">
                    Q{index}
                </span>
            </div>
            <div className="flex-1 flex flex-col justify-center min-w-0">
                <div className="text-[0.65rem] uppercase tracking-[0.28em] text-[#5b87f0] font-semibold mb-1">
                    Question
                </div>
                <p className="text-[1.05rem] leading-relaxed text-white">
                    {text}
                </p>
            </div>
        </div>
    );
}
