import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import TimelineItem from "@/components/shared/TimelineItem";
import { experiences } from "@/data/experience";
import { fadeIn } from "@/lib/framer-animations";

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full
                    bg-[#F59E0B]/[0.025] blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8">
      <SectionHeading
        title="Work Experience"
        badge="Career"
        subtitle="My professional journey building scalable applications in healthcare, travel, and SaaS domains."
        accentColor="secondary"
      />

      {/* Total experience callout */}
      <motion.div
        className="mb-12 p-5 rounded-xl bg-[#10181F] border border-[#F59E0B]/15
                   flex flex-wrap items-center gap-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {[
          { value: "2+",  label: "Years in Production" },
          { value: "50+", label: "REST APIs Integrated" },
          { value: "40+", label: "API Endpoints Built" },
          { value: "35%", label: "Support Ticket Reduction" },
        ].map((stat, i) => (
          <div key={i} className="flex-1 min-w-[100px] text-center">
            <div
              className="font-heading font-extrabold text-2xl md:text-3xl"
              style={{
                background: "linear-gradient(135deg, #38BDF8 0%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {stat.value}
            </div>
            <div className="text-[#475569] text-xs mt-0.5 font-medium">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
