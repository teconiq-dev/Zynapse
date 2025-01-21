import { AnimationContainer } from "@/components/AnimationContainer";
import { UserDetails } from "@/components/context/userContext";
import { EventCard } from "@/components/events-card";
import { teamEvents } from "@/lib/events";

export default function TeamEvents() {
  const { registrationDetails } = UserDetails();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
      {teamEvents.map((event) => (
        <AnimationContainer
          mode="slideInTop"
          key={event.id}
          index={event.id - 4}
        >
          <EventCard
            count={event.count}
            key={event.id}
            id={event.id.toString()}
            title={event.title}
            description={event.description}
            imageSrc={event.imageSrc}
            rules={event.rules}
            url={event.url}
            team={registrationDetails?.[event.team].length > 0}
          />
        </AnimationContainer>
      ))}
    </div>
  );
}
