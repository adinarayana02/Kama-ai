"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

type AnimatedWrapperProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
  stagger?: boolean;
  once?: boolean;
  threshold?: number;
};

export function AnimatedWrapper({
  children,
  direction = "up",
  delay = 0,
  className = "",
  stagger = false,
  once = true,
  threshold = 0.1,
}: AnimatedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger ? staggerContainer : fadeIn(direction, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}