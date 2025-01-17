"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import IndividualEvents from "./individual-events";
import TeamEvents from "./team-events";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextAnimation } from "@/components/TextAnimation";
import { Room } from "@/components/Room";
import Link from "next/link";
import { Hackathon } from "@/components/hackathon";

export default function CompetitionsPage() {
  return (
    <div className="flex h-full w-full mx-auto rounded-md overflow-hidden">
      <FlickeringGrid
        className="-z-10 bg-background [mask-image:radial-gradient(720px_circle_at_center,white,transparent)] flex items-center justify-center fixed w-full h-full inset-0"
        squareSize={14}
        gridGap={12}
        color="#DA6992"
        maxOpacity={0.7}
        flickerChance={0.5}
      />
      <div className="flex items-center flex-col justify-center py-5 md:py-10 w-full h-full gap-20">
        <div className="relative w-full h-fit min-h-screen bg-background flex flex-col gap-20 items-center justify-center pt-4">
          <TextAnimation>
            <h1 className="text-3xl md:text-6xl font-monoton absolute top-32 left-1/2 transform -translate-x-1/2">
              Competitions
            </h1>
          </TextAnimation>
          <div className="h-screen w-full">
            <Room />
          </div>
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-end gap-6">
            <TextAnimation mode="slideInTop">
              <p className="text-center text-lg md:text-xl font-gugi text-red-200">
                Join thrilling competitions and win amazing prizes!
              </p>
            </TextAnimation>
            <Link href="/competitions/#individual">
              <button className="btn btn-primary btn-sm btn-outline">
                Register
              </button>
            </Link>
          </div>
        </div>
        <VelocityScroll className="font-monoton first-letter:0.5em ">
          Zynapse Fest
        </VelocityScroll>
        <div className="divider divider-primary">
          <h2
            id="individual"
            className="text-3xl font-gugi text-red-200 animate-pulse"
          >
            Hackathon
          </h2>
        </div>
        <Hackathon />
        <div className="w-full space-y-8 px-2 md:px-10 lg:px-40">
          <div className="divider divider-primary">
            <h2
              id="individual"
              className="text-3xl font-gugi text-red-200 animate-pulse"
            >
              Individual
            </h2>
          </div>
          <IndividualEvents />
        </div>
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
