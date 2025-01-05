import { EventCard } from "@/components/events-card";
import { individualEvents } from "@/lib/events";

export default function IndividualEvents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
      {individualEvents.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          description={event.description}
          imageSrc={event.imageSrc}
        />
      ))}
    </div>
  );
}
