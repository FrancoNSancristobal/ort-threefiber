"use client";
import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import ModelRazer from "./modelRazer";

export default function SceneRazer() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Canvas
        camera={{ position: [5, 4, 0] }}
        style={{ background: "backgroundColor", height: "65vh", width: "30vw" }}
      >
        <directionalLight
          position={[3.3, 1.0, 4.4]}
          castShadow
          intensity={Math.PI * 2}
        />
        <OrbitControls enableZoom minDistance={7} maxDistance={10} zoom0={1} />
        <Suspense fallback={null}>
          <ModelRazer></ModelRazer>
        </Suspense>
      </Canvas>
    </div>
  );
}
