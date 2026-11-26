"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ComicCard({
  comedian,
  featured = false,
}: {
  comedian: {
    id: string;
    name: string;
    style: string;
    bio: string;
    image: string;
    tags: string[];
  };
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "comic-card relative overflow-hidden rounded-3xl bg-[#2a2a2a] shadow-lg transition-all duration-300",
        featured && "ring-2 ring-yellow-400"
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={comedian.image}
          alt={comedian.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-yellow-400 text-black">
            {comedian.style}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{comedian.name}</h3>
          <p className="text-sm text-gray-300">{comedian.tags.join(", ")}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-4 line-clamp-2">
          {comedian.bio}
        </p>

        <Button variant="outline" size="sm" className="w-full">
          View Profile
          <ArrowRight className="size-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}
