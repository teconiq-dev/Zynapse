import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="flex z-10 flex-col items-center justify-start w-full h-full gap-10 p-8 lg:p-14">
      <Boxes className="hidden lg:flex" />
      <h1 className="text-4xl font-bold mb-10 font-monoton">
        Tech Fest Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <EventCard
          title="Debugging"
          description="Test your debugging skills in this intense competition."
        />
        <EventCard
          title="Web Development"
          description="Showcase your web development prowess."
        />
        <EventCard
          title="Relay Coding"
          description="Team up and code in a relay format."
        />
        <EventCard
          title="Tech Quiz"
          description="Prove your tech knowledge in this quiz."
        />
        <EventCard
          title="AR Treasure Hunt"
          description="Find hidden treasures using AR technology."
        />
        <EventCard
          title="PPT Presentation"
          description="Present your ideas and innovations."
        />
      </div>
    </div>
  );
}

function EventCard({ title, description }) {
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
          <button className="btn btn-sm btn-primary">
            <Link href="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
