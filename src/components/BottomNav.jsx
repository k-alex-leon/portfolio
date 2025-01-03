import { FaRegCircle, FaRegSquare } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";

export default function BottomNav() {
  const { setPageStatus } = useStore();

  const clearStatus = () => setPageStatus("");

  return (
    <>
      <div className="flex absolute bottom-0 w-full bg-white/20 h-20 backdrop-blur-md mt-auto rounded-b-[90px] z-10">
        <div className="w-full flex justify-around text-white items-center">
          <Link onClick={clearStatus} to={"/"}>
            <FiTriangle />
          </Link>
          <Link onClick={clearStatus} to={"/"}>
            <FaRegSquare />
          </Link>
          <FaRegCircle />
        </div>
      </div>
    </>
  );
}
