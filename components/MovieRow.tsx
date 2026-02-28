"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

interface Movie {
    id: string;
    title: string;
    image: string;
    duration?: string;
    genres: string[];
    year: string;
    isNew?: boolean;
}

interface MovieRowProps {
    title: string;
    movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const scroll = (direction: "left" | "right") => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth * 0.8
                    : scrollLeft + clientWidth * 0.8;

            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div
            className="relative flex flex-col space-y-4 pt-4 pb-8 pl-12 md:pl-32 group/row"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h2 className="text-xl md:text-2xl font-bold text-white/90 font-sans px-4">
                {title}
            </h2>

            <div className="relative">
                <button
                    onClick={() => scroll("left")}
                    className={`absolute left-0 top-0 bottom-0 z-40 w-16 bg-gradient-to-r from-background to-transparent flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <ChevronLeft className="w-8 h-8 text-white hover:scale-125 transition-transform" />
                </button>

                <div
                    ref={rowRef}
                    className="flex items-center gap-4 overflow-x-auto hide-scrollbar scroll-smooth px-4 pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className={`absolute right-0 top-0 bottom-0 z-40 w-16 bg-gradient-to-l from-background to-transparent flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <ChevronRight className="w-8 h-8 text-white hover:scale-125 transition-transform" />
                </button>
            </div>
        </div>
    );
}
