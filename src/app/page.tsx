import CountdownTimer from "@/components/countdown";
import { Heading } from "@/components/heading";
import { About } from "@/components/about";
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-10 p-3 md:p-10">
      <Boxes />
      <Heading />
      <div className="flex justify-between flex-wrap-reverse w-full gap-10">
        <About />
        <CountdownTimer />
      </div>
    </div>
  );
}
