import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { fadeIn } from "@/lib/framer-animations";
import useTyped from "@/hooks/use-typed";

const stats = [
  { value: "3+",  label: "Years Experience" },
  { value: "50+", label: "APIs Integrated"  },
  { value: "40+", label: "Endpoints Built"  },
  { value: "3+",  label: "Devs Mentored"   },
];

const socialLinks = [
  { href: "https://github.com/ibrahim08043",                    icon: "fab fa-github",   label: "GitHub"   },
  { href: "https://linkedin.com/in/muhammadibrahim-7b3220367", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "https://x.com/Ibrahim93045",                        icon: "fab fa-twitter",  label: "Twitter"  },
  { href: "https://leetcode.com/u/MuhammadIbrahim792/",        icon: "fas fa-code",     label: "LeetCode" },
];

const HeroSection = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  useTyped(typingRef as any, [
    "Full-Stack Developer",
    "React & Node.js Engineer",
    "API Architect",
    "AI-Augmented Developer",
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dot-grid"
    >
      {/* Subtle vignette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#090909] to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-5 md:px-10 relative z-20 pt-24 pb-16">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
        >
          {/* Status badge */}
          <motion.div variants={fadeIn("up", 0)} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono font-medium
                             bg-[#B5FF4D]/8 text-[#B5FF4D] border border-[#B5FF4D]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="font-mono text-sm text-[#555] tracking-widest uppercase mb-3"
            variants={fadeIn("up", 0.05)}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="font-display font-extrabold text-6xl md:text-8xl text-white leading-none tracking-tight mb-5"
            variants={fadeIn("up", 0.1)}
          >
            Muhammad
            <br />
            <span className="text-gradient-lime">Ibrahim</span>
          </motion.h1>

          {/* Typed role */}
          <motion.div
            className="flex items-center gap-2 mb-8 h-8"
            variants={fadeIn("up", 0.15)}
          >
            <span className="text-[#444] font-mono text-sm">&gt;</span>
            <span
              ref={typingRef}
              className="font-mono text-base md:text-lg text-[#B5FF4D]"
            />
            <span className="w-0.5 h-5 bg-[#B5FF4D] animate-blink" />
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-[#777] text-lg leading-relaxed max-w-2xl mb-10"
            variants={fadeIn("up", 0.2)}
          >
            Full-Stack Developer with <span className="text-[#EFEFEF]">3+ years</span> of production
            experience architecting scalable web applications, integrating complex APIs, and building
            real-time systems. I combine modern frameworks with{" "}
            <span className="text-[#EFEFEF]">AI-powered tools</span> to deliver solutions that
            perform at scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mb-14"
            variants={fadeIn("up", 0.25)}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-display font-bold
                           bg-[#B5FF4D] text-[#090909] hover:bg-[#CAFF6B]
                           transition-all duration-200"
              >
                View My Work
                <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-medium
                           border border-[#2C2C2C] text-[#EFEFEF]
                           hover:border-[#B5FF4D]/40 hover:text-[#B5FF4D]
                           transition-all duration-200"
              >
                Let's Talk
                <i className="fas fa-paper-plane text-xs"></i>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-10 mb-10 border-b border-[#2C2C2C]"
            variants={fadeIn("up", 0.3)}
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="font-display font-extrabold text-3xl text-[#B5FF4D]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#555] mt-1 font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social */}
          <motion.div
            className="flex items-center gap-3"
            variants={fadeIn("up", 0.35)}
          >
            {socialLinks.map((s) => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3 }}
                className="w-9 h-9 rounded border border-[#2C2C2C] flex items-center justify-center
                           text-[#555] hover:text-[#B5FF4D] hover:border-[#B5FF4D]/30
                           transition-all duration-200 text-sm"
              >
                <i className={s.icon}></i>
              </motion.a>
            ))}
            <span className="text-[#333] text-xs font-mono ml-2 hidden sm:block">
              ibrahimkashif792@gmail.com
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-1 text-[#333] hover:text-[#B5FF4D] transition-colors"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll</span>
          <i className="fas fa-chevron-down text-xs"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
