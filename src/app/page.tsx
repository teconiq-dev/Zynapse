import { Heading } from "@/components/heading";
import { About } from "@/components/about";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Heading />
      <div className="h-full w-screen">
        <About />
      </div>
      <Contact />
    </>
  );
}
