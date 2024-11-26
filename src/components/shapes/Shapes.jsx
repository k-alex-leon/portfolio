import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import * as THREE from "three";
import Rig from "../../utils/Rig";

const spring = { stiffness: 600, damping: 30 };

export default function Shapes() {
  return (
    <Canvas shadows resize={{ scroll: false, offsetSize: true }}>
      <Float speed={1.5}>
        <Stage />
      </Float>
    </Canvas>
  );
}

function Stage() {
  return (
    <>
      {/* camera movement */}
      <Rig />
      <ambientLight intensity={1} />
      {/* <pointLight position={[0, 0, -2]} /> */}
      {/* <perspectiveCamera fov={90} position={[3, -2, -6]} /> */}
      {/* <directionalLight position={[0, 4, 6]} intensity={10}/> */}
      <directionalLight position={[0, 10, 6]} intensity={10} />
      <directionalLight position={[0, 4, -4]} intensity={4} />
      <group position={[10, 0, 0]}>
        <Cloud scale={0.3} position={[-20, 1, 0]} />
        <Cloud scale={0.1} position={[-10, -4, 5]} />
        <Cloud scale={0.2} position={[-20, -10, -5]} />
        <Cloud scale={0.02} position={[-1, -1, 4]} />
        <Sun scale={1.5} position={[-8, 0, 0]} />
      </group>
    </>
  );
}

function Cloud(props) {
  const { nodes, materials } = useGLTF("./low_poly_cloud.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./low_poly_cloud.glb");

function Sun(props) {
  const { nodes, materials } = useGLTF("./sun.glb");
  return (
    <group {...props} rotation={[Math.PI / 2, 0, 0]} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Círculo.geometry}
        material={materials["Material.001"]}
        scale={0.484}
      />
    </group>
  );
}

useGLTF.preload("./sun.glb");
