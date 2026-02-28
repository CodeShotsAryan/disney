"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Ticket } from "lucide-react";

export default function TicketsPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#050505] text-white selection:bg-green-600/30 selection:text-white pb-20 pt-24 font-sans">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-green-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <div className="px-6 md:px-12 mb-8 relative z-10 block">
                <Link href="/child">
                    <motion.div
                        whileHover={{ x: -5 }}
                        className="inline-flex items-center gap-2 text-white/50 hover:text-green-400 transition-colors uppercase text-xs tracking-widest"
                    >
                        <ChevronLeft className="w-4 h-4" /> Back to Destinations
                    </motion.div>
                </Link>
            </div>

            <section className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-20">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                    <Ticket className="w-10 h-10 text-green-400" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    Tickets & Passes
                </h1>
                <p className="text-lg text-white/60 mb-16 max-w-2xl">
                    Unlock endless magic. Choose a single-day admission or become an Annual Passholder for year-round incredible access.
                </p>

                <div className="bg-[#111] border border-green-900/50 p-12 rounded-3xl overflow-hidden w-full max-w-4xl shadow-[0_0_50px_rgba(34,197,94,0.05)]">
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Ticket Booth Opening</h3>
                    <p className="text-white/50 mb-8 max-w-xl mx-auto">Our cast members are printing the entry passes right now.</p>
                    <Link href="/child">
                        <button className="px-8 py-4 rounded-full bg-green-600 text-white hover:bg-green-500 transition-colors font-bold uppercase tracking-widest text-sm drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">Back to Nav</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
