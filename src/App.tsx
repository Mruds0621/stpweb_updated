import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { JourneyPage } from "./components/JourneyPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ServicesPage } from "./components/ServicesPage";
import { CareerPage } from "./components/CareerPage";
import { ContactPage } from "./components/ContactPage";
import { Toaster } from "./components/ui/sonner";

// Preload critical images
const preloadImages = [
  "https://images.unsplash.com/photo-1758826898770-c76ce24b4eff?w=800&q=75&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1742415888265-d5044039d8e6?w=800&q=75&auto=format&fit=crop"
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  // Preload critical images on mount
  useEffect(() => {
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Show navbar on all pages */}
      <Navbar />
      
      <AnimatedRoutes />
      
      {/* Toast notifications */}
      <Toaster position="top-right" richColors />
    </div>
  );
}