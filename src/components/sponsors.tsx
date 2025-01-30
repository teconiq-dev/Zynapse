import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";

export const Sponsors = () => {
  return (
    <div className="relative mb-20" id="sponsors">
      <BackgroundLines className="flex items-center justify-start w-full h-fit flex-col py-8">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative font-bold tracking-tight">
          Our Sponsors
        </h2>
        <div className="flex flex-col justify-evenly items-center gap-5 px-4">
          <Image
            src="/justright.png"
            alt="JustRight"
            width={500}
            height={400}
          />
          <Image
            src="/zoople.png"
            alt="Zoople"
            width={400}
            height={400}
            className="mb-8"
          />
          <div className="flex flex-wrap gap-4">
            <Image src="/Sysin.png" alt="Sysin" width={400} height={400} />
            <Image src="/offenso.png" alt="Offenso" width={400} height={400} />
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};
