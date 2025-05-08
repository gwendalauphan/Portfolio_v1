import {
  useState,
  useRef,
  Suspense,
  useContext,
  useEffect,
  memo,
  useCallback,
  useMemo,
} from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Points,
  PointMaterial,
  Preload,
} from "@react-three/drei";
import * as random from "maath/random";
import Earth from "./Earth";

import { ToggleContext } from "../Context/ToggleContextDefinition";

// eslint-disable-next-line
const Stars = memo((props) => {
  const ref = useRef();

  // Utilisation de useMemo pour mémoriser le calcul de la sphère d'étoiles
  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(3000), { radius: 6 });
  }, []); // Le tableau vide indique que cette valeur ne dépend d'aucun prop ou état

  const initialRotation = useMemo(() => [0, 0, Math.PI / 4], []);

  return (
    // eslint-disable-next-line
    <group rotation={initialRotation}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});
// eslint-disable-next-line
const StarsCanvas = memo(({ rotateCanvas }) => {
  const controlsRef = useRef();
  const [angles, setAngles] = useState({ azimuthal: 0, polar: 0 });

  const { isEnabled } = useContext(ToggleContext);

  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = useCallback(() => setIsDragging(true), []);
  const handleEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.addEventListener("start", handleStart);
    controls.addEventListener("end", handleEnd);

    return () => {
      controls.removeEventListener("start", handleStart);
      controls.removeEventListener("end", handleEnd);
    };
  }, [handleStart, handleEnd]);

  const dpr = window.devicePixelRatio < 2 ? 1 : 1.5;

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <div className="absolute top-16 left-10 z-10 p-2 rounded text-xs sm:text-base lg:mt-6 xl:mt-0">
        <p>Azimuthal Angle: {angles.azimuthal.toFixed(2)}</p>
        <p>Polar Angle: {angles.polar.toFixed(2)}</p>
      </div>

      <Canvas
        dpr={dpr}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 7],
        }}
        frameloop="always"
        style={{
          cursor: `${isHovered ? (isDragging ? "grabbing" : "grab") : ""}`,
        }}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enabled={true}
            enableRotate={isEnabled}
            enableZoom={isEnabled}
            enablePan={isEnabled}
            ref={controlsRef}
            autoRotate={rotateCanvas}
            autoRotateSpeed={0.25}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            minDistance={1} // Ajuste selon tes besoins
            maxDistance={9} // Ajuste selon tes besoins
          />

          <Stars />
          <Earth controlsRef={controlsRef} setAngles={setAngles} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
});

export default StarsCanvas;
