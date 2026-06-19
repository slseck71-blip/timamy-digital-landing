"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "blue";
  delay?: number;
  hover?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColor = "purple",
  delay = 0,
  hover = true,
}: GlowCardProps) {
  const glows = {
    purple: "hover:shadow-[0_0_60px_rgba(123,53,232,0.2)] hover:border-[#7B35E8]/40",
    cyan: "hover:shadow-[0_0_60px_rgba(0,212,255,0.15)] hover:border-[#00D4FF]/40",
    blue: "hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] hover:border-[#3B82F6]/40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative rounded-2xl border border-white/8 bg-[#1E293B]/60 backdrop-blur-xl p-6 transition-all duration-300",
        hover && glows[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
