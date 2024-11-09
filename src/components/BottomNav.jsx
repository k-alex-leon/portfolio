import { FaRegCircle, FaRegSquare } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex absolute bottom-0 w-full bg-white/20 h-20 backdrop-blur-md mt-auto rounded-b-[90px] z-10">
        <div className="w-full flex justify-around text-white items-center">
          <button onClick={handleGoBack}>
            <FiTriangle />
          </button>
          <Link to={"/"}>
            <FaRegSquare />
          </Link>
          <FaRegCircle />
        </div>
      </div>
    </>
  );
}
