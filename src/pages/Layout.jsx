import { motion } from "framer-motion";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <motion.div
      className="absolute min-w-full h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* status bar */}
      <StatusBar />
      {/* get content from url */}
      <Outlet />
      <BottomNav />
    </motion.div>
  );
}
