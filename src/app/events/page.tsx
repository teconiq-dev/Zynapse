import { Boxes } from "@/components/ui/background-boxes";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import IndividualEvents from "./individual-events";
import TeamEvents from "./team-events";

export default function EventsPage() {
  return (
    <div className="flex z-10 flex-col items-center justify-start w-full h-full gap-20 p-8 lg:p-14 mb-20">
      <Boxes className="hidden lg:flex" />
      <VelocityScroll className="font-monoton first-letter:0.5em ">
        Zynapse Fest Events
      </VelocityScroll>
      <div className="w-full space-y-8">
        <div className="divider divider-primary">
          <h2 className="text-4xl font-gugi">Individual</h2>
        </div>
        <IndividualEvents />
      </div>
      <div className="w-full space-y-8">
        <div className="divider divider-primary">
          <h2 className="text-4xl font-gugi">Team</h2>
        </div>
        <TeamEvents />
      </div>
    </div>
  );
}
