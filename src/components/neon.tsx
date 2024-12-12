import { NeonGradientCard } from "./ui/neon-gradient-card";
import "../css/neon.css"

export function NeonGradientCardTimer({ time }: { time: number }) {
  return (
      <NeonGradientCard className="sm:w-20 md:w-44 flex items-center justify-between text-center">
      <span
          className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center sm:text-6xl md:text-8xl font-bold leading-none tracking-tighter text-transparent drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        {time}
      </span>
          <p>Days</p>
      </NeonGradientCard>
  );
}
