"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, MapPin, Calendar, Users, Ticket, Sun, Ship } from "lucide-react";
import Image from "next/image";

export default function DisneyParksPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-[#050505] text-white selection:bg-blue-600/30 selection:text-white pb-20">
            {/* Space for Global Navbar */}
            <div className="h-12 w-full" />

            {/* Hero Section */}
            <section className="relative w-full h-[90vh] flex flex-col items-center justify-end pb-12 md:pb-24 px-6 z-10">


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center"
                >
                    <Image src="/disneo.webp" alt="Disney Parks" width={200} height={100} className="mb-6 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] filter contrast-125" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
                        The Most Magical Place <br /> on Earth
                    </h1>

                    <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed mb-10">
                        Discover thrilling attractions, beloved characters, and create memories that will last a lifetime across our global destinations.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-blue-700 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] flex items-center gap-2">
                            <Ticket className="w-5 h-5" /> Buy Theme Park Tickets
                        </button>
                        <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white/20 transition-all hover:border-white/40">
                            Book a Room
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Quick Booking Bar */}
            <div className="relative -mt-8 z-30 max-w-5xl mx-auto px-6 hidden md:block">
                <div className="bg-[#111]/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-4 flex items-center justify-between divide-x divide-white/10">
                    <div className="flex-1 px-6 py-2 flex items-center gap-4 cursor-pointer hover:bg-white/5 rounded-xl transition-colors">
                        <div className="bg-blue-500/20 p-3 rounded-full text-blue-400 border border-blue-500/30"><MapPin className="w-5 h-5" /></div>
                        <div>
                            <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Destination</p>
                            <p className="font-semibold text-white">Walt Disney World Resort</p>
                        </div>
                    </div>
                    <div className="flex-1 px-6 py-2 flex items-center gap-4 cursor-pointer hover:bg-white/5 rounded-xl transition-colors">
                        <div className="bg-blue-500/20 p-3 rounded-full text-blue-400 border border-blue-500/30"><Calendar className="w-5 h-5" /></div>
                        <div>
                            <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Dates</p>
                            <p className="font-semibold text-white">Select Dates</p>
                        </div>
                    </div>
                    <div className="flex-1 px-6 py-2 flex items-center gap-4 cursor-pointer hover:bg-white/5 rounded-xl transition-colors">
                        <div className="bg-blue-500/20 p-3 rounded-full text-blue-400 border border-blue-500/30"><Users className="w-5 h-5" /></div>
                        <div>
                            <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Guests</p>
                            <p className="font-semibold text-white">2 Adults, 2 Children</p>
                        </div>
                    </div>
                    <div className="pl-6 px-2">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Destinations Grid */}
            <section className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Explore Destinations</h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">From castles to cruise ships, find your perfect magical getaway.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination 1 */}
                    {/* <Link href="/child/theme-parks" className="block w-full">
                        <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                            <img src="https://images.unsplash.com/photo-1542361664-963661ebacdd?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Walt Disney World" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
                            <div className="absolute bottom-0 inset-x-0 p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">Walt Disney World Resort</h3>
                                <p className="text-white/80 mb-6 flex items-center gap-2"><MapPin className="w-4 h-4" /> Florida, USA</p>
                                <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-white group-hover:text-gray-900 transition-colors">
                                    Explore Florida
                                </button>
                            </div>
                        </div>
                    </Link>

                    {/* Destination 2 */}
                    {/* <Link href="/child/theme-parks" className="block w-full">
                        <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                            <img src="https://images.unsplash.com/photo-1620023476321-08f30d074127?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Disneyland Resort" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
                            <div className="absolute bottom-0 inset-x-0 p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">Disneyland Resort</h3>
                                <p className="text-white/80 mb-6 flex items-center gap-2"><MapPin className="w-4 h-4" /> California, USA</p>
                                <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-white group-hover:text-gray-900 transition-colors">
                                    Explore California
                                </button>
                            </div>
                        </div>
                    </Link> */}

                    {/* Destination 3 */}
                    <Link href="/child/cruises" className="block w-full">
                        <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                            <img src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Disney Cruise" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent" />
                            <div className="absolute top-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg"><Ship className="w-6 h-6" /></div>
                            <div className="absolute bottom-0 inset-x-0 p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">Disney Cruise Line</h3>
                                <p className="text-white/80 mb-6 flex items-center gap-2"><MapPin className="w-4 h-4" /> Global Destinations</p>
                                <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-white group-hover:text-gray-900 transition-colors">
                                    Set Sail
                                </button>
                            </div>
                        </div>
                    </Link>

                    {/* Destination 4 */}
                    <Link href="/child/theme-parks" className="block w-full">
                        <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                            <img src="https://images.unsplash.com/photo-1533602187515-3850ea9c676d?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Disneyland Paris" />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent" />
                            <div className="absolute top-6 right-6 bg-yellow-500 text-white p-3 rounded-full shadow-lg"><Sun className="w-6 h-6" /></div>
                            <div className="absolute bottom-0 inset-x-0 p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">Disneyland Paris</h3>
                                <p className="text-white/80 mb-6 flex items-center gap-2"><MapPin className="w-4 h-4" /> Paris, France</p>
                                <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-2 rounded-full font-semibold group-hover:bg-white group-hover:text-gray-900 transition-colors">
                                    Explore Paris
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
