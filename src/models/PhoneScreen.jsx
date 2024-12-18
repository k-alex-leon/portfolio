import { Html } from "@react-three/drei";
import LockView from "../pages/LockView";
import { useStore } from "../hooks/useStore";
import { useState } from "react";
import Navigation from "../Navigation";
import * as THREE from "three";

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
  const handleCursorIn = (e) => {
    setPhoneHover(true);
  };

  const handleCursorOut = (e) => {
    setPhoneHover(false);
  };
  return (
    <Html
      // position={[0, 0.018, -0.81]}
      position={[0, 0.018, -0.8]}
      style={{
        width: "760px",
        height: "1582px",
        backgroundColor: "blue",
        // marginBottom: "20px",
        marginRight: "1px",
        borderRadius: "90px",
        touchAction: "none",
        userSelect: "none",
        // pointerEvents: 'none'
      }}
      transform
      // receiveShadow
      // castShadow
      // material={<planeGeometry args={[0.1, 0.1]} />}
      occlude="blending"
      zIndexRange={[99, 0]}
      // occlude
    >
      <main
        onPointerOver={handleCursorIn}
        onPointerLeave={handleCursorOut}
        className={`relative w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-[90px] text-4xl opacity-95`}
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
