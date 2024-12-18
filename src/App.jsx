import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Environment, OrbitControls, Preload, Stats } from "@react-three/drei";
import LoadingView from "./pages/LoadingView";
import Sections from "./pages/Sections/Sections";
import { useStore } from "./hooks/useStore";
import Work from "./pages/work/Work";
import CursorLabel from "./components/CursorLabel";

function App() {
  const { isPhoneLock, description } = useStore();

  return (
    <div className="relative">
      {/* this will display a description when some objects are hovered */}
      <CursorLabel description={description} />
      {/* display loading view while all is ready */}
      <LoadingView />
      {/* html background content */}
      <Sections isLocked={isPhoneLock} />
      <div className="w-full h-full absolute top-0 flex">
        <div className="top-0 left-0 w-full h-full">
          <Canvas>
            <Stats />
            <ambientLight />
            <directionalLight color="red" intensity={10} />
            <Suspense fallback={null}>
              <Environment preset="city" />
              <Scene />
            </Suspense>

            <Preload all />
          </Canvas>
        </div>
        {/* <Work /> */}
      </div>
    </div>
  );
}

export default App;
