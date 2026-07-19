import { motion } from "framer-motion";
import { Experience } from "@/data/experience";
import { fadeIn } from "@/lib/framer-animations";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast?: boolean;
}

const dotColors = {
  primary:   { dot: "bg-[#38BDF8]", ring: "rgba(56,189,248,0.2)",  badge: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20", line: "from-[#38BDF8]/60" },
  secondary: { dot: "bg-[#F59E0B]", ring: "rgba(245,158,11,0.2)",  badge: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20", line: "from-[#F59E0B]/60" },
  accent:    { dot: "bg-[#8B5CF6]", ring: "rgba(139,92,246,0.2)",  badge: "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20", line: "from-[#8B5CF6]/60" },
};

const TimelineItem = ({ experience, index, isLast }: TimelineItemProps) => {
  const c = dotColors[experience.color];

  return (
    <motion.div
      className="flex gap-5 md:gap-8"
      variants={fadeIn("up", index * 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left column: dot + line */}
      <div className="flex flex-col items-center flex-shrink-0 mt-1">
        <motion.div
          className={`w-3.5 h-3.5 rounded-full ${c.dot} border-2 border-[#070B0F] flex-shrink-0`}
          style={{ boxShadow: `0 0 0 4px ${c.ring}` }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
        />
        {!isLast && (
          <div
            className={`w-px flex-1 mt-3 bg-gradient-to-b ${c.line} to-transparent min-h-[40px]`}
          />
        )}
      </div>

      {/* Right column: content */}
      <div className="pb-10 flex-1">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              {experience.role}
            </h3>
            <p className="text-[#94A3B8] text-sm mt-0.5">
              {experience.company}
              <span className="mx-2 opacity-40">·</span>
              {experience.location}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${c.badge} whitespace-nowrap`}>
            {experience.period}
            {experience.current && (
              <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-current inline-block animate-pulse-ring align-middle" />
            )}
          </span>
        </div>

        {/* Summary */}
        <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Bullet highlights */}
        {experience.bullets && experience.bullets.length > 0 && (
          <ul className="space-y-2 mb-4">
            {experience.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${c.dot}`}></span>
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${c.badge}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
