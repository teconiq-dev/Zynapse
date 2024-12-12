"use client";
import { useState, useEffect } from "react";
import { NeonGradientCardTimer } from "./neon";
import ShineBorder from "./ui/shine-border";

type timeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
export const CountdownTimer = () => {
  const targetDate = new Date("2025-02-01T00:00:00");
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
    <ShineBorder
      className="relative flex h-auto w-auto flex-col sm:p-6 md:px-14 items-center justify-center overflow-hidden rounded-lg border bg-transparent md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      borderWidth={2}
      borderRadius={10}
    >
      <div className="flex gap-4">
        <NeonGradientCardTimer time={timeLeft.days} type="Days" />
        <NeonGradientCardTimer time={timeLeft.hours} type="Hours" />
        <NeonGradientCardTimer time={timeLeft.minutes} type="Minutes" />
        <NeonGradientCardTimer time={timeLeft.seconds} type="Seconds" />
      </div>
    </ShineBorder>
  );
};

export default CountdownTimer;
