export type SkillCategory = "frontend" | "backend" | "database" | "devops" | "ai" | "tools";

export interface Skill {
  name: string;
  percentage: number;
  category: SkillCategory;
}

export interface TagSkill {
  name: string;
  icon: string;
  color: "primary" | "secondary" | "accent" | "yellow-400";
}

export const skills: Skill[] = [
  // ── Frontend ─────────────────────────────────────────────────────────────
  { name: "React.js",          percentage: 95, category: "frontend" },
  { name: "Next.js",           percentage: 90, category: "frontend" },
  { name: "TypeScript",        percentage: 88, category: "frontend" },
  { name: "JavaScript (ES6+)", percentage: 92, category: "frontend" },
  { name: "Redux Toolkit",     percentage: 82, category: "frontend" },
  { name: "Tailwind CSS",      percentage: 92, category: "frontend" },
  { name: "Ant Design",        percentage: 80, category: "frontend" },
  { name: "GSAP",              percentage: 76, category: "frontend" },
  { name: "HTML5 / CSS3",      percentage: 95, category: "frontend" },

  // ── Backend & APIs ────────────────────────────────────────────────────────
  { name: "Node.js",           percentage: 85, category: "backend" },
  { name: "Express.js",        percentage: 83, category: "backend" },
  { name: "NestJS",            percentage: 74, category: "backend" },
  { name: "RESTful APIs",      percentage: 90, category: "backend" },
  { name: "WebSockets",        percentage: 78, category: "backend" },
  { name: "Firebase",          percentage: 75, category: "backend" },
  { name: "JWT Authentication",percentage: 83, category: "backend" },

  // ── Databases ─────────────────────────────────────────────────────────────
  { name: "MongoDB",           percentage: 82, category: "database" },
  { name: "MySQL",             percentage: 79, category: "database" },
  { name: "PostgreSQL",        percentage: 72, category: "database" },
  { name: "Redis",             percentage: 65, category: "database" },

  // ── DevOps & Cloud ────────────────────────────────────────────────────────
  { name: "Docker",            percentage: 66, category: "devops" },
  { name: "AWS",               percentage: 63, category: "devops" },
  { name: "CI/CD (GitHub Actions)", percentage: 73, category: "devops" },
  { name: "Jest (Unit Testing)",   percentage: 68, category: "devops" },

  // ── AI-Augmented Dev ──────────────────────────────────────────────────────
  { name: "GitHub Copilot",    percentage: 92, category: "ai" },
  { name: "Cursor AI",         percentage: 90, category: "ai" },
  { name: "Claude Code",       percentage: 88, category: "ai" },
  { name: "ChatGPT / OpenAI",  percentage: 85, category: "ai" },

  // ── Dev Tools ─────────────────────────────────────────────────────────────
  { name: "Git / GitHub",      percentage: 92, category: "tools" },
  { name: "Postman",           percentage: 85, category: "tools" },
  { name: "Figma",             percentage: 80, category: "tools" },
  { name: "Vite / Webpack",    percentage: 83, category: "tools" },
  { name: "Axios",             percentage: 87, category: "tools" },
];

export const tagSkills: TagSkill[] = [
  { name: "React.js",      icon: "fab fa-react",        color: "primary" },
  { name: "Next.js",       icon: "fas fa-layer-group",  color: "secondary" },
  { name: "TypeScript",    icon: "fas fa-code",         color: "primary" },
  { name: "Node.js",       icon: "fab fa-node-js",      color: "secondary" },
  { name: "JavaScript",    icon: "fab fa-js",           color: "yellow-400" },
  { name: "NestJS",        icon: "fas fa-server",       color: "accent" },
  { name: "MongoDB",       icon: "fas fa-database",     color: "secondary" },
  { name: "PostgreSQL",    icon: "fas fa-database",     color: "primary" },
  { name: "MySQL",         icon: "fas fa-database",     color: "accent" },
  { name: "Redis",         icon: "fas fa-bolt",         color: "secondary" },
  { name: "Docker",        icon: "fab fa-docker",       color: "primary" },
  { name: "AWS",           icon: "fab fa-aws",          color: "yellow-400" },
  { name: "HTML5",         icon: "fab fa-html5",        color: "accent" },
  { name: "CSS3",          icon: "fab fa-css3-alt",     color: "primary" },
  { name: "Git",           icon: "fab fa-git-alt",      color: "secondary" },
  { name: "Firebase",      icon: "fas fa-fire",         color: "accent" },
  { name: "Tailwind CSS",  icon: "fas fa-wind",         color: "primary" },
  { name: "Redux",         icon: "fas fa-atom",         color: "accent" },
  { name: "WebSockets",    icon: "fas fa-plug",         color: "secondary" },
  { name: "Figma",         icon: "fab fa-figma",        color: "primary" },
  { name: "Copilot AI",    icon: "fas fa-robot",        color: "accent" },
  { name: "Agile/Scrum",   icon: "fas fa-users",        color: "secondary" },
];
