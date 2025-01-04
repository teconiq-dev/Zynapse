"use client";
import { EventCard } from "@/components/events-card";
import { teamEvents } from "@/lib/events";

export default function TeamEvents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {teamEvents.map((event, key) => (
        <EventCard
          key={key}
          title={event.title}
          description={event.description}
          imageSrc={event.imageSrc}
          registered={false}
          name=""
        />
      ))}
    </div>
  );
}
