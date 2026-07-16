import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import bgImg from "../../../../attached_assets/bgImg.jpg";

const values = [
  {
    icon: "fas fa-cubes",
    title: "Scalable Architecture",
    description: "Building modular, maintainable systems designed to grow — from schema design to component architecture.",
    color: "primary" as const,
  },
  {
    icon: "fas fa-robot",
    title: "AI-Augmented Dev",
    description: "Leveraging Copilot, Cursor, and Claude Code to accelerate debugging, code review, and refactoring cycles.",
    color: "secondary" as const,
  },
  {
    icon: "fas fa-users",
    title: "Team Leadership",
    description: "Mentoring junior developers, conducting code reviews, and enforcing TypeScript conventions in Agile sprints.",
    color: "accent" as const,
  },
  {
    icon: "fas fa-rocket",
    title: "Shipping Fast",
    description: "Proven track record of reducing support tickets, eliminating tech debt, and delivering production features on time.",
    color: "primary" as const,
  },
];

const colorMap = {
  primary:   { icon: "text-[#38BDF8]", bg: "bg-[#38BDF8]/8", border: "border-[#38BDF8]/15 hover:border-[#38BDF8]/35" },
  secondary: { icon: "text-[#F59E0B]", bg: "bg-[#F59E0B]/8", border: "border-[#F59E0B]/15 hover:border-[#F59E0B]/35" },
  accent:    { icon: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/8", border: "border-[#8B5CF6]/15 hover:border-[#8B5CF6]/35" },
};

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full
                    bg-[#38BDF8]/[0.025] blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8">
      <SectionHeading
        title="About Me"
        badge="Who I Am"
        subtitle="Full-Stack Developer with 2+ years of production experience building scalable applications for healthcare and travel industries."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn("right")}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative border frame */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#38BDF8]/20 via-[#F59E0B]/10 to-transparent opacity-60 blur-sm" />

            <div className="relative rounded-xl overflow-hidden border border-white/[0.08]">
              <img
                src={bgImg}
                alt="Muhammad Ibrahim — Full-Stack Developer"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B0F]/80 via-transparent to-transparent" />
            </div>

            {/* Code snippet card */}
            <motion.div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#0C1018]/95 backdrop-blur-xl
                         border border-white/[0.08] rounded-xl p-4 shadow-2xl max-w-[220px]"
              initial={{ opacity: 0, y: 20, x: 10 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="font-mono text-xs leading-relaxed">
                <span className="text-[#8B5CF6]">const</span>{" "}
                <span className="text-[#38BDF8]">dev</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-white">{"{"}</span>
                <br />
                <span className="pl-3 text-[#94A3B8]">
                  name: <span className="text-[#F59E0B]">"Muhammad"</span>,
                </span>
                <br />
                <span className="pl-3 text-[#94A3B8]">
                  stack: <span className="text-[#F59E0B]">"MERN"</span>,
                </span>
                <br />
                <span className="pl-3 text-[#94A3B8]">
                  city: <span className="text-[#F59E0B]">"Karachi"</span>
                </span>
                <br />
                <span className="text-white">{"}"}</span>
                <span className="text-[#94A3B8]">;</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Content column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h3
            className="font-heading font-bold text-2xl text-white mb-4"
            variants={fadeIn("up", 0.05)}
          >
            Building production-grade apps that{" "}
            <span className="text-[#38BDF8]">scale</span>
          </motion.h3>

          <motion.p
            className="text-[#94A3B8] leading-relaxed mb-4"
            variants={fadeIn("up", 0.1)}
          >
            I'm a Full-Stack Developer specializing in the React/Next.js and Node.js ecosystem, with a
            proven track record integrating <strong className="text-[#E2E8F0]">50+ REST APIs</strong> with
            JWT-based authentication, optimizing backend performance, and shipping real-time features
            with <strong className="text-[#E2E8F0]">WebSockets and Firebase</strong>.
          </motion.p>

          <motion.p
            className="text-[#94A3B8] leading-relaxed mb-8"
            variants={fadeIn("up", 0.15)}
          >
            My work spans healthcare platforms (TGI Health Dashboard) and luxury travel applications
            (Red Carpet Journey), supporting <strong className="text-[#E2E8F0]">50–200 concurrent users</strong>.
            I regularly leverage AI-powered tools — GitHub Copilot, Cursor, Claude Code — to accelerate
            debugging and refactoring while mentoring junior developers in Agile sprints.
          </motion.p>

          {/* Quick info */}
          <motion.div
            className="grid grid-cols-2 gap-3 mb-8"
            variants={fadeIn("up", 0.2)}
          >
            {[
              { label: "Location",   value: "Karachi, Pakistan",     icon: "fas fa-map-marker-alt" },
              { label: "Experience", value: "2+ Years Production",   icon: "fas fa-briefcase" },
              { label: "Email",      value: "ibrahimkashif792@gmail.com", icon: "fas fa-envelope" },
              { label: "Focus",      value: "MERN · AI-Augmented",   icon: "fas fa-code" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <i className={`${item.icon} text-[#38BDF8] text-sm mt-0.5 w-4`}></i>
                <div>
                  <p className="text-[10px] text-[#475569] uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="text-[#E2E8F0] text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Value cards */}
          <motion.h4
            className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4"
            variants={fadeIn("up", 0.25)}
          >
            What drives me
          </motion.h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((item, i) => {
              const c = colorMap[item.color];
              return (
                <motion.div
                  key={i}
                  className={`${c.bg} rounded-xl border ${c.border} p-4 transition-all duration-300 group cursor-default`}
                  variants={fadeIn("up", 0.3 + i * 0.05)}
                  whileHover={{ y: -3 }}
                >
                  <i className={`${item.icon} ${c.icon} mb-2 text-base`}></i>
                  <h5 className="font-heading font-semibold text-white text-sm mb-1">{item.title}</h5>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
