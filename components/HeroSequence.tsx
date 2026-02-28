"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HeroSequenceProps {
    onSequenceComplete: () => void;
}

export default function HeroSequence({ onSequenceComplete }: HeroSequenceProps) {
    const alreadySeen = false;
    const [phase, setPhase] = useState<"intro" | "video" | "done">("intro");
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const startVideo = () => {
        setPhase("video");
        setTimeout(() => {
            const v = videoRef.current;
            if (v) {
                v.muted = false; // User clicked = browser allows audio
                setIsMuted(false);
                v.play().catch(() => { });
            }
        }, 150);
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        const v = videoRef.current;
        if (v) {
            v.muted = !v.muted;
            setIsMuted(v.muted);
        }
    };

    const handleVideoEnd = () => {
        setPhase("done");
        onSequenceComplete();
    };

    return (
        <AnimatePresence>
            {phase !== "done" && (
                <motion.div
                    key="hero-wrapper"
                    className="fixed inset-0 z-50 bg-black overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    {/* ── PHASE 1: Cinematic Black Intro ── */}
                    <AnimatePresence>
                        {phase === "intro" && (
                            <motion.div
                                key="intro-screen"
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black cursor-pointer select-none"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                onClick={startVideo}
                            >
                                {/* Background: lion king image very dark */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src="/lionking.jpg"
                                        alt="Lion King"
                                        fill
                                        className="object-cover opacity-20 scale-110"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/40" />
                                    <div className="absolute inset-0"
                                        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, transparent 0%, rgba(0,0,0,0.6) 80%)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center text-center px-6">
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 1 }}
                                        className="text-xs md:text-sm tracking-[0.3em] text-white/40 uppercase font-sans font-light mb-6"
                                    >
                                        Walt Disney Pictures
                                    </motion.p>

                                    <motion.h1
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6, duration: 1.8, ease: "easeOut" }}
                                        className="text-6xl md:text-[8rem] font-bold text-white font-sans tracking-tighter leading-none"
                                        style={{ textShadow: "0 0 120px rgba(147,197,253,0.35), 0 0 40px rgba(147,197,253,0.2)" }}
                                    >
                                        DISNEY
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.4, duration: 1.2 }}
                                        className="mt-4 text-base md:text-xl text-white/50 font-sans font-light tracking-wide max-w-lg"
                                    >
                                        Where every story begins
                                    </motion.p>

                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
                                        className="w-32 h-px bg-white/20 my-10 origin-center"
                                    />

                                    {/* CTA */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 2.2, duration: 1 }}
                                        className="flex flex-col items-center gap-4"
                                    >
                                        <motion.p
                                            className="text-sm  text-white uppercase font-sans font-light"
                                        >
                                            Click anywhere to begin
                                        </motion.p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* ── PHASE 2: Lion Video with Overlays ── */}
                    {phase === "video" && (
                        <motion.div
                            key="video-screen"
                            className="fixed inset-0 z-[100] cursor-default pointer-events-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
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

                            {/* Solid dark base overlay */}
                            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
                            {/* Bluish tint overlay */}
                            <div className="absolute inset-0 z-10 pointer-events-none"
                                style={{ background: "rgba(10, 15, 40, 0.1)" }}
                            />
                            {/* Top + bottom gradient bars */}
                            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40 z-10 pointer-events-none" />
                            <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-black to-transparent z-10 pointer-events-none" />

                            {/* Mute/Unmute toggle */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleMute(e);
                                }}
                                className="absolute bottom-8 right-8 z-[100] flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200 cursor-pointer pointer-events-auto"
                            >
                                {isMuted ? (
                                    <>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                        </svg>
                                        <span className="text-xs tracking-widest uppercase font-sans font-light">Unmute</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                        </svg>
                                        <span className="text-xs tracking-widest uppercase font-sans font-light">Mute</span>
                                    </>
                                )}
                            </motion.button>

                            {/* Skip Intro toggle — small, top-right corner */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                onClick={(e) => {
                                    e.stopPropagation(); // Stop click from propagating
                                    handleVideoEnd();
                                }}
                                className="absolute top-28 right-8 z-[100] flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200 cursor-pointer pointer-events-auto"
                            >
                                <span className="text-xs tracking-widest uppercase font-sans font-light">Skip Intro</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </motion.button>

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
                                    style={{ textShadow: "0 0 60px rgba(147,197,253,0.35)" }}
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
