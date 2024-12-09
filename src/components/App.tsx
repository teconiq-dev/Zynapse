"use client";
import "../css/App.css";
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { CountdownTimer } from "./countdown";
import Image from "next/image";

function Title3D() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

function HeaderComponent() {
  return (
    <header className="relative z-50 mx-7 flex max-lg:flex-col justify-between py-6 border-b border-white/60 pointer-events-auto">
      <Image src="/logo.png" alt="logo" width={100} height={200} />
    </header>
  );
}

function Aside() {
  return (
    <div className="absolute top-1/2 right-16 text-lg">
      <CountdownTimer />
    </div>
  );
}

function App() {
  return (
    <>
      <Leva
        collapsed={false}
        flat={true}
        hidden
        theme={{
          sizes: {
            titleBarHeight: "28px",
          },
          fontSizes: {
            root: "10px",
          },
        }}
      />
      <main className="font-sans">
        <HeaderComponent />
        <Title3D />
        <Aside />
      </main>
    </>
  );
}

export default App;
