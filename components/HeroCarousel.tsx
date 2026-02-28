"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Plus } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Loki Season 2",
        description: "Loki finds himself in a battle for the soul of the Time Variance Authority.",
        image: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=2070&auto=format&fit=crop",
        genres: ["SuperHero", "Action", "Science Fiction"],
        meta: "2023 • 2 Seasons • U/A 13+",
    },
    {
        id: 2,
        title: "The Mandalorian",
        description: "The travels of a lone bounty hunter in the outer reaches of the galaxy.",
        image: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?q=80&w=2000&auto=format&fit=crop",
        genres: ["Action", "Adventure", "Sci-Fi"],
        meta: "2019 • 3 Seasons • U/A 13+",
    },
    {
        id: 3,
        title: "Avatar: The Way of Water",
        description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",
        genres: ["Action", "Adventure", "Fantasy"],
        meta: "2022 • 3h 12m • U/A 13+",
    },
    {
        id: 4,
        title: "WandaVision",
        description: "Blends the style of classic sitcoms with the MCU in which Wanda Maximoff and Vision begin to suspect everything is not as it seems.",
        image: "https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?q=80&w=2000&auto=format&fit=crop",
        genres: ["Comedy", "Action", "Drama"],
        meta: "2021 • 1 Season • U/A 13+",
    }
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[85vh] overflow-hidden bg-background">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover object-top"
                    />
                    {/* Gradients to blend into the background seamlessly */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-10 flex flex-col justify-end pb-24 px-12 md:px-24 pl-32 md:pl-48">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tighter text-glow">
                            {slides[currentSlide].title}
                        </h1>

                        <p className="text-sm font-semibold text-white/80 mb-4 tracking-widest">
                            {slides[currentSlide].meta} • {slides[currentSlide].genres.join(", ")}
                        </p>

                        <p className="text-lg text-white/90 mb-8 line-clamp-3 font-light leading-relaxed">
                            {slides[currentSlide].description}
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white text-white hover:text-black rounded-lg transition-all font-semibold uppercase tracking-wider text-sm backdrop-blur-md">
                                <Play className="w-5 h-5 fill-current" />
                                Watch Now
                            </button>
                            <button className="flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-md">
                                <Plus className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="absolute bottom-8 right-12 flex gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1 rounded-full transition-all duration-500 ${currentSlide === idx ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/80"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
