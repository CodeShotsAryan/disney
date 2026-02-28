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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-12">
                    <div className="bg-[#111] border border-green-900/40 rounded-3xl p-8 flex flex-col items-center group hover:bg-green-950/10 transition-colors">
                        <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">1-Day Ticket</span>
                        <div className="text-3xl font-black text-white mb-2 tracking-tighter">$109+</div>
                        <p className="text-white/40 text-sm mb-6">Choose one park per day. Access to all attractions and shows.</p>
                        <button className="w-full py-3 rounded-full bg-green-600 text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-green-500/20">Select Option</button>
                    </div>
                    <div className="bg-[#111] border border-green-400/30 rounded-3xl p-8 flex flex-col items-center group relative shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                        <div className="absolute -top-4 bg-green-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
                        <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">Park Hopper</span>
                        <div className="text-3xl font-black text-white mb-2 tracking-tighter">$189+</div>
                        <p className="text-white/40 text-sm mb-6">Visit multiple parks in the same day starting at 2 PM.</p>
                        <button className="w-full py-3 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase shadow-xl">Get Access</button>
                    </div>
                    <div className="bg-[#111] border border-green-900/40 rounded-3xl p-8 flex flex-col items-center group hover:bg-green-950/10 transition-colors">
                        <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">4-Day Pass</span>
                        <div className="text-3xl font-black text-white mb-2 tracking-tighter">$456+</div>
                        <p className="text-white/40 text-sm mb-6">Maximize your magic. Four days of theme park fun at a great rate.</p>
                        <button className="w-full py-3 rounded-full bg-green-600/20 text-green-400 border border-green-500/30 font-bold text-sm tracking-widest uppercase">Select Option</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
