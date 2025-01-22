"use client";
import { Float, OrbitControls, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Laptop } from "./3D/laptop";
export const LaptopHolo = () => {
  return (
    <Canvas camera={{ fov: 55, near: 0.1, far: 1000, position: [0, -6, 4] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={5} />
        <directionalLight position={[0, 1, 2]} intensity={4} />
        <SpotLight
          distance={6}
          angle={0.25}
          attenuation={6}
          anglePower={7}
          position={[0.5, -1, 4]}
        />
        <OrbitControls enableZoom={false} />
        <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={4} // XYZ rotation intensity, defaults to 1
          floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Laptop />
        </Float>
      </Suspense>
    </Canvas>
  );
};
