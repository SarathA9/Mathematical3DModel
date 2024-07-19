import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ComplexSphere from './component/ComplexSphere';

function App() {
  return (
    <div style={{ height: '100vh', background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ComplexSphere />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;