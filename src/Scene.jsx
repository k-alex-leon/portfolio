import { PresentationControls } from "@react-three/drei";
import Phone from "./models/Phone";
import { useStore } from "./hooks/useStore";
import Rig from "./utils/Rig";
import Tools from "./pages/Tools";
import CursorLabel from "./components/CursorLabel";
import Carousel from "./pages/work/Carousel";

export default function Scene() {
  const { isPhoneHover } = useStore();

  return (
    <>
      {/* camera movement */}
      {!isPhoneHover && <Rig />}

      <PresentationControls
        enabled={!isPhoneHover}
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 3, Math.PI / 3]}
      >
        <Phone />
      </PresentationControls>

      {/* <Carousel /> */}
      <Tools />
    </>
  );
}
