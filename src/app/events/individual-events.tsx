"use client";
import { UserDetails } from "@/components/context/userContext";
import { EventCard } from "@/components/events-card";
import { individualEvents } from "@/lib/events";

export default function IndividualEvents() {
  const { registrationDetails } = UserDetails();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
      {individualEvents.map((event, key) => (
        <EventCard
          key={key}
          title={event.title}
          description={event.description}
          imageSrc={event.imageSrc}
          name={registrationDetails?.fullName}
          registered={registrationDetails?.event.includes(event.title)}
          dataFilled={registrationDetails?.fullName.length > 0}
        />
      ))}
    </div>
  );
}
