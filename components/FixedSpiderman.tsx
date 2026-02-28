"use client";

import { motion } from "framer-motion";

export default function FixedSpiderman() {
    return (
        <motion.div
            className="fixed top-0 right-4 md:right-12 z-[100] pointer-events-none drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 2, delay: 1 }}
        >
            <div className="relative flex flex-col items-center">
                {/* Thin Web String */}
                <div className="w-[1px] h-32 md:h-48 bg-white/40" />

                {/* Spider-Man SVG Hanging Upside Down */}
                <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 relative origin-top z-10 -mt-2"
                    animate={{ rotate: [-6, 6, -6] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                        {/* Spiderman Head Shape */}
                        <path d="M 50 10 C 15 10 15 50 30 70 C 40 90 60 90 70 70 C 85 50 85 10 50 10 Z" fill="#dc2626" />

                        {/* Web Pattern Lines */}
                        <path d="M 50 10 L 50 90 M 15 40 L 85 40 M 30 70 L 70 70 M 50 10 L 20 60 M 50 10 L 80 60 M 50 50 L 30 10 M 50 50 L 70 10" stroke="#7f1d1d" strokeWidth="1" opacity="0.6" />

                        {/* Eyes Background (Black Outline) */}
                        <path d="M 45 45 Q 30 20 20 40 Q 25 50 45 55 Z" fill="#000000" />
                        <path d="M 55 45 Q 70 20 80 40 Q 75 50 55 55 Z" fill="#000000" />

                        {/* Eyes Inner White */}
                        <path d="M 43 47 Q 32 25 24 40 Q 26 47 43 53 Z" fill="#ffffff" />
                        <path d="M 57 47 Q 68 25 76 40 Q 74 47 57 53 Z" fill="#ffffff" />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
}
