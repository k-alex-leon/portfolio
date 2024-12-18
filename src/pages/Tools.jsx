import { animated, useSprings } from "@react-spring/three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useStore } from "../hooks/useStore";
import { useEffect, useState } from "react";
import { MODELS } from "../constants";

export default function Tools() {
  const { status, setDescription } = useStore();
  const [models, setModels] = useState(MODELS);
  const [isOpen, setOpen] = useState(false);

  // TODO - can it be better?
  const scaleUp = (i) => {
    return {
      from: {
        scale: isOpen
          ? [0, 0, 0]
          : [models[i].scale, models[i].scale, models[i].scale],
      },
      to: {
        scale: isOpen
          ? [models[i].scale, models[i].scale, models[i].scale]
          : [0, 0, 0],
      },
      leave: { scale: [0.5, 0.5, 0.5] },
      config: { mass: 5, tension: 1000, friction: 100 },
      trail: 100,
    };
  };

  const [springs, api] = useSprings(models.length, scaleUp);

  // start animation depending on global status
  useEffect(() => {
    console.log("status changed: ", status);
    setOpen(status === "tools");
    api.start((i) => scaleUp(i));
  }, [status]);

  const handleOnHover = (name) => setDescription(name);

  return models.map(({ source, scale, name, position, rotation }, inx) => {
    const model = useLoader(GLTFLoader, source);
    return (
      <group
        onPointerOver={() => handleOnHover(name)}
        onPointerLeave={() => handleOnHover("")}
      >
        <animated.primitive
          key={inx}
          object={model.scene}
          position={position}
          scale={springs[inx].scale}
          rotation={rotation}
        />
      </group>
    );
  });
}
