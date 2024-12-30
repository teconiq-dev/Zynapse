"use client";
import {Hyperspeed } from "@/components/hyperspeed";
import {Cover} from "@/components/ui/cover";

export function Heading() {
  return (
    <div className="w-full flex justify-center items-center">
      <h1
        className="md:text-7xl p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-950 from-0% via-purple-950/40 via-10% to-transparent to-100% rounded-3xl font-audioWide text-4xl lg:text-8xl font-bold text-center text-white relative z-20">
        <Cover>ZYNAPSE</Cover>
      </h1>
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {
          },
          onSlowDown: () => {
          },
          distortion: 'turbulentDistortion',
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 50,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xFFFFFF,
            brokenLines: 0xFFFFFF,
            leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
            rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
            sticks: 0x03B3C3,
          }
        }}
      />

    </div>
  );
}
