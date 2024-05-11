"use client";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group, Vector3, Box3 } from "three"; // Importa Vector3 y Box3 de Three.js
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/curved_gamming_monitor.glb");

export default function ModelMonitor() {
  const group = useRef<Group>(null);
  const { nodes, materials, scene } = useGLTF("/curved_gamming_monitor.glb");

  // Configurar rotación utilizando el hook useFrame
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; // Cambiar la velocidad de rotación aquí
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
