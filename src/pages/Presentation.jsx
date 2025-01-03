// import { useSpring } from "@react-spring/web";
import { animated, config, useSpring } from "@react-spring/three";
import { useStore } from "../hooks/useStore";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect } from "react";
import { CONTACT_ICONS } from "../constants";

const TAG = {
  name: "Tag",
  action: "Contact Me",
  scale: 4,
  position: [-3, -2, -0.5],
  rotation: [-0.1, 0.6, 0.2],
  source: "./tag.glb",
};
export default function Presentation() {
  const { status, setDescription } = useStore();
  const moveTo = () => {
    return {
      // from : { scale: [0, 0, 0] },
      position:
        status == "info"
          ? [TAG.position[0], TAG.position[1], TAG.position[2]]
          : [TAG.position[0], 10, TAG.position[2]],

      //   leave: { position: [0.5, 0.5, 0.5] },
      //   config: { mass: 5, tension: 1000, friction: 100 },
      config: config.wobbly,
      scale: TAG.scale,
      //   trail: 100,
      delay: 50,
    };
  };

  const [spring, api] = useSpring(moveTo);
  const model = useLoader(GLTFLoader, TAG.source);

  useEffect(() => {
    api.start(moveTo);
  }, [status]);

  const handleOnHover = (name) => {
    api({ scale: TAG.scale + 1 });
    setDescription(name);
  };

  const handleOnLeave = (name) => {
    api({ scale: TAG.scale });
    setDescription(name);
  };

  const handleOnClick = (event) => {
    event.stopPropagation();
    // calling from constatns linkedin link
    window.open(CONTACT_ICONS[0].link, "_blank");
  };

  return (
    <animated.primitive
      object={model.scene}
      onPointerOver={() => handleOnHover(TAG.action)}
      onPointerLeave={() => handleOnLeave("")}
      onPointerDown={(e) => handleOnClick(e)}
      scale={spring.scale}
      rotation={TAG.rotation}
      position={spring.position}
    />
  );
}
