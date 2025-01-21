import TiltedScroll from "@/components/ui/tilted-scroll";
import { CalendarIcon, MapPinIcon, TrophyIcon } from "lucide-react";
import Link from "next/link";

export default function Hackathon() {
  return (
    <>
      <HeroSection />
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
        <h1 className="text-5xl font-bold mb-4 font-monoton">Hack Tech</h1>
        <p className="text-xl mb-8">Innovate. Collaborate. Transform.</p>
        <p className="text-lg mb-8">30 hour Hackathon</p>
        <EventDetails />
        <Link href="/register/hackathon">
          <button className="btn btn-accent">Register Now</button>
        </Link>
      </div>
    </div>
  );
}

function EventDetails() {
  const details = [
    {
      value: "February 1-2, 2025",
      icon: <CalendarIcon size={40} className="text-purple-300" />,
    },
    {
      value: "BMC Auditorium",
      icon: <MapPinIcon size={40} className="text-purple-300" />,
    },
    {
      value: "₹50,000 Prize Pool",
      icon: <TrophyIcon size={40} className="text-purple-300" />,
    },
  ];
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {details.map((detail, index) => (
          <div className="card glass w-64 md:w-96 bg-card/10" key={index}>
            <div className="card-body">
              <h2 className="card-title">{detail.icon}</h2>
              <p>{detail.value}</p>
            </div>
          </div>
        ))}
      </div>
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
