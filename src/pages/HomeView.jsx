import { BsBing } from "react-icons/bs";
import { MdPhotoSizeSelectActual, MdWbSunny } from "react-icons/md";
import { TbTools } from "react-icons/tb";
import { FaSuitcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import { Suspense } from "react";
import Shapes from "../components/shapes/Shapes";

function WeatherWidget() {
  return (
    <MotionConfig>
      <motion.div className="flex relative col-span-3 rounded-2xl bg-gradient-to-b from-blue-600 to-cyan-500 p-10 shadow-xl">
        <div className="w-2/3 h-full flex flex-col justify-around text-gray-200">
          <span className="text-6xl">20°c</span>
          <h6 className="text-4xl font-medium">Weather</h6>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl overflow-hidden">
          <Suspense fallback={null}>
            <Shapes />
          </Suspense>
        </div>
      </motion.div>
    </MotionConfig>
  );
}

export default function HomeView() {
  return (
    <div className="flex flex-col w-full h-full py-16">
      {/* bing search */}
      <div className="flex flex-col mx-6 my-6 shadow-xl">
        <Link to={"/bing"} className="relative w-full h-24">
          <BsBing className="absolute place-self-center left-6 top-0 bottom-0" />
          <input
            className="w-full h-full rounded-xl pl-20 bg-white"
            placeholder="Search..."
            type="text"
          />
        </Link>
      </div>
      <div className="h-full py-6 px-4 mb-4 grid grid-cols-5 grid-rows-4 gap-10 text-white">
        {/* weather widget */}
        <WeatherWidget />

        {/* tools widget */}
        <div className="flex flex-col space-y-6 justify-center items-center bg-gradient-to-l from-orange-500 to-red-700 col-span-2 row-span-1 rounded-2xl shadow-xl">
          <TbTools size={100} />
          <h6 className="font-medium">Tools</h6>
        </div>

        {/* work widget */}
        <div className="relative p-6 col-span-5 bg-gradient-to-tr from-slate-700 to-zinc-900 rounded-2xl shadow-2xl">
          <div className="w-full left-0 right-0 flex justify-between">
            <h6 className="font-medium">Works</h6>
            <FaSuitcase />
          </div>
          <hr className="h-1 bg-white mt-4" />
        </div>
      </div>
    </div>
  );
}
