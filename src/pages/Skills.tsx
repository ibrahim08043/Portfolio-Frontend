import { motion } from "framer-motion";
import SkillsSection from "@/components/home/SkillsSection";
import { pageVariants } from "@/lib/framer-animations";
import { Helmet } from "react-helmet";

const Skills = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Helmet>
        <title>Skills - Muhammad Ibrahim | Full-Stack Developer</title>
        <meta name="description" content="Explore the technical skills of Muhammad Ibrahim, including React.js, Next.js, Node.js, Express.js, and more full-stack technologies." />
      </Helmet>
      
      <main className="pt-20">
        <SkillsSection />
      </main>
    </motion.div>
  );
};

export default Skills;
