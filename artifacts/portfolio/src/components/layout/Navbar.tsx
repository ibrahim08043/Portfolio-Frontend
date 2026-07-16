import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
import Cv from "../../../../attached_assets/Muhammad_Ibrahim_Full_Stack_Developer_Resume_1784188974780.pdf";

const navLinks = [
  { path: "/",           label: "Home" },
  { path: "/about",      label: "About" },
  { path: "/skills",     label: "Skills" },
  { path: "/projects",   label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/education",  label: "Education" },
  { path: "/contact",    label: "Contact" },
];

const Navbar = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = Cv;
    link.download = "Muhammad_Ibrahim_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "py-3 bg-[#070B0F]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] text-xs font-bold font-mono transition-all duration-300 group-hover:bg-[#38BDF8]/20 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)]">
              MI
            </span>
            <span className="font-heading font-bold text-[#E2E8F0] group-hover:text-[#38BDF8] transition-colors duration-300 hidden sm:block">
              Muhammad<span className="text-[#38BDF8]">.</span>Ibrahim
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location === link.path
                    ? "text-[#38BDF8] bg-[#38BDF8]/8"
                    : "text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={downloadCV}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                         bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20
                         hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/40
                         transition-all duration-200"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CV</span>
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/[0.06]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    location === link.path
                      ? "text-[#38BDF8] bg-[#38BDF8]/10"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { downloadCV(); setIsMobileMenuOpen(false); }}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium
                           bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
