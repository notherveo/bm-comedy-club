"use client";
import * as React from "react";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  once = true,
  classNameInner = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  classNameInner?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`reveal ${className}`}
    >
      <div className={`reveal-content ${classNameInner}`}>{children}</div>
    </motion.div>
  );
}
