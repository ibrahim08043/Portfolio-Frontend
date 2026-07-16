import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";

const values = [
  {
    icon: "fas fa-layer-group",
    title: "Scalable Systems",
    description: "Designing modular, maintainable architectures built to grow — from API schema to component hierarchy.",
    color: "#B5FF4D",
  },
  {
    icon: "fas fa-robot",
    title: "AI Integration",
    description: "Embedding AI capabilities into products using modern tools, and leveraging AI in daily development to ship faster.",
    color: "#FF3B6B",
  },
  {
    icon: "fas fa-users",
    title: "Team Leadership",
    description: "Mentoring junior developers, conducting code reviews, and enforcing engineering standards across Agile teams.",
    color: "#7C3AED",
  },
  {
    icon: "fas fa-rocket",
    title: "Shipping Fast",
    description: "Proven track record of eliminating tech debt, reducing support overhead, and delivering production features on time.",
    color: "#B5FF4D",
  },
];

const quickInfo = [
  { label: "Location",     value: "Karachi, Pakistan",           icon: "fas fa-map-marker-alt" },
  { label: "Email",        value: "ibrahimkashif792@gmail.com",  icon: "fas fa-envelope"       },
  { label: "Status",       value: "Open to opportunities",       icon: "fas fa-circle-check"   },
  { label: "Experience",   value: "3+ Years (Production)",       icon: "fas fa-briefcase"      },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                    bg-[#B5FF4D]/[0.02] blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-5 md:px-10">
      <SectionHeading
        title="About Me"
        badge="Who I Am"
        sectionNumber="01"
        subtitle="Full-Stack Developer building production-grade web applications with modern technologies and AI capabilities."
        accentColor="primary"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start mb-16">

        {/* Bio */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-[#EFEFEF] text-lg leading-relaxed mb-5"
            variants={fadeIn("right", 0)}
          >
            I'm a <span className="text-[#B5FF4D] font-semibold">Full-Stack Developer</span> with{" "}
            <span className="text-[#B5FF4D] font-semibold">3+ years</span> of hands-on production
            experience building web applications that scale. I specialize in designing robust backend
            architectures, engineering high-performance APIs, and crafting responsive frontends.
          </motion.p>
          <motion.p
            className="text-[#777] text-base leading-relaxed mb-5"
            variants={fadeIn("right", 0.08)}
          >
            Beyond the stack, I actively integrate AI capabilities into my products and use AI-powered
            development tools daily to accelerate debugging, code reviews, and feature delivery. I stay
            at the forefront of modern development practices so I can bring the best solutions to every
            project.
          </motion.p>
          <motion.p
            className="text-[#777] text-base leading-relaxed"
            variants={fadeIn("right", 0.15)}
          >
            I thrive in fast-paced environments, contribute to team growth through mentorship, and
            consistently ship software that solves real problems at scale.
          </motion.p>
        </motion.div>

        {/* Quick info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-3"
        >
          {quickInfo.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn("left", i * 0.07)}
              className="flex items-center gap-4 p-4 rounded border border-[#2C2C2C] bg-[#111] hover-glow-lime transition-all duration-300"
            >
              <div className="w-8 h-8 rounded bg-[#B5FF4D]/10 flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-[#B5FF4D] text-xs`}></i>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#555] uppercase tracking-widest">{item.label}</p>
                <p className="text-[#EFEFEF] text-sm font-medium mt-0.5">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Value cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {values.map((v, i) => (
          <motion.div
            key={i}
            variants={fadeIn("up", i * 0.07)}
            className="p-5 rounded border border-[#2C2C2C] bg-[#111] group hover:border-[#B5FF4D]/20 transition-all duration-300"
            style={{ borderLeftColor: v.color, borderLeftWidth: "3px" }}
          >
            <div
              className="w-9 h-9 rounded flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${v.color}15` }}
            >
              <i className={`${v.icon} text-sm`} style={{ color: v.color }}></i>
            </div>
            <h3 className="font-display font-bold text-sm text-white mb-2">{v.title}</h3>
            <p className="text-[#666] text-xs leading-relaxed">{v.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
