"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSequence from "@/components/HeroSequence";
import MainLanding from "@/components/MainLanding";

export default function Home() {
  const [showMainLanding, setShowMainLanding] = useState(false);

  return (
    <main className="min-h-screen bg-background relative selection:bg-white/30 selection:text-white overflow-hidden">
      {/* 1. Cinematic Intro Sequence */}
      {/* Keeping HeroSequence mounted during transition for smooth crossfade */}
      <HeroSequence onSequenceComplete={() => setShowMainLanding(true)} />

      {/* 2. Main Disney Landing Experience */}
      <div
        className={`relative z-10 w-full transition-opacity duration-[1500ms] ease-in-out ${showMainLanding ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
      >
        <MainLanding />
      </div>
    </main>
  );
}
