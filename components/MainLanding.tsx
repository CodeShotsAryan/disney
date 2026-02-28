"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const tabsData = [
    {
        id: "movies",
        title: "Movies",
        heading: "Cinematic Masterpieces",
        description: "From Lion King to Frozen, Disney's films have defined generations. Immersive worlds, unforgettable characters, and stories that touch every heart.",
        badge: "500+ Films",
    },
    {
        id: "parks",
        title: "Theme Parks",
        heading: "Live the Adventure",
        description: "Step inside the stories. Our parks across 6 continents bring you face-to-face with the magic, the characters, and the wonder that only Disney can create.",
        badge: "12 Parks Worldwide",
    },
    {
        id: "merch",
        title: "Merchandise",
        heading: "Carry the Magic",
        description: "From rare collectibles to everyday apparel — every item is a portal back to your favorite Disney world. Take the magic home with you.",
        badge: "10,000+ Products",
    },
    {
        id: "streaming",
        title: "Disney+",
        heading: "Stream Without Limits",
        description: "Disney, Pixar, Marvel, Star Wars, and National Geographic — all in one place. New originals every week, infinite worlds to explore.",
        badge: "200M+ Subscribers",
    },
];

// Character cards for the main showcase section
const characters = [
    { name: "The Lion King", src: "/lionking.jpg", tag: "Classic" },
    { name: "Mickey Mouse", src: "/mickey.webp", tag: "Iconic" },
    { name: "Disney Universe", src: "/disneo.webp", tag: "Magic" },
];

export default function MainLanding() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    const yText = useTransform(scrollYProgress, [0, 0.3], ["0%", "80%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    return (
        <div ref={containerRef} className="relative bg-background overflow-hidden">

            {/* ── SECTION 1: HERO ── */}
            <motion.section
                className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
                style={{ opacity: opacityHero }}
            >
                {/* Background: disneo image as atmosphere */}
                <div className="absolute inset-0">
                    <Image
                        src="/disneo.webp"
                        alt="Disney Universe"
                        fill
                        className="object-cover opacity-35 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/30 to-background" />
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(16)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: `${Math.random() * 3 + 1}px`,
                                height: `${Math.random() * 3 + 1}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                background: "rgba(147,197,253,0.6)",
                                boxShadow: "0 0 8px rgba(147,197,253,0.4)",
                            }}
                            animate={{ y: [0, -30, 0], opacity: [0.1, 0.7, 0.1] }}
                            transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 3 }}
                        />
                    ))}
                </div>

                <motion.div
                    style={{ y: yText }}
                    className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-px w-10 bg-primary/40" />
                        <span className="text-xs tracking-[0.5em] text-primary/60 uppercase font-sans font-light">Walt Disney Company — Est. 1923</span>
                        <div className="h-px w-10 bg-primary/40" />
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-sans tracking-tight leading-tight mb-5"
                        style={{ textShadow: "0 0 60px rgba(147,197,253,0.15)" }}
                    >
                        Home to Disney, Pixar,
                        <br />
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(135deg, #93c5fd 0%, #e2e8f0 100%)" }}>
                            Marvel, Star Wars & More
                        </span>
                    </motion.h1>

                    {/* Sub */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.9 }}
                        className="text-sm md:text-base text-white/45 font-sans font-light max-w-xl leading-relaxed mb-10"
                    >
                        For over 100 years, The Walt Disney Company has been the world's leading entertainment brand — producing beloved films, pioneering theme parks on 6 continents, and streaming to 200 million households worldwide.
                    </motion.p>

                    {/* Scroll cue */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 1 }}
                        className="flex flex-col items-center gap-3"
                    >
                        <p className="text-xs tracking-[0.4em] text-white/30 uppercase font-sans">Scroll to explore</p>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-px h-10 bg-linear-to-b from-white/30 to-transparent"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* ── SECTION 2: CHARACTER SHOWCASE ── */}
            <section className="relative z-10 py-24 md:py-32 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <p className="text-xs tracking-[0.5em] text-primary/60 uppercase font-sans mb-4">Iconic Worlds</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-sans tracking-tight">
                        Characters That
                        <br />
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(135deg, #93c5fd, #ffffff)" }}>
                            Defined a Century
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {characters.map((char, i) => (
                        <motion.div
                            key={char.name}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative rounded-3xl overflow-hidden cursor-pointer group"
                            style={{ height: "420px" }}
                        >
                            <Image
                                src={char.src}
                                alt={char.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                            {/* Badge */}
                            <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                                <span className="text-xs text-white/70 font-sans tracking-widest uppercase">{char.tag}</span>
                            </div>

                            {/* Bottom text */}
                            <div className="absolute bottom-0 inset-x-0 p-7">
                                <motion.div
                                    initial={{ y: 10, opacity: 0.8 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                >
                                    <p className="text-xl md:text-2xl font-bold text-white font-sans mb-2">{char.name}</p>
                                    <div className="h-px w-10 bg-primary/60 transition-all duration-500 group-hover:w-20" />
                                </motion.div>
                            </div>

                            {/* Glow border on hover */}
                            <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-primary/30 transition-all duration-500"
                                style={{ boxShadow: "0 0 0 0px rgba(147,197,253,0)" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── SECTION 3: STATS ── */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { num: "100+", label: "Years of Magic" },
                        { num: "500+", label: "Feature Films" },
                        { num: "200M+", label: "Global Fans" },
                        { num: "12", label: "Theme Parks" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="text-center"
                        >
                            <p className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans"
                                style={{ textShadow: "0 0 30px rgba(147,197,253,0.3)" }}>
                                {stat.num}
                            </p>
                            <p className="text-sm text-white/40 tracking-widest uppercase font-sans font-light">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── SECTION 4: INTERACTIVE TABS ── */}
            <section className="relative z-10 py-24 md:py-32 px-6 md:px-12">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs tracking-[0.5em] text-primary/60 uppercase font-sans mb-4">Our Universe</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-sans tracking-tight">
                        Everything Disney
                    </h2>
                </motion.div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                    {/* Tab nav */}
                    <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 md:w-72 shrink-0">
                        {tabsData.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex items-center justify-between gap-3 px-6 py-5 rounded-2xl text-left transition-all duration-300 whitespace-nowrap md:whitespace-normal min-w-[140px] md:min-w-0 border ${isActive
                                        ? "bg-primary/10 border-primary/40 text-white"
                                        : "bg-white/[0.03] border-white/5 text-white/40 hover:text-white/70 hover:bg-white/[0.06]"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="tabGlow"
                                            className="absolute inset-0 rounded-2xl border border-primary/30"
                                            style={{ boxShadow: "0 0 20px rgba(147,197,253,0.1)" }}
                                            transition={{ type: "spring", stiffness: 280, damping: 28 }}
                                        />
                                    )}
                                    <span className="font-semibold text-base z-10">{tab.title}</span>
                                    {isActive && (
                                        <span className="text-xs text-primary/60 font-sans z-10 hidden md:block">{tab.badge}</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab content */}
                    <div className="flex-1 relative min-h-[360px] rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02]">
                        {/* Mickey image as background depending on tab */}
                        <div className="absolute inset-0">
                            <Image
                                src="/mickey.webp"
                                alt="Disney Character"
                                fill
                                className="object-cover opacity-5"
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-background/80 via-background/50 to-transparent" />
                        </div>

                        <AnimatePresence mode="wait">
                            {tabsData.map(
                                (tab) =>
                                    activeTab === tab.id && (
                                        <motion.div
                                            key={tab.id}
                                            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                                            transition={{ duration: 0.45, ease: "easeOut" }}
                                            className="relative z-10 p-8 md:p-12 flex flex-col h-full justify-between"
                                        >
                                            <div>
                                                <span className="text-xs tracking-[0.4em] text-primary/60 uppercase font-sans font-light">
                                                    {tab.badge}
                                                </span>
                                                <h3 className="text-3xl md:text-5xl font-bold text-white font-sans mt-4 mb-6 leading-tight">
                                                    {tab.heading}
                                                </h3>
                                                <p className="text-base md:text-lg text-white/55 font-sans font-light leading-relaxed max-w-xl">
                                                    {tab.description}
                                                </p>
                                            </div>

                                            <div className="mt-10 flex items-center gap-6">
                                                <motion.button
                                                    whileHover={{ x: 4 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="flex items-center gap-3 text-white font-sans font-medium tracking-wider uppercase text-sm group"
                                                >
                                                    <span>Explore {tab.title}</span>
                                                    <div className="w-8 h-px bg-white/40 group-hover:w-14 transition-all duration-300" />
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>

                        {/* Corner glow */}
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: BOTTOM BANNER ── */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/disneo.webp" alt="Disney" fill className="object-cover opacity-10" />
                    <div className="absolute inset-0 bg-linear-to-b from-background via-background/40 to-background" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 text-center max-w-3xl mx-auto"
                >
                    <p className="text-xs tracking-[0.5em] text-primary/50 uppercase font-sans mb-6">The Endless Story</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-sans leading-tight mb-8"
                        style={{ textShadow: "0 0 60px rgba(147,197,253,0.15)" }}>
                        Dream It.<br />
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(135deg, #93c5fd, #e2e8f0)" }}>
                            Believe It. Live It.
                        </span>
                    </h2>
                    <p className="text-base text-white/40 font-sans font-light">
                        A hundred years of wonder — and the best is yet to come.
                    </p>
                </motion.div>
            </section>

        </div>
    );
}
