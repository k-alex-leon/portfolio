import { Html } from "@react-three/drei";
import StatusBar from "../components/StatusBar";
import HomeView from "../components/HomeView";
import BottomNav from "../components/BottomNav";

export default function HeroPage() {
  return (
    <Html
      position={[0, 0.018, -0.81]}
      style={{
        width: "760px",
        height: "1582px",
        backgroundColor: "blue",
        // marginBottom: "20px",
        marginRight: "1px",
        borderRadius: "90px",
        touchAction: "none",
        userSelect: "none",
      }}
      material={<meshStandardMaterial metalness={1} roughness={0.1} />}
      transform
      occlude
    >
      {/* <h4>Titulo pagina</h4> */}
      {/* <img src="./wallpaper.jpg" style={{ width: "100%", height: "100%" }} /> */}

      <main
        className={`w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-[90px] pt-6 text-4xl`}
      >
        <div className="h-full flex flex-col">
          {/* status bar */}
          <StatusBar />
          <HomeView />
          <BottomNav />
        </div>
      </main>
    </Html>
  );
}
