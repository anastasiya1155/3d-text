import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import MyText from "./Text";

const hintTextStyle = {
  position: 'fixed',
  bottom: 20,
  left: '50%',
  color: "white",
  fontFamily: "sans-serif",
  fontSize: 12,
  transform: 'translateX(-50%)',
}

export default function App() {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#232323']} />
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="yellow" />
        <Suspense fallback={null}>
          <MyText />
        </Suspense>
      </Canvas>
      <p style={hintTextStyle}>Use Cmd or Ctrl to drag around</p>
    </>
  )
}