import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function LockView() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const x = useMotionValue(0);
  const xInput = [0, 100];
  const opacityOutput = [1, 0];
  const opacity = useTransform(x, xInput, opacityOutput);

  const handleDragEnd = (e, info) => {
    if (info.offset.x > 100) alert("Phone unlocked!");
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full grid grid-rows-2 grid-cols-1 items-center place-content-center bg-gray-800 rounded-[90px] text-white">
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
      <div className="w-4/5 h-28 bg-white/10 rounded-full p-1 mb-8 relative place-self-center">
        <motion.div
          className="absolute inset-0 flex items-center px-2"
          style={{ opacity }}
        >
          <span className="text-5xl opacity-70 pl-28">Slide to unlock</span>
        </motion.div>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="w-24 h-full bg-slate-200 opacity-70 rounded-full flex items-center justify-center cursor-grab text-black"
          style={{ x }}
        >
          <FaAngleRight />
        </motion.div>
      </div>
    </div>
  );
}
