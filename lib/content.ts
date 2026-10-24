// Sources: owner-provided résumé DOCX, portfolio brief, credential screenshot,
// and the previously inspected CampusOS public sign-in page. No private contact data.
export const profile = {
  name: "Lingesh Sashi Kumar",
  shortName: "Lingesh",
  university: "Rutgers University–New Brunswick",
  school: "School of Arts and Sciences",
  degree: "B.S. in Computer Science and Data Science (CS&DS)",
  graduation: "May 2030",
  highSchool: {
    name: "Bridgewater-Raritan High School",
    qualification: "High School Diploma",
    year: "2026",
  },
  github: "https://github.com/lingeshssss",
  youtube: "https://www.youtube.com/@2fast-m3",
  email: "lingeshsashi@gmail.com",
  linkedin: "https://www.linkedin.com/in/lingesh-sashi-kumar-b62770265/",
  resumePdf: "/lingesh-sashi-kumar-resume.pdf",
  credentialsUrl:
    "https://learn.microsoft.com/en-us/users/lingeshsashikumar-4285/credentials/certifications",
  skills: ["Java", "Python", "SQL", "React", "Node.js", "Azure", "Git"],
  skillGroups: [
    {
      title: "Languages & development",
      items: ["Java", "Python", "SQL", "React", "Node.js"],
    },
    {
      title: "Cloud, AI & tools",
      items: [
        "Microsoft Azure",
        "Claude API",
        "Prompt Engineering",
        "Git",
        "Android Studio",
        "VS Code",
      ],
    },
    {
      title: "Security",
      items: [
        "Vulnerability Assessment",
        "Threat Research",
        "Risk Analysis",
        "Security Compliance",
        "IAM",
        "Incident Response Fundamentals",
        "Cloud Security Fundamentals",
      ],
    },
  ],
};
export const projects = [
  {
    slug: "campus-os",
    title: "CampusOS",
    category: "Web applications",
    label: "Public sign-in available",
    year: "2026",
    description:
      "A full-stack student companion connecting six academic workflows.",
    summary:
      "Class scheduling, deadline tracking, calendar synchronization, textbook price comparison, grade forecasting, and academic planning in one responsive application.",
    problem:
      "College work spans schedules, deadlines, textbooks, and grades. CampusOS brings these academic workflows into a single student companion.",
    role: "Developer",
    technologies: ["React", "Node.js", "Google Calendar API"],
    scope: [
      "Class scheduling and deadline tracking",
      "Calendar synchronization and calendar-ready .ics exports",
      "Textbook price comparison",
      "Grade forecasting and academic planning",
      "Natural-language and syllabus parsing into assignments and grading schemas",
    ],
    built:
      "I consolidated six academic workflows into a responsive full-stack application and engineered automated data pipelines that turn natural-language input and syllabus content into structured assignments, grading schemas, and calendar-ready exports.",
    approach:
      "The résumé documents React and Node.js, with the Google Calendar API for calendar integration. The parsing pipelines connect unstructured academic information with structured assignments and calendar data.",
    outcome:
      "The résumé documents an implementation spanning six academic workflows. No usage, performance, or adoption metrics have been supplied.",
    note: "Implementation details are drawn from my résumé. The public sign-in page was reviewed; authenticated workflows and source code have not been independently tested for this portfolio.",
    repository: null as string | null,
    demo: "https://www.campusos.dev" as string | null,
    screenshot: "/campusos-sign-in.webp" as string | null,
  },
  {
    slug: "marketpilot-ai",
    title: "MarketPilot AI",
    category: "AI applications",
    label: "Personal project",
    year: "2026",
    description:
      "A personal AI assistant for market analysis and predictive insights.",
    summary:
      "An AI assistant using the Claude API and Python to analyze real-time and historical market data and generate buy/sell recommendations.",
    problem:
      "MarketPilot AI explores how an AI assistant can bring current market conditions and historical data together to inform market analysis.",
    role: "Developer",
    technologies: ["Python", "Claude API"],
    scope: [
      "Real-time and historical market-data analysis",
      "AI-generated buy/sell recommendations",
      "Predictive insights combining current conditions and forward-looking trend analysis",
    ],
    built:
      "I built a personal AI assistant using the Claude API to analyze market data and generate recommendations, and designed a predictive insight layer combining current conditions with forward-looking trend analysis.",
    approach:
      "Python and the Claude API are the documented technologies. The project combines market-data analysis with an AI-driven recommendation and predictive-insight layer.",
    outcome:
      "The résumé records the assistant and predictive-insight layer. No trading performance, recommendation accuracy, or financial returns are claimed.",
    note: "This overview is based on my résumé. The supplied deployment requires Vercel access, so a public demo and application screenshots are not available here.",
    repository: null as string | null,
    demo: null as string | null,
    screenshot: null as string | null,
  },
];
export const experience = [
  {
    section: "work",
    type: "Internship",
    title: "AI Intern",
    organization: "Codestax",
    dates: "Feb 2026 – Apr 2026",
    description:
      "Helped improve and simplify the end-user experience of an AI-powered application through iterative testing and design feedback.",
    bullets: [
      "Contributed to improving and simplifying the end-user experience of an AI-powered application during a three-month internship.",
      "Used iterative testing and design feedback to support user-experience improvements.",
    ],
  },
  {
    section: "work",
    type: "Internship",
    title: "Cybersecurity Intern",
    organization:
      "New Jersey Cybersecurity & Communications Integration Cell (NJCCIC)",
    dates: "Jun 2025 – Aug 2025",
    description:
      "Researched government-network vulnerabilities and emerging public-sector threats, documenting findings to support risk assessment and incident response readiness.",
    bullets: [
      "Researched and analyzed security vulnerabilities across government networks and systems, supporting statewide cyber-risk identification and mitigation efforts.",
      "Investigated emerging threats and attack vectors affecting public-sector IT infrastructure, documenting findings for risk assessment and incident response readiness.",
    ],
  },
  {
    section: "work",
    type: "Instruction & digital operations",
    title: "Assistant Instructor & Head of Digital Operations",
    organization: "Prince Martial Arts",
    dates: "Sep 2024 – Sep 2026",
    description:
      "Assisted martial arts instruction across skill levels and administered the school’s website and social media accounts.",
    bullets: [
      "Assisted classes across skill levels, reinforcing discipline, technique, and safety.",
      "Administered the school’s website and social media accounts as head of digital operations.",
    ],
  },
  {
    section: "work",
    type: "Entrepreneurship",
    title: "Client website development",
    organization: "Web-design business",
    dates: null,
    description: "Built websites for clients through my web-design business.",
    bullets: ["Built websites for clients through my web-design business."],
  },
  {
    section: "community",
    type: "Volunteer",
    title: "Volunteer AI/ML Instructor",
    organization: "Community Temple Program",
    dates: null,
    description:
      "Designed and taught an introductory AI/ML curriculum for middle and high school students, translating technical concepts into accessible lessons.",
    bullets: [
      "Designed and taught an introductory AI/ML curriculum for middle and high school students.",
    ],
  },
  {
    section: "leadership",
    type: "Leadership",
    title: "President & Founder",
    organization: "Automotive Engineering and Design Club",
    dates: "1 year",
    description:
      "Led the Automotive Engineering and Design Club as president; founded the club, as shared in my portfolio brief.",
    bullets: [
      "President of the Automotive Engineering and Design Club; founded the club.",
    ],
  },
  {
    section: "leadership",
    type: "Activities",
    title: "Robotics & forensics",
    organization: "Clubs & competition",
    dates: null,
    description:
      "Robotics Club member for one year and Forensics Club participant for three years. Also participated in FIRST Robotics Team 303 and debate, as shared in my portfolio brief.",
    bullets: [
      "Robotics Club member (1 year); Forensics Club (3 years).",
      "FIRST Robotics Team 303 and debate participation; karate brown belt.",
    ],
  },
];
// Status and exact dates reflect the supplied Microsoft credential screenshot,
// not a live verification request. The expired credential is retained as history.
export const certifications = [
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    earned: "December 28, 2024",
    expires: "December 28, 2026",
    status: "Active",
  },
  {
    name: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    earned: "August 9, 2026",
    expires: "August 9, 2027",
    status: "Active",
  },
  {
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    earned: "July 31, 2025",
    expires: null,
    status: "Active",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    earned: "April 3, 2024",
    expires: null,
    status: "Active",
  },
  {
    name: "Microsoft Certified: Azure Data Scientist Associate",
    earned: "July 10, 2025",
    expires: null,
    status: "Expired",
  },
];
export const biography = [
  "I’m Lingesh, a first-year undergraduate at Rutgers University–New Brunswick’s School of Arts and Sciences, pursuing a B.S. in Computer Science and Data Science (CS&DS), with an expected graduation in May 2030. I’m interested in the ways software can make everyday life easier.",
  "My interests span software engineering, AI and machine learning, cloud computing, and cybersecurity. As a Cybersecurity Intern at NJCCIC, I researched security vulnerabilities and emerging threats affecting public-sector systems. At Codestax, I helped improve an AI application’s user experience through testing and design feedback.",
  "I also build client websites, have administered digital operations at Prince Martial Arts, and designed and taught an introductory AI/ML curriculum for middle and high school students through a community temple program. Sharing what I’m learning is part of how I keep learning myself.",
  "Outside of software, I founded an automotive engineering club and served as its president, participated in FIRST Robotics Team 303 and debate, and practice karate as a brown belt. I served as an assistant instructor at Prince Martial Arts from September 2024 to September 2026.",
];
// Personal interests, as stated by the owner. Album titles use official styling;
// credits and release years were checked against public discography records
// (ICEMAN: Drake solo album, released May 15, 2026). Cover art was supplied by
// the owner and is shown only to identify each album; it remains the property
// of the respective artists and labels. No streaming links, listening data,
// released tracks, equipment, or industry affiliations are claimed.
export type Album = {
  title: string;
  short?: string;
  credit: string;
  year: string;
  cover: string;
  coverAlt: string;
};
export const music = {
  intro:
    "Music is one of my biggest interests outside of school and software. These are the artists I keep coming back to, and the projects I’d point anyone toward first.",
  favorite: {
    artist: "Future",
    note: "Future is my favorite artist. Narrowing his catalog down to five wasn’t easy, but these are the ones.",
    albums: [
      {
        title: "WE DON’T TRUST YOU",
        credit: "Future & Metro Boomin",
        year: "2024",
        cover: "/albums/we-dont-trust-you.jpg",
        coverAlt:
          "WE DON’T TRUST YOU cover: Metro Boomin and Future in suits on a desert flat at night",
      },
      {
        title: "MIXTAPE PLUTO",
        credit: "Future",
        year: "2024",
        cover: "/albums/mixtape-pluto.jpg",
        coverAlt:
          "MIXTAPE PLUTO cover: a brick house at night with windows and door glowing pink",
      },
      {
        title: "High Off Life",
        credit: "Future",
        year: "2020",
        cover: "/albums/high-off-life.jpg",
        coverAlt:
          "High Off Life cover: black-and-white photo of Future with arms outstretched",
      },
      {
        title: "The WIZRD",
        credit: "Future",
        year: "2019",
        cover: "/albums/the-wizrd.jpg",
        coverAlt:
          "The WIZRD cover: Future in an orange-tinted forest framed by a purple border",
      },
      {
        title: "DS2",
        credit: "Future",
        year: "2015",
        cover: "/albums/ds2.jpg",
        coverAlt:
          "DS2 cover: blue and purple ink clouds beside a boxed FUTURE DS2 logo",
      },
    ] as Album[],
  },
  alsoEnjoy: ["NAV", "Metro Boomin", "Drake"],
  drake: {
    artist: "Drake",
    note: "Drake has one of the deepest catalogs out there. These are my favorite projects of his.",
    albums: [
      {
        title: "Her Loss",
        credit: "Drake & 21 Savage",
        year: "2022",
        cover: "/albums/her-loss.jpg",
        coverAlt:
          "Her Loss cover: close-up portrait of a woman with braids and dramatic lashes on a lavender background",
      },
      {
        title: "ICEMAN",
        credit: "Drake",
        year: "2026",
        cover: "/albums/iceman.jpg",
        coverAlt:
          "ICEMAN cover: a crystal-covered glove making an OK sign above an ICEMAN bead bracelet",
      },
      {
        title: "Views",
        credit: "Drake",
        year: "2016",
        cover: "/albums/views.jpg",
        coverAlt:
          "Views cover: Drake sitting on the edge of the CN Tower under a stormy sky",
      },
      {
        title: "Scorpion",
        credit: "Drake",
        year: "2018",
        cover: "/albums/scorpion.jpg",
        coverAlt:
          "Scorpion cover: black-and-white portrait of Drake with a handwritten signature",
      },
      {
        title: "For All the Dogs",
        credit: "Drake",
        year: "2023",
        cover: "/albums/for-all-the-dogs-scary-hours.jpg",
        coverAlt:
          "For All the Dogs Scary Hours Edition cover: two blue winged fairy silhouettes holding hands on lavender",
      },
      {
        title: "Certified Lover Boy",
        short: "CLB",
        credit: "Drake",
        year: "2021",
        cover: "/albums/certified-lover-boy.jpg",
        coverAlt:
          "Certified Lover Boy cover: a grid of twelve pregnant-woman emoji in different colors",
      },
    ] as Album[],
  },
  production: {
    inspirations: ["Southside", "ATL Jacob"],
    paragraphs: [
      "One of my hobbies is music production. I make beats inspired by producers like Southside and ATL Jacob, built around the hard-hitting drums and 808s I hear in their work.",
      "Making a beat feels a lot like building software. I start with a small idea, layer parts on top of it, listen back, and keep adjusting until it works. It’s also where I experiment most freely: trying a different bounce, swapping a sound, or stripping a pattern back to see what still holds up.",
    ],
  },
};
export const interests = [
  {
    label: "CARS",
    title: "Engineering in motion.",
    body: "Cars bring together design, technology, and personality. I founded and led an automotive engineering and design club, and I share the interest on my automotive YouTube channel.",
    link: { href: profile.youtube, label: "@2fast-m3" },
  },
  {
    label: "ENTREPRENEURSHIP",
    title: "Ideas into action.",
    body: "Through my web-design business, I build websites for clients. I enjoy the whole process: understanding what someone needs, making something useful, and finding the people it can help.",
    link: null as { href: string; label: string } | null,
  },
];
// Editorial checklist: do not present these missing details as public claims.
export const missingContent = {
  credentials:
    "Individual Microsoft verification URLs and the Data Scientist credential’s exact expiry date; status is sourced from the supplied screenshot, not a live credential check.",
  projects:
    "Project source code, development/release status, documented challenges and lessons, and supported usage/outcome metrics. Public MarketPilot preview or screenshots. CampusOS authenticated workflows have not been independently tested.",
  clients:
    "Client names, screenshots, URLs, project dates, business name, and display permission.",
  experience:
    "Calendar dates for volunteer teaching, club activities, and client website work.",
  contact:
    "Portrait and real portfolio domain; optional server-side delivery service credentials if a contact form is desired.",
};
export const pendingProjectSources = {
  marketPilot: "https://marketpilot-6m00qvgdo-lingesh8.vercel.app",
  campusOS: "https://www.campusos.dev",
};
