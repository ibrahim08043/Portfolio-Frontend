import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ParticlesBg from "@/components/shared/ParticlesBg";
import { fadeIn } from "@/lib/framer-animations";
import useTyped from "@/hooks/use-typed";

const stats = [
  { value: "2+",  label: "Years Experience" },
  { value: "50+", label: "APIs Integrated" },
  { value: "40+", label: "REST Endpoints Built" },
  { value: "3+",  label: "Junior Devs Mentored" },
];

const socialLinks = [
  { href: "https://github.com/ibrahim08043",                        icon: "fab fa-github",   label: "GitHub" },
  { href: "https://linkedin.com/in/muhammadibrahim-7b3220367",     icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "https://x.com/Ibrahim93045",                            icon: "fab fa-twitter",  label: "Twitter" },
  { href: "https://leetcode.com/u/MuhammadIbrahim792/",            icon: "fas fa-code",     label: "LeetCode" },
];

const HeroSection = () => {
  const typingRef = useRef<HTMLDivElement>(null);
  useTyped(typingRef, [
    "Full-Stack Developer (MERN)",
    "React.js & Next.js Engineer",
    "Node.js & NestJS Developer",
    "AI-Augmented Engineer",
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <ParticlesBg />

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full
                        bg-[#38BDF8]/[0.04] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full
                        bg-[#F59E0B]/[0.03] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          {/* Status badge */}
          <motion.div variants={fadeIn("up", 0.05)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
                             bg-[#38BDF8]/8 text-[#38BDF8] border border-[#38BDF8]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-[#94A3B8] text-lg font-medium mb-2"
            variants={fadeIn("up", 0.1)}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="font-heading font-extrabold text-5xl md:text-7xl text-white leading-tight mb-4"
            variants={fadeIn("up", 0.18)}
          >
            Muhammad{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #38BDF8 0%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Ibrahim
            </span>
          </motion.h1>

          {/* Typed role */}
          <motion.div
            className="text-xl md:text-2xl font-mono text-[#E2E8F0] mb-6 h-8"
            variants={fadeIn("up", 0.25)}
            ref={typingRef}
          />

          {/* Bio from CV */}
          <motion.p
            className="text-[#94A3B8] text-lg leading-relaxed max-w-2xl mb-10"
            variants={fadeIn("up", 0.32)}
          >
            Full-Stack Developer with <span className="text-[#E2E8F0] font-medium">2+ years</span> of
            production experience in React/Next.js and Node.js — architecting scalable web applications
            for <span className="text-[#E2E8F0] font-medium">healthcare and travel platforms</span>,
            integrating 50+ REST APIs, and shipping real-time features with WebSockets.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-wrap gap-4 mb-12" variants={fadeIn("up", 0.38)}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                           bg-[#38BDF8] text-[#070B0F] hover:bg-[#7DD3FC]
                           shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]
                           transition-all duration-300"
              >
                View Projects
                <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                           border border-[#38BDF8]/30 text-[#38BDF8]
                           hover:bg-[#38BDF8]/8 hover:border-[#38BDF8]/50
                           transition-all duration-300"
              >
                Contact Me
                <i className="fas fa-paper-plane text-xs"></i>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 pb-12 border-b border-white/[0.06]"
            variants={fadeIn("up", 0.44)}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="font-heading font-extrabold text-3xl md:text-4xl"
                  style={{
                    background: "linear-gradient(135deg, #38BDF8 0%, #F59E0B 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[#94A3B8] mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div className="flex items-center gap-3" variants={fadeIn("up", 0.5)}>
            {socialLinks.map((s) => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center
                           bg-white/5 border border-white/[0.06] text-[#94A3B8]
                           hover:text-[#38BDF8] hover:bg-[#38BDF8]/8 hover:border-[#38BDF8]/20
                           transition-all duration-200"
              >
                <i className={`${s.icon} text-sm`}></i>
              </motion.a>
            ))}
            <span className="text-[#475569] text-xs ml-2 font-mono">
              ibrahimkashif792@gmail.com
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-1 text-[#475569] hover:text-[#38BDF8] transition-colors"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <i className="fas fa-chevron-down text-sm"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
