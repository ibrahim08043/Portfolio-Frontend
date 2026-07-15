export interface Skill {
  name: string;
  percentage: number;
  category: "frontend" | "backend" | "tools";
}

export interface TagSkill {
  name: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "yellow-400";
}

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: "React.js",
    percentage: 95,
    category: "frontend"
  },
  {
    name: "Next.js",
    percentage: 90,
    category: "frontend"
  },
  {
    name: "Tailwind CSS",
    percentage: 92,
    category: "frontend"
  },
  {
    name: "Bootstrap",
    percentage: 85,
    category: "frontend"
  },
  {
    name: "JavaScript",
    percentage: 90,
    category: "frontend"
  },
  
  // Backend Skills
  {
    name: "Node.js",
    percentage: 85,
    category: "backend"
  },
  {
    name: "Express.js",
    percentage: 80,
    category: "backend"
  },
  {
    name: "MongoDB",
    percentage: 78,
    category: "backend"
  },
  {
    name: "RESTful APIs",
    percentage: 88,
    category: "backend"
  },
  {
    name: "Firebase",
    percentage: 75,
    category: "backend"
  },
  
  // Tools & Others
  {
    name: "Git & GitHub",
    percentage: 92,
    category: "tools"
  },
  {
    name: "Responsive Design",
    percentage: 95,
    category: "tools"
  },
  {
    name: "UI/UX Fundamentals",
    percentage: 85,
    category: "tools"
  },
  {
    name: "VS Code",
    percentage: 95,
    category: "tools"
  },
  {
    name: "Figma",
    percentage: 80,
    category: "tools"
  }
];

export const tagSkills: TagSkill[] = [
  {
    name: "React.js",
    icon: "fab fa-react",
    color: "primary"
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    color: "secondary"
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    color: "yellow-400"
  },
  {
    name: "MongoDB",
    icon: "fas fa-database",
    color: "secondary"
  },
  {
    name: "HTML5",
    icon: "fab fa-html5",
    color: "accent"
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    color: "primary"
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    color: "secondary"
  },
  {
    name: "Responsive",
    icon: "fas fa-mobile-alt",
    color: "primary"
  },
  {
    name: "Firebase",
    icon: "fas fa-fire",
    color: "accent"
  },
  {
    name: "Express",
    icon: "fas fa-server",
    color: "secondary"
  },
  {
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
    color: "primary"
  },
  {
    name: "Tailwind",
    icon: "fas fa-wind",
    color: "secondary"
  }
];
