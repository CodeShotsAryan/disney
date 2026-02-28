"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

const characters = [
    { name: "The Lion King", src: "/lionking.jpg", tag: "Classic" },
    { name: "Mickey Mouse", src: "/mickey.webp", tag: "Iconic" },
    { name: "Disney Universe", src: "/disneo.webp", tag: "Magic" },
];

export default function MainLanding() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgVideoRef = useRef<HTMLVideoElement>(null);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const yText = useTransform(scrollYProgress, [0, 0.3], ["0%", "80%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const [isMuted, setIsMuted] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);

    // ── STEP 1: Start video MUTED (only way browsers allow autoplay)
    useEffect(() => {
        const v = bgVideoRef.current;
        if (!v) return;
        v.muted = true;
        v.play().catch(() => {});
    }, []);

    // ── STEP 2: On first user gesture → unmute and play with audio
    // This is the ONLY way to get audio in modern browsers (Chrome, Safari, Firefox)
    useEffect(() => {
        const unlock = () => {
            if (hasInteracted) return;
            const v = bgVideoRef.current;
            if (!v) return;
            v.muted = false;
            v.volume = 0.55;
            v.play().catch(() => {});
            setIsMuted(false);
            setHasInteracted(true);
        };
        window.addEventListener("click", unlock, { once: true });
        window.addEventListener("keydown", unlock, { once: true });
        window.addEventListener("touchstart", unlock, { once: true });
        return () => {
            window.removeEventListener("click", unlock);
            window.removeEventListener("keydown", unlock);
            window.removeEventListener("touchstart", unlock);
        };
    }, [hasInteracted]);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        const v = bgVideoRef.current;
        if (!v) return;
        // If user hasn't interacted yet, this click will also trigger unlock above
        v.muted = !v.muted;
        setIsMuted(v.muted);
        setHasInteracted(true);
    };

    return (
        <div ref={containerRef} className="relative bg-background overflow-hidden">

            {/* ── SECTION 1: HERO ── */}
            <motion.section
                className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
                style={{ opacity: opacityHero }}
            >
                {/* Background Video — NO muted prop here, controlled via ref */}
                <div className="absolute inset-0 overflow-hidden">
                    <video
                        ref={bgVideoRef}
                        src="/Castel.mp4"
                        loop
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105"
                        style={{ pointerEvents: "none" }}
                    />
                    {/* Top fade */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.88) 100%)" }} />
                    {/* Side vignette */}
                    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 35%, rgba(0,0,10,0.62) 100%)" }} />
                </div>

                {/* "Click anywhere for sound" pill — disappears after interaction */}
                <AnimatePresence>
                    {!hasInteracted && (
                        <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: 1.8, duration: 0.7 }}
                            className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/8 backdrop-blur-md border border-white/12 pointer-events-none"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.4, repeat: Infinity }}
                                className="w-1.5 h-1.5 rounded-full bg-blue-300"
                            />
                            <span className="text-[11px] text-white/45 tracking-[0.28em] uppercase font-light">
                                Click anywhere for sound
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mute / Unmute toggle */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    onClick={toggleMute}
                    className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/50 hover:text-white/80 hover:border-white/25 transition-all duration-300 cursor-pointer"
                >
                    {isMuted ? (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                            </svg>
                            <span className="text-[11px] tracking-[0.25em] uppercase font-light">Sound Off</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                    d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                            <span className="text-[11px] tracking-[0.25em] uppercase font-light">Sound On</span>
                        </>
                    )}
                </motion.button>

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

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.9 }}
                        className="text-sm md:text-base text-white/45 font-sans font-light max-w-xl leading-relaxed mb-10"
                    >
                        For over 100 years, The Walt Disney Company has been the world&apos;s leading entertainment brand — producing beloved films, pioneering theme parks on 6 continents, and streaming to 200 million households worldwide.
                    </motion.p>

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
                            className="w-px h-10"
                            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }}
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
                            <Image src={char.src} alt={char.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />
                            <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                                <span className="text-xs text-white/70 font-sans tracking-widest uppercase">{char.tag}</span>
                            </div>
                            <div className="absolute bottom-0 inset-x-0 p-7">
                                <p className="text-xl md:text-2xl font-bold text-white font-sans mb-2">{char.name}</p>
                                <div className="h-px w-10 bg-primary/60 transition-all duration-500 group-hover:w-20" />
                            </div>
                            <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-primary/30 transition-all duration-500" />
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
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-sans tracking-tight">Everything Disney</h2>
                </motion.div>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
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
                    <div className="flex-1 relative min-h-[360px] rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02]">
                        <div className="absolute inset-0">
                            <Image src="/mickey.webp" alt="Disney Character" fill className="object-cover opacity-5" />
                            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)" }} />
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
                                                <span className="text-xs tracking-[0.4em] text-primary/60 uppercase font-sans font-light">{tab.badge}</span>
                                                <h3 className="text-3xl md:text-5xl font-bold text-white font-sans mt-4 mb-6 leading-tight">{tab.heading}</h3>
                                                <p className="text-base md:text-lg text-white/55 font-sans font-light leading-relaxed max-w-xl">{tab.description}</p>
                                            </div>
                                            <div className="mt-10">
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
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: BOTTOM BANNER ── */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/disneo.webp" alt="Disney" fill className="object-cover opacity-10" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,1) 100%)" }} />
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