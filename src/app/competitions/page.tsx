"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import IndividualEvents from "./individual-events";
import TeamEvents from "./team-events";
import { Vortex } from "@/components/ui/vortex";

export default function CompetitionsPage() {
  return (
    <div className="flex h-full mb-10 w-full mx-auto rounded-md overflow-hidden">
      <Vortex className="flex items-center flex-col justify-center py-20 w-full h-full gap-20 ">
        <VelocityScroll className="font-monoton first-letter:0.5em ">
          Zynapse Fest Events
        </VelocityScroll>
        <div className="w-full space-y-8 px-10">
          <div className="divider divider-primary">
            <h2 className="text-4xl font-gugi">Individual</h2>
          </div>
          <IndividualEvents />
        </div>
        <div className="w-full space-y-8 px-10">
          <div className="divider divider-primary">
            <h2 className="text-4xl font-gugi">Team</h2>
          </div>
          <TeamEvents />
        </div>
      </Vortex>
    </div>
  );
}
