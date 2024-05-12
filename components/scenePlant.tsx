"use client";
import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import ModelPlant from "./plantModel";

export default function ScenePlant() {
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
        <OrbitControls enableZoom minDistance={2} maxDistance={3} zoom0={3} />
        <Suspense fallback={null}>
          <ModelPlant></ModelPlant>
        </Suspense>
      </Canvas>
    </div>
  );
}
