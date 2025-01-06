export const eventsList = [
  "Hackathon",
  "AR Treasure Hunt",
  "Debugging",
  "Web Development",
  "Relay Coding",
  "Tech Quiz",
  "PPT Presentation",
];

export const individualEvents = [
  {
    id: 1,
    title: "Web Development",
    description: "Showcase your web development prowess.",
    imageSrc: "/web-design.jpeg",
    rules: {
      do: ["Ensure you have a good understanding of HTML, CSS, and JavaScript","System will be provided" ,"Pay close attention to the specific task provided at the start ","The result will be based on equal points for design, functionality and interactivity"],
      dont: ["Avoid using external libraries or frameworks unless specified", "Do not bring any external reference materials or notes","Follow all instructions and decisions provided by the organizers and judges"],
    },
  },
  {
    id: 2,
    title: "Debugging",
    description: "Test your debugging skills in this intense competition.",
    imageSrc: "/debugging.jpeg",
    rules: {
      do: ["Pay close attention to the questions in the preliminary quiz.", "Writing materials for the quiz and systems for debugging will be provided","Judges and organizers decision will be final"],
      dont: ["No external reference or usage of internet from any device is allowed","Do not end debugging without identifying and correcting all errors(Syntax, Logical, or Semantic)","No extra time would be allocated to anyone"],
    },
  },
  {
    id: 3,
    title: "E-football",
    description: "Dive into action! Join the PES competition",
    imageSrc: "/Pes-tour.jpeg",
    rules: {
      do: ["Do this", "Do that"],
      dont: ["Don't do this", "Don't do that"],
    },
  },
  {
    id: 4,
    title: "PPT Presentation",
    description: "Present your ideas and innovations.",
    imageSrc: "/PPT_present.jpeg",
    rules: {
      do: ["Participants may select any topic related to Computer Science and Technology","Suggested topics include but are not limited to: \n\t\tTechnology and Innovation \n\t\tScience and Society \n\t\tSocial issues and Ethics \n\t\tFuture-Oriented topics \n\t\tArtificial Intelligence and Beyond \n\t\tSustainability and Technology","The presentation should be between 5-7 minutes and maximum of 15 slides"],
      dont: ["The presentation should be in English","All content must be original. Plagiarism will result in immediate disqualification", "Each team can have a maximum of 2 members"],
    },
  },
];

export const teamEvents = [
  {
    id: 5,
    title: "Hackathon",
    description: "36 hours brain storming with exciting price",
    imageSrc: "/Hackathon.jpg",
    team: true,
    url: "/register/hackathon",
    rules: {
      do: ["Each team consist of 2-4 members",
        "Only the team lead needs to register but is required to add members details",
        "The team lead will be the main point of contact between the team and organizers",
        "Caution deposit of per head 100 will be taken which will be refunded after the event",
        "Participants are required to bring their own laptops and other necessary equipment",
        "Abstract and roadmap should be submitted with 2 hours",],
      dont: ["Judges will evaluate progress in every 4 hours",
        "Wifi and accommodation with meals and refreshment will be provided",
        "Results will be based on functionality and working of the submitted project",
        "Follow all instructions and decisions provided by the organizers and judges"],
    },
  },
  {
    id: 6,
    title: "Relay Coding",
    description: "Team up and code in a relay format.",
    imageSrc: "/relay_coding.jpeg",
    team: true,
    url: "/register/relay-coding",
    rules: {
      do: ["Team will consist of maximum 3 members",
        "Only the team lead needs to register but is required to add members details",
        "Utilize the 5 minutes before the relay begins to discuss your strategy with your team",
        "Each team member should pick up where the previous member left off based solely on the code]"],
      dont: ["Strictly no verbal, written, or non-verbal communication is allowed during the event",
        "Any form of communication between team members during the coding phase will result in immediate disqualification",
        "Follow all instructions and decisions provided by the organizers and judges"],
    },
  },
  {
    id: 7,
    title: "Tech Quiz",
    description: "Prove your tech knowledge in this quiz.",
    imageSrc: "/Tech_quiz.jpeg",
    team: true,
    url: "/register/tech-quiz",
    rules: {
      do: ["Do this", "Do that"],
      dont: ["Don't do this", "Don't do that"],
    },
  },
];
