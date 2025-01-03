import { Suspense, useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Environment, OrbitControls, Preload, Stats } from "@react-three/drei";
import LoadingView from "./pages/LoadingView";
import { useStore } from "./hooks/useStore";
import CursorLabel from "./components/CursorLabel";
import LandingPage from "./pages/LandingPage";

function App() {
  const { isPhoneHover, description } = useStore();

  return (
    <div className="fixed w-full h-full overflow-hidden">
      {/* this will display a description when some objects are hovered */}
      {!isPhoneHover && <CursorLabel text={description} />}
      {/* display loading view while all is ready */}
      <LoadingView />
      {/* html background content */}
      <LandingPage />
      <div className="w-full h-full absolute top-0 flex">
        <div className="top-0 left-0 h-full w-full">
          <Canvas>
            <Stats />
            <ambientLight intensity={1}/>
            <directionalLight color="white" intensity={10} />
            <Suspense fallback={null}>
              <Environment preset="city" />
              <Scene />
            </Suspense>

            <Preload all />
          </Canvas>
        </div>

      </div>
    </div>
  );
}

export default App;
