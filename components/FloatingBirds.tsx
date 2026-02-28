"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Simple SVG silhouette of a small flying bird
const BirdSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6C22 6 18.2588 5.61719 14.7335 7.73347C13.2536 8.62235 12 10 12 10C12 10 10.7464 8.62235 9.26645 7.73347C5.7412 5.61719 2 6 2 6C2 6 3.82917 9.87326 7.42589 11.6706C9.28821 12.6008 12 14.5 12 14.5C12 14.5 14.7118 12.6008 16.5741 11.6706C20.1708 9.87326 22 6 22 6Z" fill="white" fillOpacity="0.8" />
    </svg>
);

export default function FloatingBirds() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Create an array of birds with different configurations
    const birds = Array.from({ length: 8 }).map((_, i) => {
        const size = Math.random() * 1.5 + 1.2; // 1.2 to 2.7 (Significantly larger)
        const duration = Math.random() * 15 + 15; // 15s to 30s
        const top = Math.random() * 40 + 5; // 5% to 45% (sky of the website)
        const delay = Math.random() * 20; // Stagger start times
        const sway = Math.random() * 30 + 10; // Sway amplitude

        return (
            <motion.div
                key={i}
                className="absolute pointer-events-none z-40"
                style={{
                    top: `${top}%`,
                    left: "-5%",
                    scale: size,
                    opacity: 0.8,
                    // Give slight blur to smaller birds to create depth of field
                    filter: size < 0.6 ? 'blur(1px)' : 'none'
                }}
                animate={{
                    x: ["0vw", "110vw"],
                    y: [0, -sway, 0, sway, 0], // Gentle up and down flight
                }}
                transition={{
                    x: {
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: delay,
                    },
                    y: {
                        duration: duration / 3, // Sway faster than crossing
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay,
                    }
                }}
            >
                {/* Flapping animation */}
                <motion.div
                    animate={{
                        scaleY: [1, 0.4, 1]
                    }}
                    transition={{
                        duration: 0.3 + Math.random() * 0.2, // Flap speed
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <BirdSVG />
                </motion.div>
            </motion.div>
        );
    });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[40]">
            {birds}
        </div>
    );
}
