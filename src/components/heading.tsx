"use client";
import { Cover } from "@/components/ui/cover";
import { SparklesCore } from "@/components/ui/sparkles";

export function Heading() {
  return (
    <div className="h-auto flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-950 from-0% via-purple-950 via-10% to-transparent to-100% rounded-3xl font-gugi text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
        <Cover>ZYNAPSE</Cover>
      </h1>
      <div className="w-full h-40 relative bottom-44">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.1}
          maxSize={1}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
