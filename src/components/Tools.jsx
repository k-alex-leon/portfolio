import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Tools() {
  const models = [
    { scale: 0.001, pos: [0, 0, 0], source: "./models/blender.glb" },
    { scale: 0.003, pos: [2, 0, 0], source: "./models/css.glb" },
    { scale: 0.7, pos: [0, 1, 0], source: "./models/cube.glb" },
    { scale: 0.003, pos: [0, 2, 0], source: "./models/html.glb" },
    { scale: 0.1, pos: [0, 0, 1], source: "./models/javascript.glb" },
    { scale: 0.1, pos: [0, 0, 2], source: "./models/react.glb" },
  ];
  return (
    <>
      {models.map((mdl, inx) => {
        return (
          <Tool
            key={inx}
            obj={mdl.source}
            position={mdl.pos}
            scale={mdl.scale}
          />
        );
      })}
    </>
  );
}

function Tool(props) {
  const model = useLoader(GLTFLoader, props.obj);

  return <primitive object={model.scene} {...props} />;
}
