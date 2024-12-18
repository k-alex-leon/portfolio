import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// this controlls the camera movement depending on cursor position
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

// export default function Rig() {
//   const { camera, mouse } = useThree();
//   const vec = new THREE.Vector3();
//   return useFrame(() =>
//     camera.position.lerp(
//       vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
//       0.02
//     )
//   );
// }
