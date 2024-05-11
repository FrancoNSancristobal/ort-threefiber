"use client";
import { useRef, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshBasicMaterial, TextureLoader } from "three";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/models/monitor/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  const texture = useLoader(
    TextureLoader,
    "/models/monitor/textures/Material_65_diffuse.png"
  ); // Ruta de la textura

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} map={texture} />
    </mesh>
  );
}

export function Shiba() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Canvas style={{ width: "70vw", height: "50vh" }}>
        <OrbitControls enableZoom minDistance={1} maxDistance={2} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[1, 1, 10]} intensity={4} />
          <MeshComponent />
        </Suspense>
      </Canvas>
    </div>
  );
}
