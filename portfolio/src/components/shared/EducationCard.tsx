import { motion } from "framer-motion";
import { Education } from "@/data/education";
import { fadeIn } from "@/lib/framer-animations";

interface EducationCardProps {
  education: Education;
  index: number;
}

const accentMap = {
  primary:   { border: "#B5FF4D", icon: "#B5FF4D", bg: "#B5FF4D14", period: "#B5FF4D", chip: "bg-[#B5FF4D]/8 text-[#B5FF4D] border-[#B5FF4D]/20" },
  secondary: { border: "#FF3B6B", icon: "#FF3B6B", bg: "#FF3B6B14", period: "#FF3B6B", chip: "bg-[#FF3B6B]/8 text-[#FF3B6B] border-[#FF3B6B]/20" },
  accent:    { border: "#7C3AED", icon: "#7C3AED", bg: "#7C3AED14", period: "#7C3AED", chip: "bg-[#7C3AED]/8 text-[#7C3AED] border-[#7C3AED]/20" },
};

const EducationCard = ({ education, index }: EducationCardProps) => {
  const c = accentMap[education.color];

  return (
    <motion.div
      className="bg-[#111] rounded border border-[#2C2C2C] p-6 h-full flex flex-col transition-all duration-300 hover:border-[#2C2C2C]"
      style={{ borderTopColor: c.border, borderTopWidth: "2px" }}
      variants={fadeIn("up", index * 0.1)}
      whileHover={{ y: -4 }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded flex items-center justify-center mb-5"
        style={{ background: c.bg }}
      >
        <i className={`${education.icon} text-base`} style={{ color: c.icon }}></i>
      </div>

      {/* Institution */}
      <h3 className="font-display font-bold text-base text-white mb-1">
        {education.institution}
      </h3>

      {/* Degree */}
      <p className="text-[#EFEFEF] text-sm mb-1">{education.degree}</p>

      {/* Period */}
      <p className="text-xs font-mono mb-4" style={{ color: c.period }}>
        {education.period}
      </p>

      {/* Description */}
      <p className="text-[#666] text-sm leading-relaxed flex-grow mb-5">
        {education.description}
      </p>

      {/* Highlights */}
      <div className="border-t border-[#1F1F1F] pt-4">
        <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: c.icon }}>
          {education.highlightsTitle}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {education.highlights.map((h, i) => (
            <span key={i} className={`px-2 py-0.5 rounded text-[11px] font-medium border ${c.chip}`}>
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
