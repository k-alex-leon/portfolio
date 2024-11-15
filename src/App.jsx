import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Environment, Stats } from "@react-three/drei";
import LoadingView from "./pages/LoadingView";
import Sections from "./pages/Sections/Sections";

function App() {
  return (
    <>
      {/* display loading view while all is ready */}
      <LoadingView />
      {/* html background content */}
      <Sections />
      <div className="w-full h-full absolute">
        <Canvas>
          <Stats />
          <ambientLight />
          <directionalLight color="red" intensity={10} />
          <Suspense fallback={null}>
            <Environment preset="city" />
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
