"use client";
import { Canvas } from "@react-three/fiber";
import ModelMonitor from "./modelMonitor";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Canvas
        camera={{ position: [5, 4, 0] }}
        style={{ background: "backgroundColor", height: "65vh" }}
      >
        <directionalLight
          position={[3.3, 1.0, 4.4]}
          castShadow
          intensity={Math.PI * 2}
        />
        <OrbitControls enableZoom minDistance={6} maxDistance={7} zoom0={6} />
        <Suspense fallback={null}>
          <ModelMonitor />
        </Suspense>
      </Canvas>
    </div>
  );
}
