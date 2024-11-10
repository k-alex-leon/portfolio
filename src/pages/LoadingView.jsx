import { motion } from "framer-motion";
import { useProgress } from "@react-three/drei";

export default function LoadingView() {
  const { active, progress } = useProgress();

  if (!active) return;
  return (
    <motion.div
      className="absolute left-0 right-0 w-2/3 h-full mx-auto p-4 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Loading...</h2>
      <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-blue-700" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-2 text-center">{`${Math.floor(progress)}%`}</p>
    </motion.div>
  );
}