import { motion } from "motion/react";
import { Target, Award, Users, TrendingUp, Building2, Globe, CheckCircle, Zap, Sparkles } from "lucide-react";
import { useThemeColors } from "./useThemeColors";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Footer } from "./Footer";

export function AboutPage() {
  const { colors } = useThemeColors();
  
  const stats = [
    { number: "100+", label: "Urban Local Bodies", icon: Building2 },
    { number: "50L+", label: "Properties Surveyed", icon: Globe },
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "800+", label: "Team Members", icon: Users },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      desc: "Revolutionize urban governance through technology",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Highest quality services across all projects",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Partner with ULBs to solve unique challenges",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      desc: "Cutting-edge technology solutions",
    },
  ];

  const whyChooseUs = [
    "25+ years of proven expertise in municipal services",
    "100+ successful ULB implementations across Maharashtra",
    "50+ lakh properties accurately surveyed and digitized",
    "Advanced GIS mapping and mobile technology",
    "Seamless integration with government portals",
    "Dedicated support and continuous innovation"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative pt-20 sm:pt-24 md:pt-28 h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
                      src="/image_data/Website_Hero_Section/about.jpg"
            alt="City Governance Technology Background"
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
              Empowering
              <br />
              <span style={{ color: "white" }}>Urban India</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Leading the transformation of municipal governance with innovative technology, 
              trusted expertise, and unwavering commitment to excellence
            </motion.p>

            {/* Stats Row */}
     
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <div className="w-16 h-1 mb-3 rounded-full" style={{ backgroundColor: colors.accent }} />
              <h2 className="text-3xl mb-4" style={{ fontWeight: 700, color: colors.text }}>
                Our Story
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Since our establishment, we have been at the forefront of transforming municipal governance across Maharashtra. With over 25 years of experience, we have successfully implemented comprehensive property tax surveys and IT solutions for more than 100 Urban Local Bodies.
              </p>
              <p>
                Our journey began with a simple vision: to modernize and streamline municipal operations through technology. Today, we are proud to have surveyed over 50 lakh properties, serving 8+ Municipal Corporations and establishing ourselves as Maharashtra's most trusted municipal service provider.
              </p>
              <p className="px-6 py-4 bg-gray-50 rounded-xl border-l-4 italic" style={{ borderLeftColor: colors.primary }}>
                "Transforming urban governance through innovation, dedication, and excellence"
              </p>
              <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                <div className="flex items-start gap-3">
                  <Zap size={24} style={{ color: colors.accent }} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-2" style={{ fontWeight: 600, color: colors.text }}>
                      Integrated with Major Portals
                    </h4>
                    <p className="text-sm text-gray-600">
                      Our systems seamlessly integrate with the IGR (Inspector General of Registration) and Aaple Sarkar Portal, ensuring efficient data flow and compliance with government standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <h2 className="text-3xl mb-4" style={{ fontWeight: 700, color: colors.text }}>
                Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 bg-gray-50 rounded-xl border-2 border-transparent hover:border-gray-200 transition-all"
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${colors.accent}20` }}
                  >
                    <value.icon size={24} style={{ color: colors.accent }} />
                  </div>
                  <h3 className="text-xl mb-2" style={{ fontWeight: 600, color: colors.text }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200"
        >
          <h2 className="text-3xl mb-6 text-center" style={{ fontWeight: 700, color: colors.text }}>
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={20} style={{ color: colors.accent }} className="flex-shrink-0 mt-1" />
                <p className="text-gray-700">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}