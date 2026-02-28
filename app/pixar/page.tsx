"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Compass, Heart, Zap } from "lucide-react";

export default function PixarPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#fafafa] text-gray-900 selection:bg-blue-300/40 selection:text-blue-900 pb-20 font-sans">
            {/* Playful Gradient Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-red-400/20 blur-[120px] rounded-full mix-blend-multiply" />
                <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-yellow-400/20 blur-[100px] rounded-full mix-blend-multiply" />
                <div className="absolute -bottom-40 right-20 w-[700px] h-[700px] bg-blue-400/20 blur-[130px] rounded-full mix-blend-multiply" />
                {/* Cloud Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-10" />
            </div>

            {/* Navbar Back Button */}
            <div className="fixed top-6 left-6 md:top-10 md:left-12 z-50">
                <Link href="/">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-white/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-gray-200 text-gray-800 hover:text-blue-600 hover:bg-white hover:border-blue-200 transition-all font-bold text-sm shadow-sm"
                    >
                        <ChevronLeft className="w-5 h-5 stroke-[2.5]" /> Disney Hub
                    </motion.div>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 px-6 z-10 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-blue-50/50 rounded-b-[4rem] mx-4 mb-4 shadow-inner" />

                {/* Floating Elements (Pixar Ball inspired colors) */}
                <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 left-[10%] w-16 h-16 bg-blue-500 rounded-full shadow-lg opacity-80 backdrop-blur-xl" />
                <motion.div animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-40 left-[20%] w-24 h-24 bg-yellow-400 rounded-3xl rotate-12 shadow-lg opacity-90 backdrop-blur-xl" />
                <motion.div animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/2 right-[15%] w-20 h-20 bg-red-500 rounded-full shadow-lg opacity-80 backdrop-blur-xl" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
                >
                    <div className="flex items-center gap-2 mb-6 bg-white px-4 py-1.5 rounded-full shadow-sm text-xs font-bold text-gray-500 tracking-widest uppercase border border-gray-100">
                        <span className="w-2 h-2 rounded-full bg-blue-500 block animate-pulse" /> Animation Studios
                    </div>

                    <h1 className="text-6xl md:text-[7rem] font-bold text-gray-900 tracking-tight mb-6 leading-[0.9] drop-shadow-sm font-sans" style={{ letterSpacing: "-0.05em" }}>
                        PIXAR
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
                        Heartwarming tales that speak to all ages. Journey into the imagination where toys come alive, emotions have feelings, and every story sparks joy.
                    </p>

                    <button className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-sm md:text-base tracking-widest hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(59,130,246,0.3)] shadow-blue-500/30 flex items-center gap-3">
                        DISCOVER MAGIC
                    </button>
                </motion.div>
            </section>

            {/* Colorful Movies Section */}
            <section className="relative z-10 py-16 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Toy Story */}
                    <motion.div
                        whileHover={{ y: -15, scale: 1.02 }}
                        className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 cursor-pointer border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
                    >
                        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6 shadow-inner group-hover:bg-blue-500 transition-colors duration-500">
                            <Compass className="w-10 h-10 text-blue-500 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Toy Story</h3>
                        <p className="text-gray-500 leading-relaxed text-sm font-medium">To infinity and beyond! A timeless tale of friendship, loyalty, and the secret life of toys when humans aren't looking.</p>
                        <div className="mt-8 px-6 py-2 rounded-full bg-gray-50 text-blue-600 font-bold text-xs uppercase tracking-widest group-hover:bg-blue-50 transition-colors">
                            Stream Now
                        </div>
                    </motion.div>

                    {/* Inside Out */}
                    <motion.div
                        whileHover={{ y: -15, scale: 1.02 }}
                        className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 cursor-pointer border border-gray-100 flex flex-col items-center text-center transition-all duration-300 mt-0 md:mt-12"
                    >
                        <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center mb-6 shadow-inner group-hover:bg-pink-500 transition-colors duration-500">
                            <Heart className="w-10 h-10 text-pink-500 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Inside Out</h3>
                        <p className="text-gray-500 leading-relaxed text-sm font-medium">Meet the little voices inside your head. A beautiful exploration of Joy, Sadness, Anger, Fear, and Disgust navigating growing up.</p>
                        <div className="mt-8 px-6 py-2 rounded-full bg-gray-50 text-pink-600 font-bold text-xs uppercase tracking-widest group-hover:bg-pink-50 transition-colors">
                            Stream Now
                        </div>
                    </motion.div>

                    {/* Cars */}
                    <motion.div
                        whileHover={{ y: -15, scale: 1.02 }}
                        className="group bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 cursor-pointer border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
                    >
                        <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mb-6 shadow-inner group-hover:bg-red-500 transition-colors duration-500">
                            <Zap className="w-10 h-10 text-red-500 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Cars</h3>
                        <p className="text-gray-500 leading-relaxed text-sm font-medium">Life is a journey, enjoy the trip. Race through Radiator Springs and discover that winning isn't everything.</p>
                        <div className="mt-8 px-6 py-2 rounded-full bg-gray-50 text-red-600 font-bold text-xs uppercase tracking-widest group-hover:bg-red-50 transition-colors">
                            Stream Now
                        </div>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}
