"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Play } from "lucide-react";

export default function StarWarsPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-black text-white selection:bg-blue-600/30 selection:text-white pb-20">
            {/* Hyperspace/Starfield Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
            </div>

            {/* Navbar Back Button */}
            <div className="fixed top-6 left-6 md:top-10 md:left-12 z-50">
                <Link href="/">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white/80 hover:text-white transition-all font-medium text-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    >
                        <ChevronLeft className="w-5 h-5" /> Back to Universe
                    </motion.div>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex flex-col items-center justify-center -mt-10 px-6 z-10">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=2072&auto=format&fit=crop"
                        alt="Star Wars Galaxy"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent h-40" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center pt-24"
                >
                    <p className="text-blue-400 font-sans tracking-[0.4em] text-sm uppercase mb-4 font-bold shadow-blue-500/20 drop-shadow-md">A long time ago in a galaxy far, far away....</p>

                    <h1 className="text-6xl md:text-[8rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-yellow-500 tracking-tighter mb-8 leading-none drop-shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                        STAR<br />WARS
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                        Join the resistance. Discover epic battles, legendary Jedi, and the ultimate struggle between the light side and the dark side.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold text-sm md:text-base tracking-widest uppercase hover:bg-yellow-400 transition-all shadow-[0_0_40px_rgba(234,179,8,0.4)] flex items-center gap-2">
                            <Play className="w-4 h-4 fill-black" /> Watch Trailer
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Factions Section */}
            <section className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Choose Your Path</h2>
                    <p className="text-white/50 max-w-xl mx-auto">The Force binds the galaxy together, but how will you wield it?</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Light Side */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-blue-500/20 hover:border-blue-400 transition-colors duration-500"
                    >
                        <div className="absolute inset-0 z-0 bg-black">
                            <img src="https://images.unsplash.com/photo-1543330366-232bcafaf9c5?q=80&w=1500&auto=format&fit=crop" alt="Light Side" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-black/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-8 z-10 flex flex-col items-start translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-12 h-1 bg-blue-500 mb-4 group-hover:w-20 transition-all duration-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                            <h3 className="text-3xl font-bold text-white tracking-widest uppercase mb-2">The Light Side</h3>
                            <p className="text-blue-100/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Jedi Knights, the Republic, and the Resistance. Defenders of peace and justice across the stars.</p>
                        </div>
                    </motion.div>

                    {/* Dark Side */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-red-500/20 hover:border-red-500 transition-colors duration-500"
                    >
                        <div className="absolute inset-0 z-0 bg-black">
                            <img src="https://images.unsplash.com/photo-1549880181-e2dd62b08c90?q=80&w=1500&auto=format&fit=crop" alt="Dark Side" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 filter grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-black/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-8 z-10 flex flex-col items-start translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-12 h-1 bg-red-600 mb-4 group-hover:w-20 transition-all duration-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                            <h3 className="text-3xl font-bold text-white tracking-widest uppercase mb-2">The Dark Side</h3>
                            <p className="text-red-100/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Sith Lords, the Empire, and the First Order. Embracing passion, strength, and ultimate power.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
