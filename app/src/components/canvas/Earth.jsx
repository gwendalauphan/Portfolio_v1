import { memo, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// #Rewrite the component Earth memo and useCallback to avoid unnecessary re-renders, and use preload for the earth texture.
const Earth = memo(({ controlsRef, setAngles, invalidate }) => {
  const earth = useGLTF("./earth/scene-optimized.gltf", true);

  const updateAngles = useCallback(() => {
    if (controlsRef.current) {
      const azimuthal = controlsRef.current.getAzimuthalAngle();
      const polar = controlsRef.current.getPolarAngle();

      setAngles({
        azimuthal,
        polar,
      });

      if (invalidate) invalidate();
    }
  }, [controlsRef, setAngles, invalidate]);

  useFrame(updateAngles);

  return (
    /* eslint-disable */
    <>
      <mesh>
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow={false}
          shadow-mapSize={1024}
        />
        <hemisphereLight intensity={3} />

        <primitive
          object={earth.scene}
          scale={2}
          position-y={0}
          rotation-y={0}
        />
      </mesh>
    </>
    /* eslint-enable */
  );
});

useGLTF.preload("./earth/scene-optimized.gltf");
Earth.displayName = "Earth";
export default Earth;
