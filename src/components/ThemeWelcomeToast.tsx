import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, X } from "lucide-react";
import { useThemeColors } from "./useThemeColors";

export function ThemeWelcomeToast() {
  const [show, setShow] = useState(false);
  const { colors, backgrounds } = useThemeColors();

  useEffect(() => {
    // Check if user has seen the welcome message
    const hasSeenWelcome = localStorage.getItem("sthapathya-theme-welcome");
    
    if (!hasSeenWelcome) {
      // Show after 2 seconds
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem("sthapathya-theme-welcome", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="fixed bottom-24 right-6 z-40 max-w-sm"
        >
          <div 
            className="rounded-2xl p-5 shadow-2xl border-2"
            style={{ backgroundColor: colors.primary, borderColor: colors.secondary }}
          >
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              style={{ color: colors.primary }}
            >
              <X size={16} />
            </button>

            {/* Content */}
            <div className="flex items-start gap-3 text-white">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Palette size={28} className="flex-shrink-0" />
              </motion.div>
              
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  🎨 Try Our Theme Switcher!
                </h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Click the <strong>palette button</strong> below to choose from 6 beautiful color themes that match your style!
                </p>
              </div>
            </div>

            {/* Indicator Arrow */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -bottom-8 right-8 text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
