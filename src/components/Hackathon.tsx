import {
  Float,
  OrbitControls,
  RandomizedLight,
  SpotLight,
  Stars,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { DarkRoom } from "./3D/DarkRoom";
import { Suspense, useRef } from "react";
import { Vector3 } from "three";
import { useDepthBuffer } from "@react-three/drei";

export function Hackathon() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 55, near: 0.1, far: 7000, position: [0, -14, 40] }}
    >
      <Suspense fallback={null}>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls enableZoom={false} />
        <Scene />
      </Suspense>
    </Canvas>
  );
}
function Scene() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  return (
    <>
      <ambientLight intensity={0.3} />
      <RandomizedLight
        castShadow
        amount={2}
        frames={50}
        position={[5, 10, 10]}
      />
      <pointLight
        position={[2, 7, -5]}
        intensity={40}
        castShadow
        distance={18}
      />
      <pointLight
        position={[10, 10, -2]}
        intensity={40}
        castShadow
        distance={18}
      />
      <Float>
        <MovingSpot
          depthBuffer={depthBuffer}
          color="#0c8cbf"
          position={[14, 13, 11]}
          intensity={22}
        />
        <MovingSpot
          depthBuffer={depthBuffer}
          color="#b00c3f"
          position={[-13, 13, 11]}
          intensity={22}
        />
        <DarkRoom />
      </Float>
    </>
  );
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0,
      ),
      0.1,
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={100}
      angle={9}
      attenuation={19}
      anglePower={4}
      intensity={7}
      {...props}
    />
  );
}
