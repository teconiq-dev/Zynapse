"use client";
import { cn } from "@/lib/utils";
import "../css/App.css";
import { CountdownTimer } from "./countdown";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { Cover } from "./ui/cover";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-20">
      <div className="max-w-6xl mb-10 flex flex-col gap-6">
        <h1 className="rounded-lg text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-black to-black">
          <Cover>Zynapse 2025</Cover>
        </h1>
        <div className="z-10 flex min-h-64 items-center justify-center">
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-900" />
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-2xl`,
              )}
            >
              The Department of Computer Science at Bharata Mata College is
              thrilled to present Zynapse 2025, an exciting tech fest aimed at
              fostering innovation, creativity, and collaboration among students
              and tech enthusiasts. This year's event promises to be an
              enriching experience filled with hackathons, competitions and
              workshops.
            </span>
          </AnimatedGradientText>
        </div>
      </div>
      <CountdownTimer />
    </div>
  );
}

export default App;
