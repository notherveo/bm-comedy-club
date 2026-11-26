"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Countdown({
  targetDate,
  className = "",
}: {
  targetDate: Date;
  className?: string;
}) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const calculateTimeLeft = (targetDate: Date) => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className={`countdown ${className}`}>
      <div className="countdown-grid">
        {Object.entries(timeLeft).map(([key, value]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: Number(key) * 0.1 }}
            className="countdown-item"
          >
            <div className="countdown-value">
              {formatTime(value)}
            </div>
            <div className="countdown-label capitalize">
              {key}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
