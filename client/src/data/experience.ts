export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  color: "primary" | "secondary" | "accent";
  icon: string;
}

export const experiences: Experience[] = [
  {
    role: "Junior Front-End Developer",
    company: "SID Techno",
    period: "Mar 2024 - Present",
    description: 
      "Developed responsive web applications using React.js and Next.js. Implemented modern UI/UX designs and integrated RESTful APIs. Collaborated with the design team to create engaging user interfaces.",
    skills: ["React", "Next.js", "Tailwind"],
    color: "primary",
    icon: "fas fa-briefcase"
  },
  {
    role: "Front-End Developer Internship",
    company: "SID Techno",
    period: "Dec 2023 - Feb 2024",
    description: 
      "Worked on various client projects, developing responsive websites and web applications. Focused on creating clean, efficient code and implementing client requirements.",
    skills: ["JavaScript", "HTML/CSS", "Bootstrap"],
    color: "secondary",
    icon: "fas fa-laptop-code"
  },
  // {
  //   role: "Web Design Intern",
  //   company: "Tech Solutions",
  //   period: "Sep 2020 - Mar 2021",
  //   description: 
  //     "Assisted in designing and developing websites for various clients. Gained hands-on experience in web development and design principles. Collaborated with senior developers on project implementations.",
  //   skills: ["HTML5", "CSS3", "jQuery"],
  //   color: "accent",
  //   icon: "fas fa-graduation-cap"
  // }
];
