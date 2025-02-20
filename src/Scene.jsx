import { Gltf, PresentationControls } from "@react-three/drei";
import Phone from "./models/Phone";
import { useStore } from "./hooks/useStore";
import Rig from "./utils/Rig";
import Tools from "./pages/Tools";
import Projects from "./pages/Projects";
import Presentation from "./pages/Presentation";

export default function Scene() {
  const { isPhoneHover, status } = useStore();

  return (
    <>
      {/* camera movement */}
      {/* {!isPhoneHover && <Rig />} */}

      <PresentationControls
        enabled={!isPhoneHover && status !== "work" && status !== "info"}
        global
        config={{ mass: 2, tension: 100 }}
        snap={{ mass: 4, tension: 500 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 3, Math.PI / 3]}
      >
        <Phone />
      </PresentationControls>

      {/* animation section models */}
      <Tools />
      <Projects />
      <Presentation />
    </>
  );
}
