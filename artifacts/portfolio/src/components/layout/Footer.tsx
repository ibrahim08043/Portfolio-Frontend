import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const social = [
    { icon: "fab fa-github",   href: "https://github.com/ibrahim08043",                     label: "GitHub"    },
    { icon: "fab fa-linkedin", href: "https://linkedin.com/in/muhammadibrahim-7b3220367",   label: "LinkedIn"  },
    { icon: "fab fa-twitter",  href: "https://x.com/Ibrahim93045",                         label: "Twitter/X" },
  ];

  return (
    <footer className="border-t border-[#2C2C2C] bg-[#090909]">
      <div className="container mx-auto px-5 md:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] font-bold text-[#B5FF4D] bg-[#B5FF4D]/10 border border-[#B5FF4D]/25 px-2 py-1 rounded">
              MI
            </span>
            <span className="text-sm text-[#555] font-mono">
              © {year} Muhammad Ibrahim
            </span>
          </div>

          {/* Social + Back to top */}
          <div className="flex items-center gap-3">
            {social.map((s) => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -2 }}
                className="w-8 h-8 rounded border border-[#2C2C2C] flex items-center justify-center
                           text-[#555] hover:text-[#B5FF4D] hover:border-[#B5FF4D]/30
                           transition-all duration-200 text-xs"
              >
                <i className={s.icon}></i>
              </motion.a>
            ))}
            <div className="w-px h-4 bg-[#2C2C2C] mx-1" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="w-8 h-8 rounded border border-[#2C2C2C] flex items-center justify-center
                         text-[#555] hover:text-[#B5FF4D] hover:border-[#B5FF4D]/30
                         transition-all duration-200 text-xs"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
