"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// A floating magical Disney-esque artifact (like a glowing crystal/gem)
function MagicArtifact() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <Float
            speed={2} // Animation speed
            rotationIntensity={1} // XYZ rotation intensity
            floatIntensity={2} // Up/down float intensity
            floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within
        >
            <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
                <octahedronGeometry args={[1.5, 0]} />
                <meshPhysicalMaterial
                    color="#93c5fd"
                    emissive="#3b82f6"
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={0.8}
                    transparent={true}
                    opacity={0.8}
                    transmission={0.9} // Glass-like effect
                    thickness={1.5}
                />
            </mesh>
        </Float>
    );
}

// Interactive floating particles that follow the mouse slightly
function FloatingMagic() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

            {/* Background Starfield */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Beautiful sparkles floating around the artifact */}
            <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.5} color="#93c5fd" />

            {/* Center 3D Artifact */}
            <MagicArtifact />
        </>
    );
}

export default function MagicCanvas() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                <FloatingMagic />
            </Canvas>
        </div>
    );
}
