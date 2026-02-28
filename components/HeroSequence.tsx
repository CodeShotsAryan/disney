"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSequenceProps {
    onSequenceComplete: () => void;
}

export default function HeroSequence({ onSequenceComplete }: HeroSequenceProps) {
    const [hasStarted, setHasStarted] = useState(false);
    const [isVideoFinished, setIsVideoFinished] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const startExperience = () => {
        setHasStarted(true);
        if (videoRef.current) {
            // Because the user clicked, we can now play with sound (muted={false})
            videoRef.current.play().catch(e => console.error("Playback failed:", e));
        }
    };

    const handleVideoEnd = () => {
        setIsVideoFinished(true);
        setTimeout(() => {
            onSequenceComplete();
        }, 1000);
    };

    return (
        <AnimatePresence>
            {!isVideoFinished && (
                <motion.div
                    key="hero-sequence"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
                >
                    {!hasStarted ? (
                        <div
                            className="absolute inset-0 z-40 bg-black/80 flex flex-col items-center justify-center cursor-pointer transition-colors hover:bg-black/70"
                            onClick={startExperience}
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                className="text-2xl md:text-4xl text-white font-sans font-light tracking-widest text-glow"
                            >
                                Tap to Awaken the Magic
                            </motion.h1>
                        </div>
                    ) : null}

                    <motion.video
                        ref={videoRef}
                        src="/Lion_roar_front_face_video_delpmaspu_.mp4"
                        className="w-full h-full object-cover"
                        onEnded={handleVideoEnd}
                        playsInline
                        muted={false} // Force sound strictly on
                        initial={{ scale: 1 }}
                        animate={hasStarted ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 8, ease: "easeOut" }} // Slow scale effect
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black opacity-60 pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
