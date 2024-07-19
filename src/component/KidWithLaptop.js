import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';

function KidWithLaptop() {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Body */}
      <Box args={[0.6, 0.8, 0.3]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#4a90e2" />
      </Box>

      {/* Head */}
      <Sphere args={[0.25, 32, 32]} position={[0, 1.05, 0]}>
        <meshStandardMaterial color="#ffdab9" />
      </Sphere>

      {/* Eyes */}
      <Sphere args={[0.05, 16, 16]} position={[-0.1, 1.1, 0.2]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>
      <Sphere args={[0.05, 16, 16]} position={[0.1, 1.1, 0.2]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>
      <Sphere args={[0.02, 16, 16]} position={[-0.1, 1.1, 0.24]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.02, 16, 16]} position={[0.1, 1.1, 0.24]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>

      {/* Hair */}
      <Box args={[0.5, 0.2, 0.4]} position={[0, 1.25, 0]}>
        <meshStandardMaterial color="#8b4513" />
      </Box>

      {/* Arms */}
      <Cylinder args={[0.08, 0.08, 0.5]} position={[-0.4, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <meshStandardMaterial color="#ffdab9" />
      </Cylinder>
      <Cylinder args={[0.08, 0.08, 0.5]} position={[0.4, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
        <meshStandardMaterial color="#ffdab9" />
      </Cylinder>

      {/* Legs */}
      <Cylinder args={[0.1, 0.1, 0.6]} position={[-0.2, -0.3, 0]}>
        <meshStandardMaterial color="#4a90e2" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.6]} position={[0.2, -0.3, 0]}>
        <meshStandardMaterial color="#4a90e2" />
      </Cylinder>

      {/* Laptop base */}
      <Box args={[0.6, 0.05, 0.4]} position={[0, 0.3, 0.35]}>
        <meshStandardMaterial color="#c0c0c0" />
      </Box>

      {/* Laptop screen */}
      <Box args={[0.58, 0.4, 0.02]} position={[0, 0.5, 0.54]} rotation={[Math.PI / 6, 0, 0]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Box args={[0.54, 0.36, 0.01]} position={[0, 0.5, 0.55]} rotation={[Math.PI / 6, 0, 0]}>
        <meshStandardMaterial color="#87ceeb" emissive="#87ceeb" emissiveIntensity={0.5} />
      </Box>
    </group>
  );
}

export default KidWithLaptop;