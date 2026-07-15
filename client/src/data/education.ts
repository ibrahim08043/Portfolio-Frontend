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
  color: "primary" | "secondary" | "accent" | "primary";
}

export const education: Education[] = [
  {
    institution: "IQRA University",
    degree: "Bachelor of Science in Computer Science",
    period: "2024 - Present",
    description:
      "Currently pursuing a Bachelor's degree with a focus on Web Development and Software Engineering. Working on real-world projects involving modern web technologies and scalable systems.",
    highlightsTitle: "Key Subjects",
    highlights: ["Data Structures", "Algorithms", "Web Development", "Database Systems"],
    icon: "fas fa-university",
    color: "primary"
  },
  {
    institution: "Jawan Pakistan",
    degree: "MERN Stack Development",
    period: "2022 - 2023",
    description:
      "Intensive training program focused on the MERN Stack (MongoDB, Express.js, React.js, Node.js). Developed multiple full-stack projects and collaborated in team environments.",
    highlightsTitle: "Skills Acquired",
    highlights: ["React.js", "Node.js", "MongoDB", "RESTful APIs"],
    icon: "fas fa-laptop-code",
    color: "secondary"
  },
  {
    institution: "Nusrat Bhutto College",
    degree: "Higher Secondary Education",
    period: "2022 - 2024",
    description:
      "Completed Intermediate in Computer Science from Nusrat Bhutto College with an A grade. Participated in programming competitions and tech-related extracurricular activities.",
    highlightsTitle: "Achievements",
    highlights: ["First Position", "Programming Club Lead", "Science Exhibition Winner"],
    icon: "fas fa-school",
    color: "accent"
  }
];

export const certifications: Certification[] = [
  {
    title: "React.js Certification",
    issuer: "Jawan Pakistan",
    color: "primary"
  },
  {
    title: "Advanced JavaScript",
    issuer: "Jawan Pakistan",
    color: "secondary"
  },
  {
    title: "Responsive Web Design",
    issuer: "Jawan Pakistan",
    color: "accent"
  },
  {
    title: "UI/UX Fundamentals",
    issuer: "Jawan Pakistan",
    color: "primary"
  }
];
