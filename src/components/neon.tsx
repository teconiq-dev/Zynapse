import { NeonGradientCard } from "./ui/neon-gradient-card";
import "../css/neon.css";

export function NeonGradientCardTimer({
  time,
  type,
}: {
  time: number;
  type: string;
}) {
  return (
    <div className="flex items-center justify-center gap-0 md:gap-4">
      <NeonGradientCard className="w-16 md:w-28 flex items-center justify-center text-center">
        <span className="countdown font-mono text-xl md:text-6xl text-center">
          <span style={{ "--value": time }}>{time}</span>
        </span>
      </NeonGradientCard>
      <p className="text-sm md:text-xl">{type}</p>
    </div>
  );
}
