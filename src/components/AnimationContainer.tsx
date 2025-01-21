"use client";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.1 * index, ease: "easeInOut" },
  }),
};
const slideInTop = {
  hidden: { opacity: 0, y: -100 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 * index },
  }),
};
const slideInBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
  },
};

type AnimationContainerProps = {
  children: React.ReactNode;
  mode: "slideInTop" | "slideInBottom" | "reveal";
  index?: number;
};

export const AnimationContainer = ({
  children,
  mode,
  index = 1,
}: AnimationContainerProps) => {
  return (
    <motion.div
      variants={
        mode === "slideInTop"
          ? slideInTop
          : mode === "slideInBottom"
            ? slideInBottom
            : reveal
      }
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        maxWidth: "500px",
      }}
    >
      {children}
    </motion.div>
  );
};

export const LogoAnimation = ({ children, mode }) => {
  return (
    <motion.div
      variants={{
        left: { x: -20, opacity: 0 },
        right: { x: 20, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
        },
      }}
      initial={mode}
      exit={mode}
      whileInView="visible"
      style={{
        textAlign: "center",
        maxWidth: "200px",
        minWidth: "50px",
      }}
    >
      {children}
    </motion.div>
  );
};
