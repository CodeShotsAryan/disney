"use client";

import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

// --- Advanced 3D Tilt Card Component ---
function TiltCard({ char, index }: { char: any, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for smooth return
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

    // Dynamic glare effect based on mouse position
    const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [100, 0]), springConfig);
    const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [100, 0]), springConfig);
    const background = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 40%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
            style={{ perspective: 1000 }}
            className="w-full relative"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative rounded-3xl cursor-pointer group w-full"
            >
                {/* 3D Wrapper that pops out */}
                <div
                    className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group-hover:border-primary/40 transition-colors duration-500"
                    style={{ height: "460px" }}
                >
                    <Image
                        src={char.src}
                        alt={char.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Deep gradient for text readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-80" />

                    {/* Dynamic Glare Overlay */}
                    <motion.div className="absolute inset-0 z-10 mix-blend-overlay pointer-events-none" style={{ background }} />

                    {/* Badge slightly elevated in 3D */}
                    <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 z-20" style={{ transform: "translateZ(30px)" }}>
                        <span className="text-xs text-white uppercase tracking-widest font-semibold">{char.tag}</span>
                    </div>

                    {/* Content elevated in 3D */}
                    <div className="absolute bottom-0 inset-x-0 p-8 z-20" style={{ transform: "translateZ(50px)" }}>
                        <motion.div initial={{ y: 20, opacity: 0.8 }} whileHover={{ y: 0, opacity: 1 }}>
                            <p className="text-2xl font-bold text-white mb-3" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>{char.name}</p>
                            <p className="text-sm text-white/70 font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-balance">
                                {char.desc}
                            </p>
                            <div className="flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span>Explore</span>
                                <div className="h-px w-6 bg-primary group-hover:w-12 transition-all duration-500" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const characters = [
    { name: "The Lion King", src: "/lionking.jpg", tag: "Classic", desc: "Journey to the Pride Lands. A story of legacy, courage, and the circle of life." },
    { name: "Mickey Mouse", src: "/mickey.webp", tag: "Iconic", desc: "The mouse that started it all. Join the timeless adventures of Walt's greatest creation." },
    { name: "Disney Universe", src: "/disneo.webp", tag: "Magic", desc: "Where imagination knows no bounds. Discover worlds beyond your wildest dreams." },
];

export default function MainLanding() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // Parallax Effects
    const yHeroText = useTransform(scrollYProgress, [0, 0.3], ["0%", "120%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const scaleHeroImage = useTransform(scrollYProgress, [0, 0.4], [1.05, 1.25]);

    const yPortalBase = useTransform(scrollYProgress, [0.7, 1], ["20%", "0%"]);
    const scalePortal = useTransform(scrollYProgress, [0.7, 1], [0.85, 1]);

    const [activePortalHover, setActivePortalHover] = useState(false);

    return (
        <div ref={containerRef} className="relative bg-[#050505] overflow-hidden selection:bg-primary/30 selection:text-white">

            {/* ── SECTION 1: IMMERSIVE HERO PARALLAX ── */}
            <motion.section
                className="relative w-full h-[120vh] flex flex-col items-center justify-start pt-[30vh] overflow-hidden"
                style={{ opacity: opacityHero }}
            >
                <motion.div className="absolute inset-0" style={{ scale: scaleHeroImage }}>
                    <Image src="/disneo.webp" alt="Disney Universe" fill className="object-cover opacity-35" priority />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/70 to-[#050505]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,#050505_80%)]" />
                </motion.div>

                {/* Floating ambient particles */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-primary"
                            style={{
                                width: `${Math.random() * 3 + 1}px`,
                                height: `${Math.random() * 3 + 1}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                filter: "blur(1px)",
                            }}
                            animate={{ y: [0, -40, 0], opacity: [0, 0.8, 0], x: [0, Math.random() * 20 - 10, 0] }}
                            transition={{ duration: Math.random() * 5 + 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
                        />
                    ))}
                </div>

                <motion.div
                    style={{ y: yHeroText }}
                    className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <motion.div animate={{ width: [10, 40, 10] }} transition={{ duration: 4, repeat: Infinity }} className="h-[2px] bg-primary/40" />
                            <span className="text-sm tracking-[0.6em] text-primary/80 uppercase font-medium">Est. 1923</span>
                            <motion.div animate={{ width: [10, 40, 10] }} transition={{ duration: 4, repeat: Infinity }} className="h-[2px] bg-primary/40" />
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] mb-8"
                            style={{ textShadow: "0 0 80px rgba(147,197,253,0.2)" }}>
                            Infinite
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#93c5fd] via-white to-[#3b82f6]">
                                Imagination
                            </span>
                        </h1>

                        <p className="text-lg md:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed mb-16">
                            Step into a century of storytelling. Explore immersive worlds, legendary characters, and the magic that connects us all.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1.5 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <p className="text-xs tracking-[0.4em] text-white/30 uppercase">Scroll downward</p>
                        <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1/2 bg-white"
                                animate={{ y: ["-100%", "200%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* ── SECTION 2: GAMIFIED 3D CHARACTER SHOWCASE ── */}
            <section className="relative z-20 py-32 px-6 md:px-12 bg-[#050505]">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm tracking-[0.5em] text-primary/60 uppercase mb-4 font-semibold">
                        Legendary Worlds
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Characters That <span className="text-white/40 italic font-serif">Defined</span> a Century
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
                    {characters.map((char, i) => (
                        <TiltCard key={char.name} char={char} index={i} />
                    ))}
                </div>
            </section>

            {/* ── SECTION 3: THE MAGICAL PORTAL TO HOTSTAR ── */}
            {/* This is the advanced entryway to the streaming app */}
            <section className="relative z-30 min-h-[120vh] flex items-center justify-center py-32 px-6 overflow-hidden bg-[#020202]">
                {/* Dynamic glowing background behind portal */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        background: activePortalHover
                            ? "radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, rgba(2,2,2,1) 70%)"
                            : "radial-gradient(circle at center, rgba(37,99,235,0.02) 0%, rgba(2,2,2,1) 40%)"
                    }}
                    transition={{ duration: 0.8 }}
                />

                <motion.div
                    style={{ y: yPortalBase, scale: scalePortal }}
                    className="relative w-full max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16 relative z-10">
                        <motion.h2 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter mix-blend-screen"
                            style={{ textShadow: activePortalHover ? "0 0 100px rgba(59,130,246,0.5)" : "none" }}
                        >
                            The Streaming <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Revolution</span>
                        </motion.h2>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
                            Enter the ultimate entertainment hub. Every story, every match, every hero, waiting for you.
                        </p>
                    </div>

                    {/* The Gamified Portal Container */}
                    <Link href="/hotstar">
                        <motion.div
                            onMouseEnter={() => setActivePortalHover(true)}
                            onMouseLeave={() => setActivePortalHover(false)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative w-full aspect-video rounded-[3rem] overflow-hidden cursor-pointer group shadow-2xl border border-white/10 mx-auto"
                            style={{ boxShadow: activePortalHover ? "0 40px 100px -20px rgba(37,99,235,0.4)" : "0 20px 40px -20px rgba(0,0,0,0.8)" }}
                        >
                            {/* Inner portal visuals */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/disneo.webp"
                                    alt="Disney+ Hotstar Portal"
                                    fill
                                    className="object-cover opacity-40 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-blue-900/20 mix-blend-color group-hover:opacity-0 transition-opacity duration-700" />
                            </div>

                            {/* Center Play Button & Text */}
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8">
                                <motion.div
                                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl flex items-center justify-center mb-8 group-hover:bg-blue-600/90 group-hover:border-blue-400 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all duration-500"
                                >
                                    <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-2 group-hover:scale-110 transition-transform duration-300" />
                                </motion.div>

                                <div className="overflow-hidden">
                                    <motion.p
                                        className="text-white text-3xl md:text-5xl font-bold tracking-tight translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out"
                                    >
                                        Enter <span className="text-blue-400">Disney+ Hotstar</span>
                                    </motion.p>
                                </div>
                            </div>

                            {/* Decorative glowing border scanning effect */}
                            <div className="absolute inset-x-0 -bottom-px h-[2px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_#3b82f6]" />
                        </motion.div>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
