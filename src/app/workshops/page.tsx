"use client";
import HyperText from "@/components/ui/hyper-text";
import BlurText from "@/components/ui/BlurText";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { Boxes } from "@/components/ui/background-boxes";
import { WorkshopCards } from "@/components/workshop-card";
import { CalendarIcon } from "lucide-react";

export default function Workshop() {
  return (
    <div className="relative z-20 py-20 lg:py-40 max-w-7xl mx-auto">
      <Boxes className="hidden lg:flex" />
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-balance text-2xl lg:text-5xl font-semibold leading-none tracking-tighter">
          Packed with
          <LineShadowText
            className="italic ml-2 text-fuchsia-500"
            shadowColor="white"
          >
            Knowledge
          </LineShadowText>
        </h1>
        <BlurText
          text="From UI/UX to Cyber Security and Gen AI we got it all. Our workshops cover everything you need to know for your adventure in industry."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl my-8 mx-4 text-amber-400"
        />
        <h3 className="text-2xl lg:text-3xl animate-bounce font-semibold leading-none tracking-tighter flex items-center justify-center gap-2 font-audioWide">
          <CalendarIcon className="inline" fill="purple" size={32} />
          <span className="text-red-200">6 Feb</span>
        </h3>
        <WorkshopCards />
        <HyperText
          className="text-xl md:text-5xl mt-8"
          text="More workshops coming soon"
        />
      </div>
    </div>
  );
}
