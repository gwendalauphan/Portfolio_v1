import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import CanvasLoader from "../Loader/Loader";

const Cosmonaute = () => {
  const cosmonaute = useGLTF("./little_astronaut/scene.gltf");
  const meshRef = useRef(null);
  const [isRotating, setIsRotating] = useState(false);

  const [initialMousePos, setInitialMousePos] = useState(null);

  useFrame((state, delta) => {
    if (meshRef.current && !isRotating) {
      meshRef.current.rotation.z += delta / 8;
      meshRef.current.rotation.x += delta / 8;
    }
  });

  const handlePointerDown = (event) => {
    setInitialMousePos({ x: event.clientX, y: event.clientY });
    setIsRotating(true);
  };

  const handlePointerMove = (event) => {
    if (!isRotating) return;

    const deltaX = event.clientX - initialMousePos.x;
    const deltaY = event.clientY - initialMousePos.y;

    meshRef.current.rotation.z += deltaX * 0.005;
    meshRef.current.rotation.x += deltaY * 0.005;

    setInitialMousePos({ x: event.clientX, y: event.clientY });
  };

  const handlePointerUp = () => {
    setIsRotating(false);
  };

  return (
    <>
      <spotLight
        position={[-2, -2, 1]}
        angle={0.5}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <hemisphereLight intensity={0.1} />
      <pointLight position={[-2, -2, 1]} intensity={50} />

      <EffectComposer>
        <Bloom
          strength={1}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.9}
          intensity={0.1}
          width={50}
          height={100}
        />
      </EffectComposer>

      <mesh
        ref={meshRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <primitive
          object={cosmonaute.scene}
          scale={1.5}
          rotation-x={2.2}
          position-x={0}
          position-z={-2}
          position-y={1}
        />
      </mesh>
    </>
  );
};

const CosmonauteCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, -4, 1],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={Math.PI}
          maxAzimuthAngle={0}
          minAzimuthAngle={0}
          m
        />
        <Cosmonaute />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CosmonauteCanvas;
