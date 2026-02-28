"use client";

import { motion } from "framer-motion";
import { Play, Plus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Movie {
    id: string;
    title: string;
    image: string;
    duration?: string;
    genres: string[];
    year: string;
    isNew?: boolean;
}

interface MovieCardProps {
    movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={`/hotstar/movie/${movie.id}`} className="flex-none block z-10">
            <motion.div
                className="relative flex-none w-[200px] h-[300px] rounded-xl overflow-visible cursor-pointer group origin-center z-10"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ zIndex: isHovered ? 50 : 10 }}
            >
                <div className="absolute inset-0 bg-zinc-900 rounded-lg overflow-hidden glass-panel">
                    <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Glow behind image on hover */}
                    {isHovered && (
                        <div className="absolute inset-0 bg-primary/20 blur-xl pointer-events-none" />
                    )}
                </div>

                {movie.isNew && !isHovered && (
                    <span className="absolute top-2 left-2 bg-primary text-black text-xs font-bold px-2 py-1 rounded shadow-md z-20">
                        NEW
                    </span>
                )}

                {/* Hover Expand Area */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent p-4 flex flex-col justify-end pt-12 z-30"
                        style={{ height: 'auto', minHeight: '60%' }} // Expanding bottom up
                    >
                        <h3 className="font-bold text-lg mb-1 line-clamp-2 text-white/90 text-glow">
                            {movie.title}
                        </h3>

                        <div className="text-xs text-white/70 mb-3 flex items-center gap-2">
                            <span>{movie.year}</span>
                            {movie.duration && (
                                <>
                                    <span className="w-1 h-1 bg-white/50 rounded-full" />
                                    <span>{movie.duration}</span>
                                </>
                            )}
                            <span className="w-1 h-1 bg-white/50 rounded-full" />
                            <span className="truncate">{movie.genres[0]}</span>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 bg-white hover:bg-white/80 text-black py-2 rounded font-semibold text-xs flex items-center justify-center gap-1 transition-colors">
                                <Play className="w-4 h-4 fill-current" /> Play
                            </button>
                            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded flex items-center justify-center transition-colors">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </Link>
    );
}
