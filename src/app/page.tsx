import CountdownTimer from "@/components/countdown";
import {Heading} from "@/components/heading";
import {About} from "@/components/about";

export default function Home() {
  return (
    <div className="px-5">
      <div className="flex flex-col items-center h-full w-full gap-10">
        <Heading/>
        <CountdownTimer/>
        <About/>
      </div>
    </div>
  );
}
