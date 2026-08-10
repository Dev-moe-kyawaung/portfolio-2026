'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function PhoneModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        {/* Phone body */}
        <boxGeometry args={[2.5, 5, 0.3]} />
        <meshStandardMaterial
          color="#0a0a0f"
          metalness={0.9}
          roughness={0.2}
          emissive="#00f3ff"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0, 0.16]}>
        <planeGeometry args={[2.3, 4.8]} />
        <meshStandardMaterial
          color="#00f3ff"
          emissive="#00f3ff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Code lines on screen */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[-0.6, 1.5 - i * 0.4, 0.17]}>
          <boxGeometry args={[1.2, 0.05, 0.01]} />
          <meshStandardMaterial
            color="#00f3ff"
            emissive="#00f3ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </Float>
  );
}

function CodeParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={new Float32Array(500 * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00f3ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00f3ff" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <PhoneModel />
      <CodeParticles />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}
