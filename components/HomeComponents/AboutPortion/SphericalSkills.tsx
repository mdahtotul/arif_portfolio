"use client";
import { listSkill } from "@/data";
import { Billboard, Html, TrackballControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

interface WordProps {
  icon: React.ReactNode;
  position: THREE.Vector3;
}

function Word({ icon, position }: WordProps) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) document.body.style.cursor = "grab";
    else document.body.style.cursor = "auto";
  }, [hovered]);

  return (
    <Billboard
      ref={ref}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <Html
        occlude
        castShadow // Make HTML cast a shadow
        receiveShadow // Make HTML receive shadows
      >
        {icon}
      </Html>
    </Billboard>
  );
}

interface CloudProps {
  count?: number;
  radius?: number;
  skills: { icon: React.ReactNode; name: string }[];
}

function Cloud({ count = 4, radius = 20, skills }: CloudProps) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp: [THREE.Vector3, React.ReactNode][] = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const skillIndex = (i - 1) * count + j;
        if (skillIndex < skills.length) {
          temp.push([
            new THREE.Vector3().setFromSpherical(
              spherical.set(radius, phiSpan * i, thetaSpan * j)
            ),
            skills[skillIndex].icon,
          ]);
        }
      }
    }

    return temp;
  }, [count, radius, skills]);

  return (
    <>
      {words.map(([pos, skill], index) => (
        <Word key={index} position={pos} icon={skill} />
      ))}
    </>
  );
}

function CloudGroup() {
  const groupRef = useRef<THREE.Group>(null);

  // Rotate the entire group
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.01;
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.z += 0.01;
    }
  });
  return (
    <group ref={groupRef} rotation={[10, 10.5, 10]}>
      <Cloud count={6} radius={18} skills={listSkill} />
    </group>
  );
}

export default function SphericalSkills() {
  return (
    <div className="w-[260px] h-[260px] 2xs:w-[300px] 2xs:h-[300px] xs:w-[400px] xs:h-[400px] sm:w-[500px] sm:h-[500px] box-border overflow-hidden flex items-center justify-center content-center flex-nowrap bg-primary_white dark:bg-secondary_black rounded-3xl border border-[rgba(255, 255, 255, 0.1)] mx-auto">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={["#202025", 0, 80]} />
        <Suspense fallback={null}>
          <CloudGroup />
        </Suspense>
        <TrackballControls />
      </Canvas>
    </div>
  );
}
