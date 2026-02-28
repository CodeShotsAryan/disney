"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import HeroCarousel from "@/components/HeroCarousel";
import MovieRow from "@/components/MovieRow";
import Footer from "@/components/Footer";
import { Sparkles, Baby } from "lucide-react";

// Fake image links for studios
const studios = [
    { id: "disney", name: "Disney", color: "from-blue-600 to-indigo-900", bg: "https://images.unsplash.com/photo-1602622838027-2c93309a9096?q=80&w=600&auto=format&fit=crop" },
    { id: "pixar", name: "Pixar", color: "from-blue-400 to-sky-700", bg: "https://images.unsplash.com/photo-1615592389070-bcc97e0504f3?q=80&w=600&auto=format&fit=crop" },
    { id: "marvel", name: "Marvel", color: "from-red-600 to-red-900", bg: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?q=80&w=600&auto=format&fit=crop" },
    { id: "starwars", name: "Star Wars", color: "from-slate-700 to-black", bg: "https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=600&auto=format&fit=crop" },
    { id: "natgeo", name: "Nat Geo", color: "from-yellow-400 to-yellow-600", bg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop" },
];

const marvelUniverse = [
    {
        id: "m1",
        title: "Deadpool & Wolverine",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1500&auto=format&fit=crop",
        genres: ["Action", "Comedy"],
        year: "2024",
        duration: "2h 7m",
        isNew: true,
    },
    {
        id: "m2",
        title: "Iron Man",
        image: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?q=80&w=1500&auto=format&fit=crop",
        genres: ["Action", "Sci-Fi"],
        year: "2008",
        duration: "2h 6m",
    },
    {
        id: "m3",
        title: "Thor: Ragnarok",
        image: "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?q=80&w=1500&auto=format&fit=crop",
        genres: ["Action", "Comedy"],
        year: "2017",
        duration: "2h 10m",
    },
    {
        id: "m4",
        title: "Guardians of the Galaxy",
        image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?q=80&w=1500&auto=format&fit=crop",
        genres: ["Action", "Adventure"],
        year: "2014",
        duration: "2h 2m",
    },
    {
        id: "m5",
        title: "Spider-Man: No Way Home",
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1500&auto=format&fit=crop",
        genres: ["Action", "Adventure"],
        year: "2021",
        duration: "2h 28m",
    },
    {
        id: "m6",
        title: "Avengers: Endgame",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1500&auto=format&fit=crop",
        genres: ["Action", "Sci-Fi"],
        year: "2019",
        duration: "3h 1m",
    },
    {
        id: "m7",
        title: "Black Panther",
        image: "https://images.unsplash.com/photo-1508215885820-4585e5610ec0?q=80&w=1500&auto=format&fit=crop",
        genres: ["Action", "Adventure"],
        year: "2018",
        duration: "2h 14m",
    },
    {
        id: "m8",
        title: "Doctor Strange",
        image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1500&auto=format&fit=crop",
        genres: ["Action", "Fantasy"],
        year: "2016",
        duration: "1h 55m",
    }
];

const disneyClassics = [
    {
        id: "d1",
        title: "The Lion King",
        image: "https://images.unsplash.com/photo-1534685012542-de6b02a632aa?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Family"],
        year: "1994",
        duration: "1h 28m",
    },
    {
        id: "d2",
        title: "Frozen",
        image: "https://plus.unsplash.com/premium_photo-1673827310574-8b1d9bf5c02b?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Musical"],
        year: "2013",
        duration: "1h 42m",
    },
    {
        id: "d3",
        title: "Moana",
        image: "https://images.unsplash.com/photo-1498471413838-89c5651cb992?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Adventure"],
        year: "2016",
        duration: "1h 47m",
    },
    {
        id: "d4",
        title: "Aladdin",
        image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Fantasy"],
        year: "1992",
        duration: "1h 30m",
    },
    {
        id: "d5",
        title: "Beauty and the Beast",
        image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Romance"],
        year: "1991",
        duration: "1h 24m",
    },
    {
        id: "d6",
        title: "Tangled",
        image: "https://images.unsplash.com/photo-1505682614136-0a12f9e7bebf?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Family"],
        year: "2010",
        duration: "1h 40m",
    },
    {
        id: "d7",
        title: "Mulan",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Action"],
        year: "1998",
        duration: "1h 28m",
    },
    {
        id: "d8",
        title: "Zootopia",
        image: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Comedy"],
        year: "2016",
        duration: "1h 48m",
    }
];

const pixarMagic = [
    {
        id: "p1",
        title: "Toy Story",
        image: "https://images.unsplash.com/photo-1615592389070-bcc97e0504f3?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Comedy"],
        year: "1995",
        duration: "1h 21m",
    },
    {
        id: "p2",
        title: "Finding Nemo",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Adventure"],
        year: "2003",
        duration: "1h 40m",
    },
    {
        id: "p3",
        title: "Inside Out",
        image: "https://images.unsplash.com/photo-1505682614136-0a12f9e7bebf?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Family"],
        year: "2015",
        duration: "1h 35m",
    },
    {
        id: "p4",
        title: "Up",
        image: "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Adventure"],
        year: "2009",
        duration: "1h 36m",
    },
    {
        id: "p5",
        title: "The Incredibles",
        image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Action"],
        year: "2004",
        duration: "1h 55m",
    },
    {
        id: "p6",
        title: "Coco",
        image: "https://images.unsplash.com/photo-1514300300620-bd8969e63473?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Music"],
        year: "2017",
        duration: "1h 45m",
    },
    {
        id: "p7",
        title: "Ratatouille",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Comedy"],
        year: "2007",
        duration: "1h 51m",
    },
    {
        id: "p8",
        title: "Monsters, Inc.",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1500&auto=format&fit=crop",
        genres: ["Animation", "Family"],
        year: "2001",
        duration: "1h 32m",
    }
];

export default function HotstarApp() {
    const [kidsMode, setKidsMode] = useState(false);

    // If kids mode is active, only show animation-friendly genres.
    const marvelKids = marvelUniverse.filter(m => m.genres.includes("Comedy") || m.genres.includes("Adventure"));

    return (
        <main className={`min-h-screen relative selection:bg-white/30 selection:text-white overflow-hidden pb-12 transition-colors duration-1000 ${kidsMode ? "bg-[#094065]" : "bg-background"}`}>

            {/* Ambient Background for Kids mode */}
            <AnimatePresence>
                {kidsMode && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,#fbbf24_0%,transparent_50%)] pointer-events-none mix-blend-screen opacity-30"
                    />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="block w-full relative z-10"
            >
                {/* 1. Sidebar Navigation */}
                <Sidebar />

                {/* Kids Mode Accessible Toggle */}
                <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
                    <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">{kidsMode ? 'Magic Mode' : 'Standard'}</span>
                    <button
                        onClick={() => setKidsMode(!kidsMode)}
                        className={`relative w-20 h-10 rounded-full p-1 transition-colors duration-500 ease-in-out ${kidsMode ? "bg-yellow-400" : "bg-white/10 border border-white/20"}`}
                        aria-label="Toggle Kids Mode"
                    >
                        <motion.div
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg"
                            animate={{ x: kidsMode ? 40 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                            {kidsMode ? <Sparkles className="w-5 h-5 text-yellow-500" /> : <Baby className="w-5 h-5 text-blue-500" />}
                        </motion.div>
                    </button>
                </div>

                {/* 2. Hero Carousel - Disney+ Hotstar immersive banner */}
                <div className="w-full">
                    <HeroCarousel />
                </div>

                {/* EXPERIENTIAL FRANCHISE NAVIGATION */}
                <div className="relative z-30 px-[6%] md:px-[8%] lg:px-[100px] mt-12 mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-xl font-bold text-white tracking-widest uppercase">Explore Core Worlds</h3>
                    </div>

                    {/* Gamified Worlds Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                        {studios.map((studio, idx) => (
                            <motion.div
                                key={studio.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group bg-gradient-to-br ${studio.color} shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-white/10`}
                            >
                                <img src={studio.bg} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-300 mix-blend-overlay" alt={studio.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h4 className="text-white font-black text-xl md:text-2xl tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300">
                                        {studio.name}
                                    </h4>
                                </div>

                                <motion.div
                                    className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/50 transition-colors duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. Movie Rows section - character-led thematic rows */}
                <div className="relative z-20 space-y-8 bg-gradient-to-b from-transparent via-background to-background pt-8 pb-32">

                    {/* Conditional rendering based on Kids Mode Accessibility */}
                    {!kidsMode && <MovieRow title="Marvel Cinematic Universe" movies={marvelUniverse} />}

                    <MovieRow title="Disney Classics" movies={disneyClassics} />
                    <MovieRow title="Pixar Magic" movies={pixarMagic} />

                    {/* Character-led UI Row */}
                    {!kidsMode && <MovieRow title="Trending For You" movies={[...disneyClassics, ...pixarMagic].slice(2, 10)} />}
                    {kidsMode && <MovieRow title="Adventures for Heroes!" movies={marvelKids} />}
                </div>

                {/* Footer */}
                <Footer />
            </motion.div>
        </main>
    );
}
