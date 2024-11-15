import {
  Center,
  ContactShadows,
  Float,
  Grid,
  Html,
  PresentationControls,
  Scroll,
  ScrollControls,
  Shadow,
} from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import Phone from "./models/Phone";
import { useStore } from "./hooks/useStore";
export default function Scene() {
  const isPhoneHover = useStore((state) => state.isPhoneHover);
  useFrame(({ pointer, camera }) => {
    if (isPhoneHover) return;
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.8,
      0.01
    );
    // camera.position.z = THREE.MathUtils.lerp(
    //   camera.position.z,
    //   Math.max(4, Math.abs(pointer.x * pointer.y * 8)),
    //   0.01
    // );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      pointer.x * -Math.PI * 0.025,
      0.001
    );
  });
  return (
    <>
      {/* <color args={["white"]} attach="background" /> */}
      <PresentationControls
        enabled={!isPhoneHover}
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Phone />
      </PresentationControls>
      {/* phone shadow */}
      {/* <ContactShadows scale={5} position={[0, -2.5, 0]} opacity={0.1} /> */}
    </>
  );
}
