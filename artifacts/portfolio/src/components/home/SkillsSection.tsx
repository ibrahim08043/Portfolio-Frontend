import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

interface CategoryRow {
  key: string;
  label: string;
  icon: string;
  color: string;
  skills: string[];
}

const categories: CategoryRow[] = [
  {
    key: "frontend",
    label: "Frontend",
    icon: "fas fa-layer-group",
    color: "#B5FF4D",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    key: "backend",
    label: "Backend & APIs",
    icon: "fas fa-server",
    color: "#FF3B6B",
    skills: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "WebSockets", "Firebase", "JWT Auth"],
  },
  {
    key: "database",
    label: "Databases",
    icon: "fas fa-database",
    color: "#7C3AED",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    key: "devops",
    label: "DevOps & Cloud",
    icon: "fas fa-cloud",
    color: "#B5FF4D",
    skills: ["Docker", "AWS", "CI/CD (GitHub Actions)", "Jest (Unit Testing)"],
  },
  {
    key: "ai",
    label: "AI Tools",
    icon: "fas fa-robot",
    color: "#FF3B6B",
    skills: ["GitHub Copilot", "Cursor AI", "Claude Code", "ChatGPT / OpenAI", "Prompt Engineering"],
  },
  {
    key: "tools",
    label: "Dev Tools",
    icon: "fas fa-toolbox",
    color: "#7C3AED",
    skills: ["Git / GitHub", "Postman", "Figma", "Vite / Webpack", "Axios", "Agile / Scrum"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-section-alt relative">
    <div className="container mx-auto px-5 md:px-10">
      <SectionHeading
        title="My Skills"
        badge="Tech Stack"
        sectionNumber="02"
        subtitle="Technologies and tools I use to architect, build, and ship production-grade applications."
        accentColor="secondary"
      />

      {/* Skills table */}
      <motion.div
        className="border border-[#2C2C2C] rounded overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.key}
            variants={fadeIn("up", idx * 0.06)}
            className={`flex flex-col sm:flex-row items-start gap-4 p-5 transition-colors duration-200
                        hover:bg-[#111] group
                        ${idx < categories.length - 1 ? "border-b border-[#2C2C2C]" : ""}`}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 sm:w-44 flex-shrink-0 pt-0.5">
              <div
                className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ background: `${cat.color}14` }}
              >
                <i className={`${cat.icon} text-xs`} style={{ color: cat.color }}></i>
              </div>
              <span
                className="font-mono text-xs font-semibold uppercase tracking-widest"
                style={{ color: cat.color }}
              >
                {cat.label}
              </span>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Extra note */}
      <motion.p
        className="mt-8 text-center text-xs font-mono text-[#444] tracking-widest"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        // Always learning — currently exploring LLM fine-tuning & edge deployments
      </motion.p>
    </div>
  </section>
);

export default SkillsSection;
