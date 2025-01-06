import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export const About = () => {
    const content = [
        {
            title: "ZYNAPSE 2025",
            description:
                "It’s the first step towards building a vibrant hub for technological excellence at Bharata Mata College. This pioneering platform is dedicated to highlighting fresh ideas, fostering creativity, and providing students the chance to showcase their skills and innovative thinking.",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-400),var(--blue-900))] flex items-center justify-center text-white">
                    <Image src="/logo.png" alt="Image" width={300} height={300}
                    objectFit="contain"/>
                </div>
            ),
        },
        {
            title: "Bharata Mata College",
            description:
                "Zynapse 2025 marks the beginning of an exciting new chapter at Bharata Mata College – our first-ever tech fest, designed to ignite passion, spark innovation, and inspire the next generation of tech pioneers.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/bmclogo.png"
                        layout="fill"
                        objectFit="contain"
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
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
                        objectFit="contain"/>
                </div>
            ),
        },
    ];
  return (
      <div className="w-screen">
              <StickyScroll content={content}/>
      </div>
  );
};
