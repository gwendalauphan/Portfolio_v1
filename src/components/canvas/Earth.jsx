import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader/Loader";

const Earth = ({ controlsRef, setAngles }) => {
  const earth = useGLTF("./earth/scene.gltf");

  useFrame(() => {
    if (controlsRef.current) {
      const azimuthalAngle = controlsRef.current.getAzimuthalAngle();
      const polarAngle = controlsRef.current.getPolarAngle();

      setAngles({
        azimuthal: azimuthalAngle,
        polar: polarAngle,
      });
    }
  });

  return (
    <>
      <mesh>
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <hemisphereLight intensity={3} />
        <pointLight intensity={10} />
        <primitive
          object={earth.scene}
          scale={2}
          position-y={0}
          rotation-y={0}
        />
      </mesh>
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Earth;
