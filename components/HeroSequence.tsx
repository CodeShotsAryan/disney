"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSequenceProps {
    onSequenceComplete: () => void;
}

export default function HeroSequence({ onSequenceComplete }: HeroSequenceProps) {
    const [phase, setPhase] = useState<"intro" | "video" | "done">("intro");
    const videoRef = useRef<HTMLVideoElement>(null);

    const startVideo = () => {
        setPhase("video");
        setTimeout(() => {
            const v = videoRef.current;
            if (v) {
                v.muted = false; // User gesture = browser allows audio
                v.play().catch(() => {
                    v.muted = true;
                    v.play().catch(() => { });
                });
            }
        }, 150);
    };

    const handleVideoEnd = () => {
        setPhase("done");
        setTimeout(() => onSequenceComplete(), 1000);
    };

    return (
        <AnimatePresence>
            {phase !== "done" && (
                <motion.div
                    key="hero-wrapper"
                    className="fixed inset-0 z-50 bg-black overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    {/* ── PHASE 1: cinematic black intro ── */}
                    <AnimatePresence>
                        {phase === "intro" && (
                            <motion.div
                                key="intro-screen"
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black cursor-pointer select-none"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                onClick={startVideo}
                            >
                                {/* DISNEY wordmark */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 1.6, ease: "easeOut" }}
                                    className="text-5xl md:text-8xl font-bold text-white font-sans tracking-tight"
                                    style={{ textShadow: "0 0 80px rgba(147,197,253,0.2)" }}
                                >
                                    DISNEY
                                </motion.h1>

                                {/* Thin divider */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                                    className="w-24 h-px bg-white/15 mt-5 mb-14 origin-center"
                                />

                                {/* Pulsing click prompt */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.6, 0] }}
                                    transition={{ delay: 2, duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                    className="flex flex-col items-center gap-3"
                                >
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/50" />
                                    <p className="text-xs tracking-[0.5em] text-white/30 uppercase font-sans font-light">
                                        Click to begin
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── PHASE 2: video with overlays ── */}
                    {phase === "video" && (
                        <motion.div
                            key="video-screen"
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Video */}
                            <motion.video
                                ref={videoRef}
                                src="/Lion_roar_front_face_video_delpmaspu_.mp4"
                                className="absolute inset-0 w-full h-full object-cover"
                                onEnded={handleVideoEnd}
                                playsInline
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.08 }}
                                transition={{ duration: 10, ease: "easeOut" }}
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/10 to-black/75 pointer-events-none z-10" />
                            <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-black to-transparent z-10 pointer-events-none" />

                            {/* Text overlay at bottom */}
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-20 pointer-events-none">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 1.2 }}
                                    className="text-xs md:text-sm tracking-[0.5em] text-white/40 uppercase font-sans font-light mb-3"
                                >
                                    A Disney Experience
                                </motion.p>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 1.4 }}
                                    className="text-5xl md:text-8xl font-bold text-white font-sans tracking-tight"
                                    style={{ textShadow: "0 0 60px rgba(147,197,253,0.3)" }}
                                >
                                    DISNEY
                                </motion.h1>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 1.6, duration: 1 }}
                                    className="w-24 h-px bg-white/20 mt-5 origin-center"
                                />
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
