"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus:ring-primary/50",
  secondary:
    "bg-burgundy text-white hover:bg-burgundy-dark focus:ring-burgundy/50",
  outline:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50",
  ghost:
    "bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-burgundy focus:ring-white/50",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
