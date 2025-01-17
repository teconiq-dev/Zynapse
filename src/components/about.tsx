import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TextAnimation } from "./TextAnimation";
import { BrainCircuitIcon, CodeXmlIcon, NotepadTextIcon } from "lucide-react";

const eventDetails = [
  {
    date: "February 1",
    title: "Hackathon",
    description: "36 hour exciting tests",
    icon: <CodeXmlIcon className="w-8 h-8 text-white mx-auto inline" />,
  },
  {
    date: "February 6",
    title: "Workshops",
    description: "Upgrade your skills",
    icon: <NotepadTextIcon className="w-8 h-8 text-white mx-auto inline" />,
  },
  {
    date: "February 7",
    title: "Competitions",
    description: "Participate in exciting events",
    icon: <BrainCircuitIcon className="w-8 h-8 text-white mx-auto inline" />,
  },
];
export const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-purple-950/10 to-slate-900 py-20">
        {eventDetails.map((event, index) => (
          <div className="stat max-w-2xl" key={index}>
            <div className="stat-figure text-primary">{event.icon}</div>
            <div className="stat-title font-bold font-exo2 text-secondary-foreground">
              {event.date}
            </div>
            <div className="stat-value text-primary">{event.title}</div>
            <div className="stat-desc">{event.description}</div>
          </div>
        ))}
      </div>
      <div className="w-screen bg-slate-900 pt-10" id="about">
        <TextAnimation>
          <h2 className="font-monoton text-3xl md:text-5xl text-center py-14">
            ABOUT
          </h2>
        </TextAnimation>
        <StickyScroll content={content} />
      </div>
    </>
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
