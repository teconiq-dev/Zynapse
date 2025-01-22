"use client";
import { useGLTF } from "@react-three/drei";

export function Laptop(props) {
  const { nodes, materials } = useGLTF("./models/laptop/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 4, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 0, 0]}
            rotation={[-Math.PI / 4, 0, 0]}
            scale={[0.167, 0.159, 0.157]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142150880.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142150880}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MaterialFBXASC032FBXASC0352142171859.geometry}
              material={materials.MaterialFBXASC032FBXASC0352142171859}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MaterialFBXASC032FBXASC0352142172393.geometry}
            material={materials.MaterialFBXASC032FBXASC0352142172393}
            position={[0, 1.5, -1.3]}
            rotation={[0.5, 0, 0]}
            scale={0.35}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/laptop/scene.gltf");
