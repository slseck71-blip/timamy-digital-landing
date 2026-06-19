"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "purple-cyan" | "blue-cyan" | "purple-blue";
}

export function GradientText({
  children,
  className,
  variant = "purple-cyan",
}: GradientTextProps) {
  const gradients = {
    "purple-cyan": "from-[#7B35E8] via-[#9B5CF6] to-[#00D4FF]",
    "blue-cyan": "from-[#3B82F6] to-[#00D4FF]",
    "purple-blue": "from-[#7B35E8] to-[#3B82F6]",
  };

  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradients[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
