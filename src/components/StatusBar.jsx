import { useEffect, useState } from "react";
import { FaSignal, FaWifi, FaBatteryThreeQuarters } from "react-icons/fa";

export default function StatusBar() {
  // current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // change time every 1 sec
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* status bar */}
      <div className="flex justify-between items-center px-6 py-2 text-white">
        <span>{formatTime(currentTime)}</span>
        {/* icons */}
        <div className="flex items-center space-x-2">
          <FaSignal />
          <FaWifi />
          <FaBatteryThreeQuarters />
        </div>
      </div>
    </>
  );
}
