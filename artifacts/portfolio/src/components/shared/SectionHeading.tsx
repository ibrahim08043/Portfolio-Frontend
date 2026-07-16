import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  accentColor?: "primary" | "secondary" | "accent";
  lightBackground?: boolean;
  sectionNumber?: string;
}

const accentColors = {
  primary:   "#B5FF4D",
  secondary: "#FF3B6B",
  accent:    "#7C3AED",
};

const SectionHeading = ({
  title,
  subtitle,
  badge,
  align = "center",
  accentColor = "primary",
  sectionNumber,
}: SectionHeadingProps) => {
  const color = accentColors[accentColor];
  const isCenter = align === "center";

  return (
    <motion.div
      className={`mb-14 ${isCenter ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* Section label */}
      {(sectionNumber || badge) && (
        <motion.p
          className={`section-label mb-4 ${isCenter ? "" : ""}`}
          style={{ color }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {sectionNumber ? `${sectionNumber} — ` : ""}{badge}
        </motion.p>
      )}

      {/* Title */}
      <motion.h2
        className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15 }}
      >
        {title}
        <span style={{ color }}>.</span>
      </motion.h2>

      {/* Rule */}
      <motion.div
        className={`mt-5 h-px ${isCenter ? "mx-auto" : ""}`}
        style={{ maxWidth: isCenter ? "72px" : "56px", background: `linear-gradient(90deg, ${color}, transparent)` }}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className={`mt-5 text-[#777] text-base leading-relaxed ${isCenter ? "mx-auto max-w-xl" : "max-w-xl"}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.35 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
