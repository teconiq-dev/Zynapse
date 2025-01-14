import { NeonGradientCard } from "./ui/neon-gradient-card";
import "../css/neon.css";

export function NeonGradientCardTimer({
  time = 0o0,
  type,
}: {
  time: number;
  type: string;
}) {
  return (
    <div className="flex items-center justify-between gap-0 md:gap-1 z-30 p-2 hover:animate-pulse">
      <NeonGradientCard className="w-16 md:w-28 flex items-center justify-center text-center">
        <span className="countdown font-mono text-xl md:text-6xl text-center">
          <span style={{ "--value": time }}>{time}</span>
        </span>
      </NeonGradientCard>
      <p id="time" className="text-xs md:text-xl font-audioWide">
        {type}
      </p>
    </div>
  );
}
