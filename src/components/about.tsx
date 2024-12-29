import WordFadeIn from "@/components/ui/word-fade-in";
export const About = () => {
  return (
    <div className="flex justify-center w-full gap-14 flex-wrap">
      <div className="skeleton h-32 w-96"></div>
      <WordFadeIn
        className="text-base md:text-lg lg:text-xl max-w-xl font-exo2"
        words="The Department of Computer Science at Bharata Mata College is thrilled to present Zynapse 2025, an exciting tech fest aimed at fostering innovation, creativity, and collaboration among students and tech enthusiasts. This year's event promises to be an enriching experience filled with hackathons, competitions and workshops."
      />
    </div>
  );
};
