"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSequenceProps {
    onSequenceComplete: () => void;
}

export default function HeroSequence({ onSequenceComplete }: HeroSequenceProps) {
    // We removed the session storage check so the roaring lion intro plays EVERY TIME
    const alreadySeen = false;
    const [phase, setPhase] = useState<"intro" | "video" | "done">("intro");
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const v = videoRef.current;
        if (v) {
            v.muted = true; // Must start muted for autoplay
            v.play().catch(() => { });
        }
    }, []);

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
            {!isFinished && (
                <motion.div
                    key="hero"
                    className="fixed inset-0 z-50 bg-black overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    {/* Lion Video */}
                    <motion.video
                        ref={videoRef}
                        src="/Lion_roar_front_face_video_delpmaspu_.mp4"
                        className="absolute inset-0 w-full h-full object-cover"
                        onEnded={handleVideoEnd}
                        playsInline
                        muted
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.08 }}
                        transition={{ duration: 10, ease: "easeOut" }}
                    />

                    {/* Solid dark base */}
                    <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
                    {/* Bluish tint */}
                    <div className="absolute inset-0 z-10 pointer-events-none"
                        style={{ background: "rgba(10, 15, 40, 0.2)" }}
                    />
                    {/* Top + bottom gradients */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/65 via-transparent to-black/75 z-10 pointer-events-none" />
                    <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-black to-transparent z-10 pointer-events-none" />

                    {/* Mute toggle — small, bottom-right corner */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        onClick={toggleMute}
                        className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200 cursor-pointer"
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

                    {/* Text overlay at bottom-center */}
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
        </AnimatePresence>
    );
}
