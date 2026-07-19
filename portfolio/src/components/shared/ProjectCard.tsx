import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { fadeIn } from "@/lib/framer-animations";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "default" | "featured";
}

const colorMap = {
  primary:   { border: "#B5FF4D", badge: "bg-[#B5FF4D]/10 text-[#B5FF4D] border-[#B5FF4D]/20", chip: "bg-[#B5FF4D]/8 text-[#B5FF4D] border-[#B5FF4D]/15", dot: "#B5FF4D", stripe: "from-[#B5FF4D]/20 to-transparent" },
  secondary: { border: "#FF3B6B", badge: "bg-[#FF3B6B]/10 text-[#FF3B6B] border-[#FF3B6B]/20", chip: "bg-[#FF3B6B]/8 text-[#FF3B6B] border-[#FF3B6B]/15", dot: "#FF3B6B", stripe: "from-[#FF3B6B]/20 to-transparent" },
  accent:    { border: "#7C3AED", badge: "bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20", chip: "bg-[#7C3AED]/8 text-[#7C3AED] border-[#7C3AED]/15", dot: "#7C3AED", stripe: "from-[#7C3AED]/20 to-transparent" },
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const c = colorMap[project.color as keyof typeof colorMap] ?? colorMap.primary;

  return (
    <motion.div
      className="group relative bg-[#111] rounded border border-[#2C2C2C] overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-[#2C2C2C]"
      style={{ borderTopColor: c.border, borderTopWidth: "2px" }}
      variants={fadeIn("up", index * 0.08)}
      whileHover={{ y: -4 }}
    >
      {/* Image / Gradient hero */}
      {project.image ? (
        <div className="h-40 overflow-hidden relative flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-70" />
          {project.featured && (
            <span className={`absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${c.badge}`}>
              Featured
            </span>
          )}
        </div>
      ) : (
        <div className={`h-24 flex-shrink-0 relative overflow-hidden bg-gradient-to-br ${c.stripe} border-b border-[#1F1F1F]`}>
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <div className="w-12 h-12 rounded border-2 rotate-12" style={{ borderColor: c.border }} />
            <div className="absolute w-8 h-8 rounded border-2 -rotate-6" style={{ borderColor: c.border }} />
          </div>
          {project.featured && (
            <span className={`absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${c.badge}`}>
              Featured
            </span>
          )}
          {project.period && (
            <span className="absolute bottom-3 right-3 text-[10px] text-[#555] font-mono">
              {project.period}
            </span>
          )}
        </div>
      )}

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className="font-display font-bold text-base text-white group-hover:text-[#EFEFEF] transition-colors">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs font-mono mt-0.5" style={{ color: c.border, opacity: 0.8 }}>
              {project.subtitle}
            </p>
          )}
        </div>

        <p className="text-[#666] text-sm leading-relaxed flex-grow mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#666]">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: c.border }} />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, ti) => (
            <span key={ti} className={`px-2 py-0.5 rounded text-[11px] font-medium border ${c.chip}`}>
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-[#1F1F1F]">
          {project.liveDemo && project.liveDemo !== "https://github.com/ibrahim08043" && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: c.border }}
              whileHover={{ x: 2 }}
            >
              <ExternalLink size={11} />
              Live Demo
            </motion.a>
          )}
          <motion.a
            href="https://github.com/ibrahim08043"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[#555] hover:text-[#EFEFEF] transition-colors ml-auto"
            whileHover={{ x: 2 }}
          >
            <i className="fab fa-github text-sm"></i>
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
