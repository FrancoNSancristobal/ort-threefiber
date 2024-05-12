"use client";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three"; // Importa Vector3 y Box3 de Three.js
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/razer.glb");

export default function ModelRazer() {
  const group = useRef<Group>(null);
  const { nodes, materials, scene } = useGLTF("/razer.glb");

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
