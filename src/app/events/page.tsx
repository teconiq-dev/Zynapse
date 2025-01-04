"use client";
import { UserDetails } from "@/components/context/userContext";
import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";

export default function EventsPage() {
  const { registrationDetails } = UserDetails();
  return (
    <div className="flex z-10 flex-col items-center justify-start w-full h-full gap-10 p-8 lg:p-14">
      <Boxes className="hidden lg:flex" />
      <h1 className="text-5xl md:text-6xl text-center mb-10 font-monoton">
        Tech Fest Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <EventCard
          title="Hackathon"
          description="48 hours brain storming with exciting price"
          registered={registrationDetails?.event?.includes("Hackathon")}
        />
        <EventCard
          title="AR Treasure Hunt"
          description="Find hidden treasures using AR technology."
          registered={registrationDetails?.event?.includes("AR Treasure Hunt")}
        />
        <EventCard
          title="Debugging"
          description="Test your debugging skills in this intense competition."
          registered={registrationDetails?.event?.includes("Debugging")}
        />
        <EventCard
          title="Web Development"
          description="Showcase your web development prowess."
          registered={registrationDetails?.event?.includes("Web Development")}
        />
        <EventCard
          title="Relay Coding"
          description="Team up and code in a relay format."
          registered={registrationDetails?.event?.includes("Relay Coding")}
        />
        <EventCard
          title="Tech Quiz"
          description="Prove your tech knowledge in this quiz."
          registered={registrationDetails?.event?.includes("Tech Quiz")}
        />
        <EventCard
          title="PPT Presentation"
          description="Present your ideas and innovations."
          registered={registrationDetails?.event?.includes("PPT Presentation")}
        />
      </div>
    </div>
  );
}

function EventCard({ title, description, registered = false }) {
  return (
    <div className="card bg-base-100 image-full w-full shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {registered ? (
            <div className="badge badge-secondary">Registered</div>
          ) : (
            <button className="btn btn-sm btn-primary">
              <Link href="/register">Register</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
