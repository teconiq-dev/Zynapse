import WordFadeIn from "@/components/ui/word-fade-in";
import Image from "next/image";
import BlobCursor from "@/components/ui/blob";
import SpotlightCard from "@/components/ui/spotlight-card";

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-20 gap-10">
      <BlobCursor>
      <h1 className="font-monoton text-2xl text-center md:text-6xl mb-4">About us</h1>
      </BlobCursor>
        <SpotlightCard className="custom-spotlight-card mt-20" spotlightColor="rgba(0, 229, 255, 0.2)">
          <div className="flex justify-center items-center w-full gap-14 flex-wrap">
            <WordFadeIn
              className="text-base md:text-lg lg:text-xl max-w-xl font-exo2"
              words="Zynapse Tech Fest is an annual flagship technological extravaganza designed to showcase cutting-edge innovations, foster technical creativity, and provide a platform for students to demonstrate their technological prowess. The event brings together the brightest minds in computer science and technology to explore, learn, and innovate."
            />
            <Image src="/logo.png" width={200} height={200} alt="college logo"/>
          </div>
        </SpotlightCard>
      <SpotlightCard className="custom-spotlight-card mt-20" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="flex justify-center items-center w-full gap-14 flex-wrap">
          <Image src="/bmclogo.png" width={200} height={200} alt="college logo"/>
          <WordFadeIn
            className="text-base md:text-lg lg:text-xl max-w-xl font-exo2"
            words="The Department of Computer Science at Bharata Mata College is thrilled to present Zynapse 2025, an exciting tech fest aimed at fostering innovation, creativity, and collaboration among students and tech enthusiasts. This year's event promises to be an enriching experience filled with hackathons, competitions and workshops."
          />
        </div>
      </SpotlightCard>
      <SpotlightCard className="custom-spotlight-card mt-20" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="flex justify-center items-center w-full gap-14 flex-wrap">
          <WordFadeIn
            className="text-base md:text-lg lg:text-xl max-w-xl font-exo2"
            words="Teconiq is the dedicated computer science association committed to fostering technological innovation, skill development, and collaborative learning among students. Our mission is to bridge academic knowledge with practical technological experiences, empowering students to excel in the dynamic world of computer science."
          />
          <Image src="/bmclogo.png" width={200} height={200} alt="college logo"/>
        </div>
      </SpotlightCard>
    </div>
  );
};
