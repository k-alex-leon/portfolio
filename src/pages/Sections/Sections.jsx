import {
  animate,
  color,
  delay,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";
import "./Sections.css";

export default function Sections({ isLocked = true }) {
  const [locked, setLocked] = useState(isLocked);
  const show = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, delay: 2, ease: easeInOut },
  };

  return (
    <div className="absolute w-full h-full">
      <motion.section className=" grid grid-cols-1 w-full h-screen items-center justify-items-center place-content-center">
        {/* introduction */}
        <div className="w-4/5 text-center">
          <motion.h4
            className="text-3xl text-start font-anton text-gray-700"
            // style={{filter: 'invert(0%)'}}
            {...show}
          >
            Hi there! I'm
          </motion.h4>
          <motion.h1
            className="text-[150px] lg:text-[200px] font-archivo"
            initial={{
              opacity: 0,
              marginBottom: 100,
              marginTop: 100,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              marginBottom: 0,
              marginTop: 0,
              filter: "blur(0px)",
            }}
            transition={{ duration: 1.5, delay: 1, ease: easeInOut }}
          >
            KEVIN LEÓN
          </motion.h1>
          <motion.p
            className="text-right text-2xl mr-16 font-anton text-gray-700"
            {...show}
          >
            And this is my portfolio.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
