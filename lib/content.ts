// Public facts are sourced from the owner’s supplied brief, unless noted otherwise.
export const profile = {
  name: "Lingesh Sashi Kumar",
  shortName: "Lingesh",
  university: "Rutgers University–New Brunswick",
  graduation: "May 2030",
  github: "https://github.com/lingeshssss",
  youtube: "https://www.youtube.com/@2fast-m3",
  email: null as string | null,
  linkedin: "https://www.linkedin.com/in/lingesh-sashi-kumar-b62770265/" as
    string | null,
  resumePdf: null as string | null,
  skills: [
    "Java",
    "Python",
    "Git / GitHub",
    "VS Code",
    "Azure",
    "Web development",
  ],
};
export const projects = [
  {
    slug: "campus-os",
    title: "CampusOS",
    category: "Product thinking",
    label: "Public sign-in available",
    description: "A college companion for the everyday needs of student life.",
    summary:
      "A student companion exploring schedules, textbook discovery, and personalized student tools.",
    problem:
      "Student life involves keeping track of schedules, finding textbooks, and navigating day-to-day tasks. CampusOS explores a more connected way to approach those needs.",
    scope: [
      "Schedule organization",
      "Textbook discovery",
      "Personalized student tools",
    ],
    note: "The public CampusOS site has a sign-in page with email and Google sign-in options. Authenticated features have not been independently reviewed. The project direction comes from my portfolio brief; technology choices, my specific contributions, and outcomes still need supporting documentation.",
    repository: null as string | null,
    demo: "https://www.campusos.dev" as string | null,
  },
];
export const experience = [
  {
    type: "Professional",
    title: "Cybersecurity experience",
    organization: "NJCICC",
    description:
      "Internship experience that informs my interest in cybersecurity and building trustworthy technology.",
  },
  {
    type: "Professional",
    title: "Web design for clients",
    organization: "Entrepreneurship",
    description:
      "Experience building websites for clients through my web-design business.",
  },
  {
    type: "Community",
    title: "Generative AI workshops",
    organization: "Teaching & learning",
    description:
      "Helped teach generative AI workshops, sharing an interest in emerging tools with others.",
  },
  {
    type: "Leadership",
    title: "Automotive engineering club",
    organization: "Founder",
    description:
      "Founded an automotive engineering club, connecting my interest in cars with hands-on engineering.",
  },
  {
    type: "Activities",
    title: "Robotics, debate & karate",
    organization: "Beyond the classroom",
    description:
      "Participated in FIRST Robotics Team 303 and debate. Karate brown belt and assistant instructor.",
  },
];
// Editorial checklist: never render these unverified details as public claims.
export const missingContent = {
  resume:
    "Original résumé PDF; exact degree, internship title, dates, responsibilities, and experience chronology.",
  credentials:
    "Credential URLs and dates for reported AI-102, DP-100, SC-900, AI-900, and Azure AI Apps and Agents Developer Associate. Check overlap before publishing.",
  projects:
    "CampusOS and MarketPilot source, stack, status, role, decisions, challenges, and supported outcomes. CampusOS public sign-in inspected; authenticated features unverified. MarketPilot URL redirects to Vercel deployment protection, so withheld pending a public preview or source.",
  clients:
    "Client names, screenshots, URLs, contribution details, and display permission.",
  contact:
    "Public email; portrait and real portfolio domain; optional contact delivery service credentials.",
};

export const pendingProjectSources = {
  marketPilot: "https://marketpilot-6m00qvgdo-lingesh8.vercel.app",
  campusOS: "https://www.campusos.dev",
};

export const biography = [
  "I’m Lingesh, a first-year undergraduate at Rutgers University–New Brunswick, with an expected graduation in May 2030. I’m interested in computer science, IT, data science, and the ways software can make everyday life easier.",
  "My interests span software engineering, AI and machine learning, cloud computing, and cybersecurity. Internship experience at NJCICC has added to my interest in security. Building websites for clients through my web-design business has given me another way to connect technology with practical needs.",
  "I’ve also helped teach generative AI workshops. Sharing what I’m learning is part of how I keep learning myself.",
  "Outside of software, I founded an automotive engineering club, participated in FIRST Robotics Team 303 and debate, and practice karate as a brown belt and assistant instructor.",
];
