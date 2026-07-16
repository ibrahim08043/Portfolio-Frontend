import { motion } from "framer-motion";

const socialLinks = [
  { icon: "fab fa-github",    href: "https://github.com/ibrahim08043",                         label: "GitHub" },
  { icon: "fab fa-linkedin",  href: "https://linkedin.com/in/muhammadibrahim-7b3220367",       label: "LinkedIn" },
  { icon: "fab fa-twitter",   href: "https://x.com/Ibrahim93045",                             label: "Twitter/X" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#070B0F]">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-heading font-bold text-lg text-white mb-2">
              Muhammad<span className="text-[#38BDF8]">.</span>Ibrahim
            </p>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xs">
              Full-Stack Developer (MERN) crafting scalable web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#475569] mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "/",           label: "Home" },
                { href: "/about",      label: "About" },
                { href: "/skills",     label: "Skills" },
                { href: "/projects",   label: "Projects" },
                { href: "/experience", label: "Experience" },
                { href: "/contact",    label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#475569] mb-4">Contact</p>
            <div className="space-y-2">
              <a
                href="mailto:ibrahimkashif792@gmail.com"
                className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200"
              >
                <i className="fas fa-envelope text-[#38BDF8] w-4"></i>
                ibrahimkashif792@gmail.com
              </a>
              <a
                href="tel:+923219213132"
                className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200"
              >
                <i className="fas fa-phone text-[#38BDF8] w-4"></i>
                +92 321 9213132
              </a>
              <span className="flex items-center gap-2 text-sm text-[#94A3B8]">
                <i className="fas fa-map-marker-alt text-[#38BDF8] w-4"></i>
                Karachi, Pakistan
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#475569]">
            © {year} Muhammad Ibrahim. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -2 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8]
                           bg-white/5 hover:bg-[#38BDF8]/10 border border-white/[0.06] hover:border-[#38BDF8]/20
                           transition-all duration-200 text-sm"
              >
                <i className={s.icon}></i>
              </motion.a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8]
                         bg-white/5 hover:bg-[#38BDF8]/10 border border-white/[0.06] hover:border-[#38BDF8]/20
                         transition-all duration-200 text-sm ml-2"
              aria-label="Back to top"
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
