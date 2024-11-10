import { GiTreasureMap } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex flex-col w-full h-full bg-slate-400 items-center justify-center rounded-[90px]">
      <div className="flex flex-col w-full max-w-md text-center items-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <p className="text-5xl text-gray-600 mb-8">Oops! Page not found</p>
          <GiTreasureMap className="m-10" size={100}/>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex text-white items-center justify-center rounded-md bg-primary px-4 py-2 text-3xl font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <GoHomeFill className="m-4"/>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
