import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Play, Tv, BookmarkPlus, Share2, Star } from 'lucide-react';

// Fake Data API specific for the dynamic ID
function getMovieDetails(id: string) {
    return {
        id,
        title: "Exclusive Blockbuster Premiere",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
        description: "An epic journey of destiny and courage. A visually stunning masterpiece where magic, myth, and reality collide. Experience the next chapter of cinematic history.",
        genres: ["Action", "Adventure", "Fantasy"],
        year: "2025",
        duration: "2h 45m",
        match: "98% Match",
        ageRating: "U/A 13+",
        resolution: "4K Dolby Vision",
        cast: ["Chris Hemsworth", "Scarlett Johansson", "Tom Hiddleston"],
        director: "Russo Brothers"
    }
}

export default function MovieDetailsPage({ params }: { params: { id: string } }) {
    const movie = getMovieDetails(params.id);

    return (
        <main className="min-h-screen bg-[#020202] text-white">

            {/* Massive Hero Banner */}
            <div className="relative w-full h-[65vh] md:h-[80vh]">
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                />

                {/* Disney+ Hotstar specific gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent w-full md:w-[70%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020202]/80 to-transparent" />

                {/* Back Button */}
                <div className="absolute top-6 left-6 md:top-10 md:left-12 z-50">
                    <Link href="/hotstar">
                        <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:bg-white/10">
                            <ChevronLeft className="w-5 h-5" /> Back to Home
                        </button>
                    </Link>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 z-20 flex flex-col justify-end">

                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>
                        {movie.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-white/80 font-medium mb-6">
                        <span className="text-green-400 font-bold">{movie.match}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <span>{movie.year}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <span>{movie.duration}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <span className="bg-white/20 px-2 py-0.5 rounded text-xs leading-none">{movie.ageRating}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <span className="px-2 py-0.5 rounded border border-white/30 text-xs leading-none">{movie.resolution}</span>
                    </div>

                    <p className="max-w-2xl text-lg text-white/70 leading-relaxed font-light mb-8">
                        {movie.description}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-white/60 mb-10">
                        <p><strong className="text-white/90">Starring:</strong> {movie.cast.join(", ")}</p>
                        <p><strong className="text-white/90">Director:</strong> {movie.director}</p>
                    </div>

                    {/* Booking & Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <button className="bg-white text-black hover:bg-white/90 px-8 py-3.5 rounded font-bold flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl">
                            <Play className="w-5 h-5 fill-current" /> Subscribe to Watch
                        </button>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded font-bold flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                            <Tv className="w-5 h-5" /> Book Theater Tickets
                        </button>

                        <div className="flex items-center gap-3 ml-4">
                            <button className="w-12 h-12 rounded bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center transition-all">
                                <BookmarkPlus className="w-6 h-6" />
                            </button>
                            <button className="w-12 h-12 rounded bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center transition-all">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extra Mock Content Section (e.g. More Like This) */}
            <div className="px-6 md:px-16 py-12 bg-[#020202]">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Star className="text-yellow-500 fill-yellow-500" /> Reviews & Extras
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                            <p className="text-white/80 italic mb-4">"A masterclass in modern storytelling. The visual effects are breathtaking and the emotional core resonates."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center font-bold">CR</div>
                                <div>
                                    <p className="font-bold text-sm">Top Critic</p>
                                    <p className="text-xs text-white/50">Entertainment Weekly</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
