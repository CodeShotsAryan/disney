"use client";

import { cn } from "@/lib/utils";
import { User, Search, Home, Tv, Film, Medal, LayoutGrid, Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { icon: User, label: "My Space" },
    { icon: Search, label: "Search" },
    { icon: Home, label: "Home" },
    { icon: Tv, label: "TV" },
    { icon: Film, label: "Movies" },
    { icon: Medal, label: "Sports" },
    { icon: LayoutGrid, label: "Categories" },
];

export default function Sidebar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn(
                "fixed left-0 top-0 h-screen z-50 flex flex-col justify-center transition-all duration-300 ease-in-out group",
                isHovered ? "w-64 bg-gradient-to-r from-background to-transparent" : "w-24 bg-transparent"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={cn(
                    "absolute inset-0 bg-background/90 backdrop-blur-sm transition-opacity duration-300",
                    isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            />

            <nav className="relative z-10 flex flex-col items-start gap-8 pl-8">
                {navItems.map((item, idx) => (
                    <button
                        key={item.label}
                        className="group/item flex items-center gap-6 text-foreground/60 hover:text-white hover:scale-110 transition-all duration-300 w-full text-left focus:outline-none"
                    >
                        <item.icon
                            className={cn(
                                "w-6 h-6 transition-all duration-300",
                                item.label === "Home" ? "text-white" : ""
                            )}
                        />
                        <AnimatePresence>
                            {isHovered && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                                    className={cn(
                                        "text-lg font-medium whitespace-nowrap",
                                        item.label === "Home" ? "text-white" : ""
                                    )}
                                >
                                    {item.label}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                ))}
            </nav>
        </div>
    );
}
