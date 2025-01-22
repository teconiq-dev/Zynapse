import BlurText from "@/components/ui/BlurText";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextAnimate } from "@/components/ui/text-animate";
import TiltedScroll from "@/components/ui/tilted-scroll";
import { hackathonDetails } from "@/lib/events";
import {
  CalendarIcon,
  IndianRupeeIcon,
  MapPinIcon,
  TrophyIcon,
} from "lucide-react";
import Link from "next/link";

export default function Hackathon() {
  return (
    <>
      <HeroSection />
      <HackathonRules />
      <div className="p-5 flex flex-wrap items-center justify-between gap-16">
        <WhyJoin />
        <StepsToEnter />
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <div
      className="min-h-screen flex w-full flex-col items-center justify-center py-14"
      style={{
        backgroundImage: "url('/Hackathon.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="text-center bg-background/70 backdrop-blur-md p-5 py-14 rounded-xl shadow-md shadow-purple-500">
        <h1 className="text-5xl font-bold mb-4 font-audioWide">
          Hack&apos;n Tech
        </h1>
        <div className="flex justify-center items-center">
          <BlurText
            text="Innovate. Inspire. Ignite."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl md:text-2xl text-center my-8 text-amber-300"
          />
        </div>
        <p className="text-lg mb-8 text-purple-400">30 hour Hackathon</p>
        <EventDetails />
        <Link href="/register/hackathon">
          <button className="btn btn-accent animate-bounce">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}

function EventDetails() {
  const details = [
    {
      title: "Date",
      value: "February 1-2",
      icon: <CalendarIcon size={40} className="text-purple-300" />,
    },
    {
      title: "Venue",
      value: "BMC Auditorium",
      icon: <MapPinIcon size={40} className="text-purple-300" />,
    },
    {
      title: "Prize Pool",
      value: (
        <span>
          <NumberTicker
            value={50000}
            className="whitespace-pre-wrap font-medium tracking-tighter text-red-200"
          />
        </span>
      ),
      icon: <IndianRupeeIcon size={40} className="text-purple-300" />,
    },
  ];
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {details.map((detail, index) => (
          <div className="card glass w-72 md:w-96 bg-card/5" key={index}>
            <div className="card-body">
              <h4 className="text-lg text-purple-200 font-bold">
                {detail.title}
              </h4>
              <h2 className="card-title">{detail.icon}</h2>
              <p className="text-red-200 text-xl md:text-2xl">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HackathonRules() {
  return (
    <div
      className="p-8 py-20 md:p-24 w-screen min-h-svh flex flex-col items-start justify-center gap-4"
      style={{
        backgroundImage: "url('/mesh-gradient.png')",
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-audioWide">
        Hackathon Rules
      </h2>
      {hackathonDetails.rules.do.map((rule, index) => (
        <li key={index} className="ml-4">
          <TextAnimate delay={index} animation="slideUp" by="word">
            {rule}
          </TextAnimate>
        </li>
      ))}
    </div>
  );
}

function WhyJoin() {
  const items = [
    { text: "Learn from Experts", id: "1" },
    { text: "Networking", id: "2" },
    { text: "Internships", id: "3" },
    { text: "Placement", id: "4" },
    { text: "Funding", id: "5" },
    { text: "Prizes", id: "6" },
    { text: "Experience", id: "7" },
    { text: "Fun", id: "8" },
  ];
  return (
    <div className="mx-auto p-4 my-10">
      <TiltedScroll items={items} />
    </div>
  );
}

function StepsToEnter() {
  const stepsToEnter = [
    "Signin with Google",
    "Do participant registration",
    "Register for Hackathon by filling your team details",
  ];

  return (
    <div className="flex items-start justify-center flex-col my-10 gap-4 p-16">
      <h2 className="text-2xl md:text-3xl">How to Enter</h2>
      <ol className="list-decimal list-inside">
        {stepsToEnter.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

function ChallengeTracks() {
  const tracks = [
    { name: "AI/ML", description: "Innovative AI solutions" },
    { name: "Web3", description: "Blockchain and decentralized technologies" },
    { name: "Sustainability", description: "Tech for environmental impact" },
  ];

  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Challenge Tracks
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{track.name}</h3>
              <p>{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
