import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import PhoneScreen from "./PhoneScreen";
import { config, useSpring, animated } from "@react-spring/three";
import { useStore } from "../hooks/useStore";

export default function Phone(props) {
  const { nodes, materials } = useGLTF("./phone.glb");
  const { status } = useStore();
  const phoneRef = useRef();
  const [scaleUp, set] = useSpring(() => ({
    position: [0, 0, 0],
    scale: 0,
    // config: config.wobbly,
    config: { mass: 10, tension: 500, friction: 50 },
    reset: true,
  }));

  // scale animation with delay
  // its scaling from 0 to 0.1
  useEffect(() => {
    let delay = setTimeout(() => {
      set({ scale: 0.1 });
    }, 1000);
  }, []);

  // listen to global state
  useEffect(() => {
    set({
      position: [status == "work" ? -2 : status == "info" ? 2 : 0, 0, 0],
    });
  }, [status]);

  return (
    <animated.group
      ref={phoneRef}
      {...props}
      dispose={null}
      position={scaleUp.position}
      scale={scaleUp.scale}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back.geometry}
        material={materials["flat-black"]}
        position={[0.061, 0.021, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame.geometry}
        material={materials.black}
        position={[0.061, 0.018, 1.789]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen.geometry}
        material={materials["Material.003"]}
        position={[0.061, 0.018, 1.789]}
      >
        <PhoneScreen />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass.geometry}
        material={materials.glass}
        position={[0.061, 0.018, 1.789]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button1.geometry}
        material={materials.chrome}
        position={[0.061, 0.021, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button2.geometry}
        material={materials["flat-black"]}
        position={[0.061, 0.021, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button3.geometry}
        material={materials["flat-black"]}
        position={[0.061, 0.021, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button4.geometry}
        material={materials["flat-black"]}
        position={[0.061, 0.021, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border001.geometry}
        material={materials["flat-black"]}
        position={[0.061, 0.021, 0.139]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano.geometry}
        material={materials.chrome}
        position={[6.972, 15.292, -1.023]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano002.geometry}
        material={materials.glass}
        position={[6.972, 15.292, -1.374]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[6.938, 17.298, -1.671]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Círculo.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Círculo_1.geometry}
          material={materials["flat-black"]}
        />
      </group>
      <group position={[6.946, 13.322, -1.671]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Círculo001.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Círculo001_1.geometry}
          material={materials["flat-black"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flash.geometry}
        material={materials.chrome}
        position={[6.929, 15.406, -1.671]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </animated.group>
  );
}

useGLTF.preload("./phone.glb");
