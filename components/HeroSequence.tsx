"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
                v.muted = false;
                v.play().catch(() => {
                    v.muted = true;
                    v.play().catch(() => { });
                });
            }
        }, 150);
    };

    const handleVideoEnd = () => {
        setPhase("done");
        onSequenceComplete(); // Immediate — no pause
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
                    {/* ── PHASE 1: Cinematic Black Intro ── *
                                    <div className="absolute inset-0"
                                        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, transparent 0%, rgba(0,0,0,0.9) 80%)" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center text-center px-6">
                                    {/* Disney logo text */}
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 1 }}
                                        className="text-xs md:text-sm tracking-[0.6em] text-white/40 uppercase font-sans font-light mb-6"
                                    >
                                        Walt Disney Pictures
                                    </motion.p>

                                    {/* DISNEY wordmark */}
                                    <motion.h1
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6, duration: 1.8, ease: "easeOut" }}
                                        className="text-7xl md:text-[10rem] font-bold text-white font-sans tracking-tighter leading-none"
                                        style={{ textShadow: "0 0 120px rgba(147,197,253,0.35), 0 0 40px rgba(147,197,253,0.2)" }}
                                    >
                                        DISNEY
                                    </motion.h1>

                                    {/* Tagline */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.4, duration: 1.2 }}
                                        className="mt-4 text-base md:text-xl text-white/50 font-sans font-light tracking-wide max-w-lg"
                                    >
                                        Where every story begins
                                    </motion.p>

                                    {/* Divider line */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
                                        className="w-32 h-px bg-white/20 my-10 origin-center"
                                    />

                                    {/* CTA — big and visible */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 2.2, duration: 1 }}
                                        className="flex flex-col items-center gap-4"
                                    >
                                        <motion.div
                                            animate={{ scale: [1, 1.08, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center"
                                        >
                                            {/* Play triangle */}
                                            <div className="w-0 h-0 ml-1"
                                                style={{
                                                    borderTop: "10px solid transparent",
                                                    borderBottom: "10px solid transparent",
                                                    borderLeft: "18px solid rgba(255,255,255,0.8)"
                                                }}
                                            />
                                        </motion.div>
                                        <motion.p
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="text-sm tracking-[0.4em] text-white/60 uppercase font-sans font-light"
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
                            className="absolute inset-0"
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

                            {/* Overlays */}
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/85 z-10 pointer-events-none" />
                            <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-black to-transparent z-10 pointer-events-none" />

                            {/* Text at bottom */}
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
