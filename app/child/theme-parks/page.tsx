"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, MapPin } from "lucide-react";
import Image from "next/image";

export default function ThemeParksPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#050505] text-white selection:bg-purple-600/30 selection:text-white pb-20 pt-24 font-sans">
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>



            <section className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 mt-10 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Magical Theme Parks
                </h1>
                <p className="text-lg text-white/60 mb-16 max-w-2xl">
                    Discover enchanting lands where classic stories come to life, from flying elephants to galaxies far, far away.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {/* Park 1 */}
                    <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer hover:border-purple-500/50 transition-colors">
                        <div className="relative h-64 w-full">
                            <Image src="https://images.unsplash.com/photo-1542361664-963661ebacdd?q=80&w=1500&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100" alt="Magic Kingdom" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                        </div>
                        <div className="p-8 relative -mt-10">
                            <h3 className="text-2xl font-bold mb-2 text-white">Magic Kingdom</h3>
                            <p className="text-white/50 text-sm mb-6 flex items-center gap-2"><MapPin className="w-4 h-4" /> Florida, USA</p>
                            <button className="w-full py-3 rounded-full bg-white/5 text-white border border-white/20 hover:bg-white hover:text-black transition-colors font-semibold">Explore Park</button>
                        </div>
                    </div>

                    {/* Park 2 */}
                    <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer hover:border-purple-500/50 transition-colors">
                        <div className="relative h-64 w-full">
                            <Image src="https://images.unsplash.com/photo-1620023476321-08f30d074127?q=80&w=1500&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100" alt="Disneyland Park" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                        </div>
                        <div className="p-8 relative -mt-10">
                            <h3 className="text-2xl font-bold mb-2 text-white">Disneyland Park</h3>
                            <p className="text-white/50 text-sm mb-6 flex items-center gap-2"><MapPin className="w-4 h-4" /> California, USA</p>
                            <button className="w-full py-3 rounded-full bg-white/5 text-white border border-white/20 hover:bg-white hover:text-black transition-colors font-semibold">Explore Park</button>
                        </div>
                    </div>

                    {/* Park 3 */}
                    <div className="bg-[#111] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer hover:border-purple-500/50 transition-colors hidden md:block lg:block">
                        <div className="relative h-64 w-full">
                            <Image src="https://images.unsplash.com/photo-1533602187515-3850ea9c676d?q=80&w=1500&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100" alt="Disneyland Paris" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                        </div>
                        <div className="p-8 relative -mt-10">
                            <h3 className="text-2xl font-bold mb-2 text-white">Disneyland Paris</h3>
                            <p className="text-white/50 text-sm mb-6 flex items-center gap-2"><MapPin className="w-4 h-4" /> Paris, France</p>
                            <button className="w-full py-3 rounded-full bg-white/5 text-white border border-white/20 hover:bg-white hover:text-black transition-colors font-semibold">Explore Park</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
