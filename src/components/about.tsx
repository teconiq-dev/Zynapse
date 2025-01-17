import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TextAnimation } from "./TextAnimation";
export const About = () => {
  return (
    <div className="w-screen bg-slate-900 pt-10" id="about">
      <TextAnimation>
        <h2 className="font-monoton text-3xl md:text-5xl text-center py-14">
          ABOUT
        </h2>
      </TextAnimation>
      <StickyScroll content={content} />
    </div>
  );
};

const content = [
  {
    title: "ZYNAPSE 2025",
    description:
      "It’s the first step towards building a vibrant hub for technological excellence at Bharata Mata College. This pioneering platform is dedicated to highlighting fresh ideas, fostering creativity, and providing students the chance to showcase their skills and innovative thinking.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-400),var(--blue-900))] flex items-center justify-center text-white">
        <Image
          src="/logo.png"
          alt="Zynapse"
          objectFit="contain"
          layout="fill"
        />
      </div>
    ),
  },
  {
    title: "Bharata Mata College",
    description:
      "Zynapse 2025 marks the beginning of an exciting new chapter at Bharata Mata College – our first-ever tech fest, designed to ignite passion, spark innovation, and inspire the next generation of tech pioneers.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image src="/bmclogo.png" layout="fill" objectFit="contain" alt="BMC" />
      </div>
    ),
  },
  {
    title: "Teconiq",
    description:
      "Teconiq is the driving force behind Zynapse – a newly-formed computer science association with a vision to cultivate innovation, sharpen skills, and promote hands-on learning.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/teconiq.png"
          alt="teconiq"
          layout="fill"
          objectFit="contain"
        />
      </div>
    ),
  },
];
