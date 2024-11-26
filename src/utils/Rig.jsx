import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Rig() {
  return useFrame(({ pointer, camera }) => {
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
}
