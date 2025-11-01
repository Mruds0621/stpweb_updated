import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "figma:asset/b13a83b5d029e2e2aa6a839554617f84a51050ec.png";
import { useThemeColors } from "./useThemeColors";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const { colors, backgrounds } = useThemeColors();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Journey", path: "/journey" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      style={{ opacity: navOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/98 backdrop-blur-xl shadow-2xl shadow-[#2563eb]/10" 
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      {/* Decorative top border - Modern Professional - Now Theme Aware */}
      <div 
        className="absolute top-0 left-0 right-0 h-1" 
        style={{ backgroundColor: colors.primary }}
      />
      
      {/* Positioned slightly to the right */}
      <div className="max-w-[95%] ml-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 sm:gap-4"
            >
              {/* Rotating Measuring Tape Flower Logo */}
              <motion.div 
                className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <img 
                  src={logoImage} 
                  alt="Sthapatya Consultants Logo" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span 
                  className="tracking-wider uppercase leading-none truncate" 
                  style={{ 
                    fontWeight: 800,
                    fontSize: 'clamp(0.7rem, 2vw, 1.5rem)',
                    letterSpacing: '0.05em',
                    color: colors.primary
                  }}
                >
                  <span className="hidden sm:inline">Sthapatya Consultants India</span>
                  <span className="sm:hidden">Sthapatya</span>
                </span>
                <span 
                  className="-mt-1 hidden sm:block truncate" 
                  style={{ 
                    fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                    fontWeight: 500,
                    fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                    letterSpacing: '0.01em',
                    color: colors.primaryLight
                  }}
                >
                  Timely Tested & Heartily Trusted
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link key={link.path} to={link.path}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="relative px-4 py-2"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300`}
                    style={{
                      color: location.pathname === link.path ? "#FFFFFF" : colors.secondary
                    }}
                  >
                    {link.name}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-active-bg"
                      className="absolute inset-0 rounded-lg shadow-lg"
                      style={{
                        background: `linear-gradient(to right, ${colors.primary}, ${colors.primaryDark})`,
                        boxShadow: `0 10px 40px ${colors.primary}30`
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{
              color: colors.primary
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/98 backdrop-blur-xl"
          style={{
            borderTop: `1px solid ${colors.primary}20`
          }}
        >
          <div className="px-4 py-6 space-y-2 max-w-[95%] ml-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 8 }}
                  className="py-3 px-5 rounded-xl transition-all duration-300"
                  style={{
                    background: location.pathname === link.path 
                      ? `linear-gradient(to right, ${colors.primary}, ${colors.primaryDark})`
                      : 'transparent',
                    color: location.pathname === link.path ? '#FFFFFF' : colors.secondary,
                    boxShadow: location.pathname === link.path ? `0 10px 40px ${colors.primary}30` : 'none'
                  }}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}