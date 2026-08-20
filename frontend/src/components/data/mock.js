// Portfolio data aligned with CV (Eleni Zafeiri)
export const portfolioData = {
  personal: {
    name: "Eleni Zafeiri",
    tagline:
      "Athens - Informatics & Telecommunications (NKUA) - Software Engineer",
    bio: "I am a 3rd-year student in the Department of Informatics and Telecommunications NKUA with a current GPA of 8.2/10. After living in a small village without any experience in technology and in just one year at university, I have participated in several hackathons, attended technology events, earned multiple certifications in software development and AI, volunteered in tech-related projects, and built a strong professional network. At the same time, I run a TikTok and Instagram account, where I provide guidance to students in Informatics. My goal is to keep growing as a software engineer, while also helping others develop and succeed in technology.",
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
    frameworks: ["React.js", "Tailwind CSS", "WordPress"],
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

  projects: [
    {
      id: 1,
      title: "Website for CS students",
      description:
        "TechnotesGR is a modern, student-first platform that helps high-school candidates prepare for the Panhellenic Informatics exam. It combines fast quizzes with instant feedback, clean flashcards, a supportive community forum, a study timer, a progress tracker, and a friendly AI chatbot - wrapped in a responsive, elegant UI with dark mode. Built for speed, stability, and great UX.",
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "JavaScript", "Python"],
      features: [
        "Smart quizzes with instant feedback (local-first, retry on reconnect)",
        "Flashcards for fast revision (keyboard navigation, vertical transitions)",
        "Community forum with user profiles & clean UI",
        "Study timer (start/pause/reset, goals, pink theme)",
        "Progress tracker (interactive syllabus)",
        "Career orientation questionnaire with saved results",
        "Dark mode, responsive design, subtle animations",
        "Session-based AI chatbot (Google Gemini)",
        "Admin dashboard: user list (secure endpoint)",
      ],
      github_url: "https://github.com/feirw/technotesgrr",
      website_url: "https://www.technotes.gr/",
      status: "in progress",
      technotesgr_social: {
        youtube: "https://www.youtube.com/@technotesgr-elenizafeiri",
        instagram: "https://www.instagram.com/technotesgr/",
        tiktok: "https://www.tiktok.com/@technotesgr",
        linkedin: "https://www.linkedin.com/company/technotesgr",
      },
    },
  ],

  experience: [
    {
      id: 1,
      company: "HongLong",
      position: "Software Engineer",
      duration: "9/2025 - Present",
      location: "Remote",
      description:
        "Software engineer for an educational platform built on WordPress. Building and maintaining the site, resolving technical issues, and shipping features that improve the user experience.",
      achievements: [
        "Maintained and evolved the WordPress site, shipping regular feature updates and improvements.",
        "Resolved an average of ~7 technical support tickets weekly, systematically debugging and fixing issues.",
        "Reduced website errors by 40% within the first six months through code quality improvements and automated checks.",
      ],
    },
  ],

  clientWork: [
    {
      id: 1,
      title: "Kathargios Group",
      role: "Website",
      description:
        "Company website for earthworks, aggregate transport, and national haulage - family business based in Fthiotida.",
      url: "https://www.kathargios-group.gr/",
      image: "/clients/kathargios.jpg",
    },
    {
      id: 2,
      title: "Sotiria Chatzimarkou",
      role: "Website",
      description:
        "Academic personal website for a PhD candidate in mathematics at the University of Patras.",
      url: "https://sotirias-personal-portfolio.vercel.app/",
      image: "/clients/sotiria.jpg",
    },
  ],

  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "National and Kapodistrian University of Athens",
    duration: "9/2024 - 6/2028",
    gpa: "8.2/10",
    relevant_courses1: [
      "Computer Fundamentals",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Discrete Mathematics",
      "Probability & Statistics",
      "Artificial Intelligence",
      "Web Development",
      "Database Systems",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
      "Human-Computer Interaction",
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
      skills: ["Full-stack development", "REST APIs", "Database design", "React.js"],
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
        "Prototyping",
        "System architecture",
        "Full-stack development",
        "Technical pitching",
      ],
      highlight: "3rd place among 130 participations · 100% master's scholarship",
    },
  ],

  volunteer: [
    {
      id: 1,
      role: "Project Manager",
      organization: "DiT Coding Club (NKUA)",
      duration: "12/2024 - 3/2026",
      location: "Hybrid, Athens",
      description:
        "Planned and coordinated 4+ hackathons and tech events, managing organizing teams of 10+ members and supporting 150+ student participants with technical challenges.",
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
      duration: "2/2025 - 5/2025",
      location: "Athens, Greece",
      description:
        "Supported coordination of 3+ tech events, assisting with technical setup, logistics and workshops for 100+ participants.",
    },
    {
      id: 2,
      role: "Hackathon Coordinator",
      organization: "Texas A&M University x University of Athens",
      duration: "2/2025 - 3/2025",
      location: "Athens, Greece",
      description:
        "Supported international hackathon operations: technical infrastructure, logistics and communication for 80+ participants across two universities.",
    },
  ],

  photos: [
    {
      url: "/photos/123.jpg",
      title: "HackHarvard 2025",
      description: "Volunteering as Social Media Manager for HackHarvard 2025.",
      tag: "volunteer",
    },
  ],
};

export default portfolioData;
