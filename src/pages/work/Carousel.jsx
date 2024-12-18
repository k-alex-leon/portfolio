import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import Card from "./Card";
import { Center, Cloud, Clouds, Gltf } from "@react-three/drei";
import { useStore } from "../../hooks/useStore";

const PROJECTS_MODELS = [
  {
    name: "Rubik cube",
    source: "./rubik.glb",
    description:
      "I did this web page where you can play with a Rubik cube. Not mutch, it is also one of mi first attemps in the THREEJS word.",
    scale: 10,
    // rotation: [0.5, 0.5, -1.5],
    rotation: [0, 0, 0],
    message: "I want to play!",
    link: "https://k-alex-leon.github.io/3d-react-rubikcube/",
  },
  {
    name: "Plane Game",
    source: "./plane.glb",
    description:
      "I did this web page where you can play with a Rubik cube. Not mutch, it is also one of mi first attemps in the THREEJS word.",
    scale: 1.5,
    // rotation: [0, 0.5, 0],
    rotation: [0, 1.5, 0],
    message: "I want to play!",
    link: "https://k-alex-leon.github.io/3d-react-rubikcube/",
  },
  {
    name: "Tetris",
    source: "./tetris.glb",
    description:
      "I did this web page where you can play with a Rubik cube. Not mutch, it is also one of mi first attemps in the THREEJS word.",
    scale: 10,
    // rotation: [1.4, 0, 0.1],
    rotation: [1.5, 0, 0.1],
    message: "I want to play!",
    link: "https://k-alex-leon.github.io/3d-react-rubikcube/",
  },
];

export default function Carousel({ radius = 1.4, count = 3 }) {
  const { setDescription } = useStore();
  const bgTexture = useLoader(
    THREE.TextureLoader,
    "./images/abstract-blue.jpg"
  );

  const cubesPositions = [...Array(50)].map(() => ({
    position: [
      1 - Math.random() * 3,
      1 - Math.random() * 3,
      1 - Math.random() * 3,
    ],
    rotation: [
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    ],
  }));

  const handleOnHover = (name) => {
    setDescription(name);
  };
  const handleOnLeave = () => {
    setDescription("");
  };
  return (
    <>
      {/* CUBES CARD */}
      <Card
        onPointerOvere={() => handleOnHover("Play Rubik")}
        onPointerLeave={() => handleOnLeave()}
        key={1}
        position={[
          Math.sin((1 / count) * Math.PI * 2) * radius,
          0,
          Math.cos((1 / count) * Math.PI * 2) * radius,
        ]}
        rotation={[0, Math.PI + (1 / count) * Math.PI * 2, 0]}
        data={PROJECTS_MODELS[0]}
        id={1}
        bg="#0076ff"
      >
        <directionalLight position={[0, -10, 10]} intensity={10} />
        <directionalLight position={[0, -10, -10]} intensity={10} />
        <Center>
          {/* {cubesPositions.map((props, i) => (
            <Gltf key={i} src="./rubik.glb" scale={2} {...props} />
          ))} */}
          <Gltf src="./rubik.glb" scale={2} />
          <mesh>
            <sphereGeometry args={[20, 20, 10]} />
            <meshBasicMaterial map={bgTexture} side={THREE.DoubleSide} />
          </mesh>
        </Center>
      </Card>

      {/* PLANE CARD */}
      <Card
        onPointerOvere={() => handleOnHover("Play Plain")}
        onPointerLeave={() => handleOnLeave()}
        key={2}
        data={PROJECTS_MODELS[1]}
        position={[
          Math.sin((2 / count) * Math.PI * 2) * radius,
          0,
          Math.cos((2 / count) * Math.PI * 2) * radius,
        ]}
        rotation={[0, Math.PI + (2 / count) * Math.PI * 2, 0]}
        id={2}
        bg="#0076ff"
      >
        {/* <Sky /> */}

        <Gltf src="./plane.glb" position={[0, 0, 1]} rotation={[0, 1.5, 0]} />

        <Clouds material={THREE.MeshLambertMaterial}>
          <Cloud seed={2} position={[10, 1, 20]} />
          <Cloud seed={4} position={[-20, 10, 50]} />
          <Cloud seed={2} position={[10, 1, 20]} />
          <Cloud seed={2} position={[0, -10, 10]} />
          <Cloud seed={2} position={[0, -5, 5]} />
        </Clouds>
      </Card>

      {/* TETRIS CARD */}
      <Card
        onPointerOver={() => handleOnHover('Play "Tetris"')}
        onPointerLeave={() => handleOnLeave()}
        key={3}
        data={PROJECTS_MODELS[1]}
        position={[
          Math.sin((3 / count) * Math.PI * 2) * radius,
          0,
          Math.cos((3 / count) * Math.PI * 2) * radius,
        ]}
        rotation={[0, Math.PI + (3 / count) * Math.PI * 2, 0]}
        id={2}
        bg="#000"
        lightColor="#feabdf"
      >
        {/* <Sky /> */}

        <Center>
          <Gltf
            src="./tetris.glb"
            position={[0, 0, -1]}
            scale={10}
            rotation={[1.9, 0, 2.5]}
          />
        </Center>

        <points scale={3}>
          <sphereGeometry />
          <pointsMaterial size={0.02} />
        </points>
      </Card>
    </>
  );
}
