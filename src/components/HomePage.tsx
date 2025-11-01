import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { HomeSidebar } from "./HomeSidebar";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Building2,
  Users,
  Briefcase,
  Mail,
  Phone,
  Clock,
  Linkedin,
  Twitter,
  Globe,
  Home,
  Newspaper,
  FileText,
  Award,
  CheckCircle2,
  Sparkles,
  Target,
  Zap,
  Smartphone,
  History,
  Droplet,
  Map,
  BarChart3,
  FileCheck,
  Package,
  Shield,
  X,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CountCard } from "./CountCard";
import { AnimatedButton } from "./AnimatedButton";
import { ServiceFlower } from "./ServiceFlower";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useThemeColors } from "./useThemeColors";
import { Footer } from "./Footer";

// Optimized Service Slideshow Component with Enhanced Animations
function ServiceSlideshow() {
  const { colors } = useThemeColors();
    const services = [
        {
            name: "Water Management",
            image: "/image_data/Website_Hero_Section/water_management.jpg",
            direction: "right",
        },
        {
            name: "Trade License",
            image: "/image_data/Website_Hero_Section/Trade-license.jpg",
            direction: "down",
        },
        {
            name: "MPMS",
            image: "/image_data/Website_Hero_Section/MPMS.jpg",
            direction: "left",
        },
        {
            name: "Property Tax Management",
            image: "/image_data/Website_Hero_Section/property_tax.jpg",
            direction: "up",
        },
        {
            name: "Asset Management",
            image: "/image_data/Website_Hero_Section/asset.jpg",
            direction: "right",
        },
        {
            name: "Data Analysis",
            image: "/image_data/Website_Hero_Section/data_analysis.jpg",
            direction: "down",
        },
        {
            name: "Integrated Software & Mobile Apps",
            image: "/image_data/Website_Hero_Section/softwares.jpg",
            direction: "left",
        },
        {
            name: "GIS Mapping",
            image: "/image_data/Website_Hero_Section/GIS_mapping.jpg",
            direction: "up",
        },
        {
            name: "ELU-PLU City Mapping",
            image: "/image_data/Website_Hero_Section/ELU_PLU.jpg",
            direction: "right",
        },
       
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % services.length;
    const img = new Image();
    img.src = services[nextIndex].image;
  }, [currentIndex, services]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % services.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentIndex];

  const getAnimationProps = (direction: string) => {
    const animations = {
      right: {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
      },
      left: {
        initial: { x: "-100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "100%", opacity: 0 },
      },
      up: {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
      },
      down: {
        initial: { y: "-100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 0 },
      },
    };
    return (
      animations[direction as keyof typeof animations] ||
      animations.right
    );
  };

  const animationProps = getAnimationProps(
    currentService.direction,
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: colors.primaryDark }}
    >
      <motion.div
        key={currentIndex}
        initial={animationProps.initial}
        animate={animationProps.animate}
        exit={animationProps.exit}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />
        <img
          src={currentService.image}
          alt={currentService.name}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 z-20 shadow-2xl"
        >
          <p
            className="text-white"
            style={{ fontWeight: 600, letterSpacing: "0.02em" }}
          >
            {currentService.name}
          </p>
        </motion.div>
      </motion.div>

      {/* Progress indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {services.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-10 bg-white shadow-lg"
                : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Service data for small cards
const serviceData = [
  {
    icon: Building2,
    title: "Property Tax Management",
    description:
      "Transforming property data into municipal revenue.",
    features: [
      "GIS-based door-to-door property surveys for accurate assessment",
      "Drone mapping for high-precision property visualization",
      "Use of advanced software tools for data analysis and automation",
      "25+ years of expertise in municipal tax systems",
      "Helping ULBs unlock hidden revenue and improve collections",
      "Promoting tax equity and transparency",
      "Enabling citizen inclusion in the formal taxation system",
    ],
    color: "#BF3131",
  },
  {
    icon: Droplet,
    title: "Water Tax Management",
    description:
      "Every drop accounted. Every source optimized.",
    features: [
      "Field surveys to digital billing for complete water management",
      "Track, monitor, and recover water usage efficiently",
      "Data-backed systems for better decision-making",
      "Ensure transparency in operations",
      "Enable leak detection and quick response",
      "Build citizen trust in water tax processes",
    ],
    color: "#7D0A0A",
  },
  {
    icon: Map,
    title: "ELU/PLU City Mapping",
    description:
      "Land use mapping for urban planning and development with GIS integration",
    features: [
      "Comprehensive Land Use Analysis",
      "Detailed Zoning Maps",
      "Urban Planning Support",
      "Regulation Compliance Tools",
      "Future Development Planning",
    ],
    color: "#BF3131",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Transform municipal data into actionable insights for better decision-making",
    features: [
      "Real-time Analytics Dashboard",
      "Predictive Modeling",
      "Custom Report Generation",
      "Performance Metrics",
      "Trend Analysis",
    ],
    color: "#7D0A0A",
  },
  {
    icon: MapPin,
    title: "GIS Mapping & Urban Intelligence Platforms",
    description: "Spatial intelligence for smarter cities.",
    features: [
      "Creation of base maps and ward boundaries",
      "Integration of utilities and property layers",
      "Drone and DGPS-based surveys",
      "AI-assisted segmentation and analytics",
      "Interactive urban dashboards for governance",
    ],
    color: "#BF3131",
  },
  {
    icon: FileCheck,
    title: "Trade License Management",
    description:
      "Empowering local businesses. Enabling municipal compliance.",
    features: [
      "QR-code based registrations and renewals",
      "Mobile app for traders and inspectors",
      "Geo-tagged field verification",
      "Automated workflow and notifications",
      "Revenue boosting with transparency and ease",
    ],
    color: "#7D0A0A",
  },
  {
    icon: Package,
    title: "Municipal Asset & Estate Management",
    description: "Mapping public wealth. Maximizing its value.",
    features: [
      "GIS-tagged inventory of civic assets",
      "Lease and rent management modules",
      "Legal and financial system integration",
      "Monitoring of markets, plots, and buildings",
      "Optimized monetization of public property",
    ],
    color: "#BF3131",
  },
  {
    icon: Shield,
    title: "Blockchain Document Management",
    description:
      "Secure, tamper-proof document storage using blockchain technology",
    features: [
      "Immutable Record Storage",
      "Secure Document Management",
      "Complete Audit Trail",
      "Digital Verification System",
      "Multi-level Access Control",
    ],
    color: "#7D0A0A",
  },
];

// Service Description Card Component (displays beside service cards)
// Service-to-Image Mapping
const serviceImageMap: { [key: string]: string } = {
    "Property Tax Management": "/image_data/homeService/ptax.jpg",
    "Water Tax Management": "/image_data/homeService/wtax.jpg",
    "ELU/PLU City Mapping": "/image_data/homeService/ELU.jpg",
    "Data Analysis": "/image_data/homeService/DATA.jpg",
    "GIS Mapping & Urban Intelligence Platforms": "/image_data/homeService/gis.jpg",
    "Trade License Management": "/image_data/homeService/trade.jpg",
    "Municipal Asset & Estate Management": "/image_data/homeService/asset.jpg",
    "Blockchain Document Management": "/image_data/homeService/blockchain.jpg",
};

// Service Description Card Component (displays beside service cards)
function ServiceDescriptionCard({
    service,
}: {
    service: (typeof serviceData)[0] | null;
}) {
    const { colors } = useThemeColors();
    const Icon = service?.icon;

    if (!service) {
        return (
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative overflow-hidden rounded-2xl p-5 shadow-xl bg-white flex flex-col justify-center w-full lg:w-[550px] h-[600px] lg:h-[700px] lg:ml-[-200px]"
                style={{
                    borderColor: "#000000",
                }}
            >
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <Sparkles
                        size={40}
                        style={{ color: colors.textLight }}
                        className="mb-3 opacity-30"
                    />
                    <p
                        style={{
                            color: colors.textLight,
                            fontSize: "0.85rem",
                        }}
                    >
                        Click on a service card to view details
                    </p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            key={service.title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-shadow bg-white flex flex-col w-full lg:w-[550px] h-[600px] lg:h-[700px] lg:ml-[-200px]"
            style={{
                borderColor: "#000000",
            }}
        >
            <div className="relative z-10 h-full flex flex-col">
                {/* Service Image */}
                <div className="mb-4 -mx-5 -mt-5">
                    <ImageWithFallback
                        src={serviceImageMap[service.title] || "https://images.unsplash.com/photo-1710367847938-c92cf56a7a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBzZXJ2aWNlc3xlbnwxfHx8fDE3NjE4MzMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"}
                        alt={service.title}
                        className="w-full h-60 object-cover rounded-t-2xl"
                    />
                </div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: "#000000" }}
                    >
                        {Icon && <Icon className="text-white" size={24} />}
                    </motion.div>
                    <div className="flex-1">
                        <h3
                            className="text-2xl"
                            style={{ fontWeight: 700, color: "#000000" }}
                        >
                            {service.title}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p
                    className="mb-4 leading-relaxed italic"
                    style={{
                        color: colors.textLight,
                        fontSize: "1rem",
                    }}
                >
                    {service.description}
                </p>

                {/* Features List */}
                <div className="flex-1">
                    <h4
                        className="text-base mb-2"
                        style={{ fontWeight: 700, color: "#000000" }}
                    >
                        Key Features:
                    </h4>
                    <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="flex items-start gap-2"
                            >
                                <CheckCircle2
                                    size={16}
                                    className="flex-shrink-0 mt-0.5"
                                    style={{ color: "#000000" }}
                                />
                                <span
                                    style={{
                                        color: colors.textLight,
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {feature}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}


// About Section Component with Modern Design
function AboutSection({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) {
  const {
    colors,
    gradients,
    text: themeText,
  } = useThemeColors();

  const [selectedService, setSelectedService] = useState<
    (typeof serviceData)[0] | null
  >(serviceData[0]);

  const handleServiceClick = (
    service: (typeof serviceData)[0],
  ) => {
    setSelectedService(service);
  };

  return (
    <section
      id="about"
      className="py-16 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Hidden anchor for services navigation */}
      <div
        id="services"
        style={{ position: "absolute", top: "-80px" }}
      ></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                ...themeText.gradient,
              }}
            >
              Leading Municipal Excellence
            </h2>

            <p
              className="max-w-4xl mx-auto leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: colors.textLight,
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              Specializing in{" "}
              <span
                style={{
                  fontWeight: 700,
                  color: colors.primary,
                }}
              >
                GIS-based property tax surveys
              </span>{" "}
              and comprehensive IT solutions for municipalities
              across Maharashtra
            </p>
          </motion.div>

          {/* Three Column Layout: Service Flower | Service List | Description Card */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] lg:gap-8 gap-6 mb-8 items-center lg:-ml-[100px]">
            {/* Left Column: Service Flower - HIDDEN ON MOBILE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hidden lg:flex justify-end items-center mr-[950px]"
            >
              <ServiceFlower />
            </motion.div>

            {/* Middle Column: Service List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:-ml-[850px]"
            >
              <div
                className="bg-white rounded-2xl shadow-xl p-6 w-full lg:w-[530px] h-auto lg:h-[700px]"
                style={{
                  borderColor: "#000000",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Mobile Dropdown */}
                <div className="lg:hidden mb-4">
                  <Select
                    value={selectedService?.title || ""}
                    onValueChange={(value) => {
                      const service = serviceData.find(
                        (s) => s.title === value,
                      );
                      if (service) handleServiceClick(service);
                    }}
                  >
                    <SelectTrigger
                      className="w-full h-12 border-2"
                      style={{ borderColor: "#BF3131" }}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <SelectItem
                            key={index}
                            value={service.title}
                            className="cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <Icon size={16} />
                              <span>{service.title}</span>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                {/* Desktop Scrollable Service List */}
                <div className="hidden lg:block flex-1 overflow-y-auto space-y-2 pr-2">
                  {serviceData.map((service, index) => {
                    const Icon = service.icon;
                    const isSelected =
                      selectedService?.title === service.title;

                    return (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.1 + index * 0.05,
                        }}
                        whileHover={{ x: 8, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          handleServiceClick(service)
                        }
                        className="w-full text-left p-4 rounded-xl  transition-all cursor-pointer group flex items-center gap-3"
                        style={{
                          borderColor: isSelected
                            ? "#BF3131"
                            : "#000000",
                          backgroundColor: isSelected
                            ? "#FEF2F2"
                            : "white",
                        }}
                      >
                        {/* Icon */}
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                          style={{
                            backgroundColor: isSelected
                              ? "#BF3131"
                              : "#000000",
                          }}
                        >
                          <Icon
                            className="text-white"
                            size={18}
                          />
                        </div>

                        {/* Title */}
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-sm leading-tight"
                            style={{
                              fontWeight: isSelected
                                ? 700
                                : 600,
                              color: isSelected
                                ? "#BF3131"
                                : "#000000",
                            }}
                          >
                            {service.title}
                          </p>
                        </div>

                        {/* Selected indicator */}
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex-shrink-0"
                          >
                            <CheckCircle2
                              size={20}
                              style={{ color: "#BF3131" }}
                            />
                          </motion.div>
                        )}

                        {/* Hover indicator */}
                        {!isSelected && (
                          <motion.div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight
                              size={16}
                              style={{ color: "#000000" }}
                            />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Third Column: Service Description Card */}
            <div className="-ml-[120px]">
              <ServiceDescriptionCard
                service={selectedService}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/about">
              <AnimatedButton
                variant="secondary"
                icon={<ArrowRight size={18} />}
                className="px-8 py-4"
              >
                Learn More About Us
              </AnimatedButton>
            </Link>
            <Link to="/services">
              <AnimatedButton
                variant="secondary"
                icon={<ArrowRight size={18} />}
                className="px-8 py-4"
              >
                Explore All Services
              </AnimatedButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function HomePage() {
  const {
    colors,
    gradients,
    text: themeText,
  } = useThemeColors();
  const [activeSection, setActiveSection] = useState("hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const sections = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "services", name: "Services" },
    { id: "clients", name: "Clients" },
    { id: "journey", name: "Journey" },
    { id: "career", name: "Career" },
    { id: "contact", name: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      const currentSection = sectionElements.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0],
  );
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0.95],
  );

  return (
    <div ref={containerRef} className="relative">
      <HomeSidebar
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Hero Section - Enhanced */}
      <motion.section
        id="hero"
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom right, ${colors.primaryDark}, ${colors.primary}, #A52020)`,
          }}
        />

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: `${colors.accent}4D` }}
          />
          <motion.div
            animate={{
              scale: [1.3, 1, 1.3],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: `${colors.primary}4D` }}
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-2xl"
            style={{ backgroundColor: `${colors.accent}33` }}
          />
        </div>

        {/* Service Slideshow Background */}
        <ServiceSlideshow />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
              style={{
                fontSize: "clamp(3rem, 7vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              <span className="inline-block text-white drop-shadow-2xl">
                Sthapatya Consultants
              </span>
              <br />
              <span
                className="inline-block text-white/95"
                style={{
                  fontSize: "0.5em",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}
              >
                PRIVATE LIMITED
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-4xl mx-auto leading-relaxed mb-8"
              style={{
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: "rgba(255, 255, 255, 0.95)",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              Leading Municipal Service Provider for
              <span style={{ fontWeight: 800, color: "#fff" }}>
                {" "}
                GIS-Based Property Tax Survey{" "}
              </span>
              & Comprehensive IT Solutions
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8"
            >
              {[
                {
                  value: "100",
                  suffix: "+",
                  label: "Municipal Councils",
                },
                {
                  value: "8",
                  suffix: "+",
                  label: "Municipal Corporations",
                },
                {
                  value: "50L",
                  suffix: "+",
                  label: "Properties Surveyed",
                },
                {
                  value: "25",
                  suffix: "+",
                  label: "Years Experience",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="relative px-6 py-5 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl overflow-hidden group cursor-pointer"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundColor:
                        "rgba(255, 255, 255, 0.15)",
                    }}
                  />
                  <p
                    className="relative text-5xl text-white mb-2"
                    style={{
                      fontWeight: 900,
                      textShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    }}
                  >
                    {stat.value}
                    <span className="text-3xl">
                      {stat.suffix}
                    </span>
                  </p>
                  <p
                    className="relative text-sm text-white/95"
                    style={{
                      fontWeight: 600,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <AnimatedButton
                variant="primary"
                onClick={() => scrollToSection("about")}
                icon={<ArrowRight size={20} />}
                className="px-10 py-5 text-lg"
              >
                Explore Our Work
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <AboutSection scrollToSection={scrollToSection} />

      {/* Clients Section - Enhanced */}
      <section
        id="clients"
        className="py-20 px-4 bg-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 border bg-white"
                style={{
                  borderColor: colors.accent,
                }}
              >
                <Building2
                  size={18}
                  style={{ color: colors.accent }}
                />
                <span
                  style={{
                    color: colors.primary,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  Our Trusted Partners
                </span>
              </motion.div>

              <p
                className="max-w-5xl mx-auto leading-relaxed"
                style={{
                  fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                  color: colors.textLight,
                  fontWeight: 500,
                }}
              >
                Trusted by{" "}
                <span style={{ fontWeight: 700 }}>
                  100+ Municipal Councils
                </span>{" "}
                and{" "}
                <span style={{ fontWeight: 700 }}>
                  8+ Municipal Corporations
                </span>{" "}
                across Maharashtra
              </p>
            </div>

            {/* Client Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {[
                {
                  name: "Pimpri-Chinchwad Municipal Corporation",
                  logo: "/municiple_logo/pcmc.jpg",
                },
                {
                  name: "Thane Municipal Corporation",
                    logo: "/municiple_logo/thane.jpg",
                },
                {
                  name: "Panvel Municipal Corporation",
                    logo: "/municiple_logo/panvel.png",
                },
                {
                  name: "Amravati Municipal Corporation",
                    logo: "/municiple_logo/amt.jpg",
                },
                {
                  name: "Akola Municipal Corporation",
                    logo: "/municiple_logo/akola.jpg",
                },
                {
                  name: "Jalgaon Municipal Corporation",
                    logo: "/municiple_logo/jalgao.jpg",
                },
                {
                  name: "Dhule Municipal Corporation",
                    logo: "/municiple_logo/dhule.jpg",
                },
                {
                  name: "Baramati Municipal Corporation",
                    logo: "/municiple_logo/baramati.jpg",
                },
                {
                    name: "Chakan Municipal Corporation",
                    logo: "/municiple_logo/chakan.png",
                },
                {
                  name: "Washim Municipal Corporation",
                    logo: "/municiple_logo/washim.png",
                },
              ].map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: `0 20px 40px ${colors.accent}33`,
                  }}
                  className="p-6 bg-white border-2 rounded-2xl shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center group"
                  style={{ borderColor: colors.accent }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      colors.accent;
                  }}
                >
                  {/* Municipal Emblem */}
                  <motion.div
                    className="mb-4 relative"
                    whileHover={{
                      rotate: 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Client Name */}
                  <h3
                    className="text-base"
                    style={{
                      fontWeight: 700,
                      color: colors.text,
                      lineHeight: 1.4,
                    }}
                  >
                    {client.name}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to="/projects">
                <AnimatedButton
                  variant="secondary"
                  icon={<ArrowRight size={18} />}
                  className="px-8 py-4"
                >
                  View All Projects
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Preview - Compact */}
      <section
        id="journey"
        className="py-4 px-4 bg-gradient-to-b from-white to-red-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="mb-6 text-center"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                backgroundImage:
                  "linear-gradient(135deg, #7D0A0A 0%, #BF3131 50%, #BF3131 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Journey
            </h2>

            <div className="relative px-4 md:px-8">
              {/* Horizontal Zigzag Path */}
              <div className="relative">
                {/* SVG Path Line */}
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  style={{ height: "400px" }}
                >
                  <motion.path
                    d="M 50 100 Q 150 50, 250 100 T 450 100 Q 550 50, 650 100 T 850 100 Q 950 50, 1050 100 T 1250 100"
                    stroke="#BF3131"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{
                      pathLength: 1,
                      opacity: 0.4,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />
                </svg>

                {/* Journey Milestones - More Compact */}
                <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-3">
                  {[
                    {
                      year: "2000",
                      title: "Foundation",
                      desc: "Started with a vision to transform urban governance in Maharashtra",
                      position: "top",
                    },
                    {
                      year: "2005",
                      title: "First Success",
                      desc: "Completed first major municipal corporation GIS survey project",
                      position: "bottom",
                    },
                    {
                      year: "2010",
                      title: "Expansion",
                      desc: "Reached 50+ Municipal Councils across Maharashtra",
                      position: "top",
                    },
                    {
                      year: "2015",
                      title: "Innovation",
                      desc: "Introduced comprehensive property tax management software",
                      position: "bottom",
                    },
                    {
                      year: "2020",
                      title: "Digital Growth",
                      desc: "Launched web & mobile-based payment solutions",
                      position: "top",
                    },
                    {
                      year: "2025",
                      title: "Today",
                      desc: "Leading provider with 100+ ULBs, 8+ Corporations and 50L+ properties surveyed",
                      position: "bottom",
                    },
                  ].map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y:
                          milestone.position === "top"
                            ? -50
                            : 50,
                        scale: 0.5,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        delay: index * 0.2,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className={`flex flex-col items-center ${
                        milestone.position === "top"
                          ? "pt-4 pb-20"
                          : "pt-20 pb-4"
                      }`}
                    >
                      {/* Connector Line to Path */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height:
                            milestone.position === "top"
                              ? "50px"
                              : "50px",
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.2 + 0.3,
                          duration: 0.4,
                        }}
                        className={`w-0.5 bg-gradient-to-b from-[#BF3131] to-transparent ${
                          milestone.position === "top"
                            ? "order-2 mt-2"
                            : "order-1 mb-2"
                        }`}
                      />

                      {/* Content Card */}
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`${milestone.position === "top" ? "order-1" : "order-2"} relative`}
                      >
                        {/* Circle with Year - Smaller */}
                        <motion.div
                          initial={{ rotate: -180 }}
                          whileInView={{ rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.2 + 0.4,
                            duration: 0.6,
                          }}
                          className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-2"
                        >
                          {/* Outer Glow Ring */}
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                            className="absolute inset-0 bg-gradient-to-br from-[#7D0A0A] to-[#BF3131] rounded-full blur-md"
                          />

                          {/* Main Circle */}
                          <div className="relative w-full h-full bg-gradient-to-br from-[#7D0A0A] to-[#BF3131] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                            <span
                              className="text-white"
                              style={{
                                fontSize:
                                  "clamp(0.9rem, 1.5vw, 1.1rem)",
                                fontWeight: 700,
                              }}
                            >
                              {milestone.year}
                            </span>
                          </div>
                        </motion.div>

                        {/* Title & Description - Smaller */}
                        <div className="text-center max-w-[160px]">
                          <h3
                            className="mb-1"
                            style={{
                              fontSize:
                                "clamp(0.85rem, 1.2vw, 1rem)",
                              fontWeight: 700,
                              color: "#000000",
                            }}
                          >
                            {milestone.title}
                          </h3>
                          <p
                            style={{
                              fontSize:
                                "clamp(0.75rem, 1vw, 0.85rem)",
                              fontWeight: 500,
                              color: "#BF3131",
                            }}
                          >
                            {milestone.desc}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-4">
                <Link to="/journey">
                  <AnimatedButton
                    variant="secondary"
                    icon={<ArrowRight size={18} />}
                    className="px-6 py-3"
                  >
                    View Full Journey
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Preview - Enhanced with Carousel */}
      <section
        id="career"
        className="py-20 px-4 bg-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.accent}33` }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.primary}33` }}
        />

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 border bg-white"
              style={{
                borderColor: colors.accent,
              }}
            >
              <Users
                size={20}
                style={{ color: colors.accent }}
              />
              <span
                style={{
                  color: colors.primary,
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                Join Our Growing Family
              </span>
            </motion.div>

            <h2
              className="mb-4"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#BF3131",
              }}
            >
              Join Our Team
            </h2>
          </motion.div>

          {/* Two Column Layout: Carousel Left, Description Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column: Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Carousel
                className="w-full h-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {[
                    {
                      image:
                       "/image_data/Team_photo/2.jpg",
                      title: "Team Collaboration",
                                      },
                    {
                        image:
                                  "/image_data/Team_photo/3.jpg",
                      title: "Professional Excellence",
                    },
                    {
                                      image:
                                  "/image_data/Team_photo/4.jpg",
                      title: "Diverse Teamwork",
                    },
                    {
                                      image:
                                  "/image_data/Team_photo/6.jpg",
                      title: "Innovation & Growth",
                    },
                    {
                                      image:
                                  "/image_data/Team_photo/5.jpg",
                      title: "Modern Workspace",
                                      },
                                      {
                                          image:
                                              "/image_data/Team_photo/7.jpg",
                                          title: "Modern Workspace",
                                      },
                                      {
                                          image:
                                              "/image_data/Team_photo/1.jpg",
                                          title: "Modern Workspace",
                                      },
                  ].map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="relative group h-full">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        {/* Decorative Border */}
                        <div
                          className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            borderColor: `${colors.accent}33`,
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="left-4 bg-white/90 hover:bg-white"
                  style={{ borderColor: colors.accent }}
                />
                <CarouselNext
                  className="right-4 bg-white/90 hover:bg-white"
                  style={{ borderColor: colors.accent }}
                />
              </Carousel>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Right Column: Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center space-y-8 h-full"
            >
              {/* Team Size Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full shadow-lg self-start"
                style={{
                  background:
                    "linear-gradient(to right, #BF3131, #7D0A0A)",
                }}
              >
                <Users size={22} className="text-white" />
                <span
                  className="text-white"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.15rem",
                  }}
                >
                  700+ Team Members
                </span>
              </motion.div>

              {/* Description Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="leading-relaxed"
                style={{
                  fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
                  color: colors.text,
                  fontWeight: 500,
                  lineHeight: 1.8,
                }}
              >
                Be a part of our{" "}
                <span
                  style={{
                    fontWeight: 700,
                    color: colors.primary,
                  }}
                >
                  700+ strong and growing family
                </span>
                , where every individual's effort fuels our
                collective success. At our company, teams{" "}
                <span
                  style={{
                    fontWeight: 700,
                    color: colors.primary,
                  }}
                >
                  collaborate, innovate, and work passionately
                </span>{" "}
                to drive growth and excellence. Join us to build
                your career in an environment that values{" "}
                <span
                  style={{
                    fontWeight: 700,
                    color: colors.primary,
                  }}
                >
                  dedication, teamwork, and continuous learning
                </span>
                .
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex justify-start"
              >
                <Link to="/career">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <div className="relative flex items-center gap-3">
                      <Briefcase
                        size={20}
                        className="text-white"
                      />
                      <span
                        className="text-white"
                        style={{
                          fontWeight: 700,
                          fontSize: "1.05rem",
                        }}
                      >
                        Explore Career Opportunities
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      >
                        <ArrowRight
                          size={20}
                          className="text-white"
                        />
                      </motion.div>
                    </div>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section - Enhanced */}
      <section
        id="contact"
        className="py-16 px-4 bg-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Contact Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
           
            <h2
              className="mb-2"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: colors.primary,
              }}
            >
              Visit Our Offices
            </h2>

            <p
              className="max-w-5xl mx-auto mb-3 leading-relaxed"
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                color: colors.textLight,
                fontWeight: 500,
              }}
            >
              We're located across Maharashtra to serve you
              better
            </p>
          </motion.div>

          {/* Office Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                name: "Amravati",
                type: "Head Office",
                address: "Amravati, Maharashtra",
                image:
                 "/image_data/Our_Offices/Amravati_office.jpg",
                isHeadOffice: true,
                mapsUrl: "https://maps.app.goo.gl/oyq5cLpRp3ac8iq8A",
              },
              {
                name: "Pune",
                type: "Regional Office",
                address: "Pune, Maharashtra",
                image:
                 "/image_data/Our_Offices/Panvel Office_1.jpeg",
                isHeadOffice: false,
                mapsUrl: "https://maps.app.goo.gl/6tUHWSNHjfYSj6UF9",
              },
              {
                name: "Thane",
                type: "Regional Office",
                address: "Thane, Maharashtra",
                image:
                 "/image_data/Our_Offices/Pune_Office.jpeg",
                isHeadOffice: false,
                mapsUrl: "https://maps.app.goo.gl/YCK7vUYffYDTAAKz6",
              },
              {
                name: "Panvel",
                type: "Regional Office",
                address: "Panvel, Maharashtra",
                image:
                 "/image_data/Our_Offices/Thane_office.jpeg",
                isHeadOffice: false,
                mapsUrl: "#", // Add Panvel Google Maps link here
              },
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-black-100 hover:border-black-300">
                  {/* Head Office Badge */}
                  {office.isHeadOffice && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                      }}
                      className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-lg"
                    >
                      <span
                        className="text-white text-xs"
                        style={{ fontWeight: 700 }}
                      >
                        HEAD OFFICE
                      </span>
                    </motion.div>
                  )}

                  {/* Office Image */}
                  <div className="relative h-32 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={office.image}
                        alt={`${office.name} Office`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Office Details */}
                  <div className="p-4">
                    <h3
                      className="text-lg mb-1"
                      style={{
                        fontWeight: 800,
                        ...themeText.gradient,
                      }}
                    >
                      {office.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      <p
                        className="text-xs"
                        style={{
                          color: "black",
                          fontWeight: 600,
                        }}
                      >
                        {office.type}
                      </p>
                    </div>

                    <p
                      className="text-xs mb-3"
                      style={{
                        color: "black",
                        fontWeight: 500,
                      }}
                    >
                      {office.address}
                    </p>

                    {/* Contact Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(office.mapsUrl, "_blank")}
                      className="w-full py-1.5 px-3 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        backgroundColor: colors.accent,
                      }}
                    >
                      <MapPin size={14} />
                      Get Directions
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect - Removed */}
              </motion.div>
            ))}
          </div>

          {/* Centered Get In Touch Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-10"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ backgroundColor: "white" }}
              >
                <div className="relative px-8 py-4 flex items-center justify-center gap-3 overflow-hidden">
                  {/* Content */}
                  <Mail
                    size={20}
                    className="text-red relative z-10"
                     style={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: colors.primary,
                    }}
                  />
                  <span
                    className="relative text-white z-10"
                    style={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: colors.primary,
                    }}
                  >
                    Get In Touch
                  </span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowRight
                      size={20}
                      className="text-red"
                       style={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: colors.primary,
                    }}
                    />
                  </motion.div>
                </div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Footer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-12 border-t-2 border-black-400"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3
                  className="text-xl mb-4"
                  style={{
                    fontWeight: 800,
                    ...themeText.gradient,
                  }}
                >
                  Sthapatya Consultants
                </h3>
                <p
                  className="mb-4 leading-relaxed"
                  style={{
                    fontSize: "0.9rem",
                    color: colors.textLight,
                    fontWeight: 500,
                  }}
                >
                  Leading municipal service provider for
                  GIS-based property tax surveys and IT
                  solutions across Maharashtra.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Mail, href: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(to bottom right, #BF3131, #7D0A0A)",
                      }}
                    >
                      <social.icon
                        size={18}
                        className="text-white"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4
                  className="text-lg mb-4"
                  style={{
                    fontWeight: 700,
                    color: colors.text,
                  }}
                >
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      name: "About Us",
                      path: "/about",
                      icon: Building2,
                    },
                    {
                      name: "Services",
                      path: "/services",
                      icon: Briefcase,
                    },
                    {
                      name: "Projects",
                      path: "/projects",
                      icon: FileText,
                    },
                    {
                      name: "Journey",
                      path: "/journey",
                      icon: TrendingUp,
                    },
                  ].map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center gap-2 text-sm transition-colors duration-300"
                        style={{
                          color: colors.textLight,
                          fontWeight: 500,
                        }}
                      >
                        <link.icon
                          size={16}
                          style={{ color: "#BF3131" }}
                        />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* More Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4
                  className="text-lg mb-4"
                  style={{
                    fontWeight: 700,
                    color: colors.text,
                  }}
                >
                  Connect
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      name: "Career",
                      path: "/career",
                      icon: Users,
                    },
                    {
                      name: "Contact",
                      path: "/contact",
                      icon: Mail,
                    },
                  ].map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center gap-2 text-sm transition-colors duration-300"
                        style={{
                          color: colors.textLight,
                          fontWeight: 500,
                        }}
                      >
                        <link.icon
                          size={16}
                          style={{ color: "#BF3131" }}
                        />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4
                  className="text-lg mb-4"
                  style={{
                    fontWeight: 700,
                    color: colors.text,
                  }}
                >
                  Contact Us
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Mail
                      size={16}
                      className="mt-1 flex-shrink-0"
                      style={{ color: "#BF3131" }}
                    />
                    <div className="flex flex-col gap-1">
                      <a
                        href="mailto:support@sthapatya.in"
                        className="text-sm transition-colors duration-300"
                        style={{
                          color: colors.textLight,
                          fontWeight: 500,
                        }}
                      >
                        support@sthapatya.in
                      </a>
                      <a
                        href="mailto:recruitment@sthapatya.in"
                        className="text-sm transition-colors duration-300"
                        style={{
                          color: colors.textLight,
                          fontWeight: 500,
                        }}
                      >
                        recruitment@sthapatya.in
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone
                      size={16}
                      className="mt-1 flex-shrink-0"
                      style={{ color: "#BF3131" }}
                    />
                    <a
                      href="tel:+917774091416"
                      className="text-sm transition-colors duration-300"
                      style={{
                        color: colors.textLight,
                        fontWeight: 500,
                      }}
                    >
                      +91 7774091416
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock
                      size={16}
                      className="mt-1 flex-shrink-0"
                      style={{ color: "#BF3131" }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        color: colors.textLight,
                        fontWeight: 500,
                      }}
                    >
                      Mon - Fri: 10:00 AM - 6:00 PM
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Copyright Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8 border-t border-black-100 text-center"
            >
              <p
                className="text-sm"
                style={{
                  color: colors.textLight,
                  fontWeight: 500,
                }}
              >
                © 2025 Sthapatya Consultants Pvt. Ltd. All
                rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}