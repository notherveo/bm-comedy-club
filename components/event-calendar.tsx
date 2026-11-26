"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function EventCalendar({ events }: { events: any[] }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const daysInMonth = new Date().getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="event-calendar bg-[#2a2a2a] rounded-3xl p-6">
      <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>

      <div className="flex gap-4 mb-4">
        {days.slice(0, 7).map((day, index) => (
          <Button
            key={day}
            variant={selectedDate === day.toString() ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedDate(day.toString())}
            className={cn(
              "flex-1 h-12 text-sm",
              selectedDate === day.toString() && "bg-yellow-400 text-black"
            )}
          >
            {day}
          </Button>
        ))}
      </div>

      <div className="space-y-2">
        {events
          .filter((event) => {
            const eventDate = new Date(event.date).getDate();
            return eventDate <= daysInMonth;
          })
          .map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: event.id * 0.1 }}
              className={cn(
                "event-item p-3 rounded-xl flex items-center gap-3",
                selectedDate === event.date && "bg-yellow-400/10"
              )}
            >
              <div className="flex-1">
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-gray-400">{event.time}</p>
              </div>
              <Badge variant="secondary" className="bg-yellow-400 text-black">
                {event.price}
              </Badge>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
