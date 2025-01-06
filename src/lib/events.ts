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
      do: ["Ensure you have a good understanding of HTML, CSS, and JavaScript\n\t\t",
        "System will be provided\n\t\t" ,
        "Pay close attention to the specific task provided at the start \n\t\t",
        "The result will be based on equal points for design, functionality and interactivity\n\t\t"],
      dont: ["Avoid using external libraries or frameworks unless specified\n\t\t", 
        "Do not bring any external reference materials or notes\n\t\t",
        "Follow all instructions and decisions provided by the organizers and judges"],
    },
  },
  {
    id: 2,
    title: "Debugging",
    description: "Fix bugs, compete, and enhance skills.",
    imageSrc: "/debugging.jpeg",
    rules: {
      do: ["Pay close attention to the questions in the preliminary quiz.\n\t\t", "Writing materials for the quiz and systems for debugging will be provided\n\t\t","Judges and organizers decision will be final\n\t\t"],
      dont: ["No external reference or usage of internet from any device is allowed\n\t\t","Do not end debugging without identifying and correcting all errors(Syntax, Logical, or Semantic)\n\t\t","No extra time would be allocated to anyone"],
    },
  },
  {
    id: 3,
    title: "E-football",
    description: "Dive into action! Join the PES competition",
    imageSrc: "/Pes-tour.jpeg",
    rules: {
      do: ["Total number of rounds will be decided on terms of total entry in the tournament.\n\t\t",
        "Only 3 iconic cards, 2 legend cards, 2 featured cards are allowed.\n\t\t",
        "Once an opponent complaints that you are a long baller or a lag cheater(with video proof), you will be disqualified."
      ],
      dont: [],
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
      do: ["Each team consist of 2-4 members\n\t\t",
        "Only the team lead needs to register but is required to add members details\n\t\t",
        "The team lead will be the main point of contact between the team and organizers\n\t\t",
        "Caution deposit of per head 100 will be taken which will be refunded after the event\n\t\t",
        "Participants are required to bring their own laptops and other necessary equipment\n\t\t",
        "Abstract and roadmap should be submitted with 2 hours\n\t\t",],
      dont: ["Judges will evaluate progress in every 4 hours\n\t\t",
        "Wifi and accommodation with meals and refreshment will be provided\n\t\t",
        "Results will be based on functionality and working of the submitted project\n\t\t",
        "Follow all instructions and decisions provided by the organizers and judges\n\t\t"],
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
