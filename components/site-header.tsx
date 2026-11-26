"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            The Laughing House
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["Shows", "Comedians", "Venues", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <Button size="sm">Get Tickets</Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#2a2a2a]"
        >
          <nav className="flex flex-col p-4 gap-4">
            {["Shows", "Comedians", "Venues", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <Button size="sm">Get Tickets</Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
