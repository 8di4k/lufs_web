"use client";

import { useRef, useEffect, useState, Suspense, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

// Audio visualizer waveform component - realistic audio bars
const AudioWaveform = memo(function AudioWaveform() {
  const barsRef = useRef<THREE.Mesh[]>([]);
  const targetHeightsRef = useRef<number[]>([]);
  const currentHeightsRef = useRef<number[]>([]);
  const velocitiesRef = useRef<number[]>([]);

  const barCount = 32; // More bars for better wave effect
  const spacing = 0.3;
  const baseHeight = 0.3;

  // Initialize arrays
  useEffect(() => {
    targetHeightsRef.current = new Array(barCount).fill(baseHeight);
    currentHeightsRef.current = new Array(barCount).fill(baseHeight);
    velocitiesRef.current = new Array(barCount).fill(0);
  }, [barCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    barsRef.current.forEach((bar, i) => {
      if (bar) {
        // Create wave-like audio visualization with multiple frequencies
        const lowFreq = Math.sin(time * 1.2 + i * 0.15) * 0.4;
        const midFreq = Math.sin(time * 2.5 + i * 0.25) * 0.3;
        const highFreq = Math.sin(time * 4.0 + i * 0.4) * 0.2;
        
        // Combine frequencies for realistic audio feel
        const combined = lowFreq + midFreq + highFreq;
        
        // Add random "beats" effect
        const beat = Math.sin(time * 3 + i * 0.1) > 0.7 ? 0.3 : 0;
        
        // Calculate target height
        const targetHeight = baseHeight + Math.abs(combined) + beat;
        targetHeightsRef.current[i] = targetHeight;

        // Spring-like smooth interpolation for natural bounce
        const diff = targetHeight - currentHeightsRef.current[i];
        velocitiesRef.current[i] += diff * 0.15; // Spring stiffness
        velocitiesRef.current[i] *= 0.85; // Damping
        currentHeightsRef.current[i] += velocitiesRef.current[i];

        // Apply height
        bar.scale.y = Math.max(0.1, currentHeightsRef.current[i]);
        
        // Subtle color pulse based on intensity
        const intensity = currentHeightsRef.current[i] / 2;
        bar.position.y = (currentHeightsRef.current[i] - baseHeight) * 0.5;
      }
    });
  });

  return (
    <group position={[-(barCount * spacing) / 2, 0, 0]}>
      {Array.from({ length: barCount }).map((_, i) => {
        const x = i * spacing;
        
        // Color gradient across the spectrum
        const hue = (i / barCount) * 0.3; // Green to cyan range
        const colors = ["#00ff88", "#00e6a0", "#00ccb8", "#00b3d0", "#00d4ff"];
        const colorIndex = Math.floor((i / barCount) * colors.length);
        const color = colors[colorIndex];

        return (
          <mesh
            key={i}
            position={[x, 0, 0]}
            ref={(el) => {
              if (el) barsRef.current[i] = el;
            }}
          >
            <boxGeometry args={[0.15, 1, 0.15]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.85}
            />
          </mesh>
        );
      })}
    </group>
  );
});

// Main visualization component - optimized
const Scene = memo(function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Subtle rotation for dynamic 3D feel
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Audio waveform visualization */}
        <AudioWaveform />
      </group>

      {/* Stars background - significantly reduced for performance */}
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={0.3} />
    </>
  );
});

export function HeroVisualization() {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setIsWebGLSupported(false);
      }
    } catch (e) {
      setIsWebGLSupported(false);
    }
  }, []);

  // Don't render on server (SSR)
  if (!isMounted) {
    return null;
  }

  // Fallback for no WebGL support
  if (!isWebGLSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="text-center">
          <div className="mb-4 text-6xl">🎵</div>
          <p className="text-sm text-gray-500">WebGL not supported</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 opacity-20">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          antialias: false, // Disable for better performance
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false, // Disable depth for better performance
          precision: "lowp" // Use low precision for better performance
        }}
        dpr={1} // Fixed to 1 for consistent performance
        style={{ background: "transparent" }}
        frameloop="always"
        performance={{ 
          min: 0.1, // More aggressive quality reduction
          max: 1,
          debounce: 200
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

