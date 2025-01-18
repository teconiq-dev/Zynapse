import { Heading } from "@/components/heading";
import { About } from "@/components/about";
import { Contact } from "@/components/Contact";
import { BrainCircuitIcon, CodeXmlIcon, NotepadTextIcon } from "lucide-react";
import Link from "next/link";
import { TextAnimation } from "@/components/TextAnimation";
import BlurText from "@/components/ui/BlurText";

const eventDetails = [
  {
    date: "February 1, 2",
    title: "Hackathon",
    description: "30 hour exciting hackathon",
    icon: <CodeXmlIcon className="w-8 h-8 text-[#DB7751] mx-auto inline" />,
    url: "/register/hackathon",
  },
  {
    date: "February 6",
    title: "Workshops",
    description: "Upgrade your skills",
    icon: (
      <NotepadTextIcon className="w-8 h-8 text-secondary-foreground mx-auto inline" />
    ),
    url: "/workshops",
  },
  {
    date: "February 7",
    title: "Competitions",
    description: "Participate in exciting events",
    icon: (
      <BrainCircuitIcon className="w-8 h-8 text-purple-400 mx-auto inline" />
    ),
    url: "/competitions",
  },
];
export default function Home() {
  return (
    <>
      <Heading />
      <div className="h-full w-screen">
        <div className="bg-gradient-to-b from-purple-950/10 to-slate-900 py-20 px-4 flex flex-col items-center justify-center">
          <BlurText
            text="Annual Tech Fest of Department of Computer Science 2025"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-2xl text-center my-8"
          />
          <div className="flex flex-col items-center justify-center gap-2 py-10">
            {eventDetails.map((event, index) => (
              <div className="stat max-w-2xl" key={index}>
                <div className="stat-figure text-primary">
                  <Link href={event.url}>
                    <button className="btn btn-square btn-outline">
                      {event.icon}
                    </button>
                  </Link>
                </div>
                <div className="stat-title font-bold font-exo2 text-secondary-foreground">
                  {event.date}
                </div>
                <TextAnimation mode="slideInRight">
                  <div className="stat-value text-primary text-2xl md:text-3xl">
                    {event.title}
                  </div>
                  <div className="stat-desc text-red-200 italic">
                    {event.description}
                  </div>
                </TextAnimation>
              </div>
            ))}
          </div>
        </div>
        <About />
      </div>
      <Contact />
    </>
  );
}
