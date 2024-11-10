import {
  FaLinkedin,
  FaCube,
  FaGamepad,
  FaTools,
  FaGoogle,
  FaInfo
} from "react-icons/fa";
import { BsBing } from "react-icons/bs";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { Link } from "react-router-dom";

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
    {
      name: "Info",
      icon: FaInfo,
      color: "#03b0c6",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full py-16">
      {/* widgets */}
      <div className="flex flex-col h-full p-4 mt-10">
        <Link to={'/bing'} className="relative w-full h-20">
          <BsBing className="absolute place-self-center left-6 top-0 bottom-0"/>
          <input className="w-full h-full rounded-full pl-20 bg-white" placeholder="Search..." type="text" />
        </Link>
      </div>
      <div className="h-auto flex-grow py-6 px-4 mb-4 grid grid-cols-4 grid-rows-2 gap-14">
        {apps.map((app, inx) => {
          return (
            <Link
              key={inx}
              to={`/${app.name.toLowerCase()}`}
              className={`flex flex-col items-center space-y-2 justify-center hover:scale-110`}
            >
              <div
                className='w-full h-full bg-white/20 p-6 rounded-2xl flex items-center justify-center'
              >
                <app.icon className="text-white w-2/3 h-full" />
              </div>
              <span className="text-white w-full text-center text-3xl">
                {app.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
