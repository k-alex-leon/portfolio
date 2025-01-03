import { animated, useSprings } from "@react-spring/three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useStore } from "../hooks/useStore";
import { useEffect, useState } from "react";
import { MODELS } from "../constants";

export default function Tools() {
  const { setDescription, status } = useStore();

  // TODO - can it be better?
  const scaleUp = (i) => {
    return {
      // from : { scale: [0, 0, 0] },
      to: {
        scale:
          status == "tools"
            ? [MODELS[i].scale, MODELS[i].scale, MODELS[i].scale]
            : [0, 0, 0],
      },
      leave: { scale: [0.5, 0.5, 0.5] },
      config: { mass: 5, tension: 1000, friction: 100 },
      trail: 100,
      delay: i * 100,
    };
  };

  const [springs, api] = useSprings(MODELS.length, scaleUp);

  // start animation depending on global status
  useEffect(() => {
    api.start((i) => scaleUp(i));
  }, [status]);

  const handleOnHover = (name) => setDescription(name);

  return (
    <group position={[0, 0, -0.5]}>
      {MODELS.map(({ source, scale, name, position, rotation }, inx) => {
        const model = useLoader(GLTFLoader, source);
        return (
          <animated.primitive
            key={inx}
            onPointerOver={() => handleOnHover(name)}
            onPointerLeave={() => handleOnHover("")}
            object={model.scene}
            position={position}
            scale={springs[inx].scale}
            rotation={rotation}
          />
        );
      })}
    </group>
  );
}
