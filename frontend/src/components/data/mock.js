// Portfolio data aligned with CV (Eleni Zafeiri)
export const portfolioData = {
  personal: {
    name: "Eleni Zafeiri",
    tagline:
      "Athens - Informatics & Telecommunications (NKUA) - Founder, TechnotesGR",
    bio: "I am a student in the Department of Informatics and Telecommunications NKUA with a current GPA of 8.2/10. After living in a small village without any experience in technology and in just one year at university, I have participated in several hackathons, attended technology events, earned multiple certifications in software development and AI, volunteered in tech-related projects, and built a strong professional network. At the same time, I run a TikTok and Instagram account, where I provide guidance to students in Informatics. My goal is to keep growing as a software engineer, while also helping others develop and succeed in technology.",
    email: "elenzaff@icloud.com",
    location: "Athens, Greece",
    social_links: {
      github: "https://github.com/feirw",
      linkedin: "https://www.linkedin.com/in/elenizafeiri",
      instagram: "https://instagram.com/technotesgr",
    },
  },

  skills: {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS", "SQL"],
    frameworks: ["React.js", "Tailwind CSS"],
    concepts: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Git & Version Control",
      "Agile / Scrum",
      "Testing & Debugging",
      "Prompt Engineering & GenAI",
      "Linux / Command Line",
      "Responsive Web Design",
      "Software Architecture",
    ],
  },

  softskills: {
    corporate: [
      "Problem solving & analytical thinking",
      "Organizational & communicative",
      "Meets deadlines",
      "Consistent & professional",
    ],
  },

  projects: [],

  experience: [
    {
      id: 1,
      company: "TechnotesGR",
      position: "Founder",
      duration: "Present",
      location: "Athens, Greece",
      description:
        "Founder of TechnotesGR, a student-first platform that helps high-school candidates prepare for the Panhellenic Informatics exam.",
      achievements: [
        "Built and run the product end to end: quizzes, flashcards, study timer, progress tracker, past exams, and an online compiler.",
        "Shipped a responsive web experience with React, TypeScript, and Python, focused on speed and exam-prep UX.",
        "Grow the community (over 100k+ views) through TikTok, Instagram, YouTube, and LinkedIn, guiding students in Informatics.",
      ],
      website_url: "https://www.technotes.gr/",
    },
  ],

  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "National and Kapodistrian University of Athens",
    gpa: "8.2/10",
    relevant_courses1: [
      "Computer Fundamentals",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Web Development",
      "Database Systems",
      "Computer Networks",
      "Operating Systems",
    ],
  },

  /* Certificates: reverse chronological (newest first) by issue month/year */
  certificates: [
    {
      id: 4,
      title: "Git/GitHub Foundations",
      issuer: "Microsoft",
      date: "8/2026",
      description:
        "Version control with Git and collaboration on GitHub: repositories, branches, commits, and pull requests.",
      link: "https://learn.microsoft.com/en-us/training/paths/github-foundations/",
    },
    {
      id: 0,
      title: "Prompt Engineering",
      issuer: "Amazon Web Services (AWS)",
      date: "12/2025",
      description: "Effective prompting for generative AI workflows.",
      link: "https://www.aws.training/",
      certificatePdf: "/certificates/prompt.pdf",
    },
    {
      id: 3,
      title: "Digital Literacy Awareness",
      issuer: "Cisco Networking Academy",
      date: "8/2025",
      description: "Foundational digital literacy and safe technology use.",
      link: "https://www.netacad.com/",
      certificatePdf: "/certificates/dig.pdf",
    },
    {
      id: 2,
      title: "Effective Data Communication & Storytelling",
      issuer: "Deloitte",
      date: "1/2025",
      description: "Data storytelling and communicating technical findings with clarity.",
      link: "https://www2.deloitte.com/",
      certificatePdf: "/certificates/deloite.pdf",
    },
  ],

  hackathons: [
    {
      id: 7,
      title: "OpenAI Community Hackathon",
      organizer: "OpenAI",
      period: "7/2026",
      description:
        "Reelio is an AI video editing platform that helps creators turn raw videos into polished, ready-to-post content in minutes. It learns each creator’s unique style, automates editing, and supports growth with captions, hashtags, and content ideas.",
      skills: [
        "AI video editing",
        "Generative AI",
        "Creator tools",
        "Content automation",
      ],
      highlight: "1st place among 8 teams · $5,000 in credits",
      linkLabel: "Presentation",
    },
    {
      id: 6,
      title: "Epirus Bank OpenHackathon",
      organizer: "Bank of Epirus",
      period: "5/2026",
      description:
        "Built a real-time scam detector that identifies fraudulent callers asking for money during phone calls. Implemented audio analysis and pattern recognition to protect bank customers from social engineering attacks.",
      skills: ["Audio processing", "Pattern recognition", "Real-time systems", "Python"],
      highlight: "1st place among 45+ competing entries · $2,500 prize",
      linkUrl: "https://github.com/artemisln/epirus-shield",
      linkLabel: "View repository",
    },
    {
      id: 3,
      title: "Hook & Grab - 2nd Blue & Circular Economy Hackathon",
      organizer: "Odyssea",
      period: "12/2024",
      description:
        "We developed an online marketplace where amateur fishers can buy and sell second-hand fishing gear, promoting sustainability and resource reuse in the fishing community.",
      skills: ["Full-stack development", "HTML", "CSS", "JavaScript", "Pitching"],
      highlight: "1st place among 10+ competing teams · $1,500 prize",
      linkUrl: "https://github.com/feirw/hook-and-grab",
      linkLabel: "View repository",
    },
    {
      id: 5,
      title: "Crazy Business Ideas",
      organizer: "IST College",
      period: "11/2025 - 3/2026",
      description:
        "Developed 'Luggease', a tourism-focused app prototype. Built the technical demo and contributed to system architecture for the pitch.",
      skills: [
        "Business Analysis",
        "Product Management",
        "Technical Pitching",
      ],
      highlight: "3rd place among 130 participations · 100% master's scholarship",
    },
  ],

  volunteer: [
    {
      id: 0,
      role : "Ambassador",
      organization : "HackathonHub EU",
      duration : "9/2026 - Present",
      location : "Athens, Greece",
      description : "Hackathon Hub EU is a central digital platform that connects and lists hackathons across Europe. It acts as a massive community bridge, bringing together developers, organizers, and local tech communities from over 25 countries.",
      linkUrl : "https://hackathonhub.eu/",
      linkLabel : "View website",
    },
    {
      id: 1,
      role: "Technical Project Manager",
      organization: "DiT Coding Club (NKUA)",
      duration: "12/2024 - 3/2026",
      location: "Hybrid, Athens",
      description:
        "Planned and coordinated hackathons and tech events, managing organizing teams of 10+ members and supporting 150+ student participants with technical challenges.",
    },
    {
      id: 3,
      role: "Tech Mentor",
      organization: "Sistech Global",
      duration: "9/2025 - 12/2025",
      location: "Remote",
      description:
        "Hands-on digital and AI support for 10+ refugee women, teaching practical technology and programming skills for professional integration.",
    },
    {
      id: 4,
      role: "Volunteer for Tech Events",
      organization: "WELEAD",
      duration: "2/2025 - 9/2025",
      location: "Athens, Greece",
      description:
        "Supported coordination of tech events, assisting with technical setup, logistics and workshops for 100+ participants.",
    },
  
  ],

};

export default portfolioData;
