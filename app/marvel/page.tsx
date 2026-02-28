"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Play, Info } from "lucide-react";
import Image from "next/image";

export default function MarvelPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#050505] selection:bg-red-600/30 selection:text-white pb-20">
            {/* Background Texture Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-red-900/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>



            {/* Hero Section */}
            <section className="relative w-full h-[85vh] flex flex-col items-center justify-end pb-20 md:pb-32 px-6 z-10">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop"
                        alt="Marvel Universe"
                        className="w-full h-full object-cover scale-[1.02] transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-transparent h-40" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
                >
                    <div className="mb-6 bg-red-600 px-6 py-2 rounded-sm inline-block transform -skew-x-12">
                        <span className="text-white font-black tracking-[0.2em] transform skew-x-12 block text-sm md:text-base">MARVEL STUDIOS</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                        The Infinity <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Saga</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-8">
                        Experience the epic crossover event that defined a generation. Heroes are forged, alliances are broken, and the universe will never be the same.
                    </p>

                    <div className="flex items-center gap-4">
                        <button className="bg-white text-black px-8 py-3 rounded-md font-bold text-sm md:text-base tracking-wider hover:bg-white/90 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            EXPLORE TIMELINE
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Character Showcase Section */}
            <section className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Legendary Heroes</h2>
                        <p className="text-white/50 max-w-lg">Discover the icons that defended Earth and beyond against impossible odds.</p>
                    </div>
                    <button className="text-white/70 hover:text-white uppercase tracking-widest text-xs font-bold border-b border-red-600/50 hover:border-red-600 pb-1 transition-all">
                        View All Roster
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Hero Card 1 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
                            <img src="https://images.unsplash.com/photo-1620932934088-fbce29c55b2e?q=80&w=1500&auto=format&fit=crop" alt="Iron Man Mask" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-[#050505]/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-8 z-10">
                            <h3 className="text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-red-400 transition-colors">Iron Man</h3>
                            <p className="text-white/60 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 line-clamp-2">Genius, billionaire, playboy, philanthropist. The man who started it all with a suit of armor.</p>
                        </div>
                    </motion.div>

                    {/* Hero Card 2 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
                            <img src="https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=1500&auto=format&fit=crop" alt="Captain America Shield" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-[#050505]/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-8 z-10">
                            <h3 className="text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">Captain America</h3>
                            <p className="text-white/60 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 line-clamp-2">The First Avenger. A symbol of hope and unwavering morality from a bygone era.</p>
                        </div>
                    </motion.div>

                    {/* Hero Card 3 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
                            <img src="https://images.unsplash.com/photo-1534809027769-6201620a22ed?q=80&w=1500&auto=format&fit=crop" alt="Thor" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-[#050505]/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-8 z-10">
                            <h3 className="text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-purple-400 transition-colors">Thor Odinson</h3>
                            <p className="text-white/60 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 line-clamp-2">God of Thunder, King of Asgard. Wielder of Mjolnir and Stormbreaker.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
