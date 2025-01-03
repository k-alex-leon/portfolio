import { useStore } from "../hooks/useStore";
import { useSprings, animated } from "@react-spring/three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { PROJECTS_MODELS } from "../constants";

export default function Projects() {
  const { setDescription, status } = useStore();

  const scaleUp = (i) => {
    return {
      to: {
        scale:
          status == "work"
            ? [
                PROJECTS_MODELS[i].scale,
                PROJECTS_MODELS[i].scale,
                PROJECTS_MODELS[i].scale,
              ]
            : [0, 0, 0],
      },
      leave: { scale: [0.5, 0.5, 0.5] },
      config: { mass: 5, tension: 1000, friction: 100 },
      tail: 100,
      delay: i * 100,
    };
  };

  const [springs, api] = useSprings(PROJECTS_MODELS.length, scaleUp);

  useEffect(() => {
    api.start((i) => scaleUp(i));
  }, [status]);

  const handleOnHover = (name) => setDescription(name);

  const handleOnClick = (event, link) => {
    event.stopPropagation();
    window.open(link, "_blank");
  };

  return (
    <group>
      {PROJECTS_MODELS.map(
        ({ source, scale, name, position, rotation, link }, inx) => {
          const model = useLoader(GLTFLoader, source);
          return (
            <animated.primitive
              key={inx}
              onPointerOver={() => handleOnHover("Click to play!")}
              onPointerLeave={() => handleOnHover("")}
              onPointerDown={(e) => handleOnClick(e, link)}
              object={model.scene}
              position={position}
              scale={springs[inx].scale}
              rotation={rotation}
            />
          );
        }
      )}
    </group>
  );
}
