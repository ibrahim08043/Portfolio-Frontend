import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: "primary" | "secondary" | "accent";
  delay?: number;
}

const gradientMap = {
  primary:   "from-[#38BDF8] to-[#7DD3FC]",
  secondary: "from-[#F59E0B] to-[#FCD34D]",
  accent:    "from-[#8B5CF6] to-[#A78BFA]",
};

const textMap = {
  primary:   "text-[#38BDF8]",
  secondary: "text-[#F59E0B]",
  accent:    "text-[#8B5CF6]",
};

const SkillBar = ({ name, percentage, color, delay = 0 }: SkillBarProps) => (
  <div className="group">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium text-[#E2E8F0] group-hover:text-white transition-colors">
        {name}
      </span>
      <span className={`text-xs font-mono font-semibold ${textMap[color]}`}>
        {percentage}%
      </span>
    </div>
    <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${gradientMap[color]}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default SkillBar;
