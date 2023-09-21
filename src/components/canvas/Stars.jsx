import { useState, useRef, Suspense, useContext } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import Earth from "./Earth";

import { ToggleContext } from "../Context/ToggleContext";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 6 }));


  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 1500;
    ref.current.rotation.y -= delta / 2000;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};



const StarsCanvas = () => {
  const controlsRef = useRef();
  const [angles, setAngles] = useState({ azimuthal: 0, polar: 0 });

  const { isEnabled } = useContext(ToggleContext);

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <div className="absolute top-10 left-10 z-10 p-2 rounded">
        <p>Azimuthal Angle: {angles.azimuthal.toFixed(2)}</p>
        <p>Polar Angle: {angles.polar.toFixed(2)}</p>
      </div>

      <Canvas 
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 7],
      }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enabled={true} 
            enableRotate={isEnabled}
            enableZoom={isEnabled}
            enablePan={isEnabled}

            ref={controlsRef}
            autoRotate
            autoRotateSpeed={0.3}

            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />

          <Stars />
          <Earth controlsRef={controlsRef} setAngles={setAngles} />
          
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;