"use client";

import { motion } from "framer-motion";

export default function FixedMickey() {
    return (
        <motion.div
            className="fixed top-0 right-4 md:right-12 z-[100] pointer-events-none drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 2, delay: 1 }}
        >
            <div className="relative flex flex-col items-center">
                {/* Magical string holding Mickey */}
                <div className="w-[2px] h-32 md:h-48 bg-gradient-to-b from-white/10 to-white/90" />

                {/* Glowing Premium Mickey Silhouette */}
                <motion.div
                    className="w-20 h-20 md:w-24 md:h-24 relative origin-top z-10 -mt-1"
                    animate={{ rotate: [-6, 6, -6], scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <radialGradient id="mickeyGlow" cx="40%" cy="30%" r="60%">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="70%" stopColor="#fdfdfd" />
                                <stop offset="100%" stopColor="#e2e8f0" />
                            </radialGradient>
                            <filter id="superGlow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2.5" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        <g filter="url(#superGlow)">
                            {/* Left Ear */}
                            <circle cx="22" cy="28" r="18" fill="url(#mickeyGlow)" />
                            {/* Right Ear */}
                            <circle cx="78" cy="28" r="18" fill="url(#mickeyGlow)" />
                            {/* Main Head */}
                            <circle cx="50" cy="60" r="32" fill="url(#mickeyGlow)" />
                        </g>

                        {/* Magical Sparkle on Ear */}
                        <path d="M 20 8 L 22 17 L 31 19 L 22 21 L 20 30 L 18 21 L 9 19 L 18 17 Z" fill="#ffffff" opacity="0.9" />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
}
