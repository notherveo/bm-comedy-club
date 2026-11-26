"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ShowCard({
  show,
  featured = false,
}: {
  show: {
    id: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    location: string;
    price: string;
    comedian: string;
    description: string;
    image: string;
    tags: string[];
  };
  featured?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "show-card relative overflow-hidden rounded-3xl bg-[#2a2a2a] shadow-lg transition-all duration-300",
        featured && "ring-2 ring-yellow-400"
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={show.image}
          alt={show.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-yellow-400 text-black">
            {show.tags[0] || "Live Show"}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{show.title}</h3>
          <p className="text-sm text-gray-300">{show.comedian}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="size-4" /> {show.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-4" /> {show.time}
          </span>
        </div>

        <p className="text-gray-300 mb-4 line-clamp-2">
          {show.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <MapPin className="size-4" /> {show.venue}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-yellow-400">
            {show.price}
          </span>
          <Button size="sm">
            <Ticket className="size-4 mr-2" /> Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
