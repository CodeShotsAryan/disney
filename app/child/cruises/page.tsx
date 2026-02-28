"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Anchor } from "lucide-react";

export default function CruisesPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#050505] text-white selection:bg-blue-600/30 selection:text-white pb-20 pt-24 font-sans">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>



            <section className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-20">
                <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                    <Anchor className="w-10 h-10 text-blue-400" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    Disney Cruises
                </h1>
                <p className="text-lg text-white/60 mb-16 max-w-2xl">
                    Set sail on an unforgettable journey. Experience world-class entertainment, spectacular storytelling, and exceptional comfort at sea.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mt-12">
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 group cursor-pointer hover:border-blue-500/50 transition-all">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚢</div>
                        <h4 className="text-xl font-bold mb-2">Disney Wish</h4>
                        <p className="text-white/40 text-sm">Our newest ship, where the enchantment of Disney stories comes to life like never before.</p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 group cursor-pointer hover:border-blue-500/50 transition-all">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚤</div>
                        <h4 className="text-xl font-bold mb-2">Castaway Cay</h4>
                        <p className="text-white/40 text-sm">Disneys private island paradise in the Bahamas, reserved exclusively for Cruise Line guests.</p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 group cursor-pointer hover:border-blue-500/50 transition-all">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎭</div>
                        <h4 className="text-xl font-bold mb-2">Broadway Shows</h4>
                        <p className="text-white/40 text-sm">Experience world-class live musicals and original Disney productions at sea.</p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 group cursor-pointer hover:border-blue-500/50 transition-all">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🍽️</div>
                        <h4 className="text-xl font-bold mb-2">Rotational Dining</h4>
                        <p className="text-white/40 text-sm">Eat in a different themed restaurant every night with your same servers.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
