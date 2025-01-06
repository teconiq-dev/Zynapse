import { Heading } from "@/components/heading";
import { About } from "@/components/about";

export default function Home() {
  return (
    <>
      <Heading />
      <div className="bg-base-100 py-10 px-2 md:px-10">
        <About />
      </div>
    </>
  );
}
