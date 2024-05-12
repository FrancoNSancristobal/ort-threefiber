"use client";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three"; // Importa Vector3 y Box3 de Three.js
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/free_pothos_potted_plant_-_money_plant.glb");

export default function ModelPlant() {
  const group = useRef<Group>(null);
  const { nodes, materials, scene } = useGLTF(
    "/free_pothos_potted_plant_-_money_plant.glb"
  );

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
