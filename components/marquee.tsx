"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className = "",
  classNameItem = "",
  classNameText = "",
}: {
  items: string[];
  className?: string;
  classNameItem?: string;
  classNameText?: string;
}) {
  return (
    <div className={cn("marquee-container overflow-hidden", className)}>
      <motion.div
        className="marquee-content"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <motion.span
            key={item + index}
            className={cn("marquee-item", classNameItem)}
          >
            <span className={cn("marquee-text", classNameText)}>
              {item}
            </span>
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
