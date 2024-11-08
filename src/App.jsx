import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Environment, Stats } from "@react-three/drei";

function App() {
  return (
    <div className="w-full h-full absolute">
      <Canvas>
        <Stats />
        <ambientLight />
        <directionalLight color="red" intensity={10} />
        <Suspense fallback={null}>
          <Environment preset="city"/>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
