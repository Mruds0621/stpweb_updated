import { motion } from "motion/react";
import {
  Building2,
  Droplet,
  MapPin,
  Briefcase,
  Package,
  Shield,
  ScanLine,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Users,
  TrendingUp,
  Cloud,
  Lock,
  Workflow,
  Network,
  Link,
  Database,
  Globe,
  Smartphone,
  Award
} from "lucide-react";
import { useThemeColors } from "./useThemeColors";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export function ServicesPage() {
  const { colors } = useThemeColors();
  const navigate = useNavigate();

  const services = [
    {
      icon: Building2,
      title: "Property Tax Survey",
      desc: "Comprehensive GIS-based property surveys with accurate data collection and digitization.",
          image: "/image_data/ServicePage/ptaxs.jpg",
      features: [
        "Complete property assessment",
        "GPS-based mapping",
        "Digital documentation",
        "Real-time data sync"
      ],
    },
    {
      icon: Droplet,
      title: "Water Tax Management",
      desc: "Efficient water tax assessment and collection systems for urban local bodies.",
        image: "/image_data/ServicePage/wtaxs.jpg",
      features: [
        "Connection management",
        "Billing automation",
        "Payment tracking",
        "Consumer database"
      ],
    },
    {
      icon: MapPin,
      title: "GIS Mapping",
      desc: "High-precision geographic information systems for municipal planning and analysis.",
        image: "/image_data/ServicePage/gis.jpg",
      features: [
        "Satellite imagery",
        "Property mapping",
        "Spatial analysis",
        "Layer management"
      ],
    },
    {
      icon: Briefcase,
      title: "Trade License",
      desc: "Streamlined trade license management and approval workflows for businesses.",
        image: "/image_data/ServicePage/trade.jpg",
      features: [
        "Online applications",
        "Approval workflows",
        "Fee collection",
        "License tracking"
      ],
    },
    {
      icon: Package,
      title: "Asset Management",
      desc: "Comprehensive municipal property and asset tracking systems.",
        image: "/image_data/ServicePage/assets.jpg",
      features: [
        "Asset inventory",
        "Maintenance scheduling",
        "Lifecycle tracking",
        "Value assessment"
      ],
    },
    {
      icon: Shield,
      title: "Blockchain Documents",
      desc: "Secure document verification using blockchain technology for authenticity.",
        image: "/image_data/ServicePage/blockchain.jpg",
      features: [
        "Document security",
        "Tamper-proof records",
        "Verification system",
        "Digital signatures"
      ],
    },
    {
      icon: ScanLine,
      title: "Data Analysis",
        desc: "Transform municipal data into actionable insights for better decision-making.",
        image: "/image_data/ServicePage/scan.jpg",
      features: [
        "Predictive Modeling",
        "Custom Report Generation",
        "Performance Metrics",
        "Trend Analysis"
      ],
    },
    {
      icon: MapPin,
      title: "ELU-PLU",
      desc: "Existing Land Use and Proposed Land Use mapping for comprehensive urban planning and development control.",
        image: "/image_data/ServicePage/elu.jpg",
      features: [
        "Land use surveys",
        "Development planning",
        "Zoning analysis",
        "Master plan support"
      ],
    },
    {
      icon: Award,
      title: "Our Commitment to Excellence",
      desc: "With 25 years of experience and 50+ lakh properties surveyed, we continue to set benchmarks in municipal services.",
        image: "/image_data/Team_photo/service.jpg",
      features: [
        "100+ ULBs served",
        "Proven track record",
        "Continuous innovation",
        "Your success is our priority"
      ],
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "State-wide Coverage",
      desc: "Serving 100+ ULBs across Maharashtra"
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      desc: "Quick deployment with minimal disruption"
    },
    {
      icon: Shield,
      title: "Data Security",
      desc: "Bank-grade security for all citizen data"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      desc: "Field-ready apps for on-ground teams"
    }
  ];

  const techStack = [
    {
      icon: Database,
      title: "Robust Databases",
      desc: "PostgreSQL, MySQL, MongoDB",
      color: colors.primary
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      desc: "AWS, Azure, Google Cloud",
      color: colors.accent
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      desc: "React Native, Flutter, Android",
      color: colors.primary
    },
    {
      icon: Globe,
      title: "Web Technologies",
      desc: "React, Node.js, .NET Core",
      color: colors.accent
    },
    {
      icon: MapPin,
      title: "GIS Technologies",
      desc: "ArcGIS, QGIS, Google Maps API",
      color: colors.primary
    },
    {
      icon: Lock,
      title: "Security",
      desc: "SSL/TLS, OAuth, Encryption",
      color: colors.accent
    }
  ];

  const techStackItems = [
    { title: "Cloud Platform", icon: Cloud },
    { title: "Mobile Apps", icon: Smartphone },
    { title: "Web Portal", icon: Globe },
    { title: "API Integration", icon: Network },
    { title: "Real-time Data", icon: Database },
    { title: "Advanced Analytics", icon: Zap },
    { title: "Secure Storage", icon: Lock },
    { title: "24/7 Support", icon: Shield }
  ];

  const integrations = [
    {
      icon: Network,
      title: "IGR Portal",
      desc: "Inspector General of Registration integration for seamless property data exchange and verification"
    },
    {
      icon: Link,
      title: "Aaple Sarkar Portal",
      desc: "Government of Maharashtra's unified portal for citizen services and administrative workflows"
    },
    {
      icon: Workflow,
      title: "Payment Gateways",
      desc: "Multiple payment gateway integrations for secure online tax and fee collection"
    },
    {
      icon: Shield,
      title: "Digital Signature",
      desc: "Integration with digital signature services for authenticated document processing"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section with Video Background */}
      <div className="relative pt-20 sm:pt-24 md:pt-28 h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.pixabay.com/video/2020/05/17/39967-421299608_large.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 text-white"
              style={{ fontWeight: 700 }}
            >
              Transforming Urban
              <br />
              <span style={{ color: "white" }}>Governance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive digital solutions for modern urban development and municipal excellence across Maharashtra
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                  color: 'white',
                  fontWeight: 600
                }}
              >
                Explore Services
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
                style={{ fontWeight: 600 }}
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Services Grid */}
        <div id="services" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all border-2"
              style={{
                borderColor: colors.accent,
                borderWidth: "2px"
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`
                  }}
                >
                  <service.icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl mb-3 text-white" style={{ fontWeight: 600, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  {service.title}
                </h3>

                <p className="text-white/90 mb-4 leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                  {service.desc}
                </p>

                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} style={{ color: colors.accent }} className="flex-shrink-0 mt-1" />
                      <span className="text-sm text-white/90" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-gray-50 to-white rounded-3xl py-12 px-4 mb-16"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl text-center mb-10" style={{ fontWeight: 700, color: colors.text }}>
              Why Choose Our Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${colors.accent}20` }}
                  >
                    <benefit.icon size={28} style={{ color: colors.accent }} />
                  </div>
                  <h3 className="text-xl mb-2" style={{ fontWeight: 600, color: colors.text }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Stack and Seamless Integration - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
              <h2 className="text-3xl mb-6" style={{ fontWeight: 600, color: colors.text }}>
                Technology Stack
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {techStackItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle 
                      size={20} 
                      style={{ color: colors.accent }} 
                      className="flex-shrink-0"
                    />
                    <span style={{ color: colors.accent, fontWeight: 500 }}>
                      {item.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Seamless Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
              <h2 className="text-3xl mb-6" style={{ fontWeight: 600, color: colors.text }}>
                Seamless Integration
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle 
                      size={20} 
                      style={{ color: colors.accent }} 
                      className="flex-shrink-0"
                    />
                    <span style={{ color: colors.accent, fontWeight: 500 }}>
                      {integration.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}