import { GrGallery } from "react-icons/gr";
import { FaLinkedin, FaCube, FaGamepad } from "react-icons/fa";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

export default function HomeView() {
  const apps = [
    {
      name: "Gallery",
      icon: GrGallery,
    },
    {
      name: "Linkedin",
      icon: FaLinkedin,
    },
    {
      name: "Cube Game",
      icon: FaCube,
    },
    {
      name: "Tetris",
      icon: FaGamepad,
    },
    {
      name: "AirPlane",
      icon: BsAirplaneEnginesFill,
    },
    {
      name: "Whatsapp",
      icon: IoLogoWhatsapp,
    },
  ];
  return (
    <>
      <div className="flex-grow p-4 grid grid-cols-4 gap-8">
        {apps.map((app, inx) => {
          return (
            <div key={inx} className="flex flex-col items-center">
              <div className="w-full h-24 bg-white/20 rounded-md flex items-center justify-center">
                <app.icon className="text-white" />
              </div>
              <span className="text-white w-full text-center">{app.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
