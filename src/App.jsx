import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Environment, OrbitControls, Stats } from "@react-three/drei";
import LoadingView from "./pages/LoadingView";
import Sections from "./pages/Sections/Sections";
import { useStore } from "./hooks/useStore";

function App() {
  const isPhoneLock = useStore((state) => state.isPhoneLocked);

  return (
    <>
      {/* display loading view while all is ready */}
      <LoadingView />
      {/* html background content */}
      <Sections isLocked={isPhoneLock} />
      <div className="top-0 left-0 fixed w-full h-full">
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
