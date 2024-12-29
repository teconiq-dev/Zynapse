import CountdownTimer from "@/components/countdown";
import { Heading } from "@/components/heading";
import { About } from "@/components/about";
import { Boxes } from "@/components/ui/background-boxes";
import MorphingText from "@/components/ui/morphing-text";

export default function Home() {
  const texts = [
    "Hello",
    "Welcome",
    "Engaging",
    "Challenge",
    "Solution",
    "Innovate",
    "Explore",
    "Think",
    "Tech",
  ];

  return (
    <div className="flex flex-col items-start justify-start w-full gap-6 p-3 md:p-14 bg-[url('/mesh-gradient.png')] bg-cover">
      <Heading />
      <Boxes />
      <div className="flex justify-between items-center flex-wrap-reverse w-full gap-14 mb-20">
        <MorphingText texts={texts} />
        <CountdownTimer />
      </div>
      <div className="divider divider-secondary z-10"></div>
      <About />
    </div>
  );
}
