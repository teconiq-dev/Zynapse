import CountdownTimer from "@/components/countdown";
import { Heading } from "@/components/heading";
import { About } from "@/components/about";
import MorphingText from "@/components/ui/morphing-text";
import { Boxes } from "@/components/ui/background-boxes";

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
    "Fest"
  ];

  return (
    <>
      <div className="flex flex-col items-start justify-start w-full min-h-screen gap-6 px-3 md:px-14 pt-5 md:pt-14 bg-[url('/mesh-gradient.png')] bg-cover">
        <Boxes className="hidden lg:flex" />
        <Heading />
        <div className="flex justify-between items-center flex-wrap w-full gap-48 mb-20">
          <MorphingText texts={texts} />
          <CountdownTimer />
        </div>
        <div className="divider divider-secondary z-10 my-0 pb-0"></div>
      </div>
      <div className="bg-base-100 py-10 px-2 md:px-10">
        <About />
      </div>
    </>
  );
}
