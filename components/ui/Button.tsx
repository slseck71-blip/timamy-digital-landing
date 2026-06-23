"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  icon,
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-[#7B35E8] to-[#3B82F6] text-white shadow-[0_0_30px_rgba(123,53,232,0.4)] hover:shadow-[0_0_50px_rgba(123,53,232,0.6)] hover:scale-[1.02]",
    secondary:
      "bg-transparent border border-[#7B35E8]/40 text-white hover:border-[#7B35E8] hover:bg-[#7B35E8]/10 hover:scale-[1.02]",
    outline:
      "bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5 hover:scale-[1.02]",
    ghost: "bg-white/5 text-white hover:bg-white/10 hover:scale-[1.02]",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  const content = (
    <>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cn(classes, disabled && "opacity-60 cursor-not-allowed pointer-events-none")}
      onClick={onClick}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
