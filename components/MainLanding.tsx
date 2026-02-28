"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const tabsData = [
    {
        id: "movies",
        title: "Movies",
        heading: "Cinematic Masterpieces",
        description: "From timeless animated classics to blockbuster franchises, our stories transport you to galaxies far, far away and realms of pure imagination.",
    },
    {
        id: "parks",
        title: "Theme Parks",
        heading: "The Happiest Places on Earth",
        description: "Step into the stories. Experience the magic firsthand with our world-class resorts, immersive attractions, and unforgettable character encounters.",
    },
    {
        id: "merch",
        title: "Merchandise",
        heading: "Take the Magic Home",
        description: "Discover exclusive collectibles, apparel, and toys that let you carry a piece of the Disney magic with you wherever you go.",
    },
    {
        id: "streaming",
        title: "Streaming",
        heading: "Endless Entertainment",
        description: "Stream your favorite stories, exclusive originals, and the very best from Disney, Pixar, Marvel, Star Wars, and National Geographic.",
    }
];

export default function MainLanding() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Parallax values
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    return (
        <div
            ref={containerRef}
            className="relative flex flex-col items-center justify-start min-h-[150vh] pb-32 bg-background overflow-hidden"
        >
            {/* Absolute floating magical dust particles - now using white/silver/blue theme */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary/80"
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                            boxShadow: "0 0 10px rgba(147, 197, 253, 0.5)"
                        }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.1, 0.6, 0.1],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <motion.section
                className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
                style={{ y: yText, opacity: opacityText }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center text-center space-y-6"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
                        <h2 className="text-xl md:text-2xl tracking-[0.3em] text-primary/80 uppercase font-light">
                            Where Dreams Begin
                        </h2>
                        <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
                    </div>

                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-glow text-transparent bg-clip-text bg-linear-to-br from-white via-slate-200 to-primary/50">
                        DISNEY
                    </h1>
                    <p className="max-w-xl text-lg md:text-2xl text-foreground/70 font-light mt-8">
                        Step into a premium universe filled with the stories that shaped our childhoods.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-16"
                    >
                        <div className="w-px h-24 bg-linear-to-b from-primary to-transparent" />
                    </motion.div>
                </motion.div>

                {/* Dynamic Abstract 3D shape replacement */}
                <motion.div
                    style={{ y: yBg, scale: scaleImage }}
                    className="absolute w-[800px] h-[800px] -bottom-[400px] bg-linear-to-t from-primary/10 to-transparent rounded-full blur-3xl z-0"
                />
            </motion.section>

            {/* Interactive Universe Tabs Section */}
            <section className="relative z-10 w-full min-h-screen py-32 px-6 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                        Our Worlds
                    </h3>
                    <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
                        Explore the different facets of magic we bring to the world.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
                    {/* Tabs Navigation */}
                    <div className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-1/3 gap-4 pb-4 md:pb-0 z-20 hide-scrollbar">
                        {tabsData.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex items-center justify-center p-6 rounded-2xl transition-all duration-300 min-w-[150px] md:min-w-0 ${isActive
                                        ? "bg-primary/10 border-primary/30 text-white"
                                        : "glass-panel text-foreground/60 hover:text-white hover:bg-white/5"
                                        } border border-transparent`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute inset-0 border border-primary/50 bg-primary/5 rounded-2xl"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="font-semibold text-lg z-10 whitespace-nowrap text-center">{tab.title}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tabs Content Area */}
                    <div className="w-full md:w-2/3 glass-panel rounded-3xl min-h-[400px] relative overflow-hidden flex items-center justify-center p-8 md:p-16">
                        <AnimatePresence mode="wait">
                            {tabsData.map(
                                (tab) =>
                                    activeTab === tab.id && (
                                        <motion.div
                                            key={tab.id}
                                            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="flex flex-col items-start w-full"
                                        >
                                            <h4 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white text-glow">
                                                {tab.heading}
                                            </h4>
                                            <p className="text-xl text-foreground/80 font-light leading-relaxed mb-10">
                                                {tab.description}
                                            </p>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-8 py-4 bg-transparent border border-primary/50 text-white hover:bg-primary/20 transition-all uppercase tracking-widest text-sm relative overflow-hidden group"
                                            >
                                                <span className="relative z-10">Explore {tab.title}</span>
                                                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                                            </motion.button>
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>

                        {/* Background glow for content area */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>
            </section>
        </div>
    );
}
