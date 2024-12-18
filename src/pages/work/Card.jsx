import { MeshPortalMaterial } from "@react-three/drei";
import * as THREE from 'three'

export default function Card({
  data,
  children,
  bg = "#ffffff",
  txtColor = "black",
  id,
  width = 3,
  height = 2.61803398875,
  lightColor = "#ffffff",
  ...props
}) {
  const { name, description, source, scale, rotation, message, link } = data;

  return (
    <group {...props}>
      <mesh>
        <planeGeometry args={[width, height]} />
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          <ambientLight intensity={10} />
          <directionalLight
            position={[10, 10, 0]}
            intensity={10}
            color={lightColor}
          />
          <directionalLight
            position={[-10, -10, 0]}
            intensity={10}
            color={lightColor}
          />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}
