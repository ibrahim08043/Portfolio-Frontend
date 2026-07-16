export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  icon: string;
  color: "primary" | "secondary" | "accent";
}

export interface Certification {
  title: string;
  issuer: string;
  color: "primary" | "secondary" | "accent";
}

export const education: Education[] = [
  {
    institution: "IQRA University",
    degree: "Bachelor of Science in Computer Science",
    period: "2024 – Present",
    description:
      "Currently pursuing a Bachelor's degree with a focus on Software Engineering and Web Development. Applying academic knowledge to real-world full-stack projects while staying current with modern engineering practices.",
    highlightsTitle: "Key Subjects",
    highlights: ["Data Structures & Algorithms", "Web Development", "Database Systems", "Software Engineering", "System Design"],
    icon: "fas fa-university",
    color: "primary",
  },
  {
    institution: "Nusrat Bhutto Government College",
    degree: "Intermediate — H.S.C.",
    period: "2020 – 2024",
    description:
      "Completed Higher Secondary Certificate in Computer Science with strong academic performance. Active participant in programming clubs and technology-related activities.",
    highlightsTitle: "Highlights",
    highlights: ["Computer Science focus", "Programming competitions", "Tech extracurriculars"],
    icon: "fas fa-school",
    color: "secondary",
  },
  {
    institution: "Jawan Pakistan",
    degree: "MERN Stack Development",
    period: "2022 – 2023",
    description:
      "Intensive government-backed training program focused on the MERN stack. Developed multiple full-stack projects and collaborated in team environments, laying the foundation for a professional development career.",
    highlightsTitle: "Skills Acquired",
    highlights: ["React.js", "Node.js", "MongoDB", "Express.js", "RESTful APIs"],
    icon: "fas fa-laptop-code",
    color: "accent",
  },
];

export const certifications: Certification[] = [
  {
    title: "MERN Stack Development",
    issuer: "Jawan Pakistan",
    color: "primary",
  },
  {
    title: "React.js Certification",
    issuer: "Jawan Pakistan",
    color: "secondary",
  },
  {
    title: "Advanced JavaScript",
    issuer: "Jawan Pakistan",
    color: "accent",
  },
  {
    title: "Responsive Web Design",
    issuer: "Jawan Pakistan",
    color: "primary",
  },
];
