import { motion } from "motion/react";
import { Calendar, MapPin, Award, TrendingUp, Building, Target, Zap, Rocket, Heart, Shield, Users, Star, Sparkles } from "lucide-react";
import { useThemeColors } from "./useThemeColors";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Footer } from "./Footer";

export function JourneyPage() {
  const { colors } = useThemeColors();
  
  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      desc: "Vision to transform urban governance",
      icon: Building,
      stats: "5 ULBs",
    },
    {
      year: "2012",
      title: "GIS Integration",
      desc: "Advanced mapping technology",
      icon: MapPin,
      stats: "20+ ULBs",
    },
    {
      year: "2015",
      title: "Major Expansion",
      desc: "Thane & major corporations",
      icon: TrendingUp,
      stats: "50+ ULBs",
    },
    {
      year: "2018",
      title: "Tech Innovation",
      desc: "Mobile apps & cloud systems",
      icon: Award,
      stats: "25L+ Properties",
    },
    {
      year: "2020",
      title: "Recognition",
      desc: "Maharashtra's leading provider",
      icon: Award,
      stats: "75+ ULBs",
    },
    {
      year: "2023",
      title: "Market Leader",
      desc: "Industry leadership achieved",
      icon: Rocket,
      stats: "100+ ULBs",
    },
  ];

  const commitments = [
    {
      icon: Heart,
      title: "Excellence in Service",
      desc: "Delivering quality solutions that exceed expectations"
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      desc: "Building lasting partnerships through integrity"
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      desc: "Your success is our priority, always"
    },
    {
      icon: Star,
      title: "Innovation First",
      desc: "Leading with cutting-edge technology solutions"
    }
  ];

  const upcomingEnhancements = [
    "AI-powered property assessment and valuation",
    "Blockchain integration for transparent revenue tracking",
    "IoT sensors for smart infrastructure monitoring",
    "Advanced predictive analytics dashboard",
    "Drone-based aerial surveying technology",
    "Mobile-first citizen engagement portal",
    "Real-time compliance and audit automation",
    "AI-Based Chatbots for faster customer service"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative pt-20 sm:pt-24 md:pt-28 h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
                      src="/image_data/Website_Hero_Section/journey.jpg"
            alt="Smart City Technology Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-5 text-white px-4"
              style={{ fontWeight: 700 }}
            >
              Milestones That
              <br />
              <span style={{ color: "white" }}>Define Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            >
              From a visionary start to becoming Maharashtra's leading urban governance partner — 
              our journey of innovation, growth, and unwavering commitment
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-8">
        {/* Two Column Layout: Journey Cards (Left) + Commitment (Right) */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 mb-8">
          
          {/* Left: Journey Timeline */}
          <div className="relative">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl mb-2" style={{ fontWeight: 700, color: colors.primary }}>
                Timeline of Growth
              </h2>
              <p className="text-base" style={{ color: colors.secondary }}>
                Every milestone marks a step towards excellence
              </p>
            </motion.div>

            {/* Vertical line */}
            <div 
              className="absolute left-[22px] top-24 bottom-8 w-0.5"
              style={{ backgroundColor: colors.primary }}
            />
            
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative flex items-start gap-4"
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                    style={{ backgroundColor: '#BF3131' }}
                  >
                    <milestone.icon className="text-white" size={20} />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="flex-1 bg-white rounded-2xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        {/* Year badge */}
                        <div 
                          className="px-3 py-1 rounded-full text-white text-sm flex-shrink-0"
                          style={{ backgroundColor: '#7D0A0A', fontWeight: 700 }}
                        >
                          {milestone.year}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg mb-1" style={{ fontWeight: 700, color: colors.primary }}>
                            {milestone.title}
                          </h3>
                          <p className="text-sm" style={{ color: '#BF3131' }}>
                            {milestone.desc}
                          </p>
                        </div>
                      </div>

                      {/* Stats badge */}
                      <div 
                        className="text-sm flex-shrink-0"
                        style={{ color: '#7D0A0A', fontWeight: 700 }}
                      >
                        {milestone.stats}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Journey Continues */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative flex items-center gap-4 mt-6"
              >
                {/* Animated growing icon */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg"
                  style={{ 
                    backgroundColor: '#BF3131',
                    boxShadow: '0 0 20px rgba(191, 49, 49, 0.3)'
                  }}
                >
                  <TrendingUp className="text-white" size={24} />
                </motion.div>

                {/* Continuation message */}
                <motion.div
                  className="flex-1 bg-gradient-to-r from-red-50 to-white rounded-2xl p-4 border-2 border-dashed"
                  style={{ borderColor: '#BF3131' }}
                >
                  <div className="flex items-center gap-3">
                    <Sparkles size={20} style={{ color: '#BF3131' }} />
                    <div>
                      <h3 className="text-base mb-1" style={{ fontWeight: 700, color: colors.primary }}>
                        Journey Continues...
                      </h3>
                      <p className="text-sm" style={{ color: '#7D0A0A' }}>
                        Growing forward with innovation and excellence
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles size={18} style={{ color: '#BF3131' }} />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right: Commitment Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-fit sticky top-24"
          >
            {/* Commitment Card */}
            <div 
              className="bg-gradient-to-br rounded-2xl p-6 border shadow-lg"
              style={{ 
                borderColor: `${colors.primary}15`,
                background: `linear-gradient(135deg, ${colors.primary}05 0%, ${colors.accent}08 100%)`
              }}
            >
              <div className="text-center mb-5">
                <div 
                  className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.accent }}
                >
                  <Heart className="text-white" size={28} />
                </div>
                <h2 className="text-2xl mb-2" style={{ fontWeight: 700, color: colors.primary }}>
                  Our Commitment
                </h2>
                <p className="text-sm text-gray-600">
                  Values that drive our excellence
                </p>
              </div>

              <div className="space-y-3">
                {commitments.map((commitment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-all"
                    style={{ borderColor: `${colors.accent}20` }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${colors.accent}15` }}
                      >
                        <commitment.icon size={20} style={{ color: colors.accent }} />
                      </div>
                      <div>
                        <h3 className="text-sm mb-1" style={{ fontWeight: 700, color: colors.text }}>
                          {commitment.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {commitment.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Future Goals - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl p-6 shadow-xl"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` 
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>
            
            {/* Floating shapes */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-20 w-20 h-20 rounded-full border-2 border-white/20"
            />
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 left-20 w-16 h-16 rounded-full border-2 border-white/20"
            />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl text-white mb-2" style={{ fontWeight: 800 }}>
                Future Goals <span style={{ color: colors.accent }}>2025+</span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-1">
                Upcoming Enhancements
              </p>
              <p className="text-sm text-white/80 max-w-2xl mx-auto">
                Continuing our mission to transform urban governance across India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
              {upcomingEnhancements.map((enhancement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3  transition-all"
                >
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                    style={{ backgroundColor: colors.accent }}
                  />
                  <p className="text-sm leading-relaxed" style={{ fontWeight: 600, color: "white" }}>
                    {enhancement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}