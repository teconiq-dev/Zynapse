import CountdownTimer from "@/components/countdown";
import { Heading } from "@/components/heading";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-10 p-5">
      <Heading />
      <CountdownTimer />
      <About />
    </div>
  );
}
