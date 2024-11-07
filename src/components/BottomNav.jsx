import { FaRegCircle, FaRegSquare } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";

export default function BottomNav() {
  return (
    <>
      <div className="flex bg-white/20 h-20 backdrop-blur-md mt-auto rounded-b-[90px]">
        <div className="w-full flex justify-around text-white items-center">
          <FiTriangle />
          <FaRegSquare />
          <FaRegCircle />
        </div>
      </div>
    </>
  );
}
