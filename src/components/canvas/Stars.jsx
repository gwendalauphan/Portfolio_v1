import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import Earth from "./Earth";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 6 }));


  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
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

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas 
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 6],
      }}>
        <Suspense fallback={null}>
        <OrbitControls
          ref={controlsRef}
          autoRotate
          autoRotateSpeed={1}
          enableZoom={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
          <Stars />
          <Earth controlsRef={controlsRef}/>
          
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;