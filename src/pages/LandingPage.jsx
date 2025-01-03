import { easeInOut, motion } from "framer-motion";
import NavContact from "../components/NavContact";

export default function LandingPage() {
  const show = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, delay: 2, ease: easeInOut },
  };
  return (
    <div className="w-full h-full relative">
      <NavContact />
      <section className="grid grid-cols-1 w-full h-screen items-center justify-items-center">
        {/* introduction */}
        <div className="w-5/6">
          <motion.h4
            className="text-3xl text-start font-anton text-gray-700"
            // style={{filter: 'invert(0%)'}}
            {...show}
          >
            Hi there! I'm
          </motion.h4>
          <motion.h1
            className="text-[100px] grid lg:grid-cols-5 grid-cols-1 w-full md:text-[150px] font-archivo"
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
            <span className="text-center col-span-2">KEVIN</span>
            <span className="text-center"></span>
            <span className="text-center col-span-2">LEÓN</span>
          </motion.h1>
          <motion.p
            className="text-end text-2xl font-anton text-gray-700"
            {...show}
          >
            And welcome to my portfolio.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
