import { ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { easing } from "maath";
import { CgScrollV } from "react-icons/cg";
import Carousel from "./Carousel";
import { useStore } from "../../hooks/useStore";
import CursorLabel from "../../components/CursorLabel";

export default function Work() {
  const { description } = useStore();
  return (
    <div className="w-1/2 h-full relative">
      <div className="absolute w-full h-full grid grid-cols-1 gap-5 px-6 py-20 items-center">
        <Suspense>
          <Canvas camera={{ position: [0, 0, 0], fov: 40 }}>
            <ambientLight intensity={10} />
            {/* <OrbitControls /> */}
            <ScrollControls
              pages={3}
              style={{ scrollbarWidth: "none" }}
              damping={0.2}
              infinite
            >
              <Rig rotation={[0, 0, 0.2]}>
                <Carousel />
              </Rig>
            </ScrollControls>

            {/* <Preload all /> */}
          </Canvas>
        </Suspense>
      </div>
      <div className="absolute left-0 right-0 place-self-center rounded-full text-2xl p-4 bg-gray-200 bottom-20">
        <CgScrollV />
      </div>
    </div>
  );
}

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    state.events.update();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={ref} {...props} />;
}
