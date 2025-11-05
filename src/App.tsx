import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
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
import { PageLoader } from "./components/PageLoader";

// Preload critical images
const preloadImages = [
    "https://images.unsplash.com/photo-1758826898770-c76ce24b4eff?w=800&q=75&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1742415888265-d5044039d8e6?w=800&q=75&auto=format&fit=crop"
];

function AnimatedRoutes({ setIsNavigating }: { setIsNavigating: (value: boolean) => void }) {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top immediately when route changes
        window.scrollTo(0, 0);

        // Show loader when route starts changing
        setIsNavigating(true);

        // Hide loader after a short delay to allow page to mount
        const timer = setTimeout(() => {
            setIsNavigating(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [location.pathname, setIsNavigating]);

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
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [isNavigating, setIsNavigating] = useState(false);

    // Initial page load
    useEffect(() => {
        // Preload critical images on mount
        preloadImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        // Show loader for initial page load
        const timer = setTimeout(() => {
            setIsInitialLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Show page loader during initial load or navigation */}
            <AnimatePresence>
                {(isInitialLoading || isNavigating) && <PageLoader />}
            </AnimatePresence>

            {/* Show navbar on all pages */}
            <Navbar />

            <AnimatedRoutes setIsNavigating={setIsNavigating} />

            {/* Toast notifications */}
            <Toaster position="top-right" richColors />
        </div>
    );
}