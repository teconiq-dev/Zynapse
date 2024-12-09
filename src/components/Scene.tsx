"use client";
import { useRef, useMemo, useEffect, useState } from "react";
import { useControls } from "leva";
import { debounce } from "lodash";

// 3D
import * as THREE from "three";
import { PointLightHelper } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useHelper, Html } from "@react-three/drei";
import CustomShaderMaterial from "three-custom-shader-material";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import html2canvas from "html2canvas";

// Define the type for the texture state
type TextureState = THREE.CanvasTexture | undefined;

// Custom hook to convert DOM element to canvas texture
const useDomToCanvas = (domEl: HTMLElement | null): TextureState => {
  const [texture, setTexture] = useState<TextureState>(undefined);

  useEffect(() => {
    if (!domEl) return;

    const convertDomToCanvas = async () => {
      const canvas = await html2canvas(domEl, { backgroundColor: null });
      setTexture(new THREE.CanvasTexture(canvas));
    };

    convertDomToCanvas();

    const debouncedResize = debounce(() => {
      convertDomToCanvas();
    }, 100);

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [domEl]);

  return texture;
};

function Lights() {
  const pointLightRef = useRef(null);

  useHelper(pointLightRef, PointLightHelper, 0.7, "cyan");

  const config = useControls("Lights", {
    color: "#ffffff",
    intensity: { value: 30, min: 0, max: 5000, step: 0.01 },
    distance: { value: 12, min: 0, max: 100, step: 0.1 },
    decay: { value: 1, min: 0, max: 5, step: 0.1 },
    position: { value: [2, 4, 6] },
  });

  return <pointLight ref={pointLightRef} {...config} />;
}

function Scene() {
  const state = useThree();
  const { width, height } = state.viewport;

  // Use a ref for the DOM element
  const [domEl, setDomEl] = useState<HTMLDivElement | null>(null);

  const materialRef = useRef(null);

  // Get the texture created from the DOM element
  const textureDOM = useDomToCanvas(domEl);

  // Define uniforms with proper types
  const uniforms = useMemo(
    () => ({
      uTexture: { value: textureDOM },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [textureDOM],
  );

  const mouseLerped = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Update mouse position in the frame loop
  useFrame((state) => {
    const mouse = state.mouse;

    mouseLerped.current.x = THREE.MathUtils.lerp(
      mouseLerped.current.x,
      mouse.x,
      0.1,
    );
    mouseLerped.current.y = THREE.MathUtils.lerp(
      mouseLerped.current.y,
      mouse.y,
      0.1,
    );

    if (materialRef.current) {
      materialRef.current.uniforms.uMouse.value.x = mouseLerped.current.x;
      materialRef.current.uniforms.uMouse.value.y = mouseLerped.current.y;
    }
  });

  return (
    <>
      <Html zIndexRange={[-1, -10]} prepend fullscreen>
        <div ref={(el) => setDomEl(el)} className="dom-element">
          <p className="flex flex-col">
            WHEN <br />
            WILL <br />
            WE <br />
            MEET ?<br />
          </p>
        </div>
      </Html>
      <mesh>
        <planeGeometry args={[width, height, 254, 254]} />
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={THREE.MeshStandardMaterial}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          flatShading
          silent
        />
        <Lights />
      </mesh>
    </>
  );
}

export default Scene;
