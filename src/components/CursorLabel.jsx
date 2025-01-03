import { useCallback, useEffect, useRef } from "react";

export default function CursorLabel({ text = "" }) {
  const labelRef = useRef(null);

  const handleOnMove = useCallback((e) => {
    // wait for ref response
    if (!labelRef.current) return;
    labelRef.current.style.top = `${e.pageY + 30}px`;
    labelRef.current.style.left = `${e.pageX - 40}px`;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleOnMove);
    return () => window.removeEventListener("mousemove", handleOnMove);
  }, [handleOnMove]);

  return text ? (
    <div
      ref={labelRef}
      className="rounded-md text-nowrap px-2 py-1 absolute bg-slate-900 text-white text-xl z-[999]"
    >
      {text}
    </div>
  ) : (
    <></>
  );
}
