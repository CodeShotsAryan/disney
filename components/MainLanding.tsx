"use client";

import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

import FloatingBirds from "./FloatingBirds";
import FloatingFairies from "./FloatingFairies";
import Footer from "./Footer";
import FixedMickey from "./FixedMickey";

// --- Advanced 3D Tilt Card Component ---
// function TiltCard({ char, index }: { char: any, index: number }) {
//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);

//     // Spring physics for smooth return
//     const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
//     const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
//     const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

//     // Dynamic glare effect based on mouse position
//     const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [100, 0]), springConfig);
//     const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [100, 0]), springConfig);
//     const background = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 40%)`;

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const width = rect.width;
//         const height = rect.height;
//         const mouseXPos = e.clientX - rect.left;
//         const mouseYPos = e.clientY - rect.top;
//         const xPct = mouseXPos / width - 0.5;
//         const yPct = mouseYPos / height - 0.5;
//         mouseX.set(xPct);
//         mouseY.set(yPct);
//     };

//     const handleMouseLeave = () => {
//         mouseX.set(0);
//         mouseY.set(0);
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
//             style={{ perspective: 1000 }}
//             className="w-full relative"
//         >
//             <motion.div
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//                 style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//                 className="relative rounded-3xl cursor-pointer group w-full"
//             >
//                 {/* 3D Wrapper that pops out */}
//                 <div
//                     className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group-hover:border-primary/40 transition-colors duration-500"
//                     style={{ height: "460px" }}
//                 >
//                     <Image
//                         src={char.src}
//                         alt={char.name}
//                         fill
//                         className="object-cover transition-transform duration-1000 group-hover:scale-110"
//                     />

//                     {/* Deep gradient for text readability */}
//                     <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-80" />

//                     {/* Dynamic Glare Overlay */}
//                     <motion.div className="absolute inset-0 z-10 mix-blend-overlay pointer-events-none" style={{ background }} />

//                     {/* Badge slightly elevated in 3D */}
//                     <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 z-20" style={{ transform: "translateZ(30px)" }}>
//                         <span className="text-xs text-white uppercase tracking-widest font-semibold">{char.tag}</span>
//                     </div>

//                     {/* Content elevated in 3D */}
//                     <div className="absolute bottom-0 inset-x-0 p-8 z-20" style={{ transform: "translateZ(50px)" }}>
//                         <motion.div initial={{ y: 20, opacity: 0.8 }} whileHover={{ y: 0, opacity: 1 }}>
//                             <p className="text-2xl font-bold text-white mb-3" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>{char.name}</p>
//                             <p className="text-sm text-white/70 font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-balance">
//                                 {char.desc}
//                             </p>
//                             <div className="flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300">
//                                 <span>Explore</span>
//                                 <div className="h-px w-6 bg-primary group-hover:w-12 transition-all duration-500" />
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// }

const characters = [
    { name: "The Lion King", src: "/lionking.jpg", tag: "Classic", desc: "Journey to the Pride Lands. A story of legacy, courage, and the circle of life." },
    { name: "Spider-Man", src: "/spider.png", tag: "Marvel", desc: "Your friendly neighborhood hero. With great power comes great responsibility." },
    { name: "Disney Universe", src: "/disneo.webp", tag: "Magic", desc: "Where imagination knows no bounds. Discover worlds beyond your wildest dreams." },
];

const tabsData = [
    {
        id: "marvel",
        title: "Marvel",
        badge: "Superheroes",
        heading: "The Marvel Cinematic Universe",
        description: "Assemble with Earth's mightiest heroes. Experience the epic saga of the Avengers from the very beginning."
    },
    {
        id: "starwars",
        title: "Star Wars",
        badge: "Sci-Fi",
        heading: "A Galaxy Far, Far Away",
        description: "Join the resistance. Epic battles, legendary Jedi, and the ultimate ancient fight between light and dark."
    },
    {
        id: "pixar",
        title: "Pixar",
        badge: "Animation",
        heading: "Wonders of Pixar",
        description: "Heartwarming tales that speak to all ages. Journey into the imagination where toys come alive and emotions have feelings."
    }
];

export default function MainLanding() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgVideoRef = useRef<HTMLVideoElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [hasInteracted, setHasInteracted] = useState(false);
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    useEffect(() => {
        const handleInteraction = () => setHasInteracted(true);
        window.addEventListener("click", handleInteraction);
        window.addEventListener("scroll", handleInteraction);
        window.addEventListener("touchstart", handleInteraction);
        return () => {
            window.removeEventListener("click", handleInteraction);
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
        };
    }, []);

    // Parallax Effects
    const yHeroText = useTransform(scrollYProgress, [0, 0.3], ["0%", "120%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const scaleHeroImage = useTransform(scrollYProgress, [0, 0.4], [1.05, 1.25]);

    const yPortalBase = useTransform(scrollYProgress, [0.7, 1], ["20%", "0%"]);
    const scalePortal = useTransform(scrollYProgress, [0.7, 1], [0.85, 1]);

    const [activePortalHover, setActivePortalHover] = useState(false);

    return (
        <div ref={containerRef} className="relative bg-[#050505] overflow-hidden selection:bg-primary/30 selection:text-white">

            {/* Fixed Magical/Disney Elements */}
            <FixedMickey />

            {/* ── SECTION 1: IMMERSIVE HERO PARALLAX ── */}
            <motion.section
                className="relative w-full h-[100vh] flex flex-col items-center justify-start pt-[15vh] md:pt-[25vh] overflow-hidden"
                style={{ opacity: opacityHero }}
            >
                {/* Background Video — NO muted prop here, controlled via ref */}
                <div className="absolute inset-0 overflow-hidden">
                    <video
                        ref={bgVideoRef}
                        src="/Castel.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover opacity-[0.85] scale-105"
                        style={{ pointerEvents: "none" }}
                    />
                    {/* Top + bottom fade to blend smoothly into the black background */}
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
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

                {/* Magical Angels/Fairies flying */}
                <FloatingFairies />

                {/* Magical Birds flying */}
                <FloatingBirds />

                {/* Floating ambient HTML particles */}
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

                        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter leading-[1] md:leading-[0.9] mb-8 drop-shadow-[0_0_80px_rgba(147,197,253,0.2)]">
                            The Magic of
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#93c5fd] via-white to-[#3b82f6]">
                                Disney
                            </span>
                        </h1>

                        {/* <p className="text-lg md:text-2xl text-white font-light max-w-2xl mx-auto leading-relaxed mb-16">
                            Stream the greatest stories  from Disney, Pixar, Marvel, Star Wars, and National Geographic.
                        </p> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1.5 }}
                        className="flex flex-col items-center gap-4"
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

            {/* ── SECTION 3: INTERACTIVE STORYTELLING & GAMIFIED EXPLORATION ── */}
            <section className="relative z-20 py-32 px-6 md:px-12 bg-[#020202] overflow-hidden">
                {/* Magical ambient lighting behind section */}
                <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
                <div className="absolute bottom-0 left-1/4 w-[1000px] h-[1000px] bg-blue-900/15 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

                <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}>
                        <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight drop-shadow-2xl">
                            Interactive <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 font-bold">Storytelling</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                            A journey designed for Families, Kids, Teens, and Nostalgia-driven adults. Dive into interactive tales where every choice reveals a new secret.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto relative z-10">

                    {/* Gamified Card - Large Image Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 min-h-[500px] rounded-[2.5rem] relative overflow-hidden group cursor-pointer border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Background Image */}
                        <img
                            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1500&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out brightness-75 group-hover:brightness-100"
                            alt="Magical landscape"
                        />

                        {/* Glassmorphic internal framing */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-black/40 to-transparent transition-opacity duration-700" />

                        {/* Content */}
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <motion.div initial={{ y: 20, opacity: 0.9 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                                <div className="mb-4 inline-flex px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                    <span className="text-xs text-white uppercase tracking-widest font-semibold">Gamification</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>
                                    Magical Exploration
                                </h3>
                                <p className="text-white/80 text-lg leading-relaxed font-light mb-8 max-w-md">
                                    Navigate through magical worlds and uncover hidden artifacts. Designed with high accessibility for children to easily discover legendary tales.
                                </p>
                                <div className="flex items-center gap-3 text-purple-300 font-bold tracking-widest text-sm uppercase group-hover:text-pink-300 transition-colors">
                                    <span>Begin Journey</span>
                                    <div className="h-0.5 w-8 bg-purple-300 group-hover:w-16 transition-all duration-700" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Character Card - Large Image Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex-1 min-h-[500px] rounded-[2.5rem] relative overflow-hidden group cursor-pointer border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Background Image */}
                        <img
                            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1500&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out brightness-75 group-hover:brightness-100"
                            alt="Character navigation"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-black/40 to-transparent transition-opacity duration-700" />

                        {/* Content */}
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <motion.div initial={{ y: 20, opacity: 0.9 }} whileHover={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                                <div className="mb-4 inline-flex px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                    <span className="text-xs text-white uppercase tracking-widest font-semibold">Companions</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>
                                    Character Navigation
                                </h3>
                                <p className="text-white/80 text-lg leading-relaxed font-light mb-8 max-w-md">
                                    Let legendary heroes guide your content discovery. Say goodbye to heavy menus, and hello to intuitive, emotional companion-driven interfaces.
                                </p>
                                <div className="flex items-center gap-3 text-indigo-300 font-bold tracking-widest text-sm uppercase group-hover:text-blue-300 transition-colors">
                                    <span>Meet The Cast</span>
                                    <div className="h-0.5 w-8 bg-indigo-300 group-hover:w-16 transition-all duration-700" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
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
                            <Image src="/spider.png" alt="Spider-Man" fill className="object-contain opacity-20" />
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
                                                <Link href={`/${tab.id}`}>
                                                    <motion.button
                                                        whileHover={{ x: 4 }}
                                                        whileTap={{ scale: 0.97 }}
                                                        className="flex items-center gap-3 text-white font-sans font-medium tracking-wider uppercase text-sm group"
                                                    >
                                                        <span>Explore {tab.title}</span>
                                                        <div className="w-8 h-px bg-white/40 group-hover:w-14 transition-all duration-300" />
                                                    </motion.button>
                                                </Link>
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
                    style={{ y: yPortalBase, scale: scalePortal }}
                    className="relative w-full max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16 relative z-10">
                        <motion.h2 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter mix-blend-screen"
                            style={{ textShadow: activePortalHover ? "0 0 100px rgba(59,130,246,0.5)" : "none" }}
                        >
                            The Streaming <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Revolution</span>
                        </motion.h2>
                        <p className="text-xl text-white/50 max-w-2xl mx-auto font-light mb-12">
                            Enter the ultimate entertainment hub. Every story, every match, every hero, waiting for you.
                        </p>
                    </div>

                    <div className="px-4">
                        {/* PORTAL: HOTSTAR */}
                        <Link href="/hotstar" className="group block focus:outline-none">
                            <motion.div
                                onMouseEnter={() => setActivePortalHover(true)}
                                onMouseLeave={() => setActivePortalHover(false)}
                                whileHover={{ scale: 1.02, y: -10 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
                                style={{ boxShadow: activePortalHover ? "0 40px 100px -20px rgba(37,99,235,0.4)" : "0 20px 40px -20px rgba(0,0,0,0.8)" }}
                            >
                                {/* Inner portal visuals */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/disneo.webp"
                                        alt="Disney+ Hotstar Portal"
                                        fill
                                        className="object-cover opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-black/40 to-transparent group-hover:opacity-50 transition-opacity duration-700" />
                                    <div className="absolute inset-0 bg-blue-900/30 mix-blend-color group-hover:opacity-0 transition-opacity duration-700" />
                                </div>

                                {/* Center Play Button & Text */}
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8">
                                    <div
                                        className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/90 group-hover:border-blue-400 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all duration-500"
                                    >
                                        <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white ml-2 group-hover:scale-110 transition-transform duration-300" />
                                    </div>

                                    <div className="overflow-hidden">
                                        <p className="text-white text-3xl md:text-5xl font-bold tracking-tight translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                            Enter <span className="text-blue-400">Disney+ Hotstar</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative glowing border scanning effect */}
                                <div className="absolute inset-x-0 -bottom-px h-[2px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_#3b82f6]" />
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}