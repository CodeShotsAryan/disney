"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function FixedMickey() {
    return (
        <motion.div
            className="fixed top-0 right-4 md:right-12 z-[100] pointer-events-none drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 2, delay: 1 }}
        >
            <Link href="/kids" className="relative flex flex-col items-center cursor-pointer group">
                {/* Magical string holding Mickey */}
                <div className="w-[2px] h-32 md:h-48 bg-gradient-to-b from-white/10 to-white/90" />

                {/* Glowing Proper Mickey Mouse Image */}
                <motion.div
                    className="w-24 h-32 md:w-32 md:h-40 relative origin-top z-10 -mt-2"
                    animate={{ rotate: [-6, 6, -6] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                >
                    <Image
                        src="/mickey.webp"
                        alt="Kids Mode"
                        fill
                        className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] filter brightness-110"
                    />
                </motion.div>
            </Link>
        </motion.div>
    );
}
