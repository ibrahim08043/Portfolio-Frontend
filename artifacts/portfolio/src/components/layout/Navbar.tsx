import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
import Cv from "../../../../../attached_assets/Muhammad_Ibrahim_Full_Stack_Developer_Resume.pdf";

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
          ? "nav-glass border-b border-[#2C2C2C]"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group select-none">
            <span className="font-mono text-[11px] font-bold text-[#B5FF4D] bg-[#B5FF4D]/10 border border-[#B5FF4D]/25 px-2 py-1 rounded">
              MI
            </span>
            <span className="font-display font-bold text-white text-sm hidden sm:block">
              Ibrahim<span className="text-[#B5FF4D]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                  location === link.path
                    ? "text-[#B5FF4D]"
                    : "text-[#777] hover:text-[#EFEFEF]"
                )}
              >
                {link.label}
                {location === link.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#B5FF4D]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={downloadCV}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-medium
                         border border-[#B5FF4D]/30 text-[#B5FF4D]
                         hover:bg-[#B5FF4D]/8 hover:border-[#B5FF4D]/60
                         transition-all duration-200"
            >
              <Download className="h-3 w-3" />
              Download CV
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded border border-[#2C2C2C] text-[#777] hover:text-white hover:border-[#B5FF4D]/40 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-[#2C2C2C]"
          >
            <div className="container mx-auto px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded transition-all duration-200",
                    location === link.path
                      ? "text-[#B5FF4D] bg-[#B5FF4D]/8"
                      : "text-[#777] hover:text-white hover:bg-white/3"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { downloadCV(); setIsMobileMenuOpen(false); }}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded text-sm font-mono font-medium
                           border border-[#B5FF4D]/30 text-[#B5FF4D] hover:bg-[#B5FF4D]/8 transition-all"
              >
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
