"use client";

import { useState } from "react";
import HeroSequence from "@/components/HeroSequence";
import MainLanding from "@/components/MainLanding";

export default function Home() {
  const [showMainLanding, setShowMainLanding] = useState(false);

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
      {!showMainLanding && (
        <HeroSequence onSequenceComplete={() => setShowMainLanding(true)} />
      )}

      <div
        className={`transition-opacity duration-1000 ${showMainLanding ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
          }`}
      >
        <MainLanding />
      </div>
    </main>
  );
}
