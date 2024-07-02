import React, { memo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";


// #Rewrite the component Earth memo and useCallback to avoid unnecessary re-renders, and use preload for the earth texture.
const Earth = memo(({ controlsRef, setAngles }) => {
  const earth = useGLTF("./earth/scene-optimized.gltf", true);

  useFrame(() => {
    if (controlsRef.current) {
      const azimuthalAngle = controlsRef.current.getAzimuthalAngle();
      const polarAngle = controlsRef.current.getPolarAngle();

      setAngles({
        azimuthal: azimuthalAngle,
        polar: polarAngle,
      });
    }
  }
  );

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
});

useGLTF.preload("./earth/scene-optimized.gltf");

export default Earth;
      


/*

const Earth = ({ controlsRef, setAngles }) => {
  const earth = useGLTF("./earth/scene-optimized.gltf");

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

export default Earth;


*/



