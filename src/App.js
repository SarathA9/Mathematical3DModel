import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import KidWithLaptop from './component/ComplexSphere';

function App() {
  return (
    <div style={{ height: '100vh', background: '#f0f0f0' }}>
      <Canvas camera={{ position: [0, 1, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <KidWithLaptop />
        <OrbitControls />
        <Environment preset="sunset" background />
      </Canvas>
    </div>
  );
}

export default App;