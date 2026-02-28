"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import HeroCarousel from "@/components/HeroCarousel";
import MovieRow from "@/components/MovieRow";
import Footer from "@/components/Footer";

const marvelUniverse = [
    {
        id: "m1",
        title: "Deadpool & Wolverine",
        image: "https://images.unsplash.com/photo-1549405615-abaab264df22?q=80&w=1500&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1500&auto=format&fit=crop",
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
    }
];

export default function HotstarApp() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-white/30 selection:text-white overflow-hidden pb-12">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="block w-full"
            >
                {/* 1. Sidebar Navigation */}
                <Sidebar />

                {/* 2. Hero Carousel - Disney+ Hotstar immersive banner */}
                <div className="w-full">
                    <HeroCarousel />
                </div>

                {/* 3. Movie Rows section - character-led thematic rows */}
                <div className="relative z-20 -mt-32 space-y-8 bg-gradient-to-b from-transparent via-background to-background pt-8 pb-32">

                    <MovieRow title="Disney Classics" movies={disneyClassics} />
                    <MovieRow title="Marvel Cinematic Universe" movies={marvelUniverse} />
                    <MovieRow title="Pixar Magic" movies={pixarMagic} />
                    <MovieRow title="Trending For You" movies={[...disneyClassics, ...pixarMagic].slice(2, 7)} />
                </div>

                {/* Footer */}
                <Footer />
            </motion.div>
        </main>
    );
}
