import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

const ProjectsSection = () => {
  // First 3 are the CV/enterprise projects, next 2 are personal
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-section-alt relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full
                      bg-[#8B5CF6]/[0.03] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Featured Projects"
          badge="Portfolio"
          subtitle="A selection of enterprise and personal projects showcasing full-stack architecture, API integration, and real-world problem solving."
          accentColor="accent"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
        >
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.2)}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                         border border-[#8B5CF6]/30 text-[#8B5CF6]
                         hover:bg-[#8B5CF6]/8 hover:border-[#8B5CF6]/50
                         transition-all duration-300"
            >
              View All {projects.length} Projects
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
