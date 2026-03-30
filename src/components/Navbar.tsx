import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface NavbarProps {
  onOpenDemo: () => void;
}

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-outline-variant/20 py-3 shadow-lg" 
        : "bg-transparent py-5"
    }`}>
      <div className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto">
        <Link 
          to="/#home" 
          onClick={() => handleNavClick("home")}
          className="text-2xl font-extrabold tracking-tighter text-on-surface font-headline"
        >
          Volo Ai
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link 
            to="/#features" 
            onClick={() => handleNavClick("features")}
            className="text-on-surface-variant font-light hover:text-on-surface transition-all duration-300"
          >
            Features
          </Link>
          <Link 
            to="/#solutions" 
            onClick={() => handleNavClick("solutions")}
            className="text-on-surface-variant font-light hover:text-on-surface transition-all duration-300"
          >
            Solutions
          </Link>
          <Link 
            to="/#outcome" 
            onClick={() => handleNavClick("outcome")}
            className="text-on-surface-variant font-light hover:text-on-surface transition-all duration-300"
          >
            Outcome
          </Link>
          <Link to="/privacy" className="text-on-surface-variant font-light hover:text-on-surface transition-all duration-300">
            Legal
          </Link>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenDemo}
          className="monolith-button px-6 py-2.5 rounded-lg text-white font-headline font-bold tracking-tight"
        >
          Request Demo
        </motion.button>
      </div>
    </nav>
  );
}
