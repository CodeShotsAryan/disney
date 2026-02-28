"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, BedDouble } from "lucide-react";
import Image from "next/image";

export default function ResortHotelsPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#050505] text-white selection:bg-amber-600/30 selection:text-white pb-20 pt-24 font-sans">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-amber-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>



            <section className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-20">
                <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
                    <BedDouble className="w-10 h-10 text-amber-400" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                    Resort Hotels
                </h1>
                <p className="text-lg text-white/60 mb-16 max-w-2xl">
                    Stay immersed in the magic 24/7. Discover meticulously themed accommodations right in the heart of the action where stories continue even in your dreams.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-12 text-left">
                    <div className="bg-[#111] border border-amber-900/30 rounded-3xl overflow-hidden group">
                        <div className="relative h-60">
                            <Image src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1500&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Animal Kingdom Lodge" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">Animal Kingdom Lodge</h3>
                            <p className="text-white/50 text-sm mb-4">Wake up to exotic animals wandering across the savanna right outside your balcony.</p>
                            <div className="flex items-center gap-1 text-amber-500 text-sm font-bold uppercase tracking-tighter">Luxury Experience</div>
                        </div>
                    </div>
                    <div className="bg-[#111] border border-amber-900/30 rounded-3xl overflow-hidden group">
                        <div className="relative h-60">
                            <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1500&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Grand Floridian" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">Grand Floridian Resort</h3>
                            <p className="text-white/50 text-sm mb-4">Victorian elegance meets modern magic. The flagship resort of Walt Disney World.</p>
                            <div className="flex items-center gap-1 text-amber-500 text-sm font-bold uppercase tracking-tighter">Premium Stay</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
