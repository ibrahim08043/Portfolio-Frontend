import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { experiences } from "@/data/experience";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

const accentMap = {
  primary:   { border: "#B5FF4D", badge: "bg-[#B5FF4D]/10 text-[#B5FF4D] border-[#B5FF4D]/20", dot: "#B5FF4D", chip: "bg-[#B5FF4D]/8 text-[#B5FF4D] border-[#B5FF4D]/15" },
  secondary: { border: "#FF3B6B", badge: "bg-[#FF3B6B]/10 text-[#FF3B6B] border-[#FF3B6B]/20", dot: "#FF3B6B", chip: "bg-[#FF3B6B]/8 text-[#FF3B6B] border-[#FF3B6B]/15" },
  accent:    { border: "#7C3AED", badge: "bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20", dot: "#7C3AED", chip: "bg-[#7C3AED]/8 text-[#7C3AED] border-[#7C3AED]/15" },
};

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full
                    bg-[#FF3B6B]/[0.02] blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-5 md:px-10">
      <SectionHeading
        title="Work Experience"
        badge="Career"
        sectionNumber="04"
        subtitle="My professional journey building scalable applications across SaaS, healthcare, and travel domains."
        accentColor="secondary"
      />

      {/* Stats bar */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-0 mb-14 border border-[#2C2C2C] rounded overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {[
          { value: "3+",   label: "Years in Production"    },
          { value: "50+",  label: "REST APIs Integrated"   },
          { value: "40+",  label: "API Endpoints Built"    },
          { value: "35%",  label: "Support Ticket Reduction"},
        ].map((stat, i) => (
          <div
            key={i}
            className={`py-6 px-4 text-center bg-[#111] ${i < 3 ? "border-r border-[#2C2C2C]" : ""} sm:block ${i >= 2 ? "border-t sm:border-t-0 border-[#2C2C2C]" : ""}`}
          >
            <div className="font-display font-extrabold text-2xl text-[#B5FF4D]">{stat.value}</div>
            <div className="text-[10px] font-mono text-[#555] mt-1 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Experience cards */}
      <motion.div
        className="space-y-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
      >
        {experiences.map((exp, idx) => {
          const c = accentMap[exp.color];
          return (
            <motion.div
              key={idx}
              variants={fadeIn("up", idx * 0.1)}
              className="rounded border border-[#2C2C2C] bg-[#111] overflow-hidden hover-glow-lime transition-all duration-300 group"
              style={{ borderLeftColor: c.border, borderLeftWidth: "3px" }}
            >
              <div className="p-6 md:p-7">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">{exp.role}</h3>
                    <p className="text-[#777] text-sm mt-1">
                      {exp.company}
                      <span className="mx-2 text-[#333]">·</span>
                      {exp.location}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded text-xs font-mono font-medium border ${c.badge} whitespace-nowrap flex items-center gap-1.5`}>
                    {exp.period}
                    {exp.current && (
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: c.border }} />
                    )}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#777] text-sm leading-relaxed mb-4">{exp.description}</p>

                {/* Bullets */}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-sm text-[#888]">
                        <span
                          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: c.border }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1F1F1F]">
                  {exp.skills.map((skill, si) => (
                    <span
                      key={si}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-medium border ${c.chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
