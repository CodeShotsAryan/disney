"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Droplets } from "lucide-react";
import Image from "next/image";

export default function WaterParksPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#050505] text-white selection:bg-cyan-600/30 selection:text-white pb-20 pt-24 font-sans">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>



            <section className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                    <Droplets className="w-10 h-10 text-cyan-400" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                    Water Parks
                </h1>
                <p className="text-lg text-white/60 mb-16 max-w-2xl">
                    Plunge into aquatic adventures! Race down thrilling slides, float along lazy rivers, and splash into massive wave pools at our legendary Water Parks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-12">
                    <div className="bg-[#111] border border-cyan-900/50 rounded-3xl overflow-hidden group">
                        <div className="relative h-64">
                            <Image src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1500&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Typhoon Lagoon" />
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111] to-transparent" />
                        </div>
                        <div className="p-8 relative -mt-10">
                            <h3 className="text-2xl font-bold mb-2">Typhoon Lagoon</h3>
                            <p className="text-white/50 text-sm mb-6">Experience the largest wave pool in North America and surf the legendary waves.</p>
                            <button className="px-6 py-2 rounded-full bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-600 hover:text-white transition-colors">Learn More</button>
                        </div>
                    </div>
                    <div className="bg-[#111] border border-cyan-900/50 rounded-3xl overflow-hidden group">
                        <div className="relative h-64">
                            <Image src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1500&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Blizzard Beach" />
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111] to-transparent" />
                        </div>
                        <div className="p-8 relative -mt-10">
                            <h3 className="text-2xl font-bold mb-2">Blizzard Beach</h3>
                            <p className="text-white/50 text-sm mb-6">A "melting" ski resort with some of the fastest slides in the world. Polar fun await!</p>
                            <button className="px-6 py-2 rounded-full bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-600 hover:text-white transition-colors">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
