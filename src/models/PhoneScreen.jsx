import { Html } from "@react-three/drei";
import StatusBar from "../components/StatusBar";
import HomeView from "../pages/HomeView";
import BottomNav from "../components/BottomNav";
import LockView from "../pages/LockView";
import { useStore } from "../hooks/useStore";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../Navigation";

export default function PhoneScreen() {
  const setPhoneHover = useStore((state) => state.setPhoneHover);
  const setPhoneLock = useStore((state) => state.setPhoneLock);
  const [isLock, setLock] = useState(true);

  const handleUnLockPhone = (lock) => {
    setLock(lock);
    setPhoneLock(lock);
  };

  // if the phone screen is hover we change global state
  // this will be used to cancel some actions like camera movement or <PresentationColors />
  const handleCursorIn = () => {
    setPhoneHover(true);
  };

  const handleCursorOut = () => {
    setPhoneHover(false);
  };
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
        onPointerOver={handleCursorIn}
        onPointerOut={handleCursorOut}
        className={`relative w-full h-full bg-gradient-to-r from-purple-900 to-blue-600 rounded-[90px] text-4xl opacity-95`}
      >
        {isLock ? (
          <LockView setClose={() => handleUnLockPhone(false)} />
        ) : (
          <Navigation />
        )}
      </main>
    </Html>
  );
}
