import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  accentColor?: "primary" | "secondary" | "accent";
  lightBackground?: boolean;
}

const colorMap = {
  primary:   { text: "text-[#38BDF8]",  bg: "bg-[#38BDF8]/10",  border: "border-[#38BDF8]/20" },
  secondary: { text: "text-[#F59E0B]",  bg: "bg-[#F59E0B]/10",  border: "border-[#F59E0B]/20" },
  accent:    { text: "text-[#8B5CF6]",  bg: "bg-[#8B5CF6]/10",  border: "border-[#8B5CF6]/20" },
};

const SectionHeading = ({
  title,
  subtitle,
  badge,
  align = "center",
  accentColor = "primary",
  lightBackground,
}: SectionHeadingProps) => {
  const c = colorMap[accentColor];
  const isCenter = align === "center";

  return (
    <motion.div
      className={`mb-14 ${isCenter ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
                      ${c.bg} ${c.text} border ${c.border} mb-4`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${c.bg.replace("/10", "")} ${c.text}`}
                style={{ background: "currentColor", opacity: 0.8 }}></span>
          {badge}
        </motion.div>
      )}

      <motion.h2
        className="font-heading font-bold text-3xl md:text-4xl text-white"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {title}
        <span className={`${c.text}`}>.</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`mt-4 text-[#94A3B8] max-w-2xl leading-relaxed ${isCenter ? "mx-auto" : ""}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Divider line */}
      <motion.div
        className={`mt-6 h-px ${isCenter ? "mx-auto" : ""}`}
        style={{ maxWidth: isCenter ? "80px" : "60px" }}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className={`h-full w-full bg-gradient-to-r from-transparent via-[#38BDF8]/60 to-transparent
                         ${accentColor === "secondary" ? "via-[#F59E0B]/60" : accentColor === "accent" ? "via-[#8B5CF6]/60" : ""}`}
          style={{
            background: accentColor === "primary"
              ? "linear-gradient(90deg, transparent, rgba(56,189,248,0.6), transparent)"
              : accentColor === "secondary"
              ? "linear-gradient(90deg, transparent, rgba(245,158,11,0.6), transparent)"
              : "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)"
          }}
        ></div>
      </motion.div>
    </motion.div>
  );
};

export default SectionHeading;
