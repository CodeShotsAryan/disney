"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 inset-x-0 z-[100] h-20 md:h-24 px-6 md:px-12 flex items-center justify-start"
                style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.0) 100%)" }}
            >
                {/* Desktop Nav Links (Left side only) */}
                <div className="hidden lg:flex items-center gap-8 text-white/90 font-medium text-xs tracking-widest uppercase">
                    <Link href="/" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Disney+</Link>
                    <Link href="/child" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Parks & Cruises</Link>
                    <Link href="/marvel" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Marvel</Link>
                    <Link href="/starwars" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Star Wars</Link>
                    <Link href="/pixar" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Pixar</Link>
                </div>

                {/* Mobile Hamburger */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white flex items-center gap-2">
                    <Menu className="w-8 h-8 drop-shadow-md" />
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 lg:hidden pt-20">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white uppercase tracking-widest">Disney+</Link>
                    <Link href="/child" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white uppercase tracking-widest">Parks & Cruises</Link>
                    <Link href="/marvel" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white uppercase tracking-widest">Marvel</Link>
                    <Link href="/starwars" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white uppercase tracking-widest">Star Wars</Link>
                    <Link href="/pixar" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white uppercase tracking-widest">Pixar</Link>
                    <button onClick={() => setIsOpen(false)} className="mt-12 text-white/50 border-b border-white/50 uppercase text-sm tracking-[0.2em] pb-1">Close Menu</button>
                </div>
            )}
        </>
    );
}
