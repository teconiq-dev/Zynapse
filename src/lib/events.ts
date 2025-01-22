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
      do: [
        "Ensure you have a good understanding of HTML, CSS, and JavaScript",
        "System will be provided",
        "Pay close attention to the specific task provided at the start ",
        "The result will be based on equal points for design, functionality and interactivity",
      ],
      dont: [
        "Avoid using external libraries or frameworks unless specified",
        "Do not bring any external reference materials or notes",
        "Follow all instructions and decisions provided by the organizers and judges",
      ],
    },
  },
  {
    id: 2,
    title: "Debugging",
    description: "Fix bugs, compete, and enhance skills.",
    imageSrc: "/debugging.jpeg",
    rules: {
      do: [
        "Pay close attention to the questions in the preliminary quiz.",
        "Writing materials for the quiz and systems for debugging will be provided",
        "Judges and organizers decision will be final",
      ],
      dont: [
        "No external reference or usage of internet from any device is allowed",
        "Do not end debugging without identifying and correcting all errors(Syntax, Logical, or Semantic)",
        "No extra time would be allocated to anyone",
      ],
    },
  },
  {
    id: 3,
    title: "E-football",
    description: "Dive into action! Join the PES competition",
    imageSrc: "/Pes-tour.jpeg",
    rules: {
      do: [
        "Total number of rounds will be decided on terms of total entry in the tournament.",
        "Only 3 iconic cards, 2 legend cards, 2 featured cards are allowed.",
        "Once an opponent complaints that you are a long baller or a lag cheater(with video proof), you will be disqualified.",
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
      do: [
        "Participants may select any topic related to Computer Science and Technology",
        "Suggested topics include but are not limited to: \n\t\tTechnology and Innovation \n\t\tScience and Society \n\t\tSocial issues and Ethics \n\t\tFuture-Oriented topics \n\t\tArtificial Intelligence and Beyond \n\t\tSustainability and Technology",
        "The presentation should be between 5-7 minutes and maximum of 15 slides",
      ],
      dont: [
        "The presentation should be in English",
        "All content must be original. Plagiarism will result in immediate disqualification",
        "Each team can have a maximum of 2 members",
      ],
    },
  },
];

export const teamEvents = [
  {
    id: 6,
    title: "Relay Coding",
    description: "Team up and code in a relay format.",
    imageSrc: "/relay_coding.jpeg",
    team: "relayCoding",
    url: "/register/relay-coding",
    count: "3-4",
    rules: {
      do: [
        "Team will consist of maximum 3 members",
        "Only the team lead needs to register but is required to add members details",
        "Utilize the 5 minutes before the relay begins to discuss your strategy with your team",
        "Each team member should pick up where the previous member left off based solely on the code]",
      ],
      dont: [
        "Strictly no verbal, written, or non-verbal communication is allowed during the event",
        "Any form of communication between team members during the coding phase will result in immediate disqualification",
        "Follow all instructions and decisions provided by the organizers and judges",
      ],
    },
  },
  {
    id: 7,
    title: "Tech Quiz",
    description: "Prove your tech knowledge in this quiz.",
    imageSrc: "/Tech_quiz.jpeg",
    team: "techQuiz",
    url: "/register/tech-quiz",
    count: "2",
    rules: {
      do: ["The quiz will have multiple rounds", "Each round will have a different set of questions", "The quiz will be conducted in English"],
      dont: ["Do not bring mobile or external devices during the quiz", "Do not use any unfair means to cheat", "Follow all instructions and decisions provided by the organizers and judges"],
    },
  },
];

export const hackathonDetails = {
  id: 5,
  title: "Hackathon",
  description: "30 hours brain storming with exciting price",
  imageSrc: "/Hackathon.jpeg",
  team: "hackathon",
  url: "/hackathon",
  rules: {
    do: [
      "Maximum 15 teams will be allowed",
      "Team must contain 3-4 members",
      "The first registrant becomes the Team Leader",
      "Team Leader is responsible for registering the team members and naming the team",
      "Participants should bring the system and resources required for the hackathon",
      "Teams cannot be changed once the hackathon begins",
      "Team ID will be allocated",
      "Design and prototype an innovative solution for the problem statement given",
      "Team must submit an abstract and detailed roadmap outlining their approach to solving the problem statement provided",
      "The decision of the judges and organizers shall be treated as final and binding on all",
      "The working model has priority to win",
      "Wifi and accommodation facilities will be provided",
    ],
    dont: [],
  },
};
