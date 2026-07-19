export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
  skills: string[];
  color: "primary" | "secondary" | "accent";
  icon: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Saasify Labs",
    location: "Remote",
    period: "Sep 2025 – Present",
    current: true,
    description:
      "Building full-stack applications with React.js, Node.js, Express.js, and MySQL, architecting modular backend and frontend components supporting 50+ concurrent users across multiple deployment environments.",
    bullets: [
      "Designed and implemented 40+ RESTful API endpoints with custom middleware for authentication, request validation, and centralized error handling.",
      "Shipped real-time communication features for 50+ concurrent users using WebSockets and Firebase with JWT-based authentication.",
      "Conducted peer code reviews, enforced TypeScript conventions, and mentored 3+ junior developers on scalable system design.",
      "Leveraged AI tools (GitHub Copilot, Claude Code) to accelerate code review and catch edge cases earlier.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MySQL", "WebSockets", "Firebase", "TypeScript"],
    color: "primary",
    icon: "fas fa-briefcase",
  },
  {
    role: "Junior Frontend Developer",
    company: "Sid Techno",
    location: "Karachi",
    period: "Mar 2024 – Aug 2025",
    description:
      "Architected and launched a multi-role enterprise healthcare platform integrating 30+ live REST APIs, and drove major performance and architecture improvements across 19+ dashboard pages.",
    bullets: [
      "Integrated 30+ REST APIs and removed 100% of hardcoded data, improving data consistency and lowering support inquiries by 35%.",
      "Developed a unified design system with Recharts and Ant Design, standardizing UI patterns across 19+ pages.",
      "Fixed critical Next.js build failures (invalid exports, tsconfig misconfigurations) restoring functionality across 40+ routes.",
      "Consolidated 15+ modals into a single reusable component, shrinking codebase by 1,200+ lines (70% reduction).",
    ],
    skills: ["Next.js", "TypeScript", "Redux Toolkit", "Recharts", "Ant Design", "REST APIs", "JWT Auth"],
    color: "secondary",
    icon: "fas fa-laptop-code",
  },
  {
    role: "Frontend Developer Intern",
    company: "Sid Techno",
    location: "Karachi",
    period: "Dec 2023 – Feb 2024",
    description:
      "Developed responsive, mobile-first applications and converted 20+ Figma designs into pixel-perfect components while collaborating in an 11-member Agile team.",
    bullets: [
      "Converted 20+ Figma designs into pixel-perfect, cross-browser compatible components, reducing design-to-dev revision cycles.",
      "Connected 16+ REST APIs using Axios with structured error handling and client-side state management.",
      "Strengthened code quality through peer reviews while collaborating in an 11-member Agile team environment.",
    ],
    skills: ["React.js", "JavaScript", "HTML5/CSS3", "Axios", "Bootstrap", "Figma", "REST APIs"],
    color: "accent",
    icon: "fas fa-code",
  },
];
