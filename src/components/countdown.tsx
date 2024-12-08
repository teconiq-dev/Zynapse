import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

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
    <div className="">
      <CanvasRevealEffectTimer timeLeft={timeLeft} />
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && <p>Welcome to Zynapse!</p>}
    </div>
  );
};

export default CountdownTimer;

export function CanvasRevealEffectTimer({ timeLeft }: { timeLeft: timeLeft }) {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-black dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title={timeLeft.days} icon={<AceternityIcon />} time="Days">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title={timeLeft.hours} icon={<AceternityIcon />} time="Hours">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-rose-600"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title={timeLeft.minutes} icon={<AceternityIcon />} time="Minutes">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title={timeLeft.seconds} icon={<AceternityIcon />} time="Seconds">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-amber-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  time,
  children,
}: {
  title: number;
  icon: React.ReactNode;
  time: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] mx-auto p-4 relative sm:h-6 sm:w-6 md:h-[20rem] md:w-[20rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white dark:text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white dark:text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white dark:text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white dark:text-white" />
      <span className="absolute top-8 left-8 text-white dark:text-white">
        {time}
      </span>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
