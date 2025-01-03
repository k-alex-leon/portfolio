import { BsBing } from "react-icons/bs";
import { TbTools } from "react-icons/tb";
import { FaInfo, FaSuitcase } from "react-icons/fa";
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
      <div className="h-full mt-10 pt-6 pb-10 px-4 mb-4 grid grid-cols-3 items-end gap-10 text-white">
        {/* tools widget */}
        <Link
          to={"/tools"}
          onClick={(e) => handleOnWidgetClick(e, "tools")}
          className="flex flex-col space-y-6 justify-center items-center bg-white/30 rounded-2xl shadow-xl p-4"
        >
          <TbTools size={80} />
          <h6 className="font-medium">Tools</h6>
        </Link>
        {/* work widget */}
        <Link
          onClick={(e) => handleOnWidgetClick(e, "work")}
          to={"/work"}
          className="flex flex-col space-y-6 justify-center items-center bg-white/30 rounded-2xl shadow-xl p-4"
        >
          <FaSuitcase size={80} />
          <h6 className="font-medium">Work</h6>
        </Link>
        {/* info widget */}
        <Link
          to={"/info"}
          onClick={(e) => handleOnWidgetClick(e, "info")}
          className="flex flex-col space-y-6 justify-center items-center bg-white/30 rounded-2xl shadow-xl p-4"
        >
          <FaInfo size={80} />
          <h6 className="font-medium">Info</h6>
        </Link>
      </div>
    </div>
  );
}
