import { Text, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Objects() {
  const { height, width } = useThree((state) => state.viewport);
  return (
    <>
      <pointLight color="blue" position={[8, -25, 5]} intensity={20} />
      <pointLight
        color="red"
        position={[0, -height * 2.25, 5]}
        intensity={10}
      />
      <Item color={"red"} position={[0, 1, 0]}>
        <octahedronGeometry />
      </Item>
    </>
  );
}

function Item({ color, position, children }) {
  const meshRef = useRef();
  return (
    <mesh ref={meshRef} position={position}>
      {children}
      <meshPhysicalMaterial transparent color={color} />
    </mesh>
  );
}
