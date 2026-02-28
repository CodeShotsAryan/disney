"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Play, Star } from "lucide-react";

export default function KidsModePage() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-sky-300 via-sky-200 to-yellow-100 selection:bg-pink-400 selection:text-white">

            {/* Ambient Animated Clouds */}
            <motion.div
                className="absolute top-10 left-10 w-32 h-16 bg-white/80 rounded-full blur-md"
                animate={{ x: [0, 50, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 10 }}
            />
            <motion.div
                className="absolute top-20 right-20 w-48 h-24 bg-white/70 rounded-full blur-md"
                animate={{ x: [0, -40, 0], y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 15 }}
            />

            {/* Navbar Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border-2 border-white text-sky-800 font-bold shadow-lg"
                    >
                        <ChevronLeft className="w-6 h-6" /> Back to Grown-ups
                    </motion.div>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 flex flex-col items-center">

                {/* Title */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl md:text-8xl font-black text-rose-500 tracking-tighter drop-shadow-md mb-4" style={{ WebkitTextStroke: "3px white" }}>
                        KIDS MODE!
                    </h1>
                    <p className="text-2xl text-sky-800 font-bold bg-white/40 inline-block px-6 py-2 rounded-3xl border border-white">
                        Welcome to the Magic Kingdom 🏰
                    </p>
                </motion.div>

                {/* Kids Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {/* Category 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl p-6 border-4 border-white shadow-2xl cursor-pointer"
                    >
                        <div className="aspect-video rounded-2xl bg-white/30 overflow-hidden mb-4 relative">
                            <img src="https://images.unsplash.com/photo-1549480017-d773068fbae5?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="w-16 h-16 text-white drop-shadow-md fill-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-white drop-shadow-md">Watch Cartoons!</h2>
                        <div className="mt-4 flex gap-2">
                            <Star className="text-white fill-yellow-200" />
                            <Star className="text-white fill-yellow-200" />
                            <Star className="text-white fill-yellow-200" />
                        </div>
                    </motion.div>

                    {/* Category 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-6 border-4 border-white shadow-2xl cursor-pointer"
                    >
                        <div className="aspect-video rounded-2xl bg-white/30 overflow-hidden mb-4 relative">
                            <img src="https://images.unsplash.com/photo-1581447110034-71b3e401ecda?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="w-16 h-16 text-white drop-shadow-md fill-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-white drop-shadow-md">Princess Stories!</h2>
                        <div className="mt-4 flex gap-2">
                            <Star className="text-white fill-pink-200" />
                            <Star className="text-white fill-pink-200" />
                            <Star className="text-white fill-pink-200" />
                        </div>
                    </motion.div>

                    {/* Category 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-6 border-4 border-white shadow-2xl cursor-pointer"
                    >
                        <div className="aspect-video rounded-2xl bg-white/30 overflow-hidden mb-4 relative">
                            <img src="https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="w-16 h-16 text-white drop-shadow-md fill-white" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-white drop-shadow-md">Super Heroes!</h2>
                        <div className="mt-4 flex gap-2">
                            <Star className="text-white fill-emerald-200" />
                            <Star className="text-white fill-emerald-200" />
                            <Star className="text-white fill-emerald-200" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </main>
    );
}
