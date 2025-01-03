import { useEffect, useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function LockView({ setClose }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const areaRef = useRef();

  const x = useMotionValue(0);
  const xInput = [0, 1];
  const opacityOutput = [1, 0];
  const opacity = useTransform(x, xInput, opacityOutput);

  // this calls a param function that changes the unLock global variable
  const handleDragEnd = (e, info) => {
    setClose();
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full grid grid-rows-2 grid-cols-1 items-center place-content-center bg-gradient-to-bl from-gray-700 to-gray-800 rounded-[90px] text-white">
      {/* date and hour */}
      <div className="h-full flex flex-col items-center justify-center">
        <h5 className="text-[100px]">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h5>
        <span className="mt-10">
          {currentTime.toLocaleDateString([], {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      {/* slide to unlock */}
      <div
        ref={areaRef}
        className="w-4/5 h-28 bg-gradient-to-r from-slate-600 to-transparent rounded-full p-1 mb-8 relative place-self-center"
      >
        <motion.div
          className="absolute inset-0 flex items-center px-2"
          style={{ opacity }}
        >
          <span className="text-5xl opacity-70 pl-28">Slide to unlock</span>
        </motion.div>
        <motion.div
          drag="x"
          dragConstraints={areaRef}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="w-24 z-10 h-full bg-slate-200 opacity-70 rounded-full flex items-center justify-center cursor-grab text-black animate-pulse"
          style={{ x }}
        >
          <FaAngleRight />
        </motion.div>
      </div>
    </div>
  );
}
