"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Audio visualizer bars component
function AudioBars() {
  const groupRef = useRef<THREE.Group>(null);
  const barsRef = useRef<THREE.Mesh[]>([]);
  const [scrollSpeed, setScrollSpeed] = useState(1);

  // Track scroll for animation speed
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollSpeed = () => {
      const scrollY = window.scrollY;
      const speed = Math.abs(scrollY - lastScrollY) * 0.1 + 1;
      setScrollSpeed(speed);
      lastScrollY = scrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollSpeed);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001 * scrollSpeed;
    }

    // Animate individual bars
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        const time = state.clock.getElapsedTime();
        const scale = 1 + Math.sin(time * 2 + i * 0.5) * 0.5 * scrollSpeed;
        bar.scale.y = scale;
      }
    });
  });

  const barCount = 32;
  const radius = 3;

  return (
    <group ref={groupRef}>
      {Array.from({ length: barCount }).map((_, i) => {
        const angle = (i / barCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <mesh
            key={i}
            position={[x, 0, z]}
            ref={(el) => {
              if (el) barsRef.current[i] = el;
            }}
          >
            <boxGeometry args={[0.2, 2, 0.2]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#00ff88" : i % 3 === 1 ? "#ff00ff" : "#00d4ff"}
              emissive={i % 3 === 0 ? "#00ff88" : i % 3 === 1 ? "#ff00ff" : "#00d4ff"}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Main visualization component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />

      {/* Audio bars */}
      <AudioBars />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Camera controls (subtle movement) */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

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
    <div className="pointer-events-none absolute inset-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

