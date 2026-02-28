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
            <Link href="/child" className="relative flex flex-col items-center cursor-pointer group pointer-events-auto">
                {/* Clean string holding it */}
                <div className="w-[1px] h-32 md:h-48 bg-white/40" />

                {/* Full character image with a subtle hover effect */}
                <motion.div
                    className="w-32 h-40 md:w-36 md:h-48 relative origin-top z-10 -mt-2 shadow-[0_10px_40px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden border-2 border-white/20"
                    animate={{ rotate: [-4, 4, -4] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                >
                    <Image
                        src="/mickymouse.jpg"
                        alt="Kids Mode"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </Link>
        </motion.div>
    );
}
