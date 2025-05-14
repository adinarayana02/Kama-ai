"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/animations";
import Link from "next/link";

type GlowingButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function GlowingButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  icon,
  type = "button",
  disabled = false,
}: GlowingButtonProps) {
  const baseStyles = cn(
    "relative flex justify-center items-center rounded-lg font-medium transition-colors focus:outline-none",
    {
      "text-white hover:text-white": variant === "primary" || variant === "secondary" || variant === "outline",
      "border border-white/20": variant === "outline",
      "py-2 px-4 text-sm": size === "sm",
      "py-3 px-6 text-base": size === "md",
      "py-4 px-8 text-lg": size === "lg",
      "w-full": fullWidth,
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  const variantGradients = {
    primary: "bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600",
    secondary: "bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800",
    outline: "bg-black hover:bg-zinc-900",
  };

  const gradientStyle = variantGradients[variant];

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {children}
      </span>
      <span className={`absolute inset-0 rounded-lg ${gradientStyle}`}></span>
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 bg-white transition-opacity"></span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        <motion.div
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          className={baseStyles}
        >
          {buttonContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      onClick={onClick}
      type={type}
      className={`group ${baseStyles}`}
    >
      {buttonContent}
    </motion.button>
  );
}
