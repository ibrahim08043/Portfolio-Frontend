import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { Link } from "wouter";
import { projects } from "@/data/projects";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full
                      bg-[#7C3AED]/[0.025] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-10">
        <SectionHeading
          title="Featured Projects"
          badge="Portfolio"
          sectionNumber="03"
          subtitle="A selection of enterprise and personal projects showcasing full-stack architecture, API integration, and production problem-solving."
          accentColor="accent"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
        >
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.2)}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-mono font-medium
                       border border-[#2C2C2C] text-[#777]
                       hover:border-[#7C3AED]/50 hover:text-[#7C3AED]
                       transition-all duration-200"
          >
            View All {projects.length} Projects
            <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
