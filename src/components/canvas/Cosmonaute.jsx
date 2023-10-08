import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import CanvasLoader from "../Loader/Loader";

const Cosmonaute = ({
  isRotating,
  rotationDelta,
  setIsRotating,
  setInitialMousePos,
  setIsHovered,
}) => {
  const cosmonaute = useGLTF("./little_astronaut/scene.gltf");
  const meshRef = useRef(null);

  useEffect(() => {
    if (isRotating) {
      document.body.classList.add("no-select");
    } else {
      document.body.classList.remove("no-select");
    }
  }, [isRotating]);

  useEffect(() => {
    if (meshRef.current && isRotating) {
      meshRef.current.rotation.z += rotationDelta.x;
      meshRef.current.rotation.x += rotationDelta.y;
    }
  }, [rotationDelta]);

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
      <pointLight position={[-1.5, -2, 1]} intensity={35} />

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
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
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

const CosmonauteCanvas = ({
  isRotating,
  rotationDelta,
  setIsRotating,
  setInitialMousePos,
}) => {
  const [isHovered, setIsHovered] = useState(false);

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
      style={{
        cursor: `${isHovered ? (isRotating ? "grabbing" : "grab") : ""}`,
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
        <Cosmonaute
          isRotating={isRotating}
          rotationDelta={rotationDelta}
          setIsRotating={setIsRotating}
          setInitialMousePos={setInitialMousePos}
          setIsHovered={setIsHovered}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CosmonauteCanvas;
