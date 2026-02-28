"use client";

import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

import FloatingBirds from "./FloatingBirds";

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
                {/* Background: disneo image as atmosphere */}
                <div className="absolute inset-0 overflow-hidden">
                    <video
                        src="/Castel_animation_fireworks_night_delpmaspu_.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-75 scale-105"
                    />
                    {/* Dark overlay so text stays readable */}
                    <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/10 to-background" />
                    {/* Extra vignette on sides */}
                    <div className="absolute inset-0"
                        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(var(--background-raw,0,5,20),0.3) 100%)" }}
                    />
                </div>

                {/* White Small Birds Flying Over the site */}
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
            <section className="relative z-20 py-32 px-6 md:px-12 bg-[l#050505]">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm tracking-[0.5em] text-primary/60 uppercase mb-4 font-semibold">
                        Legendary Worlds
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Characters That <span className="text-white/40 italic font-serif">Defined</span> a Century
                    </motion.h2>
                </div>

                {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
                    {characters.map((char, i) => (
                        <TiltCard key={char.name} char={char} index={i} />
                    ))}
                </div> */}
            </section>

            {/* ── SECTION 3: INTERACTIVE STORYTELLING & GAMIFIED EXPLORATION ── */}
            <section className="relative z-20 py-32 px-6 md:px-12 bg-linear-to-b from-[#050505] to-[#020202] overflow-hidden">
                {/* Magical glow behind characters */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_60%)]" />

                <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight" style={{ textShadow: "0 0 60px rgba(255,255,255,0.3)" }}>
                            Interactive <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 font-bold">Storytelling</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                            A journey designed for Families, Kids, Teens, and Nostalgia-driven adults.
                            Dive into interactive tales where every choice reveals a new secret.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto relative z-10 items-stretch">
                    {/* Gamified Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/20 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] cursor-pointer group"
                    >
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">Gamified Exploration</h3>
                        <p className="text-white/60 text-lg leading-relaxed font-light mb-8">
                            Navigate through magical worlds and uncover hidden artifacts.
                            Designed with high accessibility for children to seamlessly discover their favorite classic tales and legendary heroes.
                        </p>
                        <div className="flex items-center gap-2 text-blue-400 font-semibold tracking-wider text-sm uppercase group-hover:text-blue-300 transition-colors">
                            <span>Begin Adventure</span>
                            <div className="h-px w-6 bg-blue-400 group-hover:w-16 transition-all duration-700" />
                        </div>
                    </motion.div>

                    {/* Character Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[2rem] p-10 border border-white/20 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] cursor-pointer group"
                    >
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-bl from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">Character-Led Navigation</h3>
                        <p className="text-white/60 text-lg leading-relaxed font-light mb-8">
                            Let legendary heroes guide your content discovery. Say goodbye to heavy menus, and hello to intuitive, emotional companion-driven interfaces.
                        </p>
                        <div className="flex items-center gap-2 text-indigo-400 font-semibold tracking-wider text-sm uppercase group-hover:text-indigo-300 transition-colors">
                            <span>Meet The Cast</span>
                            <div className="h-px w-6 bg-indigo-400 group-hover:w-16 transition-all duration-700" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── SECTION 4: THE MAGICAL PORTAL TO HOTSTAR ── */}
            {/* Entryways to different streaming apps */}
            <section className="relative z-30 min-h-[120vh] flex items-center justify-center py-32 px-6 overflow-hidden bg-[#020202]">
                {/* Dynamic glowing background behind portals */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        background: activePortalHover
                            ? "radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, rgba(2,2,2,1) 50%)"
                            : "radial-gradient(circle at center, rgba(37,99,235,0.02) 0%, rgba(2,2,2,1) 30%)"
                    }}
                    transition={{ duration: 0.8 }}
                />

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
        </div>
    );
}
