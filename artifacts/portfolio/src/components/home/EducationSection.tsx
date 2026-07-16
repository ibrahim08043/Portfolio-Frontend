import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import EducationCard from "@/components/shared/EducationCard";
import { education, certifications } from "@/data/education";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

const certColors = ["#B5FF4D", "#FF3B6B", "#7C3AED", "#B5FF4D"];

const EducationSection = () => (
  <section id="education" className="py-24 bg-section-alt relative">
    <div className="container mx-auto px-5 md:px-10">
      <SectionHeading
        title="Education"
        badge="Background"
        sectionNumber="05"
        subtitle="My academic foundation and professional training."
        accentColor="primary"
      />

      {/* Degree cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn("up")}
      >
        <p className="section-label text-[#B5FF4D] mb-6">Certifications & Training</p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
        >
          {certifications.map((cert, index) => {
            const color = certColors[index % certColors.length];
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.07)}
                className="flex items-center gap-3 p-4 rounded border border-[#2C2C2C] bg-[#111] hover:border-[#2C2C2C] transition-all duration-200"
                style={{ borderLeftColor: color, borderLeftWidth: "3px" }}
                whileHover={{ y: -2 }}
              >
                <i className="fas fa-certificate text-sm flex-shrink-0" style={{ color }} />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white leading-tight">{cert.title}</h4>
                  <p className="text-xs font-mono mt-0.5" style={{ color, opacity: 0.7 }}>{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
