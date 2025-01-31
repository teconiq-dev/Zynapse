"use client";
import { useState, useEffect } from "react";
import { NeonGradientCardTimer } from "./neon";
import AnimatedGradientText from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { AnimationContainer } from "./AnimationContainer";

type timeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
export const CountdownTimer = () => {
  const targetDate = new Date("2025-02-01T09:30:00");
  const [timeLeft, setTimeLeft] = useState<timeLeft | object>({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeRemaining = {};

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      // Time is up
      timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeRemaining;
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex h-auto w-auto max-w-screen-10 flex-col sm:p-6 md:px-14 items-center justify-center overflow-hidden rounded-xl bg-transparent md:shadow-xl">
      <div className="z-10 flex mb-10 items-center justify-center">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Headsup! The event starts in!
          </span>
        </AnimatedGradientText>
      </div>
      <div className="flex gap-1 md:gap-2 lg:gap-3">
        <AnimationContainer mode="reveal" index={1}>
          <NeonGradientCardTimer time={timeLeft.days} type="Days" />
        </AnimationContainer>
        <AnimationContainer mode="reveal" index={2}>
          <NeonGradientCardTimer time={timeLeft.hours} type="Hours" />
        </AnimationContainer>
        <AnimationContainer mode="reveal" index={3}>
          <NeonGradientCardTimer time={timeLeft.minutes} type="Minutes" />
        </AnimationContainer>
        <AnimationContainer mode="reveal" index={4}>
          <NeonGradientCardTimer time={timeLeft.seconds} type="Seconds" />
        </AnimationContainer>
      </div>
    </div>
  );
};

export default CountdownTimer;
