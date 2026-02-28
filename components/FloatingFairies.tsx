"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// SVGs for magical fairies/angels with a glowing effect
const FairySVG = () => (
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#fairy-glow)">
            {/* Glowing orb body */}
            <circle cx="50" cy="50" r="10" fill="#fff" />
            <circle cx="50" cy="50" r="15" fill="#a855f7" fillOpacity="0.6" />

            {/* Ethereal angelic wings */}
            <path d="M50,50 Q20,10 5,30 Q25,70 50,50 Z" fill="#e879f9" fillOpacity="0.8" />
            <path d="M50,50 Q80,10 95,30 Q75,70 50,50 Z" fill="#e879f9" fillOpacity="0.8" />
            <path d="M50,50 Q20,40 10,70 Q40,80 50,50 Z" fill="#818cf8" fillOpacity="0.6" />
            <path d="M50,50 Q80,40 90,70 Q60,80 50,50 Z" fill="#818cf8" fillOpacity="0.6" />
        </g>
        <defs>
            <filter id="fairy-glow" x="-20" y="-20" width="140" height="140" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
    </svg>
);

export default function FloatingFairies() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Create an array of magical flying fairies
    const fairies = Array.from({ length: 5 }).map((_, i) => {
        const size = Math.random() * 0.5 + 0.5; // Scale
        const durationX = Math.random() * 20 + 20; // Flight speed across screen
        const startY = Math.random() * 80 + 10; // Start height (10% to 90%)
        const delay = Math.random() * 15; // Staggered spawn
        const swayY = Math.random() * 150 + 50; // Vast swooping motion

        // Random direction: 50% chance to go left-to-right or right-to-left
        const goRight = Math.random() > 0.5;
        const initialX = goRight ? "-10vw" : "110vw";
        const targetX = goRight ? "110vw" : "-10vw";

        return (
            <motion.div
                key={i}
                className="absolute pointer-events-none z-50 mix-blend-screen"
                style={{
                    top: `${startY}%`,
                    left: 0,
                    scale: size,
                }}
                initial={{ x: initialX, opacity: 0 }}
                animate={{
                    x: [initialX, targetX],
                    y: [0, -swayY, swayY, -swayY / 2, 0], // Magical swooping pattern
                    opacity: [0, 1, 1, 0] // Fade in and out
                }}
                transition={{
                    x: {
                        duration: durationX,
                        repeat: Infinity,
                        ease: "linear",
                        delay: delay,
                    },
                    y: {
                        duration: durationX,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay,
                    },
                    opacity: {
                        duration: durationX,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.1, 0.9, 1],
                        delay: delay,
                    }
                }}
            >
                {/* Wing flapping animation */}
                <motion.div
                    animate={{
                        scaleY: [1, 0.6, 1],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 0.15 + (Math.random() * 0.1), // Rapid wing beats
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <FairySVG />

                    {/* Fairy dust trail effect directly on the fairy */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 rounded-full bg-purple-400 blur-xl mix-blend-screen opacity-50"
                        animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        );
    });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[50]">
            {fairies}
        </div>
    );
}
