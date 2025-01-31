import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import Link from "next/link";

export const Sponsors = () => {
  return (
    <div className="relative mb-20" id="sponsors">
      <BackgroundLines className="flex items-center justify-start w-full h-fit flex-col py-8">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative font-bold tracking-tight">
          Our Sponsors
        </h2>
        <div className="flex flex-col justify-evenly items-center gap-5 px-8 z-20">
          <Link href="https://justrightoverseasstudies.com/">
            <Image
              src="/justright.png"
              alt="JustRight"
              width={500}
              height={400}
            />
          </Link>
          <Link href="https://www.zoople.in/">
            <Image
              src="/zoople.png"
              alt="Zoople"
              width={400}
              height={400}
              className="mb-8"
            />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="https://www.irohub.com/">
              <Image src="/irohub.png" alt="Irohub" width={400} height={400} />
            </Link>
            <Link href="https://www.sysin.in/">
              <Image src="/Sysin.png" alt="Sysin" width={400} height={400} />
            </Link>
            <Link href="https://offensoacademy.com/">
              <Image
                src="/offenso.png"
                alt="Offenso"
                width={400}
                height={400}
              />
            </Link>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
};
