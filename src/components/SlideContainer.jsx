import React, { useState, useEffect, useRef } from 'react';

const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

export default function SlideContainer({ children }) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [scale, setScale] = useState(1);
    const viewportRef = useRef(null);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    useEffect(() => {
        const viewport = viewportRef.current;
        if (!viewport) return;

        const updateScale = () => {
            const pad = isFullscreen ? 0 : 64;
            const availableWidth = viewport.clientWidth - pad;
            const availableHeight = viewport.clientHeight - pad;
            if (availableWidth < 200 || availableHeight < 120) return;
            const next = Math.min(availableWidth / SLIDE_WIDTH, availableHeight / SLIDE_HEIGHT);
            if (!Number.isFinite(next) || next <= 0) return;
            setScale((prev) => (Math.abs(prev - next) < 0.001 ? prev : next));
        };

        const resizeObserver = new ResizeObserver(updateScale);
        resizeObserver.observe(viewport);
        const raf = requestAnimationFrame(updateScale);
        window.addEventListener('resize', updateScale);

        return () => {
            cancelAnimationFrame(raf);
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateScale);
        };
    }, [isFullscreen]);

    return (
        <div
            ref={viewportRef}
            className={`w-full h-full bg-zinc-600 overflow-hidden antialiased selection:bg-blue-600 selection:text-white relative ${isFullscreen ? '' : ''}`}
        >
            <div
                className={`absolute left-1/2 top-1/2 bg-white overflow-hidden ${isFullscreen ? '' : 'shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl'}`}
                style={{
                    width: SLIDE_WIDTH,
                    height: SLIDE_HEIGHT,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    transformOrigin: 'center center',
                }}
            >
                {children}
            </div>
        </div>
    );
}
