import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import SkillBar from "@/components/shared/SkillBar";
import { skills, tagSkills, SkillCategory } from "@/data/skills";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";

interface CategoryConfig {
  key: SkillCategory;
  title: string;
  icon: string;
  color: "primary" | "secondary" | "accent";
  desc: string;
}

const categories: CategoryConfig[] = [
  {
    key: "frontend",
    title: "Frontend",
    icon: "fas fa-layer-group",
    color: "primary",
    desc: "React.js, Next.js, TypeScript & modern UI",
  },
  {
    key: "backend",
    title: "Backend & APIs",
    icon: "fas fa-server",
    color: "secondary",
    desc: "Node.js, NestJS, REST & real-time features",
  },
  {
    key: "database",
    title: "Databases",
    icon: "fas fa-database",
    color: "accent",
    desc: "MongoDB, MySQL, PostgreSQL & Redis",
  },
  {
    key: "devops",
    title: "DevOps & Cloud",
    icon: "fas fa-cloud",
    color: "primary",
    desc: "Docker, AWS, CI/CD & testing",
  },
  {
    key: "ai",
    title: "AI-Augmented Dev",
    icon: "fas fa-robot",
    color: "secondary",
    desc: "Copilot, Cursor, Claude Code & Prompt Eng.",
  },
  {
    key: "tools",
    title: "Dev Tools",
    icon: "fas fa-toolbox",
    color: "accent",
    desc: "Git, Postman, Figma, Vite & Axios",
  },
];

const colorStyles = {
  primary:   {
    icon: "text-[#38BDF8]",
    iconBg: "bg-[#38BDF8]/10",
    border: "border-[#38BDF8]/12 hover:border-[#38BDF8]/30",
    glow: "hover:shadow-[0_4px_30px_rgba(56,189,248,0.08)]",
  },
  secondary: {
    icon: "text-[#F59E0B]",
    iconBg: "bg-[#F59E0B]/10",
    border: "border-[#F59E0B]/12 hover:border-[#F59E0B]/30",
    glow: "hover:shadow-[0_4px_30px_rgba(245,158,11,0.08)]",
  },
  accent:    {
    icon: "text-[#8B5CF6]",
    iconBg: "bg-[#8B5CF6]/10",
    border: "border-[#8B5CF6]/12 hover:border-[#8B5CF6]/30",
    glow: "hover:shadow-[0_4px_30px_rgba(139,92,246,0.08)]",
  },
};

const tagColorStyles = {
  primary:     "bg-[#38BDF8]/8  text-[#38BDF8]  border-[#38BDF8]/15",
  secondary:   "bg-[#F59E0B]/8  text-[#F59E0B]  border-[#F59E0B]/15",
  accent:      "bg-[#8B5CF6]/8  text-[#8B5CF6]  border-[#8B5CF6]/15",
  "yellow-400":"bg-yellow-400/8 text-yellow-400 border-yellow-400/15",
};

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-section-alt relative">
    <div className="container mx-auto px-4 md:px-8">
      <SectionHeading
        title="My Skills"
        badge="Tech Stack"
        subtitle="Technologies and tools I use to architect, build, and ship production-grade applications."
        accentColor="secondary"
      />

      {/* Category grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
      >
        {categories.map((cat, idx) => {
          const s = colorStyles[cat.color];
          const catSkills = skills.filter((sk) => sk.category === cat.key);

          return (
            <motion.div
              key={cat.key}
              className={`bg-[#10181F] rounded-xl border ${s.border} ${s.glow}
                          p-6 transition-all duration-300 group`}
              variants={fadeIn("up", idx * 0.07)}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg ${s.iconBg} flex items-center justify-center
                                 ${s.icon} transition-transform duration-300 group-hover:scale-110`}>
                  <i className={`${cat.icon} text-base`}></i>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">{cat.title}</h3>
                  <p className="text-[#475569] text-xs">{cat.desc}</p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-3.5">
                {catSkills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={cat.color}
                    delay={idx * 0.1 + i * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tech tag cloud */}
      <div className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#475569] mb-5">
          Full Technology Stack
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {tagSkills.map((tag, i) => (
            <motion.span
              key={i}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                          border transition-all duration-200 cursor-default
                          ${tagColorStyles[tag.color as keyof typeof tagColorStyles]}
                          hover:scale-105 hover:shadow-sm`}
              variants={fadeIn("up", i * 0.02)}
              whileHover={{ y: -2 }}
            >
              <i className={tag.icon}></i>
              {tag.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
