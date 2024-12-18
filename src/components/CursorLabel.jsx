import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function CursorLabel({ description = "" }) {
  if (description === "") return;
  const labelRef = useRef();

  // wait for ref response
  useEffect(() => {
    const handleOnMove = (e) => {
      if (!labelRef.current) return;
      labelRef.current.style.top = `${e.pageY - 50}px`;
      labelRef.current.style.left = `${e.pageX}px`;
    };

    return () => window.addEventListener("mousemove", handleOnMove);
  }, [labelRef.current]);

  return (
    <div
      className="rounded-md text-nowrap px-2 py-1 absolute bg-slate-900 text-white text-xl z-[999]"
      ref={labelRef}
    >
      {description}
    </div>
  );
}
