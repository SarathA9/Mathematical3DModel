import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ComplexSphere() {
  const meshRef = useRef();
  const lineRef = useRef();

  const particlesCount = 3000;
  const radius = 1;

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, []);

  const lines = useMemo(() => {
    const lines = new Float32Array(particlesCount * 3 * 2);
    for (let i = 0; i < particlesCount; i++) {
      lines.set(positions.slice(i * 3, i * 3 + 3), i * 6);
      lines.set([0, 0, 0], i * 6 + 3);
    }
    return lines;
  }, [positions]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.1;
    lineRef.current.rotation.y = time * 0.1;

    const positions = meshRef.current.geometry.attributes.position.array;
    const linePositions = lineRef.current.geometry.attributes.position.array;

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      const i6 = i * 6;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];

      const scale = 1 + Math.sin(time * 2 + x + y + z) * 0.2;

      linePositions[i6] = x * scale;
      linePositions[6 + 1] = y * scale;
      linePositions[i6 + 2] = z * scale;
    }

    lineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#00ffff" />
      </points>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount * 2}
            array={lines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#0080ff" opacity={0.3} transparent />
      </lineSegments>
    </group>
  );
}

export default ComplexSphere;