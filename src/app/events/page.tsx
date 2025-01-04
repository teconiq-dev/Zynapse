import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";
import Image from "next/image";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";


export default function EventsPage() {
  return (
    <div className="flex z-10 flex-col items-center justify-start w-full h-full gap-10 p-8 lg:p-14">
      <Boxes className="hidden lg:flex" />
        <VelocityScroll className="font-monoton first-letter:0.5em ">
             Tech Fest Events
        </VelocityScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <EventCard
          title="Hackathon"
          description="48 hours brain storming with exciting price"
          imageSrc="/Hackathon.jpeg"
        />
        <EventCard
          title="AR Treasure Hunt"
          description="Find hidden treasures using AR technology."
          imageSrc="/AR_treasure_hunt.jpeg"
        />
        <EventCard
          title="Debugging"
          description="Test your debugging skills in this intense competition."
          imageSrc="/debugging.jpeg"
        />
        <EventCard
          title="Web Development"
          description="Showcase your web development prowess."
          imageSrc="/web-design.jpeg"
        />
        <EventCard
          title="Relay Coding"
          description="Team up and code in a relay format."
          imageSrc="/relay_coding.jpeg"
        />
        <EventCard
          title="Tech Quiz"
          description="Prove your tech knowledge in this quiz."
          imageSrc="/Tech_quiz.jpeg"
        />
        <EventCard
          title="PPT Presentation"
          description="Present your ideas and innovations."
          imageSrc="/PPT_present.jpeg"
        />
      </div>
    </div>
  );
}

function EventCard({ title, description, imageSrc }) {
  return (
    <div className="card bg-base-100 image-full w-full shadow-xl rounded-lg">
      <figure className="rounded-lg overflow-hidden">
          <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
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
