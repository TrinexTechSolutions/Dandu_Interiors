import React, { useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface ScrollVideoBackgroundProps {
    videoUrl: string;
    playbackRanges?: { start: number; end: number }[]; // Optional: can be used for section-specific mapping
}

const ScrollVideoBackground: React.FC<ScrollVideoBackgroundProps> = ({ videoUrl }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll();

    // We want to map the scroll progress (0 to 1) to the video duration
    // Since we don't know the video duration immediately, we'll update it once it's loaded.

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (videoRef.current && videoRef.current.duration) {
            const targetTime = latest * videoRef.current.duration;
            // Use requestAnimationFrame for smoother updates if needed, 
            // but direct setting is usually fine for scroll-mapping
            videoRef.current.currentTime = targetTime;
        }
    });

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            // Ensure the video is paused so it only moves with scroll
            videoRef.current.pause();
        }
    }, [videoUrl]);

    return (
        <div className="scroll-video-container">
            <video
                ref={videoRef}
                src={videoUrl}
                muted
                playsInline
                preload="auto"
                className="scroll-video-element"
            />
            <div className="scroll-video-overlay" />
        </div>
    );
};

export default ScrollVideoBackground;
