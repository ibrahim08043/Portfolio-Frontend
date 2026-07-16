import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import useTilt from "@/hooks/use-tilt";
import { fadeIn } from "@/lib/framer-animations";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "default" | "featured";
}

const colorMap = {
  primary:   {
    text: "text-[#38BDF8]",
    border: "border-[#38BDF8]/15 hover:border-[#38BDF8]/35",
    badge: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20",
    glow: "hover:shadow-[0_8px_40px_rgba(56,189,248,0.1)]",
    gradient: "from-[#38BDF8]/20 via-[#38BDF8]/5 to-transparent",
    dot: "bg-[#38BDF8]",
  },
  secondary: {
    text: "text-[#F59E0B]",
    border: "border-[#F59E0B]/15 hover:border-[#F59E0B]/35",
    badge: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
    glow: "hover:shadow-[0_8px_40px_rgba(245,158,11,0.1)]",
    gradient: "from-[#F59E0B]/20 via-[#F59E0B]/5 to-transparent",
    dot: "bg-[#F59E0B]",
  },
  accent: {
    text: "text-[#8B5CF6]",
    border: "border-[#8B5CF6]/15 hover:border-[#8B5CF6]/35",
    badge: "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20",
    glow: "hover:shadow-[0_8px_40px_rgba(139,92,246,0.1)]",
    gradient: "from-[#8B5CF6]/20 via-[#8B5CF6]/5 to-transparent",
    dot: "bg-[#8B5CF6]",
  },
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  useTilt(tiltRef);
  const c = colorMap[project.color as keyof typeof colorMap];

  return (
    <motion.div
      ref={tiltRef}
      className={`group relative bg-[#10181F] rounded-xl border ${c.border} ${c.glow}
                  overflow-hidden h-full flex flex-col transition-all duration-300`}
      variants={fadeIn("up", index * 0.08)}
    >
      {/* Top gradient shimmer on hover */}
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${c.gradient}`} />

      {/* Image / Gradient Hero */}
      {project.image ? (
        <div className="h-44 overflow-hidden relative flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10181F] via-transparent to-transparent opacity-60" />
          {project.featured && (
            <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest
                              px-2.5 py-1 rounded-full border ${c.badge}`}>
              Featured
            </span>
          )}
        </div>
      ) : (
        <div className={`h-32 flex-shrink-0 relative overflow-hidden bg-gradient-to-br ${c.gradient} border-b border-white/[0.05]`}>
          {/* Geometric pattern placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-16 h-16 rounded-xl border-2 border-current rotate-12 opacity-50" style={{ borderColor: "currentColor" }} />
            <div className="absolute w-10 h-10 rounded-lg border-2 border-current -rotate-6" style={{ borderColor: "currentColor" }} />
          </div>
          {project.featured && (
            <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest
                              px-2.5 py-1 rounded-full border ${c.badge}`}>
              Featured
            </span>
          )}
          {project.period && (
            <span className="absolute bottom-3 right-3 text-[10px] text-[#94A3B8] font-mono">
              {project.period}
            </span>
          )}
        </div>
      )}

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <h3 className={`font-heading font-bold text-lg text-white group-hover:${c.text.replace("text-", "text-")} transition-colors`}>
            {project.title}
          </h3>
          {project.subtitle && (
            <p className={`text-xs font-medium mt-0.5 ${c.text} opacity-80`}>
              {project.subtitle}
            </p>
          )}
        </div>

        <p className="text-[#94A3B8] text-sm leading-relaxed flex-grow mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${c.dot}`}></span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${c.badge}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
          {project.liveDemo && project.liveDemo !== "https://github.com/ibrahim08043" && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-medium ${c.text} hover:opacity-80 transition-opacity`}
              whileHover={{ x: 2 }}
            >
              <ExternalLink size={13} />
              Live Demo
            </motion.a>
          )}
          <motion.a
            href="https://github.com/ibrahim08043"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors ml-auto"
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
