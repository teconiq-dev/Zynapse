"use client";
import { motion } from "framer-motion";

export const ButtonAnimation = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 1.2 }}
      whileFocus={{ scale: 1.1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
