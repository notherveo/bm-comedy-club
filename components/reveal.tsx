"use client";
import * as React from "react";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useTransform } from "motion/react";

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
  const opacity = useTransform(isInView, [0, 0.2], [0, 1]);
  const y = useTransform(isInView, [0, 0.2], [50, 0]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity, y }}
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
