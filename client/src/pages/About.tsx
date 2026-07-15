import { motion } from "framer-motion";
import AboutSection from "@/components/home/AboutSection";
import { pageVariants } from "@/lib/framer-animations";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Helmet>
        <title>About - Muhammad Ibrahim | MERN Stack Developer</title>
        <meta name="description" content="Learn more about Muhammad Ibrahim, a MERN Stack Front-End Developer with expertise in React.js, Next.js and modern web technologies." />
      </Helmet>
      
      <main className="pt-20">
        <AboutSection />
      </main>
    </motion.div>
  );
};

export default About;
