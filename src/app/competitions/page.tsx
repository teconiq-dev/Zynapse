"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import IndividualEvents from "./individual-events";
import TeamEvents from "./team-events";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextAnimation } from "@/components/TextAnimation";

export default function CompetitionsPage() {
  return (
    <div className="flex h-full mb-6 w-full mx-auto rounded-md overflow-hidden">
      <FlickeringGrid
        className="-z-10 bg-background [mask-image:radial-gradient(720px_circle_at_center,white,transparent)] flex items-center justify-center fixed w-full h-full inset-0"
        squareSize={14}
        gridGap={12}
        color="#DA6992"
        maxOpacity={0.7}
        flickerChance={0.5}
      />
      <div className="flex items-center flex-col justify-center py-16 md:py-28 w-full h-full gap-20">
        <TextAnimation>
          <h1 className="text-3xl md:text-6xl font-monoton">Competitions</h1>
        </TextAnimation>
        <div className="w-full space-y-8 px-2 md:px-10 lg:px-40">
          <div className="divider divider-primary">
            <h2 className="text-3xl font-gugi text-red-200 animate-pulse">
              Individual
            </h2>
          </div>
          <IndividualEvents />
        </div>
        <VelocityScroll className="font-monoton first-letter:0.5em ">
          Zynapse Fest
        </VelocityScroll>
        <div className="w-full space-y-8 px-2 md:px-10 lg:px-40">
          <div className="divider divider-primary">
            <h2 className="text-3xl font-gugi text-red-200 animate-pulse">
              Team
            </h2>
          </div>
          <TeamEvents />
        </div>
      </div>
    </div>
  );
}
