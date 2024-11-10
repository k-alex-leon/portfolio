import { easeInOut, motion } from "framer-motion";

export default function WindowView({ children, url }) {
  return (
    <>
      <motion.div
        className="w-full h-full rounded-[90px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        {url ? (
          <iframe
            className="w-full h-full rounded-[90px]"
            src={url}
          ></iframe>
        ) : (
          children
        )}
      </motion.div>
    </>
  );
}
