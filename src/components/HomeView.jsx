import {
  FaLinkedin,
  FaCube,
  FaGamepad,
  FaTools,
  FaGoogle,
} from "react-icons/fa";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhotoSizeSelectActual } from "react-icons/md";

export default function HomeView() {
  const apps = [
    {
      name: "Gallery",
      icon: MdPhotoSizeSelectActual,
      color: "#fcc300",
    },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      color: "#2a52f5",
    },
    {
      name: "Cube",
      icon: FaCube,
      color: "#30ddda",
    },
    {
      name: "Tetris",
      icon: FaGamepad,
      color: "#de03e5",
    },
    {
      name: "AirPlane",
      icon: BsAirplaneEnginesFill,
      color: "#b40803",
    },
    {
      name: "Whatsapp",
      icon: IoLogoWhatsapp,
      color: "#01bb64",
    },
    {
      name: "Tools",
      icon: FaTools,
      color: "#01bb64",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full">
      {/* widgets */}
      <div className="flex flex-col h-full p-4 mt-10">
        <div className="relative w-full h-20">
          <FaGoogle className="absolute place-self-center left-6 top-0 bottom-0"/>
          <input className="w-full h-full rounded-full pl-20 bg-white" placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="h-auto flex-grow py-6 px-4 mb-4 grid grid-cols-4 grid-rows-2 gap-14">
        {apps.map((app, inx) => {
          return (
            <div
              key={inx}
              className="flex flex-col items-center space-y-2 justify-center"
            >
              <div
                className={`w-full h-full bg-white/20 p-6 rounded-2xl flex items-center justify-center`}
              >
                <app.icon className="text-white w-2/3 h-full" />
              </div>
              <span className="text-white w-full text-center text-3xl">
                {app.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
