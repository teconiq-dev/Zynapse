import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const About = () => {
  return (
    <div className="z-10 flex flex-col gap-10 items-center justify-center max-w-3xl">
      <AnimatedGradientText className="flex gap-10 p-5">
        <Image src="/logo.png" alt="Logo" width={250} height={250} />
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent sm:text-lg md:text-xl`,
          )}
        >
          The Department of Computer Science at Bharata Mata College is thrilled
          to present Zynapse 2025, an exciting tech fest aimed at fostering
          innovation, creativity, and collaboration among students and tech
          enthusiasts. This year's event promises to be an enriching experience
          filled with hackathons, competitions and workshops.
        </span>
      </AnimatedGradientText>

      <AnimatedGradientText className="flex gap-10 p-5">
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent sm:text-lg md:text-xl`,
          )}
        >
          The Department of Computer Science at Bharata Mata College is thrilled
          to present Zynapse 2025, an exciting tech fest aimed at fostering
          innovation, creativity, and collaboration among students and tech
          enthusiasts. This year's event promises to be an enriching experience
          filled with hackathons, competitions and workshops.
        </span>
        <Image src="/logo.png" alt="Logo" width={250} height={250} />
      </AnimatedGradientText>

      <AnimatedGradientText className="flex gap-10 p-5">
        <Image src="/logo.png" alt="Logo" width={250} height={250} />
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent sm:text-lg md:text-xl`,
          )}
        >
          The Department of Computer Science at Bharata Mata College is thrilled
          to present Zynapse 2025, an exciting tech fest aimed at fostering
          innovation, creativity, and collaboration among students and tech
          enthusiasts. This year's event promises to be an enriching experience
          filled with hackathons, competitions and workshops.
        </span>
      </AnimatedGradientText>
    </div>
  );
};

