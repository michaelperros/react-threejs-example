import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Truck from './Truck'
import { NodeToyTick } from './NodeToy'

export default function Scene({ children, ...props }) {
  return (
    <>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
        }}
        camera={{ position: [-70, 30, 30], fov: 66, near: 0.5, far: 200 }}>
        <Suspense fallback={null}>
          <Truck scale={10} position={[0, 1, 0]} />
          <spotLight angle={1} position={[-80, 200, -100]} intensity={1} />
          <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
          <Environment ground background blur files='modern_buildings_2_1k.hdr' />{' '}
        </Suspense>

        <OrbitControls
          target={[0, 10, 0]}
          enableZoom={true}
          enablePan={false}
          maxDistance={100}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.25}
          makeDefault
        />
        <NodeToyTick />
      </Canvas>
    </>
  )
}
