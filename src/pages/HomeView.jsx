import { BsBing } from "react-icons/bs";
import { TbTools } from "react-icons/tb";
import { FaSuitcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStore } from "../hooks/useStore";

export default function HomeView() {
  // here we are sending the status to know what we should display
  // const setPageStatus = useStore((state) => state.setPageStatus);
  const { setPageStatus, status } = useStore();

  const handleOnWidgetClick = (event, status) => {
    setPageStatus(status);
  };

  return (
    <div className="flex flex-col w-full h-full py-16">
      {/* bing search */}
      <div className="flex flex-col mx-6 mt-10 shadow-xl">
        <Link to={"/bing"} className="relative w-full h-24">
          <BsBing className="absolute place-self-center left-6 top-0 bottom-0" />
          <input
            className="w-full h-full rounded-xl pl-20 bg-white"
            placeholder="Search..."
            type="text"
          />
        </Link>
      </div>
      <div className="h-full mt-10 py-6 px-4 mb-4 grid grid-cols-5 grid-rows-4 gap-10 text-white">
        {/* weather widget */}
        <button
          onClick={(e) =>
            handleOnWidgetClick(e, status === "weather" ? "" : "weather")
          }
          className="col-span-3 rounded-2xl bg-white/30 shadow-xl"
        ></button>

        {/* tools widget */}
        <button
          onClick={(e) =>
            handleOnWidgetClick(e, status === "tools" ? "" : "tools")
          }
          className="flex flex-col space-y-6 justify-center items-center bg-white/30 col-span-2 row-span-1 rounded-2xl shadow-xl"
        >
          <TbTools size={100} />
          <h6 className="font-medium">Tools</h6>
        </button>

        {/* work widget */}
        <div className="relative p-6 col-span-5 bg-white/30 rounded-2xl shadow-2xl">
          <div className="w-full left-0 right-0 flex justify-between">
            <h6 className="font-medium">Works</h6>
            <FaSuitcase />
          </div>
          <hr className="h-1 bg-white mt-4" />
        </div>

        <button className="col-span-2 rounded-2xl bg-white/30 shadow-xl"></button>

        <button className="col-span-3 rounded-2xl bg-white/30 shadow-xl"></button>
      </div>
    </div>
  );
}
