"use client";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.3, ease: "easeInOut" },
  },
};
const slideInTop = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 },
  },
};
const slideInBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
  },
};
const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
  },
};
const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 },
  },
};

type TextAnimationProps = {
  children: React.ReactNode;
  mode?:
    | "slideInTop"
    | "slideInBottom"
    | "slideInLeft"
    | "slideInRight"
    | "reveal";
};

export const TextAnimation = ({
  children,
  mode = "slideInBottom",
}: TextAnimationProps) => {
  return (
    <motion.div
      variants={
        mode === "slideInTop"
          ? slideInTop
          : mode === "slideInLeft"
            ? slideInLeft
            : mode === "slideInRight"
              ? slideInRight
              : mode === "reveal"
                ? reveal
                : slideInBottom
      }
      initial="hidden"
      exit="hidden"
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
};
